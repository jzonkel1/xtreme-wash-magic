// ---------------------------------------------------------------------------
// Hand-drawn icon set — custom sketchy line art, not a stock icon library.
// Each icon is drawn with deliberately imperfect paths and passed through a
// subtle turbulence/displacement filter so the strokes read as inked by hand.
// ---------------------------------------------------------------------------

type IconProps = { className?: string; style?: React.CSSProperties };

const ROUGH_ID = "xk-rough";

/** Shared wrapper: sketchy stroke defaults + the roughen filter. */
const Sketch = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    style={style}
    fill="none"
    stroke="currentColor"
    strokeWidth={3.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <defs>
      {/* Roughen: nudges every stroke off its perfect path so it looks drawn.
          Kept subtle — too much displacement makes crossings look fuzzy. */}
      <filter id={ROUGH_ID} x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.028"
          numOctaves="2"
          seed="7"
          result="noise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="1.05"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </defs>
    <g filter={`url(#${ROUGH_ID})`}>{children}</g>
  </svg>
);

/* ------------------------------ PAIN ICONS ------------------------------ */

/** An hourglass running out — the weekend you'll never get back. */
export const WeekendIcon = ({ className, style }: IconProps) => (
  <Sketch className={className} style={style}>
    {/* frame bars */}
    <path d="M18 10 L46 10" />
    <path d="M18 54 L46 54" />
    {/* glass profile — two mirrored curves meeting at the waist */}
    <path d="M22 12 C22 21 27 25 30.5 29.5 C31.4 30.8 31.4 33.2 30.5 34.5 C27 39 22 43 22 52" />
    <path d="M42 12 C42 21 37 25 33.5 29.5 C32.6 30.8 32.6 33.2 33.5 34.5 C37 39 42 43 42 52" />
    {/* sand: wedge above the neck, falling stream, settled pile (filled) */}
    <path
      d="M25.5 21 C28 26 30.5 28.4 32 29.2 C33.5 28.4 36 26 38.5 21 C34.5 22.6 29.5 22.6 25.5 21 Z"
      fill="currentColor"
      stroke="none"
    />
    <path d="M32 33 L32 43" strokeWidth={2.2} />
    <path
      d="M24.5 52 C26.5 46.5 29 44 32 43.5 C35 44 37.5 46.5 39.5 52 Z"
      fill="currentColor"
      stroke="none"
    />
  </Sketch>
);

/** A grimy stain bleeding downward — coastal buildup that keeps feeding. */
export const MildewIcon = ({ className, style }: IconProps) => (
  <Sketch className={className} style={style}>
    {/* one continuous blob outline */}
    <path d="M17.5 29 C15.5 22 23 15.5 31 17.5 C38 13.5 48.5 18.5 47.5 26 C52.5 30 49.5 37.5 43 38.5 C39 43.5 28.5 43.5 24.5 38.5 C18.5 37.5 16 33 17.5 29 Z" />
    {/* drips hanging off the bottom edge, each ending in a bead */}
    <path d="M28 41.5 L28 48.5" strokeWidth={2.4} />
    <circle cx="28" cy="51.5" r="2.4" fill="currentColor" stroke="none" />
    <path d="M37 40.5 L37 45.5" strokeWidth={2.4} />
    <circle cx="37" cy="48.5" r="2.4" fill="currentColor" stroke="none" />
    {/* speckles inside the stain (filled, deliberate) */}
    <circle cx="27" cy="27" r="1.7" fill="currentColor" stroke="none" />
    <circle cx="36.5" cy="23.5" r="1.7" fill="currentColor" stroke="none" />
    <circle cx="33" cy="32.5" r="1.7" fill="currentColor" stroke="none" />
  </Sketch>
);

/** A clean panel split by a through-crack — what brute-force pressure leaves behind. */
export const DamageIcon = ({ className, style }: IconProps) => (
  <Sketch className={className} style={style}>
    {/* panel with rounded corners */}
    <rect x="12" y="14" width="40" height="36" rx="3.5" />
    {/* crack runs edge to edge, branches attached at the bends */}
    <path d="M31 14 L28 25 L34 30 L29 38 L32.5 50" />
    <path d="M28 25 L21 28" />
    <path d="M29 38 L37 41.5" />
  </Sketch>
);

/* ---------------------------- BENEFIT ICONS ----------------------------- */

/** Clock with speed lines — done in hours. */
export const ClockIcon = ({ className, style }: IconProps) => (
  <Sketch className={className} style={style}>
    <path d="M36 15 C45.4 14.6 53.2 22 53.6 31.4 C54 40.8 46.4 48.6 37 49 C27.6 49.4 19.8 42 19.4 32.6 C19 23.2 26.6 15.4 36 15 Z" />
    <path d="M36.4 22.6 L36.6 32.6 L44 36.6" />
    <path d="M5 25.4 L13.6 25" />
    <path d="M2.6 32.6 L11.4 32.4" />
    <path d="M5.4 39.8 L14 39.4" />
  </Sketch>
);

/** Shield holding a droplet — chemistry protects, pressure destroys. */
export const ShieldIcon = ({ className, style }: IconProps) => (
  <Sketch className={className} style={style}>
    <path d="M32 9 C38.4 13.4 45.4 15.6 52 15.4 C52.4 30 48.6 43.6 32 55 C15.6 43.6 11.6 30 12 15.4 C18.6 15.6 25.6 13.4 32 9 Z" />
    <path d="M32 24 C32 24 24.6 32.6 24.6 37.6 C24.6 41.8 27.9 45.2 32 45.2 C36.1 45.2 39.4 41.8 39.4 37.6 C39.4 32.6 32 24 32 24 Z" />
  </Sketch>
);

