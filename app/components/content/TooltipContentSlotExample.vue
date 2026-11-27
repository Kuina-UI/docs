<script setup lang="ts">
import { KTooltip } from '@kuina-ui/vue'
</script>

<template>
  <p class="text-sm">
    Your
    <KTooltip label="available balance">
      <template #content>
        <span class="block font-medium">$4,280.15 available</span>
        <span class="block text-muted">$312.40 is still pending and has not cleared yet.</span>
      </template>
    </KTooltip>
    is updated every hour.
  </p>
</template>
