import { useState, useEffect } from "react";
import logo from "@/assets/logo.jpg";
import { Phone } from "lucide-react";

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-xk-charcoal border-b border-xk-blue/40 ${
        scrolled ? "shadow-glow-blue py-2" : "py-3"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#top">
          <img src={logo} alt="Xtreme Kleen" className="h-10 md:h-12" />
        </a>
        <div className="flex items-center gap-3 md:gap-5">
          <a
            href="tel:3619477811"
            className="hidden sm:flex items-center gap-2 text-xk-blue font-heading font-bold text-lg"
          >
            <Phone className="w-4 h-4" />
            361-947-7811
          </a>
          <a
            href="#quote"
            className="bg-xk-blue text-primary-foreground font-heading font-bold text-sm md:text-base px-5 py-2.5 rounded hover:bg-xk-blue-glow transition-colors shadow-glow-blue"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;
