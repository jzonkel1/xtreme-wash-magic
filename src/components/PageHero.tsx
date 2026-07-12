import { Phone } from "lucide-react";
import { business } from "@/data";
import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";

type PageHeroProps = {
  kicker: string;
  title: string;
  sub: string;
  photo?: string;
  breadcrumbs: Crumb[];
};

/** Subpage hero: photo-backed banner in the homepage's visual language. */
const PageHero = ({ kicker, title, sub, photo, breadcrumbs }: PageHeroProps) => (
  <section className="relative bg-xk-charcoal pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
    {photo && (
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${photo})` }}
      />
    )}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(102deg, rgba(20,18,17,0.96) 0%, rgba(20,18,17,0.88) 45%, rgba(24,20,19,0.78) 70%, rgba(34,17,17,0.86) 100%)",
      }}
    />
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(620px 440px at 90% 4%, rgba(226,54,54,0.18), transparent 60%)",
      }}
    />

    <div className="relative z-10 container mx-auto px-4">
      <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
        <Breadcrumbs items={breadcrumbs} />
        <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block mb-3">
          <span className="lg:hidden">— </span>
          {kicker}
          <span className="lg:hidden"> —</span>
        </span>
        <h1 className="font-display uppercase text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-xk-warm-white mb-5">
          {title}
        </h1>
        <p className="text-xk-warm-white/75 text-base md:text-lg font-body leading-relaxed mb-8">
          {sub}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
          <a
            href="#quote"
            className="bg-xk-red text-xk-warm-white font-heading font-bold text-base px-8 py-4 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red"
          >
            GET YOUR FREE QUOTE
          </a>
          <a
            href={business.phoneHref}
            className="border-2 border-xk-warm-white/40 text-xk-warm-white font-heading font-semibold text-base px-8 py-4 rounded-lg hover:bg-xk-warm-white/10 transition-all flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            {business.phone}
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default PageHero;
