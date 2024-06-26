import { createApp } from 'vue'
import { Quasar } from 'quasar'
import 'quasar/dist/quasar.css'
import App from './App.vue'
import router from './router/index'  // Pastikan jalur impor benar

const app = createApp(App)

app.use(Quasar, {
  config: {}
})

app.use(router)  // Gunakan router

app.mount('#app')