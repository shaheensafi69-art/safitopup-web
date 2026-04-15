import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

// چون پوشه‌ها ثابت (Static) هستند، در این لایه پارامتر ورودی نداریم
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"> {/* زبان پیش‌فرض یا پایه */}
      <head>
        {/* کد مخصوص گوگل ادسنس برای سایت صافی تاپ‌آپ */}
        <Script
          id="adsense-safitopup"
          strategy="afterInteractive"
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