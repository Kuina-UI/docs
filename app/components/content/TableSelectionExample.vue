<script setup lang="ts">
import { defineTableColumns, KButton, KTable } from '@kuina-ui/vue'
import { Download, Trash2 } from 'lucide-vue-next'
import { ref } from 'vue'
import { type ExampleTransaction, exampleTransactions, signedCurrencyFormat } from '~/utils/exampleTransactions'

const transactionColumns = defineTableColumns<ExampleTransaction>([
  { key: 'merchant', label: 'Merchant' },
  { key: 'date', label: 'Date', type: 'date' },
  { key: 'status', label: 'Status' },
  { key: 'amount', label: 'Amount', type: 'decimal', formatOptions: signedCurrencyFormat },
])

const selectedTransactionIds = ref<string[]>(['txn-1048', 'txn-1046'])
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex min-h-7 flex-wrap items-center gap-2 ps-3 pe-3 text-sm">
      <template v-if="selectedTransactionIds.length">
        <span class="font-medium">{{ selectedTransactionIds.length }} selected</span>
        <KButton label="Clear" variant="ghost" color="gray" size="xs" @click="selectedTransactionIds = []" />
        <span class="ms-auto -me-3.25 flex items-center gap-1">
          <KButton label="Export" variant="ghost" color="gray" size="sm" :leading-icon="Download" />
          <KButton label="Delete" variant="ghost" color="danger" size="sm" :leading-icon="Trash2" />
        </span>
      </template>
    </div>

    <KTable
      v-model:selected-rows="selectedTransactionIds"
      caption="Recent transactions"
      locale="en-US"
      :columns="transactionColumns"
      :rows="exampleTransactions.slice(0, 5)"
      :is-row-selectable="(transaction) => transaction.status !== 'Failed'"
      selectable
    />
  </div>
</template>
