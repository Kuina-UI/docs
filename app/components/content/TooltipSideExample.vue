<script setup lang="ts">
import { KButton, KTooltip } from '@kuina-ui/vue'

const tooltipSides = ['top', 'right', 'bottom', 'left'] as const
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <KTooltip v-for="tooltipSide in tooltipSides" :key="tooltipSide" :content="`Opens ${tooltipSide}`" :side="tooltipSide" compact>
      <KButton :label="tooltipSide" variant="outline" color="gray" class="capitalize" />
    </KTooltip>
  </div>
</template>
