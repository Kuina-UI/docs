<script setup lang="ts">
import { KButton, KTooltip } from '@kuina-ui/vue'
import { Archive, Copy, FileDown } from 'lucide-vue-next'
</script>

<template>
  <div class="flex items-center gap-1">
    <KTooltip content="Copy account number" compact>
      <KButton label="Copy account number" variant="ghost" color="gray" :leading-icon="Copy" square />
    </KTooltip>
    <KTooltip content="Download statement" compact>
      <KButton label="Download statement" variant="ghost" color="gray" :leading-icon="FileDown" square />
    </KTooltip>
    <KTooltip content="Archive account" compact>
      <KButton label="Archive account" variant="ghost" color="gray" :leading-icon="Archive" square />
    </KTooltip>
  </div>
</template>
