// Night shot of the rig under the Harbor Bridge (source: worktruck.jpeg).
//
// NOTE: this is an AI-RENDERED image of Eric's truck, so EVERY PIECE OF TEXT IN
// IT HAS TO BE READ BY EYE BEFORE IT SHIPS. Two earlier renders of this shot
// went out with the wrong phone number on the door ("561-947-7011", then
// "261-947-2811"). This version renders the real number — 361-947-7811 — and a
// clean bed rail, natively.
//
// If it is ever regenerated: ZOOM IN ON THE DOOR AND READ THE PHONE NUMBER.
// A wrong number on the client's own truck is worse than any blur.
import bridge from "@/assets/hero-bridge-new.webp";
import { business } from "@/data";

/** Full-bleed cinematic band — real branded rigs under the Harbor Bridge. */
const EquipmentBand = () => (
  <section className="relative">
    {/* The photo is 16:9 and the truck sits in the BOTTOM third of it. A fixed
        520px band therefore centre-cropped straight through the wheels on any
        wide screen — you got the bridge and the roof of the cab and nothing
        else. Holding the band at 16:9 means the entire frame shows (bridge AND
        rig) at every width up to ~1560px, which is most desktops. The max-h only
        bites above that, and the 85% vertical anchor spends the crop on the sky
        rather than the truck. */}
    <div className="relative md:aspect-video md:max-h-[880px] overflow-hidden">
      <img
        src={bridge}
        alt="Xtreme Kleen truck and pressure-washing rig under the Corpus Christi Harbor Bridge at night"
        // Mobile crops this wide shot to a near-portrait slice — bias right so
        // it lands on the cab and the door decal instead of the trailer tank.
        className="absolute inset-0 w-full h-full object-cover object-[70%_center] md:object-[center_85%]"
        loading="lazy"
      />
      {/* Mobile: text spans the full width, so darken the whole image evenly */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,13,12,0.88) 0%, rgba(15,13,12,0.78) 55%, rgba(15,13,12,0.88) 100%)",
        }}
      />
      {/* Desktop: heavy shadow on the text side, then let go entirely so the rig
          keeps its own light. The falloff is slow through the left half (the
          headline needs a solid black bed to sit on) and fast after 55%, which
          is roughly where the trailer starts. */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(12,10,10,0.97) 0%, rgba(12,10,10,0.93) 20%, rgba(13,11,10,0.78) 40%, rgba(15,13,12,0.42) 58%, rgba(15,13,12,0.18) 74%, rgba(15,13,12,0.3) 100%)",
        }}
      />

      <div className="relative container mx-auto px-4 h-full flex items-center py-16 md:py-0">
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
