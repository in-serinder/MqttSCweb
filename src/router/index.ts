import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SettingView from '@/views/SettingView.vue'
import LogView from '@/views/LogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // children: [],
    },
    {
      path: '/setting',
      name: 'setting',
      component: SettingView,
    },
    {
      path: '/log',
      name: 'log',
      component: LogView,
    },
  ],
})

export default router
