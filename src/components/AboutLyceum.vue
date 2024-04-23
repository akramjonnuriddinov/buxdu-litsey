<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
</script>

<template>
  <section class="py-[100px]">
    <div class="container mx-auto px-5">
      <div class="flex flex-col min-[1280px]:flex-row">
        <div class="mb-10">
          <h2 class="font-medium text-5xl leading-[1]">Buxoro davlat universiteti</h2>
          <span class="my-[1em] block">Qorako'l akademik litsey</span>
          <p class="leading-[1.75em] mb-6">
            1995 yilda «Oʼzbekiston Respublikasi Xalq oʼqituvchisi » unvoni , 2005 yilda «El - yurt
            hurmati » ordeni bilan mukofotlangan .Umumiy mexnat staji 50 yil. Mazkur lavozimda 2009
            yildan buyon ishlab kelmoqda . T.Jumaev Respublika Miqyosida yaxshi tanilgan, kata
            pedagogik tajribaga ega boʼlgan mohir oʼqituvchi, obro'- e'tiborli, tashkilotchi
            rahbarlardan biri hisoblanadi.
          </p>
          <router-link to="/about">
            <base-button>Batafsil</base-button>
          </router-link>
        </div>
        <div class="w-full p-5 border-blue border-t-4 flex items-center justify-center">
          <img class="lyceum-img" src="/src/assets/images/home/lyceum.png" alt="Lyceum image" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.lyceum-img {
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.25);
}
</style>
