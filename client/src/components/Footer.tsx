/* ============================================================
   FOOTER — Dark cinematic, minimal elegant grid
   ============================================================ */
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-[#0B1D26] text-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="gold-rule opacity-20" />

      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-sm bg-[#D6B36A] flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L15 5V11L8 15L1 11V5L8 1Z" stroke="#0B1D26" strokeWidth="1.5" fill="none"/>
                  <path d="M8 5L11 7V11L8 13L5 11V7L8 5Z" fill="#0B1D26" opacity="0.6"/>
                </svg>
              </div>
              <div>
                <span className="font-display text-white text-lg">{t('Spatial', 'سباشيال')}</span>
                <div className="text-[10px] text-[#D6B36A] tracking-[0.15em] uppercase font-light leading-none">
                  {t('Saudi Arabia', 'المملكة العربية السعودية')}
                </div>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-6 max-w-xs">
              {t(
                'The future of luxury property visualization in Saudi Arabia. Immersive spatial experiences that transform how properties are presented and experienced.',
                'مستقبل تصور العقارات الفاخرة في المملكة العربية السعودية. تجارب مكانية غامرة تحول طريقة عرض العقارات وتجربتها.'
              )}
            </p>
            <div className="flex gap-3">
              {['X', 'in', 'ig'].map((s) => (
                <a key={s} href="#" className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-[#D6B36A] hover:border-[#D6B36A]/40 transition-all text-xs font-medium">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-[#D6B36A] mb-6 font-medium">
              {t('Services', 'الخدمات')}
            </h4>
            <ul className="space-y-3">
              {[
                [t('Immersive Property Experience', 'تجربة العقار الغامرة'), '/services'],
                [t('Spatial Commerce', 'التجارة المكانية'), '/services'],
                [t('Luxury Showcasing', 'العرض الفاخر'), '/services'],
                [t('Interactive Walkthroughs', 'الجولات التفاعلية'), '/services'],
                [t('Buyer Qualification', 'تأهيل المشترين'), '/services'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href as string}>
                    <span className="text-sm text-white/45 hover:text-white transition-colors flex items-center gap-1 group">
                      {label}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-[#D6B36A] mb-6 font-medium">
              {t('Company', 'الشركة')}
            </h4>
            <ul className="space-y-3">
              {[
                [t('About Us', 'من نحن'), '/about'],
                [t('Technology', 'التقنية'), '/technology'],
                [t('Industries', 'القطاعات'), '/industries'],
                [t('Case Studies', 'دراسات الحالة'), '/case-studies'],
                [t('Careers', 'الوظائف'), '/careers'],
                [t('Contact', 'تواصل معنا'), '/contact'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href as string}>
                    <span className="text-sm text-white/45 hover:text-white transition-colors flex items-center gap-1 group">
                      {label}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-[#D6B36A] mb-6 font-medium">
              {t('Contact', 'تواصل')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#D6B36A] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/45">
                  {t('Riyadh, Kingdom of Saudi Arabia', 'الرياض، المملكة العربية السعودية')}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-[#D6B36A] flex-shrink-0" />
                <a href="mailto:hello@spatial.sa" className="text-sm text-white/45 hover:text-white transition-colors">
                  hello@spatial.sa
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-[#D6B36A] flex-shrink-0" />
                <a href="tel:+966500000000" className="text-sm text-white/45 hover:text-white transition-colors">
                  +966 50 000 0000
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <Link href="/book-demo">
                <span className="btn-primary text-xs py-2.5 px-5 inline-flex">
                  {t('Book a Demo', 'احجز تجربة')}
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gold-rule mt-16 mb-8 opacity-10" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © 2025 Spatial Saudi Arabia. {t('All rights reserved.', 'جميع الحقوق محفوظة.')}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy">
              <span className="text-xs text-white/25 hover:text-white/50 transition-colors">
                {t('Privacy Policy', 'سياسة الخصوصية')}
              </span>
            </Link>
            <Link href="/terms">
              <span className="text-xs text-white/25 hover:text-white/50 transition-colors">
                {t('Terms of Service', 'شروط الخدمة')}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
