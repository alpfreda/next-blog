/** @type {import('next').NextConfig} */
const nextConfig = {
  images : {
    domains : ['firebasestorage.googleapis.com']
  },
  experimental: {
    serverActions: true,
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    )

    return config
  },
}

module.exports = nextConfig
