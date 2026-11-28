<script setup lang="ts">
import { defineTableColumns, KInput, KTable, type TableSort } from '@kuina-ui/vue'
import { Search } from 'lucide-vue-next'
import { ref, shallowRef, watch } from 'vue'
import { type ExampleTransaction, exampleTransactions, signedCurrencyFormat } from '~/utils/exampleTransactions'

const transactionColumns = defineTableColumns<ExampleTransaction>([
  { key: 'merchant', label: 'Merchant', sortable: true },
  { key: 'date', label: 'Date', type: 'date', sortable: true },
  { key: 'amount', label: 'Amount', type: 'decimal', formatOptions: signedCurrencyFormat, sortable: true },
])

const searchQuery = ref('')
const sort = ref<TableSort>([])
const serverTransactions = shallowRef<ExampleTransaction[]>([])
const isLoading = ref(false)

function fetchTransactionsFromServer(currentSearchQuery: string, currentSort: TableSort) {
  return new Promise<ExampleTransaction[]>((resolve) => {
    setTimeout(() => {
      const [sortEntry] = currentSort
      const matchingTransactions = exampleTransactions.filter((transaction) =>
        transaction.merchant.toLowerCase().includes(currentSearchQuery.toLowerCase()),
      )

      if (sortEntry) {
        const sortKey = sortEntry.key as keyof ExampleTransaction
        const sortSign = sortEntry.direction === 'ascending' ? 1 : -1

        matchingTransactions.sort((firstTransaction, secondTransaction) =>
          firstTransaction[sortKey] > secondTransaction[sortKey] ? sortSign : -sortSign,
        )
      }

      resolve(matchingTransactions.slice(0, 5))
    }, 600)
  })
}

watch(
  [searchQuery, sort],
  async ([currentSearchQuery, currentSort]) => {
    isLoading.value = true
    serverTransactions.value = await fetchTransactionsFromServer(currentSearchQuery, currentSort)
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
      caption="Recent transactions"
      locale="en-US"
      :columns="transactionColumns"
      :rows="serverTransactions"
      :loading="isLoading"
      server-side
    />
  </div>
</template>
