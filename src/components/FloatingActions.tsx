import { useEffect, useState } from "react";
import { Phone, ChevronUp } from "lucide-react";
import { business } from "@/data";

/**
 * Persistent conversion helpers:
 * - Mobile-only sticky call bar pinned to the bottom (one thumb-tap to call).
 * - Back-to-top button that fades in after the first screenful.
 */
const FloatingActions = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed right-4 bottom-[4.7rem] md:bottom-6 z-40 w-11 h-11 rounded-full bg-xk-steel/90 backdrop-blur-sm border border-xk-warm-white/25 text-xk-warm-white flex items-center justify-center shadow-lg hover:bg-xk-red hover:border-xk-red transition-all duration-300 ${
          showTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* Mobile sticky call bar */}
      <a
        href={business.phoneHref}
        className="md:hidden fixed inset-x-0 bottom-0 z-40 bg-xk-red text-xk-warm-white font-heading font-bold text-base flex items-center justify-center gap-2.5 py-3.5 pb-[calc(0.875rem+env(safe-area-inset-bottom))] shadow-[0_-6px_24px_rgba(0,0,0,0.45)] active:bg-xk-red-glow"
      >
        <Phone className="w-5 h-5" />
        CALL OR TEXT {business.phone}
      </a>

      {/* Spacer so the call bar never covers the footer's last line */}
      <div className="h-12 md:hidden" aria-hidden="true" />
    </>
  );
};

export default FloatingActions;
