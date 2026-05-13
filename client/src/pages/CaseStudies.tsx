import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

const VILLA = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663655903402/AMgpcaqceigRryMeCaNvCW/gallery-villa-Xc9xyh9hRo2NcQ6p3GHJDd.webp';
const OFFICE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663655903402/AMgpcaqceigRryMeCaNvCW/gallery-office-mrW2z269zhbXSA4pJpaXqS.webp';
const HOTEL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663655903402/AMgpcaqceigRryMeCaNvCW/gallery-hospitality-Knd2XAjebnsamK8QrxxtVT.webp';

export default function CaseStudies() {
  const { t, isRTL } = useLanguage();

  const cases = [
    {
      img: VILLA,
      client_en: 'Luxury Villa Developer',
      client_ar: 'مطور فلل فاخرة',
      tag_en: 'Real Estate',
      tag_ar: 'عقارات',
      title_en: 'How a Riyadh developer sold 80% of off-plan units in 3 weeks',
      title_ar: 'كيف باع مطور رياضي 80% من وحدات على الخريطة في 3 أسابيع',
      result_en: '+80% off-plan sales in 3 weeks',
      result_ar: '+80% مبيعات على الخريطة في 3 أسابيع',
      stats: [{ val: '+80%', label_en: 'Off-plan sales', label_ar: 'مبيعات على الخريطة' }, { val: '3 weeks', label_en: 'To sell out', label_ar: 'للبيع الكامل' }, { val: '+420%', label_en: 'Engagement', label_ar: 'تفاعل' }],
    },
    {
      img: OFFICE,
      client_en: 'Premium Office Developer',
      client_ar: 'مطور مكاتب متميزة',
      tag_en: 'Commercial',
      tag_ar: 'تجاري',
      title_en: 'Filling a 40-floor tower before construction completion',
      title_ar: 'ملء برج من 40 طابقاً قبل اكتمال البناء',
      result_en: '95% occupancy pre-completion',
      result_ar: '95% إشغال قبل الاكتمال',
      stats: [{ val: '95%', label_en: 'Pre-completion occupancy', label_ar: 'إشغال قبل الاكتمال' }, { val: '+65%', label_en: 'Qualified inquiries', label_ar: 'استفسارات مؤهلة' }, { val: '48h', label_en: 'Delivery time', label_ar: 'وقت التسليم' }],
    },
    {
      img: HOTEL,
      client_en: 'Five-Star Hotel Group',
      client_ar: 'مجموعة فنادق خمس نجوم',
      tag_en: 'Hospitality',
      tag_ar: 'ضيافة',
      title_en: 'Increasing direct bookings by 42% through spatial suite previews',
      title_ar: 'زيادة الحجوزات المباشرة بنسبة 42% من خلال معاينات الأجنحة المكانية',
      result_en: '+42% direct bookings',
      result_ar: '+42% حجوزات مباشرة',
      stats: [{ val: '+42%', label_en: 'Direct bookings', label_ar: 'حجوزات مباشرة' }, { val: '-28%', label_en: 'Cancellation rate', label_ar: 'معدل الإلغاء' }, { val: '+18%', label_en: 'ADR increase', label_ar: 'زيادة متوسط السعر' }],
    },
  ];

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="overflow-hidden">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0B1D26]">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.2em] uppercase text-[#D6B36A] font-medium">{t('Case Studies', 'دراسات الحالة')}</span>
            <h1 className="font-display text-5xl md:text-6xl text-white mt-4 leading-tight">
              {t('Results that speak for themselves', 'نتائج تتحدث عن نفسها')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-24 bg-[#F5F1EA]">
        <div className="container space-y-16">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative rounded-2xl overflow-hidden aspect-video">
                  <img src={c.img} alt={c.title_en} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D26]/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs text-[#D6B36A] tracking-widest uppercase">{isRTL ? c.tag_ar : c.tag_en}</span>
                  </div>
                </div>
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="text-xs text-[#D6B36A] tracking-widest uppercase mb-3">{isRTL ? c.client_ar : c.client_en}</div>
                <h2 className="font-display text-3xl text-[#0B1D26] mb-6 leading-tight">{isRTL ? c.title_ar : c.title_en}</h2>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {c.stats.map((s) => (
                    <div key={s.val} className="text-center p-4 bg-white rounded-xl border border-[#D6B36A]/10">
                      <div className="font-display text-2xl text-[#D6B36A]">{s.val}</div>
                      <div className="text-xs text-[#111111]/50 mt-1">{isRTL ? s.label_ar : s.label_en}</div>
                    </div>
                  ))}
                </div>
                <Link href="/book-demo">
                  <span className="btn-outline-dark inline-flex items-center gap-2">{t('Get Similar Results', 'احصل على نتائج مماثلة')} <ArrowRight size={14} /></span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
