<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getImageUrl } from '@/composables/getImageUrl'

const route = useRoute()

const managers = ref([
  {
    imgUrl: 'managers/ergashov.png',
    fullname: 'Ergashev Qalandar Sharopovich',
    fromDate: '2018 йил 03 сентябрдан:',
    role: 'Бухоро давлат университети Қоракўл академик лицейи хўжалик ишлари бўйича',
    dateOfBirth: '05.09.1955',
    location: 'Бухоро вилояти, Қоракўл тумани',
    nationality: 'ўзбек',
    partiya: 'йўқ',
    educated: 'олий',
    educationInfo: '1980 й. Бухоро давлат педагогика институти (кундузги)',
    specializationInEducation: 'иқтисодчи',
    academicDegree: 'йўқ',
    academicTitle: 'йўқ',
    foreignLanguage: 'рус тили',
    award: 'йўқ',
    deputyStatus: 'йўқ',
    laborActivities: [
      '1975-1980 йй. - Бухоро давлат педагогика институти талабаси',
      '1980-1990 йй. - Қоракўл тумани  8-мактаб интернати ўқитувчиси',
      '1990-2009 йй. - Қоракўл тумани 1-иқтидорли болалар мактаби ўқитувчиси',
      '2009-2018 йй. - Бухоро давлат университети қошидаги 3-сон Қоракўл академик лицейи хўжалик ишлари бўйича директор ўринбосари',
      '2018 й. - ҳ.в.   - Бухоро давлат университети Қоракўл академик лицейи хўжалик ишлари бўйича директор ўринбосари'
    ]
  },
  {
    imgUrl: 'managers/bozorov.png',
    fullname: "Bozorov Ne'mat Ergashovich",
    fromDate: '2018 йил 03 сентябрдан:',
    role: 'Бухоро давлат университети Қоракўл академик лицейи директорининг ўқув ишлари бўйича директор ўринбосари',
    dateOfBirth: '22.02.1964',
    location: 'Бухоро вилояти, Қоракўл тумани',
    nationality: 'ўзбек',
    partiya: 'йўқ',
    educated: 'олий',
    educationInfo: '1989 й. Бухоро давлат педагогика институти (кундузги)',
    specializationInEducation: 'умумтехника таълими ва физика ўқитувчиси',
    academicDegree: 'йўқ',
    academicTitle: 'йўқ',
    foreignLanguage: 'рус тили',
    award: 'йўқ',
    deputyStatus: 'йўқ',
    laborActivities: [
      '1982-1989 йй. - Бухоро давлат педагогика институти талабаси',
      '1989-1990 йй. - Олот тумани пионерлар уйи тўгарак раҳбари',
      '1990-1992 йй. - Қоракўл тумани 28-мактаб  ўқитувчиси',
      '1992-2009 йй. - Қоракўл тумани 1-иқтидорли болалар мактаб интернати директор ўринбосари',
      '2009-2018 йй. - Бухоро давлат университети қошидаги 3-сон Қоракўл академик лицейи ўқув ишлари бўйича директор ўринбосари',
      '2018 й. - ҳ.в.   - Бухоро давлат университети Қоракўл академик лицейи ўқув ишлари бўйича директор ўринбосари'
    ]
  },
  {
    imgUrl: 'managers/feruz.png',
    fullname: 'Мамиров Феруз Тўрахонович',
    fromDate: '2013 йил 2 сентябрдан:',
    role: 'Бухоро давлат университети Қоракўл академик лицей маънавий-марифий ишлар бўйича директор ўринбосари',
    dateOfBirth: '06.08.1987 й',
    location: 'Бухоро вилояти, Қоракўл тумани',
    nationality: 'ўзбек',
    partiya: 'йўқ',
    educated: 'олий',
    educationInfo: '2013 йил. Бухоро Давлат Университети (кундузги)',
    specializationInEducation: 'тарихчи ',
    academicDegree: 'йўқ',
    academicTitle: 'йўқ',
    foreignLanguage: 'рус тили, инглиз тиллари',
    award: 'йўқ',
    deputyStatus: 'йўқ',
    laborActivities: [
      '2009-2013 йй. - Бухоро Давлат Университети талабаси',
      '2013-2014 йй. - Қоракўл туман 1-умумий ўрта таълим мактаби тарих фани ўқитувчиси',
      '2014-2015 йй. -  “Камолот” ёшлар ижтимоий ҳаракати Қоракўл туман Кенгаши ташкилий кадрлар  ахборот таҳлил ҳамда бошланғич ташкилотлар билан ишлаш бўлими етакчи мутахассиси',
      '2015-2016 йй. - “Камолот” ёшлар ижтимоий ҳаракати Қоракўл туман Кенгаши раиси в.в.б',
      '2016-2019 йй. - Қоракўл туман 1-умумий ўрта таълим мактаби тарих фани ўқитувчиси',
      '2019-2021 йй. – Бухоро давлат университети Қоракўл академик лицейи ёшлар етакчиси',
      '2021 й.  –  ҳ.в. - Бухоро давлат университети Қоракўл академик лицейи Ёшлар масалалари ва маънавий-маърифий ишлар бўйича директор ўринбосари'
    ]
  },
  {
    imgUrl: 'managers/direktor.png',
    fullname: "Jumaqulov G'olib Hasanovich",
    fromDate: '',
    role: 'Direktor',
    dateOfBirth: '04.09.1978',
    location: 'Бухоро вилояти, Қоракўл тумани',
    nationality: 'ўзбек',
    partiya: 'йўқ',
    educated: 'олий',
    educationInfo:
      ' 1999 й. Бухоро давлат университети (бакалавр), 2013 й. Бухоро давлат университети (магистратура)',
    specializationInEducation: 'амалий математика ва информатика',
    academicDegree: 'йўқ',
    academicTitle: 'йўқ',
    foreignLanguage: 'рус тили',
    award: 'йўқ',
    deputyStatus: 'йўқ',
    laborActivities: [
      '1995-1999 йй. - Бухоро давлат университети талабаси',
      '1999-2009 йй. - Қоракўл тумани 1-иқтидорли болалар мактаб интернати ўқитувчиси',
      '2009-2010 йй. - Қоракўл тумани 15-мактаб ўқитувчиси',
      '2010-2010 йй. - Ўзбекистон Республикаси Призиденти ҳузуридаги давлат ва жамияти қурилиш академияси',
      '2010-2011 йй. - Бухоро давлат университети қошидаги 3-сон Қоракўл академик лицейи бўлим бошлиғи',
      '2011-2013 йй. - Бухоро давлат университети магистранти',
      '2013-2016 йй. - Бухоро давлат университети қошидаги 3-сон Қоракўл академик лицейи бўлим бошлиғи',
      '2016-2017 йй. - Бухоро давлат университети қошидаги 3-сон Қоракўл академик лицейи директор ўринбосари',
      '2017-2018 йй. - Бухоро давлат университети қошидаги 3-сон Қоракўл академик лицейи директори',
      '2018 й. - ҳ.в.   - Бухоро давлат университети  Қоракўл академик лицейи директори'
    ]
  }
])

