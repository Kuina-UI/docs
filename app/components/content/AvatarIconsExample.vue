<script setup lang="ts">
import { KAvatar } from '@kuina-ui/vue'
import { Banknote, Landmark, Plane, ShoppingBag, Sparkles, Utensils } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <KAvatar name="Shopping" :icon="ShoppingBag" color="discovery" size="2xl" />
    <KAvatar name="Dining" :icon="Utensils" color="danger" size="2xl" />
    <KAvatar name="Travel" :icon="Plane" color="info" size="2xl" />
    <KAvatar name="Salary" :icon="Banknote" color="success" size="2xl" />
    <KAvatar name="Bank transfer" :icon="Landmark" size="2xl" />
    <KAvatar name="Assistant" :icon="Sparkles" color="primary" variant="solid" size="2xl" />
  </div>
</template>
