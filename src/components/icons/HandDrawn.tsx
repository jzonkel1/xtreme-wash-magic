// ---------------------------------------------------------------------------
// Hand-drawn icon set — custom sketchy line art, not a stock icon library.
// Each icon is drawn with deliberately imperfect paths and passed through a
// subtle turbulence/displacement filter so the strokes read as inked by hand.
// ---------------------------------------------------------------------------

type IconProps = { className?: string };

const ROUGH_ID = "xk-rough";

/** Shared wrapper: sketchy stroke defaults + the roughen filter. */
const Sketch = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={3.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <defs>
      {/* Roughen: nudges every stroke off its perfect path so it looks drawn. */}
      <filter id={ROUGH_ID} x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.035"
          numOctaves="2"
          seed="7"
          result="noise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="1.6"
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
export const WeekendIcon = ({ className }: IconProps) => (
  <Sketch className={className}>
    <path d="M15 9.6 L49 9 " />
    <path d="M15 55 L49 54.4" />
    <path d="M21 9.8 L43.4 9.4 C43.6 21.6 34 27.8 32 31.8 C30.4 27.6 20.6 21.8 21 9.8 Z" />
    <path d="M21 54.8 L43.4 54.4 C43.8 42.4 34 36.2 32 32 C30.4 36.4 20.6 42.8 21 54.8 Z" />
    <path d="M32 35.4 L32.2 44" />
    <path d="M28.6 50 L28.8 50.2" />
    <path d="M35.6 49.4 L35.8 49.6" />
  </Sketch>
);

/** A grimy stain blob bleeding downward in drips — coastal buildup that keeps feeding. */
export const MildewIcon = ({ className }: IconProps) => (
  <Sketch className={className}>
    <path d="M15 26 C13 18 22 12.6 29 16 C34 11.6 45 15 44 23 C51.4 25 50 34 43 35 C42 42.4 32 44.4 28 39 C20.6 42.4 12.6 36 15 26 Z" />
    <path d="M22 38.6 L23 49.4" />
    <path d="M30 40.4 L31 53.6" />
    <path d="M38 37.4 L39 47" />
    <path d="M25 25.4 L25.3 25.7" />
    <path d="M34.4 23.4 L34.7 23.7" />
    <path d="M31 31.4 L31.3 31.7" />
  </Sketch>
);

/** A surface panel split by a jagged crack — what brute-force pressure leaves behind. */
export const DamageIcon = ({ className }: IconProps) => (
  <Sketch className={className}>
    <path d="M11 13.4 L53 12.6 L53.6 51 L11.6 51.6 Z" />
    <path d="M31 12.8 L27.4 24.6 L35 29 L28.6 39 L32 51.2" />
    <path d="M27.4 24.6 L18.6 22.6" />
    <path d="M35 29 L44 32.4" />
    <path d="M28.6 39 L20.4 41" />
  </Sketch>
);

/* ---------------------------- BENEFIT ICONS ----------------------------- */

/** Clock with speed lines — done in hours. */
export const ClockIcon = ({ className }: IconProps) => (
  <Sketch className={className}>
    <path d="M36 15 C45.4 14.6 53.2 22 53.6 31.4 C54 40.8 46.4 48.6 37 49 C27.6 49.4 19.8 42 19.4 32.6 C19 23.2 26.6 15.4 36 15 Z" />
    <path d="M36.4 22.6 L36.6 32.6 L44 36.6" />
    <path d="M5 25.4 L13.6 25" />
    <path d="M2.6 32.6 L11.4 32.4" />
    <path d="M5.4 39.8 L14 39.4" />
  </Sketch>
);

/** Shield holding a droplet — chemistry protects, pressure destroys. */
export const ShieldIcon = ({ className }: IconProps) => (
  <Sketch className={className}>
    <path d="M32 9 C38.4 13.4 45.4 15.6 52 15.4 C52.4 30 48.6 43.6 32 55 C15.6 43.6 11.6 30 12 15.4 C18.6 15.6 25.6 13.4 32 9 Z" />
    <path d="M32 24 C32 24 24.6 32.6 24.6 37.6 C24.6 41.8 27.9 45.2 32 45.2 C36.1 45.2 39.4 41.8 39.4 37.6 C39.4 32.6 32 24 32 24 Z" />
  </Sketch>
);

/** Four-point shine burst — brought back to life. */
export const ShineIcon = ({ className }: IconProps) => (
  <Sketch className={className}>
    <path d="M31 11 C33.4 23.4 39.6 29.8 52.4 32 C39.6 34.4 33.4 40.6 31 53.4 C28.8 40.6 22.4 34.4 9.6 32 C22.4 29.8 28.8 23.4 31 11 Z" />
    <path d="M50.6 12 C51.4 15.4 52.4 16.6 55.8 17.4 C52.4 18.4 51.4 19.4 50.6 22.8 C49.8 19.4 48.6 18.4 45.4 17.4 C48.6 16.6 49.8 15.4 50.6 12 Z" />
  </Sketch>
);

/* ---------------------------- SERVICE ICONS ----------------------------- */

/** A pressure-washer trigger gun firing a fan of spray. */
export const PressureIcon = ({ className }: IconProps) => (
  <Sketch className={className}>
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
export const SoftWashIcon = ({ className }: IconProps) => (
  <Sketch className={className}>
    <path d="M32 9 C32 9 19.4 25.6 19.4 35.6 C19.4 42.6 25 48.2 32 48.2 C39 48.2 44.6 42.6 44.6 35.6 C44.6 25.6 32 9 32 9 Z" />
    <path d="M8 55.4 C14 51 20.4 59 26.6 54.8 C32.8 50.6 38.4 58.6 44.6 54.6 C50 51.2 53 54.4 56.6 54.6" />
  </Sketch>
);

/** Roof line with streaks lifting off. */
export const RoofIcon = ({ className }: IconProps) => (
  <Sketch className={className}>
    <path d="M7 33.4 L32 13 L57 33.4" />
    <path d="M14.6 32.6 L14.6 51.4 L49.4 51.4 L49.4 32.6" />
    <path d="M26 27.4 L28.6 22.6" />
    <path d="M34 27 L36.6 22" />
    <path d="M41.4 30.6 L44 25.6" />
  </Sketch>
);

/** Window pane with a squeegee sweep across it. */
export const WindowIcon = ({ className }: IconProps) => (
  <Sketch className={className}>
    <path d="M12 12.6 L52 12 L52.6 52 L12.6 52.4 Z" />
    <path d="M32.4 12.4 L32.6 52.2" />
    <path d="M12.4 32.4 L52.4 32" />
    <path d="M18.6 46.6 C25.4 38.6 34.6 31.4 46 26.6" />
  </Sketch>
);

/** A spray bottle — glass & mirror cleaning. */
export const GlassIcon = ({ className }: IconProps) => (
  <Sketch className={className}>
    {/* bottle body */}
    <path d="M25.4 28 L25.4 51 C25.4 53.4 26.8 55 29.4 55 L38.6 55 C41.2 55 42.6 53.4 42.6 51 L42.6 28 Z" />
    {/* neck + shoulder */}
    <path d="M28.4 28 L28.4 21.6 L38 21.6 L38 28" />
    {/* trigger head + nozzle */}
    <path d="M28.4 22.4 L19.6 20 L19.6 14.4 L28.4 16.4" />
    <path d="M19.6 14.4 L12 12.6" />
    {/* spray */}
    <path d="M8.6 11 L8.9 11.3" />
    <path d="M8 15 L8.3 15.3" />
    <path d="M8.6 7.4 L8.9 7.7" />
    {/* label */}
    <path d="M29 40 L39 40" />
  </Sketch>
);

/** A hard hat — industrial & construction cleanup. */
export const IndustrialIcon = ({ className }: IconProps) => (
  <Sketch className={className}>
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
}: {
  name: string;
  className?: string;
}) => {
  const Cmp = handDrawnIcons[name as HandDrawnIconName];
  return Cmp ? <Cmp className={className} /> : null;
};
