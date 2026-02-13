import { MapPin, ShoppingBag, Coffee, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: ShoppingBag,
    name: "Phoenix Marketcity",
    distance: "5 min drive",
    description: "Premier shopping destination",
  },
  {
    icon: Coffee,
    name: "Premium Cafés",
    distance: "Walking distance",
    description: "Artisanal coffee & dining",
  },
  {
    icon: Briefcase,
    name: "ITPL Tech Park",
    distance: "10 min drive",
    description: "Major IT hub",
  },
  {
    icon: MapPin,
    name: "Whitefield",
    distance: "City center",
    description: "Serene & connected",
  },
];

export function LocationHighlights() {
  return (
    <section className="py-20 lg:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Around Vistara Presidential
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Perfectly positioned in Whitefield, where tranquility meets convenience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg p-6 border border-border hover:border-gold transition-all duration-300 hover:shadow-gold animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <highlight.icon className="h-6 w-6 text-gold" />
                </div>
              </div>
              
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                {highlight.name}
              </h3>
              
              <p className="text-sm text-gold font-medium mb-2">
                {highlight.distance}
              </p>
              
              <p className="text-sm text-muted-foreground">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
