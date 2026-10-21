import React, { useState } from 'react';
import { DOMESTIC_DESTINATIONS } from '../data/domesticToursData';
import { DomesticDestination, PageView } from '../types';
import { 
  MapPin, 
  Clock, 
  Compass, 
  MessageCircle, 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  Car, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Users, 
  PhoneCall, 
  Camera,
  ArrowRight
} from 'lucide-react';

interface DomesticToursSectionProps {
  onNavigate?: (page: PageView) => void;
  onOpenConsultationModal: (destination?: string, service?: string) => void;
  isStandalonePage?: boolean;
}

export const DomesticToursSection: React.FC<DomesticToursSectionProps> = ({
  onNavigate,
  onOpenConsultationModal,
  isStandalonePage = false,
}) => {
  const [selectedProvince, setSelectedProvince] = useState<string>('All');
  const [expandedDestId, setExpandedDestId] = useState<string | null>(null);

  const provinces = [
    { id: 'All', label: 'All Pakistan Destinations' },
    { id: 'Gilgit-Baltistan', label: '🏔️ Gilgit-Baltistan (Hunza, Skardu)' },
    { id: 'Khyber Pakhtunkhwa', label: '🌲 KP (Swat, Naran, Chitral, Kumrat)' },
    { id: 'Azad Kashmir', label: '🌿 Azad Kashmir (Neelum Valley)' },
    { id: 'Punjab', label: '⛅ Punjab (Murree & Galiyat)' },
  ];

  const filteredDestinations = DOMESTIC_DESTINATIONS.filter((dest) => {
    if (selectedProvince === 'All') return true;
    return dest.province === selectedProvince;
  });

  const handleWhatsAppInquiry = (dest: DomesticDestination) => {
    const text = `As-salamu alaykum Nexo Travel! I am planning a tour to "${dest.name}" (${dest.region}). Please share available group / private family packages, hotel options, visiting points itinerary, and quotation.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://api.whatsapp.com/send?phone=923205718477&text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const toggleExpand = (id: string) => {
    setExpandedDestId(expandedDestId === id ? null : id);
  };

  return (
    <section id="domestic-tours" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-3xl">
            {/* Top Brand Pill / Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
              <span className="text-sm">🇵🇰</span>
              <span>Discover Pakistan &bull; Domestic Tours</span>
            </div>

            <div className="flex flex-wrap items-baseline gap-3">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2C3E50] tracking-tight">
                Explore the Wonders of Pakistan
              </h2>
            </div>

            {/* Urdu Slogan */}
            <div className="font-urdu text-[#064E3B] text-xl sm:text-2xl font-bold mt-2">
              سوات، ناران و کاغان، ہنزہ، سکردو، چترال، مری اور آزاد کشمیر کی پرفضا وادیاں
            </div>

            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              Experience the majestic northern valleys with Nexo Travel &amp; Tours. From family-friendly luxury stays to thrilling high-altitude jeep safaris, enjoy comfortable private transport, verified hotels with generator backup &amp; hot water, and licensed local mountain drivers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenConsultationModal('Northern Pakistan Tour', 'Domestic Tour Package')}
              className="px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#00A8CC] hover:bg-[#0088A8] shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Customize Domestic Itinerary</span>
            </button>
            <a
              href="https://api.whatsapp.com/send?phone=923205718477&text=Hello%20Nexo%20Travel!%20I%20would%20like%20to%20inquire%20about%20Domestic%20Pakistan%20Tours."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20BD5A] shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Quick Desk</span>
            </a>
          </div>
        </div>

        {/* Feature Trust Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 text-xs">
          <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-[#2C3E50]">Chauffeur &amp; 4x4 Fleet</div>
              <div className="text-slate-500 text-[11px]">Prado, Grand Cabin &amp; Coasters</div>
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-50 text-[#00A8CC] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-[#2C3E50]">Family-Safe Hotels</div>
              <div className="text-slate-500 text-[11px]">Generator backup &amp; hot water</div>
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-[#2C3E50]">Expert Local Drivers</div>
              <div className="text-slate-500 text-[11px]">Licensed mountain route pros</div>
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#E67E22] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-[#2C3E50]">Tailor-Made Plans</div>
              <div className="text-slate-500 text-[11px]">From ISB, LHE, KHI, PEW</div>
            </div>
          </div>
        </div>

        {/* Region Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {provinces.map((prov) => {
            const isSelected = selectedProvince === prov.id;
            return (
              <button
                key={prov.id}
                onClick={() => setSelectedProvince(prov.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#064E3B] text-white shadow-sm ring-1 ring-[#064E3B]'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {prov.label}
              </button>
            );
          })}
        </div>

        {/* Domestic Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => {
            const isExpanded = expandedDestId === dest.id;

            return (
              <div
                key={dest.id}
                id={`domestic-dest-${dest.id}`}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Image Section */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1598894100588-46c59bcf72e1?auto=format&fit=crop&w=1200&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Province Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-[#064E3B] backdrop-blur-xs shadow-xs">
                      {dest.region}
                    </span>
                  </div>

                  {/* Altitude or Best Season tag */}
                  {dest.altitude && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-black/60 text-slate-200 backdrop-blur-xs">
                        {dest.altitude}
                      </span>
                    </div>
                  )}

                  {/* Destination Info on Image Bottom */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="font-urdu text-amber-300 text-sm sm:text-base font-bold drop-shadow-sm mb-0.5">
                      {dest.urduName}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight drop-shadow-md">
                      {dest.name}
                    </h3>
                    <p className="text-slate-200 text-xs mt-0.5 font-medium line-clamp-1 drop-shadow-xs">
                      {dest.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  {/* Short Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {dest.description}
                  </p>

                  {/* Metadata: Duration & Season */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#00A8CC]" />
                      <span>{dest.idealDuration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <Compass className="w-3.5 h-3.5 text-[#E67E22]" />
                      <span className="truncate max-w-[170px]">{dest.bestSeason.split('(')[0]}</span>
                    </div>
                  </div>

                  {/* Visiting Points Section */}
                  <div className="bg-slate-50/90 rounded-xl p-3.5 border border-slate-200/70">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#064E3B]">
                        <MapPin className="w-3.5 h-3.5 text-[#064E3B]" />
                        <span>Key Visiting Points:</span>
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500">
                        {dest.visitingPoints.length} Spots
                      </span>
                    </div>

                    {/* Visiting Points Grid/List */}
                    <div className="space-y-1.5 text-xs text-slate-700">
                      {(isExpanded ? dest.visitingPoints : dest.visitingPoints.slice(0, 4)).map((point, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-tight">{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expand / Collapse toggle for remaining spots */}
                    {dest.visitingPoints.length > 4 && (
                      <button
                        type="button"
                        onClick={() => toggleExpand(dest.id)}
                        className="mt-2 text-[11px] font-bold text-[#00A8CC] hover:text-[#0088A8] flex items-center gap-1 transition-colors"
                      >
                        {isExpanded ? (
                          <>
                            <span>Show fewer spots</span>
                            <ChevronUp className="w-3 h-3" />
                          </>
                        ) : (
                          <>
                            <span>+{dest.visitingPoints.length - 4} more visiting spots</span>
                            <ChevronDown className="w-3 h-3" />
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Recommended Transport */}
                  <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate"><strong>Transport:</strong> {dest.recommendedTransport}</span>
                  </div>

                  {/* Action Buttons: WhatsApp & Consultation */}
                  <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                    {/* Primary Direct WhatsApp Button as requested */}
                    <button
                      type="button"
                      onClick={() => handleWhatsAppInquiry(dest)}
                      className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                      <span>WhatsApp for Tour Details &amp; Quote</span>
                    </button>

                    {/* Secondary Plan Itinerary button */}
                    <button
                      type="button"
                      onClick={() => onOpenConsultationModal(dest.name, `Domestic Tour: ${dest.name}`)}
                      className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-[#2C3E50] bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Book Consultation / Custom Plan</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Group & Corporate Tours Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#064E3B] to-[#0A5C47] text-white p-6 sm:p-10 shadow-lg border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/15 text-emerald-200 text-xs font-bold uppercase tracking-wider">
              Family &bull; Honeymoon &bull; Corporate Groups
            </span>
            <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight">
              Looking for a Custom Pakistan Road Trip?
            </h3>
            <p className="text-emerald-100 text-xs sm:text-sm max-w-xl">
              We provide private chauffeured 4x4 Prado, Toyota Fortuner, Grand Cabin Hiace, and coaster buses with customized departure dates from Islamabad, Lahore, Karachi, or Peshawar.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="https://api.whatsapp.com/send?phone=923205718477&text=As-salamu%20alaykum!%20I%20want%20to%20plan%20a%20custom%20family%20road%20trip%20in%20northern%20Pakistan.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3 px-6 rounded-xl font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Inquire via WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenConsultationModal('Custom Pakistan Tour', 'Domestic Group / Family Tour')}
              className="w-full sm:w-auto py-3 px-6 rounded-xl font-bold text-xs sm:text-sm bg-white text-[#064E3B] hover:bg-slate-100 shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Build Custom Plan</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
