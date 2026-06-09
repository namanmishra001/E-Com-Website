import { MessageCircle } from 'lucide-react';
import heroBg from '../assets/images/hero_bg_1781044123093.png';

export function Hero() {
  return (
    <div className="pb-8">
      <div className="w-full bg-stone-900 rounded-3xl p-8 lg:p-14 relative overflow-hidden group shadow-sm min-h-[500px] flex items-center">
        <div className="absolute inset-0 w-full h-full">
            <img 
              src={heroBg} 
              alt="Indian Clothing Details"
              className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            />
        </div>
        
        <div className="relative z-10 w-full flex flex-col justify-between text-stone-50 h-full">
          <div className="mb-8">
            <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] uppercase tracking-widest text-white font-bold border border-white/20 inline-block mb-8">
              Exquisite Craftsmanship
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif mt-2 leading-[1.1] tracking-tight max-w-2xl">
              <span className="block text-stone-50">Elegance Woven</span>
              <span className="block text-stone-400 italic font-light">& Tailored to Perfection.</span>
            </h1>
          </div>
          <div className="flex flex-col md:flex-row md:items-end gap-8 mt-auto pt-10">
            <p className="max-w-md text-sm text-stone-300 leading-relaxed font-sans">
              Welcome to Gupta Emporium. Explore our heritage collections of premium Lehengas, Handloom Sarees, and Bespoke Sherwanis. A tradition of excellence since 1984.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:ml-auto">
              <a
                href="#lookbook"
                className="bg-white text-stone-900 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-stone-200 transition-colors text-center shadow-lg whitespace-nowrap"
              >
                Explore Lookbook
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#1DA851] transition-colors text-center shadow-lg whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
