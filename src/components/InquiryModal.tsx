import React, { useState, useEffect } from 'react';
import { companyData } from '../data/company';
import { tourPackages } from '../data/tours';
import { X, Send, CheckCircle2, MessageSquare, Phone, Sparkles } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    tourTitle?: string;
    message?: string;
  };
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    tourTitle: '',
    travelDate: '',
    travelers: '1',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialData?.tourTitle) {
      setFormData((prev) => ({
        ...prev,
        tourTitle: initialData.tourTitle || '',
        message: initialData.message || prev.message,
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMsg('Please provide a valid 10-digit phone number');
      return;
    }
    setIsSubmitted(true);
    window.open(getWhatsAppUrl(), '_blank');
  };

  const getWhatsAppUrl = () => {
    const text = `Hi R Journey! I want to plan a trip:
- Name: ${formData.name || 'Traveler'}
- Phone: ${formData.phone || 'N/A'}
- Package/Interest: ${formData.tourTitle || 'General Query'}
- Travelers: ${formData.travelers}
- Preferred Date: ${formData.travelDate || 'Upcoming batch'}
- Message: ${formData.message || 'Please send itinerary details'}`;
    return `https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-5 sm:p-8 shadow-2xl text-slate-900 max-h-[92vh] overflow-y-auto my-auto animate-fadeInUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-2 sm:p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-950 transition-colors z-10 cursor-pointer"
          aria-label="Close Inquiry Dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-slate-900">
              Trip Enquiry Received!
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our trip captain will connect with you at <strong className="text-slate-900">{formData.phone}</strong> shortly with complete batch details.
            </p>
            <div className="pt-4 space-y-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Continue on WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1ca8cb] uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>R Journey Travel Desk</span>
              </div>
              <h3 className="text-2xl font-black font-heading text-[#113d48]">
                Plan Your Journey
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill out the quick form below or connect directly on WhatsApp.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-medium">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-medium text-slate-700 block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1ca8cb] focus:ring-1 focus:ring-[#1ca8cb] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1ca8cb] focus:ring-1 focus:ring-[#1ca8cb] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1ca8cb] focus:ring-1 focus:ring-[#1ca8cb] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1">
                    Select Tour Package
                  </label>
                  <select
                    name="tourTitle"
                    value={formData.tourTitle}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#1ca8cb] transition-colors"
                  >
                    <option value="">Choose a tour...</option>
                    {tourPackages.map((t) => (
                      <option key={t.id} value={t.title}>
                        {t.title.slice(0, 32)}...
                      </option>
                    ))}
                    <option value="Custom Trip">Customised Rajasthan Trip</option>
                    <option value="College Reunion">College / Student Trip</option>
                    <option value="Corporate Offsite">Corporate Retreat</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1">
                    Number of Travelers
                  </label>
                  <select
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#1ca8cb] transition-colors"
                  >
                    <option value="1">1 Solo Traveler</option>
                    <option value="2">2 Travelers (Duo)</option>
                    <option value="3">3 Travelers (Triple Sharing)</option>
                    <option value="4">4-6 Group</option>
                    <option value="7+">7+ Large Group</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-700 block mb-1">
                  Message / Special Request
                </label>
                <textarea
                  rows={2}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Preferred dates, questions about resort or desert camps..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1ca8cb] focus:ring-1 focus:ring-[#1ca8cb] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  className="btn-shimmer w-full min-h-[44px] py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 shadow-md shadow-emerald-600/25 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Enquiry on WhatsApp</span>
                </button>
              </div>

              <div className="text-center pt-2 text-[11px] text-slate-500">
                <span>Or reach us directly at </span>
                <a
                  href={`tel:${companyData.phones[0]}`}
                  className="text-[#113d48] hover:text-[#1ca8cb] font-bold hover:underline transition-colors"
                >
                  {companyData.displayPhone}
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
