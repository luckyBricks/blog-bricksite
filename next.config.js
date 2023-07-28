/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['jinrishici'],
  images: {
    domains: [
      'cravatar.cn',
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      'pbs.twimg.com',
      's3.us-west-2.amazonaws.com',
      'cdn.bricksite.cn',
    ],
  },
  eslint: {
    dirs: ['components', 'layouts', 'lib', 'pages'],
  },
  async headers() {
    return [
      {
        source: '/:path*{/}?',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'interest-cohort=()',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
