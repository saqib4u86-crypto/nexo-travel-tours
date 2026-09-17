import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
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
  Building2, 
  ExternalLink,
  ChevronRight,
  Shield,
  HelpCircle,
  Briefcase,
  Layers,
  MapPin
} from 'lucide-react';
import { Currency } from '../types';
import { CURRENCY_SYMBOLS } from '../data/mockData';

interface TurkeyVisaSectionProps {
  currency?: Currency;
  onOpenConsultationModal?: (dest?: string, service?: string) => void;
  isStandalonePage?: boolean;
}

export const TurkeyVisaSection: React.FC<TurkeyVisaSectionProps> = ({
  currency = 'PKR',
  onOpenConsultationModal,
  isStandalonePage = false,
}) => {
  // Lead Form State
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    holdsWesternVisa: 'No', // 'Yes' or 'No'
    employmentType: 'Salaried Professional',
    nearestCenter: 'Islamabad / Rawalpindi',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'compare' | 'documents' | 'process'>('compare');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.whatsapp.trim()) return;

    const message = `🇹🇷 *Turkey Visa Free File Evaluation Request*
━━━━━━━━━━━━━━━━━━━━━━
👤 *Full Name:* ${formData.name.trim()}
📱 *WhatsApp:* ${formData.whatsapp.trim()}
🛂 *Holds Valid US/UK/Schengen Visa?:* ${formData.holdsWesternVisa}
💼 *Employment Type:* ${formData.employmentType}
📍 *Nearest Anatolia Centre:* ${formData.nearestCenter}
━━━━━━━━━━━━━━━━━━━━━━
*Evaluation Goal:* Please review my document readiness (bank statement, employment proof, FRC) and evaluate whether I qualify for Turkey eVisa or standard Anatolia Sticker Visa file preparation.`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=923205718477&text=${encoded}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  const openDirectWhatsApp = (customText?: string) => {
    const msg = customText || "🇹🇷 Hi Nexo Travel, I need expert consultancy and file preparation for a Turkey Visa from Pakistan.";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=923205718477&text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="turkey-visa-section" className={`relative bg-slate-900 text-white ${isStandalonePage ? 'py-12 sm:py-20' : 'py-16 sm:py-24'} overflow-hidden`}>
      {/* Visual Background Highlights */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#E67E22_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute top-1/4 left-0 -ml-24 w-96 h-96 bg-[#E67E22]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 -mr-24 w-96 h-96 bg-[#00A8CC]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ============================================================ */}
        {/* 1. TRUST BADGE & REASSURANCE MARKERS */}
        {/* ============================================================ */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold backdrop-blur-md">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>Verified Travel &amp; Visa Consultancy</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold backdrop-blur-md">
            <Building2 className="w-4 h-4 text-amber-400" />
            <span>Anatolia Visa Application Centre Compliance Partner</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A8CC]/15 border border-[#00A8CC]/30 text-[#7de0f5] text-xs font-semibold backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-[#00A8CC]" />
            <span>Professional File Audit &amp; Anatolia Support</span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. HEADLINE (H1) & SUBHEAD */}
        {/* ============================================================ */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Turkey Visa Consultancy &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-[#00A8CC]">File Preparation</span> from Pakistan
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Complete file audits, bank statement evaluation, and Anatolia appointment support.
          </p>

          {/* Quick Pillar Highlights */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <div className="text-lg sm:text-xl font-extrabold text-amber-400">Multi-Point</div>
              <div className="text-xs text-slate-300 font-medium">Bank Statement Pre-Audit</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <div className="text-lg sm:text-xl font-extrabold text-[#00A8CC]">All Centers</div>
              <div className="text-xs text-slate-300 font-medium">Anatolia Submission Support</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <div className="text-lg sm:text-xl font-extrabold text-emerald-400">Express</div>
              <div className="text-xs text-slate-300 font-medium">eVisa for US/UK/Schengen</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <div className="text-lg sm:text-xl font-extrabold text-rose-400">Complete</div>
              <div className="text-xs text-slate-300 font-medium">Custom Cover Letter &amp; Voucher</div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. COMPARISON: TURKEY eVISA vs. TOURIST STICKER VISA */}
        {/* ============================================================ */}
        <div className="mb-14">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                Crucial Eligibility Check
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Turkey eVisa vs. Tourist Sticker Visa Comparison
              </h2>
            </div>
            <div className="hidden sm:block">
              <span className="text-xs text-slate-400">Which one do you qualify for?</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* OPTION A: TURKEY e-VISA (FOR US/UK/SCHENGEN HOLDERS) */}
            <div className="relative rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border-2 border-emerald-500/40 p-6 sm:p-8 backdrop-blur-md shadow-xl flex flex-col justify-between">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Fast 100% Online
                </span>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">Category A</div>
                <h3 className="text-2xl font-extrabold text-white">Turkey Electronic Visa (eVisa)</h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2">
                  Exclusively for Pakistani passport holders holding a <strong>valid, unexpired US, UK, Ireland, or Schengen Visa / Residence Permit</strong>.
                </p>

                <div className="mt-5 space-y-3">
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Processing Time:</strong> Instant to 24 Hours. No physical appearance.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Validity &amp; Stay:</strong> 180 Days Validity • Single Entry • 30 Days Maximum Stay.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Anatolia Center Visit:</strong> <span className="text-emerald-300 font-semibold">NOT REQUIRED</span> (Fully electronic).
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Supporting Requirement:</strong> Valid supporting visa/residence card must be valid on the date of entry into Turkey.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Nexo Service:</strong> Validity verification, error-free government portal filing, instant PDF delivery.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => openDirectWhatsApp("🇹🇷 Hi Nexo Travel, I hold a valid US/UK/Schengen visa and need a Turkey eVisa urgently.")}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Get Turkey eVisa via WhatsApp: 03205718477</span>
                </button>
              </div>
            </div>

            {/* OPTION B: TURKEY TOURIST STICKER VISA (STANDARD APPLICANTS) */}
            <div className="relative rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border-2 border-[#00A8CC]/40 p-6 sm:p-8 backdrop-blur-md shadow-xl flex flex-col justify-between">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full bg-[#00A8CC]/20 text-[#00A8CC] text-xs font-bold border border-[#00A8CC]/30 flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5" /> Anatolia Visa Center
                </span>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#00A8CC] mb-1">Category B</div>
                <h3 className="text-2xl font-extrabold text-white">Tourist Sticker Visa (Anatolia)</h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2">
                  For Pakistani passport holders <strong>without</strong> valid US/UK/Schengen visas. Requires formal embassy file preparation &amp; biometrics.
                </p>

                <div className="mt-5 space-y-3">
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Processing Time:</strong> 10 to 18 Working Days from appointment submission.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Validity &amp; Stay:</strong> Single or Multiple Entry as granted by the Turkish Embassy / Consulate.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Anatolia Center Visit:</strong> <span className="text-amber-300 font-semibold">REQUIRED</span> for biometrics and file drop-off.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Crucial Mandates:</strong> 6-month certified bank statement, employment/business proofs, NADRA FRC, travel plan.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Nexo Service:</strong> Complete file audit, cover letter drafting, bank balance calculation, appointment booking &amp; reservations.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    const formEl = document.getElementById('turkey-lead-form');
                    formEl?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-[#00A8CC] hover:bg-[#0088A8] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request Full File Preparation &amp; Audit</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* 4. DOCUMENT REQUIREMENTS & LEAD FORM SPLIT */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 7 COLS: DETAILED DOCUMENT REQUIREMENTS */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl bg-white/5 border border-white/15 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Strict Anatolia Application Standards</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Mandatory Document Requirements from Pakistan
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                The Turkish Embassy and Anatolia Visa Centre strictly evaluate each dossier. Nexo Travel audits each document prior to your appointment to eliminate any risk of rejection.
              </p>

              <div className="space-y-4">
                
                {/* 1. 6-Month Bank Statement */}
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-amber-400/40 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <span>6-Month Bank Statement &amp; Maintenance Certificate</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-semibold">Critical</span>
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        • Must be officially signed &amp; stamped on <strong>every page</strong> by the bank branch manager.<br />
                        • Must be accompanied by an official <strong>Account Maintenance Certificate</strong>.<br />
                        • Healthy closing balance matching your declared travel duration (typically PKR 700,000 to PKR 1.5M+ per applicant) with steady, natural transaction history.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Employment or Business Proof */}
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-[#00A8CC]/40 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#00A8CC]/20 text-[#00A8CC] flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <span>Employment or Business Proof (Income Verification)</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#00A8CC]/20 text-[#00A8CC] font-semibold">Mandatory</span>
                      </h4>
                      <div className="text-xs text-slate-300 mt-1 leading-relaxed space-y-1">
                        <div><strong>For Salaried Employees:</strong> Employment letter / NOC on company letterhead stating designation, joining date, salary, and sanctioned leave dates; last 3 months salary slips; employee ID card copy.</div>
                        <div><strong>For Business Owners:</strong> FBR NTN certificate, last 2-3 years income tax returns, company letterhead, Chamber of Commerce membership certificate (if applicable), and company bank statement.</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Pakistani CNIC */}
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-emerald-400/40 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Valid Pakistani CNIC (Smart Card)
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Clear color scan of both front and back sides of valid CNIC or NICOP.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4. Family Registration Certificate (FRC) */}
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-cyan-400/40 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <span>FRC (Family Registration Certificate) from NADRA</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 font-semibold">For All Applicants</span>
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        • FRC by birth (showing parents and siblings) if traveling single.<br />
                        • FRC by marriage (showing spouse and children) if traveling as a family, plus Marriage Registration Certificate (MRC).
                      </p>
                    </div>
                  </div>
                </div>

                {/* 5. Passport & Biometric Photos */}
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-red-400/40 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                      5
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Valid Passport &amp; Biometric Photographs
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        • Original Passport valid for minimum 6 months with at least 2 blank pages + all previous physical passports.<br />
                        • 2 recent biometric photographs (5cm x 5cm on white background, 80% face coverage, matte paper).
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* What Nexo Travel Prepares for You */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
                  What Nexo Travel Customizes &amp; Includes in Your File:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Personalized Embassy Cover Letter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Day-by-Day Detailed Turkish Travel Itinerary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Verified Hotel &amp; Flight Reservations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Turkish Approved Travel Medical Insurance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Anatolia Center Slot Appointment Booking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Pre-Submission Mock Interview Prep</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT 5 COLS: LEAD CAPTURE FORM WITH US/UK/SCHENGEN SELECTOR */}
          <div className="lg:col-span-5">
            <div id="turkey-lead-form" className="sticky top-24 rounded-2xl bg-gradient-to-b from-[#1C2C40] to-[#111C2B] border border-amber-500/30 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Free Turkey Visa File Evaluation</h3>
                  <p className="text-xs text-slate-300">Get a professional assessment before submitting files</p>
                </div>
              </div>

              {/* Form Body */}
              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-400" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Mehmood"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-900/80 border border-slate-700 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all"
                  />
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp Number (For Evaluation Report) *</span>
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

                {/* Crucial Question: Do you hold US/UK/Schengen visa? [Yes/No] */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-amber-500/40">
                  <label className="block text-xs font-bold text-white mb-2 flex items-center justify-between">
                    <span>Do you hold US/UK/Schengen visa? *</span>
                    <span className="text-[10px] text-amber-300 font-semibold">Key Decider</span>
                  </label>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, holdsWesternVisa: 'Yes' })}
                      className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
                        formData.holdsWesternVisa === 'Yes'
                          ? 'bg-emerald-600 text-white border-emerald-400 shadow-md'
                          : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Yes (Qualify for eVisa)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, holdsWesternVisa: 'No' })}
                      className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
                        formData.holdsWesternVisa === 'No'
                          ? 'bg-[#00A8CC] text-white border-cyan-300 shadow-md'
                          : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                      }`}
                    >
                      <span>No (Need Sticker Visa)</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2">
                    {formData.holdsWesternVisa === 'Yes' 
                      ? '⚡ Great news! You can get an instant 100% online Turkish eVisa through Nexo.'
                      : '📁 We will prepare your complete bank audit, cover letter, and Anatolia file.'}
                  </p>
                </div>

                {/* Employment Status */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                    <span>Your Employment / Profession</span>
                  </label>
                  <select
                    value={formData.employmentType}
                    onChange={(e) => setFormData({ ...formData, employmentType: e.target.value })}
                    className="w-full bg-slate-900/80 border border-slate-700 focus:border-amber-400 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none cursor-pointer"
                  >
                    <option value="Salaried Professional">Salaried Professional / Govt / Corporate</option>
                    <option value="Business Owner / Trader">Business Owner / Company Director</option>
                    <option value="Doctor / Engineer / Lawyer">Doctor / Engineer / Lawyer</option>
                    <option value="Freelancer / IT Professional">Freelancer / Remote IT Consultant</option>
                    <option value="Family / Dependent / Student">Family Member / Student / Homemaker</option>
                  </select>
                </div>

                {/* Nearest Anatolia Center */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>Nearest Anatolia Visa Centre</span>
                  </label>
                  <select
                    value={formData.nearestCenter}
                    onChange={(e) => setFormData({ ...formData, nearestCenter: e.target.value })}
                    className="w-full bg-slate-900/80 border border-slate-700 focus:border-amber-400 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none cursor-pointer"
                  >
                    <option value="Islamabad / Rawalpindi">Islamabad / Rawalpindi Center</option>
                    <option value="Lahore">Lahore Center</option>
                    <option value="Karachi">Karachi Center</option>
                    <option value="Peshawar">Peshawar Center</option>
                    <option value="Sialkot / Gujranwala">Sialkot / Gujranwala Center</option>
                    <option value="Faisalabad">Faisalabad Center</option>
                  </select>
                </div>

                {/* Primary CTA Button */}
                <button
                  type="submit"
                  id="btn-turkey-free-evaluation"
                  className="w-full mt-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-[#E67E22] hover:from-amber-400 hover:to-[#d35400] text-white font-bold text-sm shadow-xl shadow-amber-950/40 transition-all flex items-center justify-center gap-2 transform active:scale-98"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Free Evaluation</span>
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  🔒 Strictly confidential. Complimentary pre-audit evaluation.
                </p>
              </form>

              {/* Direct WhatsApp Option */}
              <div className="my-5 flex items-center gap-3">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-[11px] text-slate-400 uppercase font-semibold">Or Chat Instantly</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Direct WhatsApp Button linking to 03205718477 */}
              <a
                href="https://api.whatsapp.com/send?phone=923205718477&text=Hello%20Nexo%20Travel,%20I%20want%20to%20get%20my%20Turkey%20Visa%20file%20evaluated."
                target="_blank"
                rel="noopener noreferrer"
                id="turkey-direct-whatsapp-btn"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
              >
                <PhoneCall className="w-4 h-4" />
                <span>WhatsApp Turkey Desk: <strong>03205718477</strong></span>
                <ExternalLink className="w-3.5 h-3.5 text-white/80" />
              </a>

              {/* Verified Travel Consultancy Assurance */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-start gap-2.5 text-[11px] text-slate-300">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Verified Travel Consultancy:</strong>
                  <div>Professional travel advisory &amp; file preparation ensuring embassy-grade compliance for all Pakistani travelers.</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
