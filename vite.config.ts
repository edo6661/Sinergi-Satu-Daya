import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import viteCompression from "vite-plugin-compression";
import Sitemap from "vite-plugin-sitemap";
import { getSitemapRoutes } from "./src/seo/sitemapRoutes";

const hostname = "https://sinergisatudaya.com";
const dynamicRoutes = getSitemapRoutes();

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname,
      dynamicRoutes,
      generateRobotsTxt: false,
      changefreq: "weekly",
      priority: 0.7,
      // Home gets higher priority via defaults; dynamic routes use priority above
    }),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 10240,
    }),
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 10240,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
});
