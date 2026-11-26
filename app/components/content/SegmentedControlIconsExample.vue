<script setup lang="ts">
import { KSegmentedControl } from '@kuina-ui/vue'
import { ChartLine, LayoutGrid, List, Table2 } from 'lucide-vue-next'
import { ref } from 'vue'

const reportViewOptions = [
  { value: 'chart', label: 'Chart', icon: ChartLine },
  { value: 'table', label: 'Table', icon: Table2 },
]

const accountLayoutOptions = [
  { value: 'list', label: 'List view', icon: List },
  { value: 'grid', label: 'Grid view', icon: LayoutGrid },
]

const reportView = ref('chart')
const accountLayout = ref('grid')
const roundedAccountLayout = ref('list')
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <KSegmentedControl v-model="reportView" aria-label="Report view" :options="reportViewOptions" />
    <KSegmentedControl v-model="accountLayout" aria-label="Account layout" square :options="accountLayoutOptions" />
    <KSegmentedControl
      v-model="roundedAccountLayout"
      aria-label="Account layout"
      square
      :pill="false"
      :options="accountLayoutOptions"
    />
  </div>
</template>
