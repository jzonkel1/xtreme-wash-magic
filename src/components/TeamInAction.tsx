import action1 from "@/assets/action1.webp";
import action2 from "@/assets/action2.webp";
import action3 from "@/assets/action3.webp";
import action4 from "@/assets/action4.webp";
import truckWash from "@/assets/truck-wash.webp";
import accessFord from "@/assets/access-ford.webp";

const photos = [
  { src: action1, caption: "Fully loaded rig — ready to roll on site" },
  { src: truckWash, caption: "Washing down a Dura-Haul dump trailer" },
  { src: action2, caption: "Soft washing a coastal condo at sunset" },
  { src: accessFord, caption: "Commercial work — Access Ford, Corpus Christi" },
  { src: action3, caption: "High-reach commercial building wash" },
  { src: action4, caption: "Suited up for chemical cleaning" },
];

const TeamInAction = () => (
  <section className="bg-xk-steel py-20 md:py-28">
    <div className="container mx-auto px-4">
      <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block text-center mb-3">
        THE CREW
      </span>
      <h2 className="font-display uppercase text-4xl md:text-5xl lg:text-6xl text-xk-warm-white text-center mb-4 tracking-tight">
        Xtreme Kleen in Action
      </h2>
      <p className="text-xk-warm-white/60 text-center max-w-xl mx-auto mb-12 font-body">
        From boom lifts to ground level — our team shows up equipped, trained,
        and ready to handle any job across Texas.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((p, i) => (
          <div key={i} className="relative overflow-hidden rounded-xl group">
            <img
              src={p.src}
              alt={p.caption}
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-xk-steel/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="font-heading text-xs md:text-sm text-xk-warm-white leading-tight">
                {p.caption}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamInAction;
