<script setup lang="ts">
import { defineTableColumns, KTable } from '@kuina-ui/vue'
import { ref } from 'vue'

interface BudgetLine {
  id: string
  category: string
  budget: number
  spent: number
}

const budgetLines = ref<BudgetLine[]>([
  { id: 'housing', category: 'Housing', budget: 1800, spent: 1800 },
  { id: 'groceries', category: 'Groceries', budget: 600, spent: 482.35 },
  { id: 'transport', category: 'Transport', budget: 250, spent: 274.1 },
  { id: 'leisure', category: 'Leisure', budget: 300, spent: 126.4 },
])

const currencyFormat = { style: 'currency', currency: 'USD' } as const

const budgetColumns = defineTableColumns<BudgetLine>([
  { key: 'category', label: 'Category' },
  { key: 'budget', label: 'Budget', type: 'decimal', formatOptions: currencyFormat },
  { key: 'spent', label: 'Spent', type: 'decimal', formatOptions: currencyFormat },
])
</script>

<template>
  <KTable
    v-model:rows="budgetLines"
    class="w-full"
    caption="Budget priorities"
    locale="en-US"
    :columns="budgetColumns"
    reorderable
  />
</template>
