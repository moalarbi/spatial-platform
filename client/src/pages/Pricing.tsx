import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Pricing() {
  const { t, isRTL } = useLanguage();

  const plans = [
    {
      name_en: 'Essential',
      name_ar: 'الأساسية',
      price: 'SAR 2,500',
      period_en: 'per experience',
      period_ar: 'لكل تجربة',
      desc_en: 'Perfect for individual properties and single-space experiences.',
      desc_ar: 'مثالية للعقارات الفردية وتجارب المساحة الواحدة.',
      features_en: ['1 spatial experience', '48h delivery', 'Browser-native delivery', 'Shareable link', '3 months hosting', 'Basic analytics'],
      features_ar: ['تجربة مكانية واحدة', 'تسليم 48 ساعة', 'تسليم عبر المتصفح', 'رابط قابل للمشاركة', 'استضافة 3 أشهر', 'تحليلات أساسية'],
      highlight: false,
    },
    {
      name_en: 'Premium',
      name_ar: 'المتميزة',
      price: 'SAR 6,500',
      period_en: 'per experience',
      period_ar: 'لكل تجربة',
      desc_en: 'For luxury properties that demand the highest quality presentation.',
      desc_ar: 'للعقارات الفاخرة التي تتطلب أعلى جودة في العرض.',
      features_en: ['1 premium spatial experience', '24h rush delivery', 'Custom branded UI', 'Embedded on your website', '12 months hosting', 'Advanced analytics', 'Lead capture integration', 'Revision included'],
      features_ar: ['تجربة مكانية متميزة واحدة', 'تسليم عاجل 24 ساعة', 'واجهة مخصصة بعلامتك التجارية', 'مضمّنة في موقعك', 'استضافة 12 شهراً', 'تحليلات متقدمة', 'تكامل جمع العملاء المحتملين', 'مراجعة مشمولة'],
      highlight: true,
    },
    {
      name_en: 'Enterprise',
      name_ar: 'المؤسسية',
      price: t('Custom', 'مخصص'),
      period_en: 'tailored to your needs',
      period_ar: 'مصمم لاحتياجاتك',
      desc_en: 'For developers, agencies, and brands with multiple properties.',
      desc_ar: 'للمطورين والوكالات والعلامات التجارية ذات العقارات المتعددة.',
      features_en: ['Unlimited experiences', 'Dedicated account manager', 'White-label platform', 'Custom integrations', 'Priority delivery', 'Full analytics suite', 'SLA guarantee', 'Training & onboarding'],
      features_ar: ['تجارب غير محدودة', 'مدير حساب مخصص', 'منصة بالعلامة البيضاء', 'تكاملات مخصصة', 'تسليم ذو أولوية', 'مجموعة تحليلات كاملة', 'ضمان SLA', 'تدريب وإعداد'],
      highlight: false,
    },
  ];

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="overflow-hidden">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0B1D26]">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.2em] uppercase text-[#D6B36A] font-medium">{t('Pricing', 'الأسعار')}</span>
            <h1 className="font-display text-5xl md:text-6xl text-white mt-4 leading-tight">
              {t('Transparent pricing, premium results', 'أسعار شفافة، نتائج متميزة')}
            </h1>
            <p className="text-white/45 text-lg mt-4 max-w-xl mx-auto">
              {t('Every experience is crafted to the highest standard. No hidden fees, no surprises.', 'كل تجربة مصنوعة بأعلى المعايير. بدون رسوم خفية أو مفاجآت.')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-24 bg-[#F5F1EA]">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`relative rounded-2xl p-8 ${plan.highlight ? 'bg-[#0B1D26] text-white' : 'bg-white border border-[#D6B36A]/15'}`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#D6B36A] text-[#0B1D26] text-xs font-medium px-4 py-1 rounded-full">
                      {t('Most Popular', 'الأكثر شيوعاً')}
                    </span>
                  </div>
                )}
                <h3 className={`font-display text-2xl mb-1 ${plan.highlight ? 'text-white' : 'text-[#0B1D26]'}`}>
                  {isRTL ? plan.name_ar : plan.name_en}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlight ? 'text-white/50' : 'text-[#111111]/50'}`}>
                  {isRTL ? plan.desc_ar : plan.desc_en}
                </p>
                <div className="mb-6">
                  <span className={`font-display text-4xl ${plan.highlight ? 'text-[#D6B36A]' : 'text-[#0B1D26]'}`}>{plan.price}</span>
                  <span className={`text-sm ml-2 ${plan.highlight ? 'text-white/40' : 'text-[#111111]/40'}`}>
                    {isRTL ? plan.period_ar : plan.period_en}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {(isRTL ? plan.features_ar : plan.features_en).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={14} className={plan.highlight ? 'text-[#D6B36A]' : 'text-[#D6B36A]'} />
                      <span className={plan.highlight ? 'text-white/70' : 'text-[#111111]/60'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/book-demo">
                  <span className={`w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-medium transition-all ${
                    plan.highlight
                      ? 'bg-[#D6B36A] text-[#0B1D26] hover:bg-[#E8CC8F]'
                      : 'border border-[#0B1D26]/20 text-[#0B1D26] hover:bg-[#0B1D26] hover:text-white'
                  }`}>
                    {plan.name_en === 'Enterprise' ? t('Contact Us', 'تواصل معنا') : t('Get Started', 'ابدأ الآن')}
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* FAQ teaser */}
          <div className="text-center mt-16">
            <p className="text-[#111111]/50 mb-4">{t('Have questions about pricing?', 'هل لديك أسئلة حول الأسعار؟')}</p>
            <Link href="/faq">
              <span className="text-[#D6B36A] text-sm hover:underline">{t('View FAQ →', 'عرض الأسئلة الشائعة ←')}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
