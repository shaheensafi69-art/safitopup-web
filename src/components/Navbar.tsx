"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Building2, 
  Globe2, 
  ShieldCheck, 
  Menu, 
  X, 
  ArrowUpRight, 
  PhoneCall,
  ChevronDown,
  Users,
  Scale,
  Sparkles,
  FileText
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Desktop dropdown states
  const [isEcosystemOpen, setIsEcosystemOpen] = useState(false);
  const [isLeadershipOpen, setIsLeadershipOpen] = useState(false);
  const [isGovernanceOpen, setIsGovernanceOpen] = useState(false);

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
    setIsLeadershipOpen(false);
    setIsGovernanceOpen(false);
  }, [pathname]);

  const ecosystemEntities = [
    {
      name: "Safi International Capital LTD",
      desc: "London Sovereign Parent & Venture Holding (Reg: 17063286)",
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
      desc: "Elite Technology, Coding & Financial Markets Academy",
      href: "https://safiacademy.org/",
      tag: "EDTECH",
      logo: "/safi-academy-logo.png"
    },
    {
      name: "ZEV App",
      desc: "Next-Gen Decentralized Creator & Social Media Super-App",
      href: "https://www.zevapp.com/",
      tag: "SUPER-APP",
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
      desc: "Official Executive Office & Thought Leadership Blog",
      href: "https://shaheensafi.blog/",
      tag: "EXECUTIVE OFFICE",
      logo: "/shaheen-founder.jpg"
    }
  ];

  const leaders = [
    {
      rank: "01",
      name: "Shaheen Safi",
      role: "Director & Founder",
      badge: "DIRECTOR & FOUNDER",
      img: "/shaheen.jpeg",
      href: "/en/founder/shaheen-safi",
      color: "text-amber-400 border-amber-500/30"
    },
    {
      rank: "02",
      name: "Sahel Salem",
      role: "CEO & Europe Relations",
      badge: "CEO & EUROPE RELATIONS",
      img: "/sahel.jpeg",
      href: "/en/founder/sahel-salem",
      color: "text-emerald-400 border-emerald-500/30"
    },
    {
      rank: "03",
      name: "Shirin Gol Ahmadi",
      role: "All Ecosystem Manager",
      badge: "ALL ECOSYSTEM MANAGER",
      img: "/shirin.jpeg",
      href: "/en/founder/shirin-gol-ahmadi",
      color: "text-pink-400 border-pink-500/30"
    },
    {
      rank: "04",
      name: "Mujtaba Rahmani",
      role: "Co-Founder",
      badge: "CO-FOUNDER",
      img: "/mujtaba.jpeg",
      href: "/en/founder/mujtaba-rahmani",
      color: "text-blue-400 border-blue-500/30"
    },
    {
      rank: "05",
      name: "Mobin Hassani",
      role: "Lead Developer",
      badge: "LEAD DEVELOPER",
      img: "/mobin-hassani.jpg",
      href: "/en/founder/mobin-hassani",
      color: "text-cyan-400 border-cyan-500/30"
    }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-[#050508]/92 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.85)] py-3"
            : "bg-gradient-to-b from-[#030305]/90 via-[#030305]/50 to-transparent py-5"
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

          {/* --- DESKTOP SEGMENTED NAVIGATION (SPACIOUS & CATEGORIZED) --- */}
          <nav className="hidden xl:flex items-center gap-1.5 bg-white/[0.03] border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-2xl shadow-2xl">
            
            {/* SECTION 1: NETWORK & INFRASTRUCTURE */}
            <Link
              href="/en"
              className={`px-3.5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                pathname === "/en"
                  ? "bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                  : "text-[#A0A0B5] hover:text-white hover:bg-white/5"
              }`}
            >
              OVERVIEW
            </Link>

            <Link
              href="/en/partners"
              className={`px-3.5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                pathname.includes("/partners")
                  ? "bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                  : "text-[#A0A0B5] hover:text-white hover:bg-white/5"
              }`}
            >
              CARRIER ALLIANCE
            </Link>

            {/* Subtle Divider */}
            <span className="w-px h-4 bg-white/10 mx-1" />

            {/* SECTION 2: HOLDING ECOSYSTEM DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => {
                setIsEcosystemOpen(true);
                setIsLeadershipOpen(false);
                setIsGovernanceOpen(false);
              }}
              onMouseLeave={() => setIsEcosystemOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsEcosystemOpen(!isEcosystemOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                  isEcosystemOpen ? "text-[#D4AF37] bg-white/5" : "text-[#A0A0B5] hover:text-white hover:bg-white/5"
                }`}
              >
                <span>ECOSYSTEM</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isEcosystemOpen ? "rotate-180 text-[#D4AF37]" : ""}`} />
              </button>

              {isEcosystemOpen && (
                <div className="absolute top-full left-0 mt-3 w-96 bg-[#08080E]/98 border border-[#D4AF37]/30 rounded-2xl p-3.5 shadow-[0_25px_60px_rgba(0,0,0,0.95)] backdrop-blur-3xl animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-2 border-b border-white/5 mb-2 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37]">
                      Holding Portfolio
                    </span>
                    <span className="text-[9px] font-mono text-gray-500">6 Verticals + Office</span>
                  </div>
                  <div className="space-y-1">
                    {ecosystemEntities.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-2 rounded-xl hover:bg-white/[0.04] transition group"
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

            {/* SECTION 3: LEADERSHIP & CORE FOUNDERS DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => {
                setIsLeadershipOpen(true);
                setIsEcosystemOpen(false);
                setIsGovernanceOpen(false);
              }}
              onMouseLeave={() => setIsLeadershipOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsLeadershipOpen(!isLeadershipOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                  pathname.includes("/about") || pathname.includes("/founder")
                    ? "bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                    : isLeadershipOpen
                    ? "text-[#D4AF37] bg-white/5"
                    : "text-[#A0A0B5] hover:text-white hover:bg-white/5"
                }`}
              >
                <span>LEADERSHIP TEAM</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isLeadershipOpen ? "rotate-180" : ""}`} />
              </button>

              {isLeadershipOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[460px] bg-[#08080E]/98 border border-[#D4AF37]/30 rounded-2xl p-4 shadow-[0_25px_60px_rgba(0,0,0,0.95)] backdrop-blur-3xl animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-2 border-b border-white/5 mb-3 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37]">
                      Executive Founders & Leadership
                    </span>
                    <span className="text-[9px] font-mono text-gray-500">Ordered by Rank 01 - 05</span>
                  </div>

                  {/* 5 Leaders List */}
                  <div className="space-y-1.5">
                    {leaders.map((leader) => (
                      <Link
                        key={leader.name}
                        href={leader.href}
                        className="flex items-center justify-between p-2 rounded-xl hover:bg-white/[0.05] transition group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-white/10 bg-[#121218] flex-shrink-0">
                            <Image
                              src={leader.img}
                              alt={leader.name}
                              fill
                              className="object-cover group-hover:scale-105 transition"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-black text-white group-hover:text-[#D4AF37] transition">
                                {leader.name}
                              </span>
                              <span className="text-[9px] font-mono text-gray-500">
                                #{leader.rank}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono text-gray-400 block">
                              {leader.role}
                            </span>
                          </div>
                        </div>
                        <span className={`text-[8px] font-mono px-2 py-0.5 rounded-full border ${leader.color}`}>
                          {leader.badge}
                        </span>
                      </Link>
                    ))}
                  </div>

                  {/* Charter Link */}
                  <div className="mt-3 pt-3 border-t border-white/5">
                    <Link
                      href="/en/about#leadership"
                      className="w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-[#D4AF37] hover:text-black text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition"
                    >
                      <Users className="w-3.5 h-3.5" />
                      <span>Explore Leadership & Holding Charter</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* SECTION 4: GOVERNANCE & LEGAL DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => {
                setIsGovernanceOpen(true);
                setIsEcosystemOpen(false);
                setIsLeadershipOpen(false);
              }}
              onMouseLeave={() => setIsGovernanceOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsGovernanceOpen(!isGovernanceOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                  pathname.includes("/terms") || pathname.includes("/privacy")
                    ? "bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                    : isGovernanceOpen
                    ? "text-[#D4AF37] bg-white/5"
                    : "text-[#A0A0B5] hover:text-white hover:bg-white/5"
                }`}
              >
                <span>GOVERNANCE</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isGovernanceOpen ? "rotate-180" : ""}`} />
              </button>

              {isGovernanceOpen && (
                <div className="absolute top-full right-0 mt-3 w-72 bg-[#08080E]/98 border border-[#D4AF37]/30 rounded-2xl p-3 shadow-[0_25px_60px_rgba(0,0,0,0.95)] backdrop-blur-3xl animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 border-b border-white/5 mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37]">
                      Legal Codex & Standards
                    </span>
                  </div>
                  <div className="space-y-1">
                    <Link
                      href="/en/terms"
                      className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/5 text-xs text-white transition group"
                    >
                      <FileText className="w-4 h-4 text-[#D4AF37]" />
                      <div>
                        <span className="font-bold block group-hover:text-[#D4AF37]">Master Terms</span>
                        <span className="text-[9px] text-gray-500 font-mono">English Common Law & LCIA</span>
                      </div>
                    </Link>
                    <Link
                      href="/en/privacy"
                      className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/5 text-xs text-white transition group"
                    >
                      <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                      <div>
                        <span className="font-bold block group-hover:text-[#D4AF37]">Privacy Codex</span>
                        <span className="text-[9px] text-gray-500 font-mono">UK GDPR & Data Protection</span>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

          </nav>

          {/* --- RIGHT ACTION: CLEAN SINGLE ENTERPRISE CTA --- */}
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

      {/* --- MOBILE FULLSCREEN MENU (CATEGORIZED & NEAT) --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[90] bg-[#030305]/98 backdrop-blur-3xl xl:hidden flex flex-col justify-between p-6 pt-24 overflow-y-auto">
          <div className="space-y-6">
            
            {/* Header Identity */}
            <div className="pb-3 border-b border-white/10 flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#D4AF37] tracking-[0.3em] uppercase">
                Sovereign Directory
              </span>
              <span className="text-[10px] font-mono text-gray-500">
                UK REG: 17063286
              </span>
            </div>

            {/* CATEGORY 1: TELECOM & RAILS */}
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#7E7E90] block mb-2">
                TELECOM & PARTNERS
              </span>
              <div className="grid gap-2">
                <Link
                  href="/en"
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-sm font-bold text-white hover:text-[#D4AF37] transition"
                >
                  Provider Overview
                </Link>
                <Link
                  href="/en/partners"
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-sm font-bold text-white hover:text-[#D4AF37] transition"
                >
                  Carrier Alliance (Ding & 700+ Telcos)
                </Link>
              </div>
            </div>

            {/* CATEGORY 2: EXECUTIVE LEADERSHIP TEAM */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]">
                  LEADERSHIP & CORE FOUNDERS
                </span>
                <Link href="/en/about#leadership" className="text-[10px] text-gray-400 hover:text-white underline font-mono">
                  View Charter
                </Link>
              </div>
              <div className="grid gap-2">
                {leaders.map((leader) => (
                  <Link
                    key={leader.name}
                    href={leader.href}
                    className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-white/10 bg-[#121218]">
                        <Image src={leader.img} alt={leader.name} fill className="object-cover" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#D4AF37]">
                          {leader.name}
                        </div>
                        <div className="text-[10px] text-gray-400 font-mono">
                          {leader.role}
                        </div>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono text-gray-500">#{leader.rank}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CATEGORY 3: HOLDING ECOSYSTEM */}
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#7E7E90] block mb-2">
                HOLDING PORTFOLIO
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {ecosystemEntities.slice(0, 6).map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-gray-300 hover:text-[#D4AF37]"
                  >
                    <span className="truncate">{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#D4AF37] flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* CATEGORY 4: GOVERNANCE & LEGAL */}
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#7E7E90] block mb-2">
                GOVERNANCE & CODEX
              </span>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/en/terms"
                  className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs font-bold text-gray-300 hover:text-white"
                >
                  Master Terms
                </Link>
                <Link
                  href="/en/privacy"
                  className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs font-bold text-gray-300 hover:text-white"
                >
                  Privacy Codex
                </Link>
              </div>
            </div>

          </div>

          {/* Action CTA */}
          <div className="pt-6 border-t border-white/10 mt-6">
            <Link
              href="/en/contact"
              className="w-full py-3.5 rounded-xl bg-[#D4AF37] text-black font-black text-center text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(212,175,55,0.3)]"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact Carrier Desk (Enterprise)</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}