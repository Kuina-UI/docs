<script setup lang="ts">
import { KAvatar } from '@kuina-ui/vue'

defineProps<{ imageUrl?: string }>()

const { resolvePublicFileUrl } = usePublicFileUrl()
</script>

<template>
  <KAvatar :image-url="imageUrl && resolvePublicFileUrl(imageUrl)" />
</template>
