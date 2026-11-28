<script setup lang="ts">
import { defineTableColumns, KTable } from '@kuina-ui/vue'
import { signedCurrencyFormat } from '~/utils/exampleTransactions'

interface Purchase {
  id: string
  merchant: string
  category: string
  amount: number
}

const purchases: Purchase[] = [
  { id: 'pur-1', merchant: 'Corner Coffee', category: 'Food & drink', amount: -6.75 },
  { id: 'pur-2', merchant: 'Bluebird Home Furnishings & Decor', category: 'Home & furniture', amount: -349 },
  { id: 'pur-3', merchant: 'Northwind Traders International Holdings', category: 'Business services', amount: -1280 },
  { id: 'pur-4', merchant: 'Skyway Airlines', category: 'Travel', amount: -428.4 },
]

const purchaseColumns = defineTableColumns<Purchase>([
  { key: 'merchant', label: 'Merchant', maxWidth: '10rem' },
  { key: 'category', label: 'Category', maxWidth: '6rem' },
  { key: 'amount', label: 'Amount', type: 'decimal', formatOptions: signedCurrencyFormat },
])
</script>

<template>
  <KTable
    class="w-full"
    caption="Recent purchases"
    locale="en-US"
    :columns="purchaseColumns"
    :rows="purchases"
    :row-height="40"
  />
</template>
