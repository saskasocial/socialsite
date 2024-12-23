/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['@social-staking/landing'],
  experimental: {
    optimizeCss: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'standalone',
  distDir: '.next',
  basePath: '',
  trailingSlash: false,
  assetPrefix: '',
  env: {
    NEXT_PUBLIC_BASE_PATH: ''
  }
}

module.exports = nextConfig
