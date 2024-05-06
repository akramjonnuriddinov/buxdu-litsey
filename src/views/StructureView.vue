<script setup lang="ts">
import { getStructure } from '@/api/structure'
import { onMounted, ref } from 'vue'

const response = ref()

onMounted(async () => {
  response.value = (await getStructure('/structures')).data
})
</script>

<template>
  <section class="py-[100px]">
    <div class="container px-5 mx-auto">
      <h2 class="mb-10 text-[1.9em] text-black leading-[40px] font-semibold">
        Buxoro davlat universiteti Qorako`l akademik litseyi Byudjet to'g'risidagi qonunchilik
        hujjatlariga muvofiq ochiq ma'lumotlari. Ushbu ma'lumotlar amaldagi qonunchilik talablaridan
        kelib chiqqan holda jismoniy va yuridik shaxslarga foydalanishlari uchun taqdim etiladi.
      </h2>
      <ul class="flex flex-col gap-5">
        <li v-for="res in response" :key="res" class="flex items-center justify-between">
          <p>{{ res.name }}</p>
          <a :href="res.fileUrl" target="_blank">
            <img src="@/assets/images/excel.png" width="60" alt="icon"
          /></a>
        </li>
      </ul>
    </div>
  </section>
</template>
