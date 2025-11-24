import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Users, Zap } from "lucide-react";

const Register = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    teamName: "",
    teamSize: "",
    domain: "",
    leaderName: "",
    leaderEmail: "",
    leaderPhone: "",
    projectIdea: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted!",
      description: "Your team has been registered successfully. Check your email for confirmation.",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-primary/30 mb-6 glow-cyan">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Team Registration</span>
              </div>
              
              <h1 className="font-display font-black text-5xl md:text-6xl mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Register Your
                </span>
                {" "}
                <span className="text-foreground">Team</span>
              </h1>
              <p className="text-lg text-foreground/70">
                Fill out the form below to secure your spot in Hackathon 2025
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="glass-strong rounded-3xl p-8 md:p-12 border border-white/20 space-y-8">
              {/* Team Information */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-primary" />
                  <h2 className="font-display font-bold text-2xl">Team Information</h2>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="teamName" className="text-base font-semibold">Team Name *</Label>
                  <Input
                    id="teamName"
                    placeholder="Enter your team name"
                    value={formData.teamName}
                    onChange={(e) => handleChange("teamName", e.target.value)}
                    required
                    className="glass border-white/20 h-12 text-base"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="teamSize" className="text-base font-semibold">Team Size *</Label>
                    <Select value={formData.teamSize} onValueChange={(value) => handleChange("teamSize", value)}>
                      <SelectTrigger id="teamSize" className="glass border-white/20 h-12 text-base">
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2">2 Members</SelectItem>
                        <SelectItem value="3">3 Members</SelectItem>
                        <SelectItem value="4">4 Members</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="domain" className="text-base font-semibold">Domain *</Label>
                    <Select value={formData.domain} onValueChange={(value) => handleChange("domain", value)}>
                      <SelectTrigger id="domain" className="glass border-white/20 h-12 text-base">
                        <SelectValue placeholder="Select domain" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fintech">FinTech</SelectItem>
                        <SelectItem value="edutech">EduTech</SelectItem>
                        <SelectItem value="healthtech">HealthTech</SelectItem>
                        <SelectItem value="ai">AI For Social Good</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Team Leader Information */}
              <div className="space-y-6 pt-6 border-t border-white/10">
                <h3 className="font-display font-bold text-xl">Team Leader Details</h3>

                <div className="space-y-2">
                  <Label htmlFor="leaderName" className="text-base font-semibold">Full Name *</Label>
                  <Input
                    id="leaderName"
                    placeholder="Enter leader's full name"
                    value={formData.leaderName}
                    onChange={(e) => handleChange("leaderName", e.target.value)}
                    required
                    className="glass border-white/20 h-12 text-base"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="leaderEmail" className="text-base font-semibold">Email *</Label>
                    <Input
                      id="leaderEmail"
                      type="email"
                      placeholder="leader@example.com"
                      value={formData.leaderEmail}
                      onChange={(e) => handleChange("leaderEmail", e.target.value)}
                      required
                      className="glass border-white/20 h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="leaderPhone" className="text-base font-semibold">Phone *</Label>
                    <Input
                      id="leaderPhone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.leaderPhone}
                      onChange={(e) => handleChange("leaderPhone", e.target.value)}
                      required
                      className="glass border-white/20 h-12 text-base"
                    />
                  </div>
                </div>
              </div>

              {/* Project Idea */}
              <div className="space-y-6 pt-6 border-t border-white/10">
                <h3 className="font-display font-bold text-xl">Project Idea (Optional)</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="projectIdea" className="text-base font-semibold">Brief Description</Label>
                  <Textarea
                    id="projectIdea"
                    placeholder="Share your initial project idea (optional but recommended)"
                    value={formData.projectIdea}
                    onChange={(e) => handleChange("projectIdea", e.target.value)}
                    rows={5}
                    className="glass border-white/20 text-base resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-primary font-display font-bold text-lg py-6 magnetic-hover glow-cyan border-0"
              >
                Complete Registration
              </Button>

              <p className="text-center text-sm text-foreground/60 mt-4">
                By registering, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
