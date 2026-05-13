import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const { t, isRTL } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('Message sent! We\'ll be in touch within 24 hours.', 'تم إرسال الرسالة! سنتواصل معك خلال 24 ساعة.'));
    setForm({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="overflow-hidden">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0B1D26]">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.2em] uppercase text-[#D6B36A] font-medium">{t('Contact', 'تواصل')}</span>
            <h1 className="font-display text-5xl md:text-6xl text-white mt-4 leading-tight">
              {t("Let's talk about your property", 'لنتحدث عن عقارك')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-24 bg-[#F5F1EA]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h2 className="font-display text-3xl text-[#0B1D26] mb-6">{t('Get in touch', 'تواصل معنا')}</h2>
              <p className="text-[#111111]/60 text-lg leading-relaxed mb-10">
                {t(
                  'Whether you\'re ready to transform your first property or scaling an entire portfolio, we\'re here to help. Reach out and we\'ll respond within 24 hours.',
                  'سواء كنت مستعداً لتحويل عقارك الأول أو توسيع محفظة كاملة، نحن هنا للمساعدة. تواصل معنا وسنرد خلال 24 ساعة.'
                )}
              </p>

              <div className="space-y-6 mb-10">
                {[
                  { icon: <MapPin size={18} />, label: t('Riyadh, Kingdom of Saudi Arabia', 'الرياض، المملكة العربية السعودية') },
                  { icon: <Mail size={18} />, label: 'hello@spatial.sa' },
                  { icon: <Phone size={18} />, label: '+966 50 000 0000' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0B1D26] flex items-center justify-center text-[#D6B36A] flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-[#111111]/70">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-[#0B1D26] rounded-2xl">
                <div className="text-xs text-[#D6B36A] tracking-widest uppercase mb-2">{t('Response Time', 'وقت الاستجابة')}</div>
                <div className="font-display text-3xl text-white mb-1">&lt; 24 {t('hours', 'ساعة')}</div>
                <div className="text-white/40 text-sm">{t('We respond to all inquiries within one business day.', 'نرد على جميع الاستفسارات خلال يوم عمل واحد.')}</div>
              </div>
            </div>

            {/* Form */}
            <div className="card-premium p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { key: 'name', label_en: 'Full Name', label_ar: 'الاسم الكامل', type: 'text' },
                  { key: 'email', label_en: 'Email Address', label_ar: 'البريد الإلكتروني', type: 'email' },
                  { key: 'company', label_en: 'Company / Project', label_ar: 'الشركة / المشروع', type: 'text' },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-xs tracking-widest uppercase text-[#111111]/50 mb-2">
                      {isRTL ? field.label_ar : field.label_en}
                    </label>
                    <input
                      type={field.type}
                      value={form[field.key as keyof typeof form]}
                      onChange={e => setForm(prev => ({ ...prev, [field.key]: e.target.value }))}
                      className="w-full px-4 py-3 bg-[#F5F1EA] border border-[#D6B36A]/15 rounded-lg text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-[#D6B36A]/50 transition-colors text-sm"
                      required
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#111111]/50 mb-2">
                    {t('Message', 'الرسالة')}
                  </label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                    rows={4}
                    className="w-full px-4 py-3 bg-[#F5F1EA] border border-[#D6B36A]/15 rounded-lg text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-[#D6B36A]/50 transition-colors text-sm resize-none"
                    required
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center flex items-center gap-2">
                  {t('Send Message', 'إرسال الرسالة')} <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
