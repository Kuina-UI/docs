<script setup lang="ts">
import { KDatePicker } from '@kuina-ui/vue'
import { ref } from 'vue'

const isCalendarOpen = ref(false)
const dueDate = ref<string>()
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <KDatePicker v-model="dueDate" v-model:open="isCalendarOpen" label="Due date" />
    <p class="text-sm text-muted">The calendar is {{ isCalendarOpen ? 'open' : 'closed' }}.</p>
  </div>
</template>
