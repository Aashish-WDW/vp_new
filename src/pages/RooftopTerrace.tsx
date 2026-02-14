import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import {
  Eye, Wind, Lock, Users, Sunset, Cloud, Mic, Building, Home,
  Sparkles, Lightbulb, Armchair, Zap, Droplets, Wifi, Music,
  Camera, UtensilsCrossed, IceCreamCone, Flame, Thermometer,
  Shield, Car, Gift, Theater, ClipboardList, Phone, Mail,
  ChevronRight, X, Star, PartyPopper, MapPin, Gamepad2
} from "lucide-react";

import heroImage from "@/assets/terracemain.jpg";
import nightImage from "@/assets/movie.png";
import bbqImage from "@/assets/yoga.png";
import diningImage from "@/assets/happy.png";
import loungeImage from "@/assets/class.jpg";
import cookingImage from "@/assets/cooking.jpg";
import { PropertyMap } from "@/components/PropertyMap";

const primaryFeatures = [
  { icon: Eye, label: "Panoramic City Views", desc: "Stunning 360-degree vistas of Whitefield skyline" },
  { icon: Wind, label: "Open-Air Freedom", desc: "Spacious layout with fresh air and natural ambiance" },
  { icon: Lock, label: "Complete Privacy", desc: "Exclusively yours — no sharing, no interruptions" },
  { icon: Users, label: "Flexible Capacity", desc: "Accommodates 20–50 guests comfortably" },
  { icon: Sunset, label: "Sunset to Starlight", desc: "Golden hour to moonlit evenings" },
  { icon: Cloud, label: "Weather-Protected", desc: "Covered sections for year-round celebrations" },
  { icon: Mic, label: "Professional Setup Space", desc: "Room for catering, DJ, décor, bars & more" },
  { icon: Building, label: "Easy Elevator Access", desc: "Hassle-free setup and guest movement" },
  { icon: Home, label: "Indoor Backup", desc: "Combine with apartments below for weather contingency" },
  { icon: Sparkles, label: "No Noise Complaints", desc: "Elevated location ensures festivities stay private" },
];

const spaceSpecs = [
  { icon: UtensilsCrossed, label: "Generous Square Footage", desc: "Multiple zones for different activities" },
  { icon: Armchair, label: "Flexible Layout Options", desc: "Cocktail, seated dinner, or mixed formats" },
  { icon: Music, label: "Entertainment-Ready", desc: "Dedicated DJ & live music spaces" },
  { icon: UtensilsCrossed, label: "Dining Configurations", desc: "Buffet, seated, or standing cocktail service" },
  { icon: Star, label: "Dance Floor Potential", desc: "Open central area under the stars" },
  { icon: Armchair, label: "Lounge Areas", desc: "Cozy conversation corners with seating" },
];

const amenityCategories = [
  {
    title: "Lighting & Atmosphere",
    items: [
      { icon: Sparkles, label: "Ambient String Lights" },
      { icon: Lightbulb, label: "Spotlight Options" },
      { icon: Sunset, label: "Natural Lighting" },
    ],
  },
  {
    title: "Furniture & Setup",
    items: [
      { icon: Armchair, label: "Basic Seating Available" },
      { icon: Cloud, label: "Canopy/Shade Options" },
      { icon: Gift, label: "Customizable Décor Hooks" },
    ],
  },
  {
    title: "Utilities & Conveniences",
    items: [
      { icon: Zap, label: "Multiple Power Points" },
      { icon: Droplets, label: "Water Access" },
      { icon: Users, label: "Restroom Access" },
      { icon: Wifi, label: "High-Speed WiFi" },
    ],
  },
  {
    title: "Entertainment Ready",
    items: [
      { icon: Music, label: "Sound System Compatible" },
      { icon: Gamepad2, label: "Pool Table" },
      { icon: Gamepad2, label: "Foosball Table" },
      { icon: Mic, label: "Microphone Setup Options" },
      { icon: Camera, label: "Instagram-Worthy Backdrops" },
    ],
  },
  {
    title: "Catering & Food Service",
    items: [
      { icon: Flame, label: "BBQ Grill Setup Available" },
      { icon: UtensilsCrossed, label: "Buffet Table Space" },
      { icon: IceCreamCone, label: "Beverage Service Areas" },
      { icon: Flame, label: "Safe Cooking Zones" },
    ],
  },
  {
    title: "Comfort & Safety",
    items: [
      { icon: Thermometer, label: "Outdoor Comfort" },
      { icon: Shield, label: "Safety Features" },
      { icon: Car, label: "Parking Access" },
      { icon: Lock, label: "Secure & Private" },
    ],
  },
  {
    title: "Special Event Support",
    items: [
      { icon: Gift, label: "Cake/Gift Table Areas" },
      { icon: Theater, label: "Performance Spaces" },
      { icon: ClipboardList, label: "Event Planning Assistance" },
    ],
  },
];

