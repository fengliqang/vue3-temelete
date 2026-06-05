import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default setupRouter
