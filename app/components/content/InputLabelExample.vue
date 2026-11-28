<script setup lang="ts">
import { KInput } from '@kuina-ui/vue'
import { ref } from 'vue'

const fullName = ref('Avery Collins')
</script>

<template>
  <div class="w-full max-w-xs">
    <label for="input-label-example" class="mb-1 block text-sm font-medium">Full name</label>
    <KInput id="input-label-example" v-model="fullName" name="full-name" autocomplete="name" />
  </div>
</template>
