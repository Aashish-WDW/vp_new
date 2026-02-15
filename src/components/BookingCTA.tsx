import { Button } from "@/components/ui/button";
import { Calendar, Mail, Phone, BookOpen } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import classImage from "@/assets/class.jpg";

interface BookingCTAProps {
  id?: string;
}

export function BookingCTA({ id }: BookingCTAProps) {
  return (
    <section id={id} className="py-20 lg:py-32 px-4 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-playfair text-4xl lg:text-6xl font-bold mb-6 animate-fade-up">
          Experience Luxury Living
        </h2>

        <p className="text-xl lg:text-2xl font-light mb-12 opacity-90 animate-fade-in">
          Book your stay at Vistara Presidential and discover where elegance meets excellence
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up">
          <Button
            size="lg"
            className="bg-gold text-background hover:bg-gold/90 font-inter font-medium text-lg px-8"
            onClick={() => window.open('https://www.airbnb.co.in/rooms/1537720966525754371?source_impression_id=p3_1761155514_P3JyJqPkoHSGJzzO', '_blank')}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book on Airbnb
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-primary hover:bg-white hover:text-primary font-inter font-medium text-lg px-8"
            onClick={() => window.location.href = "mailto:vistara.presidential@gmail.com"}
          >
            <Mail className="mr-2 h-5 w-5" />
            Email Us
          </Button>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-gold text-background hover:bg-gold/90 font-inter font-medium text-lg px-8"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Book Now
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl p-0 overflow-hidden bg-transparent border-none">
              <img src={classImage} alt="Booking Information" className="w-full h-auto rounded-lg shadow-2xl" />
            </DialogContent>
          </Dialog>

        </div>

        <div className="space-y-2 text-center">
          <div className="flex items-center justify-center gap-4 text-white/90">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+919390631008" className="hover:text-gold transition-colors duration-300">
                +91 9390631008
              </a>
            </div>
            <span>|</span>
            <a href="tel:+919036016885" className="hover:text-gold transition-colors duration-300">
              +91 9036016885
            </a>
          </div>
          <div className="text-white/80 text-sm">
            <p>Check-in: 1:00 PM - 12:00 AM | Check-out: 10:00 AM - 11:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
