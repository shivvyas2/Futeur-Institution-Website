import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { XCircle, CheckCircle, Info, ZoomIn } from "lucide-react";

interface Module {
  name: string;
  description: string;
  dataUsed: string;
  bankControls: string;
  customerImpact: string;
  compliance: string;
}

interface BankMockup {
  name: string;
  logo: string;
  screenshot: string;
  primaryColor: string;
  score: number;
  ownerScore: number;
  eligibleProducts: number;
}

const ComparisonSection = () => {
  // Bank screenshots for "Without LumiqAI" side
  const bankScreenshots = [
    { name: "Chase", logo: "/logos/banks/chase.png", screenshot: "/mobile/chase.png" },
    { name: "Wells Fargo", logo: "/logos/banks/wellsfargo.png", screenshot: "/mobile/wells.png" },
    { name: "Capital One", logo: "/logos/banks/capitalone.png", screenshot: "/mobile/dun.png" },
    { name: "Citi", logo: "/logos/banks/chase.png", screenshot: "/mobile/chase.png" }
  ];

  // Bank mockups for "With LumiqAI" side - showing LumiqAI integrated
  const bankMockups: BankMockup[] = [
    { name: "Chase", logo: "/logos/banks/chase.png", screenshot: "", primaryColor: "from-blue-600 to-blue-700", score: 742, ownerScore: 780, eligibleProducts: 3 },
    { name: "Wells Fargo", logo: "/logos/banks/wellsfargo.png", screenshot: "", primaryColor: "from-red-600 to-red-700", score: 698, ownerScore: 745, eligibleProducts: 2 },
    { name: "Capital One", logo: "/logos/banks/capitalone.png", screenshot: "", primaryColor: "from-red-500 to-orange-600", score: 765, ownerScore: 801, eligibleProducts: 4 },
    { name: "Citi", logo: "/logos/banks/chase.png", screenshot: "", primaryColor: "from-blue-500 to-cyan-600", score: 721, ownerScore: 758, eligibleProducts: 3 }
  ];

  const modules: Module[] = [
    { name: "Business Credit Health", description: "Score band + risk drivers", dataUsed: "Experian Business, D&B, Equifax Business data aggregated", bankControls: "Threshold settings, display rules, branding", customerImpact: "First-time visibility into business credit standing", compliance: "No hard pull; FCRA-aligned disclosure" },
    { name: "Owner Credit Health", description: "Consumer score band", dataUsed: "Soft-pull consumer data (VantageScore/FICO compatible)", bankControls: "Enable/disable, display thresholds", customerImpact: "See how personal credit affects business borrowing", compliance: "Soft pull only; consumer disclosures included" },
    { name: "Eligibility Window", description: "Likely eligible for X products if Y improves", dataUsed: "Combined business + consumer signals, bank product rules", bankControls: "Product matrix, eligibility thresholds, messaging", customerImpact: "Clear path to approval instead of guessing", compliance: "Soft-estimated; clearly labeled as estimate" },
    { name: "Next Best Action", description: "3-step improvement checklist", dataUsed: "Gap analysis from credit data vs. eligibility requirements", bankControls: "Action recommendations, priority weighting", customerImpact: "Actionable steps to improve creditworthiness", compliance: "Educational content; no credit decision implied" },
    { name: "Prequalified Offers", description: "Soft-estimated product matches", dataUsed: "Bank product catalog + eligibility engine output", bankControls: "Product selection, offer terms, display priority", customerImpact: "See what products they likely qualify for", compliance: "Pre-approval language compliance; terms disclosed" }
  ];

  // Phone mockup component for "With LumiqAI"
  const PhoneMockup = ({ bank }: { bank: BankMockup }) => (
    <div className="relative w-full aspect-[9/16] bg-gradient-to-b from-gray-900 to-gray-950 rounded-[1.5rem] p-1.5 border-2 border-gray-800 shadow-xl">
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-3 bg-black rounded-full" />
      <div className="h-full bg-gradient-to-b from-slate-50 to-white rounded-[1.2rem] overflow-hidden p-2">
        {/* Bank Header */}
        <div className={`bg-gradient-to-r ${bank.primaryColor} rounded-lg p-2 mb-2 text-white`}>
          <div className="flex items-center gap-1.5 mb-1">
            <img src={bank.logo} alt={bank.name} className="h-4 w-4 rounded-full bg-white p-0.5" />
            <span className="text-[8px] font-medium opacity-90">{bank.name} Business</span>
          </div>
          <div className="text-xl font-bold">{bank.score}</div>
          <div className="text-[7px] opacity-80">Business Credit Score</div>
        </div>
        
        {/* Owner Credit */}
        <div className="bg-blue-50 rounded-md p-1.5 mb-1.5 border border-blue-100">
          <div className="text-[7px] font-semibold text-blue-800">Owner Credit: {bank.ownerScore}</div>
        </div>
        
        {/* Eligibility */}
        <div className="bg-amber-50 rounded-md p-1.5 mb-1.5 border border-amber-200">
          <div className="text-[7px] font-semibold text-amber-800">Eligibility Window</div>
          <div className="text-[6px] text-amber-600">Likely eligible for {bank.eligibleProducts} products</div>
        </div>
        
        {/* Next Best Action */}
        <div className="bg-white rounded-md p-1.5 shadow-sm border text-[6px]">
          <div className="font-semibold text-gray-800 mb-0.5">Next Best Action</div>
          <div className="text-gray-500">✓ Pay supplier invoice</div>
          <div className="text-gray-500">✓ Update financials</div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 lg:py-32 px-6 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6 border border-accent/20">
            <span className="font-medium text-accent text-sm">THE CENTERPIECE</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 tracking-tight">
            What your SMB app looks like in 90 days
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* WITHOUT LumiqAI - Bank Screenshots */}
          <div>
            <div className="bg-red-500/10 px-6 py-4 rounded-t-xl border border-red-500/20 border-b-0">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <XCircle className="h-5 w-5 text-red-500" />
                Without LumiqAI
              </h3>
              <p className="text-sm text-muted-foreground mt-1">Current SMB banking experience</p>
            </div>
            <Card className="bg-card border-border rounded-t-none border-t-0">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {bankScreenshots.map((bank, index) => (
                    <Dialog key={index}>
                      <DialogTrigger asChild>
                        <button className="group relative bg-secondary/50 rounded-xl p-3 border border-border hover:border-red-500/50 transition-all overflow-hidden">
                          {/* Bank Logo Badge */}
                          <div className="absolute top-2 left-2 z-10 bg-white rounded-full p-1.5 shadow-md">
                            <img src={bank.logo} alt={bank.name} className="h-5 w-5 object-contain" />
                          </div>
                          {/* Zoom Icon */}
                          <div className="absolute top-2 right-2 z-10 bg-black/60 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ZoomIn className="h-4 w-4 text-white" />
                          </div>
                          {/* Screenshot */}
                          <div className="aspect-[9/16] rounded-lg overflow-hidden bg-gray-900">
                            <img src={bank.screenshot} alt={`${bank.name} SMB App`} className="w-full h-full object-cover object-top" />
                          </div>
                          {/* Bank Name */}
                          <div className="mt-2 text-sm font-medium text-foreground text-center">{bank.name}</div>
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md p-0 overflow-hidden bg-card">
                        <div className="p-4 border-b border-border flex items-center gap-3">
                          <img src={bank.logo} alt={bank.name} className="h-8 w-8 object-contain bg-white rounded-full p-1" />
                          <div>
                            <h4 className="font-bold text-foreground">{bank.name}</h4>
                            <p className="text-sm text-muted-foreground">Current SMB Experience</p>
                          </div>
                        </div>
                        <div className="p-4">
                          <img src={bank.screenshot} alt={`${bank.name} SMB App Screenshot`} className="w-full rounded-lg" />
                        </div>
                        <div className="p-4 bg-red-500/10 border-t border-red-500/20">
                          <div className="flex items-start gap-2 text-sm text-red-400">
                            <XCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>No business credit visibility, no eligibility guidance, no path to approval</span>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>

                {/* Summary */}
                <div className="mt-6 p-4 bg-red-500/5 rounded-xl border border-red-500/20">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <XCircle className="h-4 w-4 text-red-500" />
                      No business credit score visibility
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <XCircle className="h-4 w-4 text-red-500" />
                      No combined owner+business credit health
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <XCircle className="h-4 w-4 text-red-500" />
                      No eligibility window or next steps
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <XCircle className="h-4 w-4 text-red-500" />
                      Reactive: application → denial → churn
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* WITH LumiqAI - 4 Phone Mockups */}
          <div>
            <div className="bg-emerald-500/10 px-6 py-4 rounded-t-xl border border-emerald-500/20 border-b-0">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                With LumiqAI
              </h3>
              <p className="text-sm text-muted-foreground mt-1">SMB credit journey enabled</p>
            </div>
            <Card className="bg-card border-border rounded-t-none border-t-0">
              <CardContent className="p-6">
                {/* 4 Phone Mockups Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {bankMockups.map((bank, index) => (
                    <Sheet key={index}>
                      <SheetTrigger asChild>
                        <button className="group relative bg-secondary/50 rounded-xl p-3 border border-border hover:border-emerald-500/50 transition-all">
                          {/* Bank Logo Badge */}
                          <div className="absolute top-2 left-2 z-10 bg-white rounded-full p-1.5 shadow-md">
                            <img src={bank.logo} alt={bank.name} className="h-5 w-5 object-contain" />
                          </div>
                          {/* LumiqAI Badge */}
                          <div className="absolute top-2 right-2 z-10 bg-emerald-500 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <CheckCircle className="h-3 w-3 text-white" />
                          </div>
                          
                          {/* Phone Mockup */}
                          <PhoneMockup bank={bank} />
                          
                          {/* Bank Name */}
                          <div className="mt-2 text-sm font-medium text-foreground text-center">{bank.name}</div>
                        </button>
                      </SheetTrigger>
                      <SheetContent className="w-full sm:max-w-lg">
                        <SheetHeader>
                          <SheetTitle className="flex items-center gap-2">
                            <img src={bank.logo} alt={bank.name} className="h-6 w-6 rounded-full bg-white p-0.5" />
                            {bank.name} + LumiqAI
                          </SheetTitle>
                          <SheetDescription>Business credit visibility powered by LumiqAI</SheetDescription>
                        </SheetHeader>
                        <div className="mt-6 space-y-4">
                          {modules.map((module, idx) => (
                            <div key={idx} className="bg-secondary/50 rounded-lg p-4">
                              <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                                <CheckCircle className="h-4 w-4 text-emerald-500" />
                                {module.name}
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">{module.description}</p>
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="bg-background/50 rounded p-2">
                                  <div className="text-muted-foreground mb-1">Data</div>
                                  <div className="text-foreground">{module.dataUsed.split(',')[0]}</div>
                                </div>
                                <div className="bg-background/50 rounded p-2">
                                  <div className="text-muted-foreground mb-1">Bank Controls</div>
                                  <div className="text-foreground">{module.bankControls.split(',')[0]}</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </SheetContent>
                    </Sheet>
                  ))}
                </div>

                {/* Summary */}
                <div className="mt-6 p-4 bg-emerald-500/5 rounded-xl border border-emerald-500/20">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      Business Credit Health score + risk drivers
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      Owner Credit Health visibility
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      Eligibility Window + Next Best Action
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      Proactive: visibility → guidance → conversion
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
