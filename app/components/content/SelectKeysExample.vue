<script setup lang="ts">
import { KSelect } from '@kuina-ui/vue'
import { ref } from 'vue'

interface TeamMember {
  id: number
  fullName: string
  contact: { email: string }
}

const teamMembers: TeamMember[] = [
  { id: 1, fullName: 'Avery Collins', contact: { email: 'avery.collins@example.com' } },
  { id: 2, fullName: 'Jordan Reyes', contact: { email: 'jordan.reyes@example.com' } },
  { id: 3, fullName: 'Riley Brooks', contact: { email: 'riley.brooks@example.com' } },
]

const assigneeId = ref<number>(2)
</script>

<template>
  <div class="flex w-full flex-col gap-3">
    <KSelect
      v-model="assigneeId"
      label="Assignee"
      :options="teamMembers"
      value-key="id"
      label-key="fullName"
      description-key="contact.email"
    />
    <p class="text-sm text-muted">assigneeId: {{ assigneeId ?? 'undefined' }}</p>
  </div>
</template>
