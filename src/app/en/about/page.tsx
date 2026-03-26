"use client";
import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#020202] text-white overflow-hidden selection:bg-[#D4AF37] selection:text-black">
      
      {/* --- CSS ANIMATIONS (بدون نیاز به کتابخانه) --- */}
      <style jsx>{`
        @keyframes pulseGlow { 0% { transform: scale(1); opacity: 0.3; } 50% { transform: scale(1.1); opacity: 0.5; } 100% { transform: scale(1); opacity: 0.3; } }
        @keyframes revealUp { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-glow { animation: pulseGlow 10s infinite ease-in-out; }
        .animate-reveal { animation: revealUp 1s forwards ease-out; opacity: 0; }
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
      `}</style>

      {/* --- GALAXY BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-[#D4AF37]/5 blur-[180px] rounded-full animate-glow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[150px] rounded-full"></div>
      </div>

      {/* --- HERO SECTION: THE FOUNDER --- */}
      <section className="relative z-10 pt-48 pb-32 px-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            {/* Founder Image */}
            <div className="flex-1 relative animate-reveal">
              <div className="relative w-full max-w-md aspect-[4/5] mx-auto">
                <div className="absolute -inset-4 border border-[#D4AF37]/20 rounded-[60px] translate-x-4 translate-y-4"></div>
                <div className="relative h-full w-full rounded-[50px] overflow-hidden border border-white/10 shadow-2xl group">
                  <Image 
                    src="/shaheen.jpeg" 
                    alt="Shaheen Safi" 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-10 left-10">
                    <span className="text-[#D4AF37] text-[10px] font-black tracking-[0.5em] uppercase">FOUNDER & CEO</span>
                    <h2 className="text-3xl font-black italic tracking-tighter uppercase">SHAHEEN SAFI</h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Story */}
            <div className="flex-1 animate-reveal delay-1">
              <h4 className="text-[#D4AF37] text-[11px] font-black tracking-[0.6em] mb-6 uppercase italic">THE ARCHITECT'S VISION</h4>
              <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.85] mb-10">
                DRIVEN BY <br /> <span className="text-[#D4AF37]">INNOVATION</span>
              </h1>
              <p className="text-gray-400 text-sm md:text-lg leading-loose tracking-widest uppercase mb-8">
                Graduated as a Computer Specialist from <span className="text-white">Istanbul Technical University (ITU)</span>, Shaheen Safi is a software architect and visionary entrepreneur. With deep expertise in FinTech systems and network security, he has dedicated his career to bridging the technological gap between Afghanistan and the global digital economy.
              </p>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed tracking-[0.15em] uppercase italic">
                "My journey began with a simple belief: that borders should not limit access to digital services. Through code, commerce, and connectivity, we are building a gateway for the next generation."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE STORY: THE JOURNEY --- */}
      <section className="relative z-10 py-32 px-8 border-t border-white/5 bg-black/40 backdrop-blur-md">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col gap-16 animate-reveal delay-2">
            <div className="border-l-4 border-[#D4AF37] pl-10">
               <h3 className="text-3xl font-black italic tracking-tighter uppercase mb-6">THE GENESIS</h3>
               <p className="text-gray-400 text-sm tracking-widest leading-loose uppercase">
                Shaheen’s professional path was forged in the halls of ITU, where he specialized in software architecture and network security. His early work as an IT Specialist for the Afghanistan Football Federation and years of teaching the next generation of specialists laid the foundation for what would become the Safi Ecosystem.
               </p>
            </div>
            <div className="border-l-4 border-white/20 pl-10 text-right md:text-left">
               <h3 className="text-3xl font-black italic tracking-tighter uppercase mb-6 text-[#D4AF37]">THE EVOLUTION</h3>
               <p className="text-gray-400 text-sm tracking-widest leading-loose uppercase">
                From managing complex IT infrastructures to organizing massive business seminars, Shaheen transitioned from a specialist to a global founder. He launched **SafiPro** as his first major venture, subsequently scaling it into a diverse lifestyle brand, which paved the way for his most ambitious projects: **SafiPay** and **Safi TopUp**.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE TRINITY: 3 POWERFUL BRANDS --- */}
      <section className="relative z-10 py-40 px-8 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto text-center mb-24 animate-reveal">
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase">THE <span className="text-[#D4AF37]">SAFI</span> EMPIRE</h2>
            <p className="text-gray-500 text-[10px] tracking-[0.5em] uppercase mt-4 italic">Management of three active global pillars</p>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/10 border border-white/10 rounded-[60px] overflow-hidden shadow-2xl animate-reveal delay-1">
          
          {/* SAFI PAY */}
          <CompanyCard 
            name="SAFI PAY" 
            tag="FINTECH & BANKING" 
            desc="The master digital banking infrastructure providing Multi-Currency accounts (EUR, USD, GBP) and instant Visa cards. A financial bridge for the Afghan people." 
            active
          />

          {/* SAFI TOPUP */}
          <CompanyCard 
            name="SAFI TOPUP" 
            tag="GLOBAL CONNECTIVITY" 
            desc="The official gateway for mobile airtime, data bundles, and digital assets. Connecting 150+ countries with 700+ worldwide telecom operators." 
            active
          />

          {/* SAFI PRO */}
          <CompanyCard 
            name="SAFI PRO" 
            tag="RETAIL & COSMETICS" 
            desc="A premium lifestyle and general trading brand. Specialized in high-end fashion, luxury cosmetics, and diverse global consumer goods." 
            active
          />

        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="relative z-10 py-48 px-8 text-center animate-reveal delay-3">
        <div className="container mx-auto">
            <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-12 leading-none">
              SHAPING THE <span className="text-[#D4AF37]">FUTURE</span> <br /> OF AFGHAN TECHNOLOGY.
            </h3>
            <div className="flex justify-center">
                <a href="/en/contact" className="px-16 py-7 bg-[#D4AF37] text-black font-black text-xs tracking-[0.4em] rounded-full shadow-[0_20px_40px_rgba(212,175,55,0.3)] hover:scale-105 active:scale-95 transition-all uppercase">
                    Connect with the Founder
                </a>
            </div>
        </div>
      </section>

    </main>
  );
}

// --- HELPER COMPONENT ---

function CompanyCard({ name, tag, desc, active }: { name: string, tag: string, desc: string, active?: boolean }) {
  return (
    <div className="bg-[#080808] p-16 hover:bg-[#0c0c0c] transition-all duration-700 group cursor-default">
      <span className="text-[#D4AF37] text-[10px] font-black tracking-[0.5em] mb-6 block uppercase italic">{tag}</span>
      <h4 className="text-4xl font-black tracking-tighter mb-8 group-hover:text-[#D4AF37] transition-all uppercase">{name}</h4>
      <p className="text-gray-500 text-sm leading-loose tracking-[0.15em] font-medium uppercase mb-10">{desc}</p>
      {active && (
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-[9px] font-black text-white/40 tracking-[0.3em] uppercase">OPERATIONAL & ACTIVE</span>
        </div>
      )}
    </div>
  );
}