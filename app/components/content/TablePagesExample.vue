<script setup lang="ts">
import { defineTableColumns, KButton, KTable } from '@kuina-ui/vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import { type ExampleTransaction, exampleTransactions, signedCurrencyFormat } from '~/utils/exampleTransactions'

const transactionColumns = defineTableColumns<ExampleTransaction>([
  { key: 'merchant', label: 'Merchant' },
  { key: 'date', label: 'Date', type: 'date' },
  { key: 'amount', label: 'Amount', type: 'decimal', formatOptions: signedCurrencyFormat },
])

const rowsPerPage = 4
const page = ref(1)
const matchingTransactionCount = ref(0)

const pageCount = computed(() => Math.max(1, Math.ceil(matchingTransactionCount.value / rowsPerPage)))
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

    <div class="flex items-center justify-end gap-4 text-sm">
      <KButton label="Previous" variant="ghost" size="sm" :leading-icon="ChevronLeft" :disabled="page <= 1" @click="page--" />
      <span>Page {{ page }} of {{ pageCount }}</span>
      <KButton
        label="Next"
        variant="ghost"
        size="sm"
        :trailing-icon="ChevronRight"
        :disabled="page >= pageCount"
        @click="page++"
      />
    </div>
  </div>
</template>
