import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663655903402/AMgpcaqceigRryMeCaNvCW/hero-spatial-PvHJ6mYa4sKcj6D3fKSsf8.webp';

export default function About() {
  const { t, isRTL } = useLanguage();

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-20 bg-[#0B1D26]">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D26] to-transparent" />
        </div>
        <div className="relative container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.2em] uppercase text-[#D6B36A] font-medium">{t('About Us', 'من نحن')}</span>
            <h1 className="font-display text-5xl md:text-6xl text-white mt-4 leading-tight">
              {t('We believe spaces deserve', 'نؤمن أن المساحات تستحق')}<br />
              <span className="text-gradient-gold">{t('to be truly experienced', 'أن تُعاش حقاً')}</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-[#F5F1EA]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs tracking-[0.2em] uppercase text-[#D6B36A] font-medium">{t('Our Mission', 'مهمتنا')}</span>
              <h2 className="font-display text-4xl text-[#0B1D26] mt-4 mb-6 leading-tight">
                {t('Redefining how Saudi Arabia experiences property', 'إعادة تعريف كيفية تجربة العقارات في المملكة العربية السعودية')}
              </h2>
              <p className="text-[#111111]/60 text-lg leading-relaxed mb-6">
                {t(
                  'Spatial was founded on a simple belief: that the gap between a property listing and a genuine property experience is too large. We built the technology to close that gap — delivering photorealistic, browser-native spatial experiences that transform how luxury properties are marketed and sold in Saudi Arabia.',
                  'تأسست سباشيال على اعتقاد بسيط: أن الفجوة بين قائمة العقار وتجربة العقار الحقيقية كبيرة جداً. بنينا التقنية لسد هذه الفجوة — نقدم تجارب مكانية فائقة الواقعية تعمل في المتصفح وتحول طريقة تسويق وبيع العقارات الفاخرة في المملكة العربية السعودية.'
                )}
              </p>
              <p className="text-[#111111]/60 text-lg leading-relaxed">
                {t(
                  'We are not a 360 photography company. We are not a VR tour provider. We are the future of spatial commerce — where every property, vehicle, or space becomes a fully navigable, photorealistic world.',
                  'نحن لسنا شركة تصوير 360 درجة. لسنا مزود جولات VR. نحن مستقبل التجارة المكانية — حيث يصبح كل عقار أو سيارة أو مساحة عالماً قابلاً للتنقل وفائق الواقعية.'
                )}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '2023', label: t('Founded', 'تأسست') },
                { num: '50+', label: t('Experiences Delivered', 'تجربة مُسلَّمة') },
                { num: '15+', label: t('Enterprise Clients', 'عميل مؤسسي') },
                { num: '48h', label: t('Avg. Delivery', 'متوسط التسليم') },
              ].map((s) => (
                <div key={s.num} className="card-premium p-6 text-center">
                  <div className="font-display text-4xl text-[#0B1D26] mb-1">{s.num}</div>
                  <div className="text-[#111111]/50 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0B1D26]">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-[#D6B36A] font-medium">{t('Our Values', 'قيمنا')}</span>
            <h2 className="font-display text-4xl text-white mt-4">{t('What drives us', 'ما يحركنا')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '01', en: 'Precision', ar: 'الدقة', desc_en: 'Every detail matters. We obsess over quality because our clients\' reputations depend on it.', desc_ar: 'كل تفصيل مهم. نهتم بالجودة لأن سمعة عملائنا تعتمد عليها.' },
              { num: '02', en: 'Innovation', ar: 'الابتكار', desc_en: 'We use the most advanced spatial technology available — and we keep pushing further.', desc_ar: 'نستخدم أكثر تقنيات المكان تقدماً المتاحة — ونواصل الدفع إلى الأمام.' },
              { num: '03', en: 'Partnership', ar: 'الشراكة', desc_en: 'We succeed when our clients succeed. Every engagement is a long-term relationship.', desc_ar: 'ننجح عندما ينجح عملاؤنا. كل تعامل هو علاقة طويلة الأمد.' },
            ].map((v) => (
              <div key={v.num} className="glass rounded-xl p-8">
                <div className="font-display text-4xl text-[#D6B36A] opacity-30 mb-4">{v.num}</div>
                <h3 className="font-display text-2xl text-white mb-3">{isRTL ? v.ar : v.en}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{isRTL ? v.desc_ar : v.desc_en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#F5F1EA] text-center">
        <div className="container">
          <h2 className="font-display text-4xl text-[#0B1D26] mb-6">{t('Ready to transform your property marketing?', 'هل أنت مستعد لتحويل تسويق عقاراتك؟')}</h2>
          <Link href="/book-demo">
            <span className="btn-primary inline-flex items-center gap-2">
              {t('Book a Demo', 'احجز تجربة')} <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
