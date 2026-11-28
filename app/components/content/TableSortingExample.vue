<script setup lang="ts">
import { defineTableColumns, KTable, type TableSort } from '@kuina-ui/vue'
import { ref } from 'vue'
import { type ExampleTransaction, exampleTransactions, signedCurrencyFormat } from '~/utils/exampleTransactions'

const transactionColumns = defineTableColumns<ExampleTransaction>([
  { key: 'merchant', label: 'Merchant', sortable: true },
  { key: 'category', label: 'Category', sortable: true },
  { key: 'date', label: 'Date', type: 'date', sortable: true, firstSortDirection: 'descending' },
  { key: 'amount', label: 'Amount', type: 'decimal', formatOptions: signedCurrencyFormat, sortable: true },
])

const transactionSort = ref<TableSort>([
  { key: 'category', direction: 'ascending' },
  { key: 'amount', direction: 'descending' },
])
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <KTable
      v-model:sort="transactionSort"
      caption="Recent transactions"
      locale="en-US"
      :columns="transactionColumns"
      :rows="exampleTransactions"
    />
    <code class="text-xs text-muted">{{ transactionSort }}</code>
  </div>
</template>
