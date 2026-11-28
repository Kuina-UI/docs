<script setup lang="ts">
import { defineTableColumns, KTable } from '@kuina-ui/vue'
import { onMounted, ref } from 'vue'

interface Transaction {
  id: string
  merchant: string
  date: string
  amount: number
}

const transactionColumns = defineTableColumns<Transaction>([
  { key: 'merchant', label: 'Merchant' },
  { key: 'date', label: 'Date', type: 'date' },
  {
    key: 'amount',
    label: 'Amount',
    type: 'decimal',
    formatOptions: { style: 'currency', currency: 'USD', signDisplay: 'exceptZero' },
  },
])

const merchantNames = ['Corner Coffee', 'Streamly', 'Fresh Market', 'City Rides', 'Green Bowl', 'Cineflix']
const serverTransactionCount = 60
const transactionsPerRequest = 15

const transactions = ref<Transaction[]>([])
const isLoadingMore = ref(false)

function fetchTransactionsFromFakeServer(offset: number) {
  const fetchedTransactions = Array.from(
    { length: Math.min(transactionsPerRequest, serverTransactionCount - offset) },
    (_unused, pageIndex) => {
      const transactionNumber = offset + pageIndex + 1

      return {
        id: `txn-${transactionNumber}`,
        merchant: merchantNames[transactionNumber % merchantNames.length] ?? 'Corner Coffee',
        date: `2026-11-${String(28 - (transactionNumber % 27)).padStart(2, '0')}`,
        amount: -((transactionNumber * 7.31) % 120),
      }
    },
  )

  return new Promise<{ rows: Transaction[]; total: number }>((resolve) =>
    setTimeout(() => resolve({ rows: fetchedTransactions, total: serverTransactionCount }), 800),
  )
}

async function loadMoreTransactions() {
  if (isLoadingMore.value || transactions.value.length >= serverTransactionCount) return

  isLoadingMore.value = true

  const { rows } = await fetchTransactionsFromFakeServer(transactions.value.length)

  transactions.value = [...transactions.value, ...rows]
  isLoadingMore.value = false
}

onMounted(loadMoreTransactions)
</script>

<template>
  <KTable
    class="w-full"
    caption="All transactions"
    locale="en-US"
    max-height="18rem"
    :columns="transactionColumns"
    :rows="transactions"
    :loading="isLoadingMore && transactions.length === 0"
    :loading-more="isLoadingMore && transactions.length > 0"
    @load-more="loadMoreTransactions"
  />
</template>
