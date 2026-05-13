import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Eye, Layers, TrendingUp, Users, Zap, Globe } from 'lucide-react';

const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663655903402/AMgpcaqceigRryMeCaNvCW/hero-spatial-PvHJ6mYa4sKcj6D3fKSsf8.webp';

export default function Services() {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: <Eye size={28} />,
      en: 'Immersive Property Experience',
      ar: 'تجربة العقار الغامرة',
      desc_en: 'Transform any property into a fully navigable, photorealistic spatial experience. Buyers explore every room, every detail — from their device, before visiting.',
      desc_ar: 'حول أي عقار إلى تجربة مكانية قابلة للتنقل وفائقة الواقعية. يستكشف المشترون كل غرفة وكل تفصيل من أجهزتهم قبل الزيارة.',
      features_en: ['Full spatial navigation', 'Photorealistic quality', 'Browser-native delivery', 'Mobile optimized'],
      features_ar: ['تنقل مكاني كامل', 'جودة فائقة الواقعية', 'تسليم عبر المتصفح', 'محسّن للهاتف'],
    },
    {
      icon: <Layers size={28} />,
      en: 'Spatial Commerce',
      ar: 'التجارة المكانية',
      desc_en: 'Embed interactive product hotspots, pricing overlays, and direct purchase flows within the spatial experience. Turn exploration into conversion.',
      desc_ar: 'ضمّن نقاط تفاعل المنتجات وتراكبات الأسعار وتدفقات الشراء المباشر داخل التجربة المكانية. حوّل الاستكشاف إلى تحويل.',
      features_en: ['Interactive hotspots', 'Pricing overlays', 'Lead capture integration', 'CRM connectivity'],
      features_ar: ['نقاط تفاعل', 'تراكبات الأسعار', 'تكامل جمع العملاء المحتملين', 'اتصال CRM'],
    },
    {
      icon: <TrendingUp size={28} />,
      en: 'Luxury Showcasing',
      ar: 'العرض الفاخر',
      desc_en: 'Premium presentation packages for luxury real estate developers and agencies. Cinematic quality that elevates your brand above the competition.',
      desc_ar: 'حزم عرض متميزة لمطوري ووكالات العقارات الفاخرة. جودة سينمائية ترفع علامتك التجارية فوق المنافسة.',
      features_en: ['Branded experience', 'Custom UI design', 'Cinematic quality', 'White-label option'],
      features_ar: ['تجربة مميزة بالعلامة التجارية', 'تصميم واجهة مخصص', 'جودة سينمائية', 'خيار العلامة البيضاء'],
    },
    {
      icon: <Users size={28} />,
      en: 'Buyer Qualification',
      ar: 'تأهيل المشترين',
      desc_en: 'Analytics and engagement tracking that identifies serious buyers. Know who spent 12 minutes exploring the master bedroom before they call.',
      desc_ar: 'تحليلات وتتبع التفاعل الذي يحدد المشترين الجادين. اعرف من أمضى 12 دقيقة في استكشاف غرفة النوم الرئيسية قبل أن يتصل.',
      features_en: ['Engagement analytics', 'Heat mapping', 'Lead scoring', 'CRM integration'],
      features_ar: ['تحليلات التفاعل', 'خرائط الحرارة', 'تسجيل العملاء المحتملين', 'تكامل CRM'],
    },
    {
      icon: <Zap size={28} />,
      en: 'Rapid Delivery',
      ar: 'التسليم السريع',
      desc_en: 'From capture to live experience in 48 hours. Our optimized pipeline means your property is market-ready faster than any competitor.',
      desc_ar: 'من الالتقاط إلى التجربة المباشرة في 48 ساعة. خط أنابيبنا المحسّن يعني أن عقارك جاهز للسوق أسرع من أي منافس.',
      features_en: ['48h standard delivery', 'Rush 24h option', 'Quality guarantee', 'Revision included'],
      features_ar: ['تسليم قياسي 48 ساعة', 'خيار عاجل 24 ساعة', 'ضمان الجودة', 'مراجعة مشمولة'],
    },
    {
      icon: <Globe size={28} />,
      en: 'Multi-Property Platform',
      ar: 'منصة متعددة العقارات',
      desc_en: 'A branded portal hosting all your spatial experiences. One link for your entire portfolio — shareable, embeddable, always live.',
      desc_ar: 'بوابة مميزة تستضيف جميع تجاربك المكانية. رابط واحد لمحفظتك بأكملها — قابل للمشاركة والتضمين ومباشر دائماً.',
      features_en: ['Portfolio portal', 'Custom domain', 'Embed anywhere', 'Analytics dashboard'],
      features_ar: ['بوابة المحفظة', 'نطاق مخصص', 'تضمين في أي مكان', 'لوحة تحليلات'],
    },
  ];

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end pb-20 bg-[#0B1D26]">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D26] to-transparent" />
        </div>
        <div className="relative container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.2em] uppercase text-[#D6B36A] font-medium">{t('Services', 'الخدمات')}</span>
            <h1 className="font-display text-5xl md:text-6xl text-white mt-4 leading-tight max-w-2xl">
              {t('Everything you need to present property at its best', 'كل ما تحتاجه لتقديم العقار في أفضل صورة')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 bg-[#F5F1EA]">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="card-premium p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0B1D26] flex items-center justify-center text-[#D6B36A] mb-6">
                  {s.icon}
                </div>
                <h3 className="font-display text-2xl text-[#0B1D26] mb-3">{isRTL ? s.ar : s.en}</h3>
                <p className="text-[#111111]/60 text-sm leading-relaxed mb-6">{isRTL ? s.desc_ar : s.desc_en}</p>
                <ul className="space-y-2">
                  {(isRTL ? s.features_ar : s.features_en).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#111111]/50">
                      <div className="w-1 h-1 rounded-full bg-[#D6B36A]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0B1D26] text-center">
        <div className="container">
          <h2 className="font-display text-4xl text-white mb-4">{t('Ready to get started?', 'هل أنت مستعد للبدء؟')}</h2>
          <p className="text-white/45 mb-8 max-w-md mx-auto">{t('Book a demo and see what spatial experiences can do for your properties.', 'احجز تجربة وشاهد ما يمكن أن تفعله التجارب المكانية لعقاراتك.')}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/book-demo"><span className="btn-primary inline-flex items-center gap-2">{t('Book a Demo', 'احجز تجربة')} <ArrowRight size={16} /></span></Link>
            <Link href="/pricing"><span className="btn-outline inline-flex">{t('View Pricing', 'عرض الأسعار')}</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
