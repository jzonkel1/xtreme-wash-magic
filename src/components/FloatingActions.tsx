import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, CalendarDays, ChevronUp } from "lucide-react";
import { business } from "@/data";

/**
 * Persistent conversion helpers:
 * - Mobile-only sticky action bar pinned to the bottom.
 * - Back-to-top button that fades in after the first screenful.
 *
 * The bar carries BOTH doors, not just the phone. It is the single most-seen
 * control on the site — it's on screen for the entire mobile session — and while
 * it was call-only, every visitor who would rather not talk to a stranger had no
 * persistent way to convert at all. They had to go hunting for the calendar.
 * Call keeps the primary red; book is the quieter charcoal beside it.
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
        /* Logo-gray, not red. This sits inches from the red call bar on mobile;
           when both were red the utility control competed with the one button
           that actually earns money. Gray = tool, red = conversion.

           LEFT on mobile, RIGHT on desktop. The GHL chat bubble is anchored
           bottom-right and can't be moved off that corner, so on a phone the two
           controls stacked on top of each other. Desktop has room for both, and
           bottom-right is where a back-to-top button belongs there. */
        className={`fixed left-4 md:left-auto md:right-4 bottom-[4.7rem] md:bottom-6 z-40 w-11 h-11 rounded-full bg-xk-logo-gray/90 backdrop-blur-sm border border-xk-warm-white/25 text-xk-warm-white flex items-center justify-center shadow-lg hover:bg-xk-logo-gray-light hover:border-xk-warm-white/40 transition-all duration-300 ${
          showTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* Mobile sticky action bar — call or book */}
      <div className="md:hidden fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1.35fr_1fr] shadow-[0_-6px_24px_rgba(0,0,0,0.45)] pb-[env(safe-area-inset-bottom)] bg-xk-charcoal">
        <a
          href={business.phoneHref}
          className="bg-xk-red text-xk-warm-white font-heading font-bold text-sm flex items-center justify-center gap-2 py-3.5 active:bg-xk-red-glow"
        >
          <Phone className="w-4 h-4 flex-none" />
          CALL OR TEXT
        </a>
        <Link
          to="/book"
          className="bg-xk-charcoal text-xk-warm-white font-heading font-bold text-sm flex items-center justify-center gap-2 py-3.5 border-l border-xk-warm-white/15 active:bg-xk-steel"
        >
          <CalendarDays className="w-4 h-4 flex-none text-xk-red" />
          BOOK
        </Link>
      </div>

      {/* Spacer so the bar never covers the footer's last line */}
      <div className="h-12 md:hidden" aria-hidden="true" />
    </>
  );
};

export default FloatingActions;
