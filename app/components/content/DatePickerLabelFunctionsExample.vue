<script setup lang="ts">
import { KDatePicker, type Weekday } from '@kuina-ui/vue'
import { ref } from 'vue'

const dueDate = ref('2026-11-26')

const weekdayInitials = ['D', 'L', 'M', 'M', 'J', 'V', 'S']
const monthNames = ['Janv.', 'Févr.', 'Mars', 'Avr.', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.']

function formatMonthLabel(isoMonth: string) {
  const [year, monthNumber] = isoMonth.split('-').map(Number)
  return `${monthNames[monthNumber - 1]} ${year}`
}
</script>

<template>
  <KDatePicker
    v-model="dueDate"
    label="Échéance"
    locale="fr-FR"
    :week-starts-on="1"
    :weekday-label="(weekday: Weekday) => weekdayInitials[weekday]"
    :month-label="formatMonthLabel"
    :selection-label="(isoDate: string) => isoDate.split('-').reverse().join('.')"
  />
</template>
