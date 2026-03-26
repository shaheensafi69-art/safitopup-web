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
    <html lang="en">
      <body 
        className="bg-[#020202] antialiased selection:bg-[#D4AF37] selection:text-black min-h-screen"
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}