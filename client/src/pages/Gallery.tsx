import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Play } from 'lucide-react';

const VILLA = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663655903402/AMgpcaqceigRryMeCaNvCW/gallery-villa-Xc9xyh9hRo2NcQ6p3GHJDd.webp';
const OFFICE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663655903402/AMgpcaqceigRryMeCaNvCW/gallery-office-mrW2z269zhbXSA4pJpaXqS.webp';
const CAR = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663655903402/AMgpcaqceigRryMeCaNvCW/gallery-car-nGpnfERgXvVa53TeC3DnZ5.webp';
const HOTEL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663655903402/AMgpcaqceigRryMeCaNvCW/gallery-hospitality-Knd2XAjebnsamK8QrxxtVT.webp';

export default function Gallery() {
  const { t, isRTL } = useLanguage();
  const [filter, setFilter] = useState('all');

  const demos = [
    { img: VILLA, en: 'Al Nakheel Villa', ar: 'فيلا النخيل', cat: 'real-estate', tag_en: 'Real Estate', tag_ar: 'عقارات', location_en: 'Riyadh', location_ar: 'الرياض' },
    { img: OFFICE, en: 'Kingdom Tower Office', ar: 'مكتب برج المملكة', cat: 'commercial', tag_en: 'Commercial', tag_ar: 'تجاري', location_en: 'Riyadh', location_ar: 'الرياض' },
    { img: CAR, en: 'Luxury Showroom', ar: 'صالة عرض فاخرة', cat: 'automotive', tag_en: 'Automotive', tag_ar: 'سيارات', location_en: 'Jeddah', location_ar: 'جدة' },
    { img: HOTEL, en: 'Royal Suite', ar: 'الجناح الملكي', cat: 'hospitality', tag_en: 'Hospitality', tag_ar: 'ضيافة', location_en: 'Riyadh', location_ar: 'الرياض' },
    { img: VILLA, en: 'Diriyah Residence', ar: 'مسكن الدرعية', cat: 'real-estate', tag_en: 'Real Estate', tag_ar: 'عقارات', location_en: 'Diriyah', location_ar: 'الدرعية' },
    { img: OFFICE, en: 'NEOM Business Hub', ar: 'مركز أعمال نيوم', cat: 'commercial', tag_en: 'Commercial', tag_ar: 'تجاري', location_en: 'NEOM', location_ar: 'نيوم' },
  ];

  const filters = [
    { val: 'all', en: 'All', ar: 'الكل' },
    { val: 'real-estate', en: 'Real Estate', ar: 'عقارات' },
    { val: 'commercial', en: 'Commercial', ar: 'تجاري' },
    { val: 'automotive', en: 'Automotive', ar: 'سيارات' },
    { val: 'hospitality', en: 'Hospitality', ar: 'ضيافة' },
  ];

  const filtered = filter === 'all' ? demos : demos.filter(d => d.cat === filter);

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="overflow-hidden">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0B1D26]">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.2em] uppercase text-[#D6B36A] font-medium">{t('Demo Gallery', 'معرض التجارب')}</span>
            <h1 className="font-display text-5xl md:text-6xl text-white mt-4 leading-tight">
              {t('See it to believe it', 'شاهد لتصدق')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-[#0B1D26] border-b border-white/8 sticky top-[72px] z-30">
        <div className="container flex flex-wrap gap-3">
          {filters.map(f => (
            <button
              key={f.val}
              onClick={() => setFilter(f.val)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${filter === f.val ? 'bg-[#D6B36A] text-[#0B1D26]' : 'text-white/50 hover:text-white border border-white/15 hover:border-white/30'}`}
            >
              {isRTL ? f.ar : f.en}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-16 bg-[#F5F1EA]">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative rounded-xl overflow-hidden cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={item.img} alt={item.en} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D26]/70 to-transparent" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#D6B36A] tracking-widest uppercase">{isRTL ? item.tag_ar : item.tag_en}</span>
                    <span className="text-xs text-white/40">{isRTL ? item.location_ar : item.location_en}</span>
                  </div>
                  <h3 className="font-display text-xl text-white">{isRTL ? item.ar : item.en}</h3>
                  <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-[#D6B36A] flex items-center justify-center">
                      <Play size={12} className="text-[#0B1D26]" />
                    </div>
                    <span className="text-white/70 text-sm">{t('View Experience', 'شاهد التجربة')}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B1D26] text-center">
        <div className="container">
          <h2 className="font-display text-4xl text-white mb-4">{t('Ready to create your own experience?', 'هل أنت مستعد لإنشاء تجربتك الخاصة؟')}</h2>
          <Link href="/book-demo">
            <span className="btn-primary inline-flex items-center gap-2">{t('Book a Demo', 'احجز تجربة')} <ArrowRight size={16} /></span>
          </Link>
        </div>
      </section>
    </div>
  );
}
