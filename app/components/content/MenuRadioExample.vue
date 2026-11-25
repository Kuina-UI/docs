<script setup lang="ts">
import { KMenu, type MenuEntry, type MenuItem } from '@kuina-ui/vue'
import { ChevronDown } from 'lucide-vue-next'
import { computed, ref } from 'vue'

const reportPeriods = ['Any time', 'Today', 'Last 7 days', 'Last 30 days', 'Last 3 months']

const selectedPeriod = ref('Any time')

const periodItems = computed<MenuEntry[]>(() =>
  reportPeriods.map((reportPeriod): MenuItem => ({
    label: reportPeriod,
    type: 'radio',
    checked: selectedPeriod.value === reportPeriod,
    disabled: reportPeriod === 'Today',
    onSelect: () => {
      selectedPeriod.value = reportPeriod
    },
  })),
)
</script>

<template>
  <KMenu
    :label="selectedPeriod"
    :items="periodItems"
    :trigger="{ variant: 'soft', trailingIcon: ChevronDown }"
    width="auto"
  />
</template>
