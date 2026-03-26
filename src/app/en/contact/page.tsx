"use client";
import React from 'react';

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#020202] text-white overflow-hidden selection:bg-[#D4AF37] selection:text-black">
      
      {/* --- CSS ANIMATED GALAXY (بدون نیاز به کتابخانه) --- */}
      <style jsx>{`
        @keyframes pulseGlow {
          0% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.5; }
          100% { transform: scale(1); opacity: 0.3; }
        }
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-glow { animation: pulseGlow 8s infinite ease-in-out; }
        .animate-reveal { animation: slideUp 1s forwards ease-out; opacity: 0; }
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
      `}</style>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40"></div>
        <div className="absolute top-[20%] right-[-10%] w-[70%] h-[70%] bg-[#D4AF37]/5 blur-[180px] rounded-full animate-glow"></div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-48 pb-20 px-8 text-center animate-reveal">
        <h1 className="text-6xl md:text-[10rem] font-black italic tracking-tighter uppercase leading-none mb-6">
          GET IN <span className="text-[#D4AF37]">TOUCH</span>
        </h1>
        <p className="max-w-3xl mx-auto text-gray-500 text-xs md:text-sm font-bold tracking-[0.5em] uppercase leading-relaxed">
          Direct lines to the Safi TopUp global infrastructure. <br /> Our elite support team is ready to assist 24/7.
        </p>
      </section>

      {/* --- CONTACT CHANNELS --- */}
      <section className="relative z-10 py-24 px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* WHATSAPP BOX */}
            <div className="bg-[#080808] border border-white/5 p-16 rounded-[60px] relative overflow-hidden shadow-2xl group transition-all duration-500 hover:-translate-y-3 hover:border-[#D4AF37]/30 animate-reveal delay-1">
              <div className="absolute top-10 right-10 text-[80px] font-black text-white/[0.02] italic pointer-events-none uppercase">CALL</div>
              <h4 className="text-[#D4AF37] text-[11px] font-black tracking-[0.6em] mb-10 uppercase italic">DIRECT HOTLINE</h4>
              
              <div className="space-y-8">
                <div className="flex flex-col">
                  <span className="text-gray-600 text-[10px] font-bold tracking-[0.4em] uppercase mb-2">United Kingdom</span>
                  <span className="text-white text-3xl font-black tracking-widest italic">+44 7476 620282</span>
                </div>
                
                <a 
                  href="https://wa.me/447476620282" 
                  target="_blank"
                  className="inline-block mt-8 px-12 py-5 bg-[#D4AF37] text-black font-black text-[10px] tracking-[0.3em] rounded-full shadow-[0_15px_30px_rgba(212,175,55,0.2)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.4)] transition-all uppercase"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* EMAIL BOX */}
            <div className="bg-[#080808] border border-white/5 p-16 rounded-[60px] relative overflow-hidden shadow-2xl group transition-all duration-500 hover:-translate-y-3 hover:border-[#D4AF37]/30 animate-reveal delay-2">
              <div className="absolute top-10 right-10 text-[80px] font-black text-white/[0.02] italic pointer-events-none uppercase">MAIL</div>
              <h4 className="text-[#D4AF37] text-[11px] font-black tracking-[0.6em] mb-10 uppercase italic">OFFICIAL INQUIRIES</h4>
              
              <div className="space-y-8">
                <div className="flex flex-col">
                  <span className="text-gray-600 text-[10px] font-bold tracking-[0.4em] uppercase mb-2">Global Support</span>
                  <span className="text-white text-2xl md:text-3xl font-black tracking-widest italic lowercase">contact@safitopup.site</span>
                </div>

                <a 
                  href="mailto:contact@safitopup.site"
                  className="inline-block mt-8 px-12 py-5 border border-white/10 bg-white/5 text-white font-black text-[10px] tracking-[0.3em] rounded-full hover:bg-white hover:text-black transition-all uppercase"
                >
                  Send an Email
                </a>
              </div>
            </div>

          </div>

          {/* --- FOUNDER DIRECT CONTACT --- */}
          <div className="mt-32 text-center animate-reveal" style={{ animationDelay: '0.6s' }}>
             <h2 className="text-4xl font-black italic tracking-tighter uppercase mb-12">READY TO <span className="text-[#D4AF37]">CONNECT?</span></h2>
             <div className="flex justify-center">
                <a 
                  href="https://wa.me/447476620282"
                  target="_blank"
                  className="px-20 py-8 bg-white text-black font-black text-xs tracking-[0.5em] rounded-full shadow-[0_25px_50px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95 transition-all uppercase"
                >
                  CONTACT FOUNDER DIRECTLY
                </a>
             </div>
          </div>
        </div>
      </section>

    </main>
  );
}