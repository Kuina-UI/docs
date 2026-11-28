<script setup lang="ts">
import { defineTableColumns, KTable } from '@kuina-ui/vue'
import { ref } from 'vue'
import { type ExampleTransaction, exampleTransactions, signedCurrencyFormat } from '~/utils/exampleTransactions'

const transactionColumns = defineTableColumns<ExampleTransaction>([
  { key: 'merchant', label: 'Merchant' },
  { key: 'category', label: 'Category' },
  { key: 'date', label: 'Date', type: 'date' },
  { key: 'amount', label: 'Amount', type: 'decimal', formatOptions: signedCurrencyFormat },
])

const expandedTransactionIds = ref<string[]>(['txn-1045'])
</script>

<template>
  <KTable
    v-model:expanded-rows="expandedTransactionIds"
    class="w-full"
    caption="Recent transactions"
    locale="en-US"
    :columns="transactionColumns"
    :rows="exampleTransactions.slice(0, 5)"
  >
    <template #expanded="{ row }">
      <dl class="grid gap-x-6 gap-y-3 p-4 sm:grid-cols-3 light:bg-stone-950/3 dark:bg-stone-200/4">
        <div>
          <dt class="text-muted">Status</dt>
          <dd>{{ row.status }}</dd>
        </div>
        <div>
          <dt class="text-muted">Reference</dt>
          <dd>{{ row.id.toUpperCase() }}</dd>
        </div>
        <div>
          <dt class="text-muted">Category</dt>
          <dd>{{ row.category }}</dd>
        </div>
      </dl>
    </template>
  </KTable>
</template>
