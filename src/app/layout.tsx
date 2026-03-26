import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Safi TopUp | Global Connectivity",
  description: "Global airtime, data bundles, and digital assets by Shaheen Safi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // زبان اصلی روی انگلیسی تنظیم شده است
    <html lang="en">
      <body className="bg-[#020202] antialiased selection:bg-[#D4AF37] selection:text-black">
        {children}
      </body>
    </html>
  );
}