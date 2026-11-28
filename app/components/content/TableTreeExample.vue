<script setup lang="ts">
import { defineTableColumns, KInput, KTable } from '@kuina-ui/vue'
import { Search } from 'lucide-vue-next'
import { ref } from 'vue'

interface BudgetLine {
  id: string
  category: string
  budget: number
  spent: number
  used: number
  children?: BudgetLine[]
}

const budgetLines: BudgetLine[] = [
  {
    id: 'home',
    category: 'Home',
    budget: 2150,
    spent: 2098.6,
    used: 0.976,
    children: [
      { id: 'rent', category: 'Rent', budget: 1800, spent: 1800, used: 1 },
      {
        id: 'utilities',
        category: 'Utilities',
        budget: 350,
        spent: 298.6,
        used: 0.853,
        children: [
          { id: 'electricity', category: 'Electricity', budget: 120, spent: 96.4, used: 0.803 },
          { id: 'internet', category: 'Internet', budget: 80, spent: 80, used: 1 },
          { id: 'water', category: 'Water', budget: 150, spent: 122.2, used: 0.815 },
        ],
      },
    ],
  },
  {
    id: 'transport',
    category: 'Transport',
    budget: 250,
    spent: 274.1,
    used: 1.096,
    children: [
      { id: 'fuel', category: 'Fuel', budget: 150, spent: 182.5, used: 1.217 },
      { id: 'parking', category: 'Parking', budget: 100, spent: 91.6, used: 0.916 },
    ],
  },
  { id: 'leisure', category: 'Leisure', budget: 300, spent: 126.4, used: 0.421 },
]

const currencyFormat = { style: 'currency', currency: 'USD' } as const

const budgetColumns = defineTableColumns<BudgetLine>([
  { key: 'category', label: 'Category' },
  { key: 'budget', label: 'Budget', type: 'decimal', formatOptions: currencyFormat, sortable: true },
  { key: 'spent', label: 'Spent', type: 'decimal', formatOptions: currencyFormat, sortable: true },
  { key: 'used', label: 'Used', type: 'percentage', sortable: true },
])

const expandedBudgetLineIds = ref<string[]>(['home'])
const searchQuery = ref('')
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <KInput
      v-model="searchQuery"
      class="w-full sm:w-64"
      type="search"
      placeholder="Search, like “water”"
      aria-label="Search the budget"
      :leading-icon="Search"
      clearable
    />
    <KTable
      v-model:expanded-rows="expandedBudgetLineIds"
      caption="November budget by category"
      locale="en-US"
      :columns="budgetColumns"
      :rows="budgetLines"
      :search-query="searchQuery"
    />
  </div>
</template>
