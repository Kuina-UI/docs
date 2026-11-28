<script setup lang="ts">
import { KInput } from '@kuina-ui/vue'
</script>

<template>
  <div class="grid w-full gap-4 sm:grid-cols-2">
    <div class="rounded-md border border-dashed border-line px-8 py-6">
      <p class="mb-4 text-xs text-muted">Default</p>
      <label for="input-default-alignment-example" class="mb-1 block text-sm">Field</label>
      <KInput id="input-default-alignment-example" placeholder="Sample input" />
    </div>
    <div class="rounded-md border border-dashed border-line px-8 py-6">
      <p class="mb-4 text-xs text-muted">optically-align="start"</p>
      <label for="input-start-alignment-example" class="mb-1 block text-sm">Field</label>
      <KInput id="input-start-alignment-example" placeholder="Sample input" optically-align="start" />
    </div>
  </div>
</template>