const galleryImages = [
  { src: heroImage, alt: "The Terrace Canvas Main View", title: "Rooftop Terrace" },
  { src: nightImage, alt: "Movie screening under the stars", title: "Movie Night" },
  { src: bbqImage, alt: "Yoga and wellness section", title: "Yoga & Wellness" },
  { src: diningImage, alt: "Happy moments and celebrations", title: "Happy Hour" },
  { src: loungeImage, alt: "Classy lounge and seating", title: "Lounge Area" },
  { src: cookingImage, alt: "Outdoor cooking and preparation", title: "Cooking Zone" },
];

const eventTypes = [
  "Birthdays", "Anniversaries", "Engagement Parties", "Baby Showers",
  "Corporate Offsites", "Team Celebrations", "Farewell Parties",
  "Reunion Dinners", "Festival Gatherings", "Cocktail Evenings",
];

const RooftopTerrace = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar propertyPage="rooftop" />
      <ThemeToggle />
      <WhatsAppButton />

      {/* Hero — Full-bleed cinematic with overlay text */}
      <section id="overview" className="relative h-screen w-full overflow-hidden">
        <img src={heroImage} alt="The Terrace Canvas Party Hall" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="inline-block px-4 py-1.5 bg-gold/20 border border-gold/40 rounded-full text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-6 animate-fade-in">
            Exclusive Event Venue
          </span>
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4 animate-fade-up leading-tight">
            Elevate Your<br />Celebration
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-4 font-light animate-fade-in">
            Exclusive Open-Air Venue with Panoramic City Views
          </p>
          <p className="text-white/50 text-sm mb-8 animate-fade-in">
            Whitefield's Premier Rooftop Destination • 20–50 Guests
          </p>
          <div className="flex gap-4 animate-fade-in">
            <Button
              size="lg"
              className="bg-gold text-background hover:bg-gold/90 font-medium text-base px-8"
              onClick={() => {
                const phone = "+919390631008"; // use country code, no +, no spaces
                const message = encodeURIComponent(
                  "Hi, I want to know more about Terrace Canvas."
                );
                window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
              }}
            >
              <PartyPopper className="h-4 w-4 mr-2" /> Book This Venue
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="
    border-gray-800 text-gray-800 hover:bg-gray-100
    dark:border-white/30 dark:text-white dark:hover:bg-white/10
    font-medium
  "
              onClick={() => scrollToSection("gallery")}
            >
              Explore
            </Button>

          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-gold rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* About — Immersive text section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Where Celebrations Touch the Sky
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Your private rooftop sanctuary for celebrations that matter. Our exclusive terrace party hall
            offers everything you need for an unforgettable event — stunning panoramic city views,
            complete privacy, spacious open-air layout, and the freedom to party your way.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            From the moment your guests step onto the terrace, they'll be captivated by the sweeping
            vistas and sophisticated ambiance. With the flexibility to customize every detail — from BBQ
            setups to elegant décor, from lounge seating to dance floors — your vision becomes reality.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {eventTypes.map((type) => (
              <span key={type} className="px-3 py-1 bg-gold/10 text-gold text-xs font-medium rounded-full border border-gold/20">
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery — Masonry-ish grid */}
      <section id="gallery" className="py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-2">The Venue</h2>
            <div className="w-20 h-1 bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-xl cursor-pointer group ${i === 0 ? "col-span-2 row-span-2" : ""}`}
                onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${i === 0 ? "h-full min-h-[300px] lg:min-h-[500px]" : "h-48 lg:h-56"}`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                  <span className="text-white font-medium text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center" onClick={() => setLightboxOpen(false)}>
          <button className="absolute top-6 right-6 text-white/70 hover:text-white" onClick={() => setLightboxOpen(false)}>
            <X className="h-8 w-8" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length); }}
          >
            <ChevronRight className="h-8 w-8 rotate-180" />
          </button>
          <img
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev + 1) % galleryImages.length); }}
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <div className="absolute bottom-6 text-white/60 text-sm">
            {lightboxIndex + 1} / {galleryImages.length} — {galleryImages[lightboxIndex].title}
          </div>
        </div>
      )}

      {/* Primary Features — Large icon cards */}
      <section id="features" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Why Choose Our Rooftop
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every detail designed for unforgettable celebrations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {primaryFeatures.map((f, i) => (
              <div
                key={i}
                className="group p-5 rounded-2xl bg-card border border-border hover:border-gold/50 hover:shadow-gold transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                  <f.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-playfair text-sm font-bold text-foreground mb-1">{f.label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Specifications */}
      <section id="spaces" className="py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-2">
                Space That Adapts to Your Vision
              </h2>
              <div className="w-20 h-1 bg-gold mb-8" />
              <div className="space-y-4">
                {spaceSpecs.map((s, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <s.icon className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">{s.label}</h4>
                      <p className="text-xs text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-elegant group">
              <img src={nightImage} alt="Movie Screening" className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-playfair text-xl font-bold">Cinematic Experiences</p>
                <p className="text-white/70 text-sm">under the open sky</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities — Categorized grid */}
      <section id="amenities" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Everything You Need
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Fully equipped for any celebration style
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenityCategories.map((cat, ci) => (
              <div key={ci} className="space-y-3">
                <h3 className="font-playfair text-lg font-bold text-foreground border-b border-border pb-2">
                  {cat.title}
                </h3>
                {cat.items.map((item, ii) => (
                  <div key={ii} className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                    <item.icon className="h-4 w-4 text-gold flex-shrink-0" />
                    <span className="text-sm text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types visual strip */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: diningImage, title: "Happy Gatherings", desc: "Celebrate life's best moments in our vibrant terrace setting" },
              { img: bbqImage, title: "Yoga & Wellness", desc: "Start your morning with fresh air and mindful sessions" },
              { img: cookingImage, title: "Authentic Cooking", desc: "Showcase your culinary skills with our outdoor kitchen setup" },
            ].map((card, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl h-96 cursor-pointer">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-playfair text-xl font-bold text-white mb-1">{card.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Host info */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl border border-border p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
              <Users className="h-10 w-10 text-gold" />
            </div>
            <div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-1">Your Host</h3>
              <p className="text-foreground font-medium">Sunil Reddy <span className="text-muted-foreground font-normal">• Co-host: LookAround</span></p>
              <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                <p>⭐ 4.84/5 rating • 50+ reviews</p>
                <p>💬 100% response rate • Within 1 hour</p>
                <p>🏠 2+ years hosting experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Nearby */}
      <PropertyMap />

      {/* Contact / Booking CTA */}
      <section id="contact" className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary" />
        <div className="absolute inset-0 opacity-10">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <PartyPopper className="h-12 w-12 text-gold mx-auto mb-4" />
          <h2 className="font-playfair text-3xl lg:text-5xl font-bold text-white mb-4">
            Ready to Elevate Your Celebration?
          </h2>
          <p className="text-white/80 mb-10 max-w-xl mx-auto text-lg">
            Book the The Terrace Canvas and create memories against the backdrop of Bangalore's skyline.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <a href="tel:+919390631008" className="flex items-center gap-2 text-white hover:text-gold transition-colors">
              <Phone className="h-5 w-5" /> <span>+91 9390631008</span>
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <a href="tel:+919036016885" className="flex items-center gap-2 text-white hover:text-gold transition-colors">
              <Phone className="h-5 w-5" /> <span>+91 9036016885</span>
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <a href="tel:+919060337795" className="flex items-center gap-2 text-white hover:text-gold transition-colors">
              <Phone className="h-5 w-5" /> <span>+91 90603 37795</span>
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <a href="mailto:sukis.whitefield@gmail.com" className="flex items-center gap-2 text-white hover:text-gold transition-colors">
              <Mail className="h-5 w-5" /> <span>sukis.whitefield@gmail.com</span>
            </a>
          </div>
          <Button
            size="lg"
            className="bg-gold text-background hover:bg-gold/90 font-medium text-lg px-12 py-6"
            onClick={() => {
              const phone = "919390631008";
              const message = encodeURIComponent(
                "Hi, I want to know more about Terrace Canvas."
              );
              window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
            }}
          >
            Book on WhatsApp
          </Button>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RooftopTerrace;
