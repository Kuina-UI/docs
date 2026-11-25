<script setup lang="ts">
import { KMenu, type MenuEntry } from '@kuina-ui/vue'
import { Briefcase, ChevronDown, Copy, FolderInput, House, Pencil, Plus, Trash2 } from 'lucide-vue-next'

const transactionItems: MenuEntry[] = [
  { label: 'Edit', icon: Pencil },
  { label: 'Duplicate', icon: Copy },
  {
    label: 'Move to',
    icon: FolderInput,
    submenu: [
      { label: 'Household', icon: House },
      { label: 'Business', icon: Briefcase },
      { separator: true },
      { label: 'New category…', icon: Plus },
    ],
  },
  { separator: true },
  { label: 'Delete', icon: Trash2, color: 'danger' },
]
</script>

<template>
  <KMenu label="Options" :items="transactionItems" :trigger="{ variant: 'outline', trailingIcon: ChevronDown }" />
</template>
