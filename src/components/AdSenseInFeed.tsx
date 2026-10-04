"use client";

import React, { useEffect } from "react";

interface AdSenseInFeedProps {
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

export default function AdSenseInFeed({ className = "" }: AdSenseInFeedProps) {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("AdSense In-Feed Error:", err);
    }
  }, []);

  return (
    <div className={`w-full max-w-5xl mx-auto my-12 px-4 ${className}`}>
      <div className="relative rounded-2xl bg-[#08080E]/70 border border-white/5 p-4 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-[#D4AF37]/20 shadow-lg overflow-hidden">
        {/* AdSense Compliance Disclosure Header */}
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/5">
          <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-[#8E8EA0]">
            SPONSORED PARTNER • ADVERTISEMENT
          </span>
          <span className="text-[9px] font-mono text-[#D4AF37]/60 uppercase">
            GOOGLE ADSENSE SECURE NETWORK
          </span>
        </div>

        {/* Google AdSense In-Feed Responsive Unit */}
        <div className="w-full min-h-[120px] overflow-hidden">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-format="fluid"
            data-ad-layout-key="-fb+5w+4e-db+86"
            data-ad-client="ca-pub-6551903544426492"
            data-ad-slot="7850779200"
          ></ins>
        </div>
      </div>
    </div>
  );
}
