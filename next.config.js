// next.config.js
import WithPWA from "next-pwa"; // Importing the PWA module

// Setting up PWA with configuration options
const withPWA = WithPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development", // Disable in development mode
  register: true,
  scope: "/",
  sw: "service-worker.js",
});

// Main Next.js configuration
const config = withPWA({
  reactStrictMode: true,
  output: 'export', // Enable static export
  distDir: 'dist', // Custom output directory for build files
  images: {
    unoptimized: true // Disable Next.js image optimization
  }
});

export default config; // Use ES module export syntax
