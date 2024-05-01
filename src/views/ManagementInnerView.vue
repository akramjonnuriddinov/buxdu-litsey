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
          <div class="flex items-center gap-2 md:w-1/2">
            <span class="manager-title">Туғилган йили:</span>
            <span>22.02.1964</span>
          </div>
          <div class="flex items-center gap-2 md:w-1/2">
            <span class="manager-title">Туғилган жойи:</span>
            <span>Бухоро вилояти, Қоракўл тумани</span>
          </div>
          <div class="flex items-center gap-2 md:w-1/2">
            <span class="manager-title"> Миллати:</span>
            <span>ўзбек</span>
          </div>
          <div class="flex items-center gap-2 md:w-1/2">
            <span class="manager-title">Партиявийлиги: </span>
            <span>йўқ</span>
          </div>
          <div class="flex items-center gap-2 md:w-1/2">
            <span class="manager-title">Маълумоти:</span>
            <span>олий</span>
          </div>
          <div class="flex items-center gap-2 md:w-1/2">
            <span class="manager-title">Тамомлаган:</span>
            <span>1980 й. Бухоро давлат педагогика институти (кундузги)</span>
          </div>
        </div>
        <div>
          <h2 class="manager-main-title">Маълумоти бўйича мутахассислиги: {{ 'иқтисодчи' }}</h2>
          <div class="flex flex-wrap gap-4 md:gap-x-0">
            <div class="flex items-center gap-2 md:w-1/2">
              <span class="manager-title">Илмий даражаси:</span>
              <span>йўқ</span>
            </div>
            <div class="flex items-center gap-2 md:w-1/2">
              <span class="manager-title">Илмий унвони:</span>
              <span>йўқ</span>
            </div>
            <div class="flex items-center gap-2 md:w-1/2">
              <span class="manager-title">Қайси чет тилларини билади:</span>
              <span>рус тили</span>
            </div>
            <div class="flex items-center w-full gap-2">
              <span class="manager-title">Давлат мукофотлари билан тақдирланганми (қанақа):</span>
              <span>йўқ </span>
            </div>
            <div class="flex items-center w-full gap-2">
              <span class="manager-title"
                >Халқ депутатлари республика, вилоят, шаҳар ва туман Кенгаши депутатими ёки бошқа
                сайланадиган органларнинг аъзосими (тўлиқ кўрсатилиши лозим):</span
              >
              <span>йўқ</span>
            </div>
          </div>
        </div>
        <div>
          <h2 class="manager-main-title">МЕҲНАТ ФАОЛИЯТИ</h2>
          <ul class="flex flex-col gap-5">
            <li v-for="i in 4" :key="i">
              {{ '1975-1980 йй. - Бухоро давлат педагогика институти талабаси' }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
