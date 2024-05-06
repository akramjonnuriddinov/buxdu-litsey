<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { getYouth } from '@/api/youth'
import { formatTime } from '@/composables/formatTime'
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
  const data = await getYouth('members')
  allNews.value = data.data.data.body
  isLoading.value = false
  console.log(allNews.value)
})
setTimeout(() => {
  if (isLoading.value) {
    isLoading.value = false
  }
}, 1000)
</script>

<template>
  <loader-wrapper v-if="isLoading">
    <app-loader />
  </loader-wrapper>
  <section class="bg-[#f7f7f7] pb-[100px]">
    <div class="container px-5 mx-auto">
      <slot name="news-top" />

      <ul class="flex w-full flex-wrap justify-between max-[1200px]:flex-col">
        <li v-for="news in allNews" :key="news.data.id" class="w-1/2 px-4 max-[1200px]:w-auto">
          <div
            class="blog-inner mb-7 flex rounded-[10px] border transition-all duration-300 max-[650px]:flex-col"
          >
            <img
              :src="'http://185.196.213.14:4041/api/v1/' + news.datathumbNailImageUrl"
              class="min-h-[230px] min-w-[240px] max-h-[230px] max-w-[240px] rounded-bl-[10px] rounded-tl-[10px] object-contain max-[650px]:min-h-full max-[650px]:max-w-full max-[650px]:rounded-bl-none max-[650px]:rounded-tr-[10px]"
              width="771"
              height="430"
              :alt="news.datatitle"
            />
            <div
              class="blog-content flex w-full flex-col items-start rounded-br-[10px] rounded-tr-[10px] bg-white px-[30px] py-[25px] transition-all duration-300 max-[650px]:rounded-bl-[10px] max-[650px]:rounded-tl-none max-[650px]:rounded-tr-none"
            >
              <span
                class="mb-4 max-w-[250px] truncate rounded-[5px] bg-[#EEE8FF] px-[11px] py-[6px] text-xs font-semibold capitalize transition-all duration-300 hover:text-tg-white max-[1300px]:max-w-[200px]"
                >{{ news.datasubTitle }}</span
              >
              <router-link
                :to="{
                  name: 'newsInner',
                  params: {
                    id: news.dataid
                  }
                }"
                class="transition-color mb-4 line-clamp-3 text-[22px] font-bold leading-[1.2] text-tg-heading-font-color duration-300"
                >{{ news.datatitle }}</router-link
              >
              <div
                class="mt-auto flex w-full items-center justify-between font-medium text-tg-paragraph-color max-[1200px]:justify-start"
              >
                <div class="flex items-center mr-8">
                  <img class="mr-2" src="@/assets/images/calendar.svg" alt="" />
                  <span class="whitespace-nowrap">
                    {{ formatTime(news.datacreatedDate) }}
                  </span>
                </div>
                <div class="flex items-center">
                  <img class="mr-2" src="@/assets/images/user.svg" alt="" />
                  <span>{{ news.dataauthor }}</span>
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
