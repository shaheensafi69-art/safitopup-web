import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Safi TopUp | Sovereign Telecom & Enterprise Infrastructure Provider",
  description: "Global wholesale telecommunications, instant eSIM provisioning engine, and digital settlement rails. A core infrastructure subsidiary of Safi International Capital LTD.",
  keywords: [
    "Safi TopUp",
    "Telecom Provider",
    "Wholesale Airtime Rails",
    "eSIM Global Infrastructure",
    "Safi International Capital LTD",
    "SafiPay",
    "Shaheen Safi",
    "Digital Vouchers API",
    "Carrier Settlement Gateway"
  ],
  authors: [{ name: "Shaheen Safi", url: "https://shaheensafi.blog" }],
  openGraph: {
    title: "Safi TopUp | Sovereign Telecom & Enterprise Infrastructure Provider",
    description: "Wholesale carrier connectivity to 700+ global mobile networks, instant eSIM provisioning, and enterprise financial rails under Safi International Capital LTD.",
    url: "https://www.safitopup.site",
    siteName: "Safi TopUp",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Safi TopUp",
    "url": "https://www.safitopup.site",
    "logo": "https://www.safitopup.site/safitopup-logo.png",
    "description": "Sovereign wholesale telecom infrastructure, global carrier routing to 700+ networks, instant eSIM provisioning, and enterprise digital stored-value rails.",
    "parentOrganization": {
      "@type": "Organization",
      "name": "Safi International Capital LTD",
      "url": "https://safiinternationalcapitalltd.site",
      "identifier": "Company No. 17063286 (England & Wales)"
    },
    "founder": {
      "@type": "Person",
      "name": "Shaheen Safi",
      "jobTitle": "Founder & Chairman",
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
    "memberOf": [
      {
        "@type": "Organization",
        "name": "Safi International Capital LTD",
        "url": "https://safiinternationalcapitalltd.site"
      },
      {
        "@type": "Organization",
        "name": "SafiPay",
        "url": "https://www.safipay.net"
      },
      {
        "@type": "Organization",
        "name": "Safi Academy",
        "url": "https://safiacademy.org"
      },
      {
        "@type": "Organization",
        "name": "ZEV",
        "url": "https://www.zevapp.com"
      },
      {
        "@type": "Organization",
        "name": "Safi Pro",
        "url": "https://safipro.site"
      },
      {
        "@type": "Organization",
        "name": "Safi AI",
        "url": "https://www.safiai.site"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Google AdSense Verification Meta Tag */}
        <meta name="google-adsense-account" content="ca-pub-6551903544426492" />

        {/* Google AdSense Global Script */}
        <Script
          id="adsense-safitopup"
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6551903544426492"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} bg-[#030305] text-[#F0F0F5] antialiased`}>
        {children}
      </body>
    </html>
  );
}