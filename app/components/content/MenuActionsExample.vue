<script setup lang="ts">
import { KMenu, type MenuEntry } from '@kuina-ui/vue'
import { History, Pencil, Trash2 } from 'lucide-vue-next'

const savedReportItems: MenuEntry[] = [
  { label: 'Monthly spending', actions: [{ label: 'Delete report', icon: Trash2 }] },
  {
    label: 'Subscriptions audit',
    actions: [
      { label: 'Rename report', icon: Pencil },
      { label: 'Delete report', icon: Trash2 },
    ],
  },
  { label: 'Travel expenses from the last quarter, grouped by trip', actions: [{ label: 'Delete report', icon: Trash2 }] },
]
</script>

<template>
  <KMenu
    label="Saved reports"
    :items="savedReportItems"
    :trigger="{ variant: 'outline', leadingIcon: History }"
    width="lg"
  />
</template>
