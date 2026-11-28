<script setup lang="ts">
import { KButton, KPopover } from '@kuina-ui/vue'
import { NotebookPen, Users } from 'lucide-vue-next'
</script>

<template>
  <KPopover label="Add note" align="start">
    <KButton label="Add note" :leading-icon="NotebookPen" />
    <template #content="{ close }">
      <textarea
        aria-label="Note"
        placeholder="Write a note about this transaction. Only your team can see it."
        class="block h-20 w-full resize-none bg-transparent px-3 pt-2 pb-3 text-sm/5 outline-none placeholder:text-muted"
      />
      <div class="flex items-center justify-between px-2 pb-2">
        <span class="flex items-center gap-1 text-muted">
          <Users class="size-4" />
          Visible to your team
        </span>
        <KButton label="Save" size="xs" @click="close" />
      </div>
    </template>
  </KPopover>
</template>
