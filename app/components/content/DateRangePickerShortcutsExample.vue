<script setup lang="ts">
import { type DateRange, type DateRangeShortcut, KDateRangePicker } from '@kuina-ui/vue'
import { ref } from 'vue'

function findIsoDateDaysAgo(dayCount: number) {
  const pastDate = new Date()
  pastDate.setDate(pastDate.getDate() - dayCount)
  return [pastDate.getFullYear(), pastDate.getMonth() + 1, pastDate.getDate()]
    .map((datePart) => String(datePart).padStart(2, '0'))
    .join('-')
}

const today = findIsoDateDaysAgo(0)

const reportShortcuts: DateRangeShortcut[] = [
  { label: 'Today', value: [today, today] },
  { label: 'Yesterday', value: [findIsoDateDaysAgo(1), findIsoDateDaysAgo(1)] },
  { label: 'Last 7 days', value: [findIsoDateDaysAgo(7), today] },
  { label: 'Last 30 days', value: [findIsoDateDaysAgo(30), today] },
]

const reportPeriod = ref<DateRange>()
</script>

<template>
  <KDateRangePicker v-model="reportPeriod" label="Report period" :shortcuts="reportShortcuts" />
</template>
