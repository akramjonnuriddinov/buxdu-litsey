<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getNews } from '@/api/news'
import AppLoader from '@/components/AppLoader.vue'
import LoaderWrapper from '@/components/LoaderWrapper.vue'
import { useRoute } from 'vue-router'

const allNews = ref()
const isLoading = ref(true)
const route = useRoute()

onMounted(async () => {
  isLoading.value = true
  const data = await getNews(`news/${route.params.id}`)
  allNews.value = data.data.data.body
  isLoading.value = false
})
</script>

<template>
  <loader-wrapper v-if="isLoading">
    <app-loader />
  </loader-wrapper>
  <section v-else class="py-[100px]">
    <div class="container px-5 mx-auto">
      <div class="flex flex-col items-center">
        <h1 class="font-semibold text-[2em] leading-[1.2em] mb-10">{{ allNews.title }}</h1>
        <div class="flex flex-col w-full" v-for="allNew in allNews.images" :key="allNew.id">
          <img
            class="block object-cover w-full mb-5"
            :src="'http://185.196.213.14:4041/api/v1/' + allNew"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>
