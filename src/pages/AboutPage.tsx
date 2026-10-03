import React from 'react';
import { PageType } from '../types';
import { companyData } from '../data/company';
import {
  Users,
  Compass,
  ShieldCheck,
  Hotel,
  Sparkles,
  MapPin,
  CheckCircle2,
  ArrowRight,
  HeartHandshake,
  Calendar,
  FileText,
  Phone,
  Mail,
  Clock,
  Award,
  Flame,
  Camera,
  Download,
} from 'lucide-react';
import { InstagramIcon } from '../components/icons';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
  onOpenInquiry: (initialData?: { tourTitle?: string }) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenInquiry }) => {
  return (
    <div className="pt-24 pb-20 bg-[#fafbfc] text-slate-900 min-h-screen selection:bg-[#1ca8cb] selection:text-white">
      {/* 1. Hero Banner */}
      <div className="relative py-14 sm:py-24 bg-[#113d48] border-b border-[#0e333d] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/strangers-sunset-community.jpg"
            alt="R Journey Community"
            className="w-full h-full object-cover filter brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#113d48] via-[#113d48]/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold tracking-widest text-[#1ca8cb] uppercase mb-3 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-slate-900/80 border border-[#1ca8cb]/30 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official About R Journey</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight">
            About <span className="text-[#1ca8cb]">R जourney</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-xl font-medium text-slate-200 max-w-2xl mx-auto px-2">
            "Where Strangers Meet, Stories Begin & Memories Last Forever."
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3 sm:p-4 text-center">
              <span className="text-xl sm:text-3xl font-black text-[#1ca8cb] block">2+ Years</span>
              <span className="text-[11px] sm:text-xs text-slate-200 font-medium">Curating Group Trips</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3 sm:p-4 text-center">
              <span className="text-xl sm:text-3xl font-black text-amber-400 block">100+</span>
              <span className="text-[11px] sm:text-xs text-slate-200 font-medium">Curated Batches</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3 sm:p-4 text-center">
              <span className="text-xl sm:text-3xl font-black text-emerald-400 block">15 Strangers</span>
              <span className="text-[11px] sm:text-xs text-slate-200 font-medium">Signature Batch Size</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3 sm:p-4 text-center">
              <span className="text-xl sm:text-3xl font-black text-cyan-300 block">1,200+</span>
              <span className="text-[11px] sm:text-xs text-slate-200 font-medium">Community Friends</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Story & Origin */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#113d48] uppercase">
              <Compass className="w-3.5 h-3.5 text-[#1ca8cb]" />
              <span>The R जourney Story</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight leading-tight">
              Born in Udaipur to Re-imagine How We Travel Together
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Headquartered in the royal City of Lakes (Udaipur, Rajasthan), <strong>R जourney Tour & Travel</strong> was founded with a singular conviction: <em>the richest part of travel is not just the places you see, but the people you experience them with.</em>
            </p>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              We noticed that countless young explorers, working professionals, college students, and solo dreamers postpone or cancel their travel plans because their friends' schedules don't match or traveling alone feels daunting. R Journey was created as the answer — a warm, vibrant, and safe space where you can pack your bags solo and return home with a lifelong family.
            </p>

            {/* Core R Journey Commitments */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#1ca8cb] shrink-0 mt-0.5" />
                <span>
                  <strong>Strict 15-Traveler Batch Limit:</strong> Exactly 15 strangers per signature departure to ensure meaningful conversations and intimate bonding.
                </span>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#1ca8cb] shrink-0 mt-0.5" />
                <span>
                  <strong>Verified Premium Accommodations:</strong> Handpicked partner stays including Palm Valley Resort with dual swimming pools in Udaipur and luxury Swiss tents in the Thar Desert.
                </span>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#1ca8cb] shrink-0 mt-0.5" />
                <span>
                  <strong>100% Transparent Fixed Costs:</strong> Straightforward pricing starting at ₹4,499 with an easy advance registration of ₹3,500. Zero hidden charges.
                </span>
              </div>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onNavigate('trips')}
                className="w-full sm:w-auto min-h-[46px] px-7 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#1ca8cb] to-[#113d48] hover:opacity-95 shadow-md shadow-[#1ca8cb]/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>View All Tour Packages</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('declaration')}
                className="w-full sm:w-auto min-h-[46px] px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#113d48] bg-slate-100 hover:bg-[#1ca8cb]/15 border border-slate-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#1ca8cb]" />
                <span>Declaration & Terms</span>
              </button>
            </div>
          </div>

          {/* Mosaic Photos */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
                <img
                  src="/images/udaipur-group-strangers.jpg"
                  alt="R Journey Strangers Group"
                  className="object-cover h-44 sm:h-64 w-full group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
                <img
                  src="/images/palm-valley-pool.jpg"
                  alt="Palm Valley Resort Pool"
                  className="object-cover h-36 sm:h-48 w-full group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-8">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
                <img
                  src="/images/jodhpur-mehrangarh-sunset.jpg"
                  alt="Mehrangarh Fort Jodhpur"
                  className="object-cover h-36 sm:h-48 w-full group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
                <img
                  src="/images/dj-pool-party.jpg"
                  alt="DJ Pool Party with R Journey"
                  className="object-cover h-44 sm:h-64 w-full group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3. The Signature "15 Strangers" Concept Deep Dive */}
        <div className="mt-16 sm:mt-24 p-6 sm:p-12 rounded-3xl bg-gradient-to-br from-[#113d48] to-[#0c2c34] text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#1ca8cb]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#1ca8cb] uppercase mb-2">
              <HeartHandshake className="w-4 h-4" />
              <span>R Journey's Signature Experience</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black font-heading text-white tracking-tight">
              "A Trip with 15 Strangers"
            </h3>
            <p className="mt-3 text-slate-300 text-xs sm:text-base leading-relaxed">
              How does a bus full of strangers turn into lifelong friends? At R Journey, it’s not an accident — it’s our craft. We design every hour of our signature journeys around connection, comfort, and spontaneous joy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mt-8 sm:mt-10 relative z-10">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#1ca8cb]/20 text-[#1ca8cb] flex items-center justify-center font-bold text-lg mb-3">
                01
              </div>
              <h4 className="text-base font-bold text-white mb-2">Ice-Breakers & Vibes</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                From the moment you step onto the AC coach, our trip captains initiate interactive games and shared playlists. By sunset, awkward silences have turned into inside jokes.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#1ca8cb]/20 text-[#1ca8cb] flex items-center justify-center font-bold text-lg mb-3">
                02
              </div>
              <h4 className="text-base font-bold text-white mb-2">Shared Adventures</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Whether splashing in the dual swimming pools of Palm Valley Resort, riding camels across the Thar Desert dunes, or hiking Bahubali Hills, shared thrill binds people together.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#1ca8cb]/20 text-[#1ca8cb] flex items-center justify-center font-bold text-lg mb-3">
                03
              </div>
              <h4 className="text-base font-bold text-white mb-2">Friends For Life</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Campfire acoustic sessions, starlit Rajasthani dinners, and rooftop laughs create an unbreakable bond. Travelers return with 14 new best friends and memories that never fade.
              </p>
            </div>
          </div>
        </div>

        {/* 4. The 4 Pillars of R Journey */}
        <div className="mt-16 sm:mt-24">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs uppercase tracking-widest text-[#113d48] font-bold">
              Our Core Pillars
            </span>
            <h3 className="text-xl sm:text-3xl font-black font-heading text-slate-900 mt-2">
              Why Travelers Choose R Journey
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Every detail is engineered so you can experience Rajasthan with complete peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {companyData.pillars.map((pillar, i) => {
              const num = String(i + 1).padStart(2, '0');
              return (
                <div
                  key={i}
                  className="relative p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#1ca8cb] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_-12px_rgba(28,168,203,0.22)] group flex flex-col justify-between h-full overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-[#1ca8cb] before:via-[#189bbd] before:to-[#113d48] before:scale-x-0 group-hover:before:scale-x-100 before:transition-transform before:duration-500 before:origin-left"
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1ca8cb]/10 to-[#113d48]/10 border border-[#1ca8cb]/30 text-[#113d48] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 group-hover:from-[#1ca8cb] group-hover:to-[#113d48] group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                        {i === 0 && <Users className="w-5 h-5" />}
                        {i === 1 && <Hotel className="w-5 h-5" />}
                        {i === 2 && <Compass className="w-5 h-5" />}
                        {i === 3 && <ShieldCheck className="w-5 h-5" />}
                      </div>
                      <span className="text-2xl font-black font-heading text-slate-200 group-hover:text-[#1ca8cb]/30 transition-all duration-300 select-none">
                        {num}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold font-heading text-slate-900 group-hover:text-[#113d48] transition-colors duration-300">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-2 sm:mt-2.5 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400 group-hover:text-[#113d48] transition-colors duration-300 relative z-10">
                    <span className="text-[10px] uppercase tracking-wider">R Journey Standard</span>
                    <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-[#1ca8cb] group-hover:scale-125 transition-all duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. How It Works (4 Steps) */}
        <div className="mt-16 sm:mt-24 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs uppercase tracking-widest text-[#1ca8cb] font-bold">
              Easy & Transparent Process
            </span>
            <h3 className="text-xl sm:text-3xl font-black font-heading text-slate-900 mt-1">
              How Traveling With R Journey Works
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-[#1ca8cb]/15 text-[#113d48] font-bold flex items-center justify-center text-base mb-3 shadow-inner">
                1
              </div>
              <h5 className="font-bold text-sm text-slate-900">Choose Your Tour</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Pick from our 2D/1N weekend escapes or 3D/2N signature circuits across Udaipur, Jodhpur, and Jaisalmer.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-[#1ca8cb]/15 text-[#113d48] font-bold flex items-center justify-center text-base mb-3 shadow-inner">
                2
              </div>
              <h5 className="font-bold text-sm text-slate-900">Deposit ₹3,500 Advance</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Lock your guaranteed seat with an easy ₹3,500 deposit adjusted against the final package price.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-[#1ca8cb]/15 text-[#113d48] font-bold flex items-center justify-center text-base mb-3 shadow-inner">
                3
              </div>
              <h5 className="font-bold text-sm text-slate-900">Meet 15 Strangers</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Board your comfortable AC coach, meet your tour captain, and jump straight into ice-breakers.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-[#1ca8cb]/15 text-[#113d48] font-bold flex items-center justify-center text-base mb-3 shadow-inner">
                4
              </div>
              <h5 className="font-bold text-sm text-slate-900">Return With Friends</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Experience pool parties, desert dunes, and royal citadels, returning home with memories for life.
              </p>
            </div>
          </div>
        </div>

        {/* 6. Official Head Office & Direct Contact Card */}
        <div className="mt-14 sm:mt-20 p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#1ca8cb]/10 via-white to-[#113d48]/10 border border-[#1ca8cb]/30 shadow-xl transition-all duration-300 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#113d48] text-white flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-6 h-6 text-[#1ca8cb]" />
                </div>
                <div>
                  <span className="text-xs text-[#113d48] font-bold uppercase tracking-wider block">
                    Official Head Office
                  </span>
                  <h4 className="text-lg sm:text-xl font-black text-slate-900 font-heading">
                    {companyData.address.full}
                  </h4>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                R Journey Tour & Travel operates out of Udaipur, Rajasthan. For batch reservations, custom bookings, corporate offsites, or assistance, reach out directly to our team:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <a
                  href={`tel:${companyData.phones[0]}`}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#1ca8cb] transition-colors text-slate-800"
                >
                  <Phone className="w-4 h-4 text-[#1ca8cb] shrink-0" />
                  <span className="font-bold">{companyData.phones[0]}</span>
                </a>
                <a
                  href={`mailto:${companyData.email}`}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#1ca8cb] transition-colors text-slate-800"
                >
                  <Mail className="w-4 h-4 text-[#1ca8cb] shrink-0" />
                  <span className="font-bold truncate">{companyData.email}</span>
                </a>
                <a
                  href={companyData.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#1ca8cb] transition-colors text-slate-800"
                >
                  <InstagramIcon className="w-4 h-4 text-[#1ca8cb] shrink-0" />
                  <span className="font-bold">{companyData.instagram}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <button
                onClick={() => onOpenInquiry()}
                className="w-full min-h-[48px] px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#1ca8cb] to-[#113d48] hover:opacity-95 shadow-lg shadow-[#1ca8cb]/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Connect With R Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('declaration')}
                className="w-full min-h-[44px] px-6 py-3 rounded-xl font-bold text-xs text-[#113d48] bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#1ca8cb]" />
                <span>Brochures & Declaration</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
