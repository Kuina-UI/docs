<script setup lang="ts">
import { KButton, KTooltip } from '@kuina-ui/vue'
import { ref } from 'vue'

const isTooltipOpen = ref(false)
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <KTooltip v-model:open="isTooltipOpen" content="Balances are refreshed every 15 minutes.">
      <KButton label="Refresh balances" variant="outline" color="gray" />
    </KTooltip>
    <p class="text-sm text-muted">The tooltip is {{ isTooltipOpen ? 'open' : 'closed' }}.</p>
  </div>
</template>
