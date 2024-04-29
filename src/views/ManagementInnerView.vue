<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const manager = {
  imgUrl: '',
  fullname: '',
  fromDate: '', // qachondan beri shu ishda
  role: '', // lavozimi
  dateOfBirth: '',
  location: '', // tug`ilgan joyi
  nationality: '', // millati
  partiya: '', // partiyaviyligi
  educated: '', // ma`lumoti
  educationInfo: '', // qayerni tamomlagani
  specializationInEducation: '', // mutaxasislik bo'yicha malumoti
  academicDegree: '', // ilmiy darajasi
  academicTitle: '', // ilmiy unvoni
  foreignLanguage: '', // chet tillarini bilish holati
  award: '', // davlat mukofotini olganlik holati
  deputyStatus: '', // deputatlik holati
  laborActivity: [''] // mehnat faoliyati
}
</script>

<template>
  <section class="py-[100px]">
    <div class="container px-5 mx-auto">
      <div>
        <h2 class="w-full mb-6 text-center manager-title">Бозоров Неъмат Эргашович</h2>
        <p>2018 йил 03 сентябрдан:</p>
        <div class="flex items-center">
          <p class="manager-main-title">
            Бухоро давлат университети Қоракўл академик лицейи директорининг ўқув ишлари бўйича
            директор ўринбосари
          </p>
          <img src="" />
        </div>
        <div class="flex flex-wrap gap-4 md:gap-x-0">
          <div class="flex gap-2 md:items-center md:w-1/2">
            <span class="manager-title">Туғилган йили: </span>
            <span>22.02.1964</span>
          </div>
          <div class="flex gap-2 md:items-center md:w-1/2">
            <span class="manager-title">Туғилган йили: </span>
            <span>22.02.1964</span>
          </div>
          <div class="flex gap-2 md:items-center md:w-1/2">
            <span class="manager-title">Туғилган йили: </span>
            <span>22.02.1964</span>
          </div>
          <div class="flex gap-2 md:items-center md:w-1/2">
            <span class="manager-title">Туғилган йили: </span>
            <span>22.02.1964</span>
          </div>
          <div class="flex gap-2 md:items-center md:w-1/2">
            <span class="manager-title">Туғилган йили: </span>
            <span>22.02.1964</span>
          </div>
          <div class="flex gap-2 md:items-center md:w-1/2">
            <span class="manager-title">Туғилган йили: </span>
            <span>22.02.1964</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
