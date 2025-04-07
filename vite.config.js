import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
})
// satır 3 ve satır 7 sayesinde düzeldi, ve app.css dosyası içerisinde 3 tane değil 1 tane import yaptık, hepsi bu tailwind düzeldi