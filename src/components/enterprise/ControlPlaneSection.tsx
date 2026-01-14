import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, FileCheck } from "lucide-react";

const ControlPlaneSection = () => {
  const controlRows = [
    {
      aspect: "Credit Score Used",
      control: "Lender determines (FICO/VantageScore/Experian Business, etc.)",
      owner: "Bank"
    },
    {
      aspect: "Final Loan Decision",
      control: "Lender underwriting system",
      owner: "Bank"
    },
    {
      aspect: "Routing of Application",
      control: "LumiqAI Intelligent Customer Matching (policy-driven)",
      owner: "Bank + LumiqAI"
    },
    {
      aspect: "Pre-Approval / Eligibility Display",
      control: "LumiqAI soft-estimated eligibility (clearly labeled as estimate)",
      owner: "LumiqAI"
    }
  ];

  const trustBadges = [
    { icon: Eye, text: "No hard pull for visibility", desc: "Soft inquiry only" },
    { icon: Shield, text: "Explainable outputs", desc: "Every recommendation traceable" },
    { icon: FileCheck, text: "Audit-ready event logs", desc: "Full compliance trail" }
  ];

  return (
    <section className="py-24 lg:py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 tracking-tight">
            Banks stay in control.
            <span className="block text-muted-foreground text-2xl md:text-3xl mt-2 font-normal">
              LumiqAI drives visibility, routing, and explainability.
            </span>
          </h2>
        </div>

        {/* Control Plane Table */}
        <div className="bg-card rounded-xl border border-border overflow-hidden mb-12">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary/50">
                <TableHead className="font-bold text-foreground">Aspect</TableHead>
                <TableHead className="font-bold text-foreground">Who Controls</TableHead>
                <TableHead className="font-bold text-foreground text-right">Owner</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {controlRows.map((row, index) => (
                <TableRow key={index} className="hover:bg-secondary/30">
                  <TableCell className="font-semibold text-foreground">{row.aspect}</TableCell>
                  <TableCell className="text-muted-foreground">{row.control}</TableCell>
                  <TableCell className="text-right">
                    <Badge variant={row.owner === "Bank" ? "default" : row.owner === "LumiqAI" ? "secondary" : "outline"}>
                      {row.owner}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Trust Badges */}
        <div className="grid md:grid-cols-3 gap-6">
          {trustBadges.map((badge, index) => (
            <div key={index} className="bg-secondary/50 rounded-xl p-6 text-center border border-border hover:border-primary/50 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <badge.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="font-bold text-foreground mb-1">{badge.text}</div>
              <div className="text-sm text-muted-foreground">{badge.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ControlPlaneSection;
