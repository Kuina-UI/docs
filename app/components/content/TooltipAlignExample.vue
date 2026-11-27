<script setup lang="ts">
import { KButton, KTooltip } from '@kuina-ui/vue'

const tooltipAlignments = ['start', 'center', 'end'] as const
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <KTooltip
      v-for="tooltipAlign in tooltipAlignments"
      :key="tooltipAlign"
      content="Balances are refreshed every 15 minutes."
      :align="tooltipAlign"
    >
      <KButton :label="tooltipAlign" variant="outline" color="gray" class="capitalize" />
    </KTooltip>
  </div>
</template>
