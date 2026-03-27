"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Footer() {
  const pathname = usePathname();
  const isFa = pathname.includes('/fa');
  const langPath = isFa ? '/fa' : '/en';

  return (
    <footer className="relative bg-[#080808] pt-20 md:pt-32 pb-12 overflow-hidden border-t border-[#D4AF37]/10" dir={isFa ? 'rtl' : 'ltr'}>
      
      {/* --- GALAXY EFFECT --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40"></div>
        <div className="absolute -bottom-32 -left-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#D4AF37]/5 blur-[100px] md:blur-[150px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-20">
          
          {/* --- BRAND SECTION --- */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href={`${langPath}`} className="group mb-8">
              <span className="text-[#D4AF37] text-4xl md:text-5xl font-black tracking-tighter italic leading-none">
                SAFI<span className="text-white font-thin not-italic opacity-70 uppercase">TOPUP</span>
              </span>
              <div className="h-[3px] w-20 bg-[#D4AF37] mt-3 group-hover:w-full transition-all duration-700 mx-auto md:mx-0"></div>
            </Link>
            <p className="text-[12px] md:text-[14px] text-gray-400 leading-relaxed tracking-wide uppercase italic max-w-sm">
              {isFa 
                ? "صافی تاپ‌آپ: زیرساخت مدرن برای اتصال افغانستان به بازارهای دیجیتال جهانی." 
                : "SAFI TOPUP: MODERN INFRASTRUCTURE CONNECTING AFGHANISTAN TO GLOBAL DIGITAL MARKETS."}
            </p>
          </div>

          {/* --- NAVIGATION LINKS --- */}
          <div className="md:col-span-3 text-center md:text-left">
            <h4 className="text-[#D4AF37] text-[11px] md:text-[13px] font-black tracking-[0.4em] mb-8 md:mb-12 uppercase">
              {isFa ? "منو" : "NAVIGATION"}
            </h4>
            <ul className="flex flex-col gap-5 md:gap-6">
              <FooterLink href={`${langPath}`} label={isFa ? "صفحه اصلی" : "HOME"} />
              <FooterLink href={`${langPath}/partners`} label={isFa ? "همکاران" : "PARTNERS"} />
              <FooterLink href={`${langPath}/about`} label={isFa ? "درباره ما" : "ABOUT"} />
              <FooterLink href={`${langPath}/contact`} label={isFa ? "تماس با ما" : "CONTACT"} />
            </ul>
          </div>

          {/* --- FOUNDER BOX --- */}
          <div className="md:col-span-5 bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-8 md:p-10 rounded-[30px] md:rounded-[40px] relative group hover:border-[#D4AF37]/40 transition-all shadow-2xl overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 mb-8 md:mb-10 text-center sm:text-left">
              {/* Profile Photo - اصلاح آدرس و پسوند */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-[3px] border-[#D4AF37] p-1 relative z-10 overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.3)] bg-[#111]">
                <Image 
                                     src="/founder-profile.jpg"  // چک کنید اگر پسوند شما jpeg است به jpeg تغییر دهید
                  alt="Shaheen Safi" 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="flex flex-col">
                <h3 className="text-white text-2xl md:text-3xl font-black tracking-[0.1em] uppercase leading-none">SHAHEEN SAFI</h3>
                <span className="text-[#D4AF37] text-[9px] md:text-[11px] font-bold tracking-[0.5em] mt-3 uppercase opacity-80">FOUNDER & CEO</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start gap-4 md:gap-5">
              <SocialBtn href="#"><TiktokIcon /></SocialBtn>
              <SocialBtn href="#"><InstagramIcon /></SocialBtn>
              <SocialBtn href="#"><FacebookIcon /></SocialBtn>
              <SocialBtn href="#"><LinkedinIcon /></SocialBtn>
              <SocialBtn href="#"><WhatsappIcon /></SocialBtn>
            </div>
            
            <div className="absolute -top-2 -right-4 text-[40px] md:text-[60px] font-black text-white/[0.02] italic pointer-events-none uppercase">FOUNDER</div>
          </div>

        </div>

        {/* --- COPYRIGHT --- */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] md:text-[11px] font-bold tracking-[0.4em] text-gray-600 uppercase text-center">
            {isFa ? "© ۲۰۲۶ سیستم جهانی صافی تاپ‌آپ" : "© 2026 SAFI TOPUP GLOBAL SYSTEM"}
          </p>
          <span className="text-[10px] md:text-[11px] font-black tracking-[0.2em] text-[#D4AF37] uppercase italic underline decoration-white/10 underline-offset-[12px] text-center">
            ENGINEERED BY SHAHEEN SAFI
          </span>
        </div>
      </div>
    </footer>
  );
}

// کامپوننت‌های کمکی برای تمیزتر شدن کد
function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="text-[13px] md:text-[14px] font-bold tracking-[0.2em] text-gray-500 hover:text-white transition-all uppercase">
        {label}
      </Link>
    </li>
  );
}

function SocialBtn({ children, href }: { children: React.ReactNode, href: string }) {
  return (
    <a 
      href={href} 
      target="_blank"
      className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/50 hover:text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-500 shadow-lg"
    >
      {children}
    </a>
  );
}

// جدا کردن آیکون‌ها برای خوانایی بیشتر
const TiktokIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>;
const InstagramIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const FacebookIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const LinkedinIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const WhatsappIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.9.9L22 2l-1.5 6.5Z"></path></svg>;