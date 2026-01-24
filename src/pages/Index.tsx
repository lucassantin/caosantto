import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { GalleryStrip } from "@/components/GalleryStrip";
import { VideoSection } from "@/components/VideoSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <AboutSection />
      <ServicesSection />
      <GalleryStrip />
      <VideoSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
