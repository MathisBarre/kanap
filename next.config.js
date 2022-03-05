/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/produits/:path*',
        destination: '/products/:path*',
      },
      {
        source: '/panier',
        destination: '/cart',
      },
    ]
  },
}

module.exports = nextConfig
