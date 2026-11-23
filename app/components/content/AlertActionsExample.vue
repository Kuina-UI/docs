<script setup lang="ts">
import { KAlert, KButton } from '@kuina-ui/vue'
import { X } from 'lucide-vue-next'
</script>

<template>
  <div class="flex w-full flex-col gap-y-3">
    <KAlert
      title="Card expires soon"
      description="Your Visa ending in 4821 expires at the end of the month."
      color="warning"
      variant="soft"
    >
      <template #actions>
        <KButton label="Update card" size="sm" variant="outline" color="gray" />
      </template>
    </KAlert>

    <KAlert
      title="Two-factor authentication is off"
      description="Add a second step at sign-in to keep your accounts safe."
    >
      <template #actions>
        <KButton label="Later" size="sm" variant="ghost" color="gray" />
        <KButton label="Turn on" size="sm" />
      </template>
    </KAlert>

    <KAlert description="Balances are refreshed every 15 minutes." color="info" variant="soft">
      <template #actions>
        <KButton label="Dismiss" size="xs" variant="ghost" color="gray" square :leading-icon="X" />
      </template>
    </KAlert>
  </div>
</template>
