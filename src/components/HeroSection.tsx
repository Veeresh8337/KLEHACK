import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Arc Reactor animated background */}
      <div className="absolute inset-0 bg-gradient-hero overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse-glow glow-arc" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-iron-red/20 rounded-full blur-3xl animate-pulse-glow animation-delay-1000 glow-red" />
        
        {/* Arc Reactor core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-40">
          <div className="absolute inset-0 bg-gradient-arc rounded-full glow-arc" />
          <div className="absolute inset-0 border-2 border-primary/40 rounded-full animate-reactor-spin" />
          <div className="absolute inset-12 border-2 border-primary/30 rounded-full animate-reactor-spin animation-delay-500" style={{ animationDirection: 'reverse' }} />
          <div className="absolute inset-24 border-2 border-primary/20 rounded-full animate-reactor-spin animation-delay-1000" />
          
          {/* Center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary rounded-full glow-arc animate-pulse-glow" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-primary/30 mb-6 md:mb-8 animate-fade-in glow-arc">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-xs md:text-sm font-semibold text-primary">Limited Spots Available</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-9xl mb-4 md:mb-6 animate-fade-in tracking-tight leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent glow-arc">
              HACKATHON
            </span>
            <br />
            <span className="text-foreground drop-shadow-[0_0_30px_rgba(0,217,255,0.3)]">2025</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-3 md:mb-4 animate-fade-in animation-delay-200 font-light tracking-wide px-4">
            Innovate. Collaborate. Dominate.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-foreground/60 mb-8 md:mb-12 max-w-2xl mx-auto animate-fade-in animation-delay-300 px-4">
            Join the most advanced hackathon experience. Build the future across FinTech, EduTech, HealthTech, and AI domains.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 animate-fade-in animation-delay-500 px-4">
            <Button 
              asChild 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-primary font-display font-bold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 magnetic-hover glow-arc border-0 group"
            >
              <Link to="/register">
                Register Your Team
                <ArrowRight className="ml-2 w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto font-display font-semibold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 glass-strong border-primary/30 hover:bg-primary/10 magnetic-hover text-foreground"
            >
              <Link to="/login">
                Login
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 mt-12 md:mt-20 max-w-3xl mx-auto animate-fade-in animation-delay-700 px-4">
            <div className="glass p-4 sm:p-6 rounded-xl md:rounded-2xl border border-primary/20">
              <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary mb-1 md:mb-2 glow-arc">4</div>
              <div className="text-xs sm:text-sm text-foreground/60">Domains</div>
            </div>
            <div className="glass p-4 sm:p-6 rounded-xl md:rounded-2xl border border-iron-red/20">
              <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-iron-red mb-1 md:mb-2 glow-red">48h</div>
              <div className="text-xs sm:text-sm text-foreground/60">Duration</div>
            </div>
            <div className="glass p-4 sm:p-6 rounded-xl md:rounded-2xl border border-iron-gold/20">
              <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-iron-gold mb-1 md:mb-2 glow-gold">100+</div>
              <div className="text-xs sm:text-sm text-foreground/60">Teams</div>
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
