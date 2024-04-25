<script setup lang="ts">
import TheLogo from '@/components/TheLogo.vue'
import { ref } from 'vue'

const links = [
  {
    name: 'Bosh sahifa',
    path: '/',
    inner: [
      {
        path: '',
        name: ''
      }
    ]
  },
  {
    name: 'Yangiliklar',
    path: 'news',
    inner: [
      {
        path: '',
        name: ''
      }
    ]
  },
  {
    name: 'Yoshlar ittifoqi',
    path: 'youth-union',
    inner: [
      {
        path: '',
        name: ''
      }
    ]
  },
  {
    name: 'Tuzilma',
    path: 'structure',
    inner: [
      {
        path: 'open-data',
        name: 'Ochiq ma`lumotlar'
      }
    ]
  },
  {
    name: 'Litsey haqida',
    path: 'about',
    inner: [
      {
        path: '',
        name: ''
      }
    ]
  },
  {
    name: 'Bizning faxrimiz',
    path: '/',
    inner: [
      {
        path: '',
        name: ''
      }
    ]
  },
  {
    name: 'Bog`lanish',
    path: 'contact',
    inner: [
      {
        path: '',
        name: ''
      }
    ]
  },
  {
    name: 'Rahbariyat',
    path: 'management',
    inner: [
      {
        path: 'inner-management',
        name: 'Ichki rahbariyat'
      }
    ]
  }
]

const isShow = ref(false)

const toggle = () => {
  isShow.value = !isShow.value
}
</script>

<template>
  <div class="bg-blue-500 w-full h-2 max-[1024px]:hidden1"></div>
  <header class="py-5 relative z-[1000]">
    <div class="container w-full mx-auto px-5">
      <div class="min-[1280px]:flex min-[1280px]:justify-between min-[1280px]:items-center">
        <div class="flex justify-between items-center">
          <button @click="toggle" class="flex flex-col min-[1280px]:hidden">
            <span class="h-[1px] w-7 block mb-2 bg-[#212529]"></span>
            <span class="h-[1px] w-7 block mb-2 bg-[#212529]"></span>
            <span class="h-[1px] w-7 block bg-[#212529]"></span>
          </button>
          <the-logo class="min-[1280px]:mr-5" />
          <div></div>
        </div>
        <nav
          @click="toggle"
          :class="{
            'max-[1280px]:-translate-x-full': !isShow,
            'max-[1280px]:translate-x-0': isShow
          }"
          class="bg-[#00000080] transition-all duration-200 w-full fixed left-0 top-0 h-full min-[1280px]:opacity-100 min-[1280px]:bg-white min-[1280px]:relative"
        >
          <div
            :class="{ '-translate-x-full': !isShow, 'translate-x-0': isShow }"
            @click.stop
            class="bg-white w-[80%] min-h-screen h-[1200px] transition-all duration-300 min-[1280px]:min-h-0 min-[1280px]:translate-x-0 min-[1280px]:h-auto min-[1280px]:w-full"
          >
            <div class="flex border-b p-4 items-center justify-end min-[1280px]:hidden">
              <button class="w-5" @click="toggle">
                <img src="@/assets/images/close.svg" alt="" />
              </button>
            </div>
            <ul class="flex flex-col w-full min-[1280px]:justify-end min-[1280px]:flex-row">
              <li
                v-for="link in links"
                :key="link.path"
                class="border-b px-4 min-[1280px]:border-none"
              >
                <div class="flex justify-between">
                  <router-link
                    :to="link.path"
                    class="py-4 font-medium whitespace-nowrap min-[1280px]:mr-2"
                    >{{ link.name }}</router-link
                  >
                  <button
                    v-if="link.inner[0].name.length"
                    class="w-10 flex items-center justify-center border-l min-[1280px]:border-none"
                  >
                    <img src="@/assets/images/down.svg" alt="" />
                  </button>
                </div>
                <ul class="hidden">
                  <li v-for="innerLink in link.inner" :key="innerLink.path">
                    <router-link :to="innerLink.path">{{ innerLink.name }}</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
