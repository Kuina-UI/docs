<script setup lang="ts">
import { KButton, KSwitch, KTooltip } from '@kuina-ui/vue'
import { Download } from 'lucide-vue-next'
import { ref } from 'vue'

const isSyncing = ref(true)
</script>

<template>
  <div class="flex flex-wrap items-center gap-6">
    <KTooltip :content="isSyncing ? 'Exports are paused while your accounts are syncing.' : undefined">
      <KButton label="Export" :leading-icon="Download" :disabled="isSyncing" />
    </KTooltip>
    <KSwitch v-model="isSyncing" label="Accounts syncing" />
  </div>
</template>
