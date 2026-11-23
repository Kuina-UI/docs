<script setup lang="ts">
import { KAlert } from '@kuina-ui/vue'
import { Sparkles } from 'lucide-vue-next'
</script>

<template>
  <KAlert
    title="New: budget insights"
    description="See where your money goes with weekly spending summaries."
    color="discovery"
    variant="soft"
    :icon="Sparkles"
  />
</template>
