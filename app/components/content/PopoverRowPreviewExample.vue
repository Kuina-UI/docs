<script setup lang="ts">
import { KPopover } from '@kuina-ui/vue'
import { ref, shallowRef } from 'vue'

interface Transaction {
  merchant: string
  category: string
  date: string
  amount: string
  paymentMethod: string
}

const transactions: Transaction[] = [
  { merchant: 'Corner Coffee', category: 'Food & drink', date: 'Nov 24, 2026', amount: '-$6.75', paymentMethod: 'Visa ···· 7712' },
  { merchant: 'Acme Corp', category: 'Salary', date: 'Nov 21, 2026', amount: '+$4,850.00', paymentMethod: 'Checking ···· 4821' },
  { merchant: 'Skyway Airlines', category: 'Travel', date: 'Nov 16, 2026', amount: '-$428.40', paymentMethod: 'Visa ···· 7712' },
]

const isPreviewOpen = ref(false)
const previewedRow = shallowRef<HTMLElement>()
const previewedTransaction = shallowRef<Transaction>()

function previewTransaction(transaction: Transaction, rowEvent: Event) {
  previewedRow.value = rowEvent.currentTarget as HTMLElement
  previewedTransaction.value = transaction
}

function previewTransactionOnFocus(transaction: Transaction, focusEvent: FocusEvent) {
  previewTransaction(transaction, focusEvent)
  isPreviewOpen.value = true
}
</script>

<template>
  <ul class="w-full max-w-md text-sm">
    <li
      v-for="transaction in transactions"
      :key="transaction.merchant"
      tabindex="0"
      class="flex justify-between border-b border-line py-2.5 outline-primary last:border-b-0 focus-visible:outline-2"
      @pointerenter="previewTransaction(transaction, $event)"
      @focus="previewTransactionOnFocus(transaction, $event)"
    >
      <span>{{ transaction.merchant }}</span>
      <bdi class="tabular-nums">{{ transaction.amount }}</bdi>
    </li>
  </ul>
  <KPopover
    v-model:open="isPreviewOpen"
    label="Transaction details"
    :anchor="previewedRow"
    show-on-hover
    side="right"
    align="start"
    :min-width="240"
  >
    <template #content>
      <dl v-if="previewedTransaction" class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 p-3">
        <dt class="text-muted">Category</dt>
        <dd>{{ previewedTransaction.category }}</dd>
        <dt class="text-muted">Date</dt>
        <dd>{{ previewedTransaction.date }}</dd>
        <dt class="text-muted">Paid with</dt>
        <dd>{{ previewedTransaction.paymentMethod }}</dd>
      </dl>
    </template>
  </KPopover>
</template>
