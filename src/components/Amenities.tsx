import { Wifi, Waves, ChefHat, Tv, Mountain, Trees, WashingMachine, Car, Building, Sparkles, Lock, Dog, Dumbbell, Gamepad2, ShieldCheck, PartyPopper } from "lucide-react";

const amenities = [
  { icon: ChefHat, label: "500 ft² Kitchen" },
  { icon: Mountain, label: "Balcony" },
  { icon: Trees, label: "Garden View" },
  { icon: Tv, label: "Flat-screen TV" },
  { icon: Waves, label: "Terrace" },
  { icon: Wifi, label: "Free WiFi" },
  { icon: WashingMachine, label: "Washing Machine" },
  { icon: Car, label: "Free Parking" },
  { icon: Building, label: "Elevator Access" },
  { icon: Sparkles, label: "Daily Housekeeping" },
  { icon: Lock, label: "Smart Lock Self Check-in" },
  { icon: Dog, label: "Pet-Friendly" },
  { icon: Dumbbell, label: "Gym Access" },
  { icon: Gamepad2, label: "Pool Table" },
  { icon: Gamepad2, label: "Foosball Table" },
  { icon: ChefHat, label: "Chef Services" },
  { icon: ShieldCheck, label: "24/7 CCTV Surveillance" },
  { icon: PartyPopper, label: "Terrace Space - Party - Meeting / Conference Rooms" },
];

export function Amenities() {
  return (
    <section id="amenities" className="py-20 lg:py-32 px-4 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Premium Amenities
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every comfort thoughtfully curated for your exceptional stay
          </p>
          <div className="mt-6 text-muted-foreground">
            <p className="mb-2">Children of all ages are welcome • Pets are not allowed</p>
            <p>Located just 8.6 miles from The Heritage Centre & Aerospace Museum</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-card rounded-lg border border-border hover:border-gold hover:shadow-gold transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                <amenity.icon className="h-8 w-8 text-gold" />
              </div>
              <p className="text-sm font-medium text-center text-foreground">
                {amenity.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
