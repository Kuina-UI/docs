<script setup lang="ts">
import { KButton, KTextLink, KTooltip } from '@kuina-ui/vue'
</script>

<template>
  <KTooltip interactive side="bottom">
    <KButton label="Fees" variant="soft" color="gray" />
    <template #content>
      Transfers between your accounts are free.
      <KTextLink label="See pricing" href="#" />
    </template>
  </KTooltip>
</template>
