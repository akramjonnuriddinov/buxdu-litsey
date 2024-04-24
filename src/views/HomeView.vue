<script setup lang="ts">
import AppHero from '@/components/AppHero.vue'
import AboutLyceum from '@/components/AboutLyceum.vue'
import AppNews from '@/components/AppNews.vue'
import ArticleDirection from '@/components/ArticleDirection.vue'
import { getImageUrl } from '@/composables/getImageUrl'
</script>

<template>
  <app-hero :bg-url="`url(${getImageUrl('home/img2.jpg')})`">
    <template v-slot:title> Buxoro davlat universiteti qoshidagi </template>
    <template v-slot:text> Qorako`l akademik litseyi </template>
  </app-hero>
  <about-lyceum />
  <app-news>
    <template v-slot:news-top>
      <h2 class="pt-[100px] mb-6 text-center text-[40px] leading-[40px] font-semibold">
        Yangiliklar
      </h2>
    </template>
  </app-news>
  <article-direction />
</template>
