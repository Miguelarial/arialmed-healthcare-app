/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: undefined,
  },
  server: {
    https: {
      key: './ssl/key.pem',
      cert: './ssl/cert.pem'
    }
  }
}

module.exports = nextConfig
