<script setup lang="ts">
import { KButton } from '@kuina-ui/vue'
import { Bell, Plus, Trash2, X } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <KButton label="Add account" square :leading-icon="Plus" />
    <KButton label="Delete" color="danger" square :pill="false" :leading-icon="Trash2" />
    <KButton label="Close" variant="ghost" color="gray" square :leading-icon="X" />
    <KButton label="Notifications" variant="outline" size="2xl" square :leading-icon="Bell" />
  </div>
</template>
