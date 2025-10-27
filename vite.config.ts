import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          "react-vendor": ["react", "react-dom", "react/jsx-runtime"],
          "router-vendor": ["react-router-dom"],
          "state-vendor": ["zustand", "@tanstack/react-query"],
        },
      },
    },
  },
});
