import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  basePath: '/deploy-to-git',
  assetPrefix: '/deploy-to-git/' // Ensures assets load from the subfolder
}

export default nextConfig