const user = managers.value.filter((item: any) => item.fullname == route.params.id)[0]
</script>

<template>
  <section class="py-[100px] leading-6">
    <div class="container px-5 mx-auto">
      <div>
        <h2 class="w-full mb-6 text-center manager-title">{{ user.fullname }}</h2>
        <p>2018 йил 03 сентябрдан:</p>
        <div class="flex items-center justify-between">
          <p class="manager-main-title">
            {{ user.role }}
          </p>
          <img width="200" :src="getImageUrl(user.imgUrl)" />
        </div>
        <div class="flex flex-wrap gap-4 md:gap-x-0">
          <div class="flex items-center gap-2 md:w-1/2">
            <span class="manager-title">Туғилган йили:</span>
            <span>{{ user.dateOfBirth }}</span>
          </div>
          <div class="flex items-center gap-2 md:w-1/2">
            <span class="manager-title">Туғилган жойи:</span>
            <span>{{ user.location }}</span>
          </div>
          <div class="flex items-center gap-2 md:w-1/2">
            <span class="manager-title"> Миллати:</span>
            <span>{{ user.nationality }}</span>
          </div>
          <div class="flex items-center gap-2 md:w-1/2">
            <span class="manager-title">Партиявийлиги: </span>
            <span>{{ user.partiya }}</span>
          </div>
          <div class="flex items-center gap-2 md:w-1/2">
            <span class="manager-title">Маълумоти:</span>
            <span>{{ user.educated }}</span>
          </div>
          <div class="flex items-center gap-2 md:w-1/2">
            <span class="manager-title">Тамомлаган:</span>
            <span>{{ user.educationInfo }}</span>
          </div>
        </div>
        <div>
          <h2 class="manager-main-title">
            Маълумоти бўйича мутахассислиги: {{ user.specializationInEducation }}
          </h2>
          <div class="flex flex-wrap gap-4 md:gap-x-0">
            <div class="flex items-center gap-2 md:w-1/2">
              <span class="manager-title">Илмий даражаси:</span>
              <span>{{ user.academicDegree }}</span>
            </div>
            <div class="flex items-center gap-2 md:w-1/2">
              <span class="manager-title">Илмий унвони:</span>
              <span>{{ user.academicTitle }}</span>
            </div>
            <div class="flex items-center gap-2 md:w-1/2">
              <span class="manager-title">Қайси чет тилларини билади:</span>
              <span>{{ user.foreignLanguage }}</span>
            </div>
            <div class="flex items-center w-full gap-2">
              <span class="manager-title">Давлат мукофотлари билан тақдирланганми (қанақа):</span>
              <span>{{ user.award }}</span>
            </div>
            <div class="flex items-center w-full gap-2">
              <span class="manager-title"
                >Халқ депутатлари республика, вилоят, шаҳар ва туман Кенгаши депутатими ёки бошқа
                сайланадиган органларнинг аъзосими (тўлиқ кўрсатилиши лозим):</span
              >
              <span>{{ user.deputyStatus }}</span>
            </div>
          </div>
        </div>
        <div>
          <h2 class="manager-main-title">МЕҲНАТ ФАОЛИЯТИ</h2>
          <ul class="flex flex-col gap-5">
            <li v-for="laborActivity in user.laborActivities" :key="laborActivity">
              <p>
                {{ laborActivity }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
