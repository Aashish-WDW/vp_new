import logo from "@/assets/logo.png";
import sukisLogo from "@/assets/sukis-suites.png";
import terraceLogo from "@/assets/terrace.png";
import heroExterior from "@/assets/hero-exterior.jpg";
import rooftopHero from "@/assets/rooftop-hero.jpg";
import whitefieldHero from "@/assets/whitefield-hero.jpg";


// Property data with branding and contact details
export const PROPERTIES = [
    {
        name: "Vistara Presidential",
        path: "/Vistara-Presidential",
        subtitle: "Luxury Duplex • Whitefield",
        description: "Where elegance meets excellence in the heart of Whitefield, Bangalore.",
        logo: logo,
        image: heroExterior,
        email: "vistara.presidential@gmail.com",
        phones: ["+91 9390631008", "+91 9036016885", "+91 90603 37795"],
        instagram: "https://www.instagram.com/vistara.presidential/",
        airbnb: "https://www.airbnb.co.in/rooms/1537720966525754371"
    },
    {
        name: "Sukis Suites Whitefield",
        path: "/",
        subtitle: "Serviced Apartment • Whitefield",
        description: "A family-first sanctuary in Bangalore's thriving tech hub. Perfectly blending the warmth of home with professional hospitality.",
        logo: sukisLogo,
        isRectLogo: true,
        image: whitefieldHero,
        hideExtraImage: true,
        email: "sukis.whitefield@gmail.com",
        phones: ["+91 9390631008", "+91 9036016885", "+91 90603 37795"],
        instagram: "https://www.instagram.com/vistara.presidential/",
        airbnb: "https://www.airbnb.co.in/rooms/1537720966525754371"
    },
    {
        name: "The Terrace Canvas",
        path: "/Terrace-Canvas",
        subtitle: "Party Hall • Whitefield",
        description: "Your private rooftop sanctuary for celebrations that matter. Stunning panoramic city views and complete privacy.",
        logo: terraceLogo,
        isRectLogo: true,
        image: rooftopHero,
        hideExtraImage: true,
        email: "sukis.whitefield@gmail.com",
        phones: ["+91 9390631008", "+91 9036016885", "+91 90603 37795"],
        instagram: "https://www.instagram.com/vistara.presidential/",
        airbnb: "https://www.airbnb.co.in/rooms/1537720966525754371"
    },
];
