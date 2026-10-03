import React, { useState, useMemo } from 'react';
import { PageType } from '../types';
import {
  termsAndConditionsData,
  declarationText,
  cancellationPolicyData,
  brochuresListData,
} from '../data/terms';
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
  FileDown,
  Download,
  MapPin,
  Clock,
  ExternalLink,
} from 'lucide-react';

interface DeclarationPageProps {
  onNavigate: (page: PageType) => void;
  onOpenInquiry: (initialData?: { tourTitle?: string; message?: string }) => void;
}

export const DeclarationPage: React.FC<DeclarationPageProps> = ({
  onNavigate,
  onOpenInquiry,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'declaration' | 'terms' | 'booking' | 'brochures'>('all');
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

  // Filtered brochures based on search query
  const filteredBrochures = useMemo(() => {
    if (!searchQuery.trim()) return brochuresListData;
    const q = searchQuery.toLowerCase();
    return brochuresListData.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.origin.toLowerCase().includes(q) ||
        b.destinations.toLowerCase().includes(q) ||
        b.fileName.toLowerCase().includes(q)
    );
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
            Essential guidelines, safety declarations, cancellation policy slabs, and official PDF brochure downloads for all R Journey tours.
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
            <span className="flex items-center gap-1.5">
              <FileDown className="w-4 h-4 text-[#1ca8cb]" />
              7 Official PDF Brochures
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
              onClick={() => setActiveTab('brochures')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'brochures'
                  ? 'bg-[#1ca8cb] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Official Brochures (7 PDFs)</span>
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
              <span>Declaration (7 Clauses)</span>
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
              Cancellation & Deposit Slabs
            </button>
          </div>

          {/* Search Input & Print CTA */}
          <div className="flex items-center gap-2.5">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search policy, refund, brochure..."
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
              By registering for an R Journey tour, submitting the advance booking deposit (₹3,150–₹3,500), or joining any "Trip with 15 Strangers", you agree to be bound by the full Declaration and Terms of Service detailed below. All guidelines align with our official PDF brochures.
            </p>
          </div>
        </div>

        {/* SECTION: OFFICIAL BROCHURE DOWNLOADS CENTER */}
        {(activeTab === 'all' || activeTab === 'brochures') && (
          <div className="mb-14 sm:mb-20">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#1ca8cb] font-bold">
                  Official Document Center
                </span>
                <h2 className="text-xl sm:text-3xl font-black font-heading text-slate-900 mt-1 flex items-center gap-2">
                  <FileDown className="w-6 h-6 text-[#1ca8cb]" />
                  <span>Download Official Tour PDF Brochures</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Access the original full-color brochures, detailed day-wise schedules, hotel amenities, and pricing sheets.
                </p>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-bold text-[#113d48] bg-[#1ca8cb]/15 border border-[#1ca8cb]/30">
                {filteredBrochures.length} PDF Documents
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredBrochures.map((brochure) => (
                <div
                  key={brochure.id}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#1ca8cb] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#113d48] bg-[#1ca8cb]/15 border border-[#1ca8cb]/30">
                        Ex-{brochure.origin}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                        PDF • {brochure.sizeMb}
                      </span>
                    </div>

                    <h3 className="text-base font-bold font-heading text-slate-900 group-hover:text-[#113d48] transition-colors mb-1.5 line-clamp-2">
                      {brochure.title}
                    </h3>

                    <div className="space-y-1 text-xs text-slate-600 mb-4">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#1ca8cb] shrink-0" />
                        <span className="truncate">{brochure.destinations}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#1ca8cb] shrink-0" />
                        <span>{brochure.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-semibold">Starts At</span>
                      <span className="text-sm font-black text-[#113d48] font-heading">{brochure.priceStarting}</span>
                    </div>

                    <a
                      href={brochure.fileUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#1ca8cb] to-[#113d48] hover:opacity-95 shadow-xs flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95 transition-all"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </div>
              ))}

              {filteredBrochures.length === 0 && (
                <div className="col-span-full p-8 text-center text-slate-500 bg-white rounded-2xl border border-dashed border-slate-200">
                  No brochures matching "{searchQuery}".
                </div>
              )}
            </div>
          </div>
        )}

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
                  <span>Terms of Service (All 19 Clauses from Brochures)</span>
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
                      <span>R Journey Official Brochure Clause</span>
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

        {/* SECTION 3: OFFICIAL CANCELLATION & REFUND POLICY SLABS */}
        {(activeTab === 'all' || activeTab === 'booking') && (
          <div className="mb-14 sm:mb-20 space-y-6">
            <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#113d48] via-[#144754] to-[#0e333d] text-white shadow-xl">
              <div className="max-w-3xl mb-8">
                <span className="text-xs uppercase tracking-widest text-[#1ca8cb] font-bold">
                  Part 3 • Official Cancellation Policy
                </span>
                <h2 className="text-2xl sm:text-3xl font-black font-heading mt-1">
                  Cancellation Slabs & Refund Schedule
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  Transparent cancellation rules matching Page 14 of the official R Journey brochures: "Travel Easy, Explore More".
                </p>
              </div>

              {/* Slabs Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/20 text-[#1ca8cb] text-xs uppercase tracking-wider font-bold">
                      <th className="py-3 px-4">Cancellation Notice Timeline</th>
                      <th className="py-3 px-4">Eligible Refund</th>
                      <th className="py-3 px-4">Policy Terms</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-slate-200">
                    {cancellationPolicyData.map((slab, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-white">{slab.timeline}</td>
                        <td className="py-3.5 px-4">
                          <span className={`inline-block font-black px-2.5 py-1 rounded-md text-xs ${
                            slab.refundPercentage.includes('100%')
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                              : slab.refundPercentage.includes('50%')
                              ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                              : slab.refundPercentage.includes('25%')
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                              : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                          }`}>
                            {slab.refundPercentage}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-xs text-slate-300">{slab.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Advance and sharing notes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 pt-8 border-t border-white/15">
                <div className="p-4 rounded-xl bg-white/10 border border-white/10">
                  <span className="text-xs font-bold text-[#1ca8cb] uppercase tracking-wider block">
                    Advance Deposit
                  </span>
                  <h4 className="text-xl font-black font-heading mt-1">₹3,150 – ₹3,500</h4>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    Required per person to lock seat. Non-refundable and adjusted in final total package cost.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/10 border border-white/10">
                  <span className="text-xs font-bold text-[#1ca8cb] uppercase tracking-wider block">
                    Remaining Balance
                  </span>
                  <h4 className="text-xl font-black font-heading mt-1">On Day 1 Boarding</h4>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    To be paid on Day 1 at the boarding point, or at least 7 days before festival departures.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/10 border border-white/10">
                  <span className="text-xs font-bold text-[#1ca8cb] uppercase tracking-wider block">
                    Sharing Mattresses Note
                  </span>
                  <h4 className="text-xl font-black font-heading mt-1">Extra Mattresses</h4>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    In Quad/Triple sharing occupancy, rooms/camps are provided with extra mattresses, not individual beds.
                  </p>
                </div>
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
            Please acknowledge that you have reviewed the traveler declaration, official brochures, and 19 terms of service before booking your upcoming Rajasthan journey.
          </p>

          <label className="mt-6 inline-flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors select-none text-left">
            <input
              type="checkbox"
              checked={hasAgreed}
              onChange={(e) => setHasAgreed(e.target.checked)}
              className="w-5 h-5 rounded text-[#1ca8cb] focus:ring-[#1ca8cb] cursor-pointer"
            />
            <span className="text-xs sm:text-sm font-semibold text-slate-800">
              I have read, understood, and solemnly agree to R Journey's Declaration, Official Brochure terms, and Terms of Service.
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
              onClick={() => onOpenInquiry({ tourTitle: 'Brochure & Terms Inquiry' })}
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
              href={`tel:${companyData.phones[0]}`}
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
