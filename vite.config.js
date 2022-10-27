import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages(),
    Layouts(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    },
  },
  server: {
    host: "0.0.0.0",
    port: 2000,
    proxy: {
      "/api": {
        target: "http://bgec.dev-relithe.com",
        // target: "http://172.16.10.55:1314",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "primary-color": "#fd7e14",
          "border-radius-base": "4px"
        },
        javascriptEnabled: true,
      }
    },
  }

});
