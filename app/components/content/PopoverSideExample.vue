<script setup lang="ts">
import { KButton, KPopover } from '@kuina-ui/vue'

const popoverSides = ['top', 'right', 'bottom', 'left'] as const
</script>

<template>
  <div class="flex flex-wrap items-center gap-4">
    <KPopover v-for="popoverSide in popoverSides" :key="popoverSide" :label="popoverSide" :side="popoverSide" min-width="auto">
      <KButton :label="popoverSide" variant="outline" color="gray" class="capitalize" />
      <template #content>
        <p class="px-3 py-2 whitespace-nowrap">Opens {{ popoverSide }}</p>
      </template>
    </KPopover>
  </div>
</template>
