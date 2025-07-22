import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    // #region Uncomment this code to work with Mui v7+
    // server: {
    //   deps: {
    //     fallbackCJS: true,
    //   },
    // },
    // #endregion
  },
  plugins: [react(), tsconfigPaths()],
});
