import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play } from "lucide-react";
import { reels, business } from "@/data";

/**
 * Self-hosted job footage. Clips autoplay muted + looping (so they work as
 * ambient "before/after" motion), with a tap to unmute and hear the job.
 */
const ReelCard = ({
  src,
  poster,
  title,
  caption,
}: {
  src: string;
  poster: string;
  title: string;
  caption: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  // Play only while on screen — mobile browsers won't autoplay offscreen
  // videos, and this keeps 4 clips from decoding at once.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.25 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) v.play().catch(() => {});
    setMuted(v.muted);
  };

  return (
    <div className="w-full max-w-[300px] bg-xk-light-gray/50 border border-xk-warm-white/10 rounded-xl overflow-hidden flex flex-col">
      <div className="relative bg-black aspect-[9/16]">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
        <button
          onClick={toggleSound}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-black/55 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-xk-red transition-colors"
        >
          {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
      <div className="p-5 flex-1">
        <h3 className="font-heading font-bold text-xk-warm-white text-base mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-xk-warm-white/55 text-sm font-body leading-relaxed">
          {caption}
        </p>
      </div>
    </div>
  );
};

const Reels = () => (
  <section id="work" className="relative bg-xk-medium-gray py-20 md:py-28 overflow-hidden">
    <div className="absolute inset-0 tex-grid opacity-40" />

    <div className="relative container mx-auto px-4">
      <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block text-center mb-3">
        STRAIGHT FROM THE JOB SITE
      </span>
      <h2 className="font-display uppercase text-4xl md:text-5xl lg:text-6xl text-xk-warm-white text-center mb-5 tracking-tight">
        Watch the Grime Come Off
      </h2>
      <p className="text-xk-warm-white/60 text-center max-w-2xl mx-auto mb-4 font-body leading-relaxed">
        No stock footage. Every clip is a real {business.brand} job across the
        Coastal Bend — driveways, roofs, equipment, and full home exteriors.
      </p>
      <p className="text-xk-warm-white/40 text-center text-sm font-body mb-14 flex items-center justify-center gap-1.5">
        <Play className="w-3.5 h-3.5" /> Playing muted — tap the speaker to turn on sound
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {reels.map((r) => (
          <ReelCard key={r.src} {...r} />
        ))}
      </div>

      <div className="text-center mt-14">
        <a
          href="#quote"
          className="inline-block bg-xk-red text-xk-warm-white font-heading font-bold px-8 py-4 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red"
        >
          Get This Done at My Property
        </a>
      </div>
    </div>
  </section>
);

export default Reels;
