<script setup lang="ts">
import { KAvatar, KMenu, type MenuEntry } from '@kuina-ui/vue'
import { ChevronsUpDown, CircleUser, LogOut, Settings } from 'lucide-vue-next'

const { resolvePublicFileUrl } = usePublicFileUrl()

const profileItems: MenuEntry[] = [
  { label: 'Your profile', icon: CircleUser, href: '#' },
  { label: 'Settings', icon: Settings },
  { separator: true },
  { label: 'Log out', icon: LogOut, color: 'danger' },
]
</script>

<template>
  <KMenu label="Avery Collins" :items="profileItems" width="trigger">
    <template #trigger="{ triggerAttributes }">
      <button
        type="button"
        v-bind="triggerAttributes"
        class="flex w-60 items-center gap-2.5 rounded-xl p-2 text-left text-sm outline-primary transition-colors focus-visible:outline-2 light:hover:bg-stone-950/5 dark:hover:bg-white/5"
      >
        <KAvatar name="Avery Collins" :image-url="resolvePublicFileUrl('/avatars/avery-collins.webp')" size="lg" />
        <span class="min-w-0 flex-1">
          <span class="block truncate font-medium">Avery Collins</span>
          <span class="block truncate text-muted">avery.collins@example.com</span>
        </span>
        <ChevronsUpDown class="size-4 shrink-0 text-muted" />
      </button>
    </template>
  </KMenu>
</template>
