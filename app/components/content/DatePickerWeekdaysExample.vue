<script setup lang="ts">
import { KDatePicker } from '@kuina-ui/vue'
import { ref } from 'vue'

const transferDate = ref<string>()

function isWeekend(isoDate: string) {
  const weekday = new Date(`${isoDate}T00:00:00Z`).getUTCDay()
  return weekday === 0 || weekday === 6
}
</script>

<template>
  <KDatePicker v-model="transferDate" label="Transfer date" placeholder="Pick a weekday" :is-date-disabled="isWeekend" />
</template>
