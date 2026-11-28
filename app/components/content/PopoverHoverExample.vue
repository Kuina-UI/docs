<script setup lang="ts">
import { KButton, KPopover } from '@kuina-ui/vue'
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <KPopover label="Pending balance" show-on-hover align="start" :width="320">
      <KButton label="Pending balance" variant="outline" color="gray" />
      <template #content>
        <div class="p-3">
          <h4 class="mb-0.5 font-semibold">Pending balance</h4>
          <p class="text-muted">Card payments that have not cleared yet. They usually settle within two business days.</p>
          <p class="mt-2 text-xs text-muted">Last updated Nov 28, 2026</p>
        </div>
      </template>
    </KPopover>

    <KPopover label="Cancel transfer" show-on-hover align="start" :min-width="230">
      <KButton label="Cancel transfer" variant="outline" color="gray" />
      <template #content="{ close }">
        <div class="p-5">
          <h4 class="mb-1 font-semibold">Cancel this transfer?</h4>
          <p class="text-muted">Try using Tab to move into the popover.</p>
          <div class="mt-4 flex gap-2">
            <KButton label="Keep" variant="soft" color="gray" @click="close" />
            <KButton label="Cancel transfer" color="danger" @click="close" />
          </div>
        </div>
      </template>
    </KPopover>
  </div>
</template>
