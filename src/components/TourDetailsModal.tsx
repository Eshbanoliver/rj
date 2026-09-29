import React, { useState } from 'react';
import { TourPackage } from '../data/tours';
import { companyData } from '../data/company';
import {
  X,
  Clock,
  MapPin,
  Calendar,
  Check,
  Ban,
  Hotel,
  Users,
  ShieldCheck,
  Send,
  MessageSquare,
  Sparkles,
  Phone,
  CheckCircle2
} from 'lucide-react';

interface TourDetailsModalProps {
  tour: TourPackage | null;
  onClose: () => void;
  onOpenTerms: () => void;
}

export const TourDetailsModal: React.FC<TourDetailsModalProps> = ({
  tour,
  onClose,
  onOpenTerms,
}) => {
  const [sharingType, setSharingType] = useState<'triple' | 'double'>('triple');
  const [passengerCount, setPassengerCount] = useState<number>(1);
  const [selectedBatchDate, setSelectedBatchDate] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusions' | 'stays'>('itinerary');

  if (!tour) return null;

  const currentPrice =
    sharingType === 'triple' ? tour.tripleSharingPrice : tour.doubleSharingPrice;
  const estimatedTotal = currentPrice * passengerCount;
  const advanceTotal = tour.registrationAmount * passengerCount;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
    window.open(getWhatsAppBookingUrl(), '_blank');
  };

  const getWhatsAppBookingUrl = () => {
    const text = `Hello R Journey! I want to book the tour:
*${tour.title}*
- Sharing: ${sharingType.toUpperCase()} Sharing (₹${currentPrice}/person)
- Travelers: ${passengerCount}
- Preferred Batch: ${selectedBatchDate || 'Next Available Batch'}
- Name: ${formData.name || 'Traveler'}
- Phone: ${formData.phone || 'N/A'}`;
    return `https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-3 sm:my-6 text-slate-900 flex flex-col max-h-[94vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 p-2 sm:p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-950 text-white transition-all shadow-lg border border-slate-700 cursor-pointer"
          aria-label="Close Tour Details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1">
          {/* Hero Banner */}
          <div className="relative h-56 sm:h-80 md:h-96 w-full overflow-hidden">
            <img
              src={tour.heroImage}
              alt={tour.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 max-w-3xl">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2">
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-[#1ca8cb] text-slate-950">
                  {tour.badge || 'Curated Group Trip'}
                </span>
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-slate-900/80 backdrop-blur-md border border-slate-700 text-white flex items-center gap-1">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#1ca8cb]" />
                  {tour.duration}
                </span>
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-slate-900/80 backdrop-blur-md border border-slate-700 text-white flex items-center gap-1">
                  <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#1ca8cb]" />
                  Ex-{tour.departureCity}
                </span>
              </div>

              <h2 className="text-xl sm:text-3xl md:text-4xl font-black font-heading text-white leading-tight">
                {tour.title}
              </h2>
              <p className="text-xs sm:text-base text-[#1ca8cb] font-medium italic mt-1 line-clamp-1 sm:line-clamp-none">
                "{tour.tagline}"
              </p>
            </div>
          </div>

          {/* Quick Info Bar */}
          <div className="bg-slate-50 px-6 py-4 border-y border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-xs sm:text-sm">
              <div>
                <span className="text-slate-500 text-xs block">Departure</span>
                <span className="font-semibold text-slate-900">
                  {tour.departureSchedule}
                </span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-slate-200" />
              <div>
                <span className="text-slate-500 text-xs block">Group Style</span>
                <span className="font-semibold text-[#113d48]">
                  15 Strangers / Group
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-[11px] text-slate-500 block uppercase tracking-wider">
                  Starting Price
                </span>
                <span className="text-2xl font-black font-heading text-[#113d48]">
                  ₹{tour.startingPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-slate-500">/person</span>
              </div>
            </div>
          </div>

          {/* Main Grid: Content (Left) + Booking / Inquiry (Right) */}
          <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Overview & Story */}
              <div>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#1ca8cb]" />
                  Experience Overview
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {tour.overview}
                </p>
                {tour.experienceStory && (
                  <p className="mt-3 text-sm text-slate-700 leading-relaxed bg-[#1ca8cb]/10 p-4 rounded-2xl border border-[#1ca8cb]/20 italic">
                    "{tour.experienceStory}"
                  </p>
                )}
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-slate-200 gap-2 sm:gap-4 overflow-x-auto no-scrollbar whitespace-nowrap pb-1">
                <button
                  onClick={() => setActiveTab('itinerary')}
                  className={`pb-2.5 sm:pb-3 text-xs sm:text-sm font-bold tracking-wide transition-all border-b-2 shrink-0 cursor-pointer ${
                    activeTab === 'itinerary'
                      ? 'border-[#1ca8cb] text-[#113d48]'
                      : 'border-transparent text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Day-by-Day Itinerary
                </button>
                <button
                  onClick={() => setActiveTab('inclusions')}
                  className={`pb-2.5 sm:pb-3 text-xs sm:text-sm font-bold tracking-wide transition-all border-b-2 shrink-0 cursor-pointer ${
                    activeTab === 'inclusions'
                      ? 'border-[#1ca8cb] text-[#113d48]'
                      : 'border-transparent text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Inclusions & Exclusions
                </button>
                <button
                  onClick={() => setActiveTab('stays')}
                  className={`pb-2.5 sm:pb-3 text-xs sm:text-sm font-bold tracking-wide transition-all border-b-2 shrink-0 cursor-pointer ${
                    activeTab === 'stays'
                      ? 'border-[#1ca8cb] text-[#113d48]'
                      : 'border-transparent text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Accommodations
                </button>
              </div>

              {/* Tab 1: Day-by-day Itinerary */}
              {activeTab === 'itinerary' && (
                <div className="space-y-6">
                  {tour.itinerary.map((day) => (
                    <div
                      key={day.day}
                      className="bg-slate-50 border border-slate-200 rounded-2xl p-5 relative overflow-hidden"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#1ca8cb] to-[#113d48] text-white font-black text-sm flex items-center justify-center font-heading shadow-sm">
                            D{day.day}
                          </span>
                          <div>
                            <h4 className="text-base font-bold text-slate-900">
                              {day.title}
                            </h4>
                            <span className="text-xs text-[#113d48] font-semibold">
                              {day.location}
                            </span>
                          </div>
                        </div>

                        {day.timing && (
                          <span className="text-xs bg-white border border-slate-200 text-slate-600 px-2.5 py-1 rounded-lg hidden sm:inline shadow-xs">
                            {day.timing}
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        {day.description}
                      </p>

                      {/* Highlights */}
                      <div className="bg-white rounded-xl p-3.5 border border-slate-200 mb-3">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#113d48] block mb-2">
                          Key Day Highlights:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {day.highlights.map((h, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-1.5 text-xs text-slate-700"
                            >
                              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Meals & Sightseeing notes */}
                      <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-200">
                        {day.mealsIncluded && (
                          <span className="text-emerald-700 font-medium">
                            🍴 Meals: {day.mealsIncluded}
                          </span>
                        )}
                        {day.sightseeingNote && (
                          <span className="text-slate-500 italic">
                            {day.sightseeingNote}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 2: Inclusions & Exclusions */}
              {activeTab === 'inclusions' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Included */}
                  <div className="bg-emerald-50/40 border border-emerald-200 rounded-2xl p-5">
                    <div className="flex items-center gap-2 text-emerald-700 font-bold font-heading mb-4 text-sm uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>What is Included</span>
                    </div>
                    <ul className="space-y-2.5">
                      {tour.inclusions.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-700"
                        >
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Excluded */}
                  <div className="bg-rose-50/40 border border-rose-200 rounded-2xl p-5">
                    <div className="flex items-center gap-2 text-rose-700 font-bold font-heading mb-4 text-sm uppercase tracking-wider">
                      <Ban className="w-4 h-4" />
                      <span>Not Included</span>
                    </div>
                    <ul className="space-y-2.5">
                      {tour.exclusions.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-700"
                        >
                          <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Tab 3: Stays Details */}
              {activeTab === 'stays' && (
                <div className="space-y-4">
                  {tour.stayDetails.map((stay, index) => (
                    <div
                      key={index}
                      className="bg-slate-50 border border-slate-200 rounded-2xl p-5"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-[#1ca8cb]/10 border border-[#1ca8cb]/20 flex items-center justify-center text-[#113d48]">
                          <Hotel className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-slate-900">
                            {stay.hotelName}
                          </h4>
                          <span className="text-xs text-[#113d48] font-semibold">
                            {stay.type} • {stay.location}
                          </span>
                        </div>
                      </div>

                      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {stay.highlights.map((h, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs text-slate-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200"
                          >
                            <Check className="w-3.5 h-3.5 text-[#1ca8cb]" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Upcoming Verified Batch Dates */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <h4 className="text-sm font-bold font-heading text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#1ca8cb]" />
                  Upcoming Batch Departure Dates
                </h4>
                <div className="space-y-3">
                  {tour.batchSchedule.map((batch, idx) => (
                    <div key={idx}>
                      <span className="text-xs font-semibold text-slate-500 block mb-1.5">
                        {batch.month}:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {batch.dates.map((date, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setSelectedBatchDate(date)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                              selectedBatchDate === date
                                ? 'bg-[#1ca8cb] text-slate-950 font-bold scale-105 shadow-sm'
                                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                            }`}
                          >
                            {date}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Booking Column (5 cols) */}
            <div className="lg:col-span-5">
              <div className="sticky top-6 bg-slate-50 border border-slate-200/90 rounded-3xl p-6 shadow-xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
                  <div>
                    <span className="text-[11px] text-[#113d48] font-bold uppercase tracking-wider block">
                      Guaranteed Booking
                    </span>
                    <h3 className="text-xl font-black font-heading text-slate-900">
                      Plan This Trip
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 block uppercase">
                      Starting At
                    </span>
                    <span className="text-xl font-black text-[#113d48] font-heading">
                      ₹{currentPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 font-heading">
                      Enquiry Received!
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our trip captain will call you shortly at <strong className="text-slate-900">{formData.phone}</strong> to confirm your batch seat details.
                    </p>
                    <a
                      href={getWhatsAppBookingUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-emerald-600/20"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Chat on WhatsApp Now
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    {/* Sharing Toggle */}
                    <div>
                      <label className="text-xs text-slate-600 font-medium block mb-1.5">
                        Choose Sharing Preference:
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setSharingType('triple')}
                          className={`py-2 px-3 rounded-xl text-xs font-bold transition-all text-center border ${
                            sharingType === 'triple'
                              ? 'bg-[#113d48] text-white border-[#113d48] shadow-sm'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          Triple Sharing
                          <span className="block text-[10px] font-normal opacity-90">
                            ₹{tour.tripleSharingPrice.toLocaleString('en-IN')}/person
                          </span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setSharingType('double')}
                          className={`py-2 px-3 rounded-xl text-xs font-bold transition-all text-center border ${
                            sharingType === 'double'
                              ? 'bg-[#113d48] text-white border-[#113d48] shadow-sm'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          Double Sharing
                          <span className="block text-[10px] font-normal opacity-90">
                            ₹{tour.doubleSharingPrice.toLocaleString('en-IN')}/person
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Passenger Count */}
                    <div>
                      <div className="flex justify-between items-center text-xs text-slate-600 mb-1.5">
                        <span className="font-medium">Number of Travelers:</span>
                        <span className="text-[#113d48] font-bold">
                          {passengerCount} {passengerCount === 1 ? 'Person' : 'People'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => setPassengerCount(num)}
                            className={`flex-1 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                              passengerCount === num
                                ? 'bg-[#113d48] text-white border-[#113d48] shadow-xs'
                                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Price Calculation Summary */}
                    <div className="bg-white rounded-2xl p-4 border border-slate-200 space-y-2 text-xs shadow-xs">
                      <div className="flex justify-between text-slate-600">
                        <span>Total Trip Cost:</span>
                        <span className="font-bold text-slate-900">
                          ₹{estimatedTotal.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <div className="flex justify-between text-emerald-600 font-semibold border-t border-slate-100 pt-2">
                        <span>Advance Seat Deposit:</span>
                        <span>₹{advanceTotal.toLocaleString('en-IN')}</span>
                      </div>
                      <p className="text-[10px] text-slate-400 italic">
                        *₹3,500/person is non-refundable and adjusted in the total cost on Day 1 boarding.
                      </p>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-3">
                      <div>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Full Name *"
                          className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1ca8cb] focus:ring-1 focus:ring-[#1ca8cb] transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="WhatsApp Phone Number *"
                          className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1ca8cb] focus:ring-1 focus:ring-[#1ca8cb] transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email Address (Optional)"
                          className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1ca8cb] focus:ring-1 focus:ring-[#1ca8cb] transition-colors"
                        />
                      </div>
                      <div>
                        <textarea
                          rows={2}
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Any preferences or questions?"
                          className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1ca8cb] focus:ring-1 focus:ring-[#1ca8cb] transition-colors resize-none"
                        />
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-2.5 pt-2">
                      <button
                        type="submit"
                        className="w-full min-h-[44px] py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 shadow-md shadow-emerald-600/25 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Send Booking Enquiry on WhatsApp</span>
                      </button>
                    </div>

                    {/* Direct Call / T&C */}
                    <div className="text-center pt-2 text-[11px] text-slate-500 space-y-1">
                      <p>
                        Need assistance? Call{' '}
                        <a
                          href={`tel:${companyData.phones[0]}`}
                          className="text-[#113d48] font-bold hover:underline"
                        >
                          {companyData.displayPhone}
                        </a>
                      </p>
                      <button
                        type="button"
                        onClick={onOpenTerms}
                        className="text-slate-500 hover:text-slate-800 underline text-[10px]"
                      >
                        Read Official Terms & Cancellation Policy
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
