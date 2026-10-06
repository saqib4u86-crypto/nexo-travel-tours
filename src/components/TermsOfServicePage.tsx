import React, { useEffect } from 'react';
import { PageView } from '../types';
import { 
  FileCheck2, 
  Scale, 
  HelpCircle, 
  CreditCard, 
  Ban, 
  PlaneTakeoff, 
  ShieldAlert, 
  Building2, 
  ArrowLeft, 
  CheckCircle2, 
  AlertTriangle,
  Printer,
  Sparkles
} from 'lucide-react';

interface TermsOfServicePageProps {
  onNavigate: (page: PageView) => void;
  onOpenConsultationModal?: () => void;
}

export const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({
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
      id: 'acceptance',
      title: '1. Agreement & Acceptance of Terms',
      icon: <Scale className="w-5 h-5 text-[#00A8CC]" />,
      content: (
        <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
          <p>
            Welcome to <strong>NEXO TRAVEL &amp; TOURS</strong>. These Terms of Service (&ldquo;Terms&rdquo;) govern your use 
            of our website, inquiry portals, WhatsApp channels, and all travel advisory services provided by our firm.
          </p>
          <p>
            By booking a tour, requesting visa file preparation, purchasing flight tickets, or engaging our travel counselors, 
            you agree to be legally bound by these Terms and our Privacy Policy. If you do not agree to these terms, please do not utilize our services.
          </p>
        </div>
      )
    },
    {
      id: 'scope-and-disclaimer',
      title: '2. Nature of Advisory Services & Embassy Sovereignty',
      icon: <ShieldAlert className="w-5 h-5 text-[#E67E22]" />,
      content: (
        <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs sm:text-sm">
            <div className="font-bold flex items-center gap-1.5 mb-1 text-amber-950">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              Sovereign Embassy Prerogative &amp; Advisory Notice:
            </div>
            <p className="leading-relaxed">
              Nexo Travel &amp; Tours operates as a professional visa advisory consultancy and accredited travel organizer. 
              We assist clients with rigorous file compilation, appointment scheduling, cover letter structuring, and verified bookings. 
              However, <strong>the sole authority to grant, refuse, delay, or modify any visa rests entirely and exclusively with the sovereign government, embassy, high commission, or consulate of the destination country</strong>.
            </p>
          </div>
          <p>
            No travel agency or consultant can legally promise or warrant a visa outcome. Nexo Travel &amp; Tours makes no such representation 
            and focuses on ensuring the highest professional standards of file preparation to optimize approval prospects.
          </p>
        </div>
      )
    },
    {
      id: 'client-responsibilities',
      title: '3. Client Responsibilities & Document Authenticity',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
      content: (
        <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
          <p>When retaining our services, you warrant and agree that:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Authenticity of Records:</strong> All documents supplied by you—including national identity cards, passports, bank statements, employment letters, business licenses, and tax certificates—are genuine, valid, untampered, and accurately reflect your true status.</li>
            <li><strong>Zero Tolerance for Fraud:</strong> Nexo Travel &amp; Tours strictly refuses to process, handle, or facilitate fake, fraudulent, or counterfeit documentation. Supplying fraudulent materials will result in immediate termination of service without refund.</li>
            <li><strong>Timely Submission:</strong> You will provide all requested documentation within the communicated timeframes to prevent missing embassy biometric appointment windows or flight ticketing deadlines.</li>
            <li><strong>Traveler Passport Validity:</strong> Your passport must maintain at least six (6) months of validity from the intended date of departure and contain sufficient blank pages.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'pricing-and-payments',
      title: '4. Quotations, Pricing & Payments',
      icon: <CreditCard className="w-5 h-5 text-[#00A8CC]" />,
      content: (
        <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
          <p>
            Our travel packages, flight reservations, and visa consultation services operate on transparent, customized quotes:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Quotes on Request:</strong> Because airline airfares, embassy government fees, hotel seasonal tariffs, and currency exchange rates fluctuate continuously, all rates provided on this platform or by our counselors are quotes provided upon formal inquiry.</li>
            <li><strong>Authorized Payment Channels:</strong> All payments must be made strictly to official Nexo Travel &amp; Tours business bank accounts or authorized corporate counters. We never authorize personal cash transfers to individual agent accounts.</li>
            <li><strong>Government Fees:</strong> Foreign embassy and consular fees (including biometric center service charges like VFS/Gerry&apos;s/BLS) are statutory government levies collected on behalf of the diplomatic missions and are non-refundable once tendered.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'cancellation-and-refunds',
      title: '5. Cancellations, Re-bookings & Refunds',
      icon: <Ban className="w-5 h-5 text-[#E67E22]" />,
      content: (
        <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
          <p>
            Cancellation terms depend on the specific travel component booked:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Visa Consultancy Fees:</strong> Advisory and file curation fees cover human expert review, cover letter authoring, document audits, and submission services rendered. Once file audit and preparation work commences, consultancy fees are non-refundable.</li>
            <li><strong>Air Tickets:</strong> Airline ticket cancellations, date changes, and refunds are governed strictly by the fare rules and penalty policies established by the respective issuing airline carrier.</li>
            <li><strong>Tour Packages &amp; Hotel Bookings:</strong> Land packages and hotel reservations follow the written cancellation schedule specified in your customized booking voucher (e.g., non-refundable peak season rates versus flexible off-peak bookings).</li>
          </ul>
        </div>
      )
    },
    {
      id: 'carrier-liability',
      title: '6. Airline Operations & Third-Party Suppliers',
      icon: <PlaneTakeoff className="w-5 h-5 text-[#00A8CC]" />,
      content: (
        <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
          <p>
            Nexo Travel &amp; Tours acts as an intermediary booking agent for licensed third-party service providers, including commercial 
            airlines, rail operators, cruise lines, destination hoteliers, and transfer companies.
          </p>
          <p>
            We are not liable for flight delays, schedule changes, gate reassignments, baggage damage, weather disruptions, or mechanical 
            carrier interventions. However, our 24/7 client desk will actively advocate on your behalf to assist with re-routing and re-issuance wherever possible.
          </p>
        </div>
      )
    },
    {
      id: 'governing-law',
      title: '7. Governing Law & Dispute Resolution',
      icon: <Building2 className="w-5 h-5 text-[#E67E22]" />,
      content: (
        <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
          <p>
            These Terms of Service are construed and enforced in accordance with the laws of the Islamic Republic of Pakistan.
          </p>
          <p>
            Any disputes arising in connection with our services that cannot be amicably settled between the parties through friendly negotiation 
            shall be submitted to the exclusive jurisdiction of the competent courts in Islamabad, Pakistan.
          </p>
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
            <span className="text-slate-700 font-medium">Terms of Service</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('privacy-policy')}
              className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#00A8CC] hover:border-[#00A8CC] transition-colors font-medium text-xs"
            >
              View Privacy Policy
            </button>
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
              title="Print Terms"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Page Hero Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E67E22]/10 text-[#E67E22] text-xs font-bold uppercase tracking-wider mb-2">
                <FileCheck2 className="w-3.5 h-3.5" />
                Service Agreement &amp; Advisory Guidelines
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#2C3E50] tracking-tight">
                Terms of Service
              </h1>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Last Updated: October 2026 &bull; NEXO TRAVEL &amp; TOURS
              </p>
            </div>

            <div className="text-right hidden sm:block">
              <span className="font-urdu text-[#E67E22] text-xl font-bold block">
                منزل سوچ کی دہلیز پر
              </span>
              <span className="text-xs text-slate-400">Clear, Honest &amp; Professional Service</span>
            </div>
          </div>

          {/* Key Principles Cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
              <div className="text-xs font-bold text-[#2C3E50] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-[#E67E22]" />
                Embassy Sovereignty
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Visa decisions rest exclusively with the sovereign destination authorities. We prepare verified, compliant case files.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
              <div className="text-xs font-bold text-[#2C3E50] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Genuine Documentation
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                We strictly uphold authentic document standards and refuse fraudulent submissions to protect our travelers.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
              <div className="text-xs font-bold text-[#2C3E50] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#00A8CC]" />
                Transparent Advisory
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Clear quotes provided upon direct consultation with zero hidden fees or misleading claims.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
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
            <h3 className="text-base sm:text-lg font-bold">Ready to Plan Your Next Journey?</h3>
            <p className="text-xs text-slate-300 mt-1">
              Speak with our senior visa and holiday specialists for customized travel itineraries.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('contact')}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-bold bg-[#00A8CC] hover:bg-[#0088A8] text-white transition-colors"
            >
              Contact Travel Desk
            </button>
            <button
              onClick={() => onNavigate('privacy-policy')}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
            >
              Read Privacy Policy
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
