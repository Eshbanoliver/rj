import React, { useState, useMemo } from 'react';
import { PageType } from '../types';
import { termsAndConditionsData, declarationText } from '../data/terms';
import { companyData } from '../data/company';
import {
  ShieldCheck,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Printer,
  Search,
  ArrowRight,
  Sparkles,
  Phone,
  MessageCircle,
  HelpCircle,
  Scale,
  Calendar,
  Lock,
} from 'lucide-react';

interface DeclarationPageProps {
  onNavigate: (page: PageType) => void;
  onOpenInquiry: (initialData?: { tourTitle?: string; message?: string }) => void;
}

export const DeclarationPage: React.FC<DeclarationPageProps> = ({
  onNavigate,
  onOpenInquiry,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'declaration' | 'terms' | 'booking'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [hasAgreed, setHasAgreed] = useState(false);

  // Filtered terms based on search query
  const filteredTerms = useMemo(() => {
    if (!searchQuery.trim()) return termsAndConditionsData;
    const q = searchQuery.toLowerCase();
    return termsAndConditionsData.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.id.toString() === q
    );
  }, [searchQuery]);

  // Filtered declarations based on search query
  const filteredDeclarations = useMemo(() => {
    if (!searchQuery.trim()) return declarationText;
    const q = searchQuery.toLowerCase();
    return declarationText.filter((text) => text.toLowerCase().includes(q));
  }, [searchQuery]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-24 pb-20 bg-[#fafbfc] text-slate-900 min-h-screen">
      {/* Page Hero Header */}
      <div className="relative py-12 sm:py-20 bg-[#113d48] border-b border-[#0e333d] text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/jodhpur-mehrangarh-sunset.jpg"
            alt="R Journey Policy & Declaration"
            className="w-full h-full object-cover filter brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#113d48] via-[#113d48]/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold tracking-widest text-[#1ca8cb] uppercase mb-3 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-[#1ca8cb]/30 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Traveler Agreement & Regulations</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight">
            Declaration & <span className="text-[#1ca8cb]">Terms of Service</span>
          </h1>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto px-2 leading-relaxed">
            Essential guidelines, safety declarations, and the full 19 terms of service governing all R Journey tours and social group batches.
          </p>

          {/* Quick Meta Info */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-300 font-medium">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#1ca8cb]" />
              Updated: Current Season 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-[#1ca8cb]" />
              Jurisdiction: Udaipur, Rajasthan
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-[#1ca8cb]" />
              Mandatory For All Batches
            </span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Controls Bar: Search, Tabs, Print Button */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-sm mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Tab Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#113d48] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Sections
            </button>
            <button
              onClick={() => setActiveTab('declaration')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'declaration'
                  ? 'bg-[#1ca8cb] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Traveler Declaration (7 Clauses)</span>
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'terms'
                  ? 'bg-[#1ca8cb] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Terms of Service (19 Clauses)</span>
            </button>
            <button
              onClick={() => setActiveTab('booking')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'booking'
                  ? 'bg-[#1ca8cb] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Deposit & Booking Rules
            </button>
          </div>

          {/* Search Input & Print CTA */}
          <div className="flex items-center gap-2.5">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search policy, refund, ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1ca8cb] bg-slate-50 focus:bg-white"
              />
            </div>

            <button
              onClick={handlePrint}
              title="Print or Save as PDF"
              className="p-2.5 rounded-xl border border-slate-200 hover:border-[#1ca8cb] text-slate-600 hover:text-[#113d48] bg-slate-50 hover:bg-white transition-all cursor-pointer shrink-0"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Section Notice Banner */}
        <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-4">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-900 leading-relaxed space-y-1">
            <p className="font-bold text-amber-950">
              Mandatory Consent Required Prior to Batch Departure
            </p>
            <p className="text-amber-800">
              By registering for an R Journey tour, submitting the advance booking deposit (₹3,500), or joining any "Trip with 15 Strangers", you agree to be bound by the full Declaration and Terms of Service detailed below. Please read each clause carefully.
            </p>
          </div>
        </div>

        {/* SECTION 1: TRAVELER DECLARATION */}
        {(activeTab === 'all' || activeTab === 'declaration') && (
          <div className="mb-14 sm:mb-20">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#1ca8cb] font-bold">
                  Part 1 • Legal Undertaking
                </span>
                <h2 className="text-xl sm:text-3xl font-black font-heading text-slate-900 mt-1 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-[#1ca8cb]" />
                  <span>Traveler Declaration & Assumption of Risk</span>
                </h2>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-bold text-[#113d48] bg-[#1ca8cb]/15 border border-[#1ca8cb]/30">
                {filteredDeclarations.length} Statements
              </span>
            </div>

            <div className="space-y-4">
              {filteredDeclarations.map((clause, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#1ca8cb]/50 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#113d48] text-white flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-[#1ca8cb] transition-colors shadow-xs">
                    0{idx + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      {clause}
                    </p>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1 hidden sm:block opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}

              {filteredDeclarations.length === 0 && (
                <div className="p-8 text-center text-slate-500 bg-white rounded-2xl border border-dashed border-slate-200">
                  No declaration points matching "{searchQuery}".
                </div>
              )}
            </div>
          </div>
        )}

        {/* SECTION 2: COMPLETE TERMS OF SERVICE (19 CLAUSES) */}
        {(activeTab === 'all' || activeTab === 'terms') && (
          <div className="mb-14 sm:mb-20">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#1ca8cb] font-bold">
                  Part 2 • General Terms & Conditions
                </span>
                <h2 className="text-xl sm:text-3xl font-black font-heading text-slate-900 mt-1 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-[#1ca8cb]" />
                  <span>Terms of Service (All 19 Clauses)</span>
                </h2>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-bold text-[#113d48] bg-[#1ca8cb]/15 border border-[#1ca8cb]/30">
                {filteredTerms.length} Clauses Listed
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {filteredTerms.map((item) => {
                const num = String(item.id).padStart(2, '0');
                return (
                  <div
                    key={item.id}
                    className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#1ca8cb]/50 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-[#113d48] font-heading font-black text-xs group-hover:bg-[#1ca8cb] group-hover:text-white transition-colors">
                          Clause {num}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                          Official
                        </span>
                      </div>

                      <h3 className="text-base font-bold font-heading text-slate-900 group-hover:text-[#113d48] transition-colors mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                      <span>R Journey Guidelines</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1ca8cb]" />
                    </div>
                  </div>
                );
              })}

              {filteredTerms.length === 0 && (
                <div className="col-span-full p-8 text-center text-slate-500 bg-white rounded-2xl border border-dashed border-slate-200">
                  No terms of service clauses matching "{searchQuery}".
                </div>
              )}
            </div>
          </div>
        )}

        {/* SECTION 3: BOOKING, PAYMENT & CANCELLATION SUMMARY */}
        {(activeTab === 'all' || activeTab === 'booking') && (
          <div className="mb-14 sm:mb-20 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#113d48] via-[#144754] to-[#0e333d] text-white shadow-xl">
            <div className="max-w-3xl mb-8">
              <span className="text-xs uppercase tracking-widest text-[#1ca8cb] font-bold">
                Part 3 • Financial & Booking Operations
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-heading mt-1">
                Booking Confirmation & Cancellation Policy
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                Standard guidelines governing registration deposits, full payment deadlines, and unused tour features.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="p-5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xs">
                <span className="text-xs font-bold text-[#1ca8cb] uppercase tracking-wider block">
                  Advance Deposit
                </span>
                <h4 className="text-2xl font-black font-heading mt-1">₹3,500</h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Required per person to lock a confirmed seat in your chosen batch. Adjusted directly against the total package cost.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xs">
                <span className="text-xs font-bold text-[#1ca8cb] uppercase tracking-wider block">
                  Balance Clearance
                </span>
                <h4 className="text-2xl font-black font-heading mt-1">Pre-Departure</h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Full pending balance must be cleared prior to boarding. Failure to clear balance forfeits the reservation without refund.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xs">
                <span className="text-xs font-bold text-[#1ca8cb] uppercase tracking-wider block">
                  Unused Sightseeing
                </span>
                <h4 className="text-2xl font-black font-heading mt-1">Non-Refundable</h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  No adjustments or partial refunds will be granted for missed meals, late arrivals, or unavailed resort amenities.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 4: TRAVELER CONSENT CONFIRMATION */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#1ca8cb]/40 shadow-lg text-center max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-[#1ca8cb]/15 text-[#113d48] flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-6 h-6 text-[#1ca8cb]" />
          </div>

          <h3 className="text-xl sm:text-2xl font-black font-heading text-slate-900">
            Traveler Agreement Confirmation
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl mx-auto leading-relaxed">
            Please acknowledge that you have reviewed the traveler declaration and 19 terms of service before booking your upcoming Rajasthan journey.
          </p>

          <label className="mt-6 inline-flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors select-none text-left">
            <input
              type="checkbox"
              checked={hasAgreed}
              onChange={(e) => setHasAgreed(e.target.checked)}
              className="w-5 h-5 rounded text-[#1ca8cb] focus:ring-[#1ca8cb] cursor-pointer"
            />
            <span className="text-xs sm:text-sm font-semibold text-slate-800">
              I have read, understood, and solemnly agree to R Journey's Declaration & Terms of Service.
            </span>
          </label>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('trips')}
              className={`px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md ${
                hasAgreed
                  ? 'bg-gradient-to-r from-[#1ca8cb] to-[#113d48] text-white hover:scale-105 shadow-[#1ca8cb]/25'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              <span>Explore Upcoming Batches</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenInquiry({ tourTitle: 'Terms & Declaration Inquiry' })}
              className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-white border border-slate-200 hover:border-[#1ca8cb] text-slate-800 transition-all cursor-pointer flex items-center gap-2 hover:bg-slate-50"
            >
              <HelpCircle className="w-4 h-4 text-[#1ca8cb]" />
              <span>Ask Captain a Question</span>
            </button>
          </div>
        </div>

        {/* Official Head Office & Legal Jurisdiction Footer Strip */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div>
            <p className="font-bold text-slate-700 font-heading">
              R Journey Tour & Travel • Legal & Operations Office
            </p>
            <p className="mt-0.5">
              {companyData.address.full} • Udaipur, Rajasthan 313001
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
            <a
              href={`tel:${companyData.displayPhone}`}
              className="flex items-center gap-1.5 text-slate-700 hover:text-[#1ca8cb] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#1ca8cb]" />
              <span>{companyData.displayPhone}</span>
            </a>

            <a
              href={`https://wa.me/${companyData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-700 hover:text-emerald-600 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
              <span>WhatsApp Captain</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
