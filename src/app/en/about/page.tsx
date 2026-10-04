"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  ShieldCheck, 
  Globe2, 
  ArrowUpRight, 
  CheckCircle2, 
  ExternalLink,
  Scale,
  Award,
  BookOpen
} from "lucide-react";

export default function AboutPage() {
  const ecosystemItems = [
    {
      order: "01",
      name: "Safi International Capital LTD",
      role: "Sovereign Parent Investment & Technology Holding",
      desc: "Incorporated in London, UK (Company No: 17063286). Stewards venture capital allocations, telecommunications switching, digital banking, and AI research across emerging international corridors.",
      url: "https://safiinternationalcapitalltd.site/",
      logo: "/safi-capital-logo.png",
      tag: "PARENT HOLDING"
    },
    {
      order: "02",
      name: "SafiPay",
      role: "Global Digital Banking & Card Issuance Rails",
      desc: "Cross-border financial rails delivering multi-currency IBAN accounts (USD, EUR, GBP), virtual & physical Visa/Mastercard debit cards, and frictionless merchant liquidity.",
      url: "https://safipay.net/",
      logo: "/safipay-logo.png",
      tag: "FINTECH RAILS"
    },
    {
      order: "03",
      name: "Safi Academy",
      role: "Elite International EdTech & Research Academy",
      desc: "Global online academy training future engineers and entrepreneurs in full-stack software development, AI models, and algorithmic financial markets trading.",
      url: "https://safiacademy.org/",
      logo: "/safi-academy-logo.png",
      tag: "EDTECH"
    },
    {
      order: "04",
      name: "ZEV App",
      role: "Next-Gen Decentralized Creator & Social Media Super-App",
      desc: "Sovereign creator network featuring high-speed short-video streaming, zero-knowledge encrypted messaging, live broadcasts, and direct creator monetization.",
      url: "https://www.zevapp.com/",
      logo: "/zev-logo.png",
      tag: "SUPER-APP"
    },
    {
      order: "05",
      name: "Safi Pro",
      role: "High-Growth Venture Capital Brand & Software Exit",
      desc: "A premier software and digital lifestyle brand strategically scaled and successfully exited to fuel subsequent rounds of infrastructure innovation.",
      url: "https://safipro.site/",
      logo: "/safipro-logo.png",
      tag: "VENTURE ASSET"
    },
    {
      order: "06",
      name: "Safi AI",
      role: "Proprietary Autonomous Intelligence & LLM Lab",
      desc: "Cutting-edge artificial intelligence division engineering autonomous corporate agents, predictive market analytics, and specialized multi-lingual LLM architectures.",
      url: "https://www.safiai.site/",
      logo: "/safiai-logo.png",
      tag: "AI RESEARCH"
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#030305] text-[#F0F0F5] overflow-hidden selection:bg-[#D4AF37] selection:text-black">
      
      {/* Background Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-radial-grid opacity-25"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-[#D4AF37]/15 via-blue-950/10 to-transparent blur-[160px]"></div>
      </div>

      {/* --- HERO & FOUNDER VISION --- */}
      <section className="relative z-10 pt-44 md:pt-56 pb-24 px-4 sm:px-6">
        <div className="w-[94%] max-w-[1720px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
            
            {/* Founder Visual Frame (5 Cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-[40px] overflow-hidden border-2 border-[#D4AF37]/50 shadow-[0_0_50px_rgba(212,175,55,0.3)] group bg-[#0A0A12]">
                <Image
                  src="/shaheen-founder.jpg"
                  alt="Shaheen Safi - Founder & CEO"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="text-[10px] font-mono text-[#D4AF37] tracking-[0.3em] uppercase block mb-1">
                    CHIEF ARCHITECT & FOUNDER
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                    SHAHEEN SAFI
                  </h3>
                  <span className="text-xs text-gray-400 font-mono block mt-1">
                    Istanbul Technical University (ITU) Alumnus
                  </span>
                </div>
              </div>
            </div>

            {/* Narrative & Institutional Mission (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#D4AF37]/30 text-xs font-mono text-[#D4AF37] uppercase">
                <Building2 className="w-3.5 h-3.5" />
                <span>Executive Leadership & Holding Charter</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[0.95]">
                DISMANTLING BORDERS <br />
                <span className="text-gold-gradient">THROUGH SOVEREIGN RAILS</span>
              </h1>

              <p className="text-sm md:text-base text-[#A0A0B5] leading-relaxed">
                As a Computer Scientist from <strong className="text-white">Istanbul Technical University (ITU)</strong>, <strong className="text-white">Shaheen Safi</strong> has dedicated his career to engineering critical infrastructure that connects emerging economies with global capital, telecommunications, and digital networks.
              </p>

              <p className="text-sm md:text-base text-[#A0A0B5] leading-relaxed">
                Under his leadership as Chairman and Chief Executive, <strong className="text-white">Safi International Capital LTD</strong> has expanded from strategic early-stage ventures into a multi-vertical conglomerate operating across international fintech, carrier switching rails, artificial intelligence, and decentralized media ecosystems.
              </p>

              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#14120A] to-[#0A0A10] border border-[#D4AF37]/30 relative overflow-hidden">
                <div className="text-xs italic text-[#F3E5AB] leading-relaxed mb-3">
                  "Our mission is to establish sovereign digital freedom. We do not build ephemeral products; we engineer institutional bridges that enable entire nations to participate in global economic liquidity without friction or discrimination."
                </div>
                <div className="text-[10px] font-mono text-[#D4AF37] uppercase font-bold">
                  — Shaheen Safi, Founder & CEO
                </div>
              </div>

              {/* Direct Link to Shaheen Safi Personal Portal */}
              <div className="pt-2">
                <a
                  href="https://shaheensafi.blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#D4AF37] text-black font-black text-xs uppercase tracking-widest hover:bg-[#F3E5AB] shadow-[0_10px_25px_rgba(212,175,55,0.3)] transition"
                >
                  <span>Explore Founder's Personal Blog & Essays</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

          {/* --- THE COMPLETE 6 ENTITIES SHOWCASE --- */}
          <div className="pt-16 border-t border-white/10 mb-28">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-[0.3em] block mb-2">
                INTEGRATED HOLDING VERTICALS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
                THE SAFI INTERNATIONAL <br />
                <span className="text-gold-gradient">PORTFOLIO ECOSYSTEM</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ecosystemItems.map((item) => (
                <div
                  key={item.name}
                  className="rounded-3xl p-8 bg-[#08080E]/90 border border-white/10 hover:border-[#D4AF37]/50 transition duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                      <span className="text-2xl font-black font-mono text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition">
                        {item.order}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-[#D4AF37] uppercase font-bold">
                        {item.tag}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 mb-5">
                      <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-white/10 bg-[#12121A] p-2 flex-shrink-0 group-hover:border-[#D4AF37] transition">
                        <Image
                          src={item.logo}
                          alt={item.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-white group-hover:text-[#D4AF37] transition leading-tight">
                          {item.name}
                        </h3>
                        <span className="text-[10px] text-[#7E7E90] font-mono block mt-0.5">
                          {item.role}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-[#A0A0B5] leading-relaxed mb-6 font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition"
                  >
                    <span>Visit Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* --- INSTITUTIONAL METRICS MATRIX --- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-[#08080E]/90 border border-white/10 backdrop-blur-2xl text-center">
            <div>
              <span className="text-3xl md:text-5xl font-black text-[#D4AF37] block">700+</span>
              <span className="text-[10px] font-mono text-[#8E8EA0] uppercase tracking-widest block mt-2">
                Carrier Networks
              </span>
            </div>
            <div>
              <span className="text-3xl md:text-5xl font-black text-[#D4AF37] block">150+</span>
              <span className="text-[10px] font-mono text-[#8E8EA0] uppercase tracking-widest block mt-2">
                Global Corridors
              </span>
            </div>
            <div>
              <span className="text-3xl md:text-5xl font-black text-[#D4AF37] block">17063286</span>
              <span className="text-[10px] font-mono text-[#8E8EA0] uppercase tracking-widest block mt-2">
                London UK Reg No
              </span>
            </div>
            <div>
              <span className="text-3xl md:text-5xl font-black text-[#D4AF37] block">99.999%</span>
              <span className="text-[10px] font-mono text-[#8E8EA0] uppercase tracking-widest block mt-2">
                Carrier Core SLA
              </span>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}