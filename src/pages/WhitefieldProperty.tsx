import { useEffect, useState, lazy, Suspense } from "react";
import { Star, Users, BedDouble, Bath, MapPin, Wifi, Tv, Car, Trees, ChevronDown, ChevronRight, Phone, Mail, Clock, Shield, Dog, Lock, Sparkles, WashingMachine, Utensils, Building, X, Dumbbell, Gamepad2, ShieldCheck, PartyPopper, ChefHat, BookOpen } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import classImage from "@/assets/QR.jpeg";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

import livingImage from "@/assets/LivingRoom.png";
import exteriorImage from "@/assets/hero-exterior.jpg";
const heroImage = livingImage;
import bedroomImage from "@/assets/Bedroom-sukis.png";
import bedroomImage1 from "@/assets/sukis/bedroom/Bedroom-1(2).png";
import bedroomImage2 from "@/assets/sukis/bedroom/Bedroom-2(2).png";
import bedroomImage3 from "@/assets/sukis/bedroom/Bedroom-2(4).png";
import bedroomImage4 from "@/assets/sukis/bedroom/Bedroom-3.png";
import bedroomImage5 from "@/assets/sukis/bedroom/Master Bedroom-1(2).png";
import bedroomImage6 from "@/assets/sukis/bedroom/Master Bedroom-1(4).png";
import bedroomImage7 from "@/assets/sukis/bedroom/Master Bedroom-1(5).png";
import bedroomImage8 from "@/assets/sukis/bedroom/Master Bedroom-1.png";

import commonArea1 from "@/assets/Common Area-1.png";
import whitefieldLiving from "@/assets/whitefield-living.jpg";
import commonArea from "@/assets/Living Room-1.png";

import diningImage from "@/assets/Dining-sukis.png";
import kitchen2Image from "@/assets/Kitchen-2.png";
import kitchen3Image from "@/assets/sukis/Kitchen.png";
import kitchen4Image from "@/assets/sukis/dining/Dining2.png";
import kitchen5Image from "@/assets/sukis/dining/Dining3.png";

import gardenImage from "@/assets/Balconypatio.jpg";
import balconyImage from "@/assets/Balcony.jpg";
import whitefieldGarden from "@/assets/whitefield-garden.jpg";

import bathroomImage from "@/assets/Master-sukis.png";

import gymImage from "@/assets/gym_2.jpg";
import gym1Image from "@/assets/gym_1.jpg";
import gym2Image from "@/assets/sukis/gym/2.jpg";
import gym3Image from "@/assets/sukis/gym/4.jpg";
import gym4Image from "@/assets/sukis/gym/6.jpg";

import poolImage from "@/assets/pool.jpg";
import pool2Image from "@/assets/sukis/pool/1.jpg";
import pool3Image from "@/assets/sukis/pool/2.jpg";
import pool4Image from "@/assets/sukis/pool/3.jpg";


import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const PropertyMap = lazy(() => import("@/components/PropertyMap").then(m => ({ default: m.PropertyMap })));
const VirtualTour = lazy(() => import("@/components/VirtualTour").then(m => ({ default: m.VirtualTour })));

const amenities = [
  { icon: BedDouble, label: "12 King-Size Bedrooms" },
  { icon: Bath, label: "12 Full Bathrooms" },
  { icon: Tv, label: "Smart TV" },
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: WashingMachine, label: "Washing Machine" },
  { icon: Car, label: "Free Parking" },
  { icon: Building, label: "Elevator Access" },
  { icon: Sparkles, label: "Daily Housekeeping" },
  { icon: Lock, label: "Smart Lock Self Check-in" },
  { icon: Dog, label: "Pet-Friendly" },
  { icon: Utensils, label: "Kitchen" },
  { icon: Dumbbell, label: "Gym Access" },
  { icon: Gamepad2, label: "Pool Table" },
  { icon: Gamepad2, label: "Foosball Table" },
  { icon: ChefHat, label: "Chef Services" },
  { icon: ShieldCheck, label: "24/7 CCTV Surveillance" },
  { icon: PartyPopper, label: "Terrace Space - Party - Conference Rooms" },
];

const spaces = [
  {
    img: bedroomImage,
    title: "King-Size Bedrooms",
    desc: "4 elegantly appointed bedrooms, each featuring king-size beds and private balconies with serene views.",
    images: [bedroomImage, bedroomImage1, bedroomImage2, bedroomImage3, bedroomImage4, bedroomImage5, bedroomImage6, bedroomImage7, bedroomImage8]
  },
  {
    img: livingImage,
    title: "Living Room",
    desc: "Spacious shared living area with comfortable sofas and a smart TV — perfect for unwinding.",
    images: [livingImage, commonArea1, commonArea]
  },
  {
    img: diningImage,
    title: "Dining & Kitchen",
    desc: "A modern dining area alongside a fully equipped kitchen with microwave, toaster, and refrigerator.",
    images: [diningImage, kitchen2Image, kitchen3Image, kitchen4Image, kitchen5Image]
  },
  {
    img: gardenImage,
    title: "Patio",
    desc: "A lush private patio space for relaxation, morning coffee, or evening conversations.",
    images: [gardenImage, balconyImage]
  },
  {
    img: gymImage,
    title: "Fitness Center",
    desc: "Access to our modern, fully-equipped gym to help you stay active during your stay.",
    images: [gymImage, gym1Image, gym2Image, gym3Image, gym4Image]
  },
  {
    img: poolImage,
    title: "Recreation Hub",
    desc: "Enjoy a game of pool or foosball in our sophisticated social and gaming area.",
    images: [poolImage, pool2Image, pool3Image, pool4Image]
  },
];

