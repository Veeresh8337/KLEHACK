import DomainCard from "./DomainCard";
import { Coins, BookOpen, Heart, Brain } from "lucide-react";

const DomainsSection = () => {
  return (
    <section id="domains" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display font-black text-5xl md:text-6xl mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Choose Your
            </span>
            {" "}
            <span className="text-foreground">Domain</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Select from four cutting-edge domains and build solutions that matter
          </p>
        </div>

        {/* Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <DomainCard
            title="FinTech"
            description="Revolutionize financial services with blockchain, payments, and digital banking solutions."
            icon={Coins}
            glowColor="gold"
            delay={0}
          />
          <DomainCard
            title="EduTech"
            description="Transform education through AI-powered learning, interactive platforms, and skill development."
            icon={BookOpen}
            glowColor="cyan"
            delay={200}
          />
          <DomainCard
            title="HealthTech"
            description="Build healthcare innovations from telemedicine to diagnostic tools and wellness apps."
            icon={Heart}
            glowColor="red"
            delay={400}
          />
          <DomainCard
            title="AI For Social Good"
            description="Leverage artificial intelligence to solve pressing social and environmental challenges."
            icon={Brain}
            glowColor="purple"
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
