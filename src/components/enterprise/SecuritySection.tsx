import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Key, FileText, Database, Server, Download } from "lucide-react";

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Encryption",
      items: ["AES-256 at rest", "TLS 1.2+ in transit", "HSM-backed key management"]
    },
    {
      icon: Key,
      title: "Access Controls",
      items: ["RBAC/ABAC enforcement", "MFA required", "IP allowlisting", "Least-privilege model"]
    },
    {
      icon: Shield,
      title: "Identity",
      items: ["SAML 2.0 / OIDC SSO", "SCIM provisioning", "Directory sync support"]
    },
    {
      icon: FileText,
      title: "Logging",
      items: ["Immutable audit logs", "SIEM export (Splunk/Elastic)", "Anomaly detection hooks"]
    },
    {
      icon: Database,
      title: "Data Minimization",
      items: ["Tokenization", "Field-level encryption", "Sensitive attribute protection"]
    },
    {
      icon: Server,
      title: "Segmentation",
      items: ["Tenant isolation", "Separate envs (dev/stage/prod)", "Secure SDLC"]
    }
  ];

  const complianceItems = [
    "GLBA alignment",
    "SOC 2 Type II readiness",
    "FFIEC-style control mapping",
    "Vendor packet ready"
  ];

  return (
    <section className="py-24 lg:py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-full mb-6 border border-emerald-500/20">
            <Shield className="h-4 w-4 text-emerald-500" />
            <span className="font-medium text-emerald-600 dark:text-emerald-400 text-sm">SECURITY & COMPLIANCE</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 tracking-tight">
            Built for bank vendor risk.
            <span className="block text-muted-foreground text-2xl md:text-3xl mt-2 font-normal">
              Audit-ready by design.
            </span>
          </h2>
        </div>

        {/* Security Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:border-emerald-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-emerald-500/10 p-2 rounded-lg">
                    <feature.icon className="h-5 w-5 text-emerald-500" />
                  </div>
                  <h3 className="font-bold text-foreground">{feature.title}</h3>
                </div>
                <ul className="space-y-2">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Compliance Mapping */}
        <div className="bg-card rounded-xl p-8 border border-border mb-8">
          <h3 className="font-bold text-foreground text-lg mb-4 text-center">Compliance Mapping</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {complianceItems.map((item, index) => (
              <div key={index} className="bg-secondary/50 px-4 py-2 rounded-full text-sm font-medium text-foreground border border-border">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="https://www.futeur.ai/contact" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-bold">
              <Download className="mr-2 h-5 w-5" />
              Download Security Packet
            </Button>
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            Includes SOC 2 summary, pen-test results, and data flow diagram
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
