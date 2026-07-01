"use client";
import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { placeOrderAction } from './actions';

// Internal Loading Spinner
const Spinner = () => (
  <svg className="animate-spin h-5 w-5 text-black" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
  </svg>
);

export default function SocialServicesPage() {
  const [services, setServices] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [selectedService, setSelectedService] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.from('smm_services').select('*').eq('is_active', true)
      .then(({ data }) => { setServices(data || []); setLoading(false); });
  }, []);

  const filteredServices = services.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const result = await placeOrderAction(
        selectedService.id, 
        formData.get('link') as string, 
        parseInt(formData.get('quantity') as string)
    );
    
    if (result.success) {
      alert("Order placed successfully!");
      setSelectedService(null);
    } else {
      alert("Error: " + result.error);
    }
    setIsSubmitting(false);
  }

  return (
    // نکته: کلاس pt-32 باعث می‌شود محتوا از زیر هدر (Fixed) شروع شود و پشت آن پنهان نشود
    <div className="min-h-screen bg-[#050505] text-white p-4 md:p-8 pt-32 md:pt-40 font-sans">
      
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-[#D4AF37] mb-4 tracking-tighter uppercase">Social Media Services</h1>
        <p className="text-gray-500 uppercase tracking-widest text-sm">Premium SMM Panel Integration</p>
        
        <div className="mt-8 flex justify-center">
          <input 
            type="text"
            placeholder="Search for services..."
            className="w-full max-w-md bg-zinc-900 border border-white/10 p-4 rounded-full text-center focus:outline-none focus:border-[#D4AF37] transition-all"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center text-[#D4AF37] py-20 animate-pulse">Loading services...</div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredServices.map((s) => (
            <button key={s.id} onClick={() => setSelectedService(s)}
              className="group relative bg-zinc-900/50 border border-white/5 p-6 rounded-2xl hover:border-[#D4AF37]/50 transition-all text-left hover:bg-zinc-900">
              <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-4 text-[#D4AF37] font-bold text-xs group-hover:scale-110 transition-transform">
                {s.name.substring(0, 2).toUpperCase()}
              </div>
              <h3 className="font-bold text-sm text-gray-200 mb-2 line-clamp-2">{s.name}</h3>
              <p className="text-[#D4AF37] font-black text-xl">$ {s.markup_price?.toFixed(2) || '0.00'}</p>
            </button>
          ))}
        </div>
      )}

      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <form onSubmit={handleSubmit} className="bg-zinc-900 border border-[#D4AF37]/30 p-8 rounded-[40px] w-full max-w-sm shadow-2xl">
            <h2 className="text-2xl font-black text-white mb-6">Place Order</h2>
            <p className="text-zinc-400 text-xs mb-8">{selectedService.name}</p>
            
            <div className="space-y-4">
              <input name="link" placeholder="Enter your link..." className="w-full p-4 bg-black border border-white/5 rounded-2xl text-white focus:border-[#D4AF37] outline-none" required />
              <input name="quantity" type="number" placeholder="Quantity (e.g. 1000)..." className="w-full p-4 bg-black border border-white/5 rounded-2xl text-white focus:border-[#D4AF37] outline-none" required />
            </div>

            <div className="flex gap-3 mt-8">
              <button type="button" onClick={() => setSelectedService(null)} className="flex-1 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">Cancel</button>
              <button type="submit" className="flex-1 p-4 rounded-2xl bg-[#D4AF37] font-bold text-black hover:bg-[#b8962d] transition-all flex justify-center items-center" disabled={isSubmitting}>
                {isSubmitting ? <Spinner /> : "Confirm Order"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}