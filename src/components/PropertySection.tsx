import { ReactNode } from "react";

interface PropertySectionProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  children?: ReactNode;
  reverse?: boolean;
  id?: string;
}

export function PropertySection({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  children,
  reverse = false,
  id
}: PropertySectionProps) {
  return (
    <section id={id} className="py-20 lg:py-32 px-4 lg:px-8">
      <div className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
        {/* Image */}
        <div className={`${reverse ? 'md:order-2' : ''} animate-fade-in`}>
          <div className="relative overflow-hidden rounded-lg shadow-elegant group">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-[400px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Content */}
        <div className={`${reverse ? 'md:order-1' : ''} space-y-6 animate-fade-up`}>
          <div>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {title}
            </h2>
            <div className="w-24 h-1 bg-gold mb-6"></div>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              {subtitle}
            </p>
          </div>

          {children && (
            <div className="pt-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
