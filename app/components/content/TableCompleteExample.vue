<script setup lang="ts">
import { defineTableColumns, KBadge, KButton, KInput, KPagination, KSelect, KTable, type TableSort } from '@kuina-ui/vue'
import { Download, Search, Trash2 } from 'lucide-vue-next'
import { ref } from 'vue'
import {
  type ExampleTransaction,
  exampleStatusColors,
  exampleTransactions,
  signedCurrencyFormat,
} from '~/utils/exampleTransactions'

const transactionColumns = defineTableColumns<ExampleTransaction>([
  { key: 'merchant', label: 'Merchant', sortable: true },
  { key: 'date', label: 'Date', type: 'date', sortable: true, firstSortDirection: 'descending' },
  { key: 'status', label: 'Status' },
  { key: 'amount', label: 'Amount', type: 'decimal', formatOptions: signedCurrencyFormat, sortable: true },
])

const statusOptions = ['Completed', 'Pending', 'Failed']

const searchQuery = ref('')
const statusFilter = ref<string>()
const sort = ref<TableSort>([{ key: 'date', direction: 'descending' }])
const selectedTransactionIds = ref<string[]>([])
const page = ref(1)
const rowsPerPage = ref(5)
const matchingTransactionCount = ref(0)
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex flex-wrap items-center gap-2">
      <KInput
        v-model="searchQuery"
        class="w-full sm:w-64"
        type="search"
        placeholder="Search transactions"
        aria-label="Search transactions"
        :leading-icon="Search"
        clearable
      />
      <KSelect v-model="statusFilter" label="Status" :options="statusOptions" :block="false" clearable />
    </div>

    <div v-if="selectedTransactionIds.length" class="flex flex-wrap items-center gap-2 ps-3 pe-3 text-sm">
      <span class="font-medium">{{ selectedTransactionIds.length }} selected</span>
      <KButton label="Clear" variant="ghost" color="gray" size="xs" @click="selectedTransactionIds = []" />
      <span class="ms-auto -me-3.25 flex items-center gap-1">
        <KButton label="Export" variant="ghost" color="gray" size="sm" :leading-icon="Download" />
        <KButton label="Delete" variant="ghost" color="danger" size="sm" :leading-icon="Trash2" />
      </span>
    </div>

    <KTable
      v-model:sort="sort"
      v-model:selected-rows="selectedTransactionIds"
      v-model:page="page"
      v-model:matching-row-count="matchingTransactionCount"
      caption="Recent transactions"
      locale="en-US"
      :columns="transactionColumns"
      :rows="exampleTransactions"
      :search-query="searchQuery"
      :column-filters="{ status: statusFilter }"
      :rows-per-page="rowsPerPage"
      selectable
    >
      <template #status-cell="{ row }">
        <KBadge :label="row.status" :color="exampleStatusColors[row.status]" dot />
      </template>
    </KTable>

    <KPagination
      v-model:page="page"
      v-model:rows-per-page="rowsPerPage"
      :total-row-count="matchingTransactionCount"
      :rows-per-page-options="[5, 10, 25]"
    />
  </div>
</template>
