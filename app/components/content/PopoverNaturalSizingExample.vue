<script setup lang="ts">
import { KButton, KPopover } from '@kuina-ui/vue'
import { Archive, Copy, FileDown, Flag, Share2, Wrench } from 'lucide-vue-next'

const transactionActions = [
  { label: 'Copy', icon: Copy },
  { label: 'Download receipt', icon: FileDown },
  { label: 'Share', icon: Share2 },
  { label: 'Flag', icon: Flag },
  { label: 'Archive', icon: Archive },
]
</script>

<template>
  <KPopover label="Actions" side="top" align="start" min-width="auto">
    <KButton label="Actions" variant="ghost" :leading-icon="Wrench" />
    <template #content="{ close }">
      <div class="flex p-2">
        <KButton
          v-for="transactionAction in transactionActions"
          :key="transactionAction.label"
          :label="transactionAction.label"
          variant="ghost"
          color="gray"
          :leading-icon="transactionAction.icon"
          square
          @click="close"
        />
      </div>
    </template>
  </KPopover>
</template>
