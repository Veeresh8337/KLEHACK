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
      
      <main className="pt-32 pb-20 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-primary/30 mb-6 glow-cyan">
                <Lock className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Secure Login</span>
              </div>
              
              <h1 className="font-display font-black text-5xl mb-4">
                <span className="text-foreground">Welcome</span>
                {" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Back
                </span>
              </h1>
              <p className="text-lg text-foreground/70">
                Login to access your hackathon dashboard
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="glass-strong rounded-3xl p-8 border border-white/20 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-semibold">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="glass border-white/20 h-12 text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-base font-semibold">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  required
                  className="glass border-white/20 h-12 text-base"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-white/20" />
                  <span className="text-foreground/70">Remember me</span>
                </label>
                <a href="#" className="text-primary hover:underline">
                  Forgot password?
                </a>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-primary font-display font-bold text-lg py-6 magnetic-hover glow-cyan border-0"
              >
                Login
              </Button>

              <div className="text-center pt-4 border-t border-white/10">
                <p className="text-foreground/70">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-primary font-semibold hover:underline">
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
