import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  FileText, 
  Send, 
  Sparkles, 
  AlertCircle, 
  Award, 
  PhoneCall, 
  Calendar, 
  User, 
  Check, 
  Plane, 
  ExternalLink,
  ChevronRight,
  Shield,
  BadgeCheck
} from 'lucide-react';
import { Currency } from '../types';
import { CURRENCY_SYMBOLS } from '../data/mockData';

interface DubaiVisaSectionProps {
  currency?: Currency;
  onOpenConsultationModal?: (dest?: string, service?: string) => void;
  isStandalonePage?: boolean;
}

export const DubaiVisaSection: React.FC<DubaiVisaSectionProps> = ({
  currency = 'PKR',
  onOpenConsultationModal,
  isStandalonePage = false,
}) => {
  // Lead Form State
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    travelDate: '',
    visaType: '30-Day Tourist Visa',
    travelers: '1 Traveler'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'both' | '30-day' | '60-day'>('both');

  // Pricing Matrix with transparent rates
  const pricingData = {
    '30-day': {
      USD: 105,
      PKR: 29500,
      AED: 385,
      EUR: 98
    },
    '60-day': {
      USD: 185,
      PKR: 52500,
      AED: 680,
      EUR: 172
    }
  };

  const getPrice = (type: '30-day' | '60-day') => {
    const symbol = CURRENCY_SYMBOLS[currency] || '₨';
    const amount = pricingData[type][currency] || pricingData[type]['PKR'];
    return `${symbol}${amount.toLocaleString()}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.whatsapp.trim()) return;

    const message = `🇦🇪 *Dubai Visa Application / Checklist Request*
━━━━━━━━━━━━━━━━━━━━━━
👤 *Full Name:* ${formData.name.trim()}
📱 *WhatsApp:* ${formData.whatsapp.trim()}
📅 *Planned Travel Date:* ${formData.travelDate || 'Flexible / Next Month'}
🎫 *Visa Category:* ${formData.visaType}
👥 *Travelers:* ${formData.travelers}
━━━━━━━━━━━━━━━━━━━━━━
*Request:* Please provide the complete document checklist, requirements review, and expedited processing for my Dubai visit visa.`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=923205718477&text=${encoded}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  const openDirectWhatsApp = (customText?: string) => {
    const msg = customText || "🇦🇪 Hi Nexo Travel, I need urgent assistance for a Dubai Visit Visa (30/60 Days) from Pakistan.";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=923205718477&text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="dubai-visa-section" className={`relative bg-gradient-to-b from-slate-900 via-[#132338] to-slate-900 text-white ${isStandalonePage ? 'py-12 sm:py-20' : 'py-16 sm:py-24'} overflow-hidden`}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#00A8CC_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#00A8CC]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-[#C59B27]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================ */}
        {/* 1. TRUST BADGE & REASSURANCE HEADER PILL */}
        {/* ============================================================ */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold backdrop-blur-md">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>Verified International Travel Consultancy</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A8CC]/15 border border-[#00A8CC]/30 text-[#7de0f5] text-xs font-semibold backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-[#00A8CC]" />
            <span>Official GDRFA & ICP Verified UAE Processing</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C59B27]/15 border border-[#C59B27]/30 text-amber-300 text-xs font-semibold backdrop-blur-md">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Fast 24–72 Hour Issuance</span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. HEADLINE (H1) & SUBHEAD */}
        {/* ============================================================ */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Fast, Reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8CC] via-cyan-300 to-amber-300">Dubai Visit Visas</span> for Pakistani Citizens
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Multi-point document pre-check, fast 24–72 hour issuance, and dedicated consultant support.
          </p>

          {/* Genuine Quality & Value Highlights Strip */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <div className="text-lg sm:text-xl font-extrabold text-amber-400">Pre-Audit</div>
              <div className="text-xs text-slate-300 font-medium">Multi-Point Document Review</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <div className="text-lg sm:text-xl font-extrabold text-[#00A8CC]">24–72 Hrs</div>
              <div className="text-xs text-slate-300 font-medium">Express Portal Turnaround</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <div className="text-lg sm:text-xl font-extrabold text-emerald-400">Official</div>
              <div className="text-xs text-slate-300 font-medium">GDRFA &amp; ICP Verified</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <div className="text-lg sm:text-xl font-extrabold text-cyan-300">1-on-1</div>
              <div className="text-xs text-slate-300 font-medium">Dedicated Case Counselor</div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. MAIN CONTENT GRID: VISA CARDS & LEAD CAPTURE FORM */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 7 COLS: 30-DAY & 60-DAY VISA CARDS */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 30-DAY TOURIST VISA CARD */}
            <div className="relative rounded-2xl bg-white/5 border border-white/15 p-6 sm:p-8 backdrop-blur-md shadow-2xl hover:border-[#00A8CC]/50 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A8CC]/20 text-[#00A8CC] text-xs font-bold mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Most Popular For Tourism & Business</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">30-Day Dubai Tourist Visa</h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Valid for 60 days from issuance • 30 days single entry stay in the UAE
                  </p>
                </div>
                
                <div className="text-left sm:text-right shrink-0">
                  <span className="text-xs text-cyan-300 block font-bold uppercase tracking-wider">Fast-Track Permit</span>
                  <div className="text-lg sm:text-xl font-extrabold text-white">
                    Inquire on WhatsApp
                  </div>
                  <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1 sm:justify-end mt-0.5">
                    <Check className="w-3 h-3" /> Includes UAE Health Insurance
                  </span>
                </div>
              </div>

              {/* Inclusions */}
              <div className="mt-5">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                  What’s Included:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-200">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
                    <span>Official UAE E-Visa with verifiable QR code</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
                    <span>Mandatory UAE Medical & COVID travel insurance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
                    <span>100% Document pre-audit & security screening</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
                    <span>Airport OK-to-Board (OTB) guidance if requested</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
                    <span>24–72 hour issuance via express immigration queue</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
                    <span>Extendable inside UAE without exiting the country</span>
                  </div>
                </div>
              </div>

              {/* Document Checklist (Passport, CNIC, Photo) */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Required Documents (Simple 3-Item Checklist):</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <span className="font-bold text-white block">1. Valid Passport</span>
                    <span className="text-[11px] text-slate-300">Color scan of first 2 pages (min. 6 months validity)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <span className="font-bold text-white block">2. Pakistani CNIC</span>
                    <span className="text-[11px] text-slate-300">Clear front and back scan of CNIC / Smart Card</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <span className="font-bold text-white block">3. Passport Photo</span>
                    <span className="text-[11px] text-slate-300">White background recent passport-sized studio photo</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => openDirectWhatsApp("🇦🇪 Hi Nexo Travel, I would like to apply for the 30-Day Dubai Visit Visa. Please check my documents.")}
                  className="w-full sm:w-auto flex-1 py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 transition-all transform active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Apply via WhatsApp: 03205718477</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, visaType: '30-Day Tourist Visa' }));
                    const formEl = document.getElementById('dubai-lead-form');
                    formEl?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/15 transition-colors"
                >
                  Fill Instant Lead Form
                </button>
              </div>
            </div>

            {/* 60-DAY TOURIST VISA CARD */}
            <div className="relative rounded-2xl bg-white/5 border border-amber-500/25 p-6 sm:p-8 backdrop-blur-md shadow-2xl hover:border-amber-400/50 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold mb-2">
                    <Award className="w-3.5 h-3.5" />
                    <span>Best Value For Family Visits & Job Exploration</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">60-Day Dubai Tourist Visa</h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Valid for 60 days from issuance • 60 full days stay across all 7 Emirates
                  </p>
                </div>
                
                <div className="text-left sm:text-right shrink-0">
                  <span className="text-xs text-amber-300 block font-bold uppercase tracking-wider">Extended Stay</span>
                  <div className="text-lg sm:text-xl font-extrabold text-amber-300">
                    Inquire on WhatsApp
                  </div>
                  <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1 sm:justify-end mt-0.5">
                    <Check className="w-3 h-3" /> Extended Medical Insurance Included
                  </span>
                </div>
              </div>

              {/* Inclusions */}
              <div className="mt-5">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                  What’s Included:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-200">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Comprehensive 60-Day UAE Tourist eVisa document</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Extended UAE health & emergency medical coverage</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Pre-submission profile audit by senior immigration expert</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Family & group dossier discount support</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Fast 24 to 72 hour turnaround with live tracking updates</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>24/7 WhatsApp emergency support line</span>
                  </div>
                </div>
              </div>

              {/* Document Checklist (Passport, CNIC, Photo) */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Required Documents (Simple 3-Item Checklist):</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <span className="font-bold text-white block">1. Valid Passport</span>
                    <span className="text-[11px] text-slate-300">Color scan (first 2 pages, minimum 6 months validity)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <span className="font-bold text-white block">2. Pakistani CNIC</span>
                    <span className="text-[11px] text-slate-300">Front & back clear copy of CNIC or Smart Card</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <span className="font-bold text-white block">3. Passport Photo</span>
                    <span className="text-[11px] text-slate-300">Clear studio photograph with white background</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => openDirectWhatsApp("🇦🇪 Hi Nexo Travel, I would like to apply for the 60-Day Dubai Visit Visa. Please provide the details.")}
                  className="w-full sm:w-auto flex-1 py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 transition-all transform active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Apply via WhatsApp: 03205718477</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, visaType: '60-Day Tourist Visa' }));
                    const formEl = document.getElementById('dubai-lead-form');
                    formEl?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/15 transition-colors"
                >
                  Fill Instant Lead Form
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT 5 COLS: HIGH-CONVERTING LEAD FORM & DIRECT WHATSAPP BUTTON */}
          <div className="lg:col-span-5">
            <div id="dubai-lead-form" className="sticky top-24 rounded-2xl bg-gradient-to-b from-[#182C44] to-[#0E1A29] border border-[#00A8CC]/30 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              
              {/* Form Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#00A8CC]/20 border border-[#00A8CC]/40 flex items-center justify-center text-[#00A8CC]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Instant Dubai Visa Request</h3>
                  <p className="text-xs text-slate-300">Receive verified checklist & quote on WhatsApp</p>
                </div>
              </div>

              {/* Form Body */}
              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#00A8CC]" />
                    <span>Your Full Name (As in Passport) *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Muhammad Ali"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-900/80 border border-slate-700 focus:border-[#00A8CC] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#00A8CC] transition-all"
                  />
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp Number (For Checklist & PDF) *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 03205718477 or +92 320 5718477"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full bg-slate-900/80 border border-slate-700 focus:border-[#25D366] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#25D366] transition-all"
                  />
                </div>

                {/* Travel Date */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Planned Travel Date *</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full bg-slate-900/80 border border-slate-700 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all cursor-pointer"
                  />
                </div>

                {/* Visa Choice & Travelers */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                      Visa Duration
                    </label>
                    <select
                      value={formData.visaType}
                      onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                      className="w-full bg-slate-900/80 border border-slate-700 focus:border-[#00A8CC] rounded-xl px-3 py-2 text-xs text-white focus:outline-none cursor-pointer"
                    >
                      <option value="30-Day Tourist Visa">30-Day Visa</option>
                      <option value="60-Day Tourist Visa">60-Day Visa</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                      Travelers
                    </label>
                    <select
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      className="w-full bg-slate-900/80 border border-slate-700 focus:border-[#00A8CC] rounded-xl px-3 py-2 text-xs text-white focus:outline-none cursor-pointer"
                    >
                      <option value="1 Traveler">1 Traveler</option>
                      <option value="2 Travelers">2 Travelers</option>
                      <option value="3-4 Family Members">3–4 (Family)</option>
                      <option value="5+ Group">5+ Group</option>
                    </select>
                  </div>
                </div>

                {/* Primary CTA Button */}
                <button
                  type="submit"
                  id="btn-get-dubai-checklist"
                  className="w-full mt-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-emerald-600 hover:from-[#20bd5a] hover:to-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-950/40 transition-all flex items-center justify-center gap-2 transform active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Get Visa Checklist via WhatsApp</span>
                </button>

                {/* Form Reassurance Subtext */}
                <p className="text-[11px] text-center text-slate-400">
                  🔒 No spam. Instant direct WhatsApp connection with our visa officer.
                </p>
              </form>

              {/* Success Notification if triggered */}
              {formSubmitted && (
                <div className="mt-4 p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-xs">
                  <div className="flex items-center gap-2 font-bold text-white mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Connected!</span>
                  </div>
                  <p>
                    If WhatsApp didn’t open automatically, click below to chat with our desk:
                  </p>
                  <button
                    onClick={() => openDirectWhatsApp()}
                    className="mt-2 text-xs font-bold text-white underline hover:text-emerald-300 flex items-center gap-1"
                  >
                    <span>Click here to open WhatsApp directly</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              )}

              {/* Divider */}
              <div className="my-5 flex items-center gap-3">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-[11px] text-slate-400 uppercase font-semibold">Or Call / WhatsApp Direct</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Direct WhatsApp Button linking to 03205718477 */}
              <a
                href="https://api.whatsapp.com/send?phone=923205718477&text=Hello%20Nexo%20Travel,%20I%20need%20urgent%20Dubai%20Visit%20Visa%20assistance."
                target="_blank"
                rel="noopener noreferrer"
                id="dubai-direct-whatsapp-btn"
                className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-xs flex items-center justify-center gap-2.5 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span>WhatsApp Helpline: <strong>03205718477</strong></span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              {/* Landline Support */}
              <div className="mt-3 text-center text-xs text-slate-400">
                Landline Phone: <a href="tel:+92516125268" className="text-slate-200 font-semibold hover:text-[#00A8CC]">+92 51 6125268</a>
              </div>

              {/* Verified Travel Consultancy Assurance */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-start gap-2.5 text-[11px] text-slate-300">
                <Shield className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Verified Travel Consultancy:</strong>
                  <div>Professional travel advisory &amp; document preparation services. Corporate office located in Rawalpindi / Islamabad.</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* 4. 4-STEP STREAMLINED APPLICATION PROCESS */}
        {/* ============================================================ */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              How Your Dubai Visa Is Processed (Simple 4 Steps)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              No embassy appearance required. 100% electronic clearance from Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 relative">
              <div className="w-8 h-8 rounded-lg bg-[#00A8CC] text-white font-black text-sm flex items-center justify-center mb-3">
                1
              </div>
              <h4 className="font-bold text-sm text-white">Send 3 Documents</h4>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Take photos or scans of your Passport, CNIC, and Photo and send them to our WhatsApp: <strong className="text-white">03205718477</strong>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 relative">
              <div className="w-8 h-8 rounded-lg bg-[#C59B27] text-white font-black text-sm flex items-center justify-center mb-3">
                2
              </div>
              <h4 className="font-bold text-sm text-white">30-Min Document Pre-Check</h4>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Our licensed consultants review your papers against UAE immigration rules to maximize approval prospects.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 relative">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white font-black text-sm flex items-center justify-center mb-3">
                3
              </div>
              <h4 className="font-bold text-sm text-white">24–72 Hour Issuance</h4>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Application is logged into direct GDRFA / ICP UAE government systems with health insurance included.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 relative">
              <div className="w-8 h-8 rounded-lg bg-[#25D366] text-white font-black text-sm flex items-center justify-center mb-3">
                4
              </div>
              <h4 className="font-bold text-sm text-white">Receive PDF eVisa</h4>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                We deliver your verified PDF e-Visa with official QR code directly to your WhatsApp and email.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
