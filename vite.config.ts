import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-react-compiler",
            {
              // Directory-based adoption: only compile these specific directories
              sources: (filename: string) => {
                return (
                  filename.includes("src/examples/propDrillingCompiled") ||
                  filename.includes("src/examples/propDrillingNaiveCompiled")
                );
              },
            },
          ],
        ],
      },
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    css: true,
  },
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
