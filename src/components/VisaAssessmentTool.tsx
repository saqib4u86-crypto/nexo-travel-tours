import React, { useState } from 'react';
import { Currency, PageView } from '../types';
import { DESTINATIONS, CURRENCY_SYMBOLS } from '../data/mockData';
import { 
  ShieldCheck, 
  FileCheck2, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  HelpCircle, 
  ArrowRight, 
  AlertCircle,
  Sparkles,
  Building2,
  PlaneTakeoff,
  Award
} from 'lucide-react';

interface VisaAssessmentToolProps {
  currency: Currency;
  onNavigate: (page: PageView) => void;
  onOpenConsultationModal: (destination?: string, service?: string) => void;
}

export const VisaAssessmentTool: React.FC<VisaAssessmentToolProps> = ({
  currency,
  onNavigate,
  onOpenConsultationModal
}) => {
  const [nationality, setNationality] = useState<string>('Pakistani');
  const [selectedDestId, setSelectedDestId] = useState<string>('azerbaijan-baku');
  const [purpose, setPurpose] = useState<string>('Tourism & Sightseeing');
  const [hasPreviousTravel, setHasPreviousTravel] = useState<boolean>(true);
  const [employmentStatus, setEmploymentStatus] = useState<string>('Salaried Professional');

  const selectedDestination = DESTINATIONS.find(d => d.id === selectedDestId) || DESTINATIONS[0];
  const currencySymbol = CURRENCY_SYMBOLS[currency] || '$';
  const visaFee = selectedDestination.visaFeeEstimate[currency].toLocaleString();

  return (
    <section id="visa-guide-section" className="py-16 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A8CC]/10 text-[#00A8CC] text-xs font-bold uppercase tracking-wider mb-2">
            <FileCheck2 className="w-3.5 h-3.5" />
            Digital Visa Requirement Engine
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2C3E50] tracking-tight">
            Instant Visa Eligibility &amp; Checklist Calculator
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Select your nationality, destination, and travel purpose to view exact documents, turnaround times, and filing guidelines.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200 space-y-4">
            <h3 className="text-base font-bold text-[#2C3E50] flex items-center gap-2 pb-2 border-b border-slate-100">
              <ShieldCheck className="w-4 h-4 text-[#00A8CC]" />
              <span>1. Enter Your Travel Profile</span>
            </h3>

            {/* Passport Nationality */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">
                Passport Holder Nationality
              </label>
              <select
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm font-semibold text-[#2C3E50] focus:ring-2 focus:ring-[#00A8CC] focus:outline-none"
              >
                <option value="Pakistani">Pakistan (Green Passport)</option>
                <option value="UAE Resident">UAE / GCC Resident</option>
                <option value="British">British Citizen / UK BRP</option>
                <option value="American">United States (USA)</option>
                <option value="Canadian">Canada</option>
                <option value="Other">Other International Passport</option>
              </select>
            </div>

            {/* Destination Country */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">
                Target Destination Country
              </label>
              <select
                value={selectedDestId}
                onChange={(e) => setSelectedDestId(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm font-semibold text-[#2C3E50] focus:ring-2 focus:ring-[#00A8CC] focus:outline-none"
              >
                {DESTINATIONS.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.country} ({d.visaType})
                  </option>
                ))}
              </select>
            </div>

            {/* Purpose of Visit */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">
                Purpose of Travel
              </label>
              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm font-semibold text-[#2C3E50] focus:ring-2 focus:ring-[#00A8CC] focus:outline-none"
              >
                <option value="Tourism & Sightseeing">Tourist / Leisure Vacation</option>
                <option value="Business & Conferences">Business Meetings / Trade Expo</option>
                <option value="Umrah & Ziyarat">Umrah / Spiritual Pilgrimage</option>
                <option value="Family Visit">Visiting Family / Relatives</option>
                <option value="Short Course / Training">Short Training / Study Visa</option>
              </select>
            </div>

            {/* Employment Status */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">
                Applicant Employment Status
              </label>
              <select
                value={employmentStatus}
                onChange={(e) => setEmploymentStatus(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm font-semibold text-[#2C3E50] focus:ring-2 focus:ring-[#00A8CC] focus:outline-none"
              >
                <option value="Salaried Professional">Salaried Employee (Govt / Private)</option>
                <option value="Business Owner / Filer">Business Owner / Company Director</option>
                <option value="Freelancer / Consultant">Freelancer / Self-Employed</option>
                <option value="Student">Student (Sponsored by Parents)</option>
                <option value="Housewife / Dependent">Housewife / Dependent</option>
              </select>
            </div>

            {/* Travel History Checkbox */}
            <div className="pt-2">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700 select-none">
                <input
                  type="checkbox"
                  checked={hasPreviousTravel}
                  onChange={(e) => setHasPreviousTravel(e.target.checked)}
                  className="w-4 h-4 text-[#00A8CC] rounded focus:ring-[#00A8CC] border-slate-300"
                />
                <span>I have valid prior international travel history stamps</span>
              </label>
            </div>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-[11px] text-[#2C3E50] flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-[#E67E22] shrink-0 mt-0.5" />
              <span>
                Nexo Travel provides <strong>meticulous document pre-screening and embassy compliance audits</strong> to maximize your visa approval success.
              </span>
            </div>
          </div>

          {/* Right Column: Assessment Result Dashboard */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
              <div>
                <span className="text-xs font-bold text-[#E67E22] uppercase tracking-wider">
                  Assessment Summary
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#2C3E50]">
                  {selectedDestination.country} Visa for {nationality} Citizen
                </h3>
              </div>

              <div className="px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold flex items-center gap-1.5 self-start sm:self-auto">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Eligibility: Very High</span>
              </div>
            </div>

            {/* Key Metrics Bento */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[11px] text-slate-400 font-medium block">Visa Classification</span>
                <span className="font-extrabold text-sm text-[#00A8CC] block mt-0.5">
                  {selectedDestination.visaType}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[11px] text-slate-400 font-medium block">Standard Turnaround</span>
                <span className="font-extrabold text-sm text-[#2C3E50] block mt-0.5">
                  {selectedDestination.processingTime.split('(')[0]}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[11px] text-slate-400 font-medium block">Advisory &amp; Support</span>
                <span className="font-extrabold text-sm text-[#00A8CC] block mt-0.5">
                  Pre-Check &amp; Filing
                </span>
              </div>
            </div>

            {/* Document Checklist for this combo */}
            <div>
              <h4 className="text-xs font-extrabold text-[#2C3E50] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <FileCheck2 className="w-4 h-4 text-[#00A8CC]" />
                Required Documents for {selectedDestination.country}:
              </h4>
              <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                {selectedDestination.documentsRequired.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </div>
                ))}
                {employmentStatus === 'Salaried Professional' && (
                  <div className="flex items-start gap-2 text-slate-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>Employment letter / NOC on company letterhead with salary slips (last 3 months)</span>
                  </div>
                )}
                {employmentStatus === 'Business Owner / Filer' && (
                  <div className="flex items-start gap-2 text-slate-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>Business NTN certificate, company letterhead &amp; last 2 years tax returns (FBR)</span>
                  </div>
                )}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => onOpenConsultationModal(selectedDestination.country, 'Tourist Visa')}
                className="flex-1 py-3 px-5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#00A8CC] hover:bg-[#0088A8] shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <PlaneTakeoff className="w-4 h-4" />
                <span>Submit Profile for Free Expert Verification</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('packages')}
                className="py-3 px-4 rounded-xl text-xs font-bold text-[#2C3E50] bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>View {selectedDestination.country} Packages</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00A8CC]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
