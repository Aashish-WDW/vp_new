import { useState } from "react";
import { Button } from "@/components/ui/button";

export function FloorPlan() {
  const [activeRoom, setActiveRoom] = useState<string | null>(null);

  const rooms = [
    { id: "living", name: "Living Room", area: "450 sq ft", floor: 1 },
    { id: "master", name: "Master Bedroom", area: "300 sq ft", floor: 2 },
    { id: "guest", name: "Guest Bedroom", area: "250 sq ft", floor: 2 },
    { id: "kitchen", name: "Kitchen", area: "200 sq ft", floor: 1 },
    { id: "bathroom1", name: "Master Bathroom", area: "120 sq ft", floor: 2 },
    { id: "bathroom2", name: "Guest Bathroom", area: "100 sq ft", floor: 2 },
    { id: "terrace", name: "Terrace", area: "500 sq ft", floor: 3 },
    { id: "balcony", name: "Balcony", area: "150 sq ft", floor: 1 },
  ];

  const scrollToSection = (roomId: string) => {
    const sectionMap: Record<string, string> = {
      living: "living-spaces",
      master: "explore",
      guest: "explore",
      terrace: "explore",
    };
    
    const sectionId = sectionMap[roomId];
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-20 lg:py-32 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Interactive Floor Plan
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">
            Explore the layout of your luxury duplex
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Floor Plan Visualization */}
          <div className="relative bg-background rounded-lg shadow-elegant p-8 aspect-square">
            <div className="absolute inset-8 border-2 border-gold/30 rounded-lg">
              {/* Floor 1 */}
              <div className="absolute top-0 left-0 right-0 h-1/2 border-b border-gold/30 p-4">
                <p className="text-xs text-muted-foreground mb-2">Ground Floor</p>
                <div className="grid grid-cols-2 gap-2 h-[calc(100%-2rem)]">
                  <button
                    className={`border-2 rounded transition-all duration-300 ${
                      activeRoom === "living"
                        ? "bg-gold/20 border-gold"
                        : "border-border hover:border-gold/50"
                    }`}
                    onClick={() => setActiveRoom("living")}
                    onDoubleClick={() => scrollToSection("living")}
                  >
                    <span className="text-xs font-medium">Living</span>
                  </button>
                  <button
                    className={`border-2 rounded transition-all duration-300 ${
                      activeRoom === "kitchen"
                        ? "bg-gold/20 border-gold"
                        : "border-border hover:border-gold/50"
                    }`}
                    onClick={() => setActiveRoom("kitchen")}
                  >
                    <span className="text-xs font-medium">Kitchen</span>
                  </button>
                </div>
              </div>
              
              {/* Floor 2 */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 p-4">
                <p className="text-xs text-muted-foreground mb-2">Upper Floor</p>
                <div className="grid grid-cols-2 gap-2 h-[calc(100%-2rem)]">
                  <button
                    className={`border-2 rounded transition-all duration-300 ${
                      activeRoom === "master"
                        ? "bg-gold/20 border-gold"
                        : "border-border hover:border-gold/50"
                    }`}
                    onClick={() => setActiveRoom("master")}
                    onDoubleClick={() => scrollToSection("master")}
                  >
                    <span className="text-xs font-medium">Master</span>
                  </button>
                  <button
                    className={`border-2 rounded transition-all duration-300 ${
                      activeRoom === "guest"
                        ? "bg-gold/20 border-gold"
                        : "border-border hover:border-gold/50"
                    }`}
                    onClick={() => setActiveRoom("guest")}
                    onDoubleClick={() => scrollToSection("guest")}
                  >
                    <span className="text-xs font-medium">Guest</span>
                  </button>
                </div>
              </div>
            </div>
            <p className="absolute bottom-2 right-2 text-xs text-muted-foreground">
              Double-click to view room
            </p>
          </div>

          {/* Room Details */}
          <div className="space-y-4">
            <div className="bg-background rounded-lg shadow-elegant p-6">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Room Details
              </h3>
              {activeRoom ? (
                <div className="space-y-3">
                  {rooms
                    .filter((room) => room.id === activeRoom)
                    .map((room) => (
                      <div key={room.id} className="border-l-4 border-gold pl-4">
                        <h4 className="font-semibold text-foreground text-lg">
                          {room.name}
                        </h4>
                        <p className="text-muted-foreground">Area: {room.area}</p>
                        <p className="text-muted-foreground">Floor: {room.floor}</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2 border-gold text-gold hover:bg-gold hover:text-background"
                          onClick={() => scrollToSection(room.id)}
                        >
                          View Photos
                        </Button>
                      </div>
                    ))}
                </div>
              ) : (
                <p className="text-muted-foreground">
                  Click on a room in the floor plan to view details
                </p>
              )}
            </div>

            <div className="bg-background rounded-lg shadow-elegant p-6">
              <h3 className="font-playfair text-xl font-bold text-foreground mb-3">
                All Rooms
              </h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {rooms.map((room) => (
                  <button
                    key={room.id}
                    className={`w-full text-left p-3 rounded-lg transition-colors duration-300 ${
                      activeRoom === room.id
                        ? "bg-gold/20 border border-gold"
                        : "bg-secondary/30 hover:bg-secondary/50"
                    }`}
                    onClick={() => setActiveRoom(room.id)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{room.name}</span>
                      <span className="text-sm text-muted-foreground">{room.area}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
