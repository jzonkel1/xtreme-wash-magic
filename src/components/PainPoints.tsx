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
      <p className="font-heading font-semibold text-xk-text-dark/80 text-xl md:text-2xl text-center max-w-2xl mx-auto mb-5">
        Salt air doesn't care how new your property is.
      </p>
      <p className="text-xk-text-dark/55 text-center max-w-2xl mx-auto mb-14 font-body leading-relaxed">
        On the coast, mildew, algae, and salt buildup never stop working on your
        siding, roof, and concrete. Every month you wait, the stains set deeper —
        and the wrong fix can cost more than the dirt ever would.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {painPoints.map((p) => (
          <div
            key={p.pain}
            className="bg-black/[0.03] border border-xk-text-dark/10 rounded-xl p-8 flex flex-col items-center text-center"
          >
            <h3 className="font-heading font-semibold text-xk-text-dark text-lg leading-snug mb-7">
              {p.pain}
            </h3>

            <HandDrawnIcon
              name={p.icon}
              className="w-24 h-24 text-xk-text-dark/80 mb-7"
            />

            <p className="font-heading font-bold text-xk-red text-base leading-snug mt-auto">
              {p.consequence}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PainPoints;
