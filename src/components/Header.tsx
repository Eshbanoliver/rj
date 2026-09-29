import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { companyData } from '../data/company';
import { Menu, X, Phone, Compass, Calendar, ChevronRight } from 'lucide-react';

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
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold tracking-wide">
              <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
              Signature 15 Strangers Trips
            </span>
            <span className="hidden md:inline text-slate-400">
              Departures every Thursday & Friday from Ahmedabad & Udaipur
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:8094268991"
              className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-500" />
              <span>8094268991 / 8890437050</span>
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <a
              href={`mailto:${companyData.email}`}
              className="hidden sm:inline hover:text-amber-400 transition-colors text-slate-300"
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
                  R <span className="text-amber-500">Journey</span>
                </span>
              </div>
              <p className="text-[10px] tracking-widest uppercase text-slate-500 font-semibold">
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
                      ? 'text-amber-600 bg-amber-50 font-bold'
                      : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('trips')}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 border border-slate-200 hover:border-amber-400 hover:text-amber-600 hover:bg-amber-50/50 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-500" />
              View Batches
            </button>
            <button
              onClick={() => onOpenInquiry()}
              className="relative group overflow-hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-amber-500 to-orange-600 shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Plan Your Trip</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Light Theme) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
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
                      R <span className="text-amber-500">Journey</span>
                    </h3>
                    <p className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">Tour & Travel</p>
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
                          ? 'bg-amber-50 text-amber-600 font-bold'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
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
            <div className="pt-6 border-t border-slate-200 space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3 px-4 rounded-xl text-center font-bold text-white bg-gradient-to-r from-amber-500 to-orange-600 shadow-lg shadow-orange-500/25 active:scale-95 transition-all text-sm"
              >
                Plan Your Trip Now
              </button>

              <div className="text-center space-y-1 pt-2">
                <a
                  href="tel:8094268991"
                  className="inline-flex items-center gap-2 text-xs text-slate-600 hover:text-amber-600 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-500" />
                  <span>Call: 8094268991 / 8890437050</span>
                </a>
                <p className="text-[11px] text-slate-500">
                  Udaipur, Rajasthan • rjourney@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
