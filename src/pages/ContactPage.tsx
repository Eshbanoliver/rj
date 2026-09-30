import { useState } from 'react';
import { companyData } from '../data/company';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
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
    window.open(getWhatsAppUrl(), '_blank');
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
    <div className="pt-24 pb-20 bg-[#fafbfc] text-slate-900 min-h-screen">
      {/* Page Header */}
      <div className="relative py-12 sm:py-20 bg-[#113d48] border-b border-[#0e333d] text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/palm-valley-dinner.jpg"
            alt="Contact R Journey"
            className="w-full h-full object-cover filter brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#113d48] via-[#113d48]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold tracking-widest text-[#1ca8cb] uppercase mb-3 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-900/80 border border-[#1ca8cb]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Travel Support</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight">
            Contact <span className="text-[#1ca8cb]">Our Team</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto px-2">
            Ready to embark on your next Rajasthan journey? Get in touch with our travel desk in Udaipur or message us directly on WhatsApp.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#113d48] font-bold block mb-1">
                Reach Us Anytime
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
                We're Here To Help You Plan
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Whether you have questions regarding batch dates, resort amenities at Palm Valley, or customizing a private group tour, our team is always ready.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <div className="relative p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#1ca8cb] shadow-sm hover:shadow-[0_15px_30px_-10px_rgba(28,168,203,0.18)] hover:-translate-y-1 transition-all duration-300 group flex items-start gap-4 overflow-hidden before:absolute before:top-0 before:left-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[#1ca8cb] before:to-[#113d48] before:scale-y-0 group-hover:before:scale-y-100 before:transition-transform before:duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1ca8cb]/10 to-[#113d48]/10 border border-[#1ca8cb]/30 text-[#113d48] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:from-[#1ca8cb] group-hover:to-[#113d48] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Mobile Numbers
                  </span>
                  <div className="mt-1 space-y-0.5 text-sm font-bold text-slate-900">
                    <div>
                      <a
                        href="tel:8094268991"
                        className="hover:text-[#1ca8cb] transition-colors"
                      >
                        8094268991
                      </a>
                    </div>
                    <div>
                      <a
                        href="tel:8890437050"
                        className="hover:text-[#1ca8cb] transition-colors"
                      >
                        8890437050
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="relative p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#1ca8cb] shadow-sm hover:shadow-[0_15px_30px_-10px_rgba(28,168,203,0.18)] hover:-translate-y-1 transition-all duration-300 group flex items-start gap-4 overflow-hidden before:absolute before:top-0 before:left-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[#1ca8cb] before:to-[#113d48] before:scale-y-0 group-hover:before:scale-y-100 before:transition-transform before:duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1ca8cb]/10 to-[#113d48]/10 border border-[#1ca8cb]/30 text-[#113d48] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:from-[#1ca8cb] group-hover:to-[#113d48] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Email Address
                  </span>
                  <a
                    href="mailto:rjourney@gmail.com"
                    className="text-sm font-bold text-[#113d48] hover:underline block mt-1"
                  >
                    rjourney@gmail.com
                  </a>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    For itinerary inquiries & custom proposals
                  </span>
                </div>
              </div>

              {/* WhatsApp Quick Link */}
              <div className="relative p-5 rounded-2xl bg-gradient-to-br from-emerald-50/90 to-teal-50/60 border border-emerald-200/90 hover:border-emerald-400 shadow-sm hover:shadow-[0_15px_30px_-10px_rgba(16,185,129,0.22)] hover:-translate-y-1 transition-all duration-300 group flex items-start gap-4 overflow-hidden before:absolute before:top-0 before:left-0 before:bottom-0 before:w-1 before:bg-emerald-500 before:scale-y-0 group-hover:before:scale-y-100 before:transition-transform before:duration-300">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                    Instant WhatsApp Support
                  </span>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Fast response for seat availability & brochure PDFs.
                  </p>
                  <a
                    href={`https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(
                      'Hello R Journey! I want to check availability for upcoming tour batches.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 mt-2 bg-white/90 hover:bg-white px-3 py-1.5 rounded-lg border border-emerald-200/80 shadow-2xs transition-all group-hover:shadow-xs"
                  >
                    <span>Chat +91 80942 68991</span>
                  </a>
                </div>
              </div>

              {/* Office Address */}
              <div className="relative p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#1ca8cb] shadow-sm hover:shadow-[0_15px_30px_-10px_rgba(28,168,203,0.18)] hover:-translate-y-1 transition-all duration-300 group flex items-start gap-4 overflow-hidden before:absolute before:top-0 before:left-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[#1ca8cb] before:to-[#113d48] before:scale-y-0 group-hover:before:scale-y-100 before:transition-transform before:duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1ca8cb]/10 to-[#113d48]/10 border border-[#1ca8cb]/30 text-[#113d48] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:from-[#1ca8cb] group-hover:to-[#113d48] group-hover:text-white transition-all duration-300 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Registered Office
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    {companyData.address.full}
                  </p>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    Rajasthan 313001, India
                  </span>
                </div>
              </div>

              {/* Business Hours & Instagram */}
              <div className="relative p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#1ca8cb] shadow-sm hover:shadow-[0_15px_30px_-10px_rgba(28,168,203,0.18)] hover:-translate-y-1 transition-all duration-300 group flex items-start gap-4 overflow-hidden before:absolute before:top-0 before:left-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[#1ca8cb] before:to-[#113d48] before:scale-y-0 group-hover:before:scale-y-100 before:transition-transform before:duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1ca8cb]/10 to-[#113d48]/10 border border-[#1ca8cb]/30 text-[#113d48] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:from-[#1ca8cb] group-hover:to-[#113d48] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Operating Hours & Social
                  </span>
                  <p className="text-xs font-medium text-slate-600 mt-1">
                    {companyData.businessHours}
                  </p>
                  <a
                    href={companyData.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#113d48] hover:underline mt-1 font-semibold"
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
            <div className="relative bg-white border border-slate-200/90 hover:border-[#1ca8cb]/60 rounded-3xl p-6 sm:p-9 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-[#1ca8cb] before:via-[#189bbd] before:to-[#113d48]">
              <h3 className="text-xl sm:text-2xl font-black font-heading text-slate-900 mb-1">
                Send Us An Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Tell us your destination, expected date, and traveler count. We'll respond with customized details.
              </p>

              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 font-heading">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                    Your inquiry has been successfully logged. Our travel coordinator will contact you at <strong className="text-slate-900">{formData.phone}</strong> shortly.
                  </p>
                  <div className="pt-4">
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 min-h-[44px] py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-md shadow-emerald-600/20"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp Directly</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-medium">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-slate-700 block mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full min-h-[44px] bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#1ca8cb] focus:bg-white transition-colors"
                      />
                    </div>
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
                        placeholder="10-digit mobile number"
                        className="w-full min-h-[44px] bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#1ca8cb] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-slate-700 block mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@domain.com"
                        className="w-full min-h-[44px] bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#1ca8cb] focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-slate-700 block mb-1">
                        Interested Destination
                      </label>
                      <select
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full min-h-[44px] bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#1ca8cb] focus:bg-white transition-colors"
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
                      <label className="text-xs font-medium text-slate-700 block mb-1">
                        Number of Travelers
                      </label>
                      <select
                        name="travelers"
                        value={formData.travelers}
                        onChange={handleChange}
                        className="w-full min-h-[44px] bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#1ca8cb] focus:bg-white transition-colors"
                      >
                        <option value="1">1 Solo Traveler</option>
                        <option value="2">2 Travelers (Duo)</option>
                        <option value="3">3 Travelers (Triple Sharing)</option>
                        <option value="4-6">4 to 6 Friends</option>
                        <option value="7+">7+ Large Group / Batch</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-slate-700 block mb-1">
                        Preferred Batch / Month
                      </label>
                      <input
                        type="text"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                        placeholder="e.g. Next Friday / October Batch"
                        className="w-full min-h-[44px] bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#1ca8cb] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1">
                      Message / Special Queries
                    </label>
                    <textarea
                      rows={3}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Ask about sharing options, boarding points, vegetarian food..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#1ca8cb] focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="btn-shimmer w-full min-h-[44px] py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 shadow-md shadow-emerald-600/25 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Inquiry on WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Google Maps Embed Area for Udaipur Office */}
            <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#1ca8cb]" />
                  <h4 className="text-sm font-bold text-slate-900 font-heading">
                    Office Location Map
                  </h4>
                </div>
                <span className="text-xs text-slate-500">
                  Sector 13, Udaipur, Rajasthan
                </span>
              </div>
              <div className="w-full h-52 sm:h-64 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 relative">
                <iframe
                  title="R Journey Office Location Udaipur"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14515.65345704944!2d73.702951!3d24.568453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56577889397%3A0xb35a74e578f1e582!2sSector%2013%2C%20Hiran%20Magri%2C%20Udaipur%2C%20Rajasthan%20313001!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
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
