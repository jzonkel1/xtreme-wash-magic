import { painPoints } from "@/data";
import { HandDrawnIcon } from "@/components/icons/HandDrawn";

const PainPoints = () => (
  <section className="bg-xk-warm-white py-20 md:py-28">
    <div className="container mx-auto px-4">
      <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block text-center mb-3">
        DON'T LET IT SET IN
      </span>
      <h2 className="font-display uppercase text-5xl md:text-6xl lg:text-7xl text-xk-text-dark text-center mb-4 tracking-tight leading-[0.92]">
        The Cost of Putting It Off
      </h2>
      <p className="text-xk-text-dark/70 text-center max-w-xl mx-auto mb-14 font-body text-lg">
        On the coast, waiting is never free. Here's what it costs you:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {painPoints.map((p) => (
          <div
            key={p.title}
            className="bg-black/[0.03] border border-xk-text-dark/10 rounded-xl p-8 flex flex-col items-center text-center"
          >
            <HandDrawnIcon
              name={p.icon}
              className="w-20 h-20 text-xk-text-dark/80 mb-5"
            />
            <h3 className="font-display uppercase text-2xl md:text-3xl text-xk-text-dark mb-2.5 tracking-tight leading-none">
              {p.title}
            </h3>
            <p className="font-heading font-semibold text-xk-red text-base md:text-lg leading-snug">
              {p.cost}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PainPoints;
