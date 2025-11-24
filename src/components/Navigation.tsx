import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Arc Reactor Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center glow-arc arc-reactor">
              <div className="absolute inset-0 border border-primary/50 rounded-lg animate-pulse-glow" />
              <span className="font-display font-bold text-xl relative z-10">H</span>
            </div>
            <span className="font-display font-bold text-base md:text-xl tracking-wider group-hover:text-primary transition-colors hidden sm:inline">
              HACKATHON 2025
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/#domains" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Domains
            </Link>
            <Link to="/#features" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Features
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button asChild variant="ghost" className="font-medium hover:text-primary">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild className="bg-gradient-primary font-display font-semibold magnetic-hover glow-arc border-0">
              <Link to="/register">Register Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-white/10 pt-4">
            <Link 
              to="/" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/#domains" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Domains
            </Link>
            <Link 
              to="/#features" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <div className="flex flex-col gap-2 mt-2">
              <Button asChild variant="outline">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="bg-gradient-primary font-display font-semibold">
                <Link to="/register">Register Now</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
