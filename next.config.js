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
  output: 'export', // Enable static export

  // Commenting out i18n since it's not compatible with output: 'export'
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },
});

export default config;
