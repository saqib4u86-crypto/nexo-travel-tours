/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageView, Currency } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DestinationGrid } from './components/DestinationGrid';
import { TourPackagesSection } from './components/TourPackagesSection';
import { ServicesSection } from './components/ServicesSection';
import { VisaAssessmentTool } from './components/VisaAssessmentTool';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { DubaiVisaSection } from './components/DubaiVisaSection';
import { TurkeyVisaSection } from './components/TurkeyVisaSection';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsOfServicePage } from './components/TermsOfServicePage';
import { UmrahShowcaseSection } from './components/UmrahShowcaseSection';
import { DomesticToursSection } from './components/DomesticToursSection';
import { HomeCategoryGateways } from './components/HomeCategoryGateways';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationPrefillDest, setConsultationPrefillDest] = useState<string>('Azerbaijan (Baku)');
  const [consultationPrefillService, setConsultationPrefillService] = useState<string>('Tourist Visa Consultancy');
  const [selectedDestinationForView, setSelectedDestinationForView] = useState<string>('');

  const handleOpenConsultationModal = (destination?: string, service?: string) => {
    if (destination) setConsultationPrefillDest(destination);
    if (service) setConsultationPrefillService(service);
    setIsConsultationModalOpen(true);
  };

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDestination = (destId: string) => {
    setSelectedDestinationForView(destId);
    handleNavigate('destinations');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-[#2C3E50] font-sans antialiased selection:bg-[#00A8CC]/20 selection:text-[#00A8CC]">
      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        currency={currency}
        onCurrencyChange={setCurrency}
        onOpenConsultationModal={() => handleOpenConsultationModal()}
      />

      {/* Main Content Area based on current view */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* Hero Section with high-impact imagery and Urdu slogan */}
            <HeroSection
              onNavigate={handleNavigate}
              onOpenConsultationModal={handleOpenConsultationModal}
              currency={currency}
              onSelectDestination={handleSelectDestination}
            />

            {/* Clean Category Gateways (Direct Access to Dedicated Tabs) */}
            <HomeCategoryGateways
              onNavigate={handleNavigate}
              onOpenConsultationModal={handleOpenConsultationModal}
            />

            {/* Quick Destination Grid */}
            <DestinationGrid
              currency={currency}
              onNavigate={handleNavigate}
              onOpenConsultationModal={handleOpenConsultationModal}
              selectedDestinationId={selectedDestinationForView}
            />

            {/* Services Overview */}
            <ServicesSection
              onNavigate={handleNavigate}
              onOpenConsultationModal={handleOpenConsultationModal}
            />

            {/* Why Choose Us & Trust */}
            <WhyChooseUs />

            {/* Testimonials & FAQs */}
            <TestimonialsSection />

            {/* Contact & Branch Info */}
            <ContactSection />
          </>
        )}

        {currentPage === 'dubai-visa' && (
          <div className="animate-in fade-in duration-300">
            <DubaiVisaSection
              currency={currency}
              onOpenConsultationModal={handleOpenConsultationModal}
              isStandalonePage={true}
            />
            <div className="bg-slate-100 py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <WhyChooseUs />
              </div>
            </div>
            <TestimonialsSection />
          </div>
        )}

        {currentPage === 'turkey-visa' && (
          <div className="animate-in fade-in duration-300">
            <TurkeyVisaSection
              currency={currency}
              onOpenConsultationModal={handleOpenConsultationModal}
              isStandalonePage={true}
            />
            <div className="bg-slate-100 py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <WhyChooseUs />
              </div>
            </div>
            <TestimonialsSection />
          </div>
        )}

        {currentPage === 'destinations' && (
          <div className="pt-4 animate-in fade-in duration-300">
            <DestinationGrid
              currency={currency}
              onNavigate={handleNavigate}
              onOpenConsultationModal={handleOpenConsultationModal}
              selectedDestinationId={selectedDestinationForView}
            />
            <VisaAssessmentTool
              currency={currency}
              onNavigate={handleNavigate}
              onOpenConsultationModal={handleOpenConsultationModal}
            />
          </div>
        )}

        {currentPage === 'packages' && (
          <div className="pt-4 animate-in fade-in duration-300">
            <TourPackagesSection
              currency={currency}
              onNavigate={handleNavigate}
              onOpenConsultationModal={handleOpenConsultationModal}
            />
            <WhyChooseUs />
          </div>
        )}

        {currentPage === 'services' && (
          <div className="pt-4 animate-in fade-in duration-300">
            <ServicesSection
              onNavigate={handleNavigate}
              onOpenConsultationModal={handleOpenConsultationModal}
            />
            <VisaAssessmentTool
              currency={currency}
              onNavigate={handleNavigate}
              onOpenConsultationModal={handleOpenConsultationModal}
            />
          </div>
        )}

        {currentPage === 'visa-guide' && (
          <div className="pt-4 animate-in fade-in duration-300">
            <VisaAssessmentTool
              currency={currency}
              onNavigate={handleNavigate}
              onOpenConsultationModal={handleOpenConsultationModal}
            />
            <DestinationGrid
              currency={currency}
              onNavigate={handleNavigate}
              onOpenConsultationModal={handleOpenConsultationModal}
              selectedDestinationId={selectedDestinationForView}
            />
          </div>
        )}

        {currentPage === 'about' && (
          <div className="pt-4 animate-in fade-in duration-300">
            <AboutSection
              onNavigate={handleNavigate}
              onOpenConsultationModal={() => handleOpenConsultationModal()}
            />
            <TestimonialsSection />
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="pt-4 animate-in fade-in duration-300">
            <ContactSection />
          </div>
        )}

        {currentPage === 'privacy-policy' && (
          <div className="animate-in fade-in duration-300">
            <PrivacyPolicyPage
              onNavigate={handleNavigate}
              onOpenConsultationModal={() => handleOpenConsultationModal()}
            />
          </div>
        )}

        {currentPage === 'terms-of-service' && (
          <div className="animate-in fade-in duration-300">
            <TermsOfServicePage
              onNavigate={handleNavigate}
              onOpenConsultationModal={() => handleOpenConsultationModal()}
            />
          </div>
        )}

        {currentPage === 'umrah' && (
          <div className="animate-in fade-in duration-300">
            {/* Dedicated Tab Top Header / Breadcrumb */}
            <div className="bg-[#042820] text-emerald-100 py-3.5 px-4 sm:px-8 border-b border-emerald-800/60 shadow-xs">
              <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => handleNavigate('home')} 
                    className="text-emerald-300 hover:text-white underline font-semibold flex items-center gap-1"
                  >
                    <span>Home</span>
                  </button>
                  <span className="text-emerald-600">/</span>
                  <span className="text-amber-300 font-bold flex items-center gap-1">
                    <span>🕋 Sacred Umrah Sanctuary &amp; Packages</span>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleNavigate('domestic-tours')}
                    className="text-emerald-300 hover:text-white text-xs underline font-medium"
                  >
                    Explore Domestic Pakistan Tours 🇵🇰 &rarr;
                  </button>
                </div>
              </div>
            </div>

            <UmrahShowcaseSection
              onOpenConsultationModal={handleOpenConsultationModal}
              onNavigate={handleNavigate}
              isStandalonePage={true}
            />
            <WhyChooseUs />
            <TestimonialsSection />
          </div>
        )}

        {currentPage === 'domestic-tours' && (
          <div className="animate-in fade-in duration-300">
            {/* Dedicated Tab Top Header / Breadcrumb */}
            <div className="bg-[#122A22] text-emerald-100 py-3.5 px-4 sm:px-8 border-b border-emerald-800/60 shadow-xs">
              <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => handleNavigate('home')} 
                    className="text-emerald-300 hover:text-white underline font-semibold flex items-center gap-1"
                  >
                    <span>Home</span>
                  </button>
                  <span className="text-emerald-600">/</span>
                  <span className="text-emerald-300 font-bold flex items-center gap-1">
                    <span>🇵🇰 Discover Pakistan (Domestic Tours)</span>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleNavigate('umrah')}
                    className="text-amber-300 hover:text-white text-xs underline font-medium"
                  >
                    Explore Sacred Umrah Packages 🕋 &rarr;
                  </button>
                </div>
              </div>
            </div>

            <DomesticToursSection
              onOpenConsultationModal={handleOpenConsultationModal}
              onNavigate={handleNavigate}
              isStandalonePage={true}
            />
            <WhyChooseUs />
            <TestimonialsSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultationModal={() => handleOpenConsultationModal()}
      />

      {/* Floating WhatsApp Instant Chat Widget */}
      <FloatingWhatsApp />

      {/* 1-on-1 Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        initialDestination={consultationPrefillDest}
        initialService={consultationPrefillService}
      />
    </div>
  );
}
