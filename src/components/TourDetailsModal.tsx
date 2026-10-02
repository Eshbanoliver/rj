import React, { useState } from 'react';
import { TourPackage } from '../data/tours';
import { companyData } from '../data/company';
import {
  X,
  Clock,
  MapPin,
  Check,
  MessageSquare,
  Phone,
  Calendar,
  Sparkles,
} from 'lucide-react';

interface TourDetailsModalProps {
  tour: TourPackage | null;
  onClose: () => void;
  onOpenTerms: () => void;
}

export const TourDetailsModal: React.FC<TourDetailsModalProps> = ({
  tour,
  onClose,
  onOpenTerms: _onOpenTerms,
}) => {
  const [sharingType, setSharingType] = useState<'triple' | 'double'>('triple');
  const [passengerCount, setPassengerCount] = useState<number>(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  if (!tour) return null;

  const currentPrice =
    sharingType === 'triple' ? tour.tripleSharingPrice : tour.doubleSharingPrice;
  const estimatedTotal = currentPrice * passengerCount;

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello R Journey! I want to book:
*${tour.title}*
- Duration: ${tour.duration} (Ex-${tour.departureCity})
- Sharing: ${sharingType.toUpperCase()} Sharing (₹${currentPrice}* / person)
- Travelers: ${passengerCount}
- Name: ${name || 'Traveler'}
- Phone: ${phone || 'N/A'}`;
    window.open(`https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-fadeIn">
      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-auto text-slate-900 flex flex-col max-h-[92vh] animate-fadeInUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-30 min-w-[38px] min-h-[38px] p-2 rounded-full bg-slate-900/80 hover:bg-slate-950 text-white transition-all shadow-md border border-slate-700/80 flex items-center justify-center cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Compact Hero Banner */}
        <div className="relative h-40 sm:h-48 w-full overflow-hidden shrink-0">
          <img
            src={tour.heroImage}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

          <div className="absolute bottom-3.5 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6">
            <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#1ca8cb] text-slate-950">
                {tour.badge || 'Curated Tour'}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-900/80 text-white flex items-center gap-1 border border-slate-700">
                <Clock className="w-3 h-3 text-[#1ca8cb]" />
                {tour.duration}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-900/80 text-white flex items-center gap-1 border border-slate-700">
                <MapPin className="w-3 h-3 text-[#1ca8cb]" />
                Ex-{tour.departureCity}
              </span>
            </div>

            <h2 className="text-lg sm:text-2xl font-black font-heading text-white leading-tight">
              {tour.title}
            </h2>
            <p className="text-[11px] sm:text-xs text-cyan-200 mt-0.5 line-clamp-1">
              {tour.tagline}
            </p>
          </div>
        </div>

        {/* Scrollable Content: Itinerary (Short & Sweet) */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-5 flex-1">
          {/* Section Title */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h3 className="text-sm sm:text-base font-bold font-heading text-[#113d48] flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#1ca8cb]" />
              Day-by-Day Itinerary
            </h3>
            <span className="text-xs font-black text-[#1ca8cb]">
              ₹{currentPrice.toLocaleString('en-IN')}* / person
            </span>
          </div>

          {/* Timeline Itinerary Items */}
          <div className="space-y-3.5">
            {tour.itinerary.map((day) => (
              <div
                key={day.day}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 sm:p-4 hover:border-[#1ca8cb]/50 transition-colors"
              >
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-[#113d48] text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs">
                      D{day.day}
                    </span>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                      {day.title}
                    </h4>
                  </div>
                  {day.timing && (
                    <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium shrink-0">
                      {day.timing}
                    </span>
                  )}
                </div>

                {/* Short Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-2 pl-9">
                  {day.description}
                </p>

                {/* Highlights Chips */}
                {day.highlights && day.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pl-9 mb-1.5">
                    {day.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-[11px] bg-white px-2 py-0.5 rounded-md border border-slate-200 text-slate-700 font-medium"
                      >
                        <Check className="w-3 h-3 text-[#1ca8cb] shrink-0" />
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>
                )}

                {/* Meals */}
                {day.mealsIncluded && (
                  <div className="pl-9 pt-1 text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                    <span>🍴 Included Meals:</span>
                    <span>{day.mealsIncluded}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Booking Box */}
          <form
            onSubmit={handleWhatsAppBooking}
            className="bg-[#f0f9fb] border border-[#1ca8cb]/30 rounded-2xl p-4 sm:p-5 space-y-3.5"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#113d48] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#1ca8cb]" />
                Book Your Seat
              </span>
              <div className="text-right">
                <span className="text-[11px] text-slate-500 block">Total Estimated</span>
                <span className="text-base sm:text-lg font-black text-[#113d48]">
                  ₹{estimatedTotal.toLocaleString('en-IN')}*
                </span>
              </div>
            </div>

            {/* Sharing Preference & Travelers Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                  Occupancy:
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    type="button"
                    onClick={() => setSharingType('triple')}
                    className={`py-1.5 px-2 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                      sharingType === 'triple'
                        ? 'bg-[#113d48] text-white border-[#113d48]'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Triple (₹{tour.tripleSharingPrice}*)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSharingType('double')}
                    className={`py-1.5 px-2 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                      sharingType === 'double'
                        ? 'bg-[#113d48] text-white border-[#113d48]'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Double (₹{tour.doubleSharingPrice}*)
                  </button>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                  Travelers:
                </label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setPassengerCount(num)}
                      className={`flex-1 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        passengerCount === num
                          ? 'bg-[#113d48] text-white border-[#113d48]'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Name & Phone Input */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name (Optional)"
                className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1ca8cb]"
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="WhatsApp Number (Optional)"
                className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1ca8cb]"
              />
            </div>

            {/* Actions: Book on WhatsApp & Direct Call */}
            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <button
                type="submit"
                className="flex-1 btn-shimmer min-h-[42px] py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 shadow-md shadow-emerald-600/20 active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Booking</span>
              </button>

              <a
                href={`tel:${companyData.phones[0]}`}
                className="min-h-[42px] py-2.5 px-4 rounded-xl font-bold text-xs text-[#113d48] bg-white border border-slate-200 hover:bg-slate-100 transition-all flex items-center justify-center gap-1.5 shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-[#1ca8cb]" />
                <span>Call Us</span>
              </a>
            </div>

            <p className="text-[10px] text-slate-400 text-center italic">
              *All packages are Ex-{tour.departureCity}. Rates per person on triple-sharing basis.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
