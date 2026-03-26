import React from 'react';
import Image from 'next/image';

export default function PartnersPage() {
  return (
    <main className="relative min-h-screen bg-[#020202] text-white overflow-hidden selection:bg-[#D4AF37] selection:text-black">
      
      {/* --- GALAXY BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#D4AF37]/5 blur-[150px] rounded-full animate-pulse duration-[8s]"></div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-48 pb-20 px-8 text-center">
        <h1 className="text-6xl md:text-[10rem] font-black italic tracking-tighter uppercase leading-none mb-6">
          OUR <span className="text-[#D4AF37]">SERVICES</span>
        </h1>
        <p className="max-w-3xl mx-auto text-gray-500 text-xs md:text-sm font-bold tracking-[0.5em] uppercase leading-relaxed">
          Five specialized pillars of digital infrastructure <br /> engineered for the Afghan and global markets.
        </p>
      </section>

      {/* --- THE 5 CORE SERVICES (تشریح دقیق ۵ بخش خدمات) --- */}
      <section className="relative z-10 py-24 px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* 1. eSIM SERVICES */}
            <ServiceCard 
              title="NEXT-GEN eSIM"
              desc="The future of mobility. We provide instant digital SIM cards for travelers and locals, offering high-speed 4G/5G data in 150+ countries without the need for a physical SIM chip."
              points={["Instant QR Delivery", "Global Roaming", "Multiple Profiles"]}
            />

            {/* 2. AIRTIME RECHARGE */}
            <ServiceCard 
              title="AIRTIME RECHARGE"
              desc="Direct, real-time credit transfer to all major Afghan networks including Roshan, AWCC, Etisalat, and MTN, plus 700+ global operators via our secure gateway."
              points={["2-Second Delivery", "Local Operator Support", "Zero Hidden Fees"]}
            />

            {/* 3. DATA BUNDLES */}
            <ServiceCard 
              title="DATA BUNDLES"
              desc="Specialized high-capacity internet packages tailored for business and personal use. Stay connected with local and international data plans delivered straight to any mobile number."
              points={["Daily/Weekly/Monthly", "High-Speed 4G/5G", "Operator Specific Plans"]}
            />

            {/* 4. DIGITAL GIFT CARDS */}
            <ServiceCard 
              title="GIFT CARDS"
              desc="Eliminating regional barriers. Instant digital codes for PlayStation, Xbox, Steam, Netflix, and iTunes. Access the world's best entertainment directly from Afghanistan."
              points={["24/7 Delivery", "Region-Specific Codes", "Verified Legitimacy"]}
            />

            {/* 5. UTILITY PAYMENTS */}
            <ServiceCard 
              title="PREPAID UTILITY"
              desc="A professional solution for paying international utility bills and prepaid services. Our system bridges the gap for global service payments through a single secure interface."
              points={["Bill Settlement", "Prepaid Electricity", "Secure Transactions"]}
            />

            {/* 6. COMING SOON / MORE */}
            <div className="flex flex-col justify-center items-center border border-white/5 bg-white/[0.01] rounded-[50px] p-12 group hover:border-[#D4AF37]/20 transition-all">
                <span className="text-white/20 text-4xl font-black italic tracking-tighter group-hover:text-[#D4AF37]/40 transition-colors uppercase">More Services <br /> Coming Soon</span>
            </div>

          </div>
        </div>
      </section>

      {/* --- POWER PARTNER: DING.COM (با لوگوی واقعی) --- */}
      <section className="relative z-10 py-48 px-8 border-t border-white/5 bg-black/50 backdrop-blur-3xl">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            
            {/* Ding Logo Box */}
            <div className="flex-1 w-full flex justify-center lg:justify-start">
                <div className="relative w-full max-w-sm aspect-square bg-white/[0.02] border border-white/10 rounded-[60px] p-16 flex items-center justify-center group shadow-2xl">
                    <div className="absolute inset-0 bg-[#D4AF37]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative w-full h-full">
                        <Image 
                            src="/ding.png" 
                            alt="Ding Logo" 
                            fill 
                            className="object-contain filter grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>
            </div>

            <div className="flex-1">
                <h2 className="text-[#D4AF37] text-sm font-black tracking-[0.8em] mb-8 uppercase">STRATEGIC ALLIANCE</h2>
                <h3 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-none mb-10">
                    POWERED BY <br /> <span className="opacity-40">DING.COM</span>
                </h3>
                <p className="text-gray-400 text-sm md:text-lg leading-loose tracking-widest uppercase mb-12">
                    Our partnership with <span className="text-white">Ding.com</span> provides Safi TopUp users with an ironclad infrastructure. By utilizing the world’s largest top-up network, we guarantee 100% reliability, reaching over 5 billion mobile phones globally through 700+ operators.
                </p>
                <div className="flex flex-wrap gap-12">
                    <div className="flex flex-col">
                        <span className="text-4xl font-black italic tracking-tighter text-[#D4AF37]">700+</span>
                        <span className="text-[10px] font-bold text-gray-500 tracking-[0.4em] uppercase">Global Operators</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-4xl font-black italic tracking-tighter text-[#D4AF37]">150+</span>
                        <span className="text-[10px] font-bold text-gray-500 tracking-[0.4em] uppercase">Countries Covered</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

// --- REUSABLE SERVICE CARD ---

function ServiceCard({ title, desc, points }: { title: string, desc: string, points: string[] }) {
  return (
    <div className="bg-[#080808] border border-white/5 p-12 rounded-[50px] hover:border-[#D4AF37]/30 transition-all duration-700 group">
      <h3 className="text-2xl font-black italic tracking-tighter mb-8 group-hover:text-[#D4AF37] transition-all uppercase leading-none">{title}</h3>
      <p className="text-gray-500 text-[11px] leading-loose tracking-widest uppercase mb-10 min-h-[80px]">
        {desc}
      </p>
      <div className="space-y-3">
        {points.map((p, i) => (
            <div key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
                <span className="text-[10px] font-bold text-white/40 tracking-widest uppercase">{p}</span>
            </div>
        ))}
      </div>
    </div>
  );
}