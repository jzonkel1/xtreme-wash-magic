import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { business, services, travel } from "@/data";
import { locationsContent } from "@/content/locations";

const Footer = () => (
  <footer className="bg-xk-steel border-t border-xk-warm-white/10 pt-14 pb-6">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-1">
          <img src={logo} alt={business.brand} className="h-12 mb-5 rounded" />
          <p className="text-xk-warm-white/50 font-body text-sm leading-relaxed">
            Soft wash, pressure washing, roof and window cleaning based in
            Portland, Texas — serving homes, businesses, and job sites across the
            Coastal Bend.
          </p>
        </div>

        <div>
          <h4 className="font-display uppercase text-xk-warm-white text-base mb-5 tracking-wide">
            Our Services
          </h4>
          <ul className="space-y-2.5 text-xk-warm-white/50 font-body text-sm">
            {services.map((s) => (
              <li key={s.title}>
                <Link to={`/services/${s.slug}`} className="hover:text-xk-warm-white transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display uppercase text-xk-warm-white text-base mb-5 tracking-wide">
            Service Area
          </h4>
          <p className="text-xk-warm-white/50 font-body text-sm leading-relaxed">
            {locationsContent.map((l, i) => (
              <span key={l.slug}>
                {i > 0 && " · "}
                <Link
                  to={`/service-areas/${l.slug}`}
                  className="hover:text-xk-warm-white transition-colors"
                >
                  {l.city}
                </Link>
              </span>
            ))}
            {" · "}
            <Link to="/service-areas" className="hover:text-xk-warm-white transition-colors">
              The Coastal Bend
            </Link>
          </p>
          <p className="text-xk-warm-white/40 font-body text-xs leading-relaxed mt-4 pt-4 border-t border-xk-warm-white/10">
            We travel — jobs as far out as {travel.cities.join(", ")}. Anywhere in
            Texas for the right job.{" "}
            <a
              href={business.phoneHref}
              className="text-xk-red hover:text-xk-red-glow transition-colors font-semibold"
            >
              Call {business.phone}
            </a>{" "}
            for out-of-area work.
          </p>
        </div>

        <div>
          <h4 className="font-display uppercase text-xk-warm-white text-base mb-5 tracking-wide">
            Contact Us
          </h4>
          <div className="space-y-4">
            <a
              href={business.phoneHref}
              className="flex items-center gap-3 text-xk-warm-white/60 font-body text-sm hover:text-xk-red transition-colors"
            >
              <Phone className="w-4 h-4 text-xk-red flex-shrink-0" /> {business.phone}
            </a>
            <a
              href={`mailto:${business.email}`}
              className="flex items-start gap-3 text-xk-warm-white/60 font-body text-sm hover:text-xk-red transition-colors break-all"
            >
              <Mail className="w-4 h-4 text-xk-red flex-shrink-0 mt-0.5" />
              {business.email}
            </a>
            <div className="flex items-center gap-3 text-xk-warm-white/50 font-body text-sm">
              <Clock className="w-4 h-4 text-xk-red flex-shrink-0" /> {business.hours}
            </div>
            <div className="flex items-center gap-3 text-xk-warm-white/50 font-body text-sm">
              <MapPin className="w-4 h-4 text-xk-red flex-shrink-0" /> {business.primaryCity}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-xk-warm-white/10 pt-6 text-center">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-4 font-body text-xs text-xk-warm-white/40">
          {[
            { label: "Our Work", to: "/our-work" },
            { label: "About", to: "/about" },
            { label: "Reviews", to: "/reviews" },
            { label: "Contact", to: "/contact" },
            { label: "Privacy Policy", to: "/privacy" },
            { label: "Terms of Service", to: "/terms" },
          ].map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-xk-warm-white transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
        <p className="text-xk-warm-white/30 font-body text-xs">
          © {new Date().getFullYear()} {business.legalName} · dba {business.brand}.
          All rights reserved. {business.tagline}.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
