import bridge from "@/assets/hero-bridge.webp";
import { business } from "@/data";

/** Full-bleed cinematic band — real branded rigs under the Harbor Bridge. */
const EquipmentBand = () => (
  <section className="relative">
    <div className="relative h-[420px] md:h-[520px] overflow-hidden">
      <img
        src={bridge}
        alt="Xtreme Kleen equipment trailers under the Corpus Christi Harbor Bridge at night"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(15,13,12,0.92) 0%, rgba(15,13,12,0.6) 42%, rgba(15,13,12,0.25) 70%, rgba(15,13,12,0.35) 100%)",
        }}
      />

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl">
          <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block mb-4">
            PRO-GRADE EQUIPMENT · LOCAL CREW
          </span>
          <h2 className="font-display uppercase text-4xl md:text-6xl text-xk-warm-white leading-[0.92] tracking-tight mb-5">
            Built to Handle
            <span className="block text-xk-red">the Big Jobs</span>
          </h2>
          <p className="text-xk-warm-white/75 font-body text-base md:text-lg leading-relaxed mb-8">
            Multiple rigs, hot-water and soft-wash systems, and boom-lift reach —
            {" "}the same equipment that cleans condo complexes and commercial
            buildings shows up for your driveway. Based right here in the Coastal Bend.
          </p>
          <a
            href={business.phoneHref}
            className="inline-block bg-xk-red text-xk-warm-white font-heading font-bold px-8 py-4 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red"
          >
            CALL OR TEXT {business.phone}
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default EquipmentBand;
