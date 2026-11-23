<script setup lang="ts">
import { KAvatarGroup, type AvatarGroupMember } from '@kuina-ui/vue'
import { Sparkles } from 'lucide-vue-next'

const budgetMembers: AvatarGroupMember[] = [
  { name: 'Avery Collins', initials: 'AC', color: 'info' },
  { name: 'Jordan Reyes', initials: 'JR', color: 'discovery' },
  { name: 'Riley Brooks', initials: 'RB', color: 'success' },
  { name: 'Assistant', icon: Sparkles, color: 'primary', variant: 'solid' },
]
</script>

<template>
  <KAvatarGroup :avatars="budgetMembers" label="Budget members" size="xl" />
</template>
