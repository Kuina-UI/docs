<script setup lang="ts">
import { KButton } from '@kuina-ui/vue'
import { ArrowLeftRight, ArrowRight, Trash2 } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <KButton label="Delete" color="danger" :leading-icon="Trash2" />
    <KButton label="Next" variant="outline" :trailing-icon="ArrowRight" />
    <KButton label="Compare" variant="ghost" :leading-icon="ArrowLeftRight" />
  </div>
</template>
