import { Button } from "@/components/ui/button";
import { Building2, Download, ArrowRight, Calendar } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-24 lg:py-32 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 tracking-tight leading-tight">
          If SMBs can't see the path to approval in your app, they'll find it elsewhere.
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Turn SMB deposits into SMB lending — by making eligibility visible.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href="https://www.futeur.ai/contact" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-full font-bold shadow-lg">
              <Building2 className="mr-2 h-5 w-5" />
              Book a Bank Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a href="https://www.futeur.ai/contact" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-2 border-border hover:border-primary px-8 py-6 text-lg rounded-full font-medium">
              <Download className="mr-2 h-5 w-5" />
              Request Security Packet
            </Button>
          </a>
        </div>

        <a href="#timeline" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <Calendar className="h-4 w-4" />
          <span className="text-sm underline underline-offset-4">See the 90-day integration plan</span>
        </a>
      </div>
    </section>
  );
};

export default FinalCTASection;
