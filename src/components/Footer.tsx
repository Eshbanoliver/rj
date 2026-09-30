import React, { useState } from 'react';
import { PageType } from '../types';
import { companyData } from '../data/company';
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2, Compass } from 'lucide-react';
import { InstagramIcon } from './icons';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenTerms }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 4000);
    setEmail('');
  };

  const quickLinks: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Destinations', page: 'destinations' },
    { label: 'Tour Packages', page: 'trips' },
    { label: 'Recent Gallery', page: 'gallery' },
    { label: 'Contact Us', page: 'contact' },
  ];

  const categories = [
    { label: '15 Strangers Social Trips', page: 'trips' as PageType },
    { label: 'Ahmedabad to Udaipur (Pool Party)', page: 'trips' as PageType },
    { label: 'Ahmedabad to Jodhpur & Jaisalmer', page: 'trips' as PageType },
    { label: 'Udaipur to Jodhpur & Jaisalmer', page: 'trips' as PageType },
    { label: 'Sam Sand Dunes Desert Glamping', page: 'trips' as PageType },
    { label: 'Custom & Corporate Offsites', page: 'contact' as PageType },
  ];

  return (
    <footer className="bg-white text-slate-800 border-t border-slate-200">
      {/* Top Newsletter Bar */}
      <div className="border-b border-slate-100 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <span className="font-script text-[#1ca8cb] text-2xl sm:text-3xl font-bold tracking-wide">
                Stay In The Loop
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#113d48] font-heading mt-0.5">
                Get Update To The Latest Newsletter
              </h3>
            </div>

            <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-md w-full">
              <div className="relative flex-1">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-3 rounded-full border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1ca8cb] text-sm text-slate-800 placeholder-slate-400"
                />
              </div>
              <button
                type="submit"
                className="px-7 py-3 rounded-full bg-[#113d48] hover:bg-[#1ca8cb] text-white text-sm font-bold shadow-md transition-all duration-300 shrink-0 cursor-pointer flex items-center gap-1.5"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {subscribed && (
            <div className="mt-3 text-xs text-emerald-600 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>Thank you for subscribing! We will send you upcoming batch schedules and discounts.</span>
            </div>
          )}
        </div>
      </div>

      {/* Main 4-Column Balanced Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Col 1: Brand Info (4 cols) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1ca8cb] text-white flex items-center justify-center font-black text-xl shadow-md">
                R
              </div>
              <div>
                <h4 className="text-xl font-black font-heading text-[#113d48] tracking-tight">
                  R Journey
                </h4>
                <p className="text-[10px] tracking-widest uppercase text-[#1ca8cb] font-bold">
                  Tour & Travel
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              Turning strangers into lifelong stories across Rajasthan's most iconic landscapes. Curated 15 Strangers group trips with luxury hill stays, desert glamping, and DJ pool parties from Ahmedabad & Udaipur.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={companyData.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#f0f9fb] hover:bg-[#1ca8cb] text-[#113d48] hover:text-white flex items-center justify-center transition-colors border border-slate-200"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${companyData.whatsapp}?text=Hi%20R%20Journey!`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-[#f0f9fb] hover:bg-[#1ca8cb] text-[#113d48] hover:text-white flex items-center justify-center transition-colors border border-slate-200"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${companyData.email}`}
                aria-label="Email"
                className="w-9 h-9 rounded-full bg-[#f0f9fb] hover:bg-[#1ca8cb] text-[#113d48] hover:text-white flex items-center justify-center transition-colors border border-slate-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold font-heading text-[#113d48] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => {
                      onNavigate(link.page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-600 hover:text-[#1ca8cb] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Tour Circuits & Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-heading text-[#113d48] uppercase tracking-wider">
              Tour Circuits
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {categories.map((cat, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      onNavigate(cat.page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-600 hover:text-[#1ca8cb] transition-colors cursor-pointer text-left leading-snug"
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info & Hubs (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-heading text-[#113d48] uppercase tracking-wider">
              Contact & Hubs
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1ca8cb] shrink-0 mt-0.5" />
                <span className="leading-snug">{companyData.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-[#1ca8cb] shrink-0" />
                <span>Hubs: Ahmedabad & Udaipur</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1ca8cb] shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${companyData.phones[0]}`} className="hover:text-[#1ca8cb] font-semibold">
                    {companyData.phones[0]}
                  </a>
                  <a href={`tel:${companyData.phones[1]}`} className="hover:text-[#1ca8cb] text-slate-500">
                    {companyData.phones[1]}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1ca8cb] shrink-0" />
                <a href={`mailto:${companyData.email}`} className="hover:text-[#1ca8cb]">
                  {companyData.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-[11px] text-slate-500 pt-1 border-t border-slate-100">
                <Clock className="w-3.5 h-3.5 text-[#1ca8cb] shrink-0" />
                <span>{companyData.businessHours}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#113d48] text-white py-4 text-xs border-t border-[#1a4a56]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-300 text-center sm:text-left">
            Copyright © 2026 <span className="text-[#1ca8cb] font-bold">R Journey</span>. All Rights Reserved.
          </p>

          <div>
            <button
              onClick={onOpenTerms}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer text-xs"
            >
              Terms & Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
