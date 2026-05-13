/* ============================================================
   NAVBAR — Spatial Warmth Design System
   Transparent on load → frosted glass on scroll
   Bilingual EN/AR toggle
   ============================================================ */
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const navLinks = [
  { href: '/', en: 'Home', ar: 'الرئيسية' },
  { href: '/services', en: 'Services', ar: 'الخدمات' },
  { href: '/industries', en: 'Industries', ar: 'القطاعات' },
  { href: '/technology', en: 'Technology', ar: 'التقنية' },
  { href: '/gallery', en: 'Gallery', ar: 'المعرض' },
  { href: '/about', en: 'About', ar: 'من نحن' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t, isRTL } = useLanguage();
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isDarkPage = location === '/' || location === '/technology' || location === '/gallery';

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0B1D26]/90 backdrop-blur-xl border-b border-white/8 shadow-lg shadow-black/10'
            : 'bg-transparent'
        }`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="container">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-sm bg-[#D6B36A] flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1L15 5V11L8 15L1 11V5L8 1Z" stroke="#0B1D26" strokeWidth="1.5" fill="none"/>
                    <path d="M8 5L11 7V11L8 13L5 11V7L8 5Z" fill="#0B1D26" opacity="0.6"/>
                  </svg>
                </div>
                <div>
                  <span className="font-display text-white text-lg tracking-wide">
                    {t('Spatial', 'سباشيال')}
                  </span>
                  <div className="text-[10px] text-[#D6B36A] tracking-[0.15em] uppercase font-light leading-none">
                    {t('Saudi Arabia', 'المملكة العربية السعودية')}
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className={`text-sm font-light tracking-wide transition-colors duration-200 ${
                    location === link.href
                      ? 'text-[#D6B36A]'
                      : 'text-white/75 hover:text-white'
                  }`}>
                    {isRTL ? link.ar : link.en}
                  </span>
                </Link>
              ))}
            </div>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language toggle */}
              <button
                onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                className="text-xs text-white/60 hover:text-[#D6B36A] transition-colors tracking-widest uppercase font-light border border-white/15 hover:border-[#D6B36A]/40 rounded-full px-3 py-1.5"
              >
                {lang === 'en' ? 'عربي' : 'EN'}
              </button>

              <Link href="/book-demo">
                <span className="btn-primary text-xs py-2.5 px-5">
                  {t('Book a Demo', 'احجز تجربة')}
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                className="text-xs text-white/60 hover:text-[#D6B36A] transition-colors tracking-widest uppercase"
              >
                {lang === 'en' ? 'عربي' : 'EN'}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-40 bg-[#0B1D26]/97 backdrop-blur-xl flex flex-col"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <div className="h-18 py-4" />
            <div className="flex-1 flex flex-col justify-center container gap-6 pb-16">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                >
                  <Link href={link.href}>
                    <span className={`font-display text-3xl font-light transition-colors ${
                      location === link.href ? 'text-[#D6B36A]' : 'text-white/80 hover:text-white'
                    }`}>
                      {isRTL ? link.ar : link.en}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6"
              >
                <Link href="/book-demo">
                  <span className="btn-primary inline-flex">
                    {t('Book a Demo', 'احجز تجربة')}
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
