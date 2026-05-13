import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Smartphone, Globe, Zap, Eye } from 'lucide-react';

const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663655903402/AMgpcaqceigRryMeCaNvCW/hero-spatial-PvHJ6mYa4sKcj6D3fKSsf8.webp';

export default function Technology() {
  const { t, isRTL } = useLanguage();

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-end pb-20 bg-[#0B1D26]">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D26] via-[#0B1D26]/50 to-transparent" />
        </div>
        <div className="relative container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.2em] uppercase text-[#D6B36A] font-medium">{t('Technology', 'التقنية')}</span>
            <h1 className="font-display text-5xl md:text-7xl text-white mt-4 leading-tight max-w-3xl">
              {t('Photorealism, not photography', 'فائق الواقعية، ليس مجرد تصوير')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main tech explanation */}
      <section className="py-24 bg-[#F5F1EA]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="font-display text-4xl text-[#0B1D26] mb-6">{t('3D Gaussian Splatting', '3D Gaussian Splatting')}</h2>
            <p className="text-[#111111]/60 text-xl leading-relaxed">
              {t(
                'A breakthrough in spatial computing. Unlike traditional 3D scanning or 360 photography, Gaussian Splatting reconstructs spaces as millions of photorealistic volumetric points — creating environments that look and feel indistinguishable from reality.',
                'اختراق في الحوسبة المكانية. على عكس المسح ثلاثي الأبعاد التقليدي أو تصوير 360 درجة، يعيد Gaussian Splatting بناء المساحات كملايين النقاط الحجمية الفائقة الواقعية — مما يخلق بيئات تبدو وتشعر بأنها لا تمييز عن الواقع.'
              )}
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Smartphone size={24} />, en: 'Smartphone Capture', ar: 'التقاط بالهاتف', desc_en: 'No special equipment. Any modern smartphone captures the data needed for a photorealistic spatial experience.', desc_ar: 'لا حاجة لمعدات خاصة. أي هاتف ذكي حديث يلتقط البيانات اللازمة لتجربة مكانية فائقة الواقعية.' },
              { icon: <Eye size={24} />, en: 'Cinematic Detail', ar: 'تفاصيل سينمائية', desc_en: 'Every surface, texture, and light reflection is captured with cinematic fidelity — not approximated.', desc_ar: 'كل سطح وملمس وانعكاس ضوء يُلتقط بدقة سينمائية — وليس تقريباً.' },
              { icon: <Globe size={24} />, en: 'Browser Native', ar: 'أصلي في المتصفح', desc_en: 'Runs directly in any modern browser. No app download, no plugin, no friction for the end user.', desc_ar: 'يعمل مباشرة في أي متصفح حديث. بدون تنزيل تطبيق أو إضافة أو احتكاك للمستخدم النهائي.' },
              { icon: <Zap size={24} />, en: 'Optimized Performance', ar: 'أداء محسّن', desc_en: 'Our processing pipeline optimizes every experience for fast loading and smooth navigation on any device.', desc_ar: 'يحسّن خط معالجتنا كل تجربة للتحميل السريع والتنقل السلس على أي جهاز.' },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="card-premium p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0B1D26] flex items-center justify-center text-[#D6B36A] mb-4">{f.icon}</div>
                <h3 className="font-display text-xl text-[#0B1D26] mb-2">{isRTL ? f.ar : f.en}</h3>
                <p className="text-[#111111]/55 text-sm leading-relaxed">{isRTL ? f.desc_ar : f.desc_en}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-[#0B1D26]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-white">{t('Not all spatial technology is equal', 'ليست كل تقنيات المكان متساوية')}</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 pr-8 text-white/40 font-light">{t('Feature', 'الميزة')}</th>
                  <th className="py-4 px-6 text-[#D6B36A] font-medium text-center">{t('Spatial (Us)', 'سباشيال (نحن)')}</th>
                  <th className="py-4 px-6 text-white/30 font-light text-center">{t('360 Photos', 'صور 360')}</th>
                  <th className="py-4 px-6 text-white/30 font-light text-center">{t('Traditional 3D', 'ثلاثي الأبعاد التقليدي')}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [t('Photorealistic quality', 'جودة فائقة الواقعية'), '✓', '✗', '~'],
                  [t('Browser native', 'أصلي في المتصفح'), '✓', '✓', '✗'],
                  [t('Smartphone capture', 'التقاط بالهاتف'), '✓', '✓', '✗'],
                  [t('Free navigation', 'تنقل حر'), '✓', '✗', '✓'],
                  [t('48h delivery', 'تسليم 48 ساعة'), '✓', '✓', '✗'],
                  [t('Spatial commerce', 'تجارة مكانية'), '✓', '✗', '✗'],
                ].map(([feat, us, p360, trad]) => (
                  <tr key={feat as string} className="border-b border-white/5">
                    <td className="py-4 pr-8 text-white/60">{feat}</td>
                    <td className="py-4 px-6 text-center text-[#D6B36A]">{us}</td>
                    <td className="py-4 px-6 text-center text-white/30">{p360}</td>
                    <td className="py-4 px-6 text-center text-white/30">{trad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#F5F1EA] text-center">
        <div className="container">
          <h2 className="font-display text-4xl text-[#0B1D26] mb-4">{t('Experience the difference', 'جرّب الفرق')}</h2>
          <p className="text-[#111111]/55 mb-8 max-w-md mx-auto">{t('Book a demo and see our technology in action on a real property.', 'احجز تجربة وشاهد تقنيتنا في العمل على عقار حقيقي.')}</p>
          <Link href="/book-demo">
            <span className="btn-primary inline-flex items-center gap-2">{t('Book a Demo', 'احجز تجربة')} <ArrowRight size={16} /></span>
          </Link>
        </div>
      </section>
    </div>
  );
}
