<script setup lang="ts">
import { KMenu, type MenuEntry, type MenuItem } from '@kuina-ui/vue'
import { SlidersHorizontal } from 'lucide-vue-next'
import { computed, reactive, ref } from 'vue'

const sortOrders = ['Newest first', 'Oldest first', 'Largest amount']

const selectedSortOrder = ref('Newest first')

const visibleTransactions = reactive({ pending: true, transfers: false, hidden: false })

function toggleVisibleTransactions(transactionKind: keyof typeof visibleTransactions) {
  visibleTransactions[transactionKind] = !visibleTransactions[transactionKind]
}

const transactionViewItems = computed<MenuEntry[]>(() => [
  {
    label: 'Sort by',
    items: sortOrders.map((sortOrder): MenuItem => ({
      label: sortOrder,
      type: 'radio',
      checked: selectedSortOrder.value === sortOrder,
      onSelect: () => {
        selectedSortOrder.value = sortOrder
      },
    })),
  },
  { separator: true },
  {
    label: 'Show',
    items: [
      {
        label: 'Pending',
        type: 'checkbox',
        checked: visibleTransactions.pending,
        onSelect: () => toggleVisibleTransactions('pending'),
      },
      {
        label: 'Transfers',
        type: 'checkbox',
        checked: visibleTransactions.transfers,
        onSelect: () => toggleVisibleTransactions('transfers'),
      },
      {
        label: 'Hidden transactions',
        type: 'checkbox',
        checked: visibleTransactions.hidden,
        onSelect: () => toggleVisibleTransactions('hidden'),
      },
    ],
  },
])
</script>

<template>
  <KMenu
    label="View"
    :items="transactionViewItems"
    :trigger="{ variant: 'outline', leadingIcon: SlidersHorizontal }"
    indicator-position="start"
  />
</template>
