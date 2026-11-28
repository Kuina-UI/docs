<script setup lang="ts">
import { KInput } from '@kuina-ui/vue'
import { AtSign, Banknote, Search } from 'lucide-vue-next'
</script>

<template>
  <div class="grid w-full gap-4 sm:grid-cols-3">
    <KInput type="search" placeholder="Search transactions" aria-label="Search transactions" :leading-icon="Search" />
    <KInput model-value="1,250.00" inputmode="decimal" align="end" aria-label="Amount" :leading-icon="Banknote" />
    <KInput type="email" placeholder="jane.doe@example.com" aria-label="Email address" :trailing-icon="AtSign" />
  </div>
</template>
