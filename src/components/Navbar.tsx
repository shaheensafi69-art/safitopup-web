"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Building2, 
  Globe2, 
  ShieldCheck, 
  Cpu, 
  Menu, 
  X, 
  ArrowUpRight, 
  PhoneCall,
  Layers,
  ChevronDown
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEcosystemOpen, setIsEcosystemOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsEcosystemOpen(false);
  }, [pathname]);

  const ecosystemEntities = [
    {
      name: "Safi International Capital LTD",
      desc: "London Holding & Sovereign Venture Capital (Reg: 17063286)",
      href: "https://safiinternationalcapitalltd.site/",
      tag: "PARENT HOLDING",
      logo: "/safi-capital-logo.png"
    },
    {
      name: "SafiPay",
      desc: "Global Multi-Currency Banking & Card Issuance Rails",
      href: "https://safipay.net/",
      tag: "FINTECH RAILS",
      logo: "/safipay-logo.png"
    },
    {
      name: "Safi Academy",
      desc: "Elite Technology, Trading & Professional EdTech Academy",
      href: "https://safiacademy.org/",
      tag: "EDTECH & RESEARCH",
      logo: "/safi-academy-logo.png"
    },
    {
      name: "ZEV App",
      desc: "Next-Gen Decentralized Creator & Social Media Super-App",
      href: "https://www.zevapp.com/",
      tag: "SOCIAL MEDIA",
      logo: "/zev-logo.png"
    },
    {
      name: "Safi Pro",
      desc: "Strategic Venture Capital Brand & Digital Software Exit",
      href: "https://safipro.site/",
      tag: "VENTURE ASSET",
      logo: "/safipro-logo.png"
    },
    {
      name: "Safi AI",
      desc: "Proprietary Autonomous Intelligence & LLM Solutions",
      href: "https://www.safiai.site/",
      tag: "AI RESEARCH",
      logo: "/safiai-logo.png"
    },
    {
      name: "Shaheen Safi",
      desc: "Official Executive Office & Personal Blog of the Founder",
      href: "https://shaheensafi.blog/",
      tag: "EXECUTIVE OFFICE",
      logo: "/shaheen-founder.jpg"
    }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-[#050508]/90 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="w-[94%] max-w-[1720px] mx-auto px-4 flex items-center justify-between">
          
          {/* --- BRAND IDENTITY --- */}
          <Link href="/en" className="flex items-center gap-3.5 group">
            <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-xl overflow-hidden p-0.5 border border-[#D4AF37]/50 shadow-[0_0_20px_rgba(212,175,55,0.25)] group-hover:border-[#D4AF37] transition-all bg-[#0A0A10]">
              <Image
                src="/safitopup-logo.png"
                alt="Safi TopUp Sovereign Telecom"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-white text-lg md:text-xl font-black tracking-tight leading-none uppercase">
                  SAFI <span className="text-[#D4AF37]">TOPUP</span>
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-[9px] font-black uppercase tracking-wider">
                  PROVIDER
                </span>
              </div>
              <span className="text-[9px] font-mono text-[#8E8EA0] tracking-widest uppercase">
                SOVEREIGN TELECOM & DIGITAL RAILS
              </span>
            </div>
          </Link>

          {/* --- DESKTOP ENTERPRISE NAVIGATION --- */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-xl shadow-2xl">
            <Link
              href="/en"
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                pathname === "/en"
                  ? "bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                  : "text-[#A0A0B5] hover:text-white hover:bg-white/5"
              }`}
            >
              PROVIDER OVERVIEW
            </Link>

            {/* ECOSYSTEM DROPDOWN */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsEcosystemOpen(!isEcosystemOpen)}
                onMouseEnter={() => setIsEcosystemOpen(true)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase text-[#A0A0B5] hover:text-white hover:bg-white/5 transition-all"
              >
                <span>HOLDING ECOSYSTEM</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#D4AF37]" />
              </button>

              {isEcosystemOpen && (
                <div
                  onMouseLeave={() => setIsEcosystemOpen(false)}
                  className="absolute top-full left-0 mt-3 w-96 bg-[#08080E]/98 border border-[#D4AF37]/30 rounded-2xl p-3.5 shadow-[0_25px_60px_rgba(0,0,0,0.95)] backdrop-blur-3xl animate-in fade-in zoom-in-95 duration-200"
                >
                  <div className="px-3 py-2 border-b border-white/5 mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37]">
                      Safi International Capital LTD Portfolio
                    </span>
                  </div>
                  <div className="space-y-1">
                    {ecosystemEntities.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.04] transition group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-white/10 bg-[#121218] p-0.5 flex-shrink-0">
                            <Image
                              src={item.logo}
                              alt={item.name}
                              fill
                              className="object-contain p-0.5"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-white group-hover:text-[#D4AF37] transition">
                                {item.name}
                              </span>
                              <span className="text-[8px] font-mono px-1.5 py-0.2 rounded bg-white/5 text-[#8E8EA0] uppercase">
                                {item.tag}
                              </span>
                            </div>
                            <p className="text-[10px] text-[#7E7E90] line-clamp-1">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#7E7E90] group-hover:text-[#D4AF37] transition" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/en/partners"
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                pathname.includes("/partners")
                  ? "bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                  : "text-[#A0A0B5] hover:text-white hover:bg-white/5"
              }`}
            >
              CARRIER ALLIANCE & DING
            </Link>

            <Link
              href="/en/about"
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                pathname.includes("/about")
                  ? "bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                  : "text-[#A0A0B5] hover:text-white hover:bg-white/5"
              }`}
            >
              FOUNDER & LEADERSHIP
            </Link>

            <Link
              href="/en/terms"
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                pathname.includes("/terms")
                  ? "bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                  : "text-[#A0A0B5] hover:text-white hover:bg-white/5"
              }`}
            >
              TERMS
            </Link>

            <Link
              href="/en/privacy"
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                pathname.includes("/privacy")
                  ? "bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                  : "text-[#A0A0B5] hover:text-white hover:bg-white/5"
              }`}
            >
              PRIVACY
            </Link>

            <Link
              href="/en/contact"
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                pathname.includes("/contact")
                  ? "bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                  : "text-[#A0A0B5] hover:text-white hover:bg-white/5"
              }`}
            >
              CARRIER DESK
            </Link>
          </nav>

          {/* --- RIGHT ACTION: NO LOGIN/SIGNUP -> ENTERPRISE INQUIRY --- */}
          <div className="flex items-center gap-3">
            <Link
              href="/en/contact"
              className="relative group overflow-hidden rounded-full p-px font-black text-xs uppercase tracking-wider"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#FFF3B0] to-[#D4AF37] animate-pulse"></div>
              <div className="relative px-5 md:px-6 py-2.5 rounded-full bg-[#030305] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300 flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5" />
                <span className="font-extrabold tracking-widest text-[11px]">
                  ENTERPRISE INQUIRY
                </span>
              </div>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:text-[#D4AF37] transition"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE FULLSCREEN MENU (COMPLETELY REDESIGNED, NO LOGIN/SIGNUP) --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[90] bg-[#030305]/98 backdrop-blur-3xl xl:hidden flex flex-col justify-between p-6 pt-28 overflow-y-auto">
          <div className="space-y-6">
            <div className="pb-4 border-b border-white/10">
              <span className="text-[10px] font-mono text-[#D4AF37] tracking-[0.3em] uppercase">
                Enterprise Carrier Navigation
              </span>
            </div>

            <nav className="flex flex-col space-y-3">
              <Link
                href="/en"
                className="text-xl font-black uppercase tracking-tight text-white hover:text-[#D4AF37] transition py-1"
              >
                Provider Overview
              </Link>
              <Link
                href="/en/partners"
                className="text-xl font-black uppercase tracking-tight text-white hover:text-[#D4AF37] transition py-1"
              >
                Carrier Alliance (Ding & 700+ Telcos)
              </Link>
              <Link
                href="/en/about"
                className="text-xl font-black uppercase tracking-tight text-white hover:text-[#D4AF37] transition py-1"
              >
                Founder & Ecosystem Leadership
              </Link>
              <Link
                href="/en/terms"
                className="text-xl font-black uppercase tracking-tight text-white hover:text-[#D4AF37] transition py-1"
              >
                Master Terms of Governance
              </Link>
              <Link
                href="/en/privacy"
                className="text-xl font-black uppercase tracking-tight text-white hover:text-[#D4AF37] transition py-1"
              >
                Institutional Privacy Codex
              </Link>
              <Link
                href="/en/contact"
                className="text-xl font-black uppercase tracking-tight text-white hover:text-[#D4AF37] transition py-1"
              >
                Carrier Desk & NOC Hotline
              </Link>
            </nav>

            <div className="pt-6 border-t border-white/10">
              <div className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider mb-3">
                Holding Group Portals
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <a
                  href="https://safiinternationalcapitalltd.site/"
                  target="_blank"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-gray-300"
                >
                  <span>1. Safi International Capital</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </a>
                <a
                  href="https://safipay.net/"
                  target="_blank"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-gray-300"
                >
                  <span>2. SafiPay</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </a>
                <a
                  href="https://safiacademy.org/"
                  target="_blank"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-gray-300"
                >
                  <span>3. Safi Academy</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </a>
                <a
                  href="https://www.zevapp.com/"
                  target="_blank"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-gray-300"
                >
                  <span>4. ZEV App</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </a>
                <a
                  href="https://safipro.site/"
                  target="_blank"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-gray-300"
                >
                  <span>5. Safi Pro</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </a>
                <a
                  href="https://www.safiai.site/"
                  target="_blank"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-gray-300"
                >
                  <span>6. Safi AI</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </a>
                <a
                  href="https://shaheensafi.blog/"
                  target="_blank"
                  className="p-2.5 rounded-xl bg-amber-500/10 border border-[#D4AF37]/30 flex items-center justify-between text-[#F3E5AB]"
                >
                  <span className="font-bold">Shaheen Safi (Personal Blog)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <Link
              href="/en/contact"
              className="w-full py-4 rounded-xl bg-[#D4AF37] text-black font-black text-center text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(212,175,55,0.3)]"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact Carrier Desk (24/7 Hotline)</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}