<script setup lang="ts">
import { defineTableColumns, KPagination, KTable } from '@kuina-ui/vue'
import { ref } from 'vue'
import { type ExampleTransaction, exampleTransactions, signedCurrencyFormat } from '~/utils/exampleTransactions'

const transactionColumns = defineTableColumns<ExampleTransaction>([
  { key: 'merchant', label: 'Merchant' },
  { key: 'date', label: 'Date', type: 'date' },
  { key: 'amount', label: 'Amount', type: 'decimal', formatOptions: signedCurrencyFormat },
])

const page = ref(1)
const rowsPerPage = ref(5)
const matchingTransactionCount = ref(0)
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <KTable
      v-model:page="page"
      v-model:matching-row-count="matchingTransactionCount"
      caption="Recent transactions"
      locale="en-US"
      :columns="transactionColumns"
      :rows="exampleTransactions"
      :rows-per-page="rowsPerPage"
    />
    <KPagination
      v-model:page="page"
      v-model:rows-per-page="rowsPerPage"
      :total-row-count="matchingTransactionCount"
      :rows-per-page-options="[5, 10, 25]"
    />
  </div>
</template>
