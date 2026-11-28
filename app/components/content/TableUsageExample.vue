<script setup lang="ts">
import { defineTableColumns, KBadge, KTable } from '@kuina-ui/vue'
import {
  type ExampleTransaction,
  exampleStatusColors,
  exampleTransactions,
  signedCurrencyFormat,
} from '~/utils/exampleTransactions'

const transactionColumns = defineTableColumns<ExampleTransaction>([
  { key: 'merchant', label: 'Merchant' },
  { key: 'date', label: 'Date', type: 'date' },
  { key: 'status', label: 'Status' },
  { key: 'amount', label: 'Amount', type: 'decimal', formatOptions: signedCurrencyFormat },
])
</script>

<template>
  <KTable
    class="w-full"
    caption="Recent transactions"
    locale="en-US"
    :columns="transactionColumns"
    :rows="exampleTransactions.slice(0, 5)"
  >
    <template #merchant-cell="{ row }">
      <span class="block font-medium">{{ row.merchant }}</span>
      <span class="block text-muted">{{ row.category }}</span>
    </template>

    <template #status-cell="{ row }">
      <KBadge :label="row.status" :color="exampleStatusColors[row.status]" dot />
    </template>
  </KTable>
</template>
