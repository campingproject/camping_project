/** @type {import('next').NextConfig} */
const nextConfig = {
  // compiler: {
  //   styledComponents: true,
  // },
  async rewrites() {
    return [
      {
        source: '/api/oauth',
        // source: '/',
        // destination: '/login/redirect',
        destination: 'https://api.campinggo.store',
      },
    ];
    //   if (process.env.NODE_ENV !== 'production') {
    //     return [
    //       {
    //         source: '/api/oauth',
    //         destination: 'https://api.campinggo.store',
    //       },
    //     ];
    //   }
    // },
  },
};

module.exports = nextConfig;
