import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'covers.openlibrary.org' },
      { protocol: 'https', hostname: 'lspfdyhgsrgsxcju.public.blob.vercel-storage.com' },
      {
        protocol: 'https',
        hostname: 'zopmtkl6bma64vn2.public.blob.vercel-storage.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
