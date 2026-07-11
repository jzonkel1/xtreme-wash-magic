import { benefits } from "@/data";
import { HandDrawnIcon } from "@/components/icons/HandDrawn";

const Solution = () => (
  <section className="relative bg-xk-steel py-20 md:py-28 overflow-hidden">
    <div className="absolute inset-0 tex-grid opacity-40" />
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(700px 460px at 18% 0%, rgba(226,54,54,0.14), transparent 62%)",
      }}
    />

    <div className="relative container mx-auto px-4">
      <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block text-center mb-3">
        HOW WE ACTUALLY DO IT
      </span>
      <h2 className="font-display uppercase text-4xl md:text-5xl lg:text-6xl text-xk-warm-white text-center mb-5 tracking-tight leading-[0.95]">
        The Chemistry Does the Work
        <span className="block text-xk-red">Not Brute Force</span>
      </h2>
      <p className="text-xk-warm-white/65 text-center max-w-2xl mx-auto mb-16 font-body leading-relaxed">
        A true soft wash uses low pressure and the right chemistry to kill what's
        actually growing on the surface — instead of blasting it off and taking
        your paint, shingles, and concrete with it.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {benefits.map((b) => (
          <div key={b.title} className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-xk-red flex items-center justify-center mb-6 shadow-glow-red">
              <HandDrawnIcon name={b.icon} className="w-12 h-12 text-xk-warm-white" />
            </div>
            <h3 className="font-display uppercase text-xl md:text-2xl text-xk-warm-white mb-3 tracking-tight">
              {b.title}
            </h3>
            <p className="text-xk-warm-white/60 text-sm font-body leading-relaxed">
              {b.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Solution;
