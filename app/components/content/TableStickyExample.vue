<script setup lang="ts">
import { defineTableColumns, KTable } from '@kuina-ui/vue'
import { type ExampleTransaction, exampleTransactions, signedCurrencyFormat } from '~/utils/exampleTransactions'

const transactionColumns = defineTableColumns<ExampleTransaction>([
  { key: 'merchant', label: 'Merchant', footer: 'Total' },
  { key: 'category', label: 'Category' },
  { key: 'date', label: 'Date', type: 'date' },
  {
    key: 'amount',
    label: 'Amount',
    type: 'decimal',
    formatOptions: signedCurrencyFormat,
    footer: (transactions) => transactions.reduce((amountTotal, transaction) => amountTotal + transaction.amount, 0),
  },
])
</script>

<template>
  <KTable
    class="w-full"
    caption="November transactions"
    locale="en-US"
    :columns="transactionColumns"
    :rows="exampleTransactions"
    sticky
    max-height="16rem"
  />
</template>
