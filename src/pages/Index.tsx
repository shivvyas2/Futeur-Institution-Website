import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Sparkles, CheckCircle, BarChart3, Users, TrendingUp } from "lucide-react";
import EngineNavbar from "@/components/EngineNavbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <EngineNavbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24">
        {/* Soft gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10" />
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center mb-16">
            {/* Pill Badge */}
            <div className="animate-fade-up inline-flex items-center px-5 py-2.5 rounded-full bg-card border border-border shadow-soft mb-8">
              <span className="text-sm text-muted-foreground">
                AI-Powered SMB Intelligence Layer
              </span>
            </div>

            {/* Two-tone Headline */}
            <h1 className="animate-fade-up-delay text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-muted-foreground">Credit Intelligence</span>
              <br />
              <span className="text-foreground">for Business Banking</span>
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              LumiqAI combines credit intelligence and AI to help financial institutions control their SMB lending exposure and unlock growth.
            </p>

            {/* CTA Button */}
            <div className="animate-fade-up-delay-2 flex items-center justify-center">
              <a href="/contact">
                <Button size="lg" className="group bg-foreground text-background hover:bg-foreground/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8">
                  Contact Sales
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>

          {/* Large Product Mockup Card */}
          <div className="animate-fade-up-delay-2 max-w-5xl mx-auto">
            <div className="relative">
              {/* Card glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-primary/10 to-accent/20 rounded-3xl blur-2xl opacity-50" />
              
              {/* Main Card */}
              <div className="relative bg-card rounded-2xl border border-border shadow-2xl overflow-hidden">
                {/* Card Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-secondary/30">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-accent" />
                    </div>
                    <span className="font-semibold text-foreground">LumiqAI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 text-sm rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">Dashboard</button>
                    <button className="px-3 py-1.5 text-sm rounded-lg hover:bg-secondary transition-colors text-muted-foreground">Analytics</button>
                    <button className="px-3 py-1.5 text-sm rounded-lg hover:bg-secondary transition-colors text-muted-foreground">Reports</button>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20" />
                  </div>
                </div>

                {/* Card Content - Dashboard Preview */}
                <div className="p-6 grid md:grid-cols-3 gap-6">
                  {/* Sidebar */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm">82</div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Business Credit</p>
                          <p className="text-xs text-muted-foreground">Low Risk</p>
                        </div>
                      </div>
                      <div className="h-2 rounded-full bg-secondary overflow-hidden">
                        <div className="h-full w-4/5 bg-gradient-to-r from-accent to-accent/70 rounded-full" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {['Payment History', 'Credit Utilization', 'Account Age'].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="md:col-span-2 space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: 'Pre-Qualified', value: '$125K', icon: TrendingUp },
                        { label: 'Active Clients', value: '2,847', icon: Users },
                        { label: 'Conversion Rate', value: '+23%', icon: BarChart3 },
                      ].map((stat, i) => (
                        <div key={i} className="p-4 rounded-xl bg-secondary/30 border border-border">
                          <div className="flex items-center gap-2 mb-2">
                            <stat.icon className="w-4 h-4 text-accent" />
                            <span className="text-xs text-muted-foreground">{stat.label}</span>
                          </div>
                          <p className="text-xl font-bold text-foreground">{stat.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground mb-1">Next Best Action</p>
                          <p className="text-sm text-muted-foreground">Your customer "ABC Corp" is pre-qualified for a $50K credit line. Send offer now to increase conversion.</p>
                        </div>
                        <Button size="sm" className="bg-accent hover:bg-accent/90 text-white flex-shrink-0">
                          Send Offer
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything you need to grow SMB relationships
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to help banks retain customers and increase lending conversion.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="Real-Time Credit Scores"
              description="Instant business credit insights powered by AI, integrated directly into your banking app."
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Embedded Lending"
              description="Pre-qualify customers and deliver contextual credit offers at the perfect moment."
            />
            <FeatureCard
              icon={<Sparkles className="w-6 h-6" />}
              title="Smart Recommendations"
              description="AI-driven action plans that help SMBs improve their creditworthiness over time."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 LumiqAI. Empowering banks to serve SMBs better.
          </p>
        </div>
      </footer>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default Index;