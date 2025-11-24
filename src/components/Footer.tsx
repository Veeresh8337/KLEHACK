import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center glow-cyan">
                <span className="font-display font-bold text-xl">H</span>
              </div>
              <span className="font-display font-bold text-xl tracking-wider">
                HACKATHON 2025
              </span>
            </div>
            <p className="text-foreground/70 max-w-md leading-relaxed">
              Join the most advanced hackathon experience. Build the future with cutting-edge technology and innovative minds.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-foreground/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#domains" className="text-foreground/70 hover:text-primary transition-colors">
                  Domains
                </Link>
              </li>
              <li>
                <Link to="/#features" className="text-foreground/70 hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-foreground/70 hover:text-primary transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all glow-cyan"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all glow-cyan"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all glow-cyan"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@hackathon2025.com"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all glow-cyan"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">
            © 2025 Hackathon. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-primary opacity-30 blur-sm" />
    </footer>
  );
};

export default Footer;
