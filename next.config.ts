import type { NextConfig } from "next";

// Force restart

// Detect environment for build type
const isStatic = process.env.STATIC_EXPORT === 'true';

const nextConfig: NextConfig = {
  // Use 'export' only for static builds (Hostinger), 
  // otherwise default to 'standalone' or undefined for SSR/VPS
  output: isStatic ? 'export' : undefined,

  // Enable trailingSlash for static exports to generate 'about/index.html' instead of 'about.html'
  // This fixes routing issues on various static hosting providers (Hostinger, Netlify, etc.)
  trailingSlash: isStatic,
  
  // Disable image optimization for static exports as Next.js Image Optimization 
  // requires a server (VPS/Vercel)
  images: {
    unoptimized: isStatic,
  },
};

export default nextConfig;
