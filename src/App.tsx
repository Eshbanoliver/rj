import React, { useState, useEffect } from 'react';
import { PageType, SearchQuery } from './types';
import { TourPackage } from './data/tours';
import { Destination } from './data/destinations';

// Layout & Common Components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { TourDetailsModal } from './components/TourDetailsModal';
import { InquiryModal } from './components/InquiryModal';
import { TermsModal } from './components/TermsModal';

// Home Sections
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { PopularDestinations } from './components/PopularDestinations';
import { FeaturedTourPackages } from './components/FeaturedTourPackages';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TravelStory } from './components/TravelStory';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { CustomTripCTA } from './components/CustomTripCTA';

// Dedicated Page Views
import { AboutPage } from './pages/AboutPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { ToursPage } from './pages/ToursPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState<boolean>(false);
  const [inquiryData, setInquiryData] = useState<{ tourTitle?: string; message?: string } | undefined>();
  const [isTermsOpen, setIsTermsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<SearchQuery>({
    destination: 'all',
    departureCity: 'all',
    travelDate: '',
    travelers: 1,
    tourType: 'all',
  });

  // Scroll to top upon page navigation
  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Prevent background scroll when modal is active
  useEffect(() => {
    if (selectedTour || isInquiryOpen || isTermsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedTour, isInquiryOpen, isTermsOpen]);

  const handleOpenInquiry = (initial?: { tourTitle?: string; message?: string }) => {
    setInquiryData(initial);
    setIsInquiryOpen(true);
  };

  const handleSelectTour = (tour: TourPackage) => {
    setSelectedTour(tour);
  };

  const handleSelectDestination = (dest: Destination) => {
    setSelectedDestination(dest);
    handleNavigate('destinations');
  };

  const handleSearchSubmit = (query: SearchQuery) => {
    setSearchQuery(query);
    handleNavigate('trips');
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-800 flex flex-col font-sans selection:bg-amber-500 selection:text-white">
      {/* Sticky Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Main Page Rendering */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <Hero
              onNavigate={handleNavigate}
              onSearch={handleSearchSubmit}
              onOpenInquiry={handleOpenInquiry}
            />
            <StatsSection />
            <PopularDestinations
              onNavigate={handleNavigate}
              onSelectDestination={handleSelectDestination}
            />
            <FeaturedTourPackages
              onNavigate={handleNavigate}
              onSelectTour={handleSelectTour}
              onOpenInquiry={handleOpenInquiry}
            />
            <WhyChooseUs />
            <TravelStory
              onNavigate={handleNavigate}
              onOpenInquiry={handleOpenInquiry}
            />
            <ServicesSection
              onNavigate={handleNavigate}
              onOpenInquiry={handleOpenInquiry}
            />
            <GallerySection
              onNavigate={handleNavigate}
            />
            <CustomTripCTA onOpenInquiry={handleOpenInquiry} />
          </>
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentPage === 'destinations' && (
          <DestinationsPage
            onNavigate={handleNavigate}
            onSearch={handleSearchSubmit}
            selectedDestinationInitial={selectedDestination}
          />
        )}

        {currentPage === 'trips' && (
          <ToursPage
            onNavigate={handleNavigate}
            onSelectTour={handleSelectTour}
            onOpenInquiry={handleOpenInquiry}
            initialQuery={searchQuery}
          />
        )}

        {currentPage === 'gallery' && (
          <GallerySection
            onNavigate={handleNavigate}
            isStandalonePage={true}
          />
        )}

        {currentPage === 'contact' && <ContactPage />}

        {currentPage === 'terms' && (
          <div className="pt-28 pb-16">
            <TermsModal isOpen={true} onClose={() => handleNavigate('home')} />
          </div>
        )}
      </main>

      {/* Modals and Overlays */}
      <TourDetailsModal
        tour={selectedTour}
        onClose={() => setSelectedTour(null)}
        onOpenTerms={() => setIsTermsOpen(true)}
      />

      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        initialData={inquiryData}
      />

      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />

      {/* Floating CTA & Scroll actions */}
      <FloatingActions />

      {/* Multi-column Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenTerms={() => setIsTermsOpen(true)}
      />
    </div>
  );
}

export default App;
