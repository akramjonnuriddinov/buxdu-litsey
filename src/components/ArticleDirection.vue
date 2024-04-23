<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { getImageUrl } from '@/composables/getImageUrl'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const modules = [Autoplay, Pagination, Navigation]
const breakpoints = ref({
  600: {
    slidesPerView: 1
  },
  1000: {
    slidesPerView: 3
  }
})
const swiperContents = [
  {
    id: '1',
    imgUrl: 'swiper/img1.jpg',
    text: 'Jismoniy tarbiya, sport mashg‘ulotlari nazariyasi va metodikasi'
  },
  {
    id: '1',
    imgUrl: 'swiper/img2.jpg',
    text: 'Tabiatshunoslik'
  },
  {
    id: '1',
    imgUrl: 'swiper/img3.jpg',
    text: 'Texnika fanlari'
  },
  {
    id: '1',
    imgUrl: 'swiper/img4.jpg',
    text: 'Filologiya va tilshunoslik'
  },
  {
    id: '1',
    imgUrl: 'swiper/img5.jpg',
    text: 'Pedagogika va psixologiya'
  },
  {
    id: '1',
    imgUrl: 'swiper/img6.jpg',
    text: 'Matematika, fizika va mexanika'
  },
  {
    id: '1',
    imgUrl: 'swiper/img7.jpg',
    text: 'Tibbiyot'
  },
  {
    id: '1',
    imgUrl: 'swiper/img8.jpg',
    text: 'Tarix va falsafa'
  },
  {
    id: '1',
    imgUrl: 'swiper/img9.jpg',
    text: 'Turizm va iqtisodiyot'
  },
  {
    id: '1',
    imgUrl: 'swiper/img10.jpg',
    text: 'Axborot-kommunikatsiya texnologiyalari'
  },
  {
    id: '1',
    imgUrl: 'swiper/img11.jpg',
    text: 'Geografiya'
  }
]
</script>

<template>
  <section class="py-[100px]">
    <div class="container mx-auto w-full px-5">
      <div class="mb-5 flex flex-col text-center">
        <span class="mb-4 text-center text-[1.4em] leading-[1.2em] font-semibold"
          >Bizning yo'nalishlar
        </span>
        <h2 class="text-[40px] leading-[40px] font-semibold">
          Ushbu yo'nalishlarda maqola berishingiz mumkin
        </h2>
      </div>
      <swiper
        :spaceBetween="30"
        :centered-slides="true"
        :loop="true"
        :freeMode="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false
        }"
        :modules="modules"
        :pagination="{
          clickable: true
        }"
        :breakpoints="breakpoints"
        class="mySwiper"
      >
        <swiper-slide v-for="swiperContent in swiperContents" :key="swiperContent.id">
          <div class="flex items-center justify-center">
            <div class="rounded-[30px] bg-[#FAFCFF] px-11 py-12">
              <div class="flex justify-center mb-5">
                <img :src="getImageUrl(swiperContent.imgUrl)" alt="testimonial_img" />
              </div>
              <p
                class="mb-6 line-clamp-4 h-[112px] text-black overflow-hidden text-center text-[1.4em] font-semibold leading-[1.2em] max-[600px]:text-[15px]"
              >
                {{ swiperContent.text }}
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
