import { useEffect, lazy, Suspense } from "react";
import { Hero } from "@/components/Hero";
import { PropertySection } from "@/components/PropertySection";
import { Amenities } from "@/components/Amenities";
import { Testimonials } from "@/components/Testimonials";
import { LocationHighlights } from "@/components/LocationHighlights";
import { BookingCTA } from "@/components/BookingCTA";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FloatingCTA } from "@/components/FloatingCTA";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Navbar } from "@/components/Navbar";
import { ImageGallery } from "@/components/ImageGallery";
import { AudioPlayer } from "@/components/AudioPlayer";
const VirtualTour = lazy(() => import("@/components/VirtualTour").then(m => ({ default: m.VirtualTour })));
const InstagramFeed = lazy(() => import("@/components/InstagramFeed").then(m => ({ default: m.InstagramFeed })));
const PropertyMap = lazy(() => import("@/components/PropertyMap").then(m => ({ default: m.PropertyMap })));

import livingRoomImage from "@/assets/Living.jpg";
import masterBedroomImage from "@/assets/Master-Bedroom-2.jpg";
import guestBedroomImage from "@/assets/Master-Bedroom-1.jpg";
import terraceImage from "@/assets/Balcony.jpg";
import bathroomImage from "@/assets/Master-Washroom.jpg";
import diningArea from "@/assets/Dining.jpg";
import gymImage from "@/assets/gym_1.jpg";
import poolImage from "@/assets/pool.jpg";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const galleryImages = [
    { src: livingRoomImage, alt: "Elegant living room", title: "Living Room" },
    { src: masterBedroomImage, alt: "Master bedroom", title: "Maharaja Suite" },
    { src: diningArea, alt: "Dining area", title: "Dining" },
    { src: guestBedroomImage, alt: "Guest bedroom", title: "Guest Bedroom" },
    { src: terraceImage, alt: "Private terrace", title: "Patio" },
    { src: bathroomImage, alt: "Luxury bathroom", title: "Spa Bathroom" },
    { src: gymImage, alt: "Modern fitness center", title: "Fitness Center" },
    { src: poolImage, alt: "Elite pool table lounge", title: "Game Lounge" },
  ];

  return (
    <div id="home" className="min-h-screen bg-background font-inter">
      <Navbar propertyPage="vistara" />
      <ThemeToggle />
      <FloatingCTA />
      <WhatsAppButton />
      <AudioPlayer />

      <Hero />

      <ImageGallery images={galleryImages} />

      <Suspense fallback={<div className="h-[400px] flex items-center justify-center bg-secondary/10">Loading tour...</div>}>
        <VirtualTour />
      </Suspense>

      <div id="explore">
        <PropertySection
          id="living-spaces"
          title="The Living Room"
          subtitle="Warm, Modern, and Spacious"
          imageSrc={livingRoomImage}
          imageAlt="Elegant living room with contemporary furniture and warm lighting"
        >
          <p className="text-muted-foreground leading-relaxed">
            Step into a sanctuary where contemporary design meets timeless comfort.
            Our living space features floor-to-ceiling windows, premium furnishings,
            and a maroon accent wall that adds depth and sophistication.
          </p>
        </PropertySection>

        <PropertySection
          title="The Maharaja Suite"
          subtitle="Elegant and Serene"
          imageSrc={masterBedroomImage}
          imageAlt="Serene master bedroom with plush bedding and city views"
          reverse
        >
          <p className="text-muted-foreground leading-relaxed">
            Your private retreat awaits. The master suite offers a king-sized bed
            dressed in premium linens, ambient lighting that sets the perfect mood,
            and panoramic city views that greet you each morning.
          </p>
        </PropertySection>

        <PropertySection
          title="The Guest Bedroom"
          subtitle="Comfort for Your Loved Ones"
          imageSrc={guestBedroomImage}
          imageAlt="Elegant guest bedroom with contemporary design"
        >
          <p className="text-muted-foreground leading-relaxed">
            A second sanctuary of equal elegance. Thoughtfully designed with a
            comfortable queen bed, tasteful artwork, and warm lighting to ensure
            your guests feel truly welcomed.
          </p>
        </PropertySection>

        <PropertySection
          title="The Patio"
          subtitle="Your Private Escape"
          imageSrc={terraceImage}
          imageAlt="Private The Terrace Canvas with panoramic city views at sunset"
          reverse
        >
          <p className="text-muted-foreground leading-relaxed">
            Ascend to your private rooftop oasis. Watch the sun paint the Bangalore
            skyline in gold, relax on premium outdoor furniture, and enjoy the gentle
            evening breeze in this exclusive outdoor retreat.
          </p>
        </PropertySection>

        <PropertySection
          title="Spa-Inspired Bathrooms"
          subtitle="Luxury in Every Detail"
          imageSrc={bathroomImage}
          imageAlt="Modern luxury bathroom with marble finishes and gold fixtures"
        >
          <p className="text-muted-foreground leading-relaxed">
            Transform your daily routine into a spa ritual. Marble finishes,
            gold fixtures, rain showers, and a freestanding soaking tub create
            an atmosphere of pure indulgence.
          </p>
        </PropertySection>

        <PropertySection
          title="Fitness Center"
          subtitle="Stay Active and Energized"
          imageSrc={gymImage}
          imageAlt="Modern gym with high-end equipment"
          reverse
        >
          <p className="text-muted-foreground leading-relaxed">
            Maintain your wellness routine in our fully equipped fitness center.
            Featuring modern cardio machines and strength training equipment
            designed for all fitness levels.
          </p>
        </PropertySection>

        <PropertySection
          title="Game Lounge"
          subtitle="Fun and Recreation"
          imageSrc={poolImage}
          imageAlt="Pool table in a stylish lounge setting"
        >
          <p className="text-muted-foreground leading-relaxed">
            Unwind and challenge your friends in our sophisticated game lounge.
            Featuring a premium pool table and comfortable seating for
            the ultimate relaxation experience.
          </p>
        </PropertySection>
      </div>

      <Amenities />

      {/* <FloorPlan /> */}

      <Suspense fallback={<div className="h-[400px] flex items-center justify-center bg-secondary/10">Loading map...</div>}>
        <PropertyMap />
      </Suspense>

      <Testimonials />

      <Suspense fallback={<div className="h-[400px] flex items-center justify-center bg-secondary/10">Loading feed...</div>}>
        <InstagramFeed />
      </Suspense>

      <BookingCTA id="contact" />

      <Footer />
    </div>
  );
};

export default Index;
