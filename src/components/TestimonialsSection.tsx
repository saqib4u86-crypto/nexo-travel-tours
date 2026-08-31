import React, { useState, useEffect } from 'react';
import { FAQS } from '../data/mockData';
import { CustomerReview } from '../types';
import { 
  Star, 
  Quote, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Sparkles,
  PenLine,
  CheckCircle,
  MessageSquarePlus,
  Send,
  X,
  Calendar,
  Filter,
  ShieldCheck,
  UserCheck
} from 'lucide-react';

const STORAGE_KEY = 'nexo_genuine_customer_reviews';

export const TestimonialsSection: React.FC = () => {
  const [reviews, setReviews] = useState<CustomerReview[]>([]);
  const [isWritingReview, setIsWritingReview] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  // Review Form State
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [serviceCategory, setServiceCategory] = useState<CustomerReview['serviceCategory']>('Tourist Visa');
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [isVerified, setIsVerified] = useState<boolean>(true);
  const [formError, setFormError] = useState<string>('');

  // Load reviews from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setReviews(parsed);
        }
      }
    } catch (e) {
      console.error('Failed to load reviews from local storage', e);
    }
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleRatingHover = (val: number) => {
    setHoverRating(val);
  };

  const handleRatingClick = (val: number) => {
    setRating(val);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!name.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!city.trim()) {
      setFormError('Please enter your city / location.');
      return;
    }
    if (!comment.trim() || comment.trim().length < 15) {
      setFormError('Please write a detailed review (minimum 15 characters).');
      return;
    }

    const newReview: CustomerReview = {
      id: `rev-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: name.trim(),
      city: city.trim(),
      serviceCategory,
      rating,
      title: title.trim() || undefined,
      comment: comment.trim(),
      date: new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new Date()),
      verifiedTraveler: isVerified
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedReviews));
    } catch (err) {
      console.error('Failed to save review to localStorage', err);
    }

    setFormSubmitted(true);
    // Reset form fields
    setName('');
    setCity('');
    setTitle('');
    setComment('');
    setRating(5);

    setTimeout(() => {
      setFormSubmitted(false);
      setIsWritingReview(false);
    }, 2000);
  };

  const categories: Array<{ label: string; value: string }> = [
    { label: 'All Reviews', value: 'All' },
    { label: 'Tourist Visa', value: 'Tourist Visa' },
    { label: 'Custom Tour', value: 'Custom Tour' },
    { label: 'Umrah & Ziyarat', value: 'Umrah & Ziyarat' },
    { label: 'Flight & Hotel', value: 'Flight & Hotel' },
    { label: 'Corporate Travel', value: 'Corporate Travel' },
  ];

  const filteredReviews = reviews.filter((r) => {
    if (selectedCategory === 'All') return true;
    return r.serviceCategory === selectedCategory;
  });

  const getRatingLabel = (score: number) => {
    switch (score) {
      case 5: return '5 Stars - Exceptional Service';
      case 4: return '4 Stars - Very Good Experience';
      case 3: return '3 Stars - Satisfactory';
      case 2: return '2 Stars - Needs Improvement';
      case 1: return '1 Star - Unsatisfactory';
      default: return '';
    }
  };

  return (
    <section id="testimonials-section" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A8CC]/10 text-[#00A8CC] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Genuine Traveler Feedback
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2C3E50] tracking-tight">
            Customer Reviews &amp; Experiences
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Authentic reviews submitted directly by our travelers. Share your journey with Nexo Travel &amp; Tours or explore recent feedback.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setIsWritingReview(!isWritingReview);
                setFormError('');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00A8CC] hover:bg-[#0090af] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              {isWritingReview ? (
                <>
                  <X className="w-4 h-4" />
                  <span>Close Review Form</span>
                </>
              ) : (
                <>
                  <PenLine className="w-4 h-4" />
                  <span>Write a Customer Review</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Write a Review Collapsible Form */}
        {isWritingReview && (
          <div className="max-w-2xl mx-auto mb-14 bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-[#00A8CC]/30 transition-all duration-300">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-[#00A8CC]/10 text-[#00A8CC] flex items-center justify-center">
                  <PenLine className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#2C3E50]">Submit Your Genuine Review</h3>
                  <p className="text-xs text-slate-500">Your feedback helps us continuously elevate our travel advisory standards.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsWritingReview(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formSubmitted ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-[#2C3E50]">Thank You For Your Review!</h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Your genuine feedback has been published and added to the customer reviews feed.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                {formError && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                    {formError}
                  </div>
                )}

                {/* Rating Picker */}
                <div>
                  <label className="block text-xs font-bold text-[#2C3E50] mb-1.5">
                    Your Overall Rating *
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => {
                        const active = (hoverRating || rating) >= star;
                        return (
                          <button
                            key={star}
                            type="button"
                            onMouseEnter={() => handleRatingHover(star)}
                            onMouseLeave={() => handleRatingHover(0)}
                            onClick={() => handleRatingClick(star)}
                            className="p-1 rounded-lg hover:scale-110 transition-transform cursor-pointer focus:outline-none"
                            title={`${star} Star`}
                          >
                            <Star 
                              className={`w-6 h-6 ${
                                active 
                                  ? 'text-amber-400 fill-amber-400' 
                                  : 'text-slate-300'
                              }`} 
                            />
                          </button>
                        );
                      })}
                    </div>
                    <span className="text-xs font-bold text-[#00A8CC] ml-2">
                      {getRatingLabel(hoverRating || rating)}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#2C3E50] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., Tariq Mehmood"
                      className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:ring-2 focus:ring-[#00A8CC] focus:outline-none"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-xs font-bold text-[#2C3E50] mb-1">
                      City / Location *
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g., Rawalpindi / Islamabad"
                      className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:ring-2 focus:ring-[#00A8CC] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service Category */}
                  <div>
                    <label className="block text-xs font-bold text-[#2C3E50] mb-1">
                      Service / Package Booked *
                    </label>
                    <select
                      value={serviceCategory}
                      onChange={(e) => setServiceCategory(e.target.value as CustomerReview['serviceCategory'])}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:ring-2 focus:ring-[#00A8CC] focus:outline-none"
                    >
                      <option value="Tourist Visa">Tourist &amp; Visit Visa Consultancy</option>
                      <option value="Custom Tour">Custom Holiday / Tour Package</option>
                      <option value="Umrah & Ziyarat">VIP Umrah &amp; Ziyarat Package</option>
                      <option value="Flight & Hotel">Flight Ticket &amp; Hotel Booking</option>
                      <option value="Corporate Travel">Corporate &amp; Group Travel</option>
                      <option value="Other">General Travel Advisory</option>
                    </select>
                  </div>

                  {/* Review Title */}
                  <div>
                    <label className="block text-xs font-bold text-[#2C3E50] mb-1">
                      Review Title (Optional)
                    </label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g., Smooth Azerbaijan E-Visa Process"
                      className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:ring-2 focus:ring-[#00A8CC] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Review Text */}
                <div>
                  <label className="block text-xs font-bold text-[#2C3E50] mb-1">
                    Your Travel Experience &amp; Feedback *
                  </label>
                  <textarea
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Describe how Nexo Travel & Tours assisted you with visa paperwork, flight bookings, hotel accommodations, or overall trip coordination..."
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:ring-2 focus:ring-[#00A8CC] focus:outline-none resize-none"
                  />
                  <div className="text-[11px] text-slate-400 text-right mt-0.5">
                    {comment.length} characters (min 15)
                  </div>
                </div>

                {/* Verification confirmation */}
                <label className="flex items-start gap-2 pt-1 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isVerified}
                    onChange={(e) => setIsVerified(e.target.checked)}
                    className="mt-0.5 rounded text-[#00A8CC] focus:ring-[#00A8CC]"
                  />
                  <span className="text-[11px] text-slate-600 leading-tight">
                    I confirm that this is a genuine, first-hand review of services provided by Nexo Travel &amp; Tours.
                  </span>
                </label>

                {/* Submit button */}
                <div className="pt-3 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsWritingReview(false)}
                    className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-xl bg-[#00A8CC] hover:bg-[#0090af] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Publish Review</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Filter Pills */}
        {reviews.length > 0 && (
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <Filter className="w-3.5 h-3.5 text-[#00A8CC]" />
              <span>Filter by Category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    selectedCategory === cat.value
                      ? 'bg-[#2C3E50] text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Reviews Cards List or Empty State */}
        {filteredReviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-6 shadow-xs hover:shadow-md border border-slate-200 hover:border-[#00A8CC]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Header: Stars & Category */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#00A8CC]/10 text-[#00A8CC] text-[11px] font-bold">
                      {rev.serviceCategory}
                    </span>
                  </div>

                  {rev.title && (
                    <h4 className="text-sm font-bold text-[#2C3E50] mb-1.5">
                      {rev.title}
                    </h4>
                  )}

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed mb-4">
                    "{rev.comment}"
                  </p>
                </div>

                {/* Reviewer Details */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-slate-100 text-[#2C3E50] border border-slate-200 flex items-center justify-center font-bold text-xs">
                      {rev.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h5 className="text-xs font-bold text-[#2C3E50]">{rev.name}</h5>
                        {rev.verifiedTraveler && (
                          <span title="Verified Client">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-slate-400">
                        <MapPin className="w-3 h-3 text-[#E67E22]" />
                        <span>{rev.city}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-400 font-medium">
                    {rev.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Welcoming Empty State when no reviews have been written yet */
          <div className="max-w-xl mx-auto mb-20 bg-white rounded-2xl p-8 text-center border border-dashed border-slate-300 shadow-xs">
            <div className="w-14 h-14 rounded-2xl bg-[#00A8CC]/10 text-[#00A8CC] flex items-center justify-center mx-auto mb-4">
              <MessageSquarePlus className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-[#2C3E50] mb-2">
              Share Your First-Hand Experience
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md mx-auto mb-6">
              Have you applied for a visa, booked a flight, or reserved a tour package through Nexo Travel &amp; Tours? We invite you to leave an authentic review and share your feedback.
            </p>
            <button
              type="button"
              onClick={() => {
                setIsWritingReview(true);
                window.scrollTo({ top: document.getElementById('testimonials-section')?.offsetTop || 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00A8CC] hover:bg-[#0090af] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              <PenLine className="w-4 h-4" />
              <span>Write the First Review</span>
            </button>
          </div>
        )}

        {/* FAQs Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A8CC]/10 text-[#00A8CC] text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-[#2C3E50]">
              Got Questions? We Have Answers.
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#2C3E50] hover:text-[#00A8CC] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[11px] font-extrabold bg-slate-100 text-slate-500">
                        {faq.category}
                      </span>
                      <span>{faq.question}</span>
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#00A8CC] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

