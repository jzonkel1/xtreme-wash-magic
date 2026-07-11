import { CheckCircle } from "lucide-react";
import { industrial, business } from "@/data";
import { HandDrawnIcon } from "@/components/icons/HandDrawn";

/**
 * Industrial capabilities + safety program — the section that wins plant and
 * facility bids. Content sourced from Xtreme Kleen's own capabilities &
 * safety overview document (JSA, LOTO, Stop Work Authority, PPE).
 */
const IndustrialSafety = () => (
  <section id="industrial" className="relative bg-xk-charcoal py-20 md:py-28 overflow-hidden">
    <div className="absolute inset-0 tex-grid opacity-30" />
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(700px 480px at 12% 8%, rgba(226,54,54,0.13), transparent 62%)",
      }}
    />

    <div className="relative container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left — industrial capabilities */}
        <div>
          <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block mb-3">
            INDUSTRIAL & PLANT WORK
          </span>
          <h2 className="font-display uppercase text-4xl md:text-5xl text-xk-warm-white mb-5 tracking-tight leading-[0.95]">
            Plant-Ready.
            <span className="block text-xk-red">Refinery-Row Capable.</span>
          </h2>
          <p className="text-xk-warm-white/65 font-body mb-8 leading-relaxed">
            From fin fan bundles to pipe racks, {business.brand} handles the
            industrial cleaning that keeps Coastal Bend facilities running —
            with methods chosen to protect your equipment, not just blast it.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {industrial.capabilities.map((c) => (
              <li key={c} className="flex items-start gap-2.5 text-xk-warm-white/80 font-body text-sm leading-snug">
                <CheckCircle className="w-5 h-5 text-xk-red flex-shrink-0 mt-0.5" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — safety program card */}
        <div className="bg-xk-steel/80 border border-xk-warm-white/10 rounded-2xl p-8 md:p-9">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-xk-red/15 border border-xk-red/30 flex items-center justify-center flex-shrink-0">
              <HandDrawnIcon name="industrial" className="w-8 h-8 text-xk-red" />
            </div>
            <div>
              <h3 className="font-display uppercase text-2xl text-xk-warm-white tracking-tight leading-none mb-1">
                Safety Is the Job
              </h3>
              <p className="text-xk-warm-white/50 font-body text-sm">
                OSHA-aligned program · site-specific policies followed
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {industrial.safety.map((s) => (
              <div key={s.title} className="border-l-2 border-xk-red/50 pl-4">
                <h4 className="font-heading font-bold text-xk-warm-white text-base mb-0.5">
                  {s.title}
                </h4>
                <p className="text-xk-warm-white/55 font-body text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xk-warm-white/45 font-body text-xs mt-6 pt-5 border-t border-xk-warm-white/10">
            Pre-job safety checklists on every site · hazard review, equipment
            inspection & crew sign-off · documentation available upon request.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default IndustrialSafety;
