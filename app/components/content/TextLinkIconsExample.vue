<script setup lang="ts">
import { KTextLink } from '@kuina-ui/vue'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
    <KTextLink label="Contact support" weight="semibold" :underline="false" :trailing-icon="ArrowRight" />
    <KTextLink label="Back to log in" color="muted" :underline="false" :leading-icon="ArrowLeft" />
    <KTextLink
      label="Bank website"
      href="https://example.com"
      color="primary"
      underline
      :trailing-icon="ArrowUpRight"
    />
  </div>
</template>
