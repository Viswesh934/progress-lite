
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    exclude: ["progress-lite"], // don’t prebundle it with Rollup internals
  },
  ssr: {
    noExternal: ["progress-lite"], // bundle it for SSR so Vercel won’t choke
  }
})