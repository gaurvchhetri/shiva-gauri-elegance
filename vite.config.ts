// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages project sites are served from /<repo-name>/.
// The CI workflow sets BASE_PATH so assets and routes resolve correctly.
const basePath = process.env["BASE_PATH"] ?? "/";

export default defineConfig({
  vite: {
    base: basePath,
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Every page is static — prerender them to plain HTML files for static hosting.
    pages: [
      { path: "/" },
      { path: "/story" },
      { path: "/collections" },
      { path: "/products" },
      { path: "/about" },
      { path: "/contact" },
      { path: "/products/sgt-001" },
      { path: "/products/sgt-002" },
      { path: "/products/sgt-003" },
      { path: "/products/sgt-004" },
      { path: "/products/sgt-005" },
      { path: "/products/sgt-006" },
      { path: "/products/sgt-007" },
    ],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
