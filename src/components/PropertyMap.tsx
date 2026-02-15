import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PropertyMap() {
  const address =
    "87/3, Site #10, opposite to SANAATHANA CHAMANTHI, Chaitanya Ananya, Seegehalli, Krishnarajapura, Bengaluru, Karnataka 560067, India";
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.610132327067!2d77.76186068799197!3d13.009558193905988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzM0LjQiTiA3N8KwNDUnNDIuNyJF!5e0!3m2!1sen!2sin!4v${Date.now()}`;

  const nearbyPlaces = [
    { name: "Seegehalli Lake", distance: "~1 km" },
    { name: "Kannamangala Lake", distance: "~4 km" },
    { name: "Phoenix Marketcity Whitefield", distance: "~7 km" },
    { name: "VR Bengaluru", distance: "~7.5 km" },
    { name: "Forum Shantiniketan Mall", distance: "~6.5 km" },
    { name: "Manipal Hospital Whitefield", distance: "~8 km" },
    { name: "Aster Whitefield Hospital", distance: "~8 km" },
    { name: "Vydehi Institute of Medical Sciences", distance: "~9 km" },
    { name: "East Point Hospital", distance: "~9 km" },
    { name: "Sri Sathya Sai Super Speciality Hospital", distance: "~8 km" },
    { name: "Kempegowda International Airport", distance: "~34 km" },
  ];

  return (
    <section id="location" className="py-20 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Location & Nearby
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">
            Perfectly positioned in Bangalore's Whitefield
          </p>
        </div>

        {/* Map + Nearby Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="relative w-full h-full rounded-lg shadow-elegant overflow-hidden">
            <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px]">
              <iframe
                src={mapUrl}
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Property Location Map"
              />
            </div>
            {/* Overlay Info */}
            <div className="absolute top-4 left-4 right-4 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg z-10">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Vistara Presidential</p>
                  <p className="text-xs text-muted-foreground">{address}</p>
                </div>
              </div>
            </div>
          </div>


          {/* Nearby Places */}
          <div className="flex flex-col gap-6">
            {/* Attractions */}
            <div className="bg-background rounded-lg shadow-elegant p-6 flex-1">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Nearby Attractions
              </h3>
              <div className="space-y-3">
                {nearbyPlaces.map((place, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold"></div>
                      <span className="text-foreground">{place.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{place.distance}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Directions */}
            <div className="bg-background rounded-lg shadow-elegant p-6 flex-1">
              <h3 className="font-playfair text-xl font-bold text-foreground mb-4">
                Get Directions
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Located in Whitefield, just 1 km from Seegehalli Lake
                and 7 km from Phoenix Marketcity.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="w-full border-gold text-gold hover:bg-gold hover:text-background"
                onClick={() =>
                  window.open(
                    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
                    "_blank"
                  )
                }
              >
                <Navigation className="mr-2 h-5 w-5" />
                Open in Google Maps
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
