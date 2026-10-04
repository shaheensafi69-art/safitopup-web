"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  PhoneCall, 
  Mail, 
  Building2, 
  MapPin, 
  ShieldCheck, 
  ArrowUpRight, 
  Send, 
  CheckCircle2 
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="relative min-h-screen bg-[#030305] text-[#F0F0F5] overflow-hidden selection:bg-[#D4AF37] selection:text-black">
      
      {/* Background Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-radial-grid opacity-25"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-[#D4AF37]/15 via-blue-950/10 to-transparent blur-[160px]"></div>
      </div>

      <div className="relative z-10 w-[94%] max-w-[1720px] mx-auto px-4 pt-44 md:pt-56 pb-32">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#D4AF37]/30 text-xs font-mono text-[#D4AF37] uppercase mb-6">
            <Building2 className="w-3.5 h-3.5" />
            <span>Institutional Wholesale Desk & Carrier NOC</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase text-white tracking-tight leading-none mb-8">
            ENTERPRISE <br />
            <span className="text-gold-gradient">CARRIER DESK</span>
          </h1>

          <p className="text-sm md:text-base text-[#A0A0B5] leading-relaxed">
            Direct institutional contact lines to the Safi TopUp Network Operations Center (NOC) and the Executive Office of <strong className="text-white">Shaheen Safi</strong>.
          </p>
        </div>

        {/* Main Grid: Channels (5 Cols) + Inquiry Form (7 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Channels & Executive Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 24/7 Carrier NOC Hotline */}
            <div className="rounded-3xl p-8 bg-[#08080E]/90 border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
                  GLOBAL 24/7 NOC HOTLINE
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-[10px] font-mono">
                  ACTIVE
                </span>
              </div>
              <div className="text-2xl font-black text-white tracking-wider font-mono">
                +44 7476 620282
              </div>
              <p className="text-xs text-[#A0A0B5]">
                Direct line for telecommunications carriers, bilateral wholesale aggregators, and institutional emergency escalation.
              </p>
              <a
                href="https://wa.me/447476620282"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#D4AF37] hover:underline uppercase pt-2"
              >
                <span>Direct WhatsApp Carrier Desk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Official Enterprise Email */}
            <div className="rounded-3xl p-8 bg-[#08080E]/90 border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
                  OFFICIAL INSTITUTIONAL INQUIRIES
                </span>
              </div>
              <div className="text-xl md:text-2xl font-black text-white tracking-wider font-mono lowercase">
                contact@safitopup.site
              </div>
              <p className="text-xs text-[#A0A0B5]">
                API documentation requests, compliance verification, and partnership agreements.
              </p>
              <a
                href="mailto:contact@safitopup.site"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#D4AF37] hover:underline uppercase pt-2"
              >
                <span>Send Encrypted Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Corporate Domicile */}
            <div className="rounded-3xl p-8 bg-[#08080E]/90 border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
                  CORPORATE SEAT & DOMICILE
                </span>
              </div>
              <div className="text-sm font-bold text-white uppercase">
                Safi International Capital LTD
              </div>
              <p className="text-xs text-[#A0A0B5] font-mono leading-relaxed">
                London, United Kingdom • Companies House Reg: 17063286<br />
                Governed under English Common Law • High Court of Justice
              </p>
            </div>

            {/* Executive Founder Card */}
            <div className="rounded-3xl p-8 bg-gradient-to-br from-[#14120A] to-[#0A0A10] border border-[#D4AF37]/40 space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4AF37] flex-shrink-0">
                  <Image
                    src="/shaheen-founder.jpg"
                    alt="Shaheen Safi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-black text-white uppercase">SHAHEEN SAFI</h4>
                  <span className="text-[10px] font-mono text-[#D4AF37] uppercase block">
                    FOUNDER & CHAIRMAN
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#A0A0B5]">
                Direct briefing requests for strategic venture capital or government telecommunications infrastructure.
              </p>
              <a
                href="https://shaheensafi.blog/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#D4AF37] text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#F3E5AB] transition"
              >
                <span>Visit ShaheenSafi.blog</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Institutional Onboarding Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-[35px] p-8 md:p-12 bg-[#08080E]/95 border border-white/10 shadow-2xl backdrop-blur-3xl">
              
              <div className="pb-6 border-b border-white/10 mb-8">
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                  WHOLESALE INTERCONNECT INQUIRY
                </h3>
                <p className="text-xs text-[#A0A0B5] mt-1">
                  Please provide your corporate entity details to receive API credentials and wholesale carrier tariff schedules.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto" />
                  <h4 className="text-xl font-black text-white uppercase">
                    INQUIRY SUBMITTED SUCCESSFULLY
                  </h4>
                  <p className="text-xs text-[#A0A0B5] leading-relaxed max-w-md mx-auto">
                    Your institutional dossier has been routed to our London Carrier Desk. An infrastructure engineer will respond within 4 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-[#A0A0B5]">
                        Entity / Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Telecommunications PLC"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs focus:border-[#D4AF37] focus:outline-none transition"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-[#A0A0B5]">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@enterprise.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs focus:border-[#D4AF37] focus:outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-[#A0A0B5]">
                        Organization Type *
                      </label>
                      <select className="w-full px-4 py-3.5 rounded-xl bg-[#0F0F16] border border-white/10 text-white text-xs focus:border-[#D4AF37] focus:outline-none transition">
                        <option>Telecom Carrier / Mobile Network</option>
                        <option>Fintech / Neobank</option>
                        <option>Enterprise Aggregator</option>
                        <option>Institutional Investment Partner</option>
                        <option>Other Sovereign Entity</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-[#A0A0B5]">
                        Monthly Volume Estimate (USD)
                      </label>
                      <select className="w-full px-4 py-3.5 rounded-xl bg-[#0F0F16] border border-white/10 text-white text-xs focus:border-[#D4AF37] focus:outline-none transition">
                        <option>$50,000 - $250,000</option>
                        <option>$250,000 - $1,000,000</option>
                        <option>$1,000,000 - $10,000,000+</option>
                        <option>Strategic Custom / Carrier Peering</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-[#A0A0B5]">
                      Technical Requirements / Integration Notes *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Specify required destination corridors, APIs (Airtime, eSIM, Vouchers), or expected throughput..."
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs focus:border-[#D4AF37] focus:outline-none transition"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#D4AF37] text-black font-black text-xs uppercase tracking-widest hover:bg-[#F3E5AB] transition shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>TRANSMIT WHOLESALE INQUIRY</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>

    </main>
  );
}