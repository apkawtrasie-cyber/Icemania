import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import ProcessSection from "@/components/sections/ProcessSection";
import AboutSection from "@/components/sections/AboutSection";
import FlavorsSection from "@/components/sections/FlavorsSection";
import ShopSection from "@/components/sections/ShopSection";
import B2BSection from "@/components/sections/B2BSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProcessSection />
        <AboutSection />
        <FlavorsSection />
        <ShopSection />
        <B2BSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
