import React, { useEffect } from 'react';
import { PageView } from '../types';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  FileText, 
  Database, 
  UserCheck, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle,
  Share2,
  Printer
} from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (page: PageView) => void;
  onOpenConsultationModal?: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
  onNavigate,
  onOpenConsultationModal,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const sections = [
    {
      id: 'introduction',
      title: '1. Introduction & Overview',
      icon: <ShieldCheck className="w-5 h-5 text-[#00A8CC]" />,
      content: (
        <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
          <p>
            Welcome to <strong>NEXO TRAVEL &amp; TOURS</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). 
            We respect your privacy and are committed to protecting the personal and confidential information you share with us.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, process, and safeguard your personal data when you visit our website, 
            utilize our visa consultation services, book airline flights, reserve holiday tour packages, or communicate with our travel 
            counselors via WhatsApp, telephone, or email.
          </p>
          <p>
            By accessing our services or submitting documents for visa assessment and travel arrangements, you acknowledge and agree to 
            the practices described in this policy.
          </p>
        </div>
      )
    },
    {
      id: 'information-collected',
      title: '2. Information We Collect',
      icon: <Database className="w-5 h-5 text-[#E67E22]" />,
      content: (
        <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
          <p>
            To successfully process international visa applications, hotel confirmations, and airline ticketing, we collect only 
            strictly necessary information requested by relevant foreign embassies, consulates, immigration departments, and airlines:
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 mt-2">
            <li className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Passport &amp; Identity Data:</strong> Full name, passport number, expiry date, date of birth, nationality, and National Identity Card (CNIC) copy.</span>
            </li>
            <li className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Contact Information:</strong> Phone number, WhatsApp contact number, email address, and residential address.</span>
            </li>
            <li className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Embassy File Supporting Docs:</strong> Employment letters, business registration, tax returns, and bank statements required specifically for embassy financial appraisal.</span>
            </li>
            <li className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Travel Preferences:</strong> Flight dates, preferred airlines, hotel categories, dietary restrictions, and co-traveler / family details.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'how-we-use-data',
      title: '3. How We Use Your Information',
      icon: <UserCheck className="w-5 h-5 text-[#00A8CC]" />,
      content: (
        <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
          <p>We process your information solely for lawful, travel-related operations, including:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-sm">
            <li>Reviewing and preparing visa files compliant with foreign embassy guidelines (UAE GDRFA/ICP, Turkish consular systems, Schengen VFS/Gerry&apos;s, Azerbaijan ASAN Visa, etc.).</li>
            <li>Issuing confirmed airline reservations (PNRs), e-tickets, and verified hotel vouchers.</li>
            <li>Providing 1-on-1 consular advisory, document checklists, and application status updates via WhatsApp and phone.</li>
            <li>Drafting personalized visa cover letters, travel itineraries, and tourist declarations based on your trip profile.</li>
            <li>Fulfilling legal and regulatory travel compliance obligations.</li>
          </ul>
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span><strong>Zero Commercial Sale:</strong> We never sell, rent, or trade your personal or financial data to third-party telemarketers or advertisers under any circumstances.</span>
          </div>
        </div>
      )
    },
    {
      id: 'data-security',
      title: '4. Data Security & Confidentiality',
      icon: <Lock className="w-5 h-5 text-[#E67E22]" />,
      content: (
        <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
          <p>
            We enforce strict physical, technical, and organizational security protocols to protect your sensitive records from unauthorized access, loss, or disclosure:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Encrypted Digital Communications:</strong> Passport scans and financial files transferred via our secure channels and WhatsApp business desks are stored in access-restricted folders.</li>
            <li><strong>Confidentiality Agreements:</strong> Every Nexo travel consultant and case officer operates under strict non-disclosure obligations.</li>
            <li><strong>Paperless Document Disposal:</strong> Physical photocopies used for appointment filing or submission packs are shredded once your case file completes processing.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'third-party-sharing',
      title: '5. Third-Party Sharing & Embassy Disclosures',
      icon: <Eye className="w-5 h-5 text-[#00A8CC]" />,
      content: (
        <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
          <p>
            To fulfill your booked services, your personal information is disclosed strictly to authorized travel entities:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Sovereign Embassies, Consulates &amp; Visa Centers:</strong> Foreign ministries of foreign affairs, embassy visa sections, and authorized submission centers (such as Gerry&apos;s, VFS Global, BLS International).</li>
            <li><strong>Airlines &amp; Global Distribution Systems (GDS):</strong> Certified airlines (e.g., Emirates, Qatar Airways, Turkish Airlines, FlyDubai) to issue your ticket and seat reservations.</li>
            <li><strong>Vetted Ground Handlers &amp; Hoteliers:</strong> Destination management partners for transfer arrangements and confirmed hotel room allocations.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'data-retention',
      title: '6. Retention & Client Rights',
      icon: <FileText className="w-5 h-5 text-[#E67E22]" />,
      content: (
        <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
          <p>
            We retain your travel records only as long as necessary to complete your visa processing, travel itinerary, accounting reconciliation, or as mandated by applicable travel trade regulations.
          </p>
          <p>
            You retain full rights to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Request a copy of your personal data held in our active files.</li>
            <li>Request prompt correction of any inaccurate or outdated information.</li>
            <li>Request permanent deletion of submitted supplementary documents (such as bank records or employment slips) once your visa outcome is finalized.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'contact-officer',
      title: '7. Contacting Our Data Privacy Desk',
      icon: <Mail className="w-5 h-5 text-[#00A8CC]" />,
      content: (
        <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
          <p>
            If you have questions, feedback, or requests regarding this Privacy Policy or how your travel documentation is handled, please reach out to our team:
          </p>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <MapPin className="w-4 h-4 text-[#00A8CC] shrink-0" />
              <span><strong>Head Office:</strong> Office #4, Ground Floor, Beverly Centre, Blue Area, Islamabad, Pakistan</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Phone className="w-4 h-4 text-[#00A8CC] shrink-0" />
              <span><strong>Direct Phone &amp; WhatsApp:</strong> +92 300 000 0000 / +92 51 111 222 333</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Mail className="w-4 h-4 text-[#00A8CC] shrink-0" />
              <span><strong>Email:</strong> info@nexotravel.com / privacy@nexotravel.com</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-1.5 text-[#00A8CC] hover:underline font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Home
            </button>
            <span>/</span>
            <span className="text-slate-700 font-medium">Privacy Policy</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('terms-of-service')}
              className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#00A8CC] hover:border-[#00A8CC] transition-colors font-medium text-xs"
            >
              View Terms of Service
            </button>
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
              title="Print Policy"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Page Hero Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A8CC]/10 text-[#00A8CC] text-xs font-bold uppercase tracking-wider mb-2">
                <Lock className="w-3.5 h-3.5" />
                Data Protection &amp; Confidentiality
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#2C3E50] tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Last Updated: October 2026 &bull; NEXO TRAVEL &amp; TOURS
              </p>
            </div>

            <div className="text-right hidden sm:block">
              <span className="font-urdu text-[#E67E22] text-xl font-bold block">
                منزل سوچ کی دہلیز پر
              </span>
              <span className="text-xs text-slate-400">Ethical &amp; Transparent Travel Operations</span>
            </div>
          </div>

          {/* Quick Summary Highlights */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
              <div className="text-xs font-bold text-[#2C3E50] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Strict Document Protection
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Your passport and financial records are used strictly for embassy application packaging and booking tickets.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
              <div className="text-xs font-bold text-[#2C3E50] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-[#00A8CC]" />
                Zero Data Selling
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                We never monetize or disclose your personal details to outside commercial marketers or third parties.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
              <div className="text-xs font-bold text-[#2C3E50] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#E67E22]" />
                Direct Consular Handling
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Submissions occur solely via verified governmental visa portals and authorized embassy channels.
              </p>
            </div>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6">
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm"
            >
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-100">
                <div className="p-2 rounded-xl bg-slate-100">
                  {section.icon}
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-[#2C3E50]">
                  {section.title}
                </h2>
              </div>
              {section.content}
            </div>
          ))}
        </div>

        {/* Bottom Navigation CTA */}
        <div className="mt-10 p-6 sm:p-8 bg-gradient-to-r from-[#2C3E50] to-[#1E2B37] rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-base sm:text-lg font-bold">Have Questions About Your Data or Case File?</h3>
            <p className="text-xs text-slate-300 mt-1">
              Our travel counselors and compliance officers are available to assist with your concerns.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('contact')}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-bold bg-[#00A8CC] hover:bg-[#0088A8] text-white transition-colors"
            >
              Contact Support
            </button>
            <button
              onClick={() => onNavigate('terms-of-service')}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
