import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ZoomIn } from "lucide-react";

interface ImageGalleryProps {
  images: Array<{ src: string; alt: string; title?: string }>;
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <section id="gallery" className="py-20 lg:py-32 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Photo Gallery
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground">
              Explore every corner of your luxury escape
            </p>
          </div>

          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div
                      className="relative group cursor-pointer overflow-hidden rounded-lg shadow-elegant aspect-[4/3]"
                      onClick={() => setSelectedIndex(index)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <ZoomIn className="w-12 h-12 text-white" />
                      </div>
                      {image.title && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <p className="text-white font-medium">{image.title}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95">
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 z-50 text-white hover:text-gold transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          {selectedIndex !== null && (
            <div className="w-full h-full flex items-center justify-center p-4 overflow-hidden">
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-elegant transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          )}

        </DialogContent>
      </Dialog>
    </>
  );
}
