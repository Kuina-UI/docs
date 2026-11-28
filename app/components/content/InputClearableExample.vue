<script setup lang="ts">
import { KInput } from '@kuina-ui/vue'
import { Search } from 'lucide-vue-next'
import { ref } from 'vue'

const searchQuery = ref('Coffee')
const roundedSearchQuery = ref('Coffee')
</script>

<template>
  <div class="grid w-full gap-4 sm:grid-cols-2">
    <KInput v-model="searchQuery" type="search" aria-label="Search transactions" :leading-icon="Search" clearable />
    <KInput
      v-model="roundedSearchQuery"
      type="search"
      variant="soft"
      aria-label="Search transactions"
      :pill="false"
      clearable
    />
  </div>
</template>
