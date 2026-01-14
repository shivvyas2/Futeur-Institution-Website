import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertTriangle } from "lucide-react";

const VillainSection = () => {
  return (
    <section className="py-24 lg:py-32 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 px-4 py-2 rounded-full mb-6 border border-amber-500/20">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <span className="font-medium text-amber-600 dark:text-amber-400 text-sm">COMPETITIVE THREAT</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 tracking-tight">
            Your deposits fund the relationship — but other platforms capture the credit moment.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            SMBs are being acquired at the moment of need by ecosystems that combine data + UX + instant eligibility guidance — often distributed through partner-bank licensing models.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="bg-card rounded-xl border border-border overflow-hidden">
            <AccordionItem value="explanation" className="border-none">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-secondary/50">
                <span className="text-base font-semibold text-foreground">What do you mean by "partner-bank licensing models"?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Fintechs often partner with bank sponsors to offer products through existing licenses and compliance programs. This enables them to move fast while meeting regulatory requirements.
                  </p>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <p className="font-semibold text-foreground mb-2">The bottom line:</p>
                    <p>
                      If the national bank app doesn't show the journey, the journey happens elsewhere — through platforms that have already figured out how to make credit visible and actionable.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default VillainSection;
