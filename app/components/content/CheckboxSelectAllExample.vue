<script setup lang="ts">
import { KCheckbox } from '@kuina-ui/vue'
import { computed, ref } from 'vue'

const accountNames = ['Checking', 'Savings', 'Visa card']
const selectedAccountNames = ref(['Checking'])

const areAllAccountsSelected = computed({
  get: () => selectedAccountNames.value.length === accountNames.length,
  set: (selectsAll: boolean) => {
    selectedAccountNames.value = selectsAll ? [...accountNames] : []
  },
})

const areSomeAccountsSelected = computed(
  () => selectedAccountNames.value.length > 0 && !areAllAccountsSelected.value,
)

function toggleAccount(accountName: string, isSelected: boolean) {
  selectedAccountNames.value = isSelected
    ? [...selectedAccountNames.value, accountName]
    : selectedAccountNames.value.filter((selectedAccountName) => selectedAccountName !== accountName)
}
</script>

<template>
  <div class="flex flex-col gap-3">
    <KCheckbox v-model="areAllAccountsSelected" label="All accounts" :indeterminate="areSomeAccountsSelected" />
    <div class="flex flex-col gap-3 ps-6.5">
      <KCheckbox
        v-for="accountName in accountNames"
        :key="accountName"
        :model-value="selectedAccountNames.includes(accountName)"
        :label="accountName"
        @update:model-value="(isSelected: boolean) => toggleAccount(accountName, isSelected)"
      />
    </div>
  </div>
</template>
