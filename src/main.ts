import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import SwiperClass from 'swiper'
import 'swiper/css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

SwiperClass.use([])
app.use(createPinia())
app.use(router)

app.mount('#app')
