import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // تمام لینک‌های ارسالی شما به صورت مکمل در اینجا دسته‌بندی شده‌اند
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Safi TopUp",
    "url": "https://www.safitopup.site",
    "logo": "https://www.safitopup.site/logo.png",
    "description": "ارائه‌دهنده خدمات جهانی شارژ موبایل، بسته‌های اینترنت و گیفت‌کارت‌های دیجیتال.",
    "founder": {
      "@type": "Person",
      "name": "Shaheen Safi",
      "url": "https://shaheensafi.blog",
      "sameAs": [
        "https://www.linkedin.com/in/shaheen-safi-b73a30299/",
        "https://www.crunchbase.com/person/shaheen-safi",
        "https://x.com/shaheensafi011",
        "https://www.instagram.com/top_g_official1/",
        "https://www.facebook.com/share/1H1vuV1i9Z/",
        "https://www.tiktok.com/@safi_sahib6",
        "https://www.f6s.com/member/shaheen-safi",
        "https://www.ted.com/profiles/51476914",
        "https://medium.com/@shaheensafi09",
        "https://medium.com/@safipro011"
      ]
    },
    "sameAs": [
      "https://www.facebook.com/share/1H1vuV1i9Z/",
      "https://www.instagram.com/top_g_official1/",
      "https://www.linkedin.com/in/shaheen-safi-b73a30299/"
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "SafiPay",
        "url": "https://www.safipay.net"
      },
      {
        "@type": "Organization",
        "name": "SafiPro",
        "url": "https://www.safipro.site"
      }
    ],
    "subjectOf": [
      {
        "@type": "CreativeWork",
        "name": "The Future of Digital Banking in Afghanistan",
        "url": "https://medium.com/@shaheensafi09/the-future-of-digital-banking-in-afghanistan-the-vision-behind-safipay-3ff10c6bfaa3"
      },
      {
        "@type": "CreativeWork",
        "name": "The Infrastructure of Trust",
        "url": "https://medium.com/@omulbaninmoradi188/the-infrastructure-of-trust-how-safipay-is-redefining-digital-banking-security-in-emerging-markets-439b14641ad5"
      },
      {
        "@type": "CreativeWork",
        "name": "The Vision of an Entrepreneur",
        "url": "https://medium.com/@safipro011/the-vision-of-an-entrepreneur-who-is-shaheen-safi-7a2229cb4fbd"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* تزریق اسکیما برای شناسایی برند و موسس توسط گوگل */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* کد ادسنس */}
        <Script
          id="adsense-safitopup"
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2430648749257681"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <div className="galaxy-bg" />
        {children}
      </body>
    </html>
  );
}