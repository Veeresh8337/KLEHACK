import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DomainsSection from "@/components/DomainsSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <DomainsSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
