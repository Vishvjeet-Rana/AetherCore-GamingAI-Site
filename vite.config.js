import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/AetherCore-GamingAI-Site/",
  build: {
    outDir: "./docs", // More explicit relative path
    sourcemap: true,
  },
});
