<script setup lang="ts">
import { defineTableColumns, defineTableColumnTypes, KTable } from '@kuina-ui/vue'
import { type ExampleTransaction, exampleTransactions, signedCurrencyFormat } from '~/utils/exampleTransactions'

const statusOrder = { Failed: 0, Pending: 1, Completed: 2 }

const transactionColumnTypes = defineTableColumnTypes({
  status: {
    align: 'center',
    format: (status) => String(status).toUpperCase(),
    compare: (firstStatus, secondStatus) =>
      statusOrder[firstStatus as keyof typeof statusOrder] - statusOrder[secondStatus as keyof typeof statusOrder],
  },
})

const transactionColumns = defineTableColumns<ExampleTransaction>([
  { key: 'merchant', label: 'Merchant' },
  { key: 'status', label: 'Status', type: 'status', sortable: true },
  { key: 'amount', label: 'Amount', type: 'decimal', formatOptions: signedCurrencyFormat },
])
</script>

<template>
  <KTable
    class="w-full"
    caption="Recent transactions"
    locale="en-US"
    :columns="transactionColumns"
    :column-types="transactionColumnTypes"
    :rows="exampleTransactions.slice(0, 5)"
    :sort="[{ key: 'status', direction: 'ascending' }]"
  />
</template>
