import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function Terms() {
  const { t, isRTL } = useLanguage();

  const sections = [
    {
      title_en: '1. Acceptance of Terms',
      title_ar: '1. قبول الشروط',
      content_en: 'By accessing or using the services provided by Spatial Saudi Arabia ("Spatial", "we", "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.',
      content_ar: 'من خلال الوصول إلى الخدمات التي تقدمها سباشيال المملكة العربية السعودية ("سباشيال"، "نحن") أو استخدامها، فإنك توافق على الالتزام بشروط الخدمة هذه. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام خدماتنا.',
    },
    {
      title_en: '2. Services Description',
      title_ar: '2. وصف الخدمات',
      content_en: 'Spatial provides immersive spatial experience creation services, including capture, processing, optimization, and delivery of 3D spatial environments for real estate, hospitality, automotive, and other premium sectors.',
      content_ar: 'تقدم سباشيال خدمات إنشاء التجارب المكانية الغامرة، بما في ذلك الالتقاط والمعالجة والتحسين وتسليم البيئات المكانية ثلاثية الأبعاد للعقارات والضيافة والسيارات وغيرها من القطاعات المتميزة.',
    },
    {
      title_en: '3. Client Obligations',
      title_ar: '3. التزامات العميل',
      content_en: 'Clients must ensure they have the legal right to authorize capture of the properties or spaces submitted for processing. Clients are responsible for obtaining any necessary permissions from property owners, tenants, or other relevant parties.',
      content_ar: 'يجب على العملاء التأكد من أن لديهم الحق القانوني للتصريح بالتقاط العقارات أو المساحات المقدمة للمعالجة. العملاء مسؤولون عن الحصول على أي أذونات ضرورية من أصحاب العقارات أو المستأجرين أو الأطراف المعنية الأخرى.',
    },
    {
      title_en: '4. Intellectual Property',
      title_ar: '4. الملكية الفكرية',
      content_en: 'Upon full payment, clients receive a license to use the delivered spatial experiences for the purposes agreed upon. Spatial retains ownership of the underlying technology, processing methods, and platform infrastructure.',
      content_ar: 'عند الدفع الكامل، يحصل العملاء على ترخيص لاستخدام التجارب المكانية المسلمة للأغراض المتفق عليها. تحتفظ سباشيال بملكية التقنية الأساسية وأساليب المعالجة والبنية التحتية للمنصة.',
    },
    {
      title_en: '5. Payment Terms',
      title_ar: '5. شروط الدفع',
      content_en: 'Payment is due upon delivery of the completed spatial experience unless otherwise agreed in writing. Enterprise clients may negotiate payment terms as part of their service agreement.',
      content_ar: 'الدفع مستحق عند تسليم التجربة المكانية المكتملة ما لم يُتفق على خلاف ذلك كتابياً. يجوز للعملاء المؤسسيين التفاوض على شروط الدفع كجزء من اتفاقية الخدمة الخاصة بهم.',
    },
    {
      title_en: '6. Limitation of Liability',
      title_ar: '6. تحديد المسؤولية',
      content_en: 'Spatial\'s liability is limited to the value of the services provided. We are not liable for indirect, consequential, or incidental damages arising from the use of our services.',
      content_ar: 'تقتصر مسؤولية سباشيال على قيمة الخدمات المقدمة. لسنا مسؤولين عن الأضرار غير المباشرة أو التبعية أو العرضية الناشئة عن استخدام خدماتنا.',
    },
    {
      title_en: '7. Governing Law',
      title_ar: '7. القانون الحاكم',
      content_en: 'These terms are governed by the laws of the Kingdom of Saudi Arabia. Any disputes shall be resolved in the courts of Riyadh.',
      content_ar: 'تخضع هذه الشروط لقوانين المملكة العربية السعودية. يتم حل أي نزاعات في محاكم الرياض.',
    },
  ];

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="overflow-hidden">
      <section className="pt-32 pb-16 bg-[#0B1D26]">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.2em] uppercase text-[#D6B36A] font-medium">{t('Legal', 'قانوني')}</span>
            <h1 className="font-display text-5xl text-white mt-4">{t('Terms of Service', 'شروط الخدمة')}</h1>
            <p className="text-white/40 mt-3 text-sm">{t('Last updated: January 2025', 'آخر تحديث: يناير 2025')}</p>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-[#F5F1EA]">
        <div className="container max-w-3xl">
          <div className="space-y-10">
            {sections.map((s, i) => (
              <div key={i}>
                <h2 className="font-display text-2xl text-[#0B1D26] mb-3">{isRTL ? s.title_ar : s.title_en}</h2>
                <p className="text-[#111111]/60 leading-relaxed">{isRTL ? s.content_ar : s.content_en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
