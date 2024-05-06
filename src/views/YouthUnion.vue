<script setup lang="ts">
import { getImageUrl } from '@/composables/getImageUrl'
import AppHero from '@/components/AppHero.vue'
import AppUnion from '@/components/AppUnion.vue'
</script>

<template>
  <app-hero :bg-url="`url(${getImageUrl('news/hero.jpg')})`">
    <template v-slot:title> Yoshlar Ittifoqi </template>
  </app-hero>
  <app-union>
    <template v-slot:news-top>
      <div class="flex items-center justify-center py-4 mb-20 text-white bg-blue">
        You are here: <router-link to="/" class="mx-2"> Home </router-link> / Yoshlar ittifoqi
      </div>
    </template>
  </app-union>
</template>
