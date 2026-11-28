<script setup lang="ts">
import { defineTableColumns, KTable } from '@kuina-ui/vue'
import { ref } from 'vue'

interface AccountSpending {
  id: string
  account: string
  jan: number
  feb: number
  mar: number
  apr: number
  may: number
  jun: number
  jul: number
  aug: number
  sep: number
  oct: number
  nov: number
  dec: number
  total: number
}

const accountSpending: AccountSpending[] = [
  { id: 'checking', account: 'Everyday checking', jan: 2140, feb: 1985, mar: 2310, apr: 2050, may: 2275, jun: 2420, jul: 2610, aug: 2380, sep: 2190, oct: 2265, nov: 2045, dec: 2890, total: 27560 },
  { id: 'credit-card', account: 'Rewards credit card', jan: 860, feb: 745, mar: 920, apr: 1010, may: 880, jun: 1240, jul: 1385, aug: 1120, sep: 905, oct: 970, nov: 1045, dec: 1630, total: 12710 },
  { id: 'joint', account: 'Joint account', jan: 1200, feb: 1200, mar: 1250, apr: 1180, may: 1300, jun: 1420, jul: 1510, aug: 1290, sep: 1240, oct: 1275, nov: 1310, dec: 1650, total: 15825 },
]

const wholeCurrencyFormat = { style: 'currency', currency: 'USD', maximumFractionDigits: 0 } as const

const monthKeys = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'] as const

const spendingColumns = defineTableColumns<AccountSpending>([
  { key: 'account', label: 'Account', pinned: 'start' },
  ...monthKeys.map((monthKey) => ({
    key: monthKey,
    label: monthKey.charAt(0).toUpperCase() + monthKey.slice(1),
    type: 'decimal',
    formatOptions: wholeCurrencyFormat,
  })),
  { key: 'total', label: 'Total', type: 'decimal', formatOptions: wholeCurrencyFormat, pinned: 'end' },
])

const selectedAccountIds = ref<string[]>([])
</script>

<template>
  <div class="w-full max-w-2xl">
    <KTable
      v-model:selected-rows="selectedAccountIds"
      caption="Monthly spending by account, 2026"
      locale="en-US"
      :columns="spendingColumns"
      :rows="accountSpending"
      selectable
    />
  </div>
</template>
