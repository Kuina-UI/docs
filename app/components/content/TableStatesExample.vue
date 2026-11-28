<script setup lang="ts">
import { defineTableColumns, KSwitch, KTable } from '@kuina-ui/vue'
import { ref } from 'vue'
import { type ExampleTransaction, exampleTransactions, signedCurrencyFormat } from '~/utils/exampleTransactions'

const transactionColumns = defineTableColumns<ExampleTransaction>([
  { key: 'merchant', label: 'Merchant' },
  { key: 'date', label: 'Date', type: 'date' },
  { key: 'amount', label: 'Amount', type: 'decimal', formatOptions: signedCurrencyFormat },
])

const isLoading = ref(true)
const hasRows = ref(false)
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex flex-wrap gap-6">
      <KSwitch v-model="isLoading" label="Loading" />
      <KSwitch v-model="hasRows" label="Rows loaded" />
    </div>
    <KTable
      caption="Recent transactions"
      locale="en-US"
      empty-text="No transactions yet"
      :columns="transactionColumns"
      :rows="hasRows ? exampleTransactions.slice(0, 3) : []"
      :loading="isLoading"
      :loading-row-count="3"
    />
  </div>
</template>
