<script setup lang="ts">
import { getImageUrl } from '@/composables/getImageUrl'
import AppHero from '@/components/AppHero.vue'
import AppNews from '@/components/AppNews.vue'
</script>

<template>
  <app-hero :bg-url="`url(${getImageUrl('news/hero.jpg')})`">
    <template v-slot:title> Yoshlar Ittifoqi </template>
  </app-hero>
  <app-news>
    <template v-slot:news-top>
      <div class="flex items-center justify-center py-4 mb-20 text-white bg-blue">
        You are here: <router-link to="/" class="mx-2"> Home </router-link> / Yoshlar ittifoqi
      </div>
    </template>
  </app-news>
</template>
