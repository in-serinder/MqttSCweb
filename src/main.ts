// import './assets/main.css'
// 控件效果
import '@/style/element/input.css'
import '@/style/element/select.css'
import '@/style/element/inputISselect.css'
import '@/style/element/button.css'
import '@/style/element/textarea.css'
import '@/style/element/ul.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
