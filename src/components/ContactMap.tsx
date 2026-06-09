import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import React, { useState } from 'react';

export function ContactMap() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-12 md:py-20 mb-8 border-t border-stone-200">
      <div className="mb-12 text-center">
        <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-4">Visit Us</span>
        <h2 className="text-3xl md:text-5xl font-serif text-stone-800 tracking-tight leading-tight">Our Showroom</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-serif text-stone-800 mb-6">Gupta Emporium</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-stone-50 p-3 rounded-full text-stone-600 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">Address</h4>
                  <p className="text-sm font-medium text-stone-800 leading-relaxed">
                    1455, Nai Sarak<br/>
                    Chandni Chowk<br/>
                    New Delhi, 110006
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-stone-50 p-3 rounded-full text-stone-600 shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">Hours</h4>
                  <p className="text-sm font-medium text-stone-800">Mon - Sat: 11:00 AM - 8:00 PM</p>
                  <p className="text-sm text-stone-500 mt-1">Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-stone-50 p-3 rounded-full text-stone-600 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">Contact</h4>
                  <p className="text-sm font-medium text-stone-800">+91 98765 43210</p>
                  <p className="text-sm text-stone-500 mt-1">contact@guptaemporium.in</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-stone-100">
              <a 
                href="https://wa.me/919876543210"
                target="_blank" rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#1DA851] transition-all shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                Chat with us on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="bg-stone-200 rounded-3xl overflow-hidden relative w-full h-[400px] border border-stone-200 shadow-inner">
            {/* Embedded Google Map pointing generally to Chandni Chowk area */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1m2!1s0x390cfd2718919af3%3A0xcb1b59074092b77!2sChandni%20Chowk%2C%20New%20Delhi%2C%20Delhi%20110006%2C%20India!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Location"
              className="absolute inset-0 grayscale opacity-90 mix-blend-multiply"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-4 rounded-2xl flex flex-col sm:flex-row justify-between items-center shadow-lg border border-white">
              <div>
                <p className="text-sm text-stone-800 font-bold mb-1">Gupta Emporium</p>
                <p className="text-[10px] text-stone-500 font-medium uppercase tracking-widest">Nai Sarak, Chandni Chowk</p>
              </div>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="mt-3 sm:mt-0 text-[10px] font-bold text-white bg-stone-900 border border-stone-800 px-6 py-3 rounded-xl hover:bg-stone-800 transition-colors uppercase tracking-widest">
                Get Directions
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
