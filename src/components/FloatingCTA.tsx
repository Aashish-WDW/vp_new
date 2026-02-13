import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-8 right-8 z-40 animate-float">
      <Button
        size="lg"
        className="bg-gold text-background hover:bg-gold/90 shadow-gold animate-pulse-glow font-inter font-medium rounded-full px-6"
        onClick={() => window.open('https://www.airbnb.co.in/rooms/1537720966525754371?source_impression_id=p3_1761155514_P3JyJqPkoHSGJzzO', '_blank')}
      >
        <Calendar className="mr-2 h-5 w-5" />
        Book Now
      </Button>
    </div>
  );
}
