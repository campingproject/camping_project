/** @type {import('next').NextConfig} */
const nextConfig = {
  // compiler: {
  //   styledComponents: true,
  // },
  async rewrites() {
    return [
      {
        source: '/api/oauth',
        destination: 'https://api.campinggo.store',
      },
    ];
  },
};

module.exports = nextConfig;
