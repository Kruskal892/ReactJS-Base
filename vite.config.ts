/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
import path from "path";

import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [svgr(), react(), tsconfigPaths(), viteCommonjs()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTests.ts",
    },
    server: {
      host: true,
      port: +env.VITE_PORT || 9006,
      hmr: {
        overlay: false,
      },
    },
    css: {
      devSourcemap: true,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      // alias: [
      //   {
      //     find: '@',
      //     replacement: path.resolve(__dirname, 'src'),
      //   },
      // ],
    },
  };
});
