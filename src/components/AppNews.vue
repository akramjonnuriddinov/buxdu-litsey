<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { getNews } from '@/api/news'
import { formatTime } from '@/composables/formatTime'
import BaseButton from '@/components/BaseButton.vue'
import AppLoader from '@/components/AppLoader.vue'
import LoaderWrapper from '@/components/LoaderWrapper.vue'
import AppPagination from '@/components/AppPagination.vue'
import { useRoute } from 'vue-router'

const allNews = ref()
const isLoading = ref(true)
const route = useRoute()

const notHome = computed(() => {
  return route.name !== 'home'
})

onMounted(async () => {
  isLoading.value = true
  const data = await getNews('news')
  allNews.value = data.data.data.body
  isLoading.value = false
  console.log(data.data.data.body)
})
setTimeout(() => {
  if (isLoading.value) {
    isLoading.value = false
  }
}, 4000)
</script>

<template>
  <loader-wrapper v-if="isLoading">
    <app-loader />
  </loader-wrapper>
  <section class="bg-[#f7f7f7] pb-[100px]">
    <div class="container mx-auto px-5">
      <slot name="news-top" />

      <ul class="hidden flex-wrap gap-8">
        <li v-for="news in allNews" :key="news.id" class="border p-5">
          <router-link to="/" class="text-[2em] font-semibold mb-4 block text-[#6c757d]">{{
            news.title
          }}</router-link>
          <div>
            <span>Published on: {{ formatTime(news.createdDate) }}</span>
          </div>
          <div>
            <img :src="news.thumbNailImageUrl" alt="" />
            <span>Read Time: {{ news.readTime }}</span>
          </div>
          <base-button>Read More</base-button>
        </li>
      </ul>

      <ul class="flex w-full flex-wrap justify-between max-[1200px]:flex-col">
        <li v-for="news in allNews" :key="news.id" class="w-1/2 px-4 max-[1200px]:w-auto">
          <div
            class="blog-inner mb-7 flex rounded-[10px] border transition-all duration-300 max-[650px]:flex-col"
          >
            <img
              v-if="news.thumbNailImageUrl"
              src="/src/assets/images/home/img2.jpg"
              class="h-[230px] w-[240px] rounded-bl-[10px] rounded-tl-[10px] object-cover max-[650px]:h-full max-[650px]:w-full max-[650px]:rounded-bl-none max-[650px]:rounded-tr-[10px]"
              width="771"
              height="430"
              alt="img"
            />
            <img
              v-else
              :src="'http://185.196.213.14:4041/api/v1/news/' + news.thumbNailImageUrl"
              class="h-[230px] w-[240px] rounded-bl-[10px] rounded-tl-[10px] object-cover max-[650px]:h-full max-[650px]:w-full max-[650px]:rounded-bl-none max-[650px]:rounded-tr-[10px]"
              width="771"
              height="430"
              alt="news"
            />
            <div
              class="blog-content flex w-full flex-col items-start rounded-br-[10px] rounded-tr-[10px] bg-white px-[30px] py-[25px] transition-all duration-300 max-[650px]:rounded-bl-[10px] max-[650px]:rounded-tl-none max-[650px]:rounded-tr-none"
            >
              <span
                class="mb-4 max-w-[250px] truncate rounded-[5px] bg-[#EEE8FF] px-[11px] py-[6px] text-xs font-semibold capitalize transition-all duration-300 hover:text-tg-white max-[1300px]:max-w-[200px]"
                >{{ news.subTitle }}</span
              >
              <router-link
                :to="{
                  name: 'home',
                  params: {
                    id: news.id
                  }
                }"
                class="transition-color mb-4 line-clamp-3 text-[22px] font-bold leading-[1.2] text-tg-heading-font-color duration-300"
                >{{ news.title }}</router-link
              >
              <div
                class="mt-auto flex w-full items-center justify-between font-medium text-tg-paragraph-color max-[1200px]:justify-start"
              >
                <div class="mr-8 flex items-center">
                  <img class="mr-2" src="@/assets/images/calendar.svg" alt="" />
                  <span class="whitespace-nowrap">
                    {{ formatTime(news.createdDate) }}
                  </span>
                </div>
                <div class="flex items-center">
                  <img class="mr-2" src="@/assets/images/user.svg" alt="" />
                  <span>{{ news.author }}</span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="flex justify-center mt-10" v-if="notHome">
        <app-pagination />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
