<script setup lang="ts">
import { KButton, KPopover } from '@kuina-ui/vue'
import { ref } from 'vue'

const isPopoverOpen = ref(false)
</script>

<template>
  <div class="flex items-center gap-4 text-sm">
    <KPopover v-model:open="isPopoverOpen" label="Sync status" align="start">
      <KButton label="Sync status" variant="outline" color="gray" />
      <template #content>
        <p class="p-3">Your accounts were synced 5 minutes ago.</p>
      </template>
    </KPopover>
    <p>The popover is {{ isPopoverOpen ? 'open' : 'closed' }}.</p>
  </div>
</template>
