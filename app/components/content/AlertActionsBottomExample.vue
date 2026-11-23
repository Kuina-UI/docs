<script setup lang="ts">
import { KAlert, KButton } from '@kuina-ui/vue'
</script>

<template>
  <KAlert
    title="Payment failed"
    description="Your bank declined the transfer of $1,250.00 to Jordan Reyes. No money left your account, and you can try again or pay with another card."
    color="danger"
    variant="soft"
    actions-placement="bottom"
  >
    <template #actions>
      <KButton label="Try again" size="sm" color="danger" />
      <KButton label="Use another card" size="sm" variant="outline" color="gray" />
    </template>
  </KAlert>
</template>
