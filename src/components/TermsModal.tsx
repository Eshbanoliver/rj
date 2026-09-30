import React, { useState } from 'react';
import { termsAndConditionsData, declarationText } from '../data/terms';
import { X, ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'terms' | 'declaration'>('terms');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-2.5 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden text-slate-900 flex flex-col max-h-[92vh] my-auto animate-fadeInUp">
        {/* Header */}
        <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#1ca8cb]/10 border border-[#1ca8cb]/25 text-[#113d48] flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#1ca8cb]" />
            </div>
            <div>
              <h3 className="text-base sm:text-xl font-bold font-heading text-slate-900">
                Official Policies & Terms
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500">
                Official R Journey Tour & Travel Brochures
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="min-w-[40px] min-h-[40px] p-2 sm:p-2.5 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 transition-colors shrink-0 flex items-center justify-center cursor-pointer"
            aria-label="Close Terms Window"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="bg-slate-50 px-3 sm:px-6 border-b border-slate-200 flex gap-3 sm:gap-6 overflow-x-auto no-scrollbar whitespace-nowrap">
          <button
            onClick={() => setActiveTab('terms')}
            className={`py-3 text-xs sm:text-sm font-bold border-b-2 shrink-0 cursor-pointer transition-all ${
              activeTab === 'terms'
                ? 'border-[#1ca8cb] text-[#113d48]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Terms & Conditions (19 Clauses)
          </button>
          <button
            onClick={() => setActiveTab('declaration')}
            className={`py-3 text-xs sm:text-sm font-bold border-b-2 shrink-0 cursor-pointer transition-all ${
              activeTab === 'declaration'
                ? 'border-[#1ca8cb] text-[#113d48]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Declaration & Assumption of Risk
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
          {activeTab === 'terms' ? (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#1ca8cb]/10 border border-[#1ca8cb]/30 text-[#113d48] text-xs sm:text-sm flex items-start gap-3 mb-6">
                <ShieldAlert className="w-5 h-5 shrink-0 text-[#1ca8cb] mt-0.5" />
                <span>
                  Please read the following 19 terms carefully before confirming your booking. Booking confirmation requires receipt of the ₹3,500 advance deposit and consent to these terms.
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {termsAndConditionsData.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-6 h-6 rounded-lg bg-[#113d48] text-[#1ca8cb] text-xs font-bold flex items-center justify-center">
                        {item.id}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-8">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-xs sm:text-sm leading-relaxed space-y-3">
                <h4 className="text-base font-bold text-[#113d48] font-heading mb-2">
                  DECLARATION FORM / INDEMNITY & ASSUMPTION OF RISK
                </h4>
                {declarationText.map((paragraph, idx) => (
                  <p key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{paragraph}</span>
                  </p>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
                <div>
                  <span className="block text-slate-500 uppercase text-[10px]">
                    Participant Name
                  </span>
                  <span className="text-slate-900 font-medium">To be filled on registration</span>
                </div>
                <div>
                  <span className="block text-slate-500 uppercase text-[10px]">
                    Mobile Number
                  </span>
                  <span className="text-slate-900 font-medium">Verified WhatsApp Contact</span>
                </div>
                <div>
                  <span className="block text-slate-500 uppercase text-[10px]">
                    Signature / Consent
                  </span>
                  <span className="text-[#113d48] font-medium">Agreed upon booking</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#1ca8cb] to-[#113d48] hover:opacity-95 shadow-md shadow-[#1ca8cb]/20 transition-all min-h-[44px] cursor-pointer text-center"
          >
            I Understand & Agree
          </button>
        </div>
      </div>
    </div>
  );
};
