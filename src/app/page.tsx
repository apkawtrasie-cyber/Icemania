import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FlavorsSection from "@/components/sections/FlavorsSection";
import ShopSection from "@/components/sections/ShopSection";
import OrderSection from "@/components/sections/OrderSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FlavorsSection />
        <ShopSection />
        <OrderSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
