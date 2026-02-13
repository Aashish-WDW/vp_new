import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I'd like to know more about Vistara Presidential!");
    window.open(`https://wa.me/919390631008?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-8 left-8 z-40 animate-float">
      <Button
        size="lg"
        className="bg-[#25D366] text-white hover:bg-[#20BA5A] shadow-elegant rounded-full px-6 group"
        onClick={handleWhatsAppClick}
      >
        <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
        <span className="hidden sm:inline ml-2">WhatsApp</span>
      </Button>
    </div>
  );
}
