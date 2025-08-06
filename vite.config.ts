// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/Sistema-de-IA/", // 👈 Adicione esta linha
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), componentTagger()],
}));
