import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";
import { Phone, Menu, X } from "lucide-react";

// Home-section anchors need the base path so they resolve from subpages too
// (GitHub Pages serves the site from /xtreme-wash-magic/, not the domain root).
const home = (hash: string) => `${import.meta.env.BASE_URL}${hash}`;

const navLinks: Array<{ label: string; to?: string; href?: string }> = [
  { label: "Services", to: "/services" },
  { label: "Service Areas", to: "/service-areas" },
  { label: "Our Work", href: home("#work") },
  { label: "Reviews", href: home("#reviews") },
  { label: "Contact", href: "#quote" }, // every page renders a #quote form
];

const linkClass =
  "text-xk-warm-white/70 hover:text-xk-warm-white font-body text-sm font-medium transition-colors";

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
        <div className="md:hidden bg-xk-charcoal border-t border-xk-warm-white/10 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <NavItem
              key={link.label}
              link={link}
              className={`block ${linkClass}`}
              onClick={() => setMenuOpen(false)}
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
