<script setup lang="ts">
import { KDatePicker } from '@kuina-ui/vue'
import { ref } from 'vue'

const dueDate = ref('2026-11-26')
</script>

<template>
  <KDatePicker
    v-model="dueDate"
    label="Échéance"
    locale="fr-FR"
    :week-starts-on="1"
    placeholder="Choisir une date"
    clear-label="Effacer la date"
    previous-month-label="Mois précédent"
    next-month-label="Mois suivant"
    clearable
  />
</template>
