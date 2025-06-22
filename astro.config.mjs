// @ts-check
<<<<<<< HEAD
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: "static",
  server: {
    port: 3000,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
=======
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});
>>>>>>> a28139a9bf635333ab452c96d031eb4fde075214
