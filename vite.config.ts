import vue from "@vitejs/plugin-vue2";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm.js",
    },
  },
});
