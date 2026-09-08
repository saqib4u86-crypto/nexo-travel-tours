import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Send
} from 'lucide-react';
import { DESTINATIONS } from '../data/mockData';
import { NexoLogo } from './NexoLogo';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDestination?: string;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialDestination = 'Azerbaijan (Baku)',
  initialService = 'Tourist Visa Consultancy'
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    destination: initialDestination || 'Azerbaijan (Baku)',
    serviceType: initialService || 'Tourist Visa Consultancy',
    consultationMode: 'Online Video Call (Zoom/WhatsApp)',
    preferredDate: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4 animate-in fade-in duration-300">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-extrabold text-[#2C3E50]">
              Consultation Scheduled!
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
              Thank you, <strong>{formData.fullName}</strong>. Your 1-on-1 visa advisory session for <strong>{formData.destination}</strong> has been locked in.
            </p>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 text-left space-y-1.5">
              <div className="font-urdu text-[#E67E22] text-sm font-bold text-center mb-1">
                منزل سوچ کی دہلیز پر
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Mode:</span>
                <span className="font-semibold">{formData.consultationMode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Appointment Code:</span>
                <span className="font-bold text-[#00A8CC]">#NEXO-APT-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-[#00A8CC] hover:bg-[#0088A8] text-white font-bold text-xs transition-colors"
            >
              Done &amp; Return to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#E67E22] uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Nexo VIP Service</span>
                </div>
                <h3 className="text-xl font-extrabold text-[#2C3E50]">
                  Book Free Visa &amp; Tour Consultation
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Speak directly with an experienced immigration counselor.
                </p>
              </div>
              <div className="shrink-0 hidden sm:block">
                <NexoLogo size="sm" variant="badge-only" />
              </div>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-[#2C3E50] focus:ring-2 focus:ring-[#00A8CC] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">
                  WhatsApp / Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+92 320 5718477"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-[#2C3E50] focus:ring-2 focus:ring-[#00A8CC] focus:outline-none"
                />
              </div>
            </div>

            {/* Email & Destination */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-[#2C3E50] focus:ring-2 focus:ring-[#00A8CC] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">
                  Destination Country
                </label>
                <select
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-[#2C3E50] focus:ring-2 focus:ring-[#00A8CC] focus:outline-none"
                >
                  {DESTINATIONS.map((d) => (
                    <option key={d.id} value={d.country}>
                      {d.country} ({d.name})
                    </option>
                  ))}
                  <option value="Schengen / Europe">Schengen / Europe (29 Countries)</option>
                  <option value="UK / London">United Kingdom</option>
                  <option value="Other Country">Other Country</option>
                </select>
              </div>
            </div>

            {/* Consultation Mode */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">
                Preferred Consultation Mode
              </label>
              <select
                value={formData.consultationMode}
                onChange={(e) => setFormData({ ...formData, consultationMode: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-[#2C3E50] focus:ring-2 focus:ring-[#00A8CC] focus:outline-none"
              >
                <option value="Online Video Call (Zoom/WhatsApp)">Online Video Call (Zoom / WhatsApp)</option>
                <option value="In-Person at 259 Airport Housing Society Rawalpindi Islamabad Office">In-Person at Head Office (259 Airport Housing Society, Rawalpindi / Islamabad)</option>
                <option value="Direct Phone Call">Direct Phone Call</option>
              </select>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">
                Any specific question or timeline?
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Planning to travel next month with family..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs font-medium text-[#2C3E50] focus:ring-2 focus:ring-[#00A8CC] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-[#00A8CC] hover:bg-[#0088A8] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <span>Confirming slot...</span>
              ) : (
                <>
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Free Consultation</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
