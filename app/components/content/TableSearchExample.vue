<script setup lang="ts">
import { defineTableColumns, KInput, KSelect, KTable } from '@kuina-ui/vue'
import { Search } from 'lucide-vue-next'
import { ref } from 'vue'
import { type ExampleTransaction, exampleTransactions, signedCurrencyFormat } from '~/utils/exampleTransactions'

const transactionColumns = defineTableColumns<ExampleTransaction>([
  { key: 'merchant', label: 'Merchant' },
  { key: 'category', label: 'Category', searchable: false },
  { key: 'date', label: 'Date', type: 'date' },
  { key: 'amount', label: 'Amount', type: 'decimal', formatOptions: signedCurrencyFormat },
])

const categoryOptions = ['Food & drink', 'Groceries', 'Salary', 'Subscriptions', 'Travel']

const searchQuery = ref('')
const categoryFilter = ref<string>()
const matchingTransactionCount = ref(0)
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex flex-wrap items-center gap-2">
      <KInput
        v-model="searchQuery"
        class="w-full sm:w-64"
        type="search"
        placeholder="Search transactions"
        aria-label="Search transactions"
        :leading-icon="Search"
        clearable
      />
      <KSelect v-model="categoryFilter" label="Category" :options="categoryOptions" :block="false" clearable />
      <span class="ms-auto text-sm text-muted">{{ matchingTransactionCount }} transactions</span>
    </div>

    <KTable
      v-model:matching-row-count="matchingTransactionCount"
      caption="Recent transactions"
      locale="en-US"
      :columns="transactionColumns"
      :rows="exampleTransactions"
      :search-query="searchQuery"
      :column-filters="{ category: categoryFilter }"
    />
  </div>
</template>
