import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";
import { Phone, Menu, X, ChevronDown, MapPin } from "lucide-react";
import { HandDrawnIcon } from "@/components/icons/HandDrawn";
import { services, travel } from "@/data";
import { locationsContent } from "@/content/locations";

const navLinks: Array<{ label: string; to?: string; href?: string }> = [
  { label: "Our Work", to: "/our-work" },
  { label: "About", to: "/about" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

const linkClass =
  "text-xk-warm-white/70 hover:text-xk-warm-white font-body text-sm font-medium transition-colors";

type FlyoutItem = { to: string; label: string; icon?: string };

/**
 * Nav flyout — opens on hover and on keyboard focus (focus-within), so it isn't
 * mouse-only. The pt-3 wrapper is a deliberate bridge: it keeps the panel inside
 * the hover area while the cursor travels down from the nav link.
 */
const NavFlyout = ({
  label,
  to,
  items,
  allLabel,
  footnote,
  columns = 1,
  width,
}: {
  label: string;
  to: string;
  items: FlyoutItem[];
  allLabel: string;
  footnote?: string;
  columns?: 1 | 2;
  width: string;
}) => (
  <div className="relative group">
    <Link
      to={to}
      className={`${linkClass} flex items-center gap-1 group-hover:text-xk-warm-white`}
    >
      {label}
      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
    </Link>

    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0">
      <div
        className={`${width} bg-xk-charcoal backdrop-blur-sm border border-xk-warm-white/10 rounded-xl shadow-2xl p-2`}
      >
        <div className={columns === 2 ? "grid grid-cols-2 gap-x-1" : ""}>
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-xk-red/15 transition-colors group/item"
            >
              {item.icon ? (
                <HandDrawnIcon
                  name={item.icon}
                  className="w-6 h-6 text-xk-red flex-shrink-0 transition-transform group-hover/item:scale-110"
                />
              ) : (
                <MapPin className="w-4 h-4 text-xk-red flex-shrink-0" />
              )}
              <span className="text-xk-warm-white/80 group-hover/item:text-xk-warm-white font-body text-sm font-medium transition-colors">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {footnote && (
          <p className="px-3 pt-2.5 pb-1 mt-1 border-t border-xk-warm-white/10 text-xk-warm-white/45 font-body text-xs leading-relaxed">
            {footnote}
          </p>
        )}

        <Link
          to={to}
          className={`block px-3 py-2.5 text-xk-red hover:text-xk-red-glow font-heading font-bold text-sm transition-colors ${
            footnote ? "" : "mt-1 border-t border-xk-warm-white/10"
          }`}
        >
          {allLabel} →
        </Link>
      </div>
    </div>
  </div>
);

const ServicesMenu = () => (
  <NavFlyout
    label="Services"
    to="/services"
    allLabel="View All Services"
    width="w-[19rem]"
    items={services.map((s) => ({
      to: `/services/${s.slug}`,
      label: s.title,
      icon: s.icon,
    }))}
  />
);

const ServiceAreasMenu = () => (
  <NavFlyout
    label="Service Areas"
    to="/service-areas"
    allLabel="View All Service Areas"
    width="w-[30rem]"
    columns={2}
    footnote={travel.short}
    items={locationsContent.map((l) => ({
      to: `/service-areas/${l.slug}`,
      label: l.city,
    }))}
  />
);

const MobileGroup = ({
  label,
  to,
  items,
  open,
  onToggle,
  onNavigate,
  footnote,
}: {
  label: string;
  to: string;
  items: FlyoutItem[];
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
  footnote?: string;
}) => (
  <div>
    <div className="flex items-center justify-between">
      <Link to={to} className={`block ${linkClass}`} onClick={onNavigate}>
        {label}
      </Link>
      <button
        onClick={onToggle}
        aria-label={`${open ? "Collapse" : "Expand"} ${label}`}
        aria-expanded={open}
        className="text-xk-warm-white/60 p-2 -mr-2"
      >
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
    </div>

    {open && (
      <div className="mt-2 mb-1 ml-3 pl-3 border-l border-xk-warm-white/10 space-y-2.5">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={onNavigate}
            className="block text-xk-warm-white/60 hover:text-xk-warm-white font-body text-sm transition-colors"
          >
            {item.label}
          </Link>
        ))}
        {footnote && (
          <p className="text-xk-warm-white/40 font-body text-xs leading-relaxed pt-1">
            {footnote}
          </p>
        )}
      </div>
    )}
  </div>
);

const NavItem = ({
  link,
  className,
  onClick,
}: {
  link: (typeof navLinks)[number];
  className: string;
  onClick?: () => void;
}) =>
  link.to ? (
    <Link to={link.to} className={className} onClick={onClick}>
      {link.label}
    </Link>
  ) : (
    <a href={link.href} className={className} onClick={onClick}>
      {link.label}
    </a>
  );

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<"services" | "areas" | null>(null);

  const close = () => {
    setMenuOpen(false);
    setOpenGroup(null);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-xk-charcoal/95 backdrop-blur-sm border-b border-xk-warm-white/10 ${
        scrolled ? "shadow-lg py-2" : "py-3"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Xtreme Kleen" className="h-10 md:h-11 rounded" />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <ServicesMenu />
          <ServiceAreasMenu />
          {navLinks.map((link) => (
            <NavItem key={link.label} link={link} className={linkClass} />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:3619477811"
            className="hidden sm:flex items-center gap-2 text-xk-warm-white/80 font-heading font-bold text-sm hover:text-xk-red transition-colors"
          >
            <Phone className="w-4 h-4" />
            361-947-7811
          </a>
          <a
            href="#quote"
            className="bg-xk-red text-xk-warm-white font-heading font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-xk-red-glow transition-all"
          >
            Free Quote
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xk-warm-white p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-xk-charcoal border-t border-xk-warm-white/10 px-4 py-4 space-y-3 max-h-[calc(100vh-5rem)] overflow-y-auto">
          {/* Hover is meaningless on touch — the sub-lists expand inline instead. */}
          <MobileGroup
            label="Services"
            to="/services"
            open={openGroup === "services"}
            onToggle={() =>
              setOpenGroup((g) => (g === "services" ? null : "services"))
            }
            items={services.map((s) => ({
              to: `/services/${s.slug}`,
              label: s.title,
            }))}
            onNavigate={close}
          />
          <MobileGroup
            label="Service Areas"
            to="/service-areas"
            open={openGroup === "areas"}
            onToggle={() => setOpenGroup((g) => (g === "areas" ? null : "areas"))}
            items={locationsContent.map((l) => ({
              to: `/service-areas/${l.slug}`,
              label: l.city,
            }))}
            footnote={travel.short}
            onNavigate={close}
          />
          {navLinks.map((link) => (
            <NavItem
              key={link.label}
              link={link}
              className={`block ${linkClass}`}
              onClick={close}
            />
          ))}
          <a
            href="tel:3619477811"
            className="flex items-center gap-2 text-xk-red font-heading font-bold text-sm"
          >
            <Phone className="w-4 h-4" />
            361-947-7811
          </a>
        </div>
      )}
    </header>
  );
};

export default StickyHeader;
