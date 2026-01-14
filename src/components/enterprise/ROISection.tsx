import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign, Repeat, Calculator } from "lucide-react";

const ROISection = () => {
  const valueDrivers = [
    {
      icon: TrendingUp,
      title: "Increased SMB product conversion",
      description: "Deposits → lending pathway becomes visible",
      measurement: "Track application starts from visibility views"
    },
    {
      icon: DollarSign,
      title: "Reduced CAC",
      description: "Less paid acquisition because app becomes the journey",
      measurement: "Compare acquisition cost pre/post implementation"
    },
    {
      icon: Repeat,
      title: "Lower churn",
      description: "Keep the relationship inside the bank",
      measurement: "SMB retention rate vs. control group"
    },
    {
      icon: Users,
      title: "Higher engagement",
      description: "Alerts + guidance drives repeat sessions",
      measurement: "Weekly active users, session frequency"
    }
  ];

  return (
    <section className="py-24 lg:py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 tracking-tight">
            Where the ROI comes from
            <span className="block text-muted-foreground text-2xl md:text-3xl mt-2 font-normal">
              (and how you measure it)
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {valueDrivers.map((driver, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                    <driver.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{driver.title}</h3>
                    <p className="text-muted-foreground mb-3">{driver.description}</p>
                    <div className="bg-secondary/50 rounded-lg p-3 border border-border">
                      <div className="text-xs font-semibold text-primary mb-1 uppercase tracking-wide">How to measure</div>
                      <div className="text-sm text-muted-foreground">{driver.measurement}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Calculator CTA */}
        <div className="text-center">
          <a href="https://www.futeur.ai/contact" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-full font-bold">
              <Calculator className="mr-2 h-5 w-5" />
              Request ROI Worksheet
            </Button>
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            Customize projections with your own SMB portfolio data
          </p>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
