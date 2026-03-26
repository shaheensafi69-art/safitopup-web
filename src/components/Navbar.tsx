"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  
  // در حال حاضر فقط EN فعال است
  const lang = 'en';

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧', active: true },
    { code: 'fa', name: 'فارسی', flag: '🇦🇫', active: false },
    { code: 'ps', name: 'پشتو', flag: '🇦🇫', active: false },
    { code: 'tr', name: 'Turkish', flag: '🇹🇷', active: false },
    { code: 'ru', name: 'Russian', flag: '🇷🇺', active: false },
    { code: 'de', name: 'German', flag: '🇩🇪', active: false },
    { code: 'fr', name: 'French', flag: '🇫🇷', active: false },
    { code: 'ar', name: 'Arabic', flag: '🇸🇦', active: false },
  ];

  const currentLang = languages[0]; // همیشه انگلیسی

  // گرادینت ثابت پرچم بریتانیا برای پس‌زمینه باکس‌ها (چون فعلاً فقط انگلیسی فعال است)
  const flagGradient = 'linear-gradient(90deg, #00247d 0%, #cf142b 50%, #ffffff 100%)';

  return (
    <>
      <style jsx>{`
        @keyframes wave { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .animated-flag-box {
          position: relative;
          background: ${flagGradient};
          background-size: 200% 200%;
          animation: wave 8s infinite ease-in-out;
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }
        .glass-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(15px);
        }
      `}</style>

      <header className="fixed top-0 left-0 w-full z-[100] px-10 py-8 flex justify-between items-center">
        
        {/* --- LOGO (ساده و شیک بدون حلقه) --- */}
        <Link href="/en" className="relative group">
          <div className="relative z-10 bg-[#020202] px-8 py-3 rounded-full border border-[#D4AF37]/30 shadow-2xl transition-all group-hover:border-[#D4AF37]">
            <span className="text-[#D4AF37] font-black tracking-tighter italic text-2xl uppercase">
              SAFI <span className="text-white">TOPUP</span>
            </span>
          </div>
        </Link>

        {/* --- NAVIGATION --- */}
        <nav className="hidden lg:flex items-center animated-flag-box px-4 py-2 rounded-full shadow-2xl">
          <div className="glass-overlay"></div>
          <div className="relative z-10 flex gap-1">
            <NavLink href="/en" label="HOME" active={pathname.includes('/home')} />
            <NavLink href="/en/partners" label="PARTNERS" active={pathname.includes('/partners')} />
            <NavLink href="/en/about" label="ABOUT" active={pathname.includes('/about')} />
            <NavLink href="/en/contact" label="CONTACT" active={pathname.includes('/contact')} />
          </div>
        </nav>

        {/* --- LANGUAGE DROPDOWN --- */}
        <div className="relative">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="animated-flag-box flex items-center gap-3 px-6 py-3 rounded-full shadow-2xl transition-transform active:scale-95"
          >
            <div className="glass-overlay"></div>
            <div className="relative z-10 flex items-center gap-3">
              <span className="text-[14px]">{currentLang.flag}</span>
              <span className="text-[11px] font-black uppercase text-white tracking-[0.3em]">{currentLang.code}</span>
              <span className={`text-[10px] text-[#D4AF37] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
            </div>
          </button>

          {/* DROPDOWN LIST */}
          {isOpen && (
            <div className="absolute right-0 mt-4 w-64 bg-[#080808] border border-white/10 rounded-[30px] p-4 shadow-[0_40px_80px_rgba(0,0,0,0.9)] backdrop-blur-3xl overflow-hidden">
              <div className="flex flex-col gap-1">
                {languages.map((l) => (
                  <div
                    key={l.code}
                    className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all ${l.active ? 'hover:bg-white/5 cursor-pointer text-white' : 'opacity-30 cursor-not-allowed'}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{l.flag}</span>
                      <span className="text-[11px] font-bold tracking-widest uppercase">{l.name}</span>
                    </div>
                    {!l.active && (
                      <span className="text-[8px] font-black text-[#D4AF37] border border-[#D4AF37]/30 px-2 py-0.5 rounded-full italic uppercase">Soon</span>
                    )}
                    {l.active && <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </header>
    </>
  );
}

function NavLink({ href, label, active }: { href: string, label: string, active: boolean }) {
  return (
    <Link href={href} className={`px-7 py-2.5 rounded-full text-[12px] font-black tracking-[0.2em] transition-all uppercase ${active ? 'text-[#D4AF37] bg-white/10' : 'text-white/40 hover:text-white hover:bg-white/5'}`}>
      {label}
    </Link>
  );
}