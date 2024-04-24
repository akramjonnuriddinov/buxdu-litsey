<script setup lang="ts">
import { getImageUrl } from '@/composables/getImageUrl'
import AppHero from '@/components/AppHero.vue'
</script>

<template>
  <app-hero :bg-url="`url(${getImageUrl('news/hero.jpg')})`">
    <template v-slot:title> Yangiliklar </template>
    <template v-slot:text> </template>
  </app-hero>
</template>
