<script setup lang="ts">
import { defineTableColumns, KTable } from '@kuina-ui/vue'

interface Subscription {
  id: string
  category: string
  service: string
  billing: 'Monthly' | 'Yearly'
  price: number
}

const subscriptions: Subscription[] = [
  { id: 'streamly', category: 'Entertainment', service: 'Streamly', billing: 'Monthly', price: 11.99 },
  { id: 'cineflix', category: 'Entertainment', service: 'Cineflix', billing: 'Monthly', price: 15.49 },
  { id: 'daily-times', category: 'Entertainment', service: 'The Daily Times', billing: 'Yearly', price: 195 },
  { id: 'cloudbox', category: 'Storage', service: 'CloudBox', billing: 'Monthly', price: 2.99 },
  { id: 'photo-vault', category: 'Storage', service: 'Photo Vault', billing: 'Yearly', price: 119.88 },
  { id: 'peak-fitness', category: 'Health', service: 'Peak Fitness', billing: 'Monthly', price: 49 },
]

const subscriptionColumns = defineTableColumns<Subscription>([
  { key: 'category', label: 'Category', mergeRepeated: true },
  { key: 'service', label: 'Service' },
  { key: 'billing', label: 'Billing' },
  { key: 'price', label: 'Price', type: 'decimal', formatOptions: { style: 'currency', currency: 'USD' } },
])
</script>

<template>
  <KTable class="w-full" caption="Subscriptions" locale="en-US" :columns="subscriptionColumns" :rows="subscriptions" />
</template>
