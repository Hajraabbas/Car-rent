/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Add aliases for both swr and swr/infinite
    config.resolve.alias = {
      ...config.resolve.alias,
      'swr': require.resolve('swr'),
      'swr/infinite': require.resolve('swr/infinite')
    };
    
    return config;
  },
};

module.exports = nextConfig;
