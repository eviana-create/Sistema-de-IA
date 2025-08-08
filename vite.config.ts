import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Substitua "nome-do-repo" pelo nome exato do seu repositório no GitHub
const repo = "ai-wa-stylist"; // ou outro nome exato do seu repositório

export default defineConfig(async ({ mode }) => {
  const plugins: any[] = [react()];
  
  if (mode === 'development') {
    const { componentTagger } = await import('lovable-tagger');
    plugins.push(componentTagger());
  }

  return {
    base: `/${repo}/`, // necessário para funcionar corretamente no GitHub Pages
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  };
});
