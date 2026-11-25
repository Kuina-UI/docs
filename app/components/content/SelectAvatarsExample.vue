<script setup lang="ts">
import { KSelect, type SelectOption } from '@kuina-ui/vue'
import { CreditCard, Landmark, UserRoundX } from 'lucide-vue-next'
import { ref } from 'vue'

const memberOptions: SelectOption[] = [
  { value: 'avery-collins', label: 'Avery Collins', avatar: '/avatars/avery-collins.webp' },
  { value: 'jordan-reyes', label: 'Jordan Reyes', avatar: '/avatars/jordan-reyes.webp' },
  { value: 'riley-brooks', label: 'Riley Brooks', avatar: '/avatars/riley-brooks.webp' },
  { value: 'drew-parker', label: 'Drew Parker', avatar: { initials: 'DP', color: 'info' } },
  { value: 'unassigned', label: 'Unassigned', avatar: { icon: UserRoundX } },
]

const paymentAccountOptions: SelectOption[] = [
  {
    value: 'northwind',
    label: 'Northwind Bank',
    description: 'Checking ···· 4821',
    avatar: { icon: Landmark, color: 'info', pill: false },
  },
  {
    value: 'contoso',
    label: 'Contoso Card',
    description: 'Visa ···· 7712',
    avatar: { icon: CreditCard, color: 'discovery', pill: false },
  },
  {
    value: 'fabrikam',
    label: 'Fabrikam Savings',
    description: 'Savings ···· 0937',
    avatar: { initials: 'FS', color: 'success', variant: 'solid', pill: false },
  },
]

const assignee = ref('avery-collins')
const paymentAccount = ref('northwind')
</script>

<template>
  <div class="grid w-full gap-4 sm:grid-cols-2">
    <KSelect v-model="assignee" label="Assignee" :options="memberOptions" />
    <KSelect
      v-model="paymentAccount"
      label="Payment account"
      :options="paymentAccountOptions"
      variant="soft"
      :pill="false"
    />
  </div>
</template>
