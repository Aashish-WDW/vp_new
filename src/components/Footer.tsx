import { Instagram, Mail, MapPin } from "lucide-react";
import { useLocation } from "react-router-dom";
import { PROPERTIES } from "@/lib/constants";
import lookaroundLogo from "@/assets/lookaround.png";

export function Footer() {
  const location = useLocation();
  const currentProperty = PROPERTIES.find(p => p.path === location.pathname) || PROPERTIES[0];

  return (
    <footer className="bg-secondary/50 dark:bg-secondary/20 border-t border-border py-12 px-4 shadow-inner">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3">
              {currentProperty.isRectLogo ? (
                <div className="w-40 h-20 overflow-hidden">
                  <img
                    src={currentProperty.logo}
                    alt={`${currentProperty.name} Logo`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              ) : (
                <img
                  src={currentProperty.logo}
                  alt={`${currentProperty.name} Logo`}
                  className="h-24 w-24 object-contain"
                />
              )}
              {!currentProperty.hideExtraImage && (
                <img
                  src={currentProperty.image}
                  alt={currentProperty.name}
                  className="h-16 w-24 object-cover rounded-md shadow-sm border border-border"
                />
              )}
            </div>
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
              {currentProperty.name}
            </h3>
            <p className="text-muted-foreground">
              {currentProperty.description}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-foreground mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground mb-2">Call Us Now</p>
                {currentProperty.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 hover:text-gold transition-colors duration-300 mb-1"
                  >
                    {phone}
                  </a>
                ))}
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Send Email</p>
                <a
                  href={`mailto:${currentProperty.email}`}
                  className="flex items-center gap-2 hover:text-gold transition-colors duration-300"
                >
                  <Mail className="h-4 w-4" />
                  {currentProperty.email}
                </a>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Our Location</p>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span className="text-sm">87/3, Site #10, opposite to SANAATHANA CHAMANTHI, Chaitanya Ananya, Seegehalli, Krishnarajapura, Bengaluru, Karnataka 560067, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-foreground mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href={currentProperty.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center hover:bg-gold hover:text-background transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={currentProperty.airbnb}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center hover:bg-gold hover:text-white dark:hover:text-background transition-all duration-300 font-bold"
                aria-label="Airbnb"
              >
                A
              </a>
            </div>
          </div>
        </div>

        {/* Copyright & Management */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground order-2 md:order-1">
            © {new Date().getFullYear()} {currentProperty.name}. All Rights Reserved.
          </p>

          <div className="flex items-center gap-3 order-1 md:order-2 px-4 py-2 bg-secondary/30 dark:bg-card/30 rounded-full border border-border/50">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Managed by</span>
            <div className="h-6 w-px bg-border/50" />
            <div className="w-24 h-12 overflow-hidden">
              <img
                src={lookaroundLogo}
                alt="LookAround Logo"
                className="w-full h-full object-cover object-center transition-all hover:scale-105 opacity-80 hover:opacity-100 dark:invert"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
