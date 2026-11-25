<script setup lang="ts">
import { KSelect, type SelectAction } from '@kuina-ui/vue'
import { Plus, Wallet } from 'lucide-vue-next'
import { ref } from 'vue'

const accountOptions = [
  {
    label: 'Northwind Bank',
    options: [
      { value: 'checking', label: 'Checking ···· 4821', description: '$12,480.20 available' },
      { value: 'savings', label: 'Savings ···· 0937', description: '$31,200.00 available' },
    ],
  },
  {
    label: 'Contoso Card',
    options: [{ value: 'credit-card', label: 'Visa ···· 7712', description: '$2,140.65 spent this month' }],
  },
]

const linkedAccountCount = ref(3)

const accountActions: SelectAction[] = [
  {
    label: 'Link an account',
    icon: Plus,
    onSelect: () => {
      linkedAccountCount.value++
    },
  },
]

const account = ref('checking')
</script>

<template>
  <div class="flex w-full flex-col gap-3">
    <KSelect v-model="account" label="Account" :options="accountOptions" :leading-icon="Wallet" :actions="accountActions" />
    <p class="text-sm text-muted">{{ linkedAccountCount }} linked accounts</p>
  </div>
</template>
