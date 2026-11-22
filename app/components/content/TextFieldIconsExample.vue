<script setup lang="ts">
import { KTextField } from '@kuina-ui/vue'
import { Banknote, Calendar, Search } from 'lucide-vue-next'
</script>

<template>
  <div class="grid w-full gap-6 sm:grid-cols-2">
    <KTextField label="Search transactions" type="search" :leading-icon="Search" />
    <KTextField label="Amount" model-value="1,250.00" inputmode="decimal" :leading-icon="Banknote" />
    <KTextField label="Due date" model-value="Nov 30, 2026" :trailing-icon="Calendar" />
  </div>
</template>
