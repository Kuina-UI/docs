<script setup lang="ts">
import { defineTableColumns, KTable } from '@kuina-ui/vue'

interface Transaction {
  id: string
  merchant: string
  date: string
  amount: number
  account: string
  reference: string
  note: string
}

const transactions: Transaction[] = [
  { id: 'txn-1048', merchant: 'Corner Coffee', date: '2026-11-24', amount: -6.75, account: 'Everyday checking', reference: 'CC-20961', note: 'Morning coffee' },
  { id: 'txn-1047', merchant: 'Acme Corp', date: '2026-11-21', amount: 4850, account: 'Everyday checking', reference: 'PAY-2026-11', note: 'November salary' },
  { id: 'txn-1046', merchant: 'Streamly', date: '2026-11-19', amount: -11.99, account: 'Rewards credit card', reference: 'STR-88412', note: 'Family plan' },
  { id: 'txn-1045', merchant: 'Skyway Airlines', date: '2026-11-16', amount: -428.4, account: 'Rewards credit card', reference: 'SKY-5UX2Q', note: 'Card declined, retry scheduled' },
]

const transactionColumns = defineTableColumns<Transaction>([
  { key: 'merchant', label: 'Merchant' },
  { key: 'date', label: 'Date', type: 'date' },
  {
    key: 'amount',
    label: 'Amount',
    type: 'decimal',
    formatOptions: { style: 'currency', currency: 'USD', signDisplay: 'exceptZero' },
  },
])
</script>

<template>
  <KTable
    class="w-full"
    caption="Recent transactions"
    locale="en-US"
    :columns="transactionColumns"
    :rows="transactions"
    hoverable
  >
    <template #row-preview="{ row }">
      <dl class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 p-3 text-sm">
        <dt class="text-muted">Account</dt>
        <dd>{{ row.account }}</dd>
        <dt class="text-muted">Reference</dt>
        <dd>{{ row.reference }}</dd>
        <dt class="text-muted">Note</dt>
        <dd>{{ row.note }}</dd>
      </dl>
    </template>
  </KTable>
</template>
