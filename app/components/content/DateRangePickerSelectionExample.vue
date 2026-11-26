<script setup lang="ts">
import { type DateRange, type DateRangeShortcut, KDateRangePicker } from '@kuina-ui/vue'
import { ref } from 'vue'

const tripDates = ref<DateRange>(['2026-11-24', '2026-12-05'])

const dayMonthFormat = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' })

function formatTripDates([departureDate, returnDate]: DateRange, activeShortcut?: DateRangeShortcut) {
  if (activeShortcut) return activeShortcut.label

  const nightCount = Math.round((Date.parse(returnDate) - Date.parse(departureDate)) / 86_400_000)
  const [departure, arrival] = [departureDate, returnDate].map((isoDate) =>
    dayMonthFormat.format(new Date(`${isoDate}T00:00:00Z`)),
  )

  return `${departure} – ${arrival} · ${nightCount} nights`
}
</script>

<template>
  <KDateRangePicker v-model="tripDates" label="Trip dates" :selection-label="formatTripDates" />
</template>
