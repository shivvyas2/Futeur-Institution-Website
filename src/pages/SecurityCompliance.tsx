import { useState, useEffect, useRef } from 'react';
import { Shield, Lock, FileCheck, Eye, Server, Key, CheckCircle, ChevronDown, ChevronUp, Users, Clock, Activity, FileText, AlertTriangle, Zap, Database, RefreshCw, ArrowRight } from 'lucide-react';
import EngineNavbar from '@/components/EngineNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Trust badges data
const trustBadges = [
  { icon: Lock, title: "AES-256 Encryption", description: "Data & at Rest" },
  { icon: Shield, title: "TLS 1.2+ & mTLS", description: "Secure Transport" },
  { icon: Users, title: "Modern IAM", description: "SAML/SCIM/RBAC/MFA" },
  { icon: FileCheck, title: "Immutable Audit Logs", description: "Full Trail" },
  { icon: CheckCircle, title: "SOC 2 Ready", description: "FCRA Aligned" },
];

// Metric cards
const heroMetrics = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "24/7", label: "Monitoring & Alerts" },
  { value: "Annual", label: "Penetration Testing" },
  { value: "Quarterly", label: "DR Tests" },
];

// Consent flow cards
const consentCards = [
  {
    icon: Eye,
    title: "Clear Consent Flow",
    description: "Shows users exactly what is shared & why. Modeled after Plaid's secure consent screens.",
  },
  {
    icon: Database,
    title: "Minimal Data Scope",
    description: "Only data needed for scoring & guidance, no extraneous profiling. GDPR/CCPA aligned.",
  },
  {
    icon: RefreshCw,
    title: "Revocable Access",
    description: "Users and banks can revoke access at any time with immediate effect.",
  },
];

// Zero trust cards
const zeroTrustCards = [
  {
    icon: Key,
    title: "Edge Authentication Layer",
    description: "Tokenized access, MFA for admin controls",
  },
  {
    icon: Server,
    title: "Network & Segmentation Controls",
    description: "Micro-segmented services with isolated environments",
  },
  {
    icon: Lock,
    title: "Mutual TLS (mTLS)",
    description: "Optional for bank-to-bank communication",
  },
  {
    icon: Shield,
    title: "Key Management & Vault",
    description: "HSM / AWS KMS / Azure Vault integration",
  },
];

// Compliance cards
const complianceCards = [
  { title: "GLBA Compliance Alignment", description: "Full alignment with Gramm-Leach-Bliley Act requirements for financial data protection." },
  { title: "FFIEC & NIST CSF Mapping", description: "Controls mapped to FFIEC IT Examination Handbook and NIST Cybersecurity Framework." },
  { title: "FCRA Explainable Outputs", description: "All credit scoring outputs include adverse action reasons compliant with Fair Credit Reporting Act." },
  { title: "PCI DSS Support", description: "Applicable controls for payment card data handling when integrated with payment systems." },
];

// Compliance matrix
const complianceMatrix = [
  { category: "Data Encryption", expectation: "AES-256 + TLS 1.2+", implemented: true },
  { category: "Identity & Access", expectation: "SAML/SCIM, RBAC, MFA", implemented: true },
  { category: "Auditability", expectation: "SIEM exportable logs", implemented: true },
  { category: "Endpoint Protection", expectation: "Zero Trust enforcement", implemented: true },
  { category: "Regulatory Mapping", expectation: "GLBA, FFIEC", implemented: true },
];

// Development cards
const devCards = [
  {
    icon: FileCheck,
    title: "Secure SDLC",
    items: ["SAST / DAST scans", "Peer reviews & manual checks"],
  },
  {
    icon: Shield,
    title: "Penetration Testing",
    items: ["Annual 3rd-party tests", "Board-ready reports"],
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    items: ["SLA-based breach notifications (<24 hrs)", "Playbooks & RCA templates"],
  },
  {
    icon: Activity,
    title: "Continuous Monitoring",
    items: ["Uptime SLA", "Performance & security dashboards"],
  },
];

