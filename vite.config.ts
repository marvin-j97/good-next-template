/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    coverage: {
      provider: "istanbul",
      reporter: "json",
      reportsDirectory: ".report_unit",
    },
  },
});
