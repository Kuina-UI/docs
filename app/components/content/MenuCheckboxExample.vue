<script setup lang="ts">
import { KMenu, type MenuEntry } from '@kuina-ui/vue'
import { ChevronDown } from 'lucide-vue-next'
import { computed, reactive } from 'vue'

const chartOptions = reactive({ gridLines: true, labels: false, shadows: true })

function toggleChartOption(chartOptionName: keyof typeof chartOptions) {
  chartOptions[chartOptionName] = !chartOptions[chartOptionName]
}

const chartOptionItems = computed<MenuEntry[]>(() => [
  {
    label: 'Show grid lines',
    type: 'checkbox',
    checked: chartOptions.gridLines,
    onSelect: () => toggleChartOption('gridLines'),
  },
  { label: 'Display labels', type: 'checkbox', checked: chartOptions.labels, onSelect: () => toggleChartOption('labels') },
  { label: 'Enable shadows', type: 'checkbox', checked: chartOptions.shadows, onSelect: () => toggleChartOption('shadows') },
  { label: 'Compare to last year', type: 'checkbox', disabled: true },
])
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <KMenu label="Chart options" :items="chartOptionItems" :trigger="{ variant: 'soft', trailingIcon: ChevronDown }" />
    <KMenu
      label="Chart options"
      :items="chartOptionItems"
      :trigger="{ variant: 'soft', trailingIcon: ChevronDown }"
      indicator-position="start"
      indicator-variant="ghost"
    />
  </div>
</template>
