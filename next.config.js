/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['gravatar.com'],
  },
  eslint: {
    dirs: ['components', 'layouts', 'lib', 'pages'],
  },
  distDir: 'build',
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
