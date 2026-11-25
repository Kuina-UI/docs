<script setup lang="ts">
import { KMenu, type MenuEntry } from '@kuina-ui/vue'
import { ChevronDown, Download, Ellipsis, Eye, Flag, Pencil, Wrench } from 'lucide-vue-next'

const transactionActions: MenuEntry[] = [
  { label: 'Edit', icon: Pencil },
  { label: 'Download receipt', icon: Download },
]

const rowActions: MenuEntry[] = [
  { label: 'View details', icon: Eye },
  { label: 'Download receipt', icon: Download },
  { separator: true },
  { label: 'Report a problem', icon: Flag },
]
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <KMenu label="Options" :items="transactionActions" :trigger="{ variant: 'outline', trailingIcon: ChevronDown }" />
    <KMenu label="Tools" :items="transactionActions" :trigger="{ variant: 'ghost', leadingIcon: Wrench }" />
    <KMenu
      label="More actions"
      :items="rowActions"
      :trigger="{ variant: 'ghost', color: 'gray', leadingIcon: Ellipsis, square: true }"
      align="end"
      width="sm"
    />
  </div>
</template>