// Vendor lifecycle cards
const vendorCards = [
  {
    icon: FileText,
    title: "Vendor Due Diligence Pack",
    items: ["Pre-filled questionnaires", "Contract clauses"],
  },
  {
    icon: Activity,
    title: "Ongoing Monitoring Framework",
    items: ["Quarterly reassessments", "Feature change notifications"],
  },
  {
    icon: RefreshCw,
    title: "Exit & Data Retention Plan",
    items: ["Data deletion by policy", "Token revocation flows"],
  },
];

// FAQ items
const faqItems = [
  {
    question: "How is customer consent captured and stored?",
    answer: "Customer consent is captured through a clear, tokenized flow. Each consent event generates an immutable audit record with timestamp, scope, and user verification. All consent tokens are stored encrypted and can be programmatically queried for compliance reporting.",
  },
  {
    question: "Can we export logs to our SIEM?",
    answer: "Yes — we support JSON, syslog, and SIEM-ready exports. Logs can be streamed in real-time or exported in batches. We integrate with major SIEM platforms including Splunk, Datadog, and Azure Sentinel.",
  },
  {
    question: "What certifications are included?",
    answer: "SOC 2 Type II readiness documentation, GLBA/FFIEC mapping documents, and FCRA compliance guides are provided as part of our vendor package. Full audit artifacts are available upon request.",
  },
  {
    question: "How often are penetration tests done?",
    answer: "Annual third-party penetration tests are conducted by certified security firms, plus quarterly internal vulnerability scans. All findings are remediated with priority timelines and reports are available for your risk team.",
  },
  {
    question: "Do you support mutual TLS between partners?",
    answer: "Yes, mTLS is available for bank-to-LumiqAI communications. We provide certificate management tooling and support for custom CA chains where required by your security policy.",
  },
];

// AnimatedCounter component
const AnimatedCounter = ({ value, label }: { value: string; label: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};

// FAQ Accordion Item
const FAQItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors px-2"
      >
        <span className="font-semibold text-gray-900 text-lg pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        )}
      >
        <p className="text-gray-600 leading-relaxed px-2">{answer}</p>
      </div>
    </div>
  );
};

