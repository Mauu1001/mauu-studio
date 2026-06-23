// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro, componentTagger, etc.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    target: "vercel",
  },
  nitro: true,
});
