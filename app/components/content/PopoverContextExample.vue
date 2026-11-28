<script setup lang="ts">
import { KButton, KPopover, type FloatingPoint } from '@kuina-ui/vue'
import { ref } from 'vue'

const isNotePopoverOpen = ref(false)
const notePoint = ref<FloatingPoint>({ x: 0, y: 0 })

function openNotePopover(contextMenuEvent: MouseEvent) {
  notePoint.value = { x: contextMenuEvent.clientX, y: contextMenuEvent.clientY }
  isNotePopoverOpen.value = true
}
</script>

<template>
  <div
    class="flex h-40 w-full items-center justify-center rounded-xl border border-dashed border-line text-sm text-muted"
    @contextmenu.prevent="openNotePopover"
  >
    Right-click to add a note on the chart
  </div>
  <KPopover v-model:open="isNotePopoverOpen" label="Add note" :anchor="notePoint" align="start" :min-width="260">
    <template #content="{ close }">
      <textarea
        aria-label="Note"
        placeholder="What happened here?"
        class="block h-20 w-full resize-none bg-transparent px-3 pt-2 pb-3 text-sm/5 outline-none placeholder:text-muted"
      />
      <div class="flex justify-end px-2 pb-2">
        <KButton label="Save" size="xs" @click="close" />
      </div>
    </template>
  </KPopover>
</template>