const SecurityCompliance = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white">
      <EngineNavbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/security-hero-bg.jpg)' }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm shadow-sm mb-8">
              <Shield className="h-4 w-4 text-teal-400" />
              <span className="text-sm font-medium text-white/90">Enterprise Security</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6 animate-fade-up">
              Security & Compliance Engineered for Enterprise Banking
            </h1>
            
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12 animate-fade-up-delay">
              Built for regulated environments. Designed for audit readiness. Trusted for transparency. We protect your data, deliver governance continuity, and align with banking regulatory and third-party risk frameworks.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16 animate-fade-up-delay-2">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/15 hover:border-teal-400/30 transition-all duration-300 group"
                >
                  <badge.icon className="h-6 w-6 text-teal-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="font-semibold text-white text-sm">{badge.title}</div>
                  <div className="text-xs text-white/60">{badge.description}</div>
                </div>
              ))}
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {heroMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-white/60">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Permissioned Data & Consent */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-4">
              <Eye className="h-4 w-4" />
              Data Governance
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Permissioned & Transparent Data Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              LumiqAI only uses explicitly consented data, displayed with clarity — as banks expect.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {consentCards.map((card, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-teal-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <card.icon className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>

          {/* Consent Flow Diagram */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12">
            <h3 className="text-white text-xl font-semibold mb-8 text-center">Consent Flow Architecture</h3>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              {['User Request', 'Consent Token', 'LumiqAI API', 'Bank UI'].map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4 text-white font-medium border border-white/20">
                    {step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block text-teal-400 text-2xl">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Zero Trust Architecture */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-400 text-sm font-medium mb-4">
              <Lock className="h-4 w-4" />
              Zero Trust
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Built on Zero Trust — Always Authenticate, Always Authorize
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every request, service, and API call is authenticated, authorized, and logged. Architectural controls include layered defense mechanisms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {zeroTrustCards.map((card, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:border-teal-500/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <card.icon className="h-6 w-6 text-teal-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm">{card.description}</p>
              </div>
            ))}
          </div>

          {/* Architecture Diagram */}
          <div className="bg-white/5 backdrop-blur rounded-3xl p-8 md:p-12 border border-white/10">
            <h3 className="text-white text-xl font-semibold mb-8 text-center">Security Architecture Flow</h3>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
              {[
                { label: 'Client App', sublabel: 'Mobile/Web' },
                { label: 'API Gateway', sublabel: 'Edge Auth' },
                { label: 'Scoring Engine', sublabel: 'Core Logic' },
                { label: 'Bank APIs', sublabel: 'Decision' },
                { label: 'SIEM', sublabel: 'Logging' },
              ].map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-xl px-5 py-4 text-center border border-white/20 min-w-[120px]">
                    <div className="text-white font-medium text-sm">{step.label}</div>
                    <div className="text-gray-500 text-xs mt-1">{step.sublabel}</div>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block text-teal-400 text-xl">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Regulatory Alignment */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4">
                <FileCheck className="h-4 w-4" />
                Regulatory
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Designed for Financial Regulatory Expectations
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Aligns with frameworks and expectations banks must meet, including GLBA, FFIEC & SOC readiness.
              </p>

              <div className="space-y-4">
                {complianceCards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors border border-gray-100"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
                    <p className="text-gray-600 text-sm">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance Matrix */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Compliance Controls Matrix</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 pb-3 border-b border-gray-200">
                  <div className="text-sm font-semibold text-gray-500">Control Category</div>
                  <div className="text-sm font-semibold text-gray-500">Bank Expectation</div>
                  <div className="text-sm font-semibold text-gray-500 text-center">Status</div>
                </div>
                {complianceMatrix.map((item, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 py-3 border-b border-gray-100 last:border-b-0">
                    <div className="text-sm font-medium text-gray-900">{item.category}</div>
                    <div className="text-sm text-gray-600">{item.expectation}</div>
                    <div className="flex justify-center">
                      <CheckCircle className="h-5 w-5 text-teal-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Secure Development */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-sm font-medium mb-4">
              <Zap className="h-4 w-4" />
              Development
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built & Monitored to Bank-Certified Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Security is built into every stage of our development lifecycle with continuous monitoring and rapid response.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <card.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{card.title}</h3>
                <ul className="space-y-2">
                  {card.items.map((item, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Vendor Lifecycle */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-sm font-medium mb-4">
              <Users className="h-4 w-4" />
              TPRM Support
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Risk Team Friendly — From Onboarding to Offboarding
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete vendor lifecycle support with documentation ready for your third-party risk management team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {vendorCards.map((card, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50/50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <card.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{card.title}</h3>
                <ul className="space-y-2">
                  {card.items.map((item, i) => (
                    <li key={i} className="text-gray-600 flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Lifecycle Timeline */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">Vendor Lifecycle Timeline</h3>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-0">
              {['Onboard', 'Monitor', 'Respond', 'Offboard'].map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                    <div className="mt-3 font-medium text-gray-900">{step}</div>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block w-24 h-0.5 bg-orange-200 mx-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-sm font-medium mb-4">
              <FileText className="h-4 w-4" />
              FAQ
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Security & Compliance FAQ
            </h2>
            <p className="text-xl text-gray-600">
              Common questions from risk and security teams.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Risk Team Approval?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Get the documentation and access your team needs to complete vendor due diligence.
          </p>
          
          <div className="flex justify-center">
            <a href="/contact">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white px-10 py-6 rounded-full text-lg font-medium">
                Contact Sales
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* Trust badges footer */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4" /> SOC 2 Ready
              </span>
              <span className="flex items-center gap-2">
                <Lock className="h-4 w-4" /> AES-256
              </span>
              <span className="flex items-center gap-2">
                <FileCheck className="h-4 w-4" /> FCRA Aligned
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> GLBA Mapped
              </span>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SecurityCompliance;
