/** @type {import('next').NextConfig} */
const nextConfig = {
  // compiler: {
  //   styledComponents: true,
  // },
  async rewrites() {
    return [
      {
        source: '/',
        // source: '/',
        destination: 'https://api.campinggo.store',
        // source: '/api/login',
        // destination: 'https://api.campinggo.store',
      },
    ];
  },
};

module.exports = nextConfig;
