import { createPinia, defineStore } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import type { App } from 'vue'

interface UserInfo {
  [key: string]: unknown
}

export const setupStore = (app: App<Element>) => {
  const pinia = createPinia()

  pinia.use(piniaPluginPersistedstate)
  app.use(pinia)
}

export const useUserStore = defineStore('user', {
  state: () => ({
    token: '55555',
    userInfo: null as UserInfo | null
  }),

  actions: {
    setToken(token: string) {
      this.token = token
    },

    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo
    },

    logout() {
      this.token = ''
      this.userInfo = null
    }
  },

  // 开启持久化
  persist: true
})
