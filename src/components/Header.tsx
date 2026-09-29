import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { companyData } from '../data/company';
import { Menu, X, Phone, Compass, Calendar, ChevronRight, MessageSquare } from 'lucide-react';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenInquiry: (initialData?: { tourTitle?: string }) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenInquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Destinations', page: 'destinations' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Upcoming Trips', page: 'trips' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleLinkClick = (page: PageType) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#113d48] text-slate-200 text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-[#184e5b]">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center gap-2 sm:gap-4 overflow-hidden">
            <span className="inline-flex items-center gap-1.5 text-[#1ca8cb] font-semibold tracking-wide text-[11px] sm:text-xs shrink-0">
              <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
              15 Strangers Trips
            </span>
            <span className="hidden md:inline text-slate-300/80 text-xs truncate">
              Departures every Thu & Fri from Ahmedabad & Udaipur
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 text-xs shrink-0">
            <a
              href={`tel:${companyData.phones[0]}`}
              className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-slate-200 hover:text-[#1ca8cb] font-medium transition-colors"
            >
              <Phone className="w-3 h-3 text-[#1ca8cb]" />
              <span>{companyData.displayPhone}</span>
            </a>
            <span className="hidden sm:inline text-slate-500">|</span>
            <a
              href={`mailto:${companyData.email}`}
              className="hidden lg:inline hover:text-[#1ca8cb] transition-colors text-slate-300/80 text-xs"
            >
              {companyData.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation (Light Theme) */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/90'
            : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
            aria-label="R Journey Tour & Travel Home"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white p-1 shadow-sm border border-slate-200/80 flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden">
              <img
                src="/images/r-journey-logo.png"
                alt="R Journey Tour & Travel Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 font-heading">
                  R <span className="text-[#1ca8cb]">Journey</span>
                </span>
              </div>
              <p className="text-[10px] tracking-widest uppercase text-[#113d48] font-bold">
                Tour & Travel
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleLinkClick(link.page)}
                  className={`px-3.5 py-1.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'text-[#113d48] bg-[#1ca8cb]/15 font-bold shadow-xs'
                      : 'text-slate-700 hover:text-[#1ca8cb] hover:bg-[#1ca8cb]/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => handleLinkClick('trips')}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 border border-slate-200 hover:border-[#1ca8cb] hover:text-[#113d48] hover:bg-[#1ca8cb]/5 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5 text-[#1ca8cb]" />
              View Batches
            </button>
            <button
              onClick={() => onOpenInquiry()}
              className="relative group overflow-hidden inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#1ca8cb] via-[#189bbd] to-[#113d48] shadow-sm shadow-[#1ca8cb]/25 hover:shadow-md hover:shadow-[#1ca8cb]/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Plan Trip</span>
              <ChevronRight className="w-3.5 h-3.5 hidden sm:inline group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Light Theme) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#113d48]/70 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed right-0 top-0 bottom-0 w-5/6 max-w-sm bg-white border-l border-slate-200 p-6 flex flex-col justify-between shadow-2xl z-50 overflow-y-auto text-slate-900">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white p-1 border border-slate-200 shadow-sm flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/r-journey-logo.png"
                      alt="R Journey Tour & Travel Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base font-heading">
                      R <span className="text-[#1ca8cb]">Journey</span>
                    </h3>
                    <p className="text-[10px] text-[#113d48] font-bold tracking-wider uppercase">Tour & Travel</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation list */}
              <nav className="mt-6 space-y-1">
                {navLinks.map((link) => {
                  const isActive = currentPage === link.page;
                  return (
                    <button
                      key={link.page}
                      onClick={() => handleLinkClick(link.page)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-medium transition-all ${
                        isActive
                          ? 'bg-[#1ca8cb]/15 text-[#113d48] font-bold'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-[#1ca8cb]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-5 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3 px-4 rounded-xl text-center font-bold text-white bg-gradient-to-r from-[#1ca8cb] via-[#189bbd] to-[#113d48] shadow-md shadow-[#1ca8cb]/25 active:scale-95 transition-all text-sm flex items-center justify-center gap-2"
              >
                <span>Plan Your Trip Now</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${companyData.phones[0]}`}
                  className="py-2.5 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#1ca8cb]" />
                  <span>Call Us</span>
                </a>
                <a
                  href={`https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent('Hello R Journey!')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl border border-emerald-200 text-xs font-semibold text-emerald-700 bg-emerald-50/50 hover:bg-emerald-50 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
