import React from 'react';
import { PageView } from '../types';
import { NexoLogo } from './NexoLogo';
import { 
  Compass, 
  Target, 
  Eye, 
  Award, 
  Sparkles, 
  ShieldCheck, 
  Globe2, 
  Users, 
  Building2, 
  CheckCircle,
  ArrowRight,
  HeartHandshake,
  Clock,
  Zap
} from 'lucide-react';

interface AboutSectionProps {
  onNavigate: (page: PageView) => void;
  onOpenConsultationModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onNavigate,
  onOpenConsultationModal,
}) => {
  const commitments = [
    { 
      icon: <Sparkles className="w-6 h-6 text-[#00A8CC]" />, 
      title: 'Bespoke Curation', 
      desc: 'Every itinerary is customized to your personal pace, interests, and budget—no rigid, one-size-fits-all tours.' 
    },
    { 
      icon: <ShieldCheck className="w-6 h-6 text-[#E67E22]" />, 
      title: 'Precision Filings', 
      desc: 'Multi-layer document audits and verified bookings to ensure maximum embassy compliance and peace of mind.' 
    },
    { 
      icon: <HeartHandshake className="w-6 h-6 text-[#00A8CC]" />, 
      title: 'Ethical Advisory', 
      desc: 'Strictly professional guidance with complete clarity on requirements and zero fine-print traps.' 
    },
    { 
      icon: <Clock className="w-6 h-6 text-[#E67E22]" />, 
      title: 'End-to-End Concierge', 
      desc: 'A dedicated travel counselor supporting you from your initial inquiry until you return home safely.' 
    }
  ];

  return (
    <section id="about-us-section" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Top Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A8CC]/10 text-[#00A8CC] text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            About Nexo Travel &amp; Tours
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2C3E50] tracking-tight leading-tight">
            Bridging Dreams to Real World Destinations
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Founded on the core principle of integrity, digital speed, and meticulous travel planning, Nexo Travel &amp; Tours is a premier corporate and leisure consultancy.
          </p>
        </div>

        {/* The Philosophy of "Manzil Soch ki Dehleez par" Feature Box */}
        <div className="mb-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#2C3E50] via-[#1E2B37] to-[#121A22] text-white shadow-xl relative overflow-hidden">
          {/* Subtle Decorative Aura */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A8CC]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E67E22]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E67E22]/20 border border-[#E67E22]/50 text-[#E67E22] text-xs font-bold">
                <Sparkles className="w-4 h-4" />
                Our Foundational Creed
              </div>

              <div className="font-urdu text-[#E67E22] text-3xl sm:text-4xl font-extrabold leading-loose">
                منزل سوچ کی دہلیز پر
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                "Your Destination is at the Doorstep of Your Thoughts"
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                We believe that every grand journey begins with a spark in your imagination—a thought of wandering the historic cobblestone streets of Baku, witnessing hot air balloons rise over Cappadocia, or standing in humble devotion before the Ka’abah. Our mission is to take that very thought from your mind's doorstep and transform it into seamless boarding passes, confirmed luxury vouchers, and unforgettable memories.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center gap-4">
              {/* Circular Emblem Badge Display */}
              <div className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                <NexoLogo size="xl" variant="badge-only" />
              </div>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center w-full max-w-xs space-y-3">
                <div className="flex items-center gap-2 text-left p-2 rounded-xl bg-white/5 border border-white/10">
                  <Sparkles className="w-5 h-5 text-[#00A8CC] shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">Thought to Destination</div>
                    <div className="text-[11px] text-slate-300">Custom Designed Travel</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-left p-2 rounded-xl bg-white/5 border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-[#E67E22] shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">Dedicated 1-on-1 Care</div>
                    <div className="text-[11px] text-slate-300">Direct Case Management</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#00A8CC]/10 text-[#00A8CC] flex items-center justify-center mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To eliminate bureaucratic anxiety from international travel by providing transparent, fast-track visa processing, curated luxury accommodations, and client-first consultancy tailored to every traveler’s unique aspirations.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#E67E22]/10 text-[#E67E22] flex items-center justify-center mb-4">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To be the premier travel and immigration consultancy in South Asia and the Middle East, recognized globally for digital innovation, uncompromised integrity, and an extraordinary standard of bespoke hospitality.
            </p>
          </div>
        </div>

        {/* Core Commitments & Standards */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#00A8CC] uppercase tracking-wider">Our Standards</span>
            <h3 className="text-2xl font-extrabold text-[#2C3E50]">The Nexo Quality Commitments</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Guiding principles that define every visa application, tour itinerary, and client interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((c, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#00A8CC]/40 hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {c.icon}
                </div>
                <h4 className="text-base font-bold text-[#2C3E50] mb-2">{c.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-bold text-[#2C3E50]">Ready to plan your next destination?</h4>
            <p className="text-xs text-slate-600">Connect with our senior consultants for personalized travel itineraries.</p>
          </div>
          <button
            onClick={onOpenConsultationModal}
            className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#00A8CC] hover:bg-[#0088A8] shadow-sm transition-colors flex items-center gap-2"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
