import action1 from "@/assets/action1.webp";
import action2 from "@/assets/action2.webp";
import action3 from "@/assets/action3.webp";
import action4 from "@/assets/action4.webp";

const photos = [
  { src: action1, caption: "Ready to roll — fully loaded rig on site" },
  { src: action2, caption: "Soft washing a coastal condo at sunset" },
  { src: action3, caption: "High-reach commercial building wash" },
  { src: action4, caption: "Suited up for chemical cleaning" },
];

const TeamInAction = () => (
  <section className="bg-xk-steel py-20">
    <div className="container mx-auto px-4">
      <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block text-center mb-3">
        THE CREW
      </span>
      <h2 className="font-heading font-bold text-3xl md:text-5xl text-xk-warm-white text-center mb-4">
        XTREME KLEEN in Action
      </h2>
      <p className="text-xk-warm-white/70 text-center max-w-xl mx-auto mb-10 font-body">
        From boom lifts to ground level — our team shows up equipped, trained,
        and ready to handle any job across Texas.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {photos.map((p, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded group"
          >
            <img
              src={p.src}
              alt={p.caption}
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-xk-steel/0 group-hover:bg-xk-steel/50 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-xk-steel/90 to-transparent">
              <span className="font-heading text-xs md:text-sm text-xk-warm-white">
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
