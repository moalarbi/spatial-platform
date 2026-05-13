import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

const VILLA = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663655903402/AMgpcaqceigRryMeCaNvCW/gallery-villa-Xc9xyh9hRo2NcQ6p3GHJDd.webp';
const OFFICE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663655903402/AMgpcaqceigRryMeCaNvCW/gallery-office-mrW2z269zhbXSA4pJpaXqS.webp';
const CAR = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663655903402/AMgpcaqceigRryMeCaNvCW/gallery-car-nGpnfERgXvVa53TeC3DnZ5.webp';
const HOTEL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663655903402/AMgpcaqceigRryMeCaNvCW/gallery-hospitality-Knd2XAjebnsamK8QrxxtVT.webp';

export default function Industries() {
  const { t, isRTL } = useLanguage();

  const industries = [
    {
      img: VILLA,
      en: 'Luxury Real Estate',
      ar: 'العقارات الفاخرة',
      desc_en: 'Immersive experiences that let buyers explore luxury villas and apartments before visiting. Qualify buyers, reduce wasted visits, and elevate your brand perception.',
      desc_ar: 'تجارب غامرة تتيح للمشترين استكشاف الفلل والشقق الفاخرة قبل الزيارة. أهّل المشترين وقلل الزيارات المضيعة وارفع إدراك علامتك التجارية.',
      stats: ['+340% engagement', '68% qualified leads', '48h delivery'],
    },
    {
      img: OFFICE,
      en: 'Real Estate Developers',
      ar: 'المطورون العقاريون',
      desc_en: 'Sell off-plan with confidence. Show buyers exactly what they\'re investing in — before the first brick is laid. Spatial experiences that make the future feel real.',
      desc_ar: 'بع على الخريطة بثقة. أظهر للمشترين بالضبط ما يستثمرون فيه — قبل وضع أول طوبة. تجارب مكانية تجعل المستقبل يبدو حقيقياً.',
      stats: ['+55% off-plan sales', 'Faster decisions', 'Global reach'],
    },
    {
      img: HOTEL,
      en: 'Premium Hospitality',
      ar: 'الضيافة المتميزة',
      desc_en: 'Let guests experience suites, venues, and facilities before booking. Reduce cancellations, increase direct bookings, and justify premium pricing.',
      desc_ar: 'دع الضيوف يجربون الأجنحة والمرافق قبل الحجز. قلل الإلغاءات وزد الحجوزات المباشرة وبرر الأسعار المتميزة.',
      stats: ['+42% direct bookings', 'Lower cancellations', 'Premium perception'],
    },
    {
      img: CAR,
      en: 'Luxury Automotive',
      ar: 'السيارات الفاخرة',
      desc_en: 'Immersive digital showrooms that let customers explore every detail of luxury vehicles — interior, exterior, and configuration options — from anywhere.',
      desc_ar: 'صالات عرض رقمية غامرة تتيح للعملاء استكشاف كل تفاصيل السيارات الفاخرة — الداخل والخارج وخيارات التهيئة — من أي مكان.',
      stats: ['24/7 showroom', 'Global audience', 'Higher intent leads'],
    },
    {
      img: OFFICE,
      en: 'Event Venues',
      ar: 'قاعات الفعاليات',
      desc_en: 'Help clients visualize their events in your space before committing. Reduce site visits, accelerate decisions, and showcase your venue at its absolute best.',
      desc_ar: 'ساعد العملاء على تصور فعالياتهم في مساحتك قبل الالتزام. قلل زيارات الموقع وسرّع القرارات واعرض مكانك في أفضل صورة.',
      stats: ['Faster bookings', 'Fewer site visits', 'Higher conversion'],
    },
    {
      img: VILLA,
      en: 'Premium Retail',
      ar: 'التجزئة الفاخرة',
      desc_en: 'Spatial commerce experiences that bring your store to every customer. Interactive product exploration that drives engagement and purchase intent.',
      desc_ar: 'تجارب تجارة مكانية تجلب متجرك إلى كل عميل. استكشاف تفاعلي للمنتجات يزيد التفاعل ونية الشراء.',
      stats: ['+85% product engagement', 'Global reach', 'Reduced returns'],
    },
  ];

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-20 bg-[#0B1D26]">
        <div className="absolute inset-0">
          <img src={VILLA} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D26] to-transparent" />
        </div>
        <div className="relative container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.2em] uppercase text-[#D6B36A] font-medium">{t('Industries', 'القطاعات')}</span>
            <h1 className="font-display text-5xl md:text-6xl text-white mt-4 leading-tight">
              {t('Built for every premium sector', 'مصمم لكل قطاع متميز')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-[#F5F1EA]">
        <div className="container space-y-16">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="rounded-2xl overflow-hidden aspect-video">
                  <img src={ind.img} alt={ind.en} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <h2 className="font-display text-3xl md:text-4xl text-[#0B1D26] mb-4">{isRTL ? ind.ar : ind.en}</h2>
                <p className="text-[#111111]/60 text-lg leading-relaxed mb-6">{isRTL ? ind.desc_ar : ind.desc_en}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {ind.stats.map(s => (
                    <span key={s} className="px-3 py-1.5 bg-[#0B1D26] text-[#D6B36A] text-xs rounded-full">{s}</span>
                  ))}
                </div>
                <Link href="/book-demo">
                  <span className="btn-outline-dark inline-flex items-center gap-2">{t('Get a Demo', 'احصل على تجربة')} <ArrowRight size={14} /></span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
