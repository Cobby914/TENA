import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [".trycloudflare.com", ".loca.lt"],
    proxy: {
      "/api": "http://localhost:3001"
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("@chakra-ui")) return "chakra";
          if (id.includes("@tanstack/react-query")) return "react-query";
          if (id.includes("react-router")) return "router";
          if (id.includes("framer-motion")) return "framer";
          if (id.includes("lucide-react")) return "icons";
          if (id.includes("@emotion")) return "emotion";
          return "vendor";
        }
      }
    }
  }
});
