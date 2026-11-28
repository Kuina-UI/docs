<script setup lang="ts">
import { defineTableColumns, KTable } from '@kuina-ui/vue'

interface Transaction {
  id: string
  merchant: string
  category: string
  amount: number
}

const categories = ['Food & drink', 'Travel', 'Groceries', 'Subscriptions']

const transactions: Transaction[] = Array.from({ length: 10000 }, (_unused, transactionIndex) => ({
  id: `txn-${transactionIndex + 1}`,
  merchant: `Merchant ${transactionIndex + 1}`,
  category: categories[transactionIndex % categories.length] ?? 'Food & drink',
  amount: -((transactionIndex % 97) + 1.25),
}))

const transactionColumns = defineTableColumns<Transaction>([
  { key: 'merchant', label: 'Merchant' },
  { key: 'category', label: 'Category' },
  { key: 'amount', label: 'Amount', type: 'decimal', formatOptions: { style: 'currency', currency: 'USD' } },
])
</script>

<template>
  <KTable
    class="w-full"
    caption="Ten thousand transactions"
    locale="en-US"
    max-height="20rem"
    :columns="transactionColumns"
    :rows="transactions"
    :row-height="44"
    sticky
    line-numbers
    virtualize
  />
</template>
