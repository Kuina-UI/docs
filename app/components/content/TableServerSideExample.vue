<script setup lang="ts">
import { defineTableColumns, KInput, KPagination, KTable, type TableSort } from '@kuina-ui/vue'
import { Search } from 'lucide-vue-next'
import { ref, shallowRef, watch } from 'vue'
import { type ExampleTransaction, exampleTransactions, signedCurrencyFormat } from '~/utils/exampleTransactions'

interface TransactionPage {
  rows: ExampleTransaction[]
  total: number
}

interface TransactionPageRequest {
  search: string
  sort: TableSort
  page: number
  rowsPerPage: number
}

const transactionColumns = defineTableColumns<ExampleTransaction>([
  { key: 'merchant', label: 'Merchant', sortable: true },
  { key: 'date', label: 'Date', type: 'date', sortable: true },
  { key: 'amount', label: 'Amount', type: 'decimal', formatOptions: signedCurrencyFormat, sortable: true },
])

const searchQuery = ref('')
const sort = ref<TableSort>([])
const page = ref(1)
const rowsPerPage = ref(5)
const transactions = shallowRef<ExampleTransaction[]>([])
const totalTransactionCount = ref(0)
const isLoading = ref(false)

function fetchTransactionPageFromFakeServer(pageRequest: TransactionPageRequest) {
  return new Promise<TransactionPage>((resolve) => {
    setTimeout(() => {
      const [sortEntry] = pageRequest.sort
      const matchingTransactions = exampleTransactions.filter((transaction) =>
        transaction.merchant.toLowerCase().includes(pageRequest.search.toLowerCase()),
      )

      if (sortEntry) {
        const sortKey = sortEntry.key as keyof ExampleTransaction
        const sortSign = sortEntry.direction === 'ascending' ? 1 : -1

        matchingTransactions.sort((firstTransaction, secondTransaction) =>
          firstTransaction[sortKey] > secondTransaction[sortKey] ? sortSign : -sortSign,
        )
      }

      const firstRowIndex = (pageRequest.page - 1) * pageRequest.rowsPerPage

      resolve({
        rows: matchingTransactions.slice(firstRowIndex, firstRowIndex + pageRequest.rowsPerPage),
        total: matchingTransactions.length,
      })
    }, 600)
  })
}

let latestRequestNumber = 0

watch(
  [searchQuery, sort, page, rowsPerPage],
  async () => {
    const requestNumber = ++latestRequestNumber
    isLoading.value = true
    const transactionPage = await fetchTransactionPageFromFakeServer({
      search: searchQuery.value,
      sort: sort.value,
      page: page.value,
      rowsPerPage: rowsPerPage.value,
    })

    if (requestNumber !== latestRequestNumber) return

    transactions.value = transactionPage.rows
    totalTransactionCount.value = transactionPage.total
    isLoading.value = false
  },
  { immediate: true },
)
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <KInput
      v-model.lazy="searchQuery"
      class="w-full sm:w-64"
      type="search"
      placeholder="Search, then press Enter"
      aria-label="Search transactions"
      :leading-icon="Search"
    />
    <KTable
      v-model:sort="sort"
      v-model:page="page"
      caption="Recent transactions"
      locale="en-US"
      :columns="transactionColumns"
      :rows="transactions"
      :loading="isLoading"
      server-side
    />
    <KPagination
      v-model:page="page"
      v-model:rows-per-page="rowsPerPage"
      :total-row-count="totalTransactionCount"
      :rows-per-page-options="[5, 10, 25]"
    />
  </div>
</template>
