<script setup lang="ts">
import { KButton, KTooltip } from '@kuina-ui/vue'
import { Download } from 'lucide-vue-next'
</script>

<template>
  <KTooltip content="Downloads every transaction from the selected period as a CSV file.">
    <KButton label="Export" variant="outline" color="gray" :leading-icon="Download" />
  </KTooltip>
</template>
