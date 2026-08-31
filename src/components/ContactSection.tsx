import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Building, 
  Sparkles, 
  ShieldCheck,
  Globe2
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    destination: 'Azerbaijan (Baku)',
    serviceType: 'Tourist Visa Consultancy',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const headOffice = {
    name: 'Nexo Travel & Tours — Head Office & Visa Lounge',
    address: '259 Airport Housing Society Rawalpindi Islamabad, Pakistan',
    phone: '+92 51 6125268',
    email: 'nexotraveltours@gmail.com',
    hours: 'Mon - Sat: 9:00 AM - 8:00 PM (Sunday by Appointment)'
  };

  return (
    <section id="contact-us-section" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A8CC]/10 text-[#00A8CC] text-xs font-bold uppercase tracking-wider mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            Direct Communication Desk
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2C3E50] tracking-tight">
            Connect with Our Travel &amp; Visa Advisors
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Whether you need urgent E-visa processing, a customized honeymoon package, or corporate travel management, our specialists respond within 15 minutes.
          </p>
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#2C3E50]">
                  Thank You, {formData.fullName}!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your inquiry for <strong>{formData.destination}</strong> ({formData.serviceType}) has been received. Our senior visa consultant will contact you at <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> within 15 minutes.
                </p>

                <div className="p-4 bg-slate-50 rounded-xl max-w-md mx-auto border border-slate-200 text-xs text-slate-600">
                  <div className="font-urdu text-[#E67E22] text-sm font-bold mb-1">
                    منزل سوچ کی دہلیز پر
                  </div>
                  <span>Reference ID: #NEXO-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      phone: '',
                      email: '',
                      destination: 'Azerbaijan (Baku)',
                      serviceType: 'Tourist Visa Consultancy',
                      message: ''
                    });
                  }}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#00A8CC] hover:bg-[#0088A8] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="text-lg font-bold text-[#2C3E50]">
                    Send Us an Inquiry
                  </h3>
                  <span className="text-[11px] text-[#00A8CC] font-semibold">
                    Average response: 15 Mins
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Ali"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm font-medium text-[#2C3E50] focus:ring-2 focus:ring-[#00A8CC] focus:outline-none"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +92 51 6125268"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm font-medium text-[#2C3E50] focus:ring-2 focus:ring-[#00A8CC] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm font-medium text-[#2C3E50] focus:ring-2 focus:ring-[#00A8CC] focus:outline-none"
                    />
                  </div>

                  {/* Destination of Interest */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">
                      Destination of Interest *
                    </label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm font-medium text-[#2C3E50] focus:ring-2 focus:ring-[#00A8CC] focus:outline-none"
                    >
                      <option value="Azerbaijan (Baku)">Azerbaijan (Baku &amp; Gabala)</option>
                      <option value="Turkey (Istanbul & Cappadocia)">Turkey (Istanbul &amp; Cappadocia)</option>
                      <option value="United Arab Emirates (Dubai)">United Arab Emirates (Dubai &amp; Abu Dhabi)</option>
                      <option value="Malaysia (KL & Langkawi)">Malaysia (Kuala Lumpur &amp; Langkawi)</option>
                      <option value="Saudi Arabia (Umrah / Visit)">Saudi Arabia (Umrah &amp; Tourism)</option>
                      <option value="Europe / Schengen">Europe &amp; Schengen Area</option>
                      <option value="United Kingdom">United Kingdom (UK)</option>
                      <option value="Thailand">Thailand (Bangkok &amp; Phuket)</option>
                      <option value="Other Country">Other Custom Destination</option>
                    </select>
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">
                    Service Required
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm font-medium text-[#2C3E50] focus:ring-2 focus:ring-[#00A8CC] focus:outline-none"
                  >
                    <option value="Tourist Visa Consultancy">Tourist / E-Visa Application</option>
                    <option value="All-Inclusive Holiday Tour Package">All-Inclusive Holiday Tour Package</option>
                    <option value="Spiritual Umrah Package">Spiritual Umrah Package</option>
                    <option value="Business / Delegate Travel">Corporate / Business Travel</option>
                    <option value="Airline Flight Tickets Only">Airline Flight Ticketing</option>
                    <option value="Luxury Hotel Reservation">Worldwide Hotel Reservation</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">
                    Your Travel Dates / Specific Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your estimated travel dates, number of passengers, or any specific questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs sm:text-sm font-medium text-[#2C3E50] focus:ring-2 focus:ring-[#00A8CC] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#00A8CC] hover:bg-[#0088A8] shadow-md transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="animate-pulse">Processing submission...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry to Visa Specialist</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Quick Contact Details & Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#2C3E50] rounded-2xl p-6 sm:p-8 text-white shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-[#E67E22]" />
                <span className="font-urdu text-[#E67E22] text-lg font-bold">
                  منزل سوچ کی دہلیز پر
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2">
                Need Urgent Assistance?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Our 24/7 dedicated visa hotline is available for urgent e-visa approvals and flight rescheduling.
              </p>

              <div className="space-y-4 text-xs">
                <a
                  href="tel:+92516125268"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/15 transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#00A8CC]" />
                  <div>
                    <div className="text-[10px] text-slate-300 font-semibold">24/7 VIP Phone Helpline</div>
                    <div className="text-sm font-bold text-white">+92 51 6125268</div>
                  </div>
                </a>

                <a
                  href="mailto:nexotraveltours@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/15 transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#E67E22]" />
                  <div>
                    <div className="text-[10px] text-slate-300 font-semibold">Official Inquiries &amp; Visas</div>
                    <div className="text-sm font-bold text-white">nexotraveltours@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10">
                  <Clock className="w-5 h-5 text-[#00A8CC]" />
                  <div>
                    <div className="text-[10px] text-slate-300 font-semibold">Counseling Hours</div>
                    <div className="text-xs font-bold text-white">Mon – Sat: 9:30 AM – 7:30 PM (PKT)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Map & Directions Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-[#00A8CC] uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>Visit Our Office</span>
              </div>
              <h4 className="text-sm font-bold text-[#2C3E50] mb-1">
                Walk-ins Always Welcome
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Meet with our senior immigration counsel in person with your original passport and bank statement for on-spot evaluation.
              </p>
            </div>
          </div>

        </div>

        {/* Physical Office Location Card */}
        <div className="mt-10">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold text-[#E67E22] uppercase tracking-wider">Official Location</span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#2C3E50]">
              Visit Our Head Office
            </h3>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#00A8CC]/10 text-[#00A8CC] flex items-center justify-center shrink-0">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#2C3E50]">{headOffice.name}</h4>
                  <span className="text-[11px] font-semibold text-[#00A8CC]">Primary Operations &amp; In-Person Visa Counseling</span>
                </div>
              </div>
              
              <div className="space-y-2 text-xs sm:text-sm text-slate-600 pt-1">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#E67E22] shrink-0 mt-0.5" />
                  <span className="font-medium text-[#2C3E50]">{headOffice.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#00A8CC] shrink-0" />
                  <a href={`tel:${headOffice.phone.replace(/\\s+/g, '')}`} className="hover:text-[#00A8CC] font-medium transition-colors">
                    {headOffice.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#E67E22] shrink-0" />
                  <a href={`mailto:${headOffice.email}`} className="hover:text-[#E67E22] font-medium transition-colors">
                    {headOffice.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{headOffice.hours}</span>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-auto flex flex-col sm:items-end gap-3 pt-4 sm:pt-0 border-t sm:border-t-0 border-slate-100 shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Welcoming Visitors
              </span>
              <a
                href={`tel:${headOffice.phone.replace(/\\s+/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#00A8CC] hover:bg-[#0090af] text-white text-xs font-bold shadow-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call for Directions</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
