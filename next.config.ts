/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en', // یا هر صفحه‌ای که صفحه اصلی شماست
        permanent: true,
      },
    ];
  },
};

export default nextConfig;