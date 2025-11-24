import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface DomainCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  glowColor: "cyan" | "purple" | "gold" | "red";
  delay?: number;
}

const glowClasses = {
  cyan: "border-primary/50 hover:border-primary shadow-glow-cyan",
  purple: "border-secondary/50 hover:border-secondary shadow-glow-purple",
  gold: "border-accent/50 hover:border-accent shadow-glow-gold",
  red: "border-destructive/50 hover:border-destructive",
};

const iconBgClasses = {
  cyan: "bg-primary/20 text-primary",
  purple: "bg-secondary/20 text-secondary",
  gold: "bg-accent/20 text-accent",
  red: "bg-destructive/20 text-destructive",
};

const DomainCard = ({ title, description, icon: Icon, glowColor, delay = 0 }: DomainCardProps) => {
  return (
    <div
      className={`group glass-strong rounded-3xl p-8 border-2 transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${glowClasses[glowColor]} animate-fade-in`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div className={`w-16 h-16 rounded-2xl ${iconBgClasses[glowColor]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-8 h-8" />
      </div>

      {/* Content */}
      <h3 className="font-display font-bold text-2xl mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-foreground/70 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Hologram effect on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-glass opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {/* CTA */}
      <Button 
        asChild 
        variant="ghost" 
        className="w-full font-semibold group-hover:bg-white/10 transition-colors"
      >
        <Link to="/register">
          Choose Domain →
        </Link>
      </Button>
    </div>
  );
};

export default DomainCard;
