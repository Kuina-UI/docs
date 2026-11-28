<script setup lang="ts">
import { defineTableColumns, KTable } from '@kuina-ui/vue'
import { type ExampleTransaction, exampleTransactions, signedCurrencyFormat } from '~/utils/exampleTransactions'

defineOptions({ inheritAttrs: false })

const transactionColumns = defineTableColumns<ExampleTransaction>([
  { key: 'merchant', label: 'Merchant' },
  { key: 'category', label: 'Category' },
  { key: 'date', label: 'Date', type: 'date' },
  { key: 'amount', label: 'Amount', type: 'decimal', formatOptions: signedCurrencyFormat },
])
</script>

<template>
  <KTable
    class="w-full"
    caption="Recent transactions"
    locale="en-US"
    :columns="transactionColumns"
    :rows="exampleTransactions.slice(0, 4)"
    v-bind="$attrs"
  />
</template>
