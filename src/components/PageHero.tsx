import { Phone } from "lucide-react";
import { business } from "@/data";
import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";

type PageHeroProps = {
  kicker: string;
  title: string;
  sub: string;
  photo?: string;
  /**
   * Play a looping video behind the banner instead of a still, using `photo` as
   * the poster. Same clip and treatment as the homepage hero — there's no reason
   * a page should show a frozen frame of a video we already ship.
   */
  video?: string;
  /**
   * CSS background-position for the banner photo. Portrait shots get cropped to
   * a thin horizontal band here, and `center` often lands on somebody's chest —
   * so point it at the part of the frame that matters.
   */
  photoPosition?: string;
  /**
   * Mirror the photo on DESKTOP only. The headline column sits hard-left with a
   * heavy scrim over it, so any subject on the left of the frame is buried. On
   * mobile the scrim covers the whole width evenly, so there's nothing to dodge
   * and flipping would just be a gratuitous lie about which way the job faced.
   */
  flipPhotoOnDesktop?: boolean;
  /**
   * Optional card rendered beside the headline on desktop, and directly BELOW it
   * on mobile. Used for the quick-quote form on the pages search actually lands
   * people on. When present, the hero's own CTA buttons are hidden — the form IS
   * the call to action, and a "Get Your Free Quote" button sitting next to a
   * quote form is just noise.
   */
  aside?: React.ReactNode;
  /** Hide the default "Get Your Free Quote" hero button — e.g. the /book page,
   *  where the booking calendar below IS the primary action and there's no
   *  #quote form on the page to scroll to. The phone button stays. */
  hideQuoteCta?: boolean;
  breadcrumbs: Crumb[];
};

/** Subpage hero: photo-backed banner in the homepage's visual language. */
const PageHero = ({
  kicker,
  title,
  sub,
  photo,
  video,
  photoPosition = "center",
  flipPhotoOnDesktop,
  aside,
  hideQuoteCta,
  breadcrumbs,
}: PageHeroProps) => (
  <section className="relative bg-xk-charcoal pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
    {video ? (
      <video
        className="absolute inset-0 w-full h-full object-cover object-[85%_50%] md:object-center"
        src={video}
        poster={photo}
        autoPlay
        loop
        muted
        playsInline
      />
    ) : (
      photo && (
        <div
          className={`absolute inset-0 bg-cover ${
            flipPhotoOnDesktop ? "lg:scale-x-[-1]" : ""
          }`}
          style={{
            backgroundImage: `url(${photo})`,
            backgroundPosition: photoPosition,
          }}
        />
      )
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
      <div
        className={
          aside
            ? "grid grid-cols-1 lg:grid-cols-[1fr_minmax(360px,400px)] gap-10 lg:gap-12 items-center"
            : ""
        }
      >
      <div
        className={`text-center lg:text-left ${
          aside ? "max-w-2xl mx-auto lg:mx-0" : "max-w-3xl mx-auto lg:mx-0"
        }`}
      >
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
        {!aside && (
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            {!hideQuoteCta && (
              <a
                href="#quote"
                className="bg-xk-red text-xk-warm-white font-heading font-bold text-base px-8 py-4 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red"
              >
                GET YOUR FREE QUOTE
              </a>
            )}
            <a
              href={business.phoneHref}
              className="border-2 border-xk-warm-white/40 text-xk-warm-white font-heading font-semibold text-base px-8 py-4 rounded-lg hover:bg-xk-warm-white/10 transition-all flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {business.phone}
            </a>
          </div>
        )}
      </div>

        {aside && <div className="w-full max-w-md mx-auto lg:max-w-none">{aside}</div>}
      </div>
    </div>
  </section>
);

export default PageHero;
