<script setup lang="ts">
import { KMenu, type MenuEntry } from '@kuina-ui/vue'
import { ChevronDown, CircleUser, Copy, FileText, Flag, LogOut, Pencil, Share2, Trash2 } from 'lucide-vue-next'

const accountItems: MenuEntry[] = [
  { label: 'Avery Collins', description: 'avery.collins@example.com', readOnly: true },
  { separator: true },
  { label: 'Your profile', icon: CircleUser, href: '#' },
  { label: 'Terms & policies', icon: FileText, href: 'https://example.com/terms' },
  { label: 'Feature flags', icon: Flag, disabled: true },
  { separator: true },
  { label: 'Log out', icon: LogOut, color: 'danger' },
]

const transactionItems: MenuEntry[] = [
  { label: 'Edit', icon: Pencil, shortcut: '⌘E' },
  { label: 'Duplicate', icon: Copy, shortcut: '⌘D' },
  { label: 'Share', icon: Share2, description: 'Send a copy by email' },
  { separator: true },
  { label: 'Delete', icon: Trash2, shortcut: '⌘⌫', color: 'danger' },
]
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <KMenu
      label="Avery Collins"
      :items="accountItems"
      :trigger="{ variant: 'ghost', color: 'gray', trailingIcon: ChevronDown }"
    />
    <KMenu label="Options" :items="transactionItems" :trigger="{ variant: 'outline', trailingIcon: ChevronDown }" />
  </div>
</template>
