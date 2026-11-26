<script setup lang="ts">
import { type AvatarGroupMember, KAvatarGroup } from '@kuina-ui/vue'
import { computed } from 'vue'

const props = defineProps<{ avatars: AvatarGroupMember[] }>()

const { resolvePublicFileUrl } = usePublicFileUrl()

const groupMembersWithResolvedImageUrls = computed(() =>
  props.avatars.map(groupMember => ({
    ...groupMember,
    imageUrl: groupMember.imageUrl && resolvePublicFileUrl(groupMember.imageUrl),
  })),
)
</script>

<template>
  <KAvatarGroup :avatars="groupMembersWithResolvedImageUrls" />
</template>
