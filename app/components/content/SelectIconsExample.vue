<script setup lang="ts">
import { KSelect } from '@kuina-ui/vue'
import { Calendar, ChevronDown, Tag } from 'lucide-vue-next'
import { ref } from 'vue'

const dateRangeOptions = [
  { value: '7-days', label: 'Last 7 days' },
  { value: '30-days', label: 'Last 30 days' },
  { value: '90-days', label: 'Last 90 days' },
]

const categoryOptions = ['Groceries', 'Dining', 'Transport', 'Travel']

const dateRange = ref('30-days')
const category = ref('Dining')
const otherCategory = ref('Travel')
</script>

<template>
  <div class="grid w-full gap-4 sm:grid-cols-3">
    <KSelect v-model="dateRange" label="Date range" :options="dateRangeOptions" :leading-icon="Calendar" />
    <KSelect
      v-model="category"
      label="Category"
      :options="categoryOptions"
      :leading-icon="Tag"
      :trailing-icon="ChevronDown"
      clearable
    />
    <KSelect v-model="otherCategory" label="Category" :options="categoryOptions" :trailing-icon="null" clearable />
  </div>
</template>
