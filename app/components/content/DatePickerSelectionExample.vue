<script setup lang="ts">
import { KDatePicker } from '@kuina-ui/vue'
import { ref } from 'vue'

const deliveryDate = ref('2026-11-26')
const meetingDate = ref('2026-11-26')

const longDateFormat = new Intl.DateTimeFormat('en-US', { weekday: 'short', month: 'short', day: 'numeric', timeZone: 'UTC' })

function formatDeliveryDate(isoDate: string) {
  return `Delivery on ${longDateFormat.format(new Date(`${isoDate}T00:00:00Z`))}`
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <KDatePicker v-model="deliveryDate" label="Delivery date" :selection-label="formatDeliveryDate" />
    <KDatePicker v-model="meetingDate" label="Meeting date">
      <template #selection="{ selectedDate }">
        <span class="flex items-center gap-2">
          {{ selectedDate }}
          <KBadge label="Booked" color="success" size="sm" />
        </span>
      </template>
    </KDatePicker>
  </div>
</template>
