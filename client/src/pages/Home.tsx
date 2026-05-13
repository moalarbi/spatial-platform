/* ============================================================
   HOME PAGE — Saudi Spatial Platform
   Design: Spatial Warmth — Contemporary Saudi Luxury
   Sections: Hero, Trust Bar, Why, Experience, Industries,
             Technology, Demo Gallery, Process, CTA
   ============================================================ */
import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, ChevronRight, Building2, Hotel, Car, Calendar, Layers, Eye, Zap, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Scroll reveal hook inline
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((c, i) => {
            setTimeout(() => c.classList.add('visible'), i * 80);
          });
          if (e.target.classList.contains('reveal')) e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.1 }
    );
    el.querySelectorAll('.reveal').forEach(c => observer.observe(c));
    if (el.classList.contains('reveal')) observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663655903402/AMgpcaqceigRryMeCaNvCW/hero-spatial-PvHJ6mYa4sKcj6D3fKSsf8.webp';
const GALLERY_VILLA = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663655903402/AMgpcaqceigRryMeCaNvCW/gallery-villa-Xc9xyh9hRo2NcQ6p3GHJDd.webp';
const GALLERY_OFFICE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663655903402/AMgpcaqceigRryMeCaNvCW/gallery-office-mrW2z269zhbXSA4pJpaXqS.webp';
const GALLERY_CAR = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663655903402/AMgpcaqceigRryMeCaNvCW/gallery-car-nGpnfERgXvVa53TeC3DnZ5.webp';
const GALLERY_HOTEL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663655903402/AMgpcaqceigRryMeCaNvCW/gallery-hospitality-Knd2XAjebnsamK8QrxxtVT.webp';