/** Four-point shine burst — brought back to life. */
export const ShineIcon = ({ className, style }: IconProps) => (
  <Sketch className={className} style={style}>
    <path d="M31 11 C33.4 23.4 39.6 29.8 52.4 32 C39.6 34.4 33.4 40.6 31 53.4 C28.8 40.6 22.4 34.4 9.6 32 C22.4 29.8 28.8 23.4 31 11 Z" />
    <path d="M50.6 12 C51.4 15.4 52.4 16.6 55.8 17.4 C52.4 18.4 51.4 19.4 50.6 22.8 C49.8 19.4 48.6 18.4 45.4 17.4 C48.6 16.6 49.8 15.4 50.6 12 Z" />
  </Sketch>
);

/* ---------------------------- SERVICE ICONS ----------------------------- */

/** A pressure-washer trigger gun firing a fan of spray. */
export const PressureIcon = ({ className, style }: IconProps) => (
  <Sketch className={className} style={style}>
    {/* grip + trigger */}
    <path d="M14 52 L19.6 38 L26 38" />
    <path d="M19.6 44 L24 45.6" />
    {/* body + lance */}
    <path d="M17.4 38 L26 38 L26 33 L20 33 Z" />
    <path d="M26 35.4 L40 29" />
    {/* nozzle spray fan */}
    <path d="M40 29 L55 24" />
    <path d="M40 31.4 L54 31" />
    <path d="M40 26.6 L52 18.6" />
  </Sketch>
);

/** A droplet over soft waves — low pressure, right chemistry. */
export const SoftWashIcon = ({ className, style }: IconProps) => (
  <Sketch className={className} style={style}>
    <path d="M32 9 C32 9 19.4 25.6 19.4 35.6 C19.4 42.6 25 48.2 32 48.2 C39 48.2 44.6 42.6 44.6 35.6 C44.6 25.6 32 9 32 9 Z" />
    <path d="M8 55.4 C14 51 20.4 59 26.6 54.8 C32.8 50.6 38.4 58.6 44.6 54.6 C50 51.2 53 54.4 56.6 54.6" />
  </Sketch>
);

/** Roof line with streaks lifting off. */
export const RoofIcon = ({ className, style }: IconProps) => (
  <Sketch className={className} style={style}>
    <path d="M7 33.4 L32 13 L57 33.4" />
    <path d="M14.6 32.6 L14.6 51.4 L49.4 51.4 L49.4 32.6" />
    <path d="M26 27.4 L28.6 22.6" />
    <path d="M34 27 L36.6 22" />
    <path d="M41.4 30.6 L44 25.6" />
  </Sketch>
);

/** Window pane with a squeegee sweep across it. */
export const WindowIcon = ({ className, style }: IconProps) => (
  <Sketch className={className} style={style}>
    <path d="M12 12.6 L52 12 L52.6 52 L12.6 52.4 Z" />
    <path d="M32.4 12.4 L32.6 52.2" />
    <path d="M12.4 32.4 L52.4 32" />
    <path d="M18.6 46.6 C25.4 38.6 34.6 31.4 46 26.6" />
  </Sketch>
);

/**
 * A STOREFRONT (awning + display pane + squeegee shine) — glass & mirror.
 * It used to be a spray bottle, which reads as "generic cleaning" and told you
 * nothing about how this differs from window cleaning. The whole point of this
 * service is retail glass, so the icon should be a shop, not a bottle.
 */
export const GlassIcon = ({ className, style }: IconProps) => (
  <Sketch className={className} style={style}>
    {/* awning */}
    <path d="M9 20.4 L55 19.6 L50.6 11 L13.4 11.6 Z" />
    <path d="M21 11.4 L18.6 20.2" />
    <path d="M32 11.2 L31.8 20" />
    <path d="M43 11.2 L45 20" />
    {/* storefront box */}
    <path d="M12.6 20.6 L12.8 55.4 L51.6 54.8 L51.2 20" />
    {/* big display pane + door */}
    <path d="M17.4 26 L34 25.6 L34.2 49.6 L17.6 50 Z" />
    <path d="M39 25.8 L47 25.6 L47.2 55 L39.2 55.2 Z" />
    {/* squeegee shine across the pane */}
    <path d="M20.6 44 C25.4 37.6 27.6 33.4 31 29.4" />
  </Sketch>
);

/** A hard hat — industrial & construction cleanup. */
export const IndustrialIcon = ({ className, style }: IconProps) => (
  <Sketch className={className} style={style}>
    {/* dome */}
    <path d="M14.6 41 C14.2 27.4 22.4 19.4 32 19.4 C41.6 19.4 49.8 27.4 49.4 41" />
    {/* brim */}
    <path d="M8.6 41 L55.4 40.4 L55.4 45 L8.6 45.6 Z" />
    {/* center + side ridges */}
    <path d="M32 19.6 L32.2 40.8" />
    <path d="M23 21.6 L21.4 40.6" />
    <path d="M41 21.4 L43 40.8" />
  </Sketch>
);

/* ------------------------------- REGISTRY -------------------------------- */

export const handDrawnIcons = {
  // pain
  weekend: WeekendIcon,
  mildew: MildewIcon,
  damage: DamageIcon,
  // benefits
  clock: ClockIcon,
  shield: ShieldIcon,
  shine: ShineIcon,
  // services
  pressure: PressureIcon,
  softwash: SoftWashIcon,
  roof: RoofIcon,
  window: WindowIcon,
  glass: GlassIcon,
  industrial: IndustrialIcon,
} as const;

export type HandDrawnIconName = keyof typeof handDrawnIcons;

export const HandDrawnIcon = ({
  name,
  className,
  style,
}: {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const Cmp = handDrawnIcons[name as HandDrawnIconName];
  return Cmp ? <Cmp className={className} style={style} /> : null;
};
