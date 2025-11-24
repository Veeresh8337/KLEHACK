import { Trophy, Users, Sparkles, Rocket } from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Premium Prizes",
    description: "Win cash prizes, tech gadgets, and exclusive mentorship opportunities",
  },
  {
    icon: Users,
    title: "Expert Mentors",
    description: "Get guidance from industry leaders and experienced developers",
  },
  {
    icon: Sparkles,
    title: "Cutting-edge Tech",
    description: "Access to latest APIs, cloud credits, and development tools",
  },
  {
    icon: Rocket,
    title: "Fast-track to Success",
    description: "Top teams get fast-tracked to accelerator programs and funding",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display font-black text-5xl md:text-6xl mb-6">
            <span className="text-foreground">Why Join</span>
            {" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              This Hackathon?
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            More than just a competition—it's a launchpad for your ideas
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass rounded-2xl p-8 hover:glass-strong transition-all duration-300 group hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform glow-cyan">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-24 glass-strong rounded-3xl p-12 border border-primary/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-display font-black text-5xl text-primary mb-2">$50K+</div>
              <div className="text-foreground/60 font-medium">Total Prizes</div>
            </div>
            <div>
              <div className="font-display font-black text-5xl text-secondary mb-2">100+</div>
              <div className="text-foreground/60 font-medium">Teams Expected</div>
            </div>
            <div>
              <div className="font-display font-black text-5xl text-accent mb-2">20+</div>
              <div className="text-foreground/60 font-medium">Mentors</div>
            </div>
            <div>
              <div className="font-display font-black text-5xl text-destructive mb-2">48</div>
              <div className="text-foreground/60 font-medium">Hours of Innovation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
