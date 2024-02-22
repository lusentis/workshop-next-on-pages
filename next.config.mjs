/** @type {import('next').NextConfig} */
const nextConfig = {};

import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform({
    persist: true,
  });
}

export default nextConfig;
