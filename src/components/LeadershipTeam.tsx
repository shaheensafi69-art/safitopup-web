"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export interface LeadershipMember {
  rank: string;
  name: string;
  role: string;
  rolePersian?: string;
  badge: string;
  desc: string;
  img: string;
  href: string;
  accentBorder: string;
  accentBadge: string;
  accentGlow: string;
  accentHoverBg: string;
}

export const leadershipMembers: LeadershipMember[] = [
  {
    rank: "01",
    name: "Shaheen Safi",
    role: "Director & Founder",
    rolePersian: "دایرکتور و بنیان‌گذار",
    badge: "DIRECTOR & FOUNDER",
    desc: "ITU Computer Science graduate. Chief Architect and Founder of Safi International Capital LTD, SafiPay, and Safi TopUp sovereign telecom rails.",
    img: "/shaheen.jpeg",
    href: "/en/founder/shaheen-safi",
    accentBorder: "border-amber-500/30 hover:border-amber-500/70",
    accentBadge: "border-amber-500/40 bg-amber-500/15 text-amber-300",
    accentGlow: "from-amber-500/20 to-transparent",
    accentHoverBg: "group-hover:bg-amber-500 group-hover:text-black",
  },
  {
    rank: "02",
    name: "Sahel Salem",
    role: "CEO & Europe Relations",
    rolePersian: "مدیرعامل و ارتباطات اروپا",
    badge: "CEO & EUROPE RELATIONS",
    desc: "University of the People BBA. Directing global executive operations, European Union banking expansion, SEPA compliance, and institutional relations.",
    img: "/sahel.jpeg",
    href: "/en/founder/sahel-salem",
    accentBorder: "border-emerald-500/30 hover:border-emerald-500/70",
    accentBadge: "border-emerald-500/40 bg-emerald-500/15 text-emerald-300",
    accentGlow: "from-emerald-500/20 to-transparent",
    accentHoverBg: "group-hover:bg-emerald-500 group-hover:text-black",
  },
  {
    rank: "03",
    name: "Shirin Gol Ahmadi",
    role: "All Ecosystem Manager",
    rolePersian: "مدیر تمام اکوسیستم",
    badge: "ALL ECOSYSTEM MANAGER",
    desc: "NUST Economics graduate and Full Stack Engineer. Leading cross-vertical ecosystem operations, product execution, and artificial intelligence integration.",
    img: "/shirin.jpeg",
    href: "/en/founder/shirin-gol-ahmadi",
    accentBorder: "border-pink-500/30 hover:border-pink-500/70",
    accentBadge: "border-pink-500/40 bg-pink-500/15 text-pink-300",
    accentGlow: "from-pink-500/20 to-transparent",
    accentHoverBg: "group-hover:bg-pink-500 group-hover:text-black",
  },
  {
    rank: "04",
    name: "Mujtaba Rahmani",
    role: "Co-Founder",
    rolePersian: "هم‌بنیان‌گذار",
    badge: "CO-FOUNDER",
    desc: "Economy specialist and professional trader. Co-founder steering global market models, capital allocation, liquidity risk, and strategic expansion.",
    img: "/mujtaba.jpeg",
    href: "/en/founder/mujtaba-rahmani",
    accentBorder: "border-blue-500/30 hover:border-blue-500/70",
    accentBadge: "border-blue-500/40 bg-blue-500/15 text-blue-300",
    accentGlow: "from-blue-500/20 to-transparent",
    accentHoverBg: "group-hover:bg-blue-500 group-hover:text-white",
  },
  {
    rank: "05",
    name: "Mobin Hassani",
    role: "Lead Developer",
    rolePersian: "لیدر بخش توسعه‌دهندگان",
    badge: "LEAD DEVELOPER",
    desc: "Software architect and systems engineer. Directing developer core teams, high-throughput telecom APIs, microservices, and cryptographic infrastructure.",
    img: "/mobin-hassani.jpg",
    href: "/en/founder/mobin-hassani",
    accentBorder: "border-cyan-500/30 hover:border-cyan-500/70",
    accentBadge: "border-cyan-500/40 bg-cyan-500/15 text-cyan-300",
    accentGlow: "from-cyan-500/20 to-transparent",
    accentHoverBg: "group-hover:bg-cyan-500 group-hover:text-black",
  },
];

interface LeadershipTeamProps {
  id?: string;
  showIntro?: boolean;
}

export default function LeadershipTeam({ id = "leadership", showIntro = true }: LeadershipTeamProps) {
  return (
    <section id={id} className="relative z-10 py-28 px-4 sm:px-6 bg-[#040407] border-y border-white/10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[500px] bg-gradient-to-r from-amber-500/5 via-blue-500/5 to-pink-500/5 blur-[160px]" />
      </div>

      <div className="w-[94%] max-w-[1720px] mx-auto relative z-10">
        {showIntro && (
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#D4AF37]/30 text-xs font-mono text-[#D4AF37] uppercase tracking-[0.25em] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Executive Governance & Architecture</span>
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-none mb-6">
              SOVEREIGN LEADERSHIP & <br />
              <span className="text-gold-gradient">CORE FOUNDERS</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A0A0B5] leading-relaxed font-light">
              The strategic minds and technical leaders steering Safi International Capital LTD, Safi TopUp telecom rails, and our integrated global fintech ecosystem.
            </p>
          </div>
        )}

        {/* --- 5 LEADERS HIERARCHY GRID (ORDERED 01 to 05) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-7">
          {leadershipMembers.map((member, i) => (
            <Link
              key={member.name}
              href={member.href}
              className="group block relative focus:outline-none"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
                className={`relative h-full flex flex-col justify-between p-5 rounded-[2.5rem] bg-[#090910]/90 border ${member.accentBorder} backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.7)] transition-all duration-300 overflow-hidden`}
              >
                {/* Accent Top Ambient Light */}
                <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${member.accentGlow} opacity-30 group-hover:opacity-60 transition-opacity pointer-events-none`} />

                <div>
                  {/* Top Bar: Rank & Badge */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-white/5 mb-4">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#7E7E90] group-hover:text-white transition">
                      RANK {member.rank}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono font-extrabold uppercase tracking-wider border ${member.accentBadge}`}>
                      {member.badge}
                    </span>
                  </div>

                  {/* Photo Frame */}
                  <div className="relative aspect-square w-full rounded-[2rem] overflow-hidden mb-5 border border-white/10 bg-[#0E0E16] shadow-inner">
                    <Image
                      src={member.img}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  </div>

                  {/* Name & Titles */}
                  <div className="space-y-1 mb-3">
                    <h3 className="text-xl font-black text-white group-hover:text-[#D4AF37] transition tracking-tight leading-tight">
                      {member.name}
                    </h3>
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-300">
                      {member.role}
                    </div>
                  </div>

                  {/* Bio Synopsis */}
                  <p className="text-[11px] text-[#8E8EA2] leading-relaxed line-clamp-3 mb-5 font-normal">
                    {member.desc}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#7E7E90] group-hover:text-white transition">
                    VIEW EXECUTIVE DOSSIER
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 ${member.accentHoverBg} transition-all duration-300 flex-shrink-0`}>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Global Holding Verification Bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#7E7E90]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>EXECUTIVE GOVERNANCE • SAFI INTERNATIONAL CAPITAL LTD (LONDON UK NO: 17063286)</span>
          </div>
          <Link
            href="/en/about"
            className="text-[#D4AF37] hover:underline uppercase tracking-wider flex items-center gap-1.5 font-bold"
          >
            <span>Read Complete Holding Charter & Vision</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
