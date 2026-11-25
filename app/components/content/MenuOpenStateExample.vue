<script setup lang="ts">
import { KMenu, type MenuEntry } from '@kuina-ui/vue'
import { ChevronDown } from 'lucide-vue-next'
import { ref } from 'vue'

const isMenuOpen = ref(false)

const exportFormats: MenuEntry[] = [{ label: 'CSV' }, { label: 'PDF' }, { label: 'Excel' }]
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <KMenu
      v-model:open="isMenuOpen"
      label="Export"
      :items="exportFormats"
      :trigger="{ variant: 'outline', trailingIcon: ChevronDown }"
      width="sm"
    />
    <p class="text-sm text-muted">The menu is {{ isMenuOpen ? 'open' : 'closed' }}.</p>
  </div>
</template>
