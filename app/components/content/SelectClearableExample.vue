<script setup lang="ts">
import { KSelect } from '@kuina-ui/vue'
import { ref } from 'vue'

const categoryOptions = ['Groceries', 'Dining', 'Transport', 'Travel']

const category = ref<string>('Dining')
const categories = ref(['Groceries', 'Travel'])
</script>

<template>
  <div class="grid w-full gap-4 sm:grid-cols-2">
    <KSelect v-model="category" label="Category" :options="categoryOptions" clearable />
    <KSelect v-model="categories" label="Categories" :options="categoryOptions" multiple clearable />
  </div>
</template>