const galleryImages = [
  { src: exteriorImage, alt: "Sukis Suites Whitefield Exterior View", title: "Exterior View" },
  { src: bedroomImage, alt: "Luxury bedroom in Sukis Suites", title: "Bedroom" },
  { src: livingImage, alt: "Spacious and modern living area", title: "Living Room" },
  { src: diningImage, alt: "Modern kitchen and dining space", title: "Dining & Kitchen" },
  { src: gardenImage, alt: "Private patio for relaxation", title: "Patio" },
  { src: bathroomImage, alt: "Master bathroom with premium fittings", title: "Master Bathroom" },
  { src: gymImage, alt: "Modern fitness center facilities", title: "Fitness Center" },
  { src: poolImage, alt: "Sophisticated recreation and pool area", title: "Recreation Hub" },
];

const WhitefieldProperty = () => {
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
      <Navbar propertyPage="whitefield" />
      <ThemeToggle />
      <WhatsAppButton />

      {/* Hero — Full-bleed cinematic with overlay text */}
      <section id="overview" className="relative h-screen w-full overflow-hidden">
        <img src={heroImage} alt="Sukis Suites Whitefield" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="inline-block px-4 py-1.5 bg-gold/20 border border-gold/40 rounded-full text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-6 animate-fade-in">
            Serviced Apartment
          </span>
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4 animate-fade-up leading-tight">
            Sukis Suites<br />Whitefield
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-8 font-light animate-fade-in">
            A premium serviced apartment in Bangalore's thriving tech hub
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10 animate-fade-in">
            {[
              { icon: Users, text: "2 - 30", sub: "guests" },
              { icon: BedDouble, text: "12", sub: "bedrooms" },
              { icon: Bath, text: "12", sub: "bathrooms" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10 dark:border-white/5">
                <stat.icon className="h-4 w-4 text-gold" />
                <span className="text-white font-semibold text-sm">{stat.text}</span>
                <span className="text-white/70 text-xs">{stat.sub}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4 animate-fade-in">
            <Button
              size="lg"
              className="bg-gold text-background hover:bg-gold/90 font-medium text-base px-8"
              onClick={() => scrollToSection("contact")}
            >
              Book Your Stay
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
              View Gallery
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

      {/* Quick Stats Bar */}
      <div className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin className="h-4 w-4 text-gold" />
            <span>Whitefield, Bangalore • 50 min from airport</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Clock className="h-4 w-4 text-gold" />
            <span>Check-in: 1:00 PM • Check-out: 11:00 AM</span>
          </div>
        </div>
      </div>

      {/* About */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-2">About This Property</h2>
              <div className="w-20 h-1 bg-gold mb-8"></div>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Sukis Suites Whitefield is a premium serviced apartment that perfectly blends the warmth of home with professional hospitality. This is a family-first sanctuary in Bangalore's bustling tech hub.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The property can be booked as individual rooms or the entire apartment, offering flexibility for different group sizes. Each bedroom features king-size beds and private balconies. Ideal for families, groups, corporate teams, workcations, and extended stays.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Families", "Corporate Teams", "Workcations", "Extended Stays", "Groups"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gold/10 text-gold text-xs font-medium rounded-full border border-gold/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-secondary/50 rounded-xl p-6 border border-border">
                <h3 className="font-playfair text-xl font-bold text-foreground mb-4">Your Host</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Sunil Reddy</p>
                    <p className="text-xs text-muted-foreground">Co-host: LookAround</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>⭐ 4.84/5 rating • 50+ reviews</p>
                  <p>💬 100% response rate • Within 1 hour</p>
                  <p>🏠 2+ years hosting experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour */}
      <Suspense fallback={<div className="h-[400px] flex items-center justify-center bg-secondary/10">Loading tour...</div>}>
        <VirtualTour url="https://realsee.ai/LNwwVK4W?theme=minimalist&unbranded=1" />
      </Suspense>

      {/* Gallery — Bento grid layout */}
      <section id="gallery" className="py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-2">Photo Gallery</h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-xl cursor-pointer group h-64 lg:h-72 ${i === 0 ? "md:col-span-2" : ""}`}
                onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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

      {/* Spaces — Horizontal scroll cards */}
      <section id="spaces" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-2">Explore the Spaces</h2>
            <div className="w-20 h-1 bg-gold"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spaces.map((space, i) => (
              <div key={i} className="group flex flex-col">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4 cursor-pointer">
                      <img
                        src={space.img}
                        alt={space.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white font-medium px-4 py-2 border border-white rounded-full backdrop-blur-sm">View Details</span>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 bg-transparent border-none overflow-hidden">
                    <Carousel className="w-full" opts={{ loop: true }}>
                      <CarouselContent>
                        {space.images.map((image, idx) => (
                          <CarouselItem key={idx}>
                            <div className="relative aspect-video lg:aspect-[16/9] overflow-hidden rounded-xl">
                              <img src={image} alt={`${space.title} - ${idx + 1}`} className="w-full h-full object-cover" />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div className="hidden md:block">
                        <CarouselPrevious className="left-4 bg-white/10 hover:bg-white/20 border-white/20 text-white" />
                        <CarouselNext className="right-4 bg-white/10 hover:bg-white/20 border-white/20 text-white" />
                      </div>
                    </Carousel>
                    <div className="p-6 bg-background/95 backdrop-blur-md">
                      <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">{space.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{space.desc}</p>
                    </div>
                  </DialogContent>
                </Dialog>
                <div className="flex-1">
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-2">{space.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{space.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities — Inline tag style */}
      <section id="amenities" className="py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-2">What's Included</h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {amenities.map((a, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-gold/50 hover:shadow-lg transition-all duration-300 group">
                <a.icon className="h-5 w-5 text-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-foreground font-medium">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies — Side-by-side cards instead of accordion */}
      <section id="policies" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-2">Property Details</h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>
          <Accordion type="multiple" defaultValue={["checkin"]} className="space-y-3">
            <AccordionItem value="checkin" className="bg-card rounded-xl border border-border px-5">
              <AccordionTrigger className="text-foreground hover:text-gold hover:no-underline">
                <span className="flex items-center gap-3"><Clock className="h-5 w-5 text-gold" /> Check-in / Check-out</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                <p>Check-in: After 1:00 PM</p>
                <p>Check-out: Before 11:00 AM</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="rooms" className="bg-card rounded-xl border border-border px-5">
              <AccordionTrigger className="text-foreground hover:text-gold hover:no-underline">
                <span className="flex items-center gap-3"><BedDouble className="h-5 w-5 text-gold" /> Room Assignment</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                <p>Rooms assigned first-come, first-served (cannot be pre-selected).</p>
                <p className="mt-2">Shared spaces: living room, dining area, garden. Individual bedrooms/private areas of other guests are not accessible.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="pets" className="bg-card rounded-xl border border-border px-5">
              <AccordionTrigger className="text-foreground hover:text-gold hover:no-underline">
                <span className="flex items-center gap-3"><Dog className="h-5 w-5 text-gold" /> Pets & Children</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                <p>🐾 Pet-friendly property</p>
                <p>👶 Children of all ages are welcome</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="security" className="bg-card rounded-xl border border-border px-5">
              <AccordionTrigger className="text-foreground hover:text-gold hover:no-underline">
                <span className="flex items-center gap-3"><Shield className="h-5 w-5 text-gold" /> Safety & Security</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                <p>Exterior security cameras for guest safety.</p>
                <p className="mt-2">Security deposit payable in cash at the villa.</p>
                <p className="mt-2">Caretaker available for assistance. Smart lock for self check-in.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Location & Nearby */}
      <Suspense fallback={<div className="h-[400px] flex items-center justify-center bg-secondary/30">Loading map...</div>}>
        <PropertyMap />
      </Suspense>

      {/* Contact / Booking CTA — Full-width gradient banner */}
      <section id="contact" className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary" />
        <div className="absolute inset-0 opacity-10">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl lg:text-5xl font-bold text-white mb-4">Ready to Experience Sukis Suites?</h2>
          <p className="text-white/80 mb-10 max-w-xl mx-auto text-lg">
            Book your stay and discover the perfect blend of home comfort and professional hospitality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <a href="tel:+919390631008" className="flex items-center gap-2 text-white hover:text-gold transition-colors">
              <Phone className="h-5 w-5" />
              <span>+91 9390631008</span>
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <a href="tel:+919036016885" className="flex items-center gap-2 text-white hover:text-gold transition-colors">
              <Phone className="h-5 w-5" />
              <span>+91 9036016885</span>
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <a href="tel:+919060337795" className="flex items-center gap-2 text-white hover:text-gold transition-colors">
              <Phone className="h-5 w-5" />
              <span>+91 90603 37795</span>
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <a href="mailto:sukis.whitefield@gmail.com" className="flex items-center gap-2 text-white hover:text-gold transition-colors">
              <Mail className="h-5 w-5" />
              <span>sukis.whitefield@gmail.com</span>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-gold text-background hover:bg-gold/90 font-medium text-lg px-12 py-6 w-full sm:w-auto"
              onClick={() => window.open('https://www.airbnb.co.in/', '_blank')}
            >
              Book on Airbnb
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-gold text-background hover:bg-gold/90 font-medium text-lg px-12 py-6 w-full sm:w-auto"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Book Now
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-sm p-0 overflow-hidden bg-transparent border-none">
                <img src={classImage} alt="Booking Information" className="w-full h-auto rounded-lg shadow-2xl" />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhitefieldProperty;
