import { Trophy, Users, Sparkles, Rocket } from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Semester-wise Trophies",
    description: "3 grand trophies awarded semester-wise for the most innovative teams.",
  },
  {
    icon: Users,
    title: "Dedicated Mentors",
    description: "Mentored by Veeresh, Sujal, Praveen and Darshna throughout the 24-hour sprint.",
  },
  {
    icon: Sparkles,
    title: "24 Hours of Innovation",
    description: "A full-day coding marathon to turn your ideas into reality.",
  },
  {
    icon: Rocket,
    title: "25+ Teams Competing",
    description: "Collaborate and compete with 25+ talented teams across all semesters.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-28 md:py-32 relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.06),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(248,250,252,0.03),_transparent_55%)]" />
      <div className="container mx-auto px-6 relative z-10">
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
                className="glass rounded-2xl p-8 hover:glass-strong transition-all duration-300 group hover:scale-105 animate-fade-in border border-white/5 bg-slate-900/60 backdrop-blur-xl"
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
        <div className="mt-24 glass-strong rounded-3xl p-12 border border-primary/20 bg-slate-950/70 backdrop-blur-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-display font-black text-5xl text-primary mb-2">3</div>
              <div className="text-foreground/60 font-medium">Semester-wise Trophies</div>
            </div>
            <div>
              <div className="font-display font-black text-5xl text-secondary mb-2">25+</div>
              <div className="text-foreground/60 font-medium">Teams</div>
            </div>
            <div>
              <div className="font-display font-black text-5xl text-accent mb-2">4</div>
              <div className="text-foreground/60 font-medium">Mentors</div>
            </div>
            <div>
              <div className="font-display font-black text-5xl text-destructive mb-2">24</div>
              <div className="text-foreground/60 font-medium">Hours of Innovation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
