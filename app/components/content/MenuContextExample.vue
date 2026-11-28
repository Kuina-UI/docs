<script setup lang="ts">
import { KMenu, type FloatingPoint, type MenuEntry } from '@kuina-ui/vue'
import { Copy, FileDown, Flag, Trash2 } from 'lucide-vue-next'
import { ref } from 'vue'

const isTransactionMenuOpen = ref(false)
const transactionMenuPoint = ref<FloatingPoint>({ x: 0, y: 0 })

const transactionMenuItems: MenuEntry[] = [
  { label: 'Copy amount', icon: Copy },
  { label: 'Download receipt', icon: FileDown },
  { label: 'Flag', icon: Flag },
  { separator: true },
  { label: 'Delete', icon: Trash2, color: 'danger' },
]

function openTransactionMenu(contextMenuEvent: MouseEvent) {
  transactionMenuPoint.value = { x: contextMenuEvent.clientX, y: contextMenuEvent.clientY }
  isTransactionMenuOpen.value = true
}
</script>

<template>
  <div
    class="flex h-40 w-full items-center justify-center rounded-xl border border-dashed border-line text-sm text-muted"
    @contextmenu.prevent="openTransactionMenu"
  >
    Right-click anywhere in this area
  </div>
  <KMenu
    v-model:open="isTransactionMenuOpen"
    label="Transaction actions"
    :items="transactionMenuItems"
    :anchor="transactionMenuPoint"
    width="sm"
  />
</template>
