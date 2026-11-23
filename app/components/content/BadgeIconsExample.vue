<script setup lang="ts">
import { KBadge } from '@kuina-ui/vue'
import { BadgeCheck, Repeat, Sparkles, TrendingDown, TrendingUp } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <KBadge label="12.5%" color="success" size="md" pill :leading-icon="TrendingUp" />
    <KBadge label="3.2%" color="danger" size="md" pill :leading-icon="TrendingDown" />
    <KBadge label="Verified" color="info" size="md" :leading-icon="BadgeCheck" />
    <KBadge label="Recurring" variant="outline" size="md" :leading-icon="Repeat" />
    <KBadge label="Pro" color="discovery" variant="solid" size="md" :trailing-icon="Sparkles" />
  </div>
</template>
