import { useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Absolutely stunning. Every detail exceeded our expectations. The duplex is a true masterpiece.",
    author: "Priya Sharma",
    date: "March 2024",
  },
  {
    id: 2,
    text: "A sanctuary of elegance. The terrace views at sunset were unforgettable. Highly recommend!",
    author: "Arjun Mehta",
    date: "February 2024",
  },
  {
    id: 3,
    text: "Impeccable design and comfort. We felt like royalty throughout our stay. Will definitely return.",
    author: "Kavya Reddy",
    date: "January 2024",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 lg:py-32 px-4 bg-secondary/30" id="testimonials">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-16 animate-fade-up">
          Guest Experiences
        </h2>

        <div className="relative min-h-[300px] flex items-center justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="bg-card rounded-lg shadow-elegant p-8 lg:p-12 border border-gold/20">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl lg:text-2xl font-light italic text-foreground mb-8 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="space-y-1">
                  <p className="font-playfair text-lg font-semibold text-foreground">
                    — {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Stayed in {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gold w-8'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
