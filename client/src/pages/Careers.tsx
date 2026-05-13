import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, MapPin, Clock } from 'lucide-react';

export default function Careers() {
  const { t, isRTL } = useLanguage();

  const roles = [
    { title_en: 'Senior Spatial Engineer', title_ar: 'مهندس مكاني أول', dept_en: 'Engineering', dept_ar: 'الهندسة', type_en: 'Full-time', type_ar: 'دوام كامل', location_en: 'Riyadh', location_ar: 'الرياض' },
    { title_en: 'Spatial Experience Designer', title_ar: 'مصمم تجربة مكانية', dept_en: 'Design', dept_ar: 'التصميم', type_en: 'Full-time', type_ar: 'دوام كامل', location_en: 'Riyadh', location_ar: 'الرياض' },
    { title_en: 'Business Development Manager', title_ar: 'مدير تطوير الأعمال', dept_en: 'Sales', dept_ar: 'المبيعات', type_en: 'Full-time', type_ar: 'دوام كامل', location_en: 'Riyadh / Jeddah', location_ar: 'الرياض / جدة' },
    { title_en: 'Capture Specialist', title_ar: 'متخصص الالتقاط', dept_en: 'Operations', dept_ar: 'العمليات', type_en: 'Full-time', type_ar: 'دوام كامل', location_en: 'Riyadh', location_ar: 'الرياض' },
  ];

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="overflow-hidden">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0B1D26]">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.2em] uppercase text-[#D6B36A] font-medium">{t('Careers', 'الوظائف')}</span>
            <h1 className="font-display text-5xl md:text-6xl text-white mt-4 leading-tight">
              {t('Build the future of spatial experiences', 'ابنِ مستقبل التجارب المكانية')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Why join */}
      <section className="py-24 bg-[#F5F1EA]">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { num: '01', en: 'Cutting-edge work', ar: 'عمل في طليعة التقنية', desc_en: 'Work with the most advanced spatial technology available — 3D Gaussian Splatting, real-time rendering, browser-native experiences.', desc_ar: 'اعمل مع أكثر تقنيات المكان تقدماً — 3D Gaussian Splatting والتصيير في الوقت الفعلي والتجارب الأصلية في المتصفح.' },
              { num: '02', en: 'Meaningful impact', ar: 'تأثير ذو معنى', desc_en: 'Our technology is transforming how Saudi Arabia\'s most prestigious properties are presented and experienced.', desc_ar: 'تقنيتنا تحول طريقة عرض وتجربة أرقى العقارات في المملكة العربية السعودية.' },
              { num: '03', en: 'Ambitious team', ar: 'فريق طموح', desc_en: 'Join a small, focused team that moves fast, builds with care, and holds itself to the highest standards.', desc_ar: 'انضم إلى فريق صغير ومركّز يتحرك بسرعة ويبني باهتمام ويلتزم بأعلى المعايير.' },
            ].map((v) => (
              <div key={v.num} className="card-premium p-8">
                <div className="font-display text-4xl text-[#D6B36A] opacity-25 mb-4">{v.num}</div>
                <h3 className="font-display text-xl text-[#0B1D26] mb-3">{isRTL ? v.ar : v.en}</h3>
                <p className="text-[#111111]/55 text-sm leading-relaxed">{isRTL ? v.desc_ar : v.desc_en}</p>
              </div>
            ))}
          </div>

          {/* Open roles */}
          <h2 className="font-display text-3xl text-[#0B1D26] mb-8">{t('Open Positions', 'الوظائف المتاحة')}</h2>
          <div className="space-y-4">
            {roles.map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-premium p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="text-xs text-[#D6B36A] tracking-widest uppercase mb-1">{isRTL ? role.dept_ar : role.dept_en}</div>
                  <h3 className="font-medium text-[#0B1D26] text-lg">{isRTL ? role.title_ar : role.title_en}</h3>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1 text-xs text-[#111111]/45">
                      <MapPin size={12} /> {isRTL ? role.location_ar : role.location_en}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#111111]/45">
                      <Clock size={12} /> {isRTL ? role.type_ar : role.type_en}
                    </span>
                  </div>
                </div>
                <Link href="/contact">
                  <span className="btn-outline-dark text-xs py-2.5 px-5 inline-flex items-center gap-2 whitespace-nowrap">
                    {t('Apply Now', 'تقدم الآن')} <ArrowRight size={12} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#111111]/50 mb-4">{t("Don't see a role that fits? We're always looking for exceptional people.", 'لا ترى دوراً مناسباً؟ نحن دائماً نبحث عن أشخاص استثنائيين.')}</p>
            <Link href="/contact">
              <span className="btn-outline-dark inline-flex items-center gap-2">{t('Send Open Application', 'أرسل طلباً مفتوحاً')} <ArrowRight size={14} /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
