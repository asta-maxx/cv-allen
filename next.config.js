// next.config.js
await import("./src/env.js");

import WithPWA from "next-pwa";

const withPWA = WithPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development", // Disable in development mode
  register: true,
  scope: "/",
  sw: "service-worker.js",
});

const config = withPWA({
  reactStrictMode: true,
  output: 'export', // Enable static export,
  distDir: 'dist',
  images:{
    unoptimized: true
  }
});

export default config; // Use ES module export syntax
