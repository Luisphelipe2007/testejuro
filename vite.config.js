import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/testejuro/', // <-- Adicione esta linha com o nome exato do seu repositório
  devtools: {
    // Remove this `apply` property to enable devtools for build as well
    apply: 'serve',
  },
  plugins: [vue()],
})
