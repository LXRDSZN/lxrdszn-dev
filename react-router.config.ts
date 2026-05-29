import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  async buildEnd({ reactRouterConfig, viteConfig }) {
    // Copy public folder to build/client for production static serving
    const fs = await import("fs");
    const path = await import("path");
    const publicDir = path.join(process.cwd(), "public");
    const clientDir = path.join(process.cwd(), "build/client");
    
    if (fs.existsSync(publicDir)) {
      await fs.promises.cp(publicDir, clientDir, { recursive: true });
    }
  },
} satisfies Config;
