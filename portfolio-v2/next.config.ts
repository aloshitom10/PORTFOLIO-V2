import type { NextConfig } from "next";

const pagesBasePath = process.env.PAGES_BASE_PATH;
const isPagesBuild = pagesBasePath !== undefined;

const nextConfig: NextConfig = {
  ...(isPagesBuild
    ? {
        output: "export",
        basePath: pagesBasePath || undefined,
        trailingSlash: true,
      }
    : {}),
  cacheComponents: !isPagesBuild,
  partialPrefetching: !isPagesBuild,
  devIndicators: false,
  experimental: {
    agentUpgrade: "security",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
