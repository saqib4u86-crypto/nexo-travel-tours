import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Award, 
  Users, 
  Lock, 
  Headphones, 
  Sparkles, 
  FileSearch,
  BadgePercent,
  Compass
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#00A8CC]" />,
      title: 'Precision Visa & File Audits',
      description: 'Our certified visa counselors perform multi-layer documentation audits and verification to maximize embassy compliance and success.'
    },
    {
      icon: <Zap className="w-6 h-6 text-[#E67E22]" />,
      title: 'Lightning Digital Efficiency',
      description: 'Instant E-Visa issuance within 3 to 24 hours for Azerbaijan, UAE, Saudi Arabia, and Turkey with real-time SMS & WhatsApp alerts.'
    },
    {
      icon: <Lock className="w-6 h-6 text-[#00A8CC]" />,
      title: 'Transparent Advisory',
      description: 'Clear documentation requirements and upfront process roadmaps before application lodging with zero surprises.'
    },
    {
      icon: <Users className="w-6 h-6 text-[#E67E22]" />,
      title: 'Dedicated Case Manager',
      description: 'A personal senior consultant assigned to your file from initial inquiry until your safe flight return home.'
    },
    {
      icon: <Compass className="w-6 h-6 text-[#00A8CC]" />,
      title: 'Bespoke Travel Solutions',
      description: 'Customized itineraries tailored to your unique preferences, budget, and travel schedule with verified direct bookings.'
    },
    {
      icon: <Headphones className="w-6 h-6 text-[#E67E22]" />,
      title: '24/7 Worldwide Support',
      description: 'On-ground assistance while traveling abroad. Instant helpline for flight changes, emergency extensions, or guidance.'
    }
  ];

  return (
    <section id="why-choose-us-section" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A8CC]/10 text-[#00A8CC] text-xs font-bold uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5" />
            The Nexo Advantage
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2C3E50] tracking-tight">
            Why Discerning Travelers Choose Nexo
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            We bridge the gap between your travel dreams and actual destinations with unwavering trust, cutting-edge digital speed, and bespoke care.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-[#00A8CC]/40 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-[#00A8CC]/10 shadow-xs border border-slate-200/70 flex items-center justify-center mb-4 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#2C3E50] group-hover:text-[#00A8CC] transition-colors mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1 text-[11px] font-bold text-[#00A8CC]">
                <span>Verified Standard</span>
                <span className="text-slate-300">•</span>
                <span className="font-urdu text-[#E67E22] text-xs font-semibold">منزل سوچ کی دہلیز پر</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
