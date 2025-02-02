/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: undefined,
  },
  env: {
    NEXT_PUBLIC_ADMIN_PASSKEY: process.env.NEXT_PUBLIC_ADMIN_PASSKEY || '',
  }
}

module.exports = nextConfig