<script setup lang="ts">
import { KButton, KPopover } from '@kuina-ui/vue'
import { Calendar } from 'lucide-vue-next'
</script>

<template>
  <div class="h-52 w-full rounded-2xl bg-linear-to-br p-6 light:from-sky-200 light:to-violet-200 dark:from-sky-800 dark:to-violet-800">
    <KPopover label="Statement period" align="start" translucent>
      <KButton label="Statement period" variant="soft" color="gray" :leading-icon="Calendar" />
      <template #content>
        <div class="p-3">
          <h4 class="mb-0.5 font-semibold">November statement</h4>
          <p class="text-muted">Covers every transaction from Nov 1 to Nov 30, 2026. It will be ready on Dec 2.</p>
        </div>
      </template>
    </KPopover>
  </div>
</template>
