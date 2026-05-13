import { useEffect, useRef } from 'react';

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    // Observe the element and all .reveal children
    const revealEls = el.querySelectorAll('.reveal');
    revealEls.forEach((child) => observer.observe(child));
    if (el.classList.contains('reveal')) observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
