"use client";
import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#020202] text-white overflow-hidden selection:bg-[#D4AF37] selection:text-black font-sans">
      
      {/* --- CSS ANIMATIONS --- */}
      <style jsx>{`
        @keyframes pulseGlow { 0% { transform: scale(1); opacity: 0.3; } 50% { transform: scale(1.1); opacity: 0.5; } 100% { transform: scale(1); opacity: 0.3; } }
        @keyframes revealUp { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes drift { from { background-position: 0 0; } to { background-position: 100% 100%; } }
        .animate-glow { animation: pulseGlow 10s infinite ease-in-out; }
        .animate-reveal { animation: revealUp 1s forwards ease-out; opacity: 0; }
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        .delay-4 { animation-delay: 0.8s; }
      `}</style>

      {/* --- GALAXY BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-[drift_60s_linear_infinite]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-[#D4AF37]/5 blur-[180px] rounded-full animate-glow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#D4AF37]/5 blur-[150px] rounded-full animate-glow"></div>
      </div>

      {/* --- HERO SECTION: THE FOUNDER --- */}
      <section className="relative z-10 pt-32 md:pt-48 pb-20 md:pb-32 px-6 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-24">
            
            {/* Founder Image Container */}
            <div className="flex-1 relative animate-reveal">
              <div className="relative w-full max-w-[340px] md:max-w-md aspect-[4/5] mx-auto">
                {/* Decorative Frames */}
                <div className="absolute -inset-4 border border-[#D4AF37]/20 rounded-[40px] md:rounded-[60px] translate-x-4 translate-y-4"></div>
                <div className="absolute -inset-4 border border-white/5 rounded-[40px] md:rounded-[60px] -translate-x-2 -translate-y-2"></div>
                
                <div className="relative h-full w-full rounded-[30px] md:rounded-[50px] overflow-hidden border border-white/10 shadow-2xl group bg-[#111]">
                  <Image 
                    src="/founder-profile.jpg" 
                    alt="Shaheen Safi" 
                    fill 
                    priority
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                  <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                    <span className="text-[#D4AF37] text-[10px] font-black tracking-[0.5em] uppercase">ARCHITECT & VISIONARY</span>
                    <h2 className="text-3xl md:text-4xl font-black italic tracking-tighter uppercase text-white mt-1">SHAHEEN SAFI</h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Story */}
            <div className="flex-1 animate-reveal delay-1 text-center lg:text-left">
              <h4 className="text-[#D4AF37] text-[10px] md:text-[11px] font-black tracking-[0.6em] mb-6 uppercase italic">LEADERSHIP PHILOSOPHY</h4>
              <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.85] mb-10">
                DRIVEN BY <br /> <span className="text-[#D4AF37]">EXCELLENCE</span>
              </h1>
              <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
                <p className="text-gray-300 text-sm md:text-lg leading-loose tracking-widest uppercase">
                  A Computer Scientist from <span className="text-white font-bold border-b border-[#D4AF37]">ITU Istanbul</span>, Shaheen Safi leads as the strategic force behind <span className="text-[#D4AF37]">SafiPay</span> and <span className="text-[#D4AF37]">Safi TopUp</span>.
                </p>
                <p className="text-gray-400 text-xs md:text-base leading-relaxed tracking-wider uppercase">
                  With a focus on high-security FinTech infrastructure and international financial nodes, he has engineered systems that provide seamless global connectivity for the Afghan digital economy.
                </p>
              </div>
              
              <div className="mt-12 p-8 bg-white/[0.02] border border-white/5 rounded-3xl inline-block text-left relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]"></div>
                 <p className="text-gray-400 text-[11px] md:text-xs leading-relaxed tracking-[0.15em] uppercase italic max-w-xl">
                  "Our mission is to dismantle digital borders. We aren't just building apps; we are building financial freedom and global inclusion for a new generation of founders."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE TRINITY: 3 POWERFUL BRANDS --- */}
      <section className="relative z-10 py-24 md:py-44 px-6 md:px-8 bg-white/[0.01] border-y border-white/5">
        <div className="container mx-auto text-center mb-20 md:mb-32 animate-reveal">
            <h2 className="text-4xl md:text-8xl font-black italic tracking-tighter uppercase text-white">THE <span className="text-[#D4AF37]">SAFI</span> ECOSYSTEM</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-8"></div>
            <p className="text-gray-500 text-[10px] tracking-[0.5em] uppercase mt-8 italic">Pioneering International Digital Infrastructure</p>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-[40px] md:rounded-[80px] overflow-hidden shadow-2xl animate-reveal delay-2">
          <CompanyCard 
            name="SAFI PAY" 
            tag="DIGITAL BANKING" 
            desc="Global Multi-Currency engine (EUR, USD, GBP) providing instant Visa/Mastercard issuance and IBAN accounts for international trade." 
            status="ACTIVE"
          />
          <CompanyCard 
            name="SAFI TOPUP" 
            tag="TELCO GATEWAY" 
            desc="A massive network covering 150+ countries. Delivering instant airtime, global data bundles, and utility payments through 700+ operators." 
            status="ACTIVE"
          />
          <CompanyCard 
            name="SAFI PRO" 
            tag="SUCCESSFUL EXIT" 
            desc="The foundation of our venture capital. A lifestyle brand strategically built and exited to fuel the next generation of FinTech innovations." 
            status="EXITED"
          />
        </div>
      </section>

      {/* --- STATS SECTION (Added Content) --- */}
      <section className="relative z-10 py-20 px-6">
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "OPERATING COUNTRIES", val: "150+" },
                { label: "BANKING CURRENCIES", val: "9+" },
                { label: "GLOBAL OPERATORS", val: "700+" },
                { label: "SECURITY PROTOCOLS", val: "MIL-SPEC" }
              ].map((stat, i) => (
                <div key={stat.label} className={`text-center animate-reveal delay-${i+1}`}>
                    <h5 className="text-[#D4AF37] text-3xl md:text-5xl font-black italic mb-2">{stat.val}</h5>
                    <p className="text-gray-500 text-[9px] tracking-[0.3em] font-bold uppercase">{stat.label}</p>
                </div>
              ))}
          </div>
      </section>

      {/* --- FINAL CALL TO ACTION --- */}
      <section className="relative z-10 py-32 md:py-52 px-6 text-center animate-reveal delay-4">
        <div className="container mx-auto">
            <h3 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase mb-12 leading-tight">
              READY TO <span className="text-[#D4AF37]">TRANSFORM</span> <br /> THE DIGITAL LANDSCAPE?
            </h3>
            <div className="flex flex-col md:flex-row justify-center gap-6">
                <a href="en/contact" className="px-12 py-6 bg-[#D4AF37] text-black font-black text-xs tracking-[0.4em] rounded-full shadow-[0_20px_50px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 transition-all uppercase">
                  Executive Consultation
                </a>
                <a href="https://safipay.net" className="px-12 py-6 bg-transparent border border-white/20 text-white font-black text-xs tracking-[0.4em] rounded-full hover:bg-white hover:text-black transition-all uppercase">
                  Visit SafiPay
                </a>
            </div>
        </div>
      </section>

    </main>
  );
}

function CompanyCard({ name, tag, desc, status }: { name: string, tag: string, desc: string, status: 'ACTIVE' | 'EXITED' }) {
  return (
    <div className="bg-[#080808] p-12 md:p-20 hover:bg-[#0c0c0c] transition-all duration-700 group cursor-default border-b md:border-b-0 md:border-r border-white/5 last:border-0 relative">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
      <span className="text-[#D4AF37] text-[10px] font-black tracking-[0.5em] mb-8 block uppercase italic">{tag}</span>
      <h4 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 group-hover:tracking-normal transition-all duration-500 uppercase text-white">{name}</h4>
      <p className="text-gray-500 text-xs md:text-sm leading-loose tracking-widest font-medium uppercase mb-10 min-h-[80px]">{desc}</p>
      
      <div className="flex items-center gap-3">
        <span className={`w-2.5 h-2.5 rounded-full ${status === 'ACTIVE' ? 'bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)] animate-pulse' : 'bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]'}`}></span>
        <span className="text-[10px] font-black text-white/50 tracking-[0.3em] uppercase">
          {status === 'ACTIVE' ? 'OPERATIONAL' : 'STRATEGIC SUCCESS'}
        </span>
      </div>
    </div>
  );
}