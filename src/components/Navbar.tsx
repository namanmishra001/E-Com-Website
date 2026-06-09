import { Store, Phone, Mail, MapPin, Menu, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFCFA]/95 backdrop-blur-xl border-b border-stone-200/60 pb-3">
      <div className="bg-stone-900 text-stone-50 text-[10px] font-medium tracking-widest uppercase py-2 text-center">
        Worldwide Shipping • Visit our showroom in Chandni Chowk
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end pt-5 h-auto">
          <div className="flex flex-col">
            <div className="flex items-center mb-1">
              <span className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-stone-800 uppercase">Gupta Emporium</span>
            </div>
            <p className="text-stone-500 uppercase tracking-widest text-[10px] hidden sm:block">Purveyors of Fine Silk & Heritage Wear</p>
          </div>
          
          <div className="hidden md:flex gap-8 text-xs font-medium uppercase tracking-widest mb-1 items-center">
            <a href="#about" className="text-stone-500 hover:text-stone-900 transition-colors">Heritage</a>
            <a href="#lookbook" className="text-stone-500 hover:text-stone-900 transition-colors">Lookbook</a>
            <a href="#contact" className="text-stone-500 hover:text-stone-900 transition-colors">Locate Us</a>
            
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 bg-[#25D366]/10 text-[#128C7E] px-4 py-2 rounded-full border border-[#25D366]/20 hover:bg-[#25D366] hover:text-white transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="font-bold tracking-wider">WhatsApp</span>
            </a>
          </div>

          <div className="flex items-center md:hidden mb-1 gap-4">
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#128C7E] bg-[#25D366]/10 p-2 rounded-full border border-[#25D366]/20"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-stone-900 focus:outline-none p-1"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FDFCFA] border-b border-stone-200 shadow-sm absolute w-full left-0 top-full z-40">
          <div className="px-6 py-4 space-y-4">
            <a onClick={() => setIsOpen(false)} href="#about" className="block text-xs font-bold uppercase tracking-widest text-stone-600 hover:text-stone-900">Heritage</a>
            <a onClick={() => setIsOpen(false)} href="#lookbook" className="block text-xs font-bold uppercase tracking-widest text-stone-600 hover:text-stone-900">Lookbook</a>
            <a onClick={() => setIsOpen(false)} href="#contact" className="block text-xs font-bold uppercase tracking-widest text-stone-600 hover:text-stone-900">Locate Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}
