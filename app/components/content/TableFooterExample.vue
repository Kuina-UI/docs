<script setup lang="ts">
import { defineTableColumns, KTable } from '@kuina-ui/vue'

interface BudgetLine {
  id: string
  category: string
  budget: number
  spent: number
}

const budgetLines: BudgetLine[] = [
  { id: 'housing', category: 'Housing', budget: 1800, spent: 1800 },
  { id: 'groceries', category: 'Groceries', budget: 600, spent: 482.35 },
  { id: 'transport', category: 'Transport', budget: 250, spent: 274.1 },
  { id: 'leisure', category: 'Leisure', budget: 300, spent: 126.4 },
]

const currencyFormat = { style: 'currency', currency: 'USD' } as const

const budgetColumns = defineTableColumns<BudgetLine>([
  { key: 'category', label: 'Category', footer: 'Total' },
  {
    key: 'budget',
    label: 'Budget',
    type: 'decimal',
    formatOptions: currencyFormat,
    footer: (lines) => lines.reduce((budgetTotal, line) => budgetTotal + line.budget, 0),
  },
  {
    key: 'spent',
    label: 'Spent',
    type: 'decimal',
    formatOptions: currencyFormat,
    footer: (lines) => lines.reduce((spentTotal, line) => spentTotal + line.spent, 0),
  },
])
</script>

<template>
  <KTable class="w-full" caption="November budget" locale="en-US" :columns="budgetColumns" :rows="budgetLines" />
</template>
