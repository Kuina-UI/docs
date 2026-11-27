<script setup lang="ts">
import { KSlider, KTooltip } from '@kuina-ui/vue'
import { ref } from 'vue'

const cashReserve = ref(3000)
</script>

<template>
  <KSlider
    v-model="cashReserve"
    class="w-75"
    :min="0"
    :max="10000"
    :step="100"
    :reset-value="2500"
    prefix-unit="$"
  >
    <template #label>
      <KTooltip label="Cash reserve" content="Money kept aside for unexpected expenses." />
    </template>
  </KSlider>
</template>
