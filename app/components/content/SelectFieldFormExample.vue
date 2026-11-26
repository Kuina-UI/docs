<script setup lang="ts">
import { KSelectField, type SelectAction } from '@kuina-ui/vue'
import { Plus } from 'lucide-vue-next'
import { ref } from 'vue'

interface TeamMember {
  id: number
  fullName: string
  email: string
  photoUrl: string
}

const { resolvePublicFileUrl } = usePublicFileUrl()

const teamMembers: TeamMember[] = [
  { id: 1, fullName: 'Avery Collins', email: 'avery.collins@example.com', photoUrl: resolvePublicFileUrl('/avatars/avery-collins.webp') },
  { id: 2, fullName: 'Jordan Reyes', email: 'jordan.reyes@example.com', photoUrl: resolvePublicFileUrl('/avatars/jordan-reyes.webp') },
  { id: 3, fullName: 'Riley Brooks', email: 'riley.brooks@example.com', photoUrl: resolvePublicFileUrl('/avatars/riley-brooks.webp') },
]

const accountOptions = [
  {
    label: 'Northwind Bank',
    options: [
      { value: 'checking', label: 'Checking ···· 4821' },
      { value: 'savings', label: 'Savings ···· 0937' },
    ],
  },
  { label: 'Contoso Card', options: [{ value: 'credit-card', label: 'Visa ···· 7712' }] },
]

const accountActions: SelectAction[] = [{ label: 'Link an account', icon: Plus }]

const categoryOptions = ['Groceries', 'Dining', 'Transport', 'Travel', 'Subscriptions', 'Utilities']

const approverId = ref<number>(2)
const account = ref('checking')
const categories = ref(['Dining', 'Travel'])
</script>

<template>
  <div class="grid w-full gap-6 sm:grid-cols-2">
    <KSelectField
      v-model="approverId"
      label="Approver"
      :options="teamMembers"
      value-key="id"
      label-key="fullName"
      description-key="email"
      avatar-key="photoUrl"
      searchable
    />
    <KSelectField
      v-model="account"
      label="Paid from"
      :options="accountOptions"
      :actions="accountActions"
      hint="The account charged for this expense."
    />
    <KSelectField v-model="categories" label="Categories" :options="categoryOptions" multiple clearable />
  </div>
</template>
