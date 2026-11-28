<script setup lang="ts">
import { defineTableColumns, KButton, KTable, type TableSort } from '@kuina-ui/vue'
import { Pin } from 'lucide-vue-next'
import { ref } from 'vue'
import { type ExampleTransaction, exampleTransactions, signedCurrencyFormat } from '~/utils/exampleTransactions'

const transactionColumns = defineTableColumns<ExampleTransaction>([
  { key: 'pin', label: 'Pin', hideLabel: true, width: '1px' },
  { key: 'merchant', label: 'Merchant', sortable: true },
  { key: 'date', label: 'Date', type: 'date', sortable: true },
  { key: 'amount', label: 'Amount', type: 'decimal', formatOptions: signedCurrencyFormat, sortable: true },
])

const sort = ref<TableSort>([{ key: 'date', direction: 'descending' }])
const pinnedTransactionIds = ref(['txn-1047', 'txn-1045'])

function togglePinnedTransaction(transactionId: string) {
  pinnedTransactionIds.value = pinnedTransactionIds.value.includes(transactionId)
    ? pinnedTransactionIds.value.filter((pinnedTransactionId) => pinnedTransactionId !== transactionId)
    : [...pinnedTransactionIds.value, transactionId]
}
</script>

<template>
  <KTable
    v-model:sort="sort"
    class="w-full"
    caption="Recent transactions"
    locale="en-US"
    :columns="transactionColumns"
    :rows="exampleTransactions.slice(0, 5)"
    :pinned-rows="pinnedTransactionIds"
  >
    <template #pin-cell="{ row }">
      <KButton
        :label="`Pin ${row.merchant}`"
        :leading-icon="Pin"
        :selected="pinnedTransactionIds.includes(row.id)"
        variant="ghost"
        color="gray"
        size="2xs"
        square
        @click="togglePinnedTransaction(row.id)"
      />
    </template>
  </KTable>
</template>
