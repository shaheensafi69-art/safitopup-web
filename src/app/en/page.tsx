import React from 'react';

export default function EnglishHome() {
  return (
    <main className="relative min-h-screen bg-[#020202] text-white overflow-hidden selection:bg-[#D4AF37] selection:text-black">
      
      {/* --- ANIMATED GALAXY BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-60"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-[#D4AF37]/10 blur-[180px] rounded-full animate-pulse duration-[10s]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-900/10 blur-[150px] rounded-full opacity-50"></div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-64 pb-32 px-8">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-[#D4AF37]/30 rounded-full mb-12 backdrop-blur-xl shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-ping"></span>
            <span className="text-[#D4AF37] text-[11px] font-black tracking-[0.5em] uppercase">
              The Sovereign Gateway for Afghans
            </span>
          </div>

          <h1 className="text-7xl md:text-[10rem] font-black italic tracking-tighter leading-[0.8] mb-12 uppercase">
            BEYOND <br />
            <span className="text-[#D4AF37] not-italic">LIMITS</span>
          </h1>

          <p className="max-w-4xl mx-auto text-gray-400 text-sm md:text-xl font-bold tracking-[0.3em] uppercase leading-relaxed mb-20">
            Safi TopUp is the official bridge connecting the heart of Afghanistan <br />
            to 700+ global networks and premium digital ecosystems.
          </p>

          <div className="flex flex-wrap justify-center gap-10">
            {/* دکمه با برجستگی و حالت گول */}
            <button className="relative px-16 py-7 bg-[#D4AF37] text-black font-black text-xs tracking-[0.4em] rounded-full shadow-[0_20px_40px_rgba(212,175,55,0.3)] hover:shadow-[0_25px_50px_rgba(212,175,55,0.5)] hover:-translate-y-2 transition-all duration-500 uppercase active:scale-95">
              START RECHARGE
            </button>
            <button className="relative px-16 py-7 border border-white/20 bg-white/5 backdrop-blur-md text-white font-black text-xs tracking-[0.4em] rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-[#D4AF37] hover:-translate-y-2 transition-all duration-500 uppercase active:scale-95">
              EXPLORE NETWORK
            </button>
          </div>
        </div>
      </section>

      {/* --- SERVICES & CORE ADVANTAGES (مزایا و آسانی‌ها) --- */}
      <section className="relative z-10 py-48 px-8 bg-black/60 backdrop-blur-md border-y border-white/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
            <div>
              <h2 className="text-[#D4AF37] text-sm font-black tracking-[0.7em] uppercase mb-6">UNMATCHED ADVANTAGES</h2>
              <h3 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-none mb-10">
                WHY WE ARE <br /> <span className="opacity-30 font-thin not-italic">DOMINANT</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <AdvantageItem title="ZERO LATENCY" desc="Instant processing. From payment to top-up in less than 2 seconds." />
              <SocialAdvantage title="GLOBAL ACCESS" desc="Direct API connections to Roshan, AWCC, Etisalat, MTN and 700+ others." />
              <AdvantageItem title="EU COMPLIANCE" desc="Operating under international digital banking security protocols." />
              <SocialAdvantage title="24/7 ELITE SUPPORT" desc="Dedicated assistance for personal and business high-volume users." />
            </div>
          </div>

          {/* Core Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/10 border border-white/10 rounded-[60px] overflow-hidden shadow-2xl">
            <ServiceBlock 
              title="AIRTIME RECHARGE" 
              subtitle="INSTANT CONNECTIVITY"
              desc="The most reliable gateway to send credit to any number in Afghanistan and 150+ countries worldwide."
            />
            <ServiceBlock 
              title="GLOBAL DATA" 
              subtitle="4G/5G INFRASTRUCTURE"
              desc="Premium internet bundles for work, gaming, and communication, delivered instantly to any eSIM or physical SIM."
            />
            <ServiceBlock 
              title="DIGITAL ASSETS" 
              subtitle="GIFT CARDS & GAMING"
              desc="Exclusive access to PlayStation, Steam, Netflix, and more. No more regional barriers for Afghan users."
            />
          </div>
        </div>
      </section>

      {/* --- INNOVATION & EASE (آسانی‌های سیستم) --- */}
      <section className="relative z-10 py-48 px-8">
        <div className="container mx-auto">
          <div className="text-center mb-32">
             <h4 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase">THE <span className="text-[#D4AF37]">SAFI</span> EXPERIENCE</h4>
             <p className="text-gray-500 tracking-[0.4em] uppercase mt-4 text-xs">Making global finance effortless</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <EaseItem 
                title="ONE-CLICK RECHARGE" 
                desc="Our system remembers your preferences, allowing for ultra-fast subsequent transactions." 
            />
            <EaseItem 
                title="MULTI-CURRENCY" 
                desc="Pay using AFN, USD, or EUR. We handle the conversion with the best market rates." 
            />
            <EaseItem 
                title="INSTANT RECEIPT" 
                desc="Automated digital billing and transaction history for full transparency and record-keeping." 
            />
          </div>
        </div>
      </section>

    </main>
  );
}

// --- HELPER COMPONENTS ---

function ServiceBlock({ title, subtitle, desc }: { title: string, subtitle: string, desc: string }) {
  return (
    <div className="bg-[#080808] p-20 hover:bg-[#0c0c0c] transition-all duration-700 group cursor-default">
      <span className="text-[#D4AF37] text-[11px] font-black tracking-[0.5em] mb-10 block opacity-50 group-hover:opacity-100 uppercase">{subtitle}</span>
      <h4 className="text-3xl font-black tracking-tighter mb-8 group-hover:text-[#D4AF37] transition-all uppercase">{title}</h4>
      <p className="text-gray-500 text-sm leading-loose tracking-[0.15em] font-medium uppercase">{desc}</p>
    </div>
  );
}

function AdvantageItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="flex flex-col gap-4 p-6 border-l border-[#D4AF37]/20">
      <h5 className="text-[#D4AF37] font-black tracking-widest text-[12px] uppercase">{title}</h5>
      <p className="text-gray-500 text-[10px] tracking-widest leading-relaxed uppercase">{desc}</p>
    </div>
  );
}

function SocialAdvantage({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="flex flex-col gap-4 p-6 border-l border-white/10">
      <h5 className="text-white font-black tracking-widest text-[12px] uppercase">{title}</h5>
      <p className="text-gray-400 text-[10px] tracking-widest leading-relaxed uppercase">{desc}</p>
    </div>
  );
}

function EaseItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="text-center group">
      <h5 className="text-2xl font-black tracking-tighter mb-6 group-hover:text-[#D4AF37] transition-colors uppercase italic">{title}</h5>
      <p className="text-gray-500 text-[11px] tracking-[0.2em] leading-loose uppercase">{desc}</p>
    </div>
  );
}