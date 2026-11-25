<script setup lang="ts">
import { KBadge, KSelect } from '@kuina-ui/vue'
import { ref } from 'vue'

interface SubscriptionPlan {
  value: string
  label: string
  monthlyPrice: string
  popular?: boolean
}

const planOptions: SubscriptionPlan[] = [
  { value: 'free', label: 'Free', monthlyPrice: '$0' },
  { value: 'plus', label: 'Plus', monthlyPrice: '$4.99', popular: true },
  { value: 'business', label: 'Business', monthlyPrice: '$19' },
]

const plan = ref('plus')
</script>

<template>
  <div class="w-full">
    <KSelect v-model="plan" label="Plan" :options="planOptions">
      <template #option="{ option }">
        <span class="flex min-w-0 flex-1 items-center gap-2">
          <span class="flex-1">{{ option.label }}</span>
          <KBadge v-if="option.popular" label="Popular" color="discovery" size="sm" />
          <span class="font-normal text-muted">{{ option.monthlyPrice }}/month</span>
        </span>
      </template>
      <template #selection="{ selectedOptions }">
        <template v-if="selectedOptions[0]">{{ selectedOptions[0].label }} · {{ selectedOptions[0].monthlyPrice }}/month</template>
        <template v-else>Choose a plan</template>
      </template>
    </KSelect>
  </div>
</template>
