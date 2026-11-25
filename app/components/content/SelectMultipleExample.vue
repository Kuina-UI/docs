<script setup lang="ts">
import { KSelect } from '@kuina-ui/vue'
import { ref } from 'vue'

const categoryOptions = ['Groceries', 'Dining', 'Transport', 'Travel', 'Subscriptions', 'Utilities']

const categories = ref(['Groceries', 'Dining', 'Transport'])
const countedCategories = ref(['Groceries', 'Dining', 'Transport'])
</script>

<template>
  <div class="grid w-full gap-4 sm:grid-cols-2">
    <KSelect v-model="categories" label="Categories" :options="categoryOptions" multiple />
    <KSelect
      v-model="countedCategories"
      label="Categories"
      :options="categoryOptions"
      multiple
      :selection-label="(selectedCategories) => `${selectedCategories.length} categories`"
    />
  </div>
</template>
