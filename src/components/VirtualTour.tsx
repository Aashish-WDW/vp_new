import { useState } from "react";

export function VirtualTour() {
  const tourUrl = "https://realsee.ai/DMLL2aad?shareCode=0y17rXZQ&entry=share";

  return (
    <section id="virtual-tour" className="py-20 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Virtual 360° Tour
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">
            Step inside and explore every detail from anywhere
          </p>
        </div>

        {/* Tour Embed */}
        <div className="relative w-full overflow-hidden rounded-lg shadow-elegant bg-secondary/20">
          {/* Taller responsive heights */}
          <div className="w-full relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]">
            {tourUrl ? (
              <iframe
                src={tourUrl}
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
                allow="xr-spatial-tracking"
                title="Virtual 360° Tour"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-gold/20 backdrop-blur-sm">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                    360° Virtual Tour
                  </h3>
                  <p className="text-muted-foreground">
                    Experience the property in immersive detail
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
