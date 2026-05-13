/* ============================================================
   404 NOT FOUND — Spatial Warmth Design System
   ============================================================ */
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B1D26] flex items-center justify-center relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(214,179,106,0.8) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Large ghost number */}
      <div
        className="absolute select-none pointer-events-none"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(200px, 40vw, 400px)',
          fontWeight: 300,
          color: 'rgba(214,179,106,0.06)',
          lineHeight: 1,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          whiteSpace: 'nowrap',
        }}
      >
        404
      </div>

      <div className="relative z-10 text-center px-6 max-w-lg">
        <div className="w-12 h-px bg-[#D6B36A] mx-auto mb-8 opacity-60" />

        <p className="text-[#D6B36A] text-xs tracking-[0.25em] uppercase font-light mb-4">
          Page Not Found
        </p>

        <h1
          className="text-white mb-6 leading-tight"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 300,
          }}
        >
          This space doesn't exist
        </h1>

        <p className="text-white/45 text-base font-light leading-relaxed mb-10">
          The page you're looking for may have been moved, renamed, or no longer exists.
        </p>

        <Link href="/">
          <span className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft size={16} />
            Return Home
          </span>
        </Link>

        <div className="mt-8 text-white/20 text-xs tracking-widest uppercase">
          Spatial Saudi Arabia
        </div>
      </div>
    </div>
  );
}
