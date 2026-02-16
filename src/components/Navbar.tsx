import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

import { PROPERTIES as properties } from "@/lib/constants";

const sectionsByPage: Record<string, { main: { name: string; id: string }[]; extra: { name: string; id: string }[] }> = {
  "/Vistara-Presidential": {
    main: [
      { name: "Home", id: "home" },
      { name: "Gallery", id: "gallery" },
      { name: "Virtual Tour", id: "virtual-tour" },
      { name: "Property", id: "explore" },
    ],
    extra: [
      { name: "Amenities", id: "amenities" },
      { name: "Location", id: "location" },
      { name: "Reviews", id: "testimonials" },
      { name: "Contact", id: "contact" },
    ],
  },
  "/": {
    main: [
      { name: "Overview", id: "overview" },
      { name: "Virtual Tour", id: "virtual-tour" },
      { name: "Gallery", id: "gallery" },
      { name: "Spaces", id: "spaces" },
    ],
    extra: [
      { name: "Amenities", id: "amenities" },
      { name: "Policies", id: "policies" },
      { name: "Contact", id: "contact" },
    ],
  },
  "/Terrace-Canvas": {
    main: [
      { name: "Overview", id: "overview" },
      { name: "Gallery", id: "gallery" },
      { name: "Features", id: "features" },
    ],
    extra: [
      { name: "Spaces", id: "spaces" },
      { name: "Amenities", id: "amenities" },
      { name: "Contact", id: "contact" },
    ],
  },
};

interface NavbarProps {
  propertyPage?: string;
}

export function Navbar({ propertyPage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPropertySwitcherOpen, setIsPropertySwitcherOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;
  const sections = sectionsByPage[currentPath] || sectionsByPage["/"];
  const currentProperty = properties.find((p) => p.path === currentPath) || properties[0];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMobileMenuOpen(false);
      setIsDropdownOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant border-b border-border"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo + Property Switcher */}
            <div className="flex items-center gap-2">
              <div
                onClick={() => navigate("/")}
                className="flex items-center gap-3 cursor-pointer group"
              >
                {currentProperty.isRectLogo ? (
                  <div className="w-40 h-24 overflow-hidden">
                    <img
                      src={currentProperty.logo}
                      alt={`${currentProperty.name} Logo`}
                      className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <img
                    src={currentProperty.logo}
                    alt={`${currentProperty.name} Logo`}
                    className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                )}
                <span
                  className={`font-playfair text-xl font-bold transition-colors duration-300 hidden sm:inline ${isScrolled ? "text-foreground" : "text-white dark:text-foreground"
                    } group-hover:text-gold`}
                >
                  {currentProperty.name}
                </span>
              </div>

              {/* Property Switcher — hidden on mobile, use hamburger menu instead */}
              <div
                className="relative hidden lg:block"
                onMouseEnter={() => {
                  if (window.matchMedia('(hover: hover)').matches) {
                    setIsPropertySwitcherOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (window.matchMedia('(hover: hover)').matches) {
                    setIsPropertySwitcherOpen(false);
                  }
                }}
              >
                <button
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 ${isScrolled
                    ? "border-gold/30 hover:border-gold hover:bg-gold/5 text-foreground"
                    : "border-white/30 hover:border-white hover:bg-white/10 text-white dark:text-foreground"
                    }`}
                  onClick={() => setIsPropertySwitcherOpen((p) => !p)}
                  aria-label="Switch property"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider">Explore More</span>
                  <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isPropertySwitcherOpen ? "rotate-180" : ""}`} />
                </button>

                {isPropertySwitcherOpen && (
                  <div className="absolute left-0 pt-2 w-64 z-50 animate-fade-in">
                    <div className="bg-background/95 backdrop-blur-md border border-border rounded-xl shadow-elegant py-3">
                      <p className="px-4 pb-2 text-[10px] font-bold uppercase tracking-widest text-gold">Other Properties</p>
                      {properties.filter(p => p.path !== currentPath).map((property) => (
                        <button
                          key={property.path}
                          onClick={() => {
                            navigate(property.path);
                            setIsPropertySwitcherOpen(false);
                          }}
                          className={`block w-full text-left px-4 py-2.5 transition-colors duration-300 ${currentPath === property.path
                            ? "bg-gold/10 text-gold"
                            : "text-foreground hover:text-gold hover:bg-gold/10"
                            }`}
                        >
                          <span className="text-sm font-medium block">{property.name}</span>
                          <span className="text-xs text-muted-foreground">{property.subtitle}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1 relative">
              {sections.main.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-md ${isScrolled
                    ? "text-foreground hover:text-gold hover:bg-gold/10"
                    : "text-white dark:text-foreground hover:text-gold hover:bg-white/10 dark:hover:bg-gold/10"
                    }`}
                >
                  {section.name}
                </button>
              ))}

              {/* More Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => {
                  if (window.matchMedia('(hover: hover)').matches) {
                    setIsDropdownOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (window.matchMedia('(hover: hover)').matches) {
                    setIsDropdownOpen(false);
                  }
                }}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${isScrolled
                    ? "text-foreground hover:text-gold hover:bg-gold/10"
                    : "text-white dark:text-foreground hover:text-gold hover:bg-white/10 dark:hover:bg-gold/10"
                    }`}
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                >
                  More <ChevronDown size={16} />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-0 w-44 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-lg py-2">
                    {sections.extra.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="block w-full text-left px-4 py-2 text-sm text-foreground hover:text-gold hover:bg-gold/10 transition-colors duration-300"
                      >
                        {section.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={isScrolled ? "text-foreground" : "text-white dark:text-foreground"} />
              ) : (
                <Menu className={isScrolled ? "text-foreground" : "text-white dark:text-foreground"} />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[45] lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative bg-background/95 backdrop-blur-md border-b border-border pt-20">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {/* Property Switcher in Mobile */}
              <p className="px-4 pt-2 pb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Properties</p>
              {properties.map((property) => (
                currentPath === property.path ? (
                  <div key={property.path} className="block w-full text-left px-4 py-2.5 rounded-md bg-gold/5 text-gold">
                    <span className="text-sm font-bold">{property.name}</span>
                    <span className="text-[10px] uppercase tracking-wider opacity-70 ml-2">(Current)</span>
                  </div>
                ) : (
                  <button
                    key={property.path}
                    onClick={() => {
                      navigate(property.path);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2.5 rounded-md text-foreground hover:text-gold hover:bg-gold/10 transition-colors"
                  >
                    <span className="text-sm font-medium">{property.name}</span>
                    <span className="text-xs text-muted-foreground ml-2">{property.subtitle}</span>
                  </button>
                )
              ))}

              <div className="border-t border-border my-2" />

              <p className="px-4 pt-2 pb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Sections</p>
              {[...sections.main, ...sections.extra].map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="block w-full text-left px-4 py-3 text-foreground hover:text-gold hover:bg-gold/10 rounded-md transition-colors duration-300"
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}