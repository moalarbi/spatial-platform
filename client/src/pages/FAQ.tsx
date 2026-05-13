import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { Plus, Minus, ArrowRight } from 'lucide-react';

export default function FAQ() {
  const { t, isRTL } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q_en: 'What exactly is a spatial experience?',
      q_ar: 'ما هي التجربة المكانية بالضبط؟',
      a_en: 'A spatial experience is a fully navigable, photorealistic 3D environment that runs directly in any web browser. Unlike 360 photos, you can move freely through the space in any direction — just like being there in person.',
      a_ar: 'التجربة المكانية هي بيئة ثلاثية الأبعاد قابلة للتنقل بالكامل وفائقة الواقعية تعمل مباشرة في أي متصفح ويب. على عكس صور 360، يمكنك التحرك بحرية في المساحة في أي اتجاه — تماماً كأنك هناك شخصياً.',
    },
    {
      q_en: 'How is this different from a 360 photo tour?',
      q_ar: 'كيف يختلف هذا عن جولة صور 360؟',
      a_en: '360 photos are static panoramas taken from fixed points. Our spatial experiences use 3D Gaussian Splatting to reconstruct the actual geometry and appearance of a space — allowing free movement, realistic depth, and photorealistic quality that 360 photos cannot match.',
      a_ar: 'صور 360 هي بانوراما ثابتة تُلتقط من نقاط ثابتة. تجاربنا المكانية تستخدم 3D Gaussian Splatting لإعادة بناء الهندسة الفعلية ومظهر المساحة — مما يسمح بالحركة الحرة والعمق الواقعي والجودة الفائقة للواقعية التي لا تستطيع صور 360 مجاراتها.',
    },
    {
      q_en: 'What equipment is needed to capture a property?',
      q_ar: 'ما المعدات المطلوبة لالتقاط عقار؟',
      a_en: 'Just a modern smartphone. Our capture process uses the camera on any recent iPhone or Android device. No special equipment, no LIDAR scanners, no professional camera rigs required.',
      a_ar: 'مجرد هاتف ذكي حديث. تستخدم عملية الالتقاط لدينا الكاميرا على أي جهاز iPhone أو Android حديث. لا حاجة لمعدات خاصة أو ماسحات LIDAR أو أجهزة كاميرا احترافية.',
    },
    {
      q_en: 'How long does delivery take?',
      q_ar: 'كم يستغرق التسليم؟',
      a_en: 'Standard delivery is 48 hours from capture. We also offer a 24-hour rush option for time-sensitive projects. Enterprise clients with ongoing needs receive priority processing.',
      a_ar: 'التسليم القياسي هو 48 ساعة من الالتقاط. نقدم أيضاً خيار عاجل لمدة 24 ساعة للمشاريع الحساسة للوقت. يحصل عملاء المؤسسات ذوو الاحتياجات المستمرة على معالجة ذات أولوية.',
    },
    {
      q_en: 'Does the experience require an app or special software?',
      q_ar: 'هل تتطلب التجربة تطبيقاً أو برنامجاً خاصاً؟',
      a_en: 'No. Every experience runs natively in any modern web browser — Chrome, Safari, Firefox, Edge. No downloads, no plugins, no friction. Your clients access it via a simple link.',
      a_ar: 'لا. كل تجربة تعمل بشكل أصلي في أي متصفح ويب حديث — Chrome وSafari وFirefox وEdge. بدون تنزيلات أو إضافات أو احتكاك. يصل عملاؤك إليها عبر رابط بسيط.',
    },
    {
      q_en: 'Can I embed the experience on my website?',
      q_ar: 'هل يمكنني تضمين التجربة في موقعي الإلكتروني؟',
      a_en: 'Yes. Every experience comes with an embed code that works on any website or landing page. Premium and Enterprise plans include custom branded embedding with your own domain.',
      a_ar: 'نعم. كل تجربة تأتي مع كود تضمين يعمل على أي موقع ويب أو صفحة هبوط. تتضمن الخطط المتميزة والمؤسسية تضميناً مخصصاً بعلامتك التجارية مع نطاقك الخاص.',
    },
    {
      q_en: 'Is the experience accessible on mobile devices?',
      q_ar: 'هل التجربة متاحة على الأجهزة المحمولة؟',
      a_en: 'Fully. Every experience is optimized for desktop, tablet, and mobile. The navigation adapts to touch controls on mobile devices, providing the same quality experience across all screen sizes.',
      a_ar: 'بالكامل. كل تجربة محسّنة لسطح المكتب والجهاز اللوحي والهاتف. يتكيف التنقل مع عناصر التحكم باللمس على الأجهزة المحمولة، مما يوفر نفس جودة التجربة عبر جميع أحجام الشاشات.',
    },
    {
      q_en: 'How is pricing structured?',
      q_ar: 'كيف يتم هيكلة الأسعار؟',
      a_en: 'We offer per-experience pricing starting at SAR 2,500 for the Essential plan, SAR 6,500 for Premium, and custom Enterprise pricing for ongoing needs. All plans include hosting for the duration specified.',
      a_ar: 'نقدم أسعاراً لكل تجربة تبدأ من 2,500 ريال سعودي للخطة الأساسية، و6,500 ريال سعودي للمتميزة، وأسعار مؤسسية مخصصة للاحتياجات المستمرة. تشمل جميع الخطط الاستضافة للمدة المحددة.',
    },
  ];

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="overflow-hidden">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0B1D26]">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.2em] uppercase text-[#D6B36A] font-medium">{t('FAQ', 'الأسئلة الشائعة')}</span>
            <h1 className="font-display text-5xl md:text-6xl text-white mt-4 leading-tight">
              {t('Common questions', 'الأسئلة الشائعة')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* FAQ list */}
      <section className="py-24 bg-[#F5F1EA]">
        <div className="container max-w-3xl">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="card-premium overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-medium text-[#0B1D26] pr-4">{isRTL ? faq.q_ar : faq.q_en}</span>
                  <div className="w-6 h-6 rounded-full border border-[#D6B36A]/30 flex items-center justify-center flex-shrink-0 text-[#D6B36A]">
                    {open === i ? <Minus size={12} /> : <Plus size={12} />}
                  </div>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-[#111111]/60 text-sm leading-relaxed border-t border-[#D6B36A]/10 pt-4">
                        {isRTL ? faq.a_ar : faq.a_en}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-[#111111]/50 mb-4">{t("Can't find your answer?", 'لا تجد إجابتك؟')}</p>
            <Link href="/contact">
              <span className="btn-outline-dark inline-flex items-center gap-2">{t('Contact Us', 'تواصل معنا')} <ArrowRight size={14} /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
