/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

import WithPWA from "next-pwa";

/**
 * @type {import('next').NextConfig}
 */
const withPWA = WithPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development", // Disable in development mode
  register: true,
  scope: "/",
  sw: "service-worker.js",
});

// @ts-ignore
const config = withPWA({
  reactStrictMode: true,
  output: 'export', // Set output to export
  distDir:'dist',
  images: {
    unoptimized: true, // Disable image optimization
  },
});

// Export the config
export default config;
