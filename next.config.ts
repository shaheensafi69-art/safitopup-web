/** @type {import('next').NextConfig} */
const nextConfig = {
  // --- حل مشکل نمایش عکس‌ها در Netlify ---
  images: {
    unoptimized: true, 
    // این تنظیم به Next.js دستور می‌دهد که عکس‌ها را بدون تغییر لود کند.
    // نتلیفای گاهی در پردازش عکس‌های محلی (Local Images) دچار اختلال می‌شود که با این کد کاملاً حل می‌گردد.
  },

  // --- تنظیمات ریدایرکت شما ---
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ];
  },

  // --- تنظیمات اضافی برای پایداری بیشتر در دپلوی ---
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;