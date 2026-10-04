"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Radio, 
  Globe2, 
  Zap, 
  Cpu, 
  CheckCircle2, 
  ArrowUpRight, 
  ShieldCheck, 
  Building2,
  PhoneCall
} from "lucide-react";

export default function PartnersCarrierPage() {
  const carrierPillars = [
    {
      title: "WHOLESALE AIRTIME SWITCHING",
      sub: "SS7 & DIAMETER CARRIER RAILS",
      desc: "Direct bilateral peering and high-throughput routing to Afghanistan’s primary mobile networks (Roshan, AWCC, Etisalat, MTN, and Salaam Telecom) plus 700+ tier-1 telecommunication operators globally.",
      points: ["Real-time transaction settlement", "Dynamic balance querying", "Wholesale volume clearing pricing"]
    },
    {
      title: "ENTERPRISE eSIM PROVISIONING",
      sub: "REMOTE SIM PROVISIONING (RSP)",
      desc: "A fully GSMA SAS-SM compliant remote provisioning architecture. Enable instant eSIM QR profile generation and seamless data roaming across 150+ international jurisdictions.",
      points: ["Instant digital delivery via API", "Multi-IMSI dynamic switching", "High-speed 4G/5G carrier profiles"]
    },
    {
      title: "STORED-VALUE CLEARINGHOUSE",
      sub: "DIGITAL VOUCHERS & ASSETS",
      desc: "Instant wholesale issuance of high-demand closed-loop digital gift cards, gaming vouchers, and streaming passes (PlayStation, Steam, Xbox, Apple, Netflix) with zero inventory risk.",
      points: ["100% verified issuer codes", "Instant cryptographic PIN delivery", "Cross-currency automatic FX conversion"]
    },
    {
      title: "PREPAID UTILITY SETTLEMENT",
      sub: "CROSS-BORDER BILLING RAILS",
      desc: "Institutional clearinghouse for cross-border utility settlement, prepaid electricity meters, and municipal billing connections across emerging frontier economies.",
      points: ["Sub-second settlement speed", "Direct municipal aggregator integration", "Immutable audit trails & receipts"]
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#030305] text-[#F0F0F5] overflow-hidden selection:bg-[#D4AF37] selection:text-black">
      
      {/* Background Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-radial-grid opacity-25"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-[#D4AF37]/15 via-blue-950/10 to-transparent blur-[160px]"></div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-44 md:pt-56 pb-20 px-4 sm:px-6 text-center">
        <div className="w-[94%] max-w-[1720px] mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#D4AF37]/30 text-xs font-mono text-[#D4AF37] uppercase mb-6">
            <Radio className="w-3.5 h-3.5" />
            <span>Carrier Interconnection & Wholesale Ecosystem</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase text-white tracking-tight leading-none mb-8">
            CARRIER ALLIANCE <br />
            <span className="text-gold-gradient">& WHOLESALE NETWORK</span>
          </h1>

          <p className="max-w-3xl mx-auto text-sm sm:text-base text-[#A0A0B5] leading-relaxed">
            Safi TopUp provides telecommunications carriers, fintech institutions, and corporate aggregators with direct access to sovereign carrier switching, instant eSIM pipelines, and global stored-value clearing.
          </p>
        </div>
      </section>

      {/* --- TIER-1 STRATEGIC POWER PARTNER: DING.COM --- */}
      <section className="relative z-10 py-24 px-4 sm:px-6 bg-[#08080E]/90 border-y border-white/10">
        <div className="w-[94%] max-w-[1720px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-[40px] bg-gradient-to-br from-white/[0.04] to-black/80 border border-white/15 p-12 flex flex-col items-center justify-center shadow-2xl group hover:border-[#D4AF37] transition-all">
                <div className="relative w-48 h-24 mb-6">
                  <Image
                    src="/ding.png"
                    alt="Ding.com"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-center pt-4 border-t border-white/10 w-full">
                  <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest block font-bold">
                    STRATEGIC TIER-1 ALLIANCE
                  </span>
                  <span className="text-[11px] text-gray-400 mt-1 block">
                    Global Telecommunications Powerhouse
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D4AF37] block">
                GLOBAL TELECOM LIQUIDITY
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight">
                BACKED BY DING.COM'S <br />
                <span className="text-gold-gradient">UNRIVALED INFRASTRUCTURE</span>
              </h2>
              <p className="text-sm md:text-base text-[#A0A0B5] leading-relaxed">
                Through our strategic alliance with <strong className="text-white">Ding.com</strong>, Safi TopUp users and enterprise partners tap into the world’s most extensive top-up network. Operating across 150+ countries with direct integrations into 700+ mobile networks, this alliance guarantees 99.999% reliability and reach across more than 5 billion mobile devices.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <span className="text-3xl font-black text-[#D4AF37] block">700+</span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider block mt-1">Carriers Interconnected</span>
                  <p className="text-[11px] text-gray-400 mt-1">Direct bilateral peering with top global operators.</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <span className="text-3xl font-black text-[#D4AF37] block">150+</span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider block mt-1">Sovereign Corridors</span>
                  <p className="text-[11px] text-gray-400 mt-1">Seamless cross-border telecommunication delivery.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 4 CORE CARRIER PILLARS --- */}
      <section className="relative z-10 py-32 px-4 sm:px-6">
        <div className="w-[94%] max-w-[1720px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-[0.3em] block mb-2">
              ENTERPRISE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
              WHOLESALE CARRIER <br />
              <span className="text-gold-gradient">INTEGRATION PILLARS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {carrierPillars.map((p) => (
              <div
                key={p.title}
                className="rounded-3xl p-10 bg-[#08080E]/90 border border-white/10 hover:border-[#D4AF37]/50 transition duration-300 group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#D4AF37] tracking-widest uppercase block mb-2">
                    {p.sub}
                  </span>
                  <h3 className="text-2xl font-black text-white group-hover:text-[#D4AF37] transition uppercase mb-4">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A0A0B5] leading-relaxed mb-6 font-normal">
                    {p.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-6 border-t border-white/5">
                  {p.points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Carrier Onboarding CTA */}
          <div className="rounded-3xl p-12 bg-gradient-to-r from-[#14120A] via-[#0A0A10] to-[#121008] border border-[#D4AF37]/40 text-center max-w-4xl mx-auto space-y-6">
            <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
              READY TO ESTABLISH CARRIER PEERING?
            </h3>
            <p className="text-xs sm:text-sm text-[#A0A0B5] max-w-xl mx-auto">
              Our carrier engineers and wholesale interconnect desk are ready to assist with API credentials, sandbox testing, and SLA agreements.
            </p>
            <div className="pt-2">
              <Link
                href="/en/contact"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-[#D4AF37] text-black font-black text-xs uppercase tracking-widest hover:bg-[#F3E5AB] transition shadow-lg"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Contact Carrier Desk</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}