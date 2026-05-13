import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663655903402/AMgpcaqceigRryMeCaNvCW/hero-spatial-PvHJ6mYa4sKcj6D3fKSsf8.webp';

export default function BookDemo() {
  const { t, isRTL } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', industry: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success(t('Demo booked! We\'ll contact you within 24 hours to confirm.', 'تم حجز التجربة! سنتواصل معك خلال 24 ساعة للتأكيد.'));
  };

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 bg-[#0B1D26]">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D26] to-transparent" />
        </div>
        <div className="relative container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.2em] uppercase text-[#D6B36A] font-medium">{t('Book a Demo', 'احجز تجربة')}</span>
            <h1 className="font-display text-5xl md:text-6xl text-white mt-4 leading-tight">
              {t('See spatial in action', 'شاهد المكاني في العمل')}
            </h1>
            <p className="text-white/50 text-lg mt-4 max-w-xl">
              {t('Book a 30-minute demo and we\'ll show you exactly what a spatial experience looks like for your property or space.', 'احجز تجربة لمدة 30 دقيقة وسنريك بالضبط كيف تبدو التجربة المكانية لعقارك أو مساحتك.')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-[#F5F1EA]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: What to expect */}
            <div>
              <h2 className="font-display text-3xl text-[#0B1D26] mb-6">{t('What to expect', 'ما الذي تتوقعه')}</h2>
              <div className="space-y-5">
                {[
                  { en: 'A live walkthrough of a spatial experience on a real property', ar: 'جولة مباشرة في تجربة مكانية على عقار حقيقي' },
                  { en: 'A discussion of your specific property or portfolio needs', ar: 'نقاش حول احتياجات عقارك أو محفظتك المحددة' },
                  { en: 'A clear explanation of our process, timeline, and pricing', ar: 'شرح واضح لعمليتنا والجدول الزمني والأسعار' },
                  { en: 'A custom proposal tailored to your requirements', ar: 'عرض مخصص مصمم لمتطلباتك' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#D6B36A] mt-0.5 flex-shrink-0" />
                    <span className="text-[#111111]/65 text-base">{isRTL ? item.ar : item.en}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-[#0B1D26] rounded-2xl">
                <div className="text-xs text-[#D6B36A] tracking-widest uppercase mb-2">{t('Demo Duration', 'مدة التجربة')}</div>
                <div className="font-display text-3xl text-white mb-1">30 {t('minutes', 'دقيقة')}</div>
                <div className="text-white/40 text-sm">{t('Online via video call or in-person in Riyadh', 'عبر الإنترنت أو شخصياً في الرياض')}</div>
              </div>
            </div>

            {/* Right: Form */}
            {!submitted ? (
              <div className="card-premium p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { key: 'name', label_en: 'Full Name', label_ar: 'الاسم الكامل', type: 'text' },
                    { key: 'email', label_en: 'Email Address', label_ar: 'البريد الإلكتروني', type: 'email' },
                    { key: 'phone', label_en: 'Phone Number', label_ar: 'رقم الهاتف', type: 'tel' },
                    { key: 'company', label_en: 'Company / Project Name', label_ar: 'اسم الشركة / المشروع', type: 'text' },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-xs tracking-widest uppercase text-[#111111]/50 mb-2">
                        {isRTL ? field.label_ar : field.label_en}
                      </label>
                      <input
                        type={field.type}
                        value={form[field.key as keyof typeof form]}
                        onChange={e => setForm(prev => ({ ...prev, [field.key]: e.target.value }))}
                        className="w-full px-4 py-3 bg-[#F5F1EA] border border-[#D6B36A]/15 rounded-lg text-[#111111] focus:outline-none focus:border-[#D6B36A]/50 transition-colors text-sm"
                        required
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#111111]/50 mb-2">
                      {t('Industry', 'القطاع')}
                    </label>
                    <select
                      value={form.industry}
                      onChange={e => setForm(prev => ({ ...prev, industry: e.target.value }))}
                      className="w-full px-4 py-3 bg-[#F5F1EA] border border-[#D6B36A]/15 rounded-lg text-[#111111] focus:outline-none focus:border-[#D6B36A]/50 transition-colors text-sm"
                      required
                    >
                      <option value="" disabled>{t('Select your industry', 'اختر قطاعك')}</option>
                      {[
                        { val: 'real-estate', en: 'Luxury Real Estate', ar: 'العقارات الفاخرة' },
                        { val: 'developer', en: 'Real Estate Developer', ar: 'مطور عقاري' },
                        { val: 'hospitality', en: 'Hospitality', ar: 'الضيافة' },
                        { val: 'automotive', en: 'Automotive', ar: 'السيارات' },
                        { val: 'events', en: 'Event Venues', ar: 'قاعات الفعاليات' },
                        { val: 'retail', en: 'Premium Retail', ar: 'التجزئة الفاخرة' },
                        { val: 'other', en: 'Other', ar: 'أخرى' },
                      ].map(opt => (
                        <option key={opt.val} value={opt.val}>{isRTL ? opt.ar : opt.en}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#111111]/50 mb-2">
                      {t('Tell us about your project (optional)', 'أخبرنا عن مشروعك (اختياري)')}
                    </label>
                    <textarea
                      value={form.message}
                      onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                      rows={3}
                      className="w-full px-4 py-3 bg-[#F5F1EA] border border-[#D6B36A]/15 rounded-lg text-[#111111] focus:outline-none focus:border-[#D6B36A]/50 transition-colors text-sm resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center flex items-center gap-2">
                    {t('Book My Demo', 'احجز تجربتي')} <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            ) : (
              <div className="card-premium p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[#D6B36A]/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-[#D6B36A]" />
                </div>
                <h3 className="font-display text-3xl text-[#0B1D26] mb-3">{t('Demo Booked!', 'تم حجز التجربة!')}</h3>
                <p className="text-[#111111]/55">{t('We\'ll be in touch within 24 hours to confirm your demo time.', 'سنتواصل معك خلال 24 ساعة لتأكيد موعد تجربتك.')}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
