import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import type { ServiceVideo } from "@/content/services";

/**
 * One or two real job clips on a service page.
 *
 * Same lazy-attach rule as the homepage reels and the before/after pair: the
 * <video> ships with NO src and NO autoPlay, and the source is attached on first
 * intersection. `autoPlay` would start downloading the clip the moment the page
 * mounts, regardless of preload="none" — which is exactly how the homepage ended
 * up pulling ~9MB before anyone scrolled.
 *
 * Only clips that genuinely show THIS service go on the page (see the `videos`
 * field in src/content/services.ts). A page with no honest clip gets none.
 */
const Clip = ({
  video,
  muted,
  onToggleSound,
}: {
  video: ServiceVideo;
  muted: boolean;
  onToggleSound: () => void;
}) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!v.src) v.src = video.src;
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [video.src]);

  useEffect(() => {
    if (ref.current) ref.current.muted = muted;
  }, [muted]);

  return (
    <figure className="relative">
      <div className="relative bg-black rounded-xl overflow-hidden border border-xk-warm-white/10">
        <div className="aspect-[9/16]">
          <video
            ref={ref}
            className="w-full h-full object-cover"
            poster={video.poster}
            loop
            muted
            playsInline
            preload="none"
          />
        </div>

        <button
          onClick={onToggleSound}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-black/55 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-xk-red transition-colors"
        >
          {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      <figcaption className="mt-3">
        <p className="font-heading font-bold text-xk-warm-white text-sm">
          {video.title}
        </p>
        <p className="text-xk-warm-white/55 font-body text-sm leading-relaxed mt-1">
          {video.caption}
        </p>
      </figcaption>
    </figure>
  );
};

const ServiceVideos = ({
  videos,
  serviceTitle,
}: {
  videos: ServiceVideo[];
  serviceTitle: string;
}) => {
  const [muted, setMuted] = useState(true);
  const toggle = () => setMuted((m) => !m);

  if (!videos.length) return null;

  return (
    <section className="bg-xk-steel py-16 md:py-24">
      <div
        className={`container mx-auto px-4 ${
          videos.length === 1 ? "max-w-md" : "max-w-3xl"
        }`}
      >
        <div className="text-center mb-10">
          <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block mb-3">
            — {videos.length === 1 ? "ON THE JOB" : "STRAIGHT FROM THE JOB SITE"} —
          </span>
          <h2 className="font-display uppercase text-3xl md:text-4xl text-xk-warm-white leading-tight tracking-tight">
            {serviceTitle} — See It Happen
          </h2>
          <p className="text-xk-warm-white/60 font-body leading-relaxed mt-3">
            No stock footage. This is our own crew, on real Coastal Bend jobs.
          </p>
        </div>

        <div
          className={`grid gap-5 md:gap-6 ${
            videos.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"
          }`}
        >
          {videos.map((v) => (
            <Clip key={v.src} video={v} muted={muted} onToggleSound={toggle} />
          ))}
        </div>

        <p className="text-center text-xk-warm-white/40 font-body text-xs mt-8">
          Playing muted — tap the speaker to turn on sound.
        </p>
      </div>
    </section>
  );
};

export default ServiceVideos;
