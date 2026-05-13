import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function Privacy() {
  const { t, isRTL } = useLanguage();

  const sections = [
    {
      title_en: '1. Information We Collect',
      title_ar: '1. المعلومات التي نجمعها',
      content_en: 'We collect information you provide directly, including name, email, phone number, and company details when you contact us, book a demo, or use our services. We also collect technical information about how you interact with our website.',
      content_ar: 'نجمع المعلومات التي تقدمها مباشرة، بما في ذلك الاسم والبريد الإلكتروني ورقم الهاتف وتفاصيل الشركة عند التواصل معنا أو حجز تجربة أو استخدام خدماتنا. نجمع أيضاً معلومات تقنية حول كيفية تفاعلك مع موقعنا الإلكتروني.',
    },
    {
      title_en: '2. How We Use Your Information',
      title_ar: '2. كيف نستخدم معلوماتك',
      content_en: 'We use your information to provide and improve our services, communicate with you about your projects, send relevant updates and offers (with your consent), and comply with legal obligations.',
      content_ar: 'نستخدم معلوماتك لتقديم خدماتنا وتحسينها، والتواصل معك بشأن مشاريعك، وإرسال التحديثات والعروض ذات الصلة (بموافقتك)، والامتثال للالتزامات القانونية.',
    },
    {
      title_en: '3. Data Security',
      title_ar: '3. أمان البيانات',
      content_en: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
      content_ar: 'ننفذ تدابير تقنية وتنظيمية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التغيير أو الإفصاح أو الإتلاف.',
    },
    {
      title_en: '4. Data Sharing',
      title_ar: '4. مشاركة البيانات',
      content_en: 'We do not sell your personal information. We may share information with trusted service providers who assist in our operations, subject to confidentiality agreements.',
      content_ar: 'لا نبيع معلوماتك الشخصية. قد نشارك المعلومات مع مزودي الخدمات الموثوقين الذين يساعدون في عملياتنا، وفقاً لاتفاقيات السرية.',
    },
    {
      title_en: '5. Your Rights',
      title_ar: '5. حقوقك',
      content_en: 'You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time. To exercise these rights, contact us at privacy@spatial.sa.',
      content_ar: 'لديك الحق في الوصول إلى معلوماتك الشخصية وتصحيحها أو حذفها. يمكنك أيضاً إلغاء الاشتراك في الاتصالات التسويقية في أي وقت. لممارسة هذه الحقوق، تواصل معنا على privacy@spatial.sa.',
    },
    {
      title_en: '6. Cookies',
      title_ar: '6. ملفات تعريف الارتباط',
      content_en: 'Our website uses cookies to improve your browsing experience and analyze site traffic. You can control cookie settings through your browser preferences.',
      content_ar: 'يستخدم موقعنا الإلكتروني ملفات تعريف الارتباط لتحسين تجربة التصفح وتحليل حركة المرور على الموقع. يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال تفضيلات متصفحك.',
    },
    {
      title_en: '7. Contact',
      title_ar: '7. التواصل',
      content_en: 'For privacy-related questions or requests, contact our Privacy Officer at privacy@spatial.sa or write to us at our Riyadh office.',
      content_ar: 'للأسئلة أو الطلبات المتعلقة بالخصوصية، تواصل مع مسؤول الخصوصية لدينا على privacy@spatial.sa أو اكتب إلينا في مكتبنا بالرياض.',
    },
  ];

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="overflow-hidden">
      <section className="pt-32 pb-16 bg-[#0B1D26]">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.2em] uppercase text-[#D6B36A] font-medium">{t('Legal', 'قانوني')}</span>
            <h1 className="font-display text-5xl text-white mt-4">{t('Privacy Policy', 'سياسة الخصوصية')}</h1>
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
