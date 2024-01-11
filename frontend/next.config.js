/** @type {import('next').NextConfig} */
const nextConfig = {
  // compiler: {
  //   styledComponents: true,
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:path*',
  //       // source: '/oauth2/authorization/:path*',
  //       destination: 'http://43.200.131.69:9090/:path*',
  //     },
  //   ];
  // },
  async headers() {
    return [
      {
        // source: '/api/:path*',
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: 'http://localhost:3000' },
          // { key: 'Access-Control-Allow-Origin', value: 'http://43.200.131.69:9090' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, OPTIONS, PATCH, DELETE, POST, PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
