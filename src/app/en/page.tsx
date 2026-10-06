import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Building2, 
  Globe2, 
  ShieldCheck, 
  Cpu, 
  ArrowUpRight, 
  PhoneCall, 
  Radio, 
  Layers, 
  FileText, 
  Scale, 
  Activity, 
  CheckCircle2, 
  Zap, 
  ExternalLink,
  ChevronRight,
  Database
} from "lucide-react";
import AdSenseInFeed from "@/components/AdSenseInFeed";
import LeadershipTeam from "@/components/LeadershipTeam";

export default function EnglishHomePage() {
  const ecosystemData = [
    {
      index: "01",
      name: "Safi International Capital LTD",
      orderLabel: "FIRST: SOVEREIGN PARENT HOLDING",
      tag: "INVESTMENT & TECHNOLOGY HOLDING",
      desc: "The sovereign parent institution domiciled in London, United Kingdom (Company Reg No: 17063286). Safi International Capital oversees multi-vertical venture assets, cross-border fintech infrastructure, telecommunication switching rails, and artificial intelligence laboratories across international corridors.",
      url: "https://safiinternationalcapitalltd.site/",
      logo: "/safi-capital-logo.png",
      stats: ["London Registered", "Company No: 17063286", "English Common Law"],
      accent: "from-amber-500/20 via-yellow-500/10 to-transparent",
      highlight: true
    },
    {
      index: "02",
      name: "SafiPay",
      orderLabel: "SECOND: GLOBAL DIGITAL BANKING",
      tag: "FINANCIAL INFRASTRUCTURE & CARDS",
      desc: "Next-generation international digital banking rails engineered to dismantle regional economic isolation. Provides multi-currency IBAN accounts (USD, EUR, GBP), virtual and physical Visa/Mastercard debit card issuance, automated clearing, and real-time liquidity settlement for cross-border commerce.",
      url: "https://safipay.net/",
      logo: "/safipay-logo.png",
      stats: ["Multi-Currency IBANs", "Visa & Mastercard Issuing", "Global Remittances"],
      accent: "from-blue-600/20 via-cyan-500/10 to-transparent",
      highlight: false
    },
    {
      index: "03",
      name: "Safi Academy",
      orderLabel: "THIRD: ELITE EDTECH ACADEMY",
      tag: "TECHNOLOGY & FINANCIAL MARKETS",
      desc: "Premier international EdTech and research institution equipping students and emerging professionals with mastery over software engineering, artificial intelligence systems, full-stack architecture, and global algorithmic financial markets trading.",
      url: "https://safiacademy.org/",
      logo: "/safi-academy-logo.png",
      stats: ["Live Interactive LMS", "Coding & AI Degrees", "Financial Markets Trading"],
      accent: "from-emerald-600/20 via-teal-500/10 to-transparent",
      highlight: false
    },
    {
      index: "04",
      name: "ZEV App",
      orderLabel: "FOURTH: CREATOR MEDIA SUPER-APP",
      tag: "SOCIAL NETWORK & DIGITAL COMMERCE",
      desc: "Next-generation decentralized creator super-app featuring high-performance short-video streaming, zero-knowledge encrypted messaging, instant creator monetization, and community sovereign governance built on cross-platform reactive architecture.",
      url: "https://www.zevapp.com/",
      logo: "/zev-logo.png",
      stats: ["End-to-End Encryption", "Short-Form Video Engine", "Creator Monetization"],
      accent: "from-purple-600/20 via-pink-500/10 to-transparent",
      highlight: false
    },
    {
      index: "05",
      name: "Safi Pro",
      orderLabel: "FIFTH: VENTURE CAPITAL ASSET",
      tag: "VENTURE COMMERCE & SOFTWARE EXIT",
      desc: "The foundation of our venture capital deployment. A high-growth premium digital lifestyle and software commerce brand strategically engineered, scaled, and exited to capitalize next-generation institutional telecommunications and financial infrastructure.",
      url: "https://safipro.site/",
      logo: "/safipro-logo.png",
      stats: ["Strategic Capital Exit", "E-Commerce Rails", "Venture Growth Asset"],
      accent: "from-amber-600/20 via-orange-500/10 to-transparent",
      highlight: false
    },
    {
      index: "06",
      name: "Safi AI",
      orderLabel: "SIXTH: ARTIFICIAL INTELLIGENCE LAB",
      tag: "AUTONOMOUS AGENTS & ENTERPRISE LLM",
      desc: "Advanced proprietary AI research division specializing in autonomous enterprise agents, multilingual natural language models optimized for regional dialects (Dari, Pashto, English, Turkish), and high-frequency automated decision engines.",
      url: "https://www.safiai.site/",
      logo: "/safiai-logo.png",
      stats: ["Proprietary LLMs", "Autonomous Agents", "Enterprise NLP Processing"],
      accent: "from-cyan-600/20 via-blue-500/10 to-transparent",
      highlight: false
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#030305] text-[#F0F0F5] overflow-hidden selection:bg-[#D4AF37] selection:text-black">
      
      {/* --- AMBIENT BACKGROUND LIGHTING & GRID --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-radial-grid opacity-30"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[750px] bg-gradient-to-b from-[#D4AF37]/15 via-blue-950/10 to-transparent blur-[160px]"></div>
        <div className="absolute top-[1600px] left-[-200px] w-[800px] h-[800px] bg-[#D4AF37]/5 blur-[200px]"></div>
        <div className="absolute top-[3200px] right-[-200px] w-[800px] h-[800px] bg-blue-900/10 blur-[200px]"></div>
      </div>

      {/* ========================================================= */}
      {/* 1. HERO SECTION: INSTITUTIONAL PROVIDER POSITIONING       */}
      {/* ========================================================= */}
      <section className="relative z-10 pt-44 md:pt-56 pb-24 px-4 sm:px-6">
        <div className="w-[94%] max-w-[1720px] mx-auto text-center">
          
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.03] border border-[#D4AF37]/40 backdrop-blur-2xl shadow-[0_0_25px_rgba(212,175,55,0.15)] mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-ping" />
            <span className="text-[#D4AF37] text-xs font-mono font-bold tracking-[0.3em] uppercase">
              SOVEREIGN TELECOM & DIGITAL INFRASTRUCTURE PROVIDER
            </span>
          </div>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[6.5rem] font-black tracking-tight leading-[0.9] uppercase text-white mb-8">
            WHOLESALE CARRIER RAILS
            <br />
            <span className="text-gold-gradient font-black">
              & GLOBAL TELECOM SWITCHING
            </span>
          </h1>

          {/* Institutional Positioning Statement */}
          <p className="max-w-4xl mx-auto text-sm sm:text-base md:text-lg text-[#A0A0B5] font-normal leading-relaxed mb-12">
            Safi TopUp is the sovereign wholesale telecommunications clearinghouse and carrier API provider operating under <strong className="text-white">Safi International Capital LTD</strong>. We bridge emerging frontier economies with 700+ mobile network operators, instant eSIM provisioning pipelines, and institutional digital settlement rails worldwide.
          </p>

          {/* Enterprise CTAs (NO LOGIN / SIGNUP) */}
          <div className="flex flex-wrap items-center justify-center gap-5 mb-16">
            <Link
              href="/en/contact"
              className="px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-[#D4AF37] text-black font-black text-xs uppercase tracking-[0.25em] shadow-[0_15px_35px_rgba(212,175,55,0.35)] hover:bg-[#F3E5AB] hover:shadow-[0_20px_45px_rgba(212,175,55,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              REQUEST CARRIER ACCESS
            </Link>
            
            <a
              href="#ecosystem"
              className="px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white/[0.04] border border-white/20 text-white font-bold text-xs uppercase tracking-[0.25em] hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              <span>HOLDING ECOSYSTEM</span>
              <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
            </a>
          </div>

          {/* Live Telemetry / Network Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 p-4 rounded-3xl bg-[#08080E]/90 border border-white/10 backdrop-blur-2xl shadow-2xl max-w-5xl mx-auto text-left">
            <div className="p-4 border-r border-white/5 last:border-0">
              <span className="text-[10px] font-mono text-[#8E8EA0] uppercase block">DIRECT NETWORKS</span>
              <span className="text-2xl lg:text-3xl font-black text-white italic">700+</span>
              <span className="text-[10px] text-[#D4AF37] block mt-0.5">Tier-1 Telcos</span>
            </div>
            <div className="p-4 border-r border-white/5 last:border-0">
              <span className="text-[10px] font-mono text-[#8E8EA0] uppercase block">GLOBAL JURISDICTIONS</span>
              <span className="text-2xl lg:text-3xl font-black text-white italic">150+</span>
              <span className="text-[10px] text-green-400 block mt-0.5">Active Corridors</span>
            </div>
            <div className="p-4 border-r border-white/5 last:border-0">
              <span className="text-[10px] font-mono text-[#8E8EA0] uppercase block">CARRIER CORE SLA</span>
              <span className="text-2xl lg:text-3xl font-black text-white italic">99.999%</span>
              <span className="text-[10px] text-emerald-400 block mt-0.5">High-Availability</span>
            </div>
            <div className="p-4 border-r border-white/5 last:border-0">
              <span className="text-[10px] font-mono text-[#8E8EA0] uppercase block">ROUTING LATENCY</span>
              <span className="text-2xl lg:text-3xl font-black text-white italic">&lt; 180ms</span>
              <span className="text-[10px] text-cyan-400 block mt-0.5">Real-Time Transit</span>
            </div>
            <div className="p-4 col-span-2 md:col-span-1">
              <span className="text-[10px] font-mono text-[#8E8EA0] uppercase block">TOTAL REACH</span>
              <span className="text-2xl lg:text-3xl font-black text-white italic">5B+</span>
              <span className="text-[10px] text-[#D4AF37] block mt-0.5">Mobile Subscribers</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. THE HOLDING ECOSYSTEM: 6 ENTITIES IN EXACT ORDER +     */}
      {/*    DEDICATED EXECUTIVE BOX FOR SHAHEEN SAFI (USER ORDER)  */}
      {/* ========================================================= */}
      <section id="ecosystem" className="relative z-10 py-32 px-4 sm:px-6 border-t border-white/10 bg-[#05050A]/70">
        <div className="w-[94%] max-w-[1720px] mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D4AF37] block mb-3">
              SAFI INTERNATIONAL CAPITAL LTD • MULTI-VERTICAL CONGLOMERATE
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-tight mb-6">
              SOVEREIGN VENTURE <br />
              <span className="text-gold-gradient">& TECHNOLOGY PORTFOLIO</span>
            </h2>
            <p className="text-sm md:text-base text-[#A0A0B5] leading-relaxed">
              Safi TopUp is proud to operate as the flagship wholesale telecommunications division of the global investment holding company <strong className="text-white">Safi International Capital LTD</strong> (London, UK • Reg: 17063286). Explore the complete ecosystem of subsidiaries architected by <strong className="text-white">Shaheen Safi</strong>:
            </p>
          </div>

          {/* Grid of the 6 Companies in Exact Sequence */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {ecosystemData.map((item) => (
              <div
                key={item.name}
                className={`rounded-3xl p-8 bg-[#08080E]/90 border transition-all duration-500 relative group flex flex-col justify-between ${
                  item.highlight
                    ? "border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.2)] bg-gradient-to-b from-[#14120A] to-[#08080E]"
                    : "border-white/10 hover:border-[#D4AF37]/50 hover:shadow-2xl"
                }`}
              >
                <div>
                  {/* Top Bar with Number & Order Badge */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                    <span className="text-2xl font-black font-mono text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition">
                      {item.index}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-[#D4AF37] uppercase tracking-wider font-bold">
                      {item.orderLabel}
                    </span>
                  </div>

                  {/* Logo & Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-white/15 bg-[#12121A] p-2 flex-shrink-0 group-hover:border-[#D4AF37] transition shadow-lg">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#8E8EA0] uppercase tracking-wider block">
                        {item.tag}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#D4AF37] transition leading-tight">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#A0A0B5] leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-8">
                    {item.stats.map((s, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visit External Website Button */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-5 rounded-2xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition duration-300 ${
                    item.highlight
                      ? "bg-[#D4AF37] text-black hover:bg-[#F3E5AB] shadow-lg"
                      : "bg-white/5 border border-white/15 text-white hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37]"
                  }`}
                >
                  <span>Explore Subsidiary</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>

          {/* ========================================================= */}
          {/* DEDICATED BESPOKE EXECUTIVE BOX: SHAHEEN SAFI (USER ORDER) */}
          {/* ========================================================= */}
          <div className="rounded-[35px] p-8 md:p-14 bg-gradient-to-r from-[#121008] via-[#0C0B08] to-[#14120C] border-2 border-[#D4AF37]/60 shadow-[0_0_60px_rgba(212,175,55,0.25)] relative overflow-hidden group">
            
            <div className="absolute top-0 right-0 px-6 py-2 rounded-bl-3xl bg-[#D4AF37] text-black text-[11px] font-black tracking-[0.25em] uppercase shadow-lg">
              OFFICIAL FOUNDER PORTAL
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Photo & Identity (4 Cols) */}
              <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-[#D4AF37] p-1.5 shadow-[0_0_35px_rgba(212,175,55,0.4)] mb-6 bg-[#0B0B10]">
                  <Image
                    src="/shaheen-founder.jpg"
                    alt="Shaheen Safi - Founder & CEO"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase leading-none">
                  SHAHEEN SAFI
                </h3>
                <span className="text-xs font-mono text-[#D4AF37] font-black tracking-[0.3em] uppercase mt-2 block">
                  FOUNDER, CHAIRMAN & CHIEF ARCHITECT
                </span>
                <span className="text-[11px] text-gray-400 font-mono mt-1 block">
                  Computer Scientist • Istanbul Technical University (ITU)
                </span>
              </div>

              {/* Founder Narrative & Vision (5 Cols) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-[#D4AF37] uppercase">
                  <span>Leadership Philosophy</span>
                </div>
                <h4 className="text-xl md:text-2xl font-black text-white leading-tight uppercase">
                  "ENGINEERING DIGITAL SOVEREIGNTY AND DISMANTLING REGIONAL BORDERS."
                </h4>
                <p className="text-xs md:text-sm text-[#A0A0B5] leading-relaxed">
                  As the founding visionary behind <strong className="text-white">Safi International Capital LTD</strong>, <strong className="text-white">SafiPay</strong>, <strong className="text-white">Safi TopUp</strong>, and <strong className="text-white">ZEV</strong>, Shaheen Safi leads the strategic design of cross-border telecom switching, zero-knowledge financial nodes, and high-frequency digital settlement networks connecting frontier markets to global economic liquidity.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-gray-400 font-mono pt-1">
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">FinTech Architecture</span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">SS7/Diameter Telecom</span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">Sovereign Venture Capital</span>
                </div>
              </div>

              {/* Direct Actions & Publications (3 Cols) */}
              <div className="lg:col-span-3 flex flex-col justify-center gap-4 bg-black/40 p-6 rounded-2xl border border-white/10">
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block text-center lg:text-left">
                  PERSONAL BLOG & EXECUTIVE DESK
                </span>
                
                <a
                  href="https://shaheensafi.blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-xl bg-[#D4AF37] text-black font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(212,175,55,0.4)] hover:bg-[#F3E5AB] transition duration-300"
                >
                  <span>Visit Personal Blog</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <div className="text-[11px] text-[#A0A0B5] font-mono space-y-2 pt-2 border-t border-white/10">
                  <a
                    href="https://medium.com/@shaheensafi09"
                    target="_blank"
                    className="flex items-center justify-between text-gray-300 hover:text-[#D4AF37] transition"
                  >
                    <span>Read Medium Articles</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shaheen-safi-b73a30299/"
                    target="_blank"
                    className="flex items-center justify-between text-gray-300 hover:text-[#D4AF37] transition"
                  >
                    <span>Connect on LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://www.crunchbase.com/person/shaheen-safi"
                    target="_blank"
                    className="flex items-center justify-between text-gray-300 hover:text-[#D4AF37] transition"
                  >
                    <span>Crunchbase Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* --- IN-FEED GOOGLE ADSENSE SPONSORED UNIT --- */}
      <AdSenseInFeed />

      {/* ========================================================= */}
      {/* 3. WHOLESALE TELECOM SOLUTIONS & ENTERPRISE RAILS         */}
      {/* ========================================================= */}
      <section className="relative z-10 py-32 px-4 sm:px-6">
        <div className="w-[94%] max-w-[1720px] mx-auto">
          
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-20 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D4AF37] block mb-2">
                CORE WHOLESALE CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight">
                CARRIER-GRADE <br />
                <span className="text-gold-gradient">INFRASTRUCTURE MODULES</span>
              </h2>
            </div>
            <p className="max-w-xl text-xs sm:text-sm text-[#A0A0B5] leading-relaxed">
              We provide enterprise telecommunications APIs, clearinghouse settlement engines, and wholesale connectivity designed for banks, neo-banks, enterprise aggregators, and multinational carriers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* 1. Wholesale Airtime */}
            <div className="rounded-3xl p-8 bg-[#08080E]/90 border border-white/10 hover:border-[#D4AF37]/50 transition duration-300 flex flex-col justify-between">
              <div>
                <Radio className="w-10 h-10 text-[#D4AF37] mb-6" />
                <span className="text-[10px] font-mono text-[#D4AF37] tracking-widest uppercase block mb-2">
                  SS7 & DIAMETER SWITCHING
                </span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4">
                  WHOLESALE AIRTIME SWITCHING
                </h3>
                <p className="text-xs text-[#A0A0B5] leading-relaxed mb-6">
                  Direct interconnectivity to major Afghan carriers including Roshan, Afghan Wireless (AWCC), Etisalat, MTN, and Salaam Telecom, plus 700+ worldwide operators with real-time balance clearing.
                </p>
              </div>
              <ul className="text-[11px] text-gray-300 space-y-2 pt-4 border-t border-white/5">
                <li>• Sub-2 second transaction velocity</li>
                <li>• Wholesale volume pricing tiers</li>
                <li>• Direct SMPP / REST API endpoints</li>
              </ul>
            </div>

            {/* 2. Global eSIM Engine */}
            <div className="rounded-3xl p-8 bg-[#08080E]/90 border border-white/10 hover:border-[#D4AF37]/50 transition duration-300 flex flex-col justify-between">
              <div>
                <Globe2 className="w-10 h-10 text-[#D4AF37] mb-6" />
                <span className="text-[10px] font-mono text-[#D4AF37] tracking-widest uppercase block mb-2">
                  REMOTE SIM PROVISIONING (RSP)
                </span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4">
                  GLOBAL ENTERPRISE eSIM
                </h3>
                <p className="text-xs text-[#A0A0B5] leading-relaxed mb-6">
                  Instant QR code and SM-DP+ server profile provisioning delivering high-speed 4G/5G mobile data coverage across 150+ countries without physical plastic SIM limitations.
                </p>
              </div>
              <ul className="text-[11px] text-gray-300 space-y-2 pt-4 border-t border-white/5">
                <li>• GSMA SAS-SM certified architecture</li>
                <li>• Multi-IMSI dynamic switching</li>
                <li>• Enterprise fleet connectivity management</li>
              </ul>
            </div>

            {/* 3. Closed-Loop Digital Vouchers */}
            <div className="rounded-3xl p-8 bg-[#08080E]/90 border border-white/10 hover:border-[#D4AF37]/50 transition duration-300 flex flex-col justify-between">
              <div>
                <Zap className="w-10 h-10 text-[#D4AF37] mb-6" />
                <span className="text-[10px] font-mono text-[#D4AF37] tracking-widest uppercase block mb-2">
                  STORED-VALUE CLEARING
                </span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4">
                  DIGITAL VOUCHERS & ASSETS
                </h3>
                <p className="text-xs text-[#A0A0B5] leading-relaxed mb-6">
                  Wholesale digital gift card and stored-value fulfillment clearinghouse. Direct API access for PlayStation, Xbox, Steam, Netflix, Apple, Google Play, and international prepaid utility tokens.
                </p>
              </div>
              <ul className="text-[11px] text-gray-300 space-y-2 pt-4 border-t border-white/5">
                <li>• Instant cryptographic code issuance</li>
                <li>• Zero-inventory risk on-demand rails</li>
                <li>• Guaranteed legitimate issuer codes</li>
              </ul>
            </div>

            {/* 4. High-Throughput REST & Webhook API */}
            <div className="rounded-3xl p-8 bg-[#08080E]/90 border border-white/10 hover:border-[#D4AF37]/50 transition duration-300 flex flex-col justify-between">
              <div>
                <Cpu className="w-10 h-10 text-[#D4AF37] mb-6" />
                <span className="text-[10px] font-mono text-[#D4AF37] tracking-widest uppercase block mb-2">
                  ENTERPRISE DEVELOPER CORE
                </span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4">
                  HIGH-THROUGHPUT CARRIER API
                </h3>
                <p className="text-xs text-[#A0A0B5] leading-relaxed mb-6">
                  Engineered for fintechs, banks, and enterprise aggregators needing 10,000+ requests per second throughput with automated reconciliation, idempotent payloads, and webhook triggers.
                </p>
              </div>
              <ul className="text-[11px] text-gray-300 space-y-2 pt-4 border-t border-white/5">
                <li>• OpenAPI 3.0 specification</li>
                <li>• Webhook callbacks & digital signatures</li>
                <li>• Sandbox & production staging</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. STRATEGIC POWER ALLIANCE: DING.COM                     */}
      {/* ========================================================= */}
      <section className="relative z-10 py-32 px-4 sm:px-6 bg-[#05050A] border-y border-white/10">
        <div className="w-[94%] max-w-[1720px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Ding Logo Spotlight (5 Cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-[40px] bg-gradient-to-br from-white/[0.04] to-black/80 border border-white/15 p-12 flex flex-col items-center justify-center shadow-2xl group hover:border-[#D4AF37]/50 transition-all">
                <div className="absolute inset-0 bg-[#D4AF37]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-48 h-24 mb-6">
                  <Image
                    src="/ding.png"
                    alt="Ding.com Tier-1 Partner"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-center pt-4 border-t border-white/10 w-full">
                  <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest block font-bold">
                    OFFICIAL STRATEGIC ALLIANCE
                  </span>
                  <span className="text-[11px] text-gray-400 mt-1 block">
                    World’s Premier Mobile Top-up Platform
                  </span>
                </div>
              </div>
            </div>

            {/* Strategic Alliance Copy (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D4AF37] block">
                GLOBAL TELECOM LIQUIDITY
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight">
                POWERED IN STRATEGIC <br />
                <span className="text-gold-gradient">ALLIANCE WITH DING.COM</span>
              </h2>
              <p className="text-sm md:text-base text-[#A0A0B5] leading-relaxed">
                Through our sovereign institutional relationship with <strong className="text-white">Ding.com</strong>, Safi TopUp integrates into the world's most resilient international telecommunications exchange. This alliance empowers our infrastructure to execute cross-border airtime and digital transactions directly across 700+ mobile networks reaching more than 5 billion mobile connections.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <span className="text-2xl font-black text-[#D4AF37] block">700+</span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider block mt-1">Carriers Interconnected</span>
                  <p className="text-[11px] text-gray-400 mt-1">
                    Direct bilateral and SS7 peering with leading state and private telecommunications providers.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <span className="text-2xl font-black text-[#D4AF37] block">150+</span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider block mt-1">Sovereign Nations</span>
                  <p className="text-[11px] text-gray-400 mt-1">
                    Fully compliant cross-border telecommunication settlement corridors.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- IN-FEED GOOGLE ADSENSE SPONSORED UNIT --- */}
      <AdSenseInFeed />

      {/* ========================================================= */}
      {/* 4.5. SOVEREIGN LEADERSHIP & CORE FOUNDERS                 */}
      {/* ========================================================= */}
      <LeadershipTeam id="leadership" />

      {/* ========================================================= */}
      {/* 5. INSTITUTIONAL SECURITY & LEGAL ACCREDITATION           */}
      {/* ========================================================= */}
      <section className="relative z-10 py-32 px-4 sm:px-6">
        <div className="w-[94%] max-w-[1720px] mx-auto text-center max-w-4xl mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D4AF37] block mb-2">
            ENTERPRISE FIDUCIARY & GOVERNANCE STANDARDS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight">
            TRILLION-DOLLAR CORPORATE <br />
            <span className="text-gold-gradient">GOVERNANCE & INTEGRITY</span>
          </h2>
        </div>

        <div className="w-[94%] max-w-[1720px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-3xl p-8 bg-[#08080E]/90 border border-white/10 space-y-4">
            <Scale className="w-10 h-10 text-[#D4AF37]" />
            <h3 className="text-xl font-black text-white uppercase">
              LONDON LEGAL DOMICILE & ARBITRATION
            </h3>
            <p className="text-xs text-[#A0A0B5] leading-relaxed">
              Operating under English Common Law, the UK Companies Act 2006, and exclusive dispute resolution via the London Court of International Arbitration (LCIA). Institutional stability for global institutional contracts.
            </p>
            <Link
              href="/en/terms"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider hover:underline pt-2"
            >
              <span>Review Master Terms</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="rounded-3xl p-8 bg-[#08080E]/90 border border-white/10 space-y-4">
            <ShieldCheck className="w-10 h-10 text-[#D4AF37]" />
            <h3 className="text-xl font-black text-white uppercase">
              UK GDPR & ISO 27001 DATA PROTECTION
            </h3>
            <p className="text-xs text-[#A0A0B5] leading-relaxed">
              Strict adherence to the Data Protection Act 2018 (DPA 2018), European General Data Protection Regulation (GDPR), and zero-knowledge storage protocols for customer and telecommunications metadata.
            </p>
            <Link
              href="/en/privacy"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider hover:underline pt-2"
            >
              <span>Review Privacy Codex</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="rounded-3xl p-8 bg-[#08080E]/90 border border-white/10 space-y-4">
            <Database className="w-10 h-10 text-[#D4AF37]" />
            <h3 className="text-xl font-black text-white uppercase">
              TIER-4 NOC & SANCTIONS COMPLIANCE
            </h3>
            <p className="text-xs text-[#A0A0B5] leading-relaxed">
              Multi-region geodistributed data centers, active 24/7 Network Operations Center (NOC), and automated screening against OFAC, HM Treasury, and United Nations sanctions lists to prevent illicit routing.
            </p>
            <Link
              href="/en/contact"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider hover:underline pt-2"
            >
              <span>Contact Carrier Desk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. WHOLESALE INTEGRATION CTA                              */}
      {/* ========================================================= */}
      <section className="relative z-10 py-32 px-4 sm:px-6 bg-gradient-to-b from-transparent via-[#100E08]/60 to-[#030305] border-t border-white/10">
        <div className="w-[94%] max-w-[1720px] mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D4AF37] block mb-3">
            CARRIER DESK & WHOLESALE ONBOARDING
          </span>
          <h2 className="text-3xl sm:text-6xl font-black uppercase text-white tracking-tight leading-tight mb-8">
            CONNECT YOUR ENTERPRISE <br />
            <span className="text-gold-gradient">TO SOVEREIGN TELECOM RAILS</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-[#A0A0B5] leading-relaxed mb-12">
            Establish bilateral carrier peering, integrate high-frequency wholesale top-up APIs, or deploy global eSIM profiles directly inside your fintech ecosystem.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/en/contact"
              className="px-10 py-5 rounded-full bg-[#D4AF37] text-black font-black text-xs uppercase tracking-[0.25em] shadow-[0_15px_35px_rgba(212,175,55,0.4)] hover:bg-[#F3E5AB] transition duration-300"
            >
              CONNECT WITH CARRIER DESK
            </Link>
            <a
              href="mailto:contact@safitopup.site"
              className="px-10 py-5 rounded-full bg-white/[0.04] border border-white/20 text-white font-bold text-xs uppercase tracking-[0.25em] hover:bg-white/10 transition duration-300"
            >
              EMAIL: contact@safitopup.site
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}