<script setup lang="ts">
import { getImageUrl } from '@/composables/getImageUrl'

const links = [
  {
    name: 'Bosh sahifa',
    path: '/'
  },
  {
    name: 'Yangiliklar',
    path: 'news'
  },
  {
    name: 'Yoshlar ittifoqi',
    path: 'youth-union'
  },
  {
    name: 'Tuzilma',
    path: 'structure'
  },
  {
    name: 'Litsey haqida',
    path: 'about'
  },
  {
    name: 'Bizning faxrimiz',
    path: 'teachers'
  },
  {
    name: 'Bog`lanish',
    path: 'contact'
  },
  {
    name: 'Rahbariyat',
    path: 'management'
  }
]
const footerInfoes = [
  {
    text: 'Buxoro viloyati, Qorako`l tumani',
    imgUrl: 'footer/location.svg'
  },
  {
    text: '+(998) 90-000-00-00',
    imgUrl: 'footer/phone.svg'
  },
  {
    text: 'example.mail.ru',
    imgUrl: 'footer/email.svg'
  }
]
</script>

<template>
  <footer class="text-white">
    <section class="bg-[#26282c] pb-10">
      <div class="container mx-auto px-5 pt-[100px]">
        <div class="flex justify-between flex-wrap gap-5">
          <div class="flex flex-col leading-[1.2em]">
            <span class="mb-[1em] text-[2.6em] font-semibold">Karakul Lyceum</span>
            <span class="mb-[1em] text-[1.4em] font-semibold"
              >Buxoro davlat universiteti qoshidagi</span
            >
            <span class="mb-[2em]">Qorako`l akademik litseyi</span>
            <ul>
              <li v-for="footerInfo in footerInfoes" :key="footerInfo.imgUrl" class="flex mb-5">
                <img class="w-5 mr-5" :src="getImageUrl(footerInfo.imgUrl)" alt="icon" />
                <span>{{ footerInfo.text }}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-[2.6em] mb-2 font-semibold">Havolalar</h3>
            <ul class="flex flex-col w-full">
              <li v-for="link in links" :key="link.path" class="">
                <div class="flex justify-between">
                  <router-link
                    :to="link.path"
                    class="py-4 font-medium whitespace-nowrap min-[1280px]:mr-2"
                    >{{ link.name }}</router-link
                  >
                </div>
              </li>
            </ul>
          </div>
          <div>
            <span class="flex mb-2 text-[2.6em] font-semibold">Partners</span>
            <img src="@/assets/images/partner.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="bg-blue py-5">
      <div class="container mx-auto px-5">
        <div class="flex justify-between items-center flex-wrap">
          <span class="flex mr-5">Copyright © 2024, litsey.buxdu.uz</span>
          <div class="flex items-center gap-3">
            <a href="facebook.com">
              <img class="w-4" src="/src/assets/images/footer/facebook.svg" alt="facebook" />
            </a>
            <a href="http://litsey.buxdu.uz/index.php/sayt-kartasi">
              <img class="w-8" src="/src/assets/images/footer/sitemap.svg" alt="facebook" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<style scoped></style>
