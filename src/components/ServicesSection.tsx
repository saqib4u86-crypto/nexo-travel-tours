import React, { useState } from 'react';
import { ServiceDetail, PageView } from '../types';
import { SERVICES_LIST } from '../data/mockData';
import { 
  ShieldCheck, 
  Briefcase, 
  Plane, 
  Hotel, 
  Compass, 
  Moon, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Sparkles,
  FileText,
  UserCheck,
  SendHorizontal,
  CalendarCheck
} from 'lucide-react';

interface ServicesSectionProps {
  onNavigate: (page: PageView) => void;
  onOpenConsultationModal: (destination?: string, service?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onNavigate,
  onOpenConsultationModal,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_LIST[0].id);

  const activeService = SERVICES_LIST.find((s) => s.id === selectedServiceId) || SERVICES_LIST[0];

  const getServiceIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case 'Passport':
        return <ShieldCheck className={className} />;
      case 'Briefcase':
        return <Briefcase className={className} />;
      case 'Plane':
        return <Plane className={className} />;
      case 'Hotel':
        return <Hotel className={className} />;
      case 'Compass':
        return <Compass className={className} />;
      case 'Moon':
        return <Moon className={className} />;
      default:
        return <ShieldCheck className={className} />;
    }
  };

  const processSteps = [
    {
      step: '01',
      title: 'Free Initial Profile Assessment',
      desc: 'Our visa advisors review your passport, financial profile, and travel goals to identify the highest-probability visa route.'
    },
    {
      step: '02',
      title: 'Document Checklist & Drafting',
      desc: 'We provide a personalized document checklist, draft professional cover letters, and arrange verifiable flight/hotel reservations.'
    },
    {
      step: '03',
      title: 'Application Audit & Submission',
      desc: 'Certified specialists perform a multi-point audit on your file before lodging the application directly with official embassy portals or VFS.'
    },
    {
      step: '04',
      title: 'Interview Briefing & Mock Q&A',
      desc: 'For sticker or embassy appointment visas (Schengen, UK, USA), we conduct comprehensive mock interview preparation.'
    },
    {
      step: '05',
      title: 'Visa Grant & Boarding Support',
      desc: 'Receive your verified visa, e-visa document, flight itinerary, and complete airport travel advisory.'
    }
  ];

  return (
    <section id="services-section" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A8CC]/10 text-[#00A8CC] text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            Comprehensive Travel &amp; Visa Solutions
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2C3E50] tracking-tight">
            End-to-End Travel &amp; Visa Consultancy
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            From instant e-visas and corporate delegacy arrangements to worldwide flights, hotels, and sacred Umrah journeys.
          </p>
        </div>

        {/* Interactive Service Tab Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Service Selector Cards */}
          <div className="lg:col-span-5 space-y-2.5">
            {SERVICES_LIST.map((service) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <button
                  key={service.id}
                  id={`service-tab-${service.id}`}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-start gap-3.5 border ${
                    isSelected
                      ? 'bg-white text-[#2C3E50] shadow-md border-[#00A8CC] ring-1 ring-[#00A8CC]'
                      : 'bg-white/60 hover:bg-white text-slate-700 border-slate-200/80'
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-lg shrink-0 ${
                      isSelected
                        ? 'bg-[#00A8CC] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {getServiceIcon(service.iconName, 'w-5 h-5')}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className={`text-sm font-bold ${isSelected ? 'text-[#00A8CC]' : 'text-[#2C3E50]'}`}>
                        {service.title}
                      </h4>
                      {isSelected && <ArrowRight className="w-4 h-4 text-[#00A8CC]" />}
                    </div>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: In-depth Service Detail Display */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-200 animate-in fade-in duration-300">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="p-3 rounded-xl bg-[#00A8CC]/10 text-[#00A8CC]">
                {getServiceIcon(activeService.iconName, 'w-6 h-6')}
              </div>
              <div>
                <span className="text-xs font-bold text-[#E67E22] uppercase tracking-wider">
                  Nexo Service Portfolio
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#2C3E50]">
                  {activeService.title}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed my-5">
              {activeService.fullDesc}
            </p>

            {/* Turnaround Time Badge */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 mb-5 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-semibold flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#00A8CC]" />
                Standard Turnaround Time:
              </span>
              <span className="font-bold text-[#00A8CC]">{activeService.turnaroundTime}</span>
            </div>

            {/* Key Advantages */}
            <div className="mb-6">
              <h4 className="text-xs font-extrabold text-[#2C3E50] uppercase tracking-wider mb-3">
                Key Client Advantages &amp; Deliverables:
              </h4>
              <div className="space-y-2.5">
                {activeService.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Supported Regions */}
            <div className="mb-6">
              <h4 className="text-xs font-extrabold text-[#2C3E50] uppercase tracking-wider mb-2">
                Supported Destinations &amp; Sectors:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeService.supportedCountries.map((c, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => onOpenConsultationModal('Worldwide', activeService.title)}
                className="flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#00A8CC] hover:bg-[#0088A8] transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Consultation for {activeService.title.split(' ')[0]}</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-[#2C3E50] bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Talk to Consultant</span>
              </button>
            </div>
          </div>

        </div>

        {/* 5-Step Visa Roadmap Component */}
        <div className="mt-8 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#E67E22] uppercase tracking-wider">
              Systematic &amp; Transparent Workflow
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#2C3E50] mt-1">
              How Nexo Processes Your Visa &amp; Tour
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Zero ambiguity. Every file undergoes a 5-tier review ensuring maximum approval chances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map((step, idx) => (
              <div
                key={step.step}
                className="relative p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black px-2 py-0.5 rounded-md bg-[#00A8CC] text-white">
                      STEP {step.step}
                    </span>
                    {idx < processSteps.length - 1 && (
                      <ArrowRight className="hidden md:block w-4 h-4 text-slate-300" />
                    )}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#2C3E50] mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Slogan Accent bar inside roadmap */}
          <div className="mt-8 p-4 rounded-xl bg-[#2C3E50] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <Sparkles className="w-5 h-5 text-[#E67E22] shrink-0" />
              <div>
                <div className="font-urdu text-[#E67E22] text-base font-bold">
                  منزل سوچ کی دہلیز پر
                </div>
                <div className="text-xs text-slate-300">
                  Ready to start your visa application today? Our consultants are available 24/7.
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenConsultationModal()}
              className="px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-[#E67E22] hover:bg-[#D35400] transition-colors shrink-0 shadow-sm"
            >
              Start Free Assessment
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
