import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    // Increase body size limit for Pro plan file uploads
    serverActions: {
      bodySizeLimit: '50mb',
    },
  },
};

export default nextConfig;
