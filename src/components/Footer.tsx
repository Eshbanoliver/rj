import { PageType } from '../types';
import { companyData } from '../data/company';
import { MapPin, Phone, Clock, ShieldCheck, Heart } from 'lucide-react';
import { InstagramIcon } from './icons';


interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenTerms }) => {
  const quickLinks: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Destinations', page: 'destinations' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Upcoming Trips', page: 'trips' },
    { label: 'Contact', page: 'contact' },
  ];

  const destinations = [
    'Udaipur (City of Lakes)',
    'Jaisalmer (Golden Dunes)',
    'Jodhpur (The Blue City)',
    'Kumbhalgarh (Great Wall)',
    'Haldighati Valley',
    'Sam Sand Dunes Glamping',
  ];

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      {/* Upper Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1 shadow-md shadow-black/20 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/r-journey-logo.png"
                  alt="R Journey Tour & Travel Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-black font-heading tracking-tight text-white">
                  R <span className="text-amber-400">Journey</span>
                </h3>
                <p className="text-[10px] tracking-widest uppercase text-slate-400">
                  Tour & Travel
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Where Strangers Become Stories. Specialized in curated 15 Strangers community journeys, college reunions, and luxury Rajasthan getaways from Ahmedabad and Udaipur.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={companyData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-400 transition-colors"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <span className="text-xs text-slate-400 font-medium">
                {companyData.instagram}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => {
                      onNavigate(link.page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Popular Destinations (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider">
              Destinations
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {destinations.map((dest, i) => (
                <li key={i} className="hover:text-slate-200 transition-colors">
                  {dest}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider">
              Contact Information
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{companyData.address.full}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="space-x-1">
                  <a
                    href="tel:8094268991"
                    className="hover:text-amber-400 transition-colors"
                  >
                    8094268991
                  </a>
                  <span>/</span>
                  <a
                    href="tel:8890437050"
                    className="hover:text-amber-400 transition-colors"
                  >
                    8890437050
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-amber-400 text-sm font-bold">@</span>
                <a
                  href={`mailto:${companyData.email}`}
                  className="hover:text-amber-400 transition-colors"
                >
                  {companyData.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{companyData.businessHours}</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenTerms}
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium underline"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>View 19 Terms & Conditions</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-900 bg-slate-950/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {companyData.name}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenTerms}
              className="hover:text-slate-300 transition-colors"
            >
              Terms & Conditions
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-slate-300 transition-colors"
            >
              Declaration Form
            </button>
            <span className="flex items-center gap-1 text-slate-500">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for Rajasthan Travelers
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
