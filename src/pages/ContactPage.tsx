import { useState } from 'react';
import { companyData } from '../data/company';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { InstagramIcon } from '../components/icons';


export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: 'Udaipur, Haldighati & Kumbhalgarh',
    travelDate: '',
    travelers: '1',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

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
      setErrorMsg('Please enter a valid 10-digit phone number');
      return;
    }
    setIsSubmitted(true);
  };

  const getWhatsAppUrl = () => {
    const text = `Hello R Journey! I have an inquiry:
- Name: ${formData.name || 'Traveler'}
- Mobile: ${formData.phone || 'N/A'}
- Destination: ${formData.destination}
- Travelers: ${formData.travelers}
- Preferred Date: ${formData.travelDate || 'Upcoming batch'}
- Message: ${formData.message || 'Please send complete details'}`;
    return `https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="pt-24 pb-20 bg-slate-950 text-white min-h-screen">
      {/* Page Header */}
      <div className="relative py-20 bg-slate-900 border-b border-slate-800 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/palm-valley-dinner.jpg"
            alt="Contact R Journey"
            className="w-full h-full object-cover filter brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-amber-400 uppercase mb-3 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Travel Support</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight">
            Contact <span className="text-amber-400">Our Team</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Ready to embark on your next Rajasthan journey? Get in touch with our travel desk in Udaipur or message us directly on WhatsApp.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-1">
                Reach Us Anytime
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                We're Here To Help You Plan
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                Whether you have questions regarding batch dates, resort amenities at Palm Valley, or customizing a private group tour, our team is always ready.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Phone & Call Desk
                  </span>
                  <div className="mt-1 space-y-0.5 text-sm font-bold text-white">
                    <div>
                      <a
                        href={`tel:${companyData.phones[0]}`}
                        className="hover:text-amber-400 transition-colors"
                      >
                        {companyData.phones[0]}
                      </a>
                    </div>
                    <div>
                      <a
                        href={`tel:${companyData.phones[1]}`}
                        className="hover:text-amber-400 transition-colors"
                      >
                        {companyData.phones[1]}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Link */}
              <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-900/50 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block">
                    Instant WhatsApp Support
                  </span>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Fast response for seat availability & brochure PDFs.
                  </p>
                  <a
                    href={`https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(
                      'Hello R Journey! I want to check availability for upcoming tour batches.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 mt-2"
                  >
                    <span>Chat +91 80942 68991</span>
                  </a>
                </div>
              </div>

              {/* Office Address */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Registered Office
                  </span>
                  <p className="text-sm font-bold text-white mt-1">
                    {companyData.address.full}
                  </p>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    Rajasthan 313001, India
                  </span>
                </div>
              </div>

              {/* Business Hours & Instagram */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Operating Hours & Social
                  </span>
                  <p className="text-xs font-medium text-slate-300 mt-1">
                    {companyData.businessHours}
                  </p>
                  <a
                    href={companyData.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:underline mt-1 font-semibold"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>{companyData.instagram}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form & Map (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-black font-heading text-white mb-1">
                Send Us An Inquiry
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Tell us your destination, expected date, and traveler count. We'll respond with customized details.
              </p>

              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white font-heading">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                    Your inquiry has been successfully logged. Our travel coordinator will contact you at <strong className="text-amber-400">{formData.phone}</strong> shortly.
                  </p>
                  <div className="pt-4">
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/20"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp Directly</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-medium">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@domain.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1">
                        Interested Destination
                      </label>
                      <select
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        <option value="Ahmedabad to Jodhpur & Jaisalmer">
                          Ahmedabad to Jodhpur & Jaisalmer (15 Strangers)
                        </option>
                        <option value="Udaipur to Jodhpur & Jaisalmer">
                          Udaipur to Jodhpur & Jaisalmer (15 Strangers)
                        </option>
                        <option value="Ahmedabad to Udaipur, Haldighati & Kumbhalgarh">
                          Ahmedabad to Udaipur, Haldighati & Kumbhalgarh
                        </option>
                        <option value="Custom Rajasthan Trip">
                          Custom Rajasthan Itinerary
                        </option>
                        <option value="College Reunion / Student Trip">
                          College / Student Batch Trip
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1">
                        Number of Travelers
                      </label>
                      <select
                        name="travelers"
                        value={formData.travelers}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        <option value="1">1 Solo Traveler</option>
                        <option value="2">2 Travelers (Duo)</option>
                        <option value="3">3 Travelers (Triple Sharing)</option>
                        <option value="4-6">4 to 6 Friends</option>
                        <option value="7+">7+ Large Group / Batch</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1">
                        Preferred Batch / Month
                      </label>
                      <input
                        type="text"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                        placeholder="e.g. Next Friday / October Batch"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">
                      Message / Special Queries
                    </label>
                    <textarea
                      rows={3}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Ask about sharing options, boarding points, vegetarian food..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/25 active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Google Maps Embed Area for Udaipur Office */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <h4 className="text-sm font-bold text-white font-heading">
                    Office Location Map
                  </h4>
                </div>
                <span className="text-xs text-slate-400">
                  Sector 13, Udaipur, Rajasthan
                </span>
              </div>
              <div className="w-full h-64 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 relative">
                <iframe
                  title="R Journey Office Location Udaipur"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14515.65345704944!2d73.702951!3d24.568453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56577889397%3A0xb35a74e578f1e582!2sSector%2013%2C%20Hiran%20Magri%2C%20Udaipur%2C%20Rajasthan%20313001!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
