<script setup lang="ts">
import { getImageUrl } from '@/composables/getImageUrl'
import AppHero from '@/components/AppHero.vue'
import AboutTeacher from '@/components/AboutTeacher.vue'
</script>

<template>
  <app-hero :bg-url="`url(${getImageUrl('news/hero.jpg')})`">
    <template v-slot:title> Litsey haqida </template>
  </app-hero>
  <about-teacher />
</template>

<style scoped></style>
