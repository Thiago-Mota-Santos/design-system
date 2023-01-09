import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import macrosPlugin from 'vite-plugin-babel-macros'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCommonjs(),
  ],

})
