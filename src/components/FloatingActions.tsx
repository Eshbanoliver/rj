import React, { useState, useEffect } from 'react';
import { companyData } from '../data/company';
import { MessageSquare, Phone, ArrowUp } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(
    'Hello R Journey! I am interested in joining an upcoming Rajasthan tour batch.'
  )}`;

  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col items-center gap-2 sm:gap-3">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900/90 text-white hover:bg-slate-800 border border-slate-700 shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${companyData.phones[0]}`}
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-900 border border-amber-500/40 text-amber-400 shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative"
        aria-label="Call R Journey Hotline"
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="hidden sm:block absolute right-14 bg-slate-900 text-white text-xs font-semibold px-2.5 py-1 rounded-lg border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Call: {companyData.displayPhone}
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 text-white shadow-2xl shadow-emerald-500/30 flex items-center justify-center transition-all hover:scale-110 active:scale-95 animate-pulse-glow group relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 sm:w-7 sm:h-7" />
        <span className="hidden sm:block absolute right-16 bg-slate-900 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};
