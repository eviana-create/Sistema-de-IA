// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Nome do repositório no GitHub
const repo = "Sistema-de-IA";

export default defineConfig({
  base: `/${repo}/`, // Caminho base obrigatório para GitHub Pages
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: true,
    port: 8080,
  },
});
