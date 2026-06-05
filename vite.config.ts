import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig(({ command, mode }) => {
  const isBuild = command === 'build'
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      !isBuild && viteMockServe({
        mockPath: "mock",
        enable: env.VITE_USE_MOCK === 'true',
        logger: true,
      })
    ]
  }
})
