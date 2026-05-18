import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// Keep manual plugin list so we don't depend on @lovable.dev wrapper.
export default defineConfig({
  plugins: [
    tanstackStart({
      server: { entry: "server" },
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
    cloudflare(),
  ],
  resolve: {
    noExternal: ["@tanstack/start**", "@tanstack/react-start**"],
  },
  optimizeDeps: {
    exclude: [
      "@tanstack/start-server-core",
      "@tanstack/start-client-core",
      "@tanstack/start-plugin-core",
      "@tanstack/react-start",
      "@tanstack/react-router",
      "@tanstack/react-router-devtools",
      "@tanstack/start-static-server-functions",
    ],
  },
  ssr: {
    noExternal: ["@tanstack/start**", "@tanstack/react-start**"],
  },
  server: {
    host: "0.0.0.0",
  },
});
