<script setup lang="ts">
import { KButton, KPopover, type PopoverContentSlotProps } from '@kuina-ui/vue'
import { NotebookPen } from 'lucide-vue-next'
import { ref } from 'vue'

const transactionNote = ref('')
const isSavingNote = ref(false)

function saveTransactionNote({ close, shake }: PopoverContentSlotProps) {
  if (!transactionNote.value.trim()) {
    shake()
    return
  }

  isSavingNote.value = true
  setTimeout(() => {
    isSavingNote.value = false
    transactionNote.value = ''
    close()
  }, 1500)
}
</script>

<template>
  <KPopover label="Add note" align="start">
    <KButton label="Add note" :leading-icon="NotebookPen" />
    <template #content="popoverController">
      <form @submit.prevent="saveTransactionNote(popoverController)">
        <textarea
          v-model="transactionNote"
          aria-label="Note"
          placeholder="Write a note, or save it empty to see the popover shake."
          class="block h-20 w-full resize-none bg-transparent px-3 pt-2 pb-3 text-sm/5 outline-none placeholder:text-muted"
        />
        <div class="flex justify-end px-2 pb-2">
          <KButton label="Save" size="xs" type="submit" :loading="isSavingNote" />
        </div>
      </form>
    </template>
  </KPopover>
</template>
