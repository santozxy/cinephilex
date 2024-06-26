import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  base: "/",
  resolve: {
    alias: {
      "@components": "/src/components",
      "@utils": "/src/utils",
      "@assets": "/src/assets",
      "@hooks": "/src/hooks",
      "@services": "/src/services",
    },
  },
  build: {
    cssCodeSplit: false,
    chunkSizeWarningLimit: 500,
  },
});
