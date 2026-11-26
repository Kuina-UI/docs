<script setup lang="ts">
import { KSelectField, type SelectOption } from '@kuina-ui/vue'
import { Globe, Wallet } from 'lucide-vue-next'
import { ref } from 'vue'

const { resolvePublicFileUrl } = usePublicFileUrl()

const countryOptions = ['Canada', 'France', 'Germany', 'Japan', 'Madagascar']

const accountOptions = [
  { value: 'checking', label: 'Checking ···· 4821' },
  { value: 'savings', label: 'Savings ···· 0937' },
]

const memberOptions: SelectOption[] = [
  { value: 'avery-collins', label: 'Avery Collins', avatar: resolvePublicFileUrl('/avatars/avery-collins.webp') },
  { value: 'jordan-reyes', label: 'Jordan Reyes', avatar: resolvePublicFileUrl('/avatars/jordan-reyes.webp') },
  { value: 'riley-brooks', label: 'Riley Brooks', avatar: resolvePublicFileUrl('/avatars/riley-brooks.webp') },
]

const country = ref('Japan')
const account = ref('savings')
const assignee = ref('jordan-reyes')
</script>

<template>
  <div class="grid w-full gap-6 sm:grid-cols-2">
    <KSelectField v-model="country" label="Country" :options="countryOptions" :leading-icon="Globe" />
    <KSelectField v-model="account" label="Account" :options="accountOptions" :leading-icon="Wallet" />
    <KSelectField v-model="assignee" label="Assignee" :options="memberOptions" clearable />
  </div>
</template>
