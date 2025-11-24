import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-30">
          <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-hologram" />
          <div className="absolute inset-8 border-2 border-primary/20 rounded-full animate-hologram animation-delay-500" />
          <div className="absolute inset-16 border-2 border-primary/10 rounded-full animate-hologram animation-delay-1000" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-primary/30 mb-8 animate-fade-in glow-cyan">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Limited Spots Available</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl mb-6 animate-fade-in tracking-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              HACKATHON
            </span>
            <br />
            <span className="text-foreground">2025</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-4 animate-fade-in animation-delay-200 font-light tracking-wide">
            Innovate. Collaborate. Dominate.
          </p>

          <p className="text-base md:text-lg text-foreground/60 mb-12 max-w-2xl mx-auto animate-fade-in animation-delay-300">
            Join the most advanced hackathon experience. Build the future across FinTech, EduTech, HealthTech, and AI domains.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-500">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-primary font-display font-bold text-lg px-8 py-6 magnetic-hover glow-cyan border-0 group"
            >
              <Link to="/register">
                Register Your Team
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="font-display font-semibold text-lg px-8 py-6 glass-strong border-primary/30 hover:bg-primary/10 magnetic-hover"
            >
              <Link to="/login">
                Login
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto animate-fade-in animation-delay-700">
            <div className="glass p-6 rounded-2xl">
              <div className="text-4xl font-display font-bold text-primary mb-2">4</div>
              <div className="text-sm text-foreground/60">Domains</div>
            </div>
            <div className="glass p-6 rounded-2xl">
              <div className="text-4xl font-display font-bold text-secondary mb-2">48h</div>
              <div className="text-sm text-foreground/60">Duration</div>
            </div>
            <div className="glass p-6 rounded-2xl">
              <div className="text-4xl font-display font-bold text-accent mb-2">100+</div>
              <div className="text-sm text-foreground/60">Teams</div>
            </div>
          </div>
        </div>
      </div>

      {/* Particle effect overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-20" />
    </section>
  );
};

export default HeroSection;
