<script setup lang="ts">
import { KPagination } from '@kuina-ui/vue'
import { ref } from 'vue'

const page = ref(3)
const rowsPerPage = ref(10)
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <KPagination v-model:page="page" v-model:rows-per-page="rowsPerPage" :total-row-count="128" />
    <p class="text-sm text-muted">Page {{ page }}, {{ rowsPerPage }} rows per page.</p>
  </div>
</template>
