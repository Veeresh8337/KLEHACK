import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Lock, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Successful!",
      description: "Welcome back to Hackathon 2025.",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 md:pt-32 pb-12 md:pb-20 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-primary/30 mb-6 glow-arc arc-reactor">
                <Lock className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Secure Login</span>
              </div>
              
              <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight">
                <span className="text-foreground">Welcome</span>
                {" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent glow-arc">
                  Back
                </span>
              </h1>
              <p className="text-base md:text-lg text-foreground/70">
                Login to access your hackathon dashboard
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="glass-strong rounded-2xl md:rounded-3xl p-6 md:p-8 border border-primary/20 space-y-5 md:space-y-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-arc opacity-20 pointer-events-none" />
              
              <div className="space-y-2 relative z-10">
                <Label htmlFor="email" className="text-sm md:text-base font-semibold">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="glass border-primary/20 h-11 md:h-12 text-sm md:text-base focus:border-primary/50 focus:glow-arc transition-all"
                />
              </div>

              <div className="space-y-2 relative z-10">
                <Label htmlFor="password" className="text-sm md:text-base font-semibold">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  required
                  className="glass border-primary/20 h-11 md:h-12 text-sm md:text-base focus:border-primary/50 focus:glow-arc transition-all"
                />
              </div>

              <div className="flex items-center justify-between text-xs md:text-sm relative z-10">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-primary/20 accent-primary" />
                  <span className="text-foreground/70">Remember me</span>
                </label>
                <a href="#" className="text-primary hover:underline hover:glow-arc transition-all">
                  Forgot password?
                </a>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-primary font-display font-bold text-base md:text-lg py-5 md:py-6 magnetic-hover glow-arc border-0 relative z-10"
              >
                Login
              </Button>

              <div className="text-center pt-4 border-t border-primary/10 relative z-10">
                <p className="text-sm md:text-base text-foreground/70">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-primary font-semibold hover:underline hover:glow-arc transition-all">
                    Register now
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