export default function Home() {
  const { t, isRTL } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const [activeDemo, setActiveDemo] = useState(0);
  const demos = [
    { label: t('Luxury Villa', 'فيلا فاخرة'), img: GALLERY_VILLA, tag: t('Real Estate', 'عقارات') },
    { label: t('Executive Office', 'مكتب تنفيذي'), img: GALLERY_OFFICE, tag: t('Commercial', 'تجاري') },
    { label: t('Luxury Vehicle', 'سيارة فاخرة'), img: GALLERY_CAR, tag: t('Automotive', 'سيارات') },
    { label: t('Hospitality Suite', 'جناح فندقي'), img: GALLERY_HOTEL, tag: t('Hospitality', 'ضيافة') },
  ];

  const whyRef = useReveal();
  const industriesRef = useReveal();
  const techRef = useReveal();
  const processRef = useReveal();
  const demoRef = useReveal();

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="overflow-hidden">

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-end pb-24 overflow-hidden bg-[#0B1D26]">
        {/* Background image with parallax */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 scale-110"
        >
          <img
            src={HERO_IMAGE}
            alt="Luxury spatial experience"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Cinematic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D26] via-[#0B1D26]/40 to-[#0B1D26]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D26]/60 via-transparent to-transparent" />
        </motion.div>

        {/* Floating glass UI elements */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="absolute top-1/3 right-8 lg:right-16 glass rounded-xl p-4 hidden md:block"
        >
          <div className="text-[10px] text-[#D6B36A] tracking-widest uppercase mb-2">
            {t('Spatial Depth', 'العمق المكاني')}
          </div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-[#D6B36A] animate-pulse" />
            <span className="text-white text-xs">{t('Live Experience', 'تجربة مباشرة')}</span>
          </div>
          <div className="space-y-1.5">
            {['4K Resolution', 'Real-time Navigation', 'Browser Native'].map(f => (
              <div key={f} className="flex items-center gap-2">
                <CheckCircle size={10} className="text-[#D6B36A]" />
                <span className="text-white/60 text-[10px]">{f}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="absolute bottom-32 right-8 lg:right-24 glass rounded-xl p-3 hidden lg:block"
        >
          <div className="text-[10px] text-white/40 mb-1">{t('Engagement Rate', 'معدل التفاعل')}</div>
          <div className="text-2xl font-display text-[#D6B36A]">+340%</div>
          <div className="text-[10px] text-white/40">{t('vs. traditional listings', 'مقارنة بالعروض التقليدية')}</div>
        </motion.div>

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative container z-10"
        >
          <div className="max-w-3xl">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#D6B36A]" />
              <span className="text-[#D6B36A] text-xs tracking-widest uppercase">
                {t('Next-Generation Spatial Technology', 'تقنية مكانية من الجيل القادم')}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.05] mb-6"
            >
              {isRTL ? (
                <>استكشف العقار<br /><span className="text-gradient-gold">وكأنك بداخله</span></>
              ) : (
                <>Explore Properties<br /><span className="text-gradient-gold">Before You Visit</span></>
              )}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-light"
            >
              {t(
                'We transform properties into photorealistic immersive experiences. Buyers explore every detail — from their phone, before setting foot inside.',
                'نحول العقارات إلى تجارب غامرة فائقة الواقعية. يستكشف المشترون كل التفاصيل من هواتفهم، قبل أن يزوروا العقار.'
              )}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/book-demo">
                <span className="btn-primary flex items-center gap-2">
                  {t('Book a Demo', 'احجز تجربة')}
                  <ArrowRight size={16} />
                </span>
              </Link>
              <Link href="/gallery">
                <span className="btn-outline flex items-center gap-2">
                  <Play size={14} />
                  {t('View Live Experience', 'شاهد تجربة حية')}
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-[10px] tracking-widest uppercase">{t('Scroll', 'انزل')}</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-[#D6B36A]/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-[#0B1D26] border-t border-white/5 py-10">
        <div className="container">
          <p className="text-center text-white/25 text-xs tracking-[0.2em] uppercase mb-8">
            {t('Trusted by leading real estate brands across Saudi Arabia', 'موثوق به من قِبل كبرى العلامات العقارية في المملكة العربية السعودية')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              t('Dar Al Arkan', 'دار الأركان'),
              t('ROSHN', 'روشن'),
              t('Emaar KSA', 'إعمار السعودية'),
              t('Saudi Real Estate', 'العقارية السعودية'),
              t('Luxury Hospitality', 'الضيافة الفاخرة'),
              t('Premium Automotive', 'السيارات الفاخرة'),
            ].map((name) => (
              <div key={name} className="text-white/20 text-sm font-light tracking-wider hover:text-white/40 transition-colors">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SECTION ── */}
      <section className="py-28 bg-[#F5F1EA]" ref={whyRef}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Problems */}
            <div>
              <div className="reveal">
                <span className="text-xs tracking-[0.2em] uppercase text-[#D6B36A] font-medium">
                  {t('The Problem', 'المشكلة')}
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-[#0B1D26] mt-4 mb-8 leading-tight reveal">
                {t('Traditional property marketing is broken', 'التسويق العقاري التقليدي لم يعد كافياً')}
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: '01',
                    en: 'Wasted property visits from unqualified buyers who aren\'t genuinely interested.',
                    ar: 'زيارات عقارية مضيعة من مشترين غير مؤهلين وغير مهتمين فعلاً.'
                  },
                  {
                    icon: '02',
                    en: 'Weak visual marketing that fails to capture the true character of a space.',
                    ar: 'تسويق بصري ضعيف لا يعكس الطابع الحقيقي للمساحة.'
                  },
                  {
                    icon: '03',
                    en: 'Low engagement from static photos and flat floor plans.',
                    ar: 'تفاعل منخفض مع الصور الثابتة ومخططات الطوابق المسطحة.'
                  },
                  {
                    icon: '04',
                    en: 'Traditional listings feel outdated in a market that expects premium experiences.',
                    ar: 'القوائم التقليدية تبدو متقادمة في سوق يتوقع تجارب متميزة.'
                  },
                ].map((item) => (
                  <div key={item.icon} className="flex gap-4 reveal">
                    <span className="text-[#D6B36A] font-display text-sm opacity-60 mt-0.5 flex-shrink-0 w-6">{item.icon}</span>
                    <p className="text-[#111111]/65 text-base leading-relaxed">{isRTL ? item.ar : item.en}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Benefits */}
            <div>
              <div className="reveal">
                <span className="text-xs tracking-[0.2em] uppercase text-[#D6B36A] font-medium">
                  {t('The Solution', 'الحل')}
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-[#0B1D26] mt-4 mb-8 leading-tight reveal">
                {t('Immersive experiences that convert', 'تجارب غامرة تحقق النتائج')}
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    icon: <Eye size={20} />,
                    en: 'Photorealistic immersive experiences that put buyers inside the property.',
                    ar: 'تجارب غامرة فائقة الواقعية تضع المشترين داخل العقار.'
                  },
                  {
                    icon: <TrendingUp size={20} />,
                    en: 'Higher engagement — 340% more time spent vs. traditional listings.',
                    ar: 'تفاعل أعلى — 340% وقت أكثر مقارنة بالقوائم التقليدية.'
                  },
                  {
                    icon: <Users size={20} />,
                    en: 'Qualified buyers who arrive having already experienced the property.',
                    ar: 'مشترون مؤهلون يصلون وقد جربوا العقار مسبقاً.'
                  },
                  {
                    icon: <Zap size={20} />,
                    en: 'Premium perception that positions your property above the competition.',
                    ar: 'إدراك متميز يضع عقارك فوق المنافسة.'
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 card-premium reveal">
                    <div className="w-10 h-10 rounded-lg bg-[#0B1D26] flex items-center justify-center flex-shrink-0 text-[#D6B36A]">
                      {item.icon}
                    </div>
                    <p className="text-[#111111]/70 text-sm leading-relaxed self-center">
                      {isRTL ? item.ar : item.en}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE EXPERIENCE SECTION ── */}
      <section className="py-28 bg-[#ECE7DF]">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-[#D6B36A] font-medium reveal">
              {t('The Experience', 'التجربة')}
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-[#0B1D26] mt-4 leading-tight reveal">
              {t('Browser-native. No app required.', 'في المتصفح مباشرة. بدون تطبيق.')}
            </h2>
            <p className="text-[#111111]/55 text-lg mt-4 max-w-xl mx-auto reveal">
              {t(
                'Every experience runs directly in the browser — on desktop, tablet, or mobile. No downloads, no plugins, no friction.',
                'كل تجربة تعمل مباشرة في المتصفح — على سطح المكتب أو الجهاز اللوحي أو الهاتف. بدون تنزيلات أو إضافات.'
              )}
            </p>
          </div>

          {/* Mockup display */}
          <div className="relative max-w-5xl mx-auto">
            {/* Desktop mockup */}
            <div className="relative rounded-2xl overflow-hidden border border-[#D6B36A]/20 shadow-2xl shadow-[#0B1D26]/20 reveal">
              <div className="bg-[#0B1D26] px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  {['#ff5f57','#ffbd2e','#28c840'].map(c => (
                    <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
                  ))}
                </div>
                <div className="flex-1 mx-4 bg-white/8 rounded-md px-3 py-1 text-white/40 text-xs">
                  spatial.sa/experience/villa-riyadh
                </div>
              </div>
              <div className="relative aspect-video">
                <img src={GALLERY_VILLA} alt="Spatial experience demo" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D26]/60 to-transparent" />

                {/* Floating UI overlays */}
                <div className="absolute bottom-6 left-6 glass-dark rounded-xl p-3">
                  <div className="text-[10px] text-[#D6B36A] tracking-widest uppercase mb-1">
                    {t('Current Room', 'الغرفة الحالية')}
                  </div>
                  <div className="text-white text-sm font-light">{t('Main Living Area', 'غرفة المعيشة الرئيسية')}</div>
                  <div className="flex gap-3 mt-2">
                    {[t('Floor Plan', 'مخطط الطابق'), t('Gallery', 'المعرض'), t('Details', 'التفاصيل')].map(tab => (
                      <span key={tab} className="text-[10px] text-white/40 hover:text-white cursor-pointer transition-colors">{tab}</span>
                    ))}
                  </div>
                </div>

                <div className="absolute top-6 right-6 glass-dark rounded-xl p-3 text-right">
                  <div className="text-[10px] text-white/40 mb-1">{t('Property Size', 'مساحة العقار')}</div>
                  <div className="text-white text-lg font-display">1,250 m²</div>
                </div>

                {/* Navigation dots */}
                <div className="absolute bottom-6 right-6 flex gap-2">
                  {[0,1,2,3,4].map(i => (
                    <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-[#D6B36A]' : 'bg-white/30'}`} />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating depth cards */}
            <div className="absolute -bottom-8 -left-8 glass-warm rounded-xl p-4 shadow-xl hidden md:block">
              <div className="text-xs text-[#0B1D26]/50 mb-1">{t('Buyer Engagement', 'تفاعل المشتري')}</div>
              <div className="text-2xl font-display text-[#0B1D26]">12.4 min</div>
              <div className="text-xs text-[#D6B36A]">{t('avg. session duration', 'متوسط مدة الجلسة')}</div>
            </div>

            <div className="absolute -top-6 -right-6 glass-warm rounded-xl p-4 shadow-xl hidden lg:block">
              <div className="text-xs text-[#0B1D26]/50 mb-1">{t('Conversion Rate', 'معدل التحويل')}</div>
              <div className="text-2xl font-display text-[#0B1D26]">+68%</div>
              <div className="text-xs text-[#D6B36A]">{t('qualified inquiries', 'استفسارات مؤهلة')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-28 bg-[#F5F1EA]" ref={industriesRef}>
        <div className="container">
          <div className="mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-[#D6B36A] font-medium reveal">
              {t('Industries', 'القطاعات')}
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-[#0B1D26] mt-4 leading-tight max-w-xl reveal">
              {t('Built for every premium sector', 'مصمم لكل قطاع متميز')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <Building2 size={24} />,
                en: 'Luxury Real Estate',
                ar: 'العقارات الفاخرة',
                desc_en: 'Transform property listings into immersive experiences that qualify buyers before the first visit.',
                desc_ar: 'حول قوائم العقارات إلى تجارب غامرة تؤهل المشترين قبل الزيارة الأولى.',
                img: GALLERY_VILLA,
              },
              {
                icon: <Layers size={24} />,
                en: 'Developers',
                ar: 'المطورون',
                desc_en: 'Sell off-plan with confidence. Show buyers exactly what they\'re investing in.',
                desc_ar: 'بع على الخريطة بثقة. أظهر للمشترين بالضبط ما يستثمرون فيه.',
                img: GALLERY_OFFICE,
              },
              {
                icon: <Hotel size={24} />,
                en: 'Hospitality',
                ar: 'الضيافة',
                desc_en: 'Let guests experience suites, venues, and facilities before booking.',
                desc_ar: 'دع الضيوف يجربون الأجنحة والمرافق قبل الحجز.',
                img: GALLERY_HOTEL,
              },
              {
                icon: <Car size={24} />,
                en: 'Automotive',
                ar: 'السيارات',
                desc_en: 'Immersive digital showrooms that showcase every detail of luxury vehicles.',
                desc_ar: 'صالات عرض رقمية غامرة تعرض كل تفاصيل السيارات الفاخرة.',
                img: GALLERY_CAR,
              },
              {
                icon: <Calendar size={24} />,
                en: 'Event Venues',
                ar: 'قاعات الفعاليات',
                desc_en: 'Help clients visualize their events in your space before committing.',
                desc_ar: 'ساعد العملاء على تصور فعالياتهم في مساحتك قبل الالتزام.',
                img: GALLERY_OFFICE,
              },
              {
                icon: <Eye size={24} />,
                en: 'Premium Retail',
                ar: 'التجزئة الفاخرة',
                desc_en: 'Spatial commerce experiences that bring your store to every customer.',
                desc_ar: 'تجارب تجارة مكانية تجلب متجرك إلى كل عميل.',
                img: GALLERY_VILLA,
              },
            ].map((industry, i) => (
              <Link key={i} href="/industries">
                <div className="group relative overflow-hidden rounded-xl cursor-pointer reveal">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={industry.img}
                      alt={industry.en}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D26]/80 via-[#0B1D26]/20 to-transparent" />
                  </div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="text-[#D6B36A] mb-2">{industry.icon}</div>
                    <h3 className="font-display text-xl text-white mb-1">
                      {isRTL ? industry.ar : industry.en}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                      {isRTL ? industry.desc_ar : industry.desc_en}
                    </p>
                    <div className="flex items-center gap-1 mt-2 text-[#D6B36A] text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      {t('Learn more', 'اعرف أكثر')} <ChevronRight size={12} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY SECTION ── */}
      <section className="py-28 bg-[#0B1D26]" ref={techRef}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs tracking-[0.2em] uppercase text-[#D6B36A] font-medium reveal">
                {t('The Technology', 'التقنية')}
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-white mt-4 mb-6 leading-tight reveal">
                {t('Photorealism, not photography', 'فائق الواقعية، ليس مجرد تصوير')}
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-8 reveal">
                {t(
                  'We use 3D Gaussian Splatting — a breakthrough technology that captures spaces with cinematic detail using nothing more than a smartphone. The result is a navigable, photorealistic environment that runs in any browser.',
                  'نستخدم تقنية 3D Gaussian Splatting — تقنية ثورية تلتقط المساحات بتفاصيل سينمائية باستخدام الهاتف الذكي فقط. النتيجة بيئة قابلة للتنقل وفائقة الواقعية تعمل في أي متصفح.'
                )}
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { en: 'Captured with a smartphone — no special equipment needed', ar: 'يُلتقط بالهاتف الذكي — لا حاجة لمعدات خاصة' },
                  { en: 'Photorealistic quality indistinguishable from reality', ar: 'جودة فائقة الواقعية لا تُميز عن الواقع' },
                  { en: 'Runs natively in any modern browser', ar: 'يعمل بشكل أصلي في أي متصفح حديث' },
                  { en: 'Accessible on desktop, tablet, and mobile', ar: 'متاح على سطح المكتب والجهاز اللوحي والهاتف' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 reveal">
                    <div className="w-5 h-5 rounded-full border border-[#D6B36A]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D6B36A]" />
                    </div>
                    <span className="text-white/60 text-sm">{isRTL ? item.ar : item.en}</span>
                  </div>
                ))}
              </div>
              <Link href="/technology">
                <span className="btn-outline reveal inline-flex items-center gap-2">
                  {t('Explore the Technology', 'استكشف التقنية')}
                  <ArrowRight size={16} />
                </span>
              </Link>
            </div>

            {/* Visual diagram */}
            <div className="relative reveal">
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Concentric rings */}
                {[1, 0.75, 0.5, 0.25].map((scale, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-full border border-[#D6B36A]/10"
                    style={{ transform: `scale(${scale})`, margin: 'auto', top: 0, left: 0, right: 0, bottom: 0 }}
                  />
                ))}

                {/* Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#D6B36A]/10 border border-[#D6B36A]/30 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#D6B36A]/20 border border-[#D6B36A]/50 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#D6B36A]" />
                    </div>
                  </div>
                </div>

                {/* Orbiting labels */}
                {[
                  { label: t('Capture', 'التقاط'), angle: 0 },
                  { label: t('Process', 'معالجة'), angle: 90 },
                  { label: t('Optimize', 'تحسين'), angle: 180 },
                  { label: t('Deliver', 'تسليم'), angle: 270 },
                ].map(({ label, angle }) => {
                  const rad = (angle - 90) * Math.PI / 180;
                  const r = 42;
                  const x = 50 + r * Math.cos(rad);
                  const y = 50 + r * Math.sin(rad);
                  return (
                    <div
                      key={label}
                      className="absolute glass rounded-lg px-3 py-1.5 -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${x}%`, top: `${y}%` }}
                    >
                      <span className="text-[#D6B36A] text-xs font-medium">{label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEMO SHOWCASE ── */}
      <section className="py-28 bg-[#ECE7DF]" ref={demoRef}>
        <div className="container">
          <div className="mb-12">
            <span className="text-xs tracking-[0.2em] uppercase text-[#D6B36A] font-medium reveal">
              {t('Demo Gallery', 'معرض التجارب')}
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-[#0B1D26] mt-4 leading-tight reveal">
              {t('See it to believe it', 'شاهد لتصدق')}
            </h2>
          </div>

          {/* Demo selector */}
          <div className="flex flex-wrap gap-3 mb-8 reveal">
            {demos.map((demo, i) => (
              <button
                key={i}
                onClick={() => setActiveDemo(i)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeDemo === i
                    ? 'bg-[#0B1D26] text-[#D6B36A]'
                    : 'bg-white/60 text-[#0B1D26]/60 hover:bg-white hover:text-[#0B1D26]'
                }`}
              >
                {demo.label}
              </button>
            ))}
          </div>

          {/* Active demo */}
          <div className="relative rounded-2xl overflow-hidden reveal" style={{ aspectRatio: '16/7' }}>
            <motion.img
              key={activeDemo}
              src={demos[activeDemo].img}
              alt={demos[activeDemo].label}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D26]/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <div className="text-xs text-[#D6B36A] tracking-widest uppercase mb-1">{demos[activeDemo].tag}</div>
              <div className="font-display text-2xl text-white">{demos[activeDemo].label}</div>
            </div>
            <div className="absolute top-6 right-6">
              <Link href="/gallery">
                <span className="glass rounded-full px-4 py-2 text-white text-xs hover:bg-white/10 transition-colors flex items-center gap-2">
                  {t('View Full Experience', 'شاهد التجربة الكاملة')}
                  <ArrowRight size={12} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS SECTION ── */}
      <section className="py-28 bg-[#F5F1EA]" ref={processRef}>
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-[#D6B36A] font-medium reveal">
              {t('How It Works', 'كيف يعمل')}
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-[#0B1D26] mt-4 leading-tight reveal">
              {t('From space to experience in 4 steps', 'من المساحة إلى التجربة في 4 خطوات')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: '01',
                en: 'Capture',
                ar: 'التقاط',
                desc_en: 'We capture your space using a smartphone — no special equipment, no disruption to your schedule.',
                desc_ar: 'نلتقط مساحتك باستخدام هاتف ذكي — بدون معدات خاصة أو تعطيل لجدولك.',
              },
              {
                num: '02',
                en: 'Processing',
                ar: 'المعالجة',
                desc_en: 'Our platform processes the capture into a photorealistic 3D spatial environment.',
                desc_ar: 'تعالج منصتنا الالتقاط إلى بيئة مكانية ثلاثية الأبعاد فائقة الواقعية.',
              },
              {
                num: '03',
                en: 'Optimization',
                ar: 'التحسين',
                desc_en: 'We optimize for browser performance — fast loading, smooth navigation on any device.',
                desc_ar: 'نحسّن لأداء المتصفح — تحميل سريع وتنقل سلس على أي جهاز.',
              },
              {
                num: '04',
                en: 'Delivery',
                ar: 'التسليم',
                desc_en: 'Your experience is live — shareable via link, embeddable on any website.',
                desc_ar: 'تجربتك جاهزة — قابلة للمشاركة عبر رابط، وقابلة للتضمين في أي موقع.',
              },
            ].map((step, i) => (
              <div key={i} className="relative reveal">
                {/* Connector line */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#D6B36A]/30 to-transparent z-0" />
                )}
                <div className="relative z-10">
                  <div className="font-display text-5xl text-[#D6B36A] opacity-20 mb-4">{step.num}</div>
                  <h3 className="font-display text-2xl text-[#0B1D26] mb-3">
                    {isRTL ? step.ar : step.en}
                  </h3>
                  <p className="text-[#111111]/55 text-sm leading-relaxed">
                    {isRTL ? step.desc_ar : step.desc_en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="py-16 bg-[#123040]">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { num: '+340%', en: 'Buyer Engagement', ar: 'تفاعل المشترين' },
              { num: '+68%', en: 'Qualified Inquiries', ar: 'استفسارات مؤهلة' },
              { num: '12.4m', en: 'Avg. Session Time', ar: 'متوسط وقت الجلسة' },
              { num: '48h', en: 'Delivery Time', ar: 'وقت التسليم' },
            ].map((stat) => (
              <div key={stat.num}>
                <div className="font-display text-4xl md:text-5xl text-[#D6B36A] mb-2">{stat.num}</div>
                <div className="text-white/40 text-sm tracking-wide">{isRTL ? stat.ar : stat.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="relative py-32 bg-[#0B1D26] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0B1D26]/80" />
        </div>
        <div className="relative container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="text-xs tracking-[0.2em] uppercase text-[#D6B36A] font-medium">
              {t('Get Started', 'ابدأ الآن')}
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mt-4 mb-6 leading-tight">
              {isRTL ? (
                <>حوّل أي مساحة<br />إلى تجربة تفاعلية</>
              ) : (
                <>Transform any space into<br />an immersive experience</>
              )}
            </h2>
            <p className="text-white/45 text-lg mb-10 max-w-lg mx-auto">
              {t(
                'Join the future of luxury property marketing in Saudi Arabia.',
                'انضم إلى مستقبل التسويق العقاري الفاخر في المملكة العربية السعودية.'
              )}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/book-demo">
                <span className="btn-primary flex items-center gap-2">
                  {isRTL ? 'ابدأ الآن' : 'Start Now'}
                  <ArrowRight size={16} />
                </span>
              </Link>
              <Link href="/pricing">
                <span className="btn-outline flex items-center gap-2">
                  {t('View Pricing', 'عرض الأسعار')}
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
