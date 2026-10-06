"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  ShieldCheck,
  Globe2,
  Cpu,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Scale,
  FileText,
  Lock,
  ExternalLink
} from "lucide-react";

export default function Footer() {
  const ecosystemLinks = [
    {
      name: "1. Safi International Capital LTD",
      desc: "Sovereign Venture & Technology Holding (London UK Reg: 17063286)",
      url: "https://safiinternationalcapitalltd.site/",
      tag: "HOLDING"
    },
    {
      name: "2. SafiPay",
      desc: "Global Digital Banking, Multi-Currency IBANs & Card Issuing",
      url: "https://safipay.net/",
      tag: "FINTECH"
    },
    {
      name: "3. Safi Academy",
      desc: "Premier EdTech Institution, Software Engineering & Financial Markets",
      url: "https://safiacademy.org/",
      tag: "EDTECH"
    },
    {
      name: "4. ZEV App",
      desc: "Next-Gen Decentralized Creator & Social Media Super-App",
      url: "https://www.zevapp.com/",
      tag: "SOCIAL MEDIA"
    },
    {
      name: "5. Safi Pro",
      desc: "High-Growth Venture Capital Brand & Digital Software Exit",
      url: "https://safipro.site/",
      tag: "VENTURE ASSET"
    },
    {
      name: "6. Safi AI",
      desc: "Autonomous Business Agents & Advanced LLM Intelligence Lab",
      url: "https://www.safiai.site/",
      tag: "AI LAB"
    },
    {
      name: "7. Shaheen Safi (Personal Blog)",
      desc: "Official Executive Office, Essays & Thought Leadership",
      url: "https://shaheensafi.blog/",
      tag: "FOUNDER"
    }
  ];

  return (
    <footer className="relative bg-[#020204] text-[#F0F0F5] pt-24 pb-14 border-t border-white/10 overflow-hidden">

      {/* Background Lighting Grid */}
      <div className="absolute inset-0 bg-radial-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-gradient-to-t from-[#D4AF37]/10 to-transparent blur-[160px] pointer-events-none" />

      <div className="w-[94%] max-w-[1720px] mx-auto px-4 relative z-10">

        {/* --- TOP INSTITUTIONAL ACCREDITATION BAR --- */}
        <div className="pb-16 mb-16 border-b border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
            <Building2 className="w-8 h-8 text-[#D4AF37] flex-shrink-0 mt-1" />
            <div>
              <h5 className="text-xs font-black uppercase tracking-wider text-white">
                Sovereign Parent Company
              </h5>
              <p className="text-[11px] text-[#A0A0B5] mt-1 leading-relaxed">
                Wholly operated under <strong className="text-white">Safi International Capital LTD</strong> (England & Wales Company No. 17063286).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
            <Globe2 className="w-8 h-8 text-[#D4AF37] flex-shrink-0 mt-1" />
            <div>
              <h5 className="text-xs font-black uppercase tracking-wider text-white">
                Carrier-Grade Routing
              </h5>
              <p className="text-[11px] text-[#A0A0B5] mt-1 leading-relaxed">
                Direct interconnection to 700+ global telecom operators across 150+ sovereign jurisdictions.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
            <ShieldCheck className="w-8 h-8 text-[#D4AF37] flex-shrink-0 mt-1" />
            <div>
              <h5 className="text-xs font-black uppercase tracking-wider text-white">
                Institutional Security
              </h5>
              <p className="text-[11px] text-[#A0A0B5] mt-1 leading-relaxed">
                ISO/IEC 27001 certified architecture, UK GDPR compliant, zero-knowledge metadata security.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
            <Scale className="w-8 h-8 text-[#D4AF37] flex-shrink-0 mt-1" />
            <div>
              <h5 className="text-xs font-black uppercase tracking-wider text-white">
                London Legal Domicile
              </h5>
              <p className="text-[11px] text-[#A0A0B5] mt-1 leading-relaxed">
                Governed under English Common Law with dispute resolution via LCIA (London Court of International Arbitration).
              </p>
            </div>
          </div>
        </div>

        {/* --- MASTER FOOTER DIRECTORY (4 COLUMNS) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">

          {/* COL 1: BRAND & WHOLESALE TELECOM (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/en" className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden p-1 border border-[#D4AF37]/50 bg-[#0A0A10]">
                <Image
                  src="/safitopup-logo.png"
                  alt="Safi TopUp"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <span className="text-2xl font-black uppercase tracking-tight text-white">
                  SAFI <span className="text-[#D4AF37]">TOPUP</span>
                </span>
                <span className="block text-[10px] font-mono text-[#D4AF37] tracking-widest uppercase">
                  ENTERPRISE INFRASTRUCTURE PROVIDER
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#A0A0B5] leading-relaxed max-w-sm">
              Safi TopUp is the sovereign telecommunications and stored-value clearinghouse engineered by <strong className="text-white">Shaheen Safi</strong>. We deliver carrier-grade airtime switching, instant eSIM remote provisioning, and enterprise digital vouchers across emerging economies and global financial corridors.
            </p>

            <div className="pt-2">
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37] mb-2">
                STRATEGIC TIER-1 ALLIANCE
              </div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-xs text-gray-400">Powered in alliance with</span>
                <strong className="text-white font-black tracking-wider text-sm">DING.COM</strong>
              </div>
            </div>

            <div className="pt-2 text-xs text-[#7E7E90] space-y-1 font-mono">
              <div>REGISTERED ENTITY: SAFI INTERNATIONAL CAPITAL LTD</div>
              <div>COMPANY NUMBER: 17063286 • LONDON, UNITED KINGDOM</div>
            </div>
          </div>

          {/* COL 2: HOLDING ECOSYSTEM DIRECTORY (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black tracking-[0.25em] uppercase text-[#D4AF37] border-b border-white/5 pb-3">
              HOLDING ECOSYSTEM
            </h4>
            <ul className="space-y-2.5 text-xs">
              {ecosystemLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between p-2 rounded-lg hover:bg-white/[0.03] transition"
                  >
                    <div>
                      <div className="text-white font-bold group-hover:text-[#D4AF37] transition flex items-center gap-1.5">
                        <span>{item.name}</span>
                      </div>
                      <p className="text-[10px] text-[#7E7E90] line-clamp-1 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#6E6E80] group-hover:text-[#D4AF37] flex-shrink-0 mt-0.5 transition" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: GOVERNANCE & LEGAL (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black tracking-[0.25em] uppercase text-[#D4AF37] border-b border-white/5 pb-3">
              LEGAL & CODEX
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/en/about#leadership"
                  className="text-[#D4AF37] hover:text-white transition flex items-center gap-2 py-1 font-bold"
                >
                  <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Leadership Team (5 Leaders)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/en/about"
                  className="text-[#A0A0B5] hover:text-white transition flex items-center gap-2 py-1"
                >
                  <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>About Holding Charter</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/en/partners"
                  className="text-[#A0A0B5] hover:text-white transition flex items-center gap-2 py-1"
                >
                  <Globe2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Carrier Network</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/en/terms"
                  className="text-[#A0A0B5] hover:text-white transition flex items-center gap-2 py-1"
                >
                  <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Master Terms</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/en/privacy"
                  className="text-[#A0A0B5] hover:text-white transition flex items-center gap-2 py-1"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Privacy Codex</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/en/contact"
                  className="text-[#A0A0B5] hover:text-white transition flex items-center gap-2 py-1"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Wholesale Desk</span>
                </Link>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/5">
              <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-2">
                SUPERVISORY STATUS
              </span>
              <p className="text-[10px] text-[#7E7E90] leading-relaxed">
                Compliant with UK Information Commissioner’s Office (ICO), Companies House London, and GSMA intercarrier standards.
              </p>
            </div>
          </div>

          {/* COL 4: EXECUTIVE FOUNDER CARD (3 Cols) */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl p-6 bg-gradient-to-b from-white/[0.04] to-black/60 border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden group hover:border-[#D4AF37] transition-all">
              <div className="absolute top-0 right-0 px-3 py-1 rounded-bl-2xl bg-[#D4AF37] text-black text-[9px] font-black uppercase tracking-wider">
                EXECUTIVE OFFICE
              </div>

              <div className="flex items-center gap-4 mb-4 pt-2">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4AF37] p-0.5 flex-shrink-0 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  <Image
                    src="/shaheen-founder.jpg"
                    alt="Shaheen Safi"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-white text-lg font-black tracking-tight leading-none uppercase">
                    SHAHEEN SAFI
                  </h3>
                  <span className="text-[#D4AF37] text-[10px] font-black tracking-[0.2em] uppercase block mt-1">
                    DIRECTOR & FOUNDER
                  </span>
                  <span className="text-[9px] text-[#8E8EA0] font-mono block mt-0.5">
                    ITU ISTANBUL ALUMNUS
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-[#A0A0B5] leading-relaxed mb-4">
                Visionary technology entrepreneur, Director & Founder of <strong className="text-white">Safi International Capital LTD</strong>, SafiPay, Safi TopUp, and ZEV. Leading sovereign digital transformation across global markets.
              </p>

              {/* Personal Dossier & Blog Link */}
              <div className="space-y-2 mb-4">
                <Link
                  href="/en/founder/shaheen-safi"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#D4AF37] text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#F3E5AB] transition shadow-lg"
                >
                  <span>View Executive Dossier</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://shaheensafi.blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/10 transition"
                >
                  <span>Founder's Personal Blog</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Verified Profiles */}
              <div className="pt-3 border-t border-white/10 flex flex-wrap gap-2 text-[10px]">
                <a
                  href="https://www.linkedin.com/in/shaheen-safi-b73a30299/"
                  target="_blank"
                  className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-gray-300 transition"
                >
                  LinkedIn
                </a>
                <a
                  href="https://medium.com/@shaheensafi09"
                  target="_blank"
                  className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-gray-300 transition"
                >
                  Medium
                </a>
                <a
                  href="https://www.crunchbase.com/person/shaheen-safi"
                  target="_blank"
                  className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-gray-300 transition"
                >
                  Crunchbase
                </a>
                <a
                  href="https://x.com/shaheensafi011"
                  target="_blank"
                  className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-gray-300 transition"
                >
                  X (Twitter)
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* --- BOTTOM COPYRIGHT & JURISDICTION BAR --- */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7E7E90]">
          <div>
            © 2026 SAFI TOPUP INFRASTRUCTURE PROVIDER • A SUBSIDIARY OF SAFI INTERNATIONAL CAPITAL LTD (REG: 17063286).
          </div>
          <div className="flex items-center gap-4 text-[#D4AF37]">
            <span className="font-bold tracking-widest uppercase">
              ARCHITECTED & ENGINEERED BY SHAHEEN SAFI
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}