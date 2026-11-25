<script setup lang="ts">
import { KSelect } from '@kuina-ui/vue'
import { ref } from 'vue'

const isSelectOpen = ref(false)
const currency = ref('usd')

const currencyOptions = [
  { value: 'usd', label: 'US dollar (USD)' },
  { value: 'eur', label: 'Euro (EUR)' },
]
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <KSelect v-model="currency" v-model:open="isSelectOpen" label="Currency" :options="currencyOptions" :block="false" />
    <p class="text-sm text-muted">The select is {{ isSelectOpen ? 'open' : 'closed' }}.</p>
  </div>
</template>
