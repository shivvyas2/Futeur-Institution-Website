import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Target, Bell } from "lucide-react";

const SolutionSection = () => {
  const pillars = [
    {
      icon: TrendingUp,
      name: "LumiqAI Intelligence™",
      inApp: "Display Business credit + Consumer Credit health from multi-source signals",
      drives: "Customers understand their complete credit picture for the first time",
      outcome: "3x increase in digital engagement"
    },
    {
      icon: Bell,
      name: "LumiqAI Engage™",
      inApp: "Alerts + coaching that drives repeat app sessions",
      drives: "Customers come back weekly instead of quarterly",
      outcome: "65% reduction in dormant accounts"
    },
    {
      icon: Target,
      name: "LumiqAI Convert™",
      inApp: "Soft-estimated eligibility + prequalified offers",
      drives: "Customers see what they qualify for before they apply",
      outcome: "+40% application completion rate"
    },
    {
      icon: Users,
      name: "LumiqAI Retain™",
      inApp: "Keep SMBs inside your ecosystem through transparency",
      drives: "Customers don't need to look elsewhere",
      outcome: "2.5x lifetime value increase"
    }
  ];

  return (
    <section className="py-24 lg:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 border border-primary/20">
            <span className="font-medium text-primary text-sm">THE SOLUTION</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 tracking-tight">
            LumiqAI brings the consumer credit playbook to SMB banking — safely.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <pillar.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{pillar.name}</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-secondary/50 rounded-lg p-4 border-l-4 border-blue-500">
                    <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1 uppercase tracking-wide">What shows up in-app</div>
                    <div className="text-sm text-foreground">{pillar.inApp}</div>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border-l-4 border-emerald-500">
                    <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1 uppercase tracking-wide">What it drives</div>
                    <div className="text-sm text-foreground">{pillar.drives}</div>
                  </div>
                  <div className="flex items-center justify-between bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-4">
                    <span className="text-sm text-muted-foreground">Expected outcome:</span>
                    <span className="font-bold text-primary">{pillar.outcome}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
