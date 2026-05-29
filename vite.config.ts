import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter({
      serverBundles: ({ branch }) => {
        const isMainBranch = branch.some((route) => route.id === "root");
        return isMainBranch ? "server" : branch[0].id;
      },
    }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  publicDir: "public",
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.svg', '**/*.webp'],
});
