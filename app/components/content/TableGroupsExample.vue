<script setup lang="ts">
import { defineTableColumns, KTable } from '@kuina-ui/vue'
import { ref } from 'vue'
import { type ExampleTransaction, exampleTransactions, signedCurrencyFormat } from '~/utils/exampleTransactions'

const transactionColumns = defineTableColumns<ExampleTransaction>([
  { key: 'merchant', label: 'Merchant' },
  { key: 'date', label: 'Date', type: 'date' },
  { key: 'amount', label: 'Amount', type: 'decimal', formatOptions: signedCurrencyFormat, aggregate: 'sum' },
])

const collapsedCategories = ref<string[]>(['Travel'])
</script>

<template>
  <KTable
    v-model:collapsed-groups="collapsedCategories"
    class="w-full"
    caption="Transactions by category"
    locale="en-US"
    group-by="category"
    :columns="transactionColumns"
    :rows="exampleTransactions"
  />
</template>
