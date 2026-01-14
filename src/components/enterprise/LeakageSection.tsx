import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

const LeakageSection = () => {
  const consumerSuccess = [
    { title: "Free score visibility (in-app / online)", desc: "FICO® scores drove engagement" },
    { title: "Monitoring + alerts", desc: "Real-time notifications" },
    { title: "Score explanations + education", desc: "Customer understanding" },
    { title: "Preselected offers (the \"next product\" motion)", desc: "40% conversion boost" }
  ];

  const smbReality = [
    "I don't know my business credit score",
    "Got denied, no explanation",
    "No visibility into eligibility",
    "So I apply elsewhere"
  ];

  const stats = [
    { value: "36.2M", label: "small businesses in the US" },
    { value: "Growing", label: "Nonbank online lenders are a growing source of small-dollar credit" },
    { value: "~24%", label: "apply through their existing bank (directional)" }
  ];

  return (
    <section id="leakage-model" className="py-24 lg:py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 tracking-tight">
            SMB customers are leaving because they can't see the path to approval.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Consumer Success */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
            <div className="bg-emerald-500/10 px-6 py-4 border-b border-border/50">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                What banks perfected (consumer)
              </h3>
            </div>
            <CardContent className="p-6 space-y-4">
              {consumerSuccess.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* SMB Reality */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
            <div className="bg-red-500/10 px-6 py-4 border-b border-border/50">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <XCircle className="h-5 w-5 text-red-500" />
                What SMBs experience today
              </h3>
            </div>
            <CardContent className="p-6 space-y-4">
              {smbReality.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <XCircle className="h-4 w-4 text-red-500" />
                  </div>
                  <div className="font-medium text-foreground italic">"{item}"</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Data Strip */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-secondary/50 backdrop-blur-sm rounded-xl p-6 text-center border border-border/50">
              <div className="text-3xl font-black text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tone Note */}
        <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 rounded-2xl p-8 text-center border border-amber-500/20">
          <p className="text-xl md:text-2xl font-semibold text-foreground">
            This isn't a marketing problem. It's a relationship-loss problem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeakageSection;
