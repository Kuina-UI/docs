<script setup lang="ts">
import { defineTableColumns, KMenu, KTable, type MenuEntry } from '@kuina-ui/vue'
import { Columns3 } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import { type ExampleTransaction, exampleTransactions, signedCurrencyFormat } from '~/utils/exampleTransactions'

const transactionColumns = defineTableColumns<ExampleTransaction>([
  { key: 'merchant', label: 'Merchant' },
  { key: 'category', label: 'Category' },
  { key: 'date', label: 'Date', type: 'date' },
  { key: 'amount', label: 'Amount', type: 'decimal', formatOptions: signedCurrencyFormat },
])

const hiddenColumnKeys = ref(['category'])

const shownColumns = computed(() =>
  transactionColumns.map((column) => ({ ...column, hidden: hiddenColumnKeys.value.includes(column.key) })),
)

function toggleColumn(columnKey: string) {
  hiddenColumnKeys.value = hiddenColumnKeys.value.includes(columnKey)
    ? hiddenColumnKeys.value.filter((hiddenColumnKey) => hiddenColumnKey !== columnKey)
    : [...hiddenColumnKeys.value, columnKey]
}

const columnMenuItems = computed<MenuEntry[]>(() =>
  transactionColumns.map((column) => ({
    label: column.label ?? column.key,
    type: 'checkbox',
    checked: !hiddenColumnKeys.value.includes(column.key),
    disabled: column.key === 'merchant',
    onSelect: () => toggleColumn(column.key),
  })),
)
</script>

<template>
  <div class="flex w-full flex-col gap-3">
    <div class="flex justify-end">
      <KMenu
        label="Columns"
        :items="columnMenuItems"
        :trigger="{ variant: 'outline', color: 'gray', leadingIcon: Columns3 }"
        align="end"
        width="sm"
      />
    </div>
    <KTable
      caption="Recent transactions"
      locale="en-US"
      :columns="shownColumns"
      :rows="exampleTransactions.slice(0, 5)"
    />
  </div>
</template>
