<script setup lang="ts">
import { KInput } from '@kuina-ui/vue'
import { ref } from 'vue'

const username = ref('')
const website = ref('kuina.dev')
</script>

<template>
  <div class="grid w-full gap-4 sm:grid-cols-2">
    <KInput v-model="username" placeholder="Username" aria-label="Username" maxlength="16" :pill="false">
      <template #trailing>
        <span class="text-xs text-muted tabular-nums">{{ username.length }}/16</span>
      </template>
    </KInput>
    <KInput v-model="website" type="url" aria-label="Website" :pill="false">
      <template #leading>
        <span class="text-muted">https://</span>
      </template>
    </KInput>
  </div>
</template>
