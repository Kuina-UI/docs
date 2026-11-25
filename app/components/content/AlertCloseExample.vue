<script setup lang="ts">
import { KAlert, KButton } from '@kuina-ui/vue'
import { ref } from 'vue'

const isAlertOpen = ref(true)
</script>

<template>
  <div class="flex w-full flex-col items-start gap-3">
    <KAlert
      v-model:open="isAlertOpen"
      description="Balances are refreshed every 15 minutes."
      color="info"
      variant="soft"
      closable
    />
    <KButton v-if="!isAlertOpen" label="Show the alert again" size="sm" variant="outline" @click="isAlertOpen = true" />
  </div>
</template>
