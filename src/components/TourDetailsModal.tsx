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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden my-6 text-white flex flex-col max-h-[92vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/80 hover:bg-amber-500 hover:text-slate-950 text-white transition-all shadow-lg border border-slate-700"
          aria-label="Close Tour Details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1">
          {/* Hero Banner */}
          <div className="relative h-72 sm:h-96 w-full overflow-hidden">
            <img
              src={tour.heroImage}
              alt={tour.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-black/30" />

            <div className="absolute bottom-6 left-6 right-6 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 text-slate-950">
                  {tour.badge || 'Curated Group Trip'}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 backdrop-blur-md border border-slate-700 text-white flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  {tour.duration}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 backdrop-blur-md border border-slate-700 text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  Departure from {tour.departureCity}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-white leading-tight">
                {tour.title}
              </h2>
              <p className="text-sm sm:text-base text-amber-300 font-medium italic mt-1">
                "{tour.tagline}"
              </p>
            </div>
          </div>

          {/* Quick Info Bar */}
          <div className="bg-slate-950 px-6 py-4 border-y border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-xs sm:text-sm">
              <div>
                <span className="text-slate-400 text-xs block">Departure</span>
                <span className="font-semibold text-white">
                  {tour.departureSchedule}
                </span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-slate-800" />
              <div>
                <span className="text-slate-400 text-xs block">Group Style</span>
                <span className="font-semibold text-amber-400">
                  15 Strangers / Group
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-[11px] text-slate-400 block uppercase tracking-wider">
                  Starting Price
                </span>
                <span className="text-2xl font-black font-heading text-amber-400">
                  ₹{tour.startingPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-slate-400">/person</span>
              </div>
            </div>
          </div>

          {/* Main Grid: Content (Left) + Booking / Inquiry (Right) */}
          <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Content Column (8 cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Overview & Story */}
              <div>
                <h3 className="text-lg font-bold font-heading text-white mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Experience Overview
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {tour.overview}
                </p>
                {tour.experienceStory && (
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed bg-slate-950/60 p-4 rounded-2xl border border-slate-800 italic">
                    "{tour.experienceStory}"
                  </p>
                )}
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-slate-800 space-x-4">
                <button
                  onClick={() => setActiveTab('itinerary')}
                  className={`pb-3 text-sm font-bold tracking-wide transition-all border-b-2 ${
                    activeTab === 'itinerary'
                      ? 'border-amber-400 text-amber-400'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  Day-by-Day Itinerary
                </button>
                <button
                  onClick={() => setActiveTab('inclusions')}
                  className={`pb-3 text-sm font-bold tracking-wide transition-all border-b-2 ${
                    activeTab === 'inclusions'
                      ? 'border-amber-400 text-amber-400'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  Inclusions & Exclusions
                </button>
                <button
                  onClick={() => setActiveTab('stays')}
                  className={`pb-3 text-sm font-bold tracking-wide transition-all border-b-2 ${
                    activeTab === 'stays'
                      ? 'border-amber-400 text-amber-400'
                      : 'border-transparent text-slate-400 hover:text-white'
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
                      className="bg-slate-950 border border-slate-800 rounded-2xl p-5 relative overflow-hidden"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-950 font-black text-sm flex items-center justify-center font-heading">
                            D{day.day}
                          </span>
                          <div>
                            <h4 className="text-base font-bold text-white">
                              {day.title}
                            </h4>
                            <span className="text-xs text-amber-400 font-medium">
                              {day.location}
                            </span>
                          </div>
                        </div>

                        {day.timing && (
                          <span className="text-xs bg-slate-900 border border-slate-800 text-slate-400 px-2.5 py-1 rounded-lg hidden sm:inline">
                            {day.timing}
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {day.description}
                      </p>

                      {/* Highlights */}
                      <div className="bg-slate-900/60 rounded-xl p-3.5 border border-slate-800/80 mb-3">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-2">
                          Key Day Highlights:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {day.highlights.map((h, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-1.5 text-xs text-slate-300"
                            >
                              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Meals & Sightseeing notes */}
                      <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-900">
                        {day.mealsIncluded && (
                          <span className="text-emerald-400 font-medium">
                            🍴 Meals: {day.mealsIncluded}
                          </span>
                        )}
                        {day.sightseeingNote && (
                          <span className="text-slate-400 italic">
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
                  <div className="bg-slate-950 border border-emerald-900/40 rounded-2xl p-5">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold font-heading mb-4 text-sm uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>What is Included</span>
                    </div>
                    <ul className="space-y-2.5">
                      {tour.inclusions.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-300"
                        >
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Excluded */}
                  <div className="bg-slate-950 border border-rose-900/40 rounded-2xl p-5">
                    <div className="flex items-center gap-2 text-rose-400 font-bold font-heading mb-4 text-sm uppercase tracking-wider">
                      <Ban className="w-4 h-4" />
                      <span>Not Included</span>
                    </div>
                    <ul className="space-y-2.5">
                      {tour.exclusions.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-300"
                        >
                          <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
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
                      className="bg-slate-950 border border-slate-800 rounded-2xl p-5"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                          <Hotel className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white">
                            {stay.hotelName}
                          </h4>
                          <span className="text-xs text-amber-400">
                            {stay.type} • {stay.location}
                          </span>
                        </div>
                      </div>

                      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {stay.highlights.map((h, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800"
                          >
                            <Check className="w-3.5 h-3.5 text-amber-400" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Upcoming Verified Batch Dates */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  Upcoming Batch Departure Dates
                </h4>
                <div className="space-y-3">
                  {tour.batchSchedule.map((batch, idx) => (
                    <div key={idx}>
                      <span className="text-xs font-semibold text-slate-400 block mb-1.5">
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
                                ? 'bg-amber-400 text-slate-950 font-bold scale-105'
                                : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
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
              <div className="sticky top-6 bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                  <div>
                    <span className="text-[11px] text-amber-400 font-bold uppercase tracking-wider block">
                      Guaranteed Booking
                    </span>
                    <h3 className="text-xl font-black font-heading text-white">
                      Plan This Trip
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block uppercase">
                      Starting At
                    </span>
                    <span className="text-xl font-black text-amber-400 font-heading">
                      ₹{currentPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-white font-heading">
                      Enquiry Received!
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Thank you, <strong className="text-white">{formData.name}</strong>. Our trip captain will call you shortly at <strong className="text-white">{formData.phone}</strong> to confirm your batch seat details.
                    </p>
                    <a
                      href={getWhatsAppBookingUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Chat on WhatsApp Now
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    {/* Sharing Toggle */}
                    <div>
                      <label className="text-xs text-slate-400 font-medium block mb-1.5">
                        Choose Sharing Preference:
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setSharingType('triple')}
                          className={`py-2 px-3 rounded-xl text-xs font-bold transition-all text-center border ${
                            sharingType === 'triple'
                              ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
                              : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          Triple Sharing
                          <span className="block text-[10px] font-normal">
                            ₹{tour.tripleSharingPrice.toLocaleString('en-IN')}/person
                          </span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setSharingType('double')}
                          className={`py-2 px-3 rounded-xl text-xs font-bold transition-all text-center border ${
                            sharingType === 'double'
                              ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
                              : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          Double Sharing
                          <span className="block text-[10px] font-normal">
                            ₹{tour.doubleSharingPrice.toLocaleString('en-IN')}/person
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Passenger Count */}
                    <div>
                      <div className="flex justify-between items-center text-xs text-slate-400 mb-1.5">
                        <span className="font-medium">Number of Travelers:</span>
                        <span className="text-amber-400 font-bold">
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
                                ? 'bg-amber-400 text-slate-950 border-amber-400'
                                : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                            }`}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Price Calculation Summary */}
                    <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-800 space-y-2 text-xs">
                      <div className="flex justify-between text-slate-300">
                        <span>Total Trip Cost:</span>
                        <span className="font-bold text-white">
                          ₹{estimatedTotal.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <div className="flex justify-between text-emerald-400 font-semibold border-t border-slate-800 pt-2">
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
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
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
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email Address (Optional)"
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                        />
                      </div>
                      <div>
                        <textarea
                          rows={2}
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Any preferences or questions?"
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                        />
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-2 pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/25 active:scale-95 transition-all flex items-center justify-center gap-2"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Booking Enquiry</span>
                      </button>

                      <a
                        href={getWhatsAppBookingUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-emerald-600/90 hover:bg-emerald-600 border border-emerald-500/40 transition-colors flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Book Instant via WhatsApp</span>
                      </a>
                    </div>

                    {/* Direct Call / T&C */}
                    <div className="text-center pt-2 text-[11px] text-slate-400 space-y-1">
                      <p>
                        Need assistance? Call{' '}
                        <a
                          href={`tel:${companyData.phones[0]}`}
                          className="text-amber-400 font-bold hover:underline"
                        >
                          {companyData.displayPhone}
                        </a>
                      </p>
                      <button
                        type="button"
                        onClick={onOpenTerms}
                        className="text-slate-400 hover:text-slate-200 underline text-[10px]"
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
