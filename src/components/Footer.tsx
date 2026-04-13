import logo from "@/assets/logo.jpg";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-xk-charcoal border-t-2 border-xk-blue pt-12 pb-6">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div>
          <img src={logo} alt="Xtreme Kleen" className="h-12 mb-4" />
          <p className="text-xk-text-light font-body text-sm">
            Professional power washing serving Corpus Christi, McAllen, and San
            Antonio. Industrial, commercial, and residential — we clean anything
            you put in front of us.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold text-primary-foreground text-lg mb-4">SERVICES</h4>
          <ul className="space-y-2 text-xk-text-light font-body text-sm">
            <li>Residential Power Washing</li>
            <li>Commercial Power Washing</li>
            <li>Soft Washing</li>
            <li>Industrial Equipment Cleaning</li>
            <li>High Heat Steam Degreasing</li>
            <li>Biodegradable Chemical Cleaning</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-primary-foreground text-lg mb-4">CONTACT</h4>
          <div className="space-y-3">
            <a href="tel:3619477811" className="flex items-center gap-2 text-xk-blue font-body text-sm hover:text-xk-blue-glow transition-colors">
              <Phone className="w-4 h-4" /> 361-947-7811
            </a>
            <a href="mailto:Xtreme.Kleen2023@gmail.com" className="flex items-center gap-2 text-xk-blue font-body text-sm hover:text-xk-blue-glow transition-colors">
              <Mail className="w-4 h-4" /> Xtreme.Kleen2023@gmail.com
            </a>
            <div className="flex items-center gap-2 text-xk-text-light font-body text-sm">
              <MapPin className="w-4 h-4 text-xk-blue" /> Corpus Christi · McAllen · San Antonio, TX
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border/20 pt-6 text-center">
        <p className="text-xk-text-light/60 font-body text-xs">
          © {new Date().getFullYear()} Xtreme Kleen. All rights reserved. Wash Away the Past.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
