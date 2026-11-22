<script setup lang="ts">
import { KTextField } from '@kuina-ui/vue'
import { Eye, EyeOff } from 'lucide-vue-next'
import { ref } from 'vue'

const password = ref('kuina-2026')
const isPasswordVisible = ref(false)
</script>

<template>
  <div class="w-full">
    <KTextField
      v-model="password"
      label="Password"
      autocomplete="current-password"
      :type="isPasswordVisible ? 'text' : 'password'"
      :trailing-icon="isPasswordVisible ? EyeOff : Eye"
      :trailing-icon-label="isPasswordVisible ? 'Hide password' : 'Show password'"
      @trailing-icon-click="isPasswordVisible = !isPasswordVisible"
    />
  </div>
</template>
