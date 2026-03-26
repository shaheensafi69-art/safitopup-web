"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // برای دراپ‌داون زبان
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // برای منوی همبرگری

  // بستن منوی موبایل هنگام تغییر صفحه
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧', active: true },
    { code: 'fa', name: 'فارسی', flag: '🇦🇫', active: false },
    { code: 'ps', name: 'پشتو', flag: '🇦🇫', active: false },
    { code: 'tr', name: 'Turkish', flag: '🇹🇷', active: false },
  ];

  const currentLang = languages[0];
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
          position: absolute; inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(15px);
        }
        .mobile-menu-enter { transform: translateY(-100%); transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
        .mobile-menu-enter-active { transform: translateY(0); }
      `}</style>

      <header className="fixed top-0 left-0 w-full z-[100] px-6 md:px-10 py-6 md:py-8 flex justify-between items-center">
        
        {/* --- LOGO --- */}
        <Link href="/en" className="relative z-[110] group">
          <div className="bg-[#020202] px-6 md:px-8 py-2 md:py-3 rounded-full border border-[#D4AF37]/30 shadow-2xl transition-all group-hover:border-[#D4AF37]">
            <span className="text-[#D4AF37] font-black tracking-tighter italic text-xl md:text-2xl uppercase">
              SAFI <span className="text-white">TOPUP</span>
            </span>
          </div>
        </Link>

        {/* --- DESKTOP NAVIGATION --- */}
        <nav className="hidden lg:flex items-center animated-flag-box px-4 py-2 rounded-full shadow-2xl">
          <div className="glass-overlay"></div>
          <div className="relative z-10 flex gap-1">
            <NavLink href="/en" label="HOME" active={pathname === '/en'} />
            <NavLink href="/en/partners" label="PARTNERS" active={pathname.includes('/partners')} />
            <NavLink href="/en/about" label="ABOUT" active={pathname.includes('/about')} />
            <NavLink href="/en/contact" label="CONTACT" active={pathname.includes('/contact')} />
          </div>
        </nav>

        {/* --- RIGHT SECTION: LANG & HAMBURGER --- */}
        <div className="flex items-center gap-4 relative z-[110]">
          {/* LANGUAGE DROPDOWN (Hidden on very small screens if needed, but here kept) */}
          <div className="relative">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="animated-flag-box flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full shadow-2xl transition-transform active:scale-95"
            >
              <div className="glass-overlay"></div>
              <div className="relative z-10 flex items-center gap-2">
                <span className="text-[12px] md:text-[14px]">{currentLang.flag}</span>
                <span className="text-[10px] md:text-[11px] font-black uppercase text-white tracking-[0.2em] md:tracking-[0.3em]">{currentLang.code}</span>
              </div>
            </button>

            {/* DROPDOWN LIST */}
            {isOpen && (
              <div className="absolute right-0 mt-4 w-56 md:w-64 bg-[#080808]/95 border border-white/10 rounded-[25px] md:rounded-[30px] p-4 shadow-2xl backdrop-blur-3xl">
                <div className="flex flex-col gap-1">
                  {languages.map((l) => (
                    <div key={l.code} className={`flex items-center justify-between px-4 py-2 rounded-xl ${l.active ? 'text-white' : 'opacity-30 cursor-not-allowed'}`}>
                      <div className="flex items-center gap-3">
                        <span>{l.flag}</span>
                        <span className="text-[10px] font-bold tracking-widest uppercase">{l.name}</span>
                      </div>
                      {l.active && <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* HAMBURGER BUTTON (Mobile Only) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 bg-white/5 border border-white/10 rounded-full"
          >
            <span className={`w-5 h-0.5 bg-[#D4AF37] transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-[#D4AF37] transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* --- MOBILE OVERLAY MENU --- */}
        <div className={`fixed inset-0 bg-[#020202] z-[100] lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <MobileNavLink href="/en" label="HOME" active={pathname === '/en'} />
            <MobileNavLink href="/en/partners" label="PARTNERS" active={pathname.includes('/partners')} />
            <MobileNavLink href="/en/about" label="ABOUT" active={pathname.includes('/about')} />
            <MobileNavLink href="/en/contact" label="CONTACT" active={pathname.includes('/contact')} />
          </div>
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

function MobileNavLink({ href, label, active }: { href: string, label: string, active: boolean }) {
  return (
    <Link href={href} className={`text-3xl font-black tracking-[0.3em] uppercase transition-all ${active ? 'text-[#D4AF37]' : 'text-white/20'}`}>
      {label}
    </Link>
  );
}