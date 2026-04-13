import logo from "@/assets/logo.jpg";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-xk-steel border-t border-xk-warm-white/10 pt-14 pb-6">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        <div>
          <img src={logo} alt="Xtreme Kleen" className="h-12 mb-5 rounded" />
          <p className="text-xk-warm-white/50 font-body text-sm leading-relaxed">
            Professional power washing serving Corpus Christi, McAllen, and San
            Antonio. Industrial, commercial, and residential — we clean anything
            you put in front of us.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold text-xk-warm-white text-base mb-5 tracking-wide">
            OUR SERVICES
          </h4>
          <ul className="space-y-2.5 text-xk-warm-white/50 font-body text-sm">
            <li>Residential Power Washing</li>
            <li>Commercial Power Washing</li>
            <li>Soft Washing</li>
            <li>Industrial Equipment Cleaning</li>
            <li>High Heat Steam Degreasing</li>
            <li>Biodegradable Chemical Cleaning</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-xk-warm-white text-base mb-5 tracking-wide">
            CONTACT US
          </h4>
          <div className="space-y-4">
            <a href="tel:3619477811" className="flex items-center gap-3 text-xk-warm-white/60 font-body text-sm hover:text-xk-red transition-colors">
              <Phone className="w-4 h-4 text-xk-red" /> 361-947-7811
            </a>
            <a href="mailto:Xtreme.Kleen2023@gmail.com" className="flex items-center gap-3 text-xk-warm-white/60 font-body text-sm hover:text-xk-red transition-colors">
              <Mail className="w-4 h-4 text-xk-red" /> Xtreme.Kleen2023@gmail.com
            </a>
            <div className="flex items-center gap-3 text-xk-warm-white/50 font-body text-sm">
              <MapPin className="w-4 h-4 text-xk-red" /> Corpus Christi · McAllen · San Antonio, TX
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-xk-warm-white/8 pt-6 text-center">
        <p className="text-xk-warm-white/30 font-body text-xs">
          © {new Date().getFullYear()} Xtreme Kleen. All rights reserved. Wash Away the Past.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
