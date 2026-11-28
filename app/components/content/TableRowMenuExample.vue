<script setup lang="ts">
import { defineTableColumns, KTable, type MenuEntry } from '@kuina-ui/vue'
import { Copy, Eye, Trash2 } from 'lucide-vue-next'
import { ref } from 'vue'
import { type ExampleTransaction, exampleTransactions, signedCurrencyFormat } from '~/utils/exampleTransactions'

const transactions = ref(exampleTransactions.slice(0, 5))
const lastAction = ref('Right-click a row')

const transactionColumns = defineTableColumns<ExampleTransaction>([
  { key: 'merchant', label: 'Merchant' },
  { key: 'date', label: 'Date', type: 'date' },
  { key: 'amount', label: 'Amount', type: 'decimal', formatOptions: signedCurrencyFormat },
])

function buildTransactionMenu(transaction: ExampleTransaction): MenuEntry[] {
  return [
    { label: 'View details', icon: Eye, onSelect: () => (lastAction.value = `Opened ${transaction.merchant}`) },
    { label: 'Copy amount', icon: Copy, onSelect: () => (lastAction.value = `Copied ${transaction.amount}`) },
    { separator: true },
    {
      label: 'Delete',
      icon: Trash2,
      color: 'danger',
      onSelect: () => {
        transactions.value = transactions.value.filter((shownTransaction) => shownTransaction.id !== transaction.id)
        lastAction.value = `Deleted ${transaction.merchant}`
      },
    },
  ]
}
</script>

<template>
  <div class="flex w-full flex-col gap-3">
    <KTable
      caption="Recent transactions"
      locale="en-US"
      :columns="transactionColumns"
      :rows="transactions"
      :row-menu="buildTransactionMenu"
    />
    <p class="text-sm text-muted">{{ lastAction }}</p>
  </div>
</template>
