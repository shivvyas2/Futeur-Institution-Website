import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const TimelineSection = () => {
  const phases = [
    {
      week: "Week 0–2",
      title: "Security Review",
      description: "Security review + architecture + DPIA/data map",
      details: ["Vendor risk assessment", "Architecture review", "Data protection impact analysis"]
    },
    {
      week: "Week 2–6",
      title: "Integration",
      description: "API + event instrumentation + sandbox UI components",
      details: ["API integration", "Event tracking setup", "UI component testing"]
    },
    {
      week: "Week 6–10",
      title: "Calibration",
      description: "Model calibration + eligibility rules + internal QA",
      details: ["Eligibility thresholds", "Product matching rules", "Internal testing"]
    },
    {
      week: "Week 10–12",
      title: "Production",
      description: "Production pilot + monitoring + executive readout",
      details: ["Controlled rollout", "Performance monitoring", "Stakeholder review"]
    }
  ];

  return (
    <section className="py-24 lg:py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 tracking-tight">
            90-day integration. 30-day pilot path.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilot is plug-and-play: start with visibility modules, expand into prequalification + routing.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className="relative flex items-start gap-6">
                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-lg flex-shrink-0 z-10">
                  {index + 1}
                </div>

                <Card className="flex-1 bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="md:hidden inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                        {index + 1}
                      </span>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                        {phase.week}
                      </span>
                      <h3 className="text-xl font-bold text-foreground">{phase.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{phase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-1 text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                          <CheckCircle className="h-3 w-3 text-emerald-500" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
