import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-exterior.jpg";

export function Hero() {
  const scrollToExplore = () => {
    const exploreSection = document.getElementById("explore");
    exploreSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Vistara Presidential Luxury Duplex Exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-up">
          Where Elegance Meets
          <span className="block text-gold mt-2">Excellence</span>
        </h1>

        <p className="text-xl md:text-2xl text-white max-w-2xl mb-12 animate-fade-in font-light">
          An exquisite duplex experience in Bangalore's serene Whitefield
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up">
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToExplore}
            className="border-2 border-gold text-gold hover:bg-gold hover:text-background transition-all duration-300 font-inter font-medium"
          >
            Explore the Duplex
          </Button>

          <Button
            size="lg"
            className="bg-gold text-background hover:bg-gold/90 animate-pulse-glow font-inter font-medium"
            onClick={() => window.open('https://www.airbnb.co.in/rooms/1537720966525754371?source_impression_id=p3_1761155514_P3JyJqPkoHSGJzzO', '_blank')}
          >
            Book Your Stay
          </Button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToExplore}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float cursor-pointer"
          aria-label="Scroll to explore"
        >
          <ChevronDown className="h-8 w-8 text-gold" />
        </button>
      </div>
    </section>
  );
}
