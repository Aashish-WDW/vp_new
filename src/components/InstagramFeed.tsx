import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export function InstagramFeed() {
  // Sample Instagram posts - replace with actual feed integration
  const instagramPosts = [
    { id: 1, image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=400&fit=crop" },
    { id: 2, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=400&fit=crop" },
    { id: 3, image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=400&h=400&fit=crop" },
    { id: 4, image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&h=400&fit=crop" },
    { id: 5, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop" },
    { id: 6, image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=400&h=400&fit=crop" },
  ];

  return (
    <section className="py-20 lg:py-32 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Follow Our Journey
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground mb-6">
            See what our guests are sharing @vistara.presidential
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-gold text-gold hover:bg-gold hover:text-background"
            onClick={() => window.open("https://www.instagram.com/vistara.presidential/", "_blank")}
          >
            <Instagram className="mr-2 h-5 w-5" />
            Follow on Instagram
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-lg shadow-md group"
            >
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
