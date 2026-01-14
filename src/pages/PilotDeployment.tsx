import { useState, useEffect, useRef } from 'react';
import EngineNavbar from '@/components/EngineNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Rocket, Search, BarChart3, Brain, Radio, FileText, 
  Shield, Lock, Database, Cloud, Zap, Server,
  CheckCircle2, ArrowRight, ChevronDown, ChevronUp,
  User, Building, CreditCard, DollarSign, Activity,
  Code, Terminal, FileCode, Download, ExternalLink,
  TrendingUp, TrendingDown, Target, Users, Clock
} from 'lucide-react';

// Animated counter hook
const useCountUp = (end: number, duration: number = 2000, isVisible: boolean) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);
  
  return count;
};

// Intersection Observer hook
const useInView = (threshold = 0.2) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  
  return { ref, isVisible };
};

// Animated Radial Progress Component
const RadialProgress = ({ 
  value, 
  maxValue = 100, 
  color, 
  isVisible,
  size = 120,
  strokeWidth = 8
}: { 
  value: number; 
  maxValue?: number; 
  color: string; 
  isVisible: boolean;
  size?: number;
  strokeWidth?: number;
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progress = isVisible ? (value / maxValue) * 100 : 0;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      {/* Background circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        className="text-gray-200"
      />
      {/* Progress circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        className="transition-all duration-1500 ease-out"
        style={{ transitionDelay: '200ms' }}
      />
    </svg>
  );
};

// KPI Card Component
const KPICard = ({ 
  kpi, 
  index, 
  isVisible 
}: { 
  kpi: typeof kpiData[0]; 
  index: number; 
  isVisible: boolean;
}) => {
  const animatedValue = useCountUp(kpi.numericValue, 1500, isVisible);
  const Icon = kpi.icon;

  return (
    <div 
      className={`bg-white rounded-2xl p-6 shadow-xl border border-gray-100 transition-all duration-700 hover:shadow-2xl hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${kpi.bgColor}`}>
          <Icon className={`w-6 h-6 ${kpi.iconColor}`} />
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${kpi.badgeBg} ${kpi.badgeText}`}>
          {kpi.trend}
        </div>
      </div>

      <div className="relative flex items-center justify-center mb-6">
        <RadialProgress 
          value={kpi.progress} 
          color={kpi.progressColor}
          isVisible={isVisible}
          size={140}
          strokeWidth={10}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-3xl font-bold ${kpi.valueColor}`}>
            {kpi.prefix}{animatedValue}{kpi.suffix}
          </span>
          <span className="text-xs text-gray-400 mt-1">{kpi.unit}</span>
        </div>
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{kpi.metric}</h3>
      <p className="text-sm text-gray-500 text-center leading-relaxed">{kpi.description}</p>
    </div>
  );
};

// KPI Data with enhanced structure
const kpiData = [
  { 
    metric: "SMB Pull-Through Lift", 
    numericValue: 20,
    prefix: "+",
    suffix: "%",
    unit: "avg increase",
    progress: 80,
    progressColor: "#10b981",
    description: "Increase in loan or credit card pull-through after eligibility display",
    icon: TrendingUp,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-600",
    valueColor: "text-emerald-600",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-700",
    trend: "↑ High Impact"
  },
  { 
    metric: "Default Risk Reduction", 
    numericValue: 9,
    prefix: "-",
    suffix: "%",
    unit: "avg drop",
    progress: 75,
    progressColor: "#3b82f6",
    description: "Modeled drop in high-risk approvals using multi-signal weighting",
    icon: Shield,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    valueColor: "text-blue-600",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-700",
    trend: "↓ Risk Down"
  },
  { 
    metric: "Decision Speed", 
    numericValue: 95,
    prefix: "",
    suffix: "%",
    unit: "faster",
    progress: 95,
    progressColor: "#8b5cf6",
    description: "Reduction in time-to-decision in monitored portfolios",
    icon: Clock,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    valueColor: "text-purple-600",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-700",
    trend: "⚡ Speed"
  },
  { 
    metric: "Net-New SMB Discovery", 
    numericValue: 15,
    prefix: "+",
    suffix: "%",
    unit: "newly identified",
    progress: 70,
    progressColor: "#f59e0b",
    description: "Increase in newly identified lendable SMBs not scored by legacy models",
    icon: Target,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-600",
    valueColor: "text-amber-600",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-700",
    trend: "🎯 Discovery"
  },
  { 
    metric: "Analyst Efficiency", 
    numericValue: 30,
    prefix: "+",
    suffix: "%",
    unit: "efficiency gain",
    progress: 85,
    progressColor: "#ec4899",
    description: "Fewer manual escalations due to explainable scorecards + override logs",
    icon: Users,
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    valueColor: "text-pink-600",
    badgeBg: "bg-pink-100",
    badgeText: "text-pink-700",
    trend: "📈 Productivity"
  }
];

// Timeline phases data
const timelinePhases = [
  { week: "1–2", title: "Kickoff", icon: Rocket, description: "Secure API integration & sandbox credentialing" },
  { week: "3–4", title: "Signal Activation", icon: Search, description: "Inject Identity, Banking, Bureau, Registry layers" },
  { week: "5–6", title: "Side-by-Side", icon: BarChart3, description: "Compare LumiqAI vs your internal score models" },
  { week: "7–8", title: "Score Tuning", icon: Brain, description: "Model fine-tuning, overrides, tier calibration" },
  { week: "9–10", title: "Live Sim", icon: Radio, description: "Shadow deployment with production-like volume" },
  { week: "11–12", title: "ROI + Decision", icon: FileText, description: "Final reporting, ROI dashboard, deployment plan" }
];

// Security items
const securityItems = [
  { title: "SOC 2 Type II", description: "Full certification package available for your review" },
  { title: "FCRA / ECOA Compliance", description: "SHAP-based reason codes + visual counterfactuals" },
  { title: "Pen Testing", description: "Annual red-team assessments (latest PDF available)" },
  { title: "Data Governance", description: "Immutable audit trail, override log, IP whitelist support" },
  { title: "Legal Docs", description: "LumiqAI MSA, DPA, Security Whitepaper (ready to review)" }
];

// ROI metrics
const roiMetrics = [
  { value: "+18%", label: "App Throughput", description: "Faster processing per application", icon: BarChart3 },
  { value: "-9.2%", label: "Default Risk", description: "More accurate pre-approval filtering", icon: Shield },
  { value: "+31%", label: "Analyst Efficiency", description: "Fewer manual overrides and escalations", icon: Activity },
  { value: "-95%", label: "Time-to-Decision", description: "From 6 min to 0.2 sec per app", icon: Zap }
];

// Signal engine cards
const signalCards = [
  { icon: User, title: "Identity Signals", description: "EIN match, phone/email triangulation, SSN variants" },
  { icon: Building, title: "Registry Signals", description: "SOS data, DUNS, LexisNexis checks, incorporation history" },
  { icon: Activity, title: "Banking Behavior", description: "Deposit velocity, NSF trends, account stacking detection" },
  { icon: CreditCard, title: "Bureau Credit", description: "Experian, Equifax, TransUnion Vantage and FICO overlays" },
  { icon: DollarSign, title: "Deposit Stability", description: "Cash flow vs fixed expenses, upcoming payroll buffers" }
];

// Pilot KPIs Section Component
const PilotKPIsSection = () => {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Target className="w-4 h-4" />
            Measurable Outcomes
          </div>
          <h2 
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            90-Day Bank Pilot Objectives
          </h2>
          <p 
            className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            LumiqAI pilots are built around measurable underwriting and routing outcomes. During the pilot, banks and credit teams receive full visibility into composite scores and near-approval bands.
          </p>
        </div>

        {/* KPI Grid - 5 cards in responsive layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {kpiData.slice(0, 3).map((kpi, index) => (
            <KPICard key={kpi.metric} kpi={kpi} index={index} isVisible={isVisible} />
          ))}
        </div>
        
        {/* Bottom row - 2 centered cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto mb-16">
          {kpiData.slice(3).map((kpi, index) => (
            <KPICard key={kpi.metric} kpi={kpi} index={index + 3} isVisible={isVisible} />
          ))}
        </div>

        {/* Footer CTA */}
        <div 
          className={`text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Banks conclude pilots with a signed expansion proposal or revert to visibility-only mode with no long-term commitment.
            </p>
            <a href="/contact">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6 text-lg font-medium group">
                Contact Sales
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Architecture data
const architectureLayers = [
  { 
    id: 'bank', 
    label: "Bank App / Portal", 
    icon: Building, 
    description: "Your existing digital banking interface",
    details: ["Mobile App", "Web Portal", "Business Banking"],
    color: "bg-slate-100",
    borderColor: "border-slate-300",
    iconBg: "bg-slate-200",
    iconColor: "text-slate-700"
  },
  { 
    id: 'gateway', 
    label: "LumiqAI API Gateway", 
    icon: Server, 
    description: "Secure entry point with rate limiting & auth",
    details: ["REST/GraphQL", "OAuth 2.0", "Rate Limiting"],
    color: "bg-blue-50",
    borderColor: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700"
  },
  { 
    id: 'scoring', 
    label: "Scoring Engine", 
    icon: Brain, 
    description: "Real-time composite credit scoring",
    details: ["ML Models", "340+ Signals", "Sub-100ms"],
    color: "bg-indigo-50",
    borderColor: "border-indigo-200",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-700"
  },
  { 
    id: 'signals', 
    label: "Signal Aggregator", 
    icon: Database, 
    description: "Multi-source data fusion layer",
    details: ["Bureau Data", "Banking Behavior", "Registry Checks"],
    color: "bg-purple-50",
    borderColor: "border-purple-200",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-700"
  },
  { 
    id: 'audit', 
    label: "Audit & Logging", 
    icon: FileText, 
    description: "Immutable compliance trail",
    details: ["FCRA Logs", "Override Tracking", "Explainability"],
    color: "bg-gray-50",
    borderColor: "border-gray-200",
    iconBg: "bg-gray-100",
    iconColor: "text-gray-700"
  }
];

const deploymentOptions = [
  { icon: Cloud, title: "VPC or On-Prem Compatible", description: "Private, isolated deployment", tag: "Infrastructure" },
  { icon: Lock, title: "Zero-Trust Encryption", description: "AES-256 at rest, TLS 1.3 in transit", tag: "Security" },
  { icon: Database, title: "No Data Stored Post-Session", description: "Stateless token architecture", tag: "Privacy" },
  { icon: Zap, title: "Latency-Optimized", description: "Sub-200ms average API response time", tag: "Performance" },
  { icon: Server, title: "Multi-Cloud Options", description: "AWS GovCloud / Azure Financial Cloud", tag: "Cloud" }
];

// Interactive Architecture Section Component
const ArchitectureSection = () => {
  const { ref, isVisible } = useInView(0.1);
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const [activeDeployment, setActiveDeployment] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Architecture & Deployment
          </h2>
          <p 
            className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Click on any component to explore the architecture
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Interactive Flow Diagram */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-200">
              <div className="text-sm font-medium text-gray-500 mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Data Flow Architecture
              </div>
              
              <div className="space-y-3">
                {architectureLayers.map((layer, index) => {
                  const Icon = layer.icon;
                  const isActive = activeLayer === layer.id;
                  
                  return (
                    <div key={layer.id}>
                      {/* Layer Card */}
                      <button
                        onClick={() => setActiveLayer(isActive ? null : layer.id)}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                          isActive 
                            ? `${layer.color} ${layer.borderColor} shadow-md` 
                            : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                            isActive ? layer.iconBg : 'bg-gray-100'
                          }`}>
                            <Icon className={`w-6 h-6 transition-colors ${
                              isActive ? layer.iconColor : 'text-gray-500'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900">{layer.label}</div>
                            <div className="text-sm text-gray-500">{layer.description}</div>
                          </div>
                          <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                            isActive ? 'rotate-180' : ''
                          }`} />
                        </div>
                        
                        {/* Expanded Details */}
                        <div className={`overflow-hidden transition-all duration-300 ${
                          isActive ? 'max-h-24 mt-4 pt-4 border-t border-gray-200' : 'max-h-0'
                        }`}>
                          <div className="flex flex-wrap gap-2">
                            {layer.details.map((detail, i) => (
                              <span 
                                key={i}
                                className={`px-3 py-1 rounded-full text-xs font-medium ${layer.iconBg} ${layer.iconColor}`}
                              >
                                {detail}
                              </span>
                            ))}
                          </div>
                        </div>
                      </button>
                      
                      {/* Connector Line */}
                      {index < architectureLayers.length - 1 && (
                        <div className="flex justify-center py-1">
                          <div className="flex flex-col items-center">
                            <div className={`w-0.5 h-3 transition-colors duration-300 ${
                              isActive || activeLayer === architectureLayers[index + 1]?.id 
                                ? 'bg-indigo-400' 
                                : 'bg-gray-300'
                            }`} />
                            <ArrowRight className={`w-4 h-4 rotate-90 transition-colors duration-300 ${
                              isActive || activeLayer === architectureLayers[index + 1]?.id 
                                ? 'text-indigo-400' 
                                : 'text-gray-300'
                            }`} />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Deployment Options */}
          <div 
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Deployment Options</h3>
            
            <div className="space-y-3">
              {deploymentOptions.map((option, index) => {
                const Icon = option.icon;
                const isActive = activeDeployment === index;
                
                return (
                  <button
                    key={index}
                    onClick={() => setActiveDeployment(isActive ? null : index)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                      isActive 
                        ? 'bg-indigo-50 border-indigo-200 shadow-md' 
                        : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isActive ? 'bg-indigo-100' : 'bg-gray-100'
                      }`}>
                        <Icon className={`w-6 h-6 transition-colors ${
                          isActive ? 'text-indigo-600' : 'text-gray-500'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-900">{option.title}</span>
                          <span className={`px-2 py-0.5 rounded text-xs font-medium transition-colors ${
                            isActive ? 'bg-indigo-200 text-indigo-700' : 'bg-gray-100 text-gray-600'
                          }`}>
                            {option.tag}
                          </span>
                        </div>
                        <div className={`text-sm transition-colors ${
                          isActive ? 'text-indigo-600' : 'text-gray-500'
                        }`}>
                          {option.description}
                        </div>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        isActive ? 'border-indigo-500 bg-indigo-500' : 'border-gray-300'
                      }`}>
                        {isActive && <CheckCircle2 className="w-4 h-4 text-white" />}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Summary Card */}
            <div className="mt-8 p-6 bg-gray-900 rounded-2xl text-white">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-green-400" />
                <span className="font-semibold">Enterprise-Ready</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                LumiqAI is designed for bank-grade security with SOC 2 Type II certification, 
                FCRA compliance, and zero data persistence post-session.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Decision matrix
const decisionMatrix = [
  { item: "Credit score used", bank: "Bank's scoring stack (FICO/Vantage/Business bureau overlays)", lumiq: "Composite visibility layer" },
  { item: "Loan decision", bank: "Bank underwriting systems + credit policy", lumiq: "Non-decisioning signals only" },
  { item: "Routing intelligence", bank: "Final approval routing", lumiq: "Policy-aware, geography-aware matching" },
  { item: "Pilot eligibility display", bank: "Hard pull for final approval", lumiq: "Soft-pull composite estimate" }
];

const PilotDeployment = () => {
  const [expandedSecurity, setExpandedSecurity] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <EngineNavbar />
      
      {/* Section 1: Hero - Premium Blended Dashboard Collage */}
      <section className="relative min-h-[720px] lg:min-h-screen overflow-hidden">
        {/* Layer A: Base gradient - charcoal to deep blue with soft spotlights */}
        <div 
          className="absolute inset-0"
          style={{ 
            background: `
              radial-gradient(1200px circle at 20% 15%, rgba(100,140,255,0.18), transparent 55%),
              radial-gradient(900px circle at 80% 20%, rgba(60,120,255,0.10), transparent 60%),
              linear-gradient(180deg, #070B12 0%, #0A1222 45%, #070B12 100%)
            `
          }} 
        />
        
        {/* Layer B: Vignette overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ 
            background: 'radial-gradient(closest-side at 50% 40%, transparent 55%, rgba(0,0,0,0.55) 100%)',
            opacity: 0.85
          }} 
        />
        
        {/* Layer C: Subtle grain/noise texture */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.08]"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }} 
        />
        
        {/* Layer D: Mist/haze band */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ 
            background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.04) 55%, transparent 100%)'
          }} 
        />

        {/* Main Content Container */}
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-8 pt-32 lg:pt-40 pb-24">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-[600px]">
            
            {/* Left Column - Text Stack */}
            <div className="order-2 lg:order-1 relative z-20">
              {/* Badge pill */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.08] backdrop-blur-sm rounded-full text-white/80 text-sm mb-[18px] border border-white/[0.08]"
                style={{ animation: 'heroFadeUp 0.7s ease-out forwards', opacity: 0 }}
              >
                <Rocket className="w-4 h-4" />
                90-Day Bank Pilot Program
              </div>
              
              {/* Headline */}
              <h1 
                className="text-[36px] md:text-[48px] lg:text-[60px] font-bold text-white mb-4 leading-[1.1] tracking-tight"
                style={{ 
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  animation: 'heroFadeUp 0.7s ease-out 0.1s forwards',
                  opacity: 0
                }}
              >
                LumiqAI for Banks
              </h1>
              
              {/* Paragraph */}
              <p 
                className="text-base md:text-lg text-white/65 mb-6 max-w-[520px] leading-[1.6]"
                style={{ animation: 'heroFadeUp 0.7s ease-out 0.2s forwards', opacity: 0 }}
              >
                Enterprise-grade credit intelligence built for banks. A 90-day, sandbox-safe pilot that increases SMB loan pull-through, reduces default risk, and embeds explainable composite scoring—without removing decision control from your bank.
              </p>
              
              {/* Feature checkmarks - two columns */}
              <div 
                className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8"
                style={{ animation: 'heroFadeUp 0.7s ease-out 0.3s forwards', opacity: 0 }}
              >
                {[
                  'API handshake in 72 hours',
                  'Pilot live in 2 weeks',
                  'ROI proven in 90 days',
                  'Full decision control',
                  'Sandbox-safe testing'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2.5 text-white/75">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div 
                className="flex flex-wrap gap-4"
                style={{ animation: 'heroFadeUp 0.7s ease-out 0.4s forwards', opacity: 0 }}
              >
                <a href="/contact">
                  <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-black/20">
                    Contact Sales
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Column - Blended Dashboard Collage */}
            <div 
              className="order-1 lg:order-2 relative h-[400px] sm:h-[450px] lg:h-[580px]"
              style={{ animation: 'heroFadeUp 0.8s ease-out 0.3s forwards', opacity: 0 }}
            >
              {/* Collage Wrapper with perspective */}
              <div className="hero-visual-collage absolute inset-0" style={{ perspective: '1200px' }}>
                
                {/* Layer 1: Base Blended Background Dashboard (BIG, FADED) */}
                <div 
                  className="absolute pointer-events-none"
                  style={{
                    right: '-120px',
                    bottom: '-90px',
                    width: '900px',
                    maxWidth: '140%',
                    transform: 'rotate(-10deg) skewX(-2deg) translateY(10px)',
                    opacity: 0.18,
                    filter: 'blur(3px) saturate(0.95) contrast(1.05)',
                    maskImage: 'radial-gradient(circle at 55% 45%, black 55%, transparent 90%)',
                    WebkitMaskImage: 'radial-gradient(circle at 55% 45%, black 55%, transparent 90%)',
                    animation: 'heroFloat 8s ease-in-out infinite alternate'
                  }}
                >
                  <img 
                    src="/dashboard.png" 
                    alt="" 
                    className="w-full h-auto rounded-2xl"
                    aria-hidden="true"
                  />
                </div>

                {/* Layer 2: Foreground Panel B (SECONDARY, behind Panel A) */}
                <div 
                  className="absolute dashboard-panel-b"
                  style={{
                    right: '-40px',
                    top: '60px',
                    width: 'clamp(380px, 55vw, 560px)',
                    transform: 'rotate(-10deg) translateY(10px) scale(0.95)',
                    opacity: 0.88,
                    zIndex: 10,
                    animation: 'heroFloat 7s ease-in-out 0.5s infinite alternate'
                  }}
                >
                  <div 
                    className="relative rounded-[18px] overflow-hidden"
                    style={{
                      border: '1px solid rgba(255,255,255,0.08)',
                      background: 'rgba(10,18,34,0.35)',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 8px 20px rgba(0,0,0,0.3)'
                    }}
                  >
                    {/* Window chrome bar */}
                    <div className="bg-[#1a1f2e]/90 px-4 py-2.5 flex items-center gap-2 border-b border-white/[0.06]">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
                      </div>
                      <span className="text-[10px] text-white/40 ml-2 font-medium">Credit Analytics</span>
                    </div>
                    <img 
                      src="/dashboard.png" 
                      alt="Credit Analytics Dashboard" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Layer 3: Foreground Panel A (SHARP, PRIMARY - on top) */}
                <div 
                  className="absolute dashboard-panel-a"
                  style={{
                    right: '40px',
                    top: '150px',
                    width: 'clamp(420px, 58vw, 620px)',
                    transform: 'rotate(-10deg) perspective(1200px) rotateY(-8deg) rotateX(2deg)',
                    zIndex: 20,
                    animation: 'heroFloat 6s ease-in-out infinite alternate'
                  }}
                >
                  <div 
                    className="relative rounded-[20px] overflow-hidden"
                    style={{
                      border: '1px solid rgba(255,255,255,0.10)',
                      background: 'rgba(10,18,34,0.40)',
                      boxShadow: '0 28px 80px rgba(0,0,0,0.55), 0 10px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.10)'
                    }}
                  >
                    {/* Window chrome bar */}
                    <div className="bg-[#1a1f2e]/95 px-4 py-2.5 flex items-center gap-2 border-b border-white/[0.08]">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
                      </div>
                      <span className="text-[10px] text-white/40 ml-2 font-medium">LumiqAI Dashboard</span>
                    </div>
                    <img 
                      src="/mockups/lumiq-underwriting.jpg" 
                      alt="LumiqAI Dashboard" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Layer 4: Bottom Surface Reflection / Dock Panel */}
                <div 
                  className="absolute pointer-events-none"
                  style={{
                    right: '-140px',
                    bottom: '-30px',
                    width: '800px',
                    maxWidth: '130%',
                    opacity: 0.24,
                    filter: 'blur(1.5px)',
                    transform: 'rotate(-8deg)',
                    maskImage: 'linear-gradient(to top, transparent 10%, black 40%, transparent 90%), linear-gradient(to right, transparent 5%, black 30%, black 70%, transparent 95%)',
                    WebkitMaskImage: 'linear-gradient(to top, transparent 10%, black 40%, transparent 90%), linear-gradient(to right, transparent 5%, black 30%, black 70%, transparent 95%)',
                    maskComposite: 'intersect',
                    WebkitMaskComposite: 'source-in',
                    animation: 'heroFloat 10s ease-in-out 1s infinite alternate'
                  }}
                >
                  <img 
                    src="/dashboard.png" 
                    alt="" 
                    className="w-full h-auto rounded-xl"
                    aria-hidden="true"
                  />
                </div>

                {/* Atmosphere Overlay: Soft fog layer */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `
                      radial-gradient(circle at 30% 30%, rgba(255,255,255,0.08), transparent 60%),
                      radial-gradient(circle at 70% 60%, rgba(90,140,255,0.08), transparent 65%)
                    `,
                    opacity: 0.4,
                    zIndex: 25
                  }}
                />

                {/* Edge fade overlay for blending */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 60% 50%, transparent 45%, rgba(7,11,18,0.6) 100%)',
                    opacity: 0.55,
                    zIndex: 26
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* CSS Animations */}
        <style>{`
          @keyframes heroFadeUp {
            from {
              opacity: 0;
              transform: translateY(12px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes heroFloat {
            from {
              transform: translateY(0px) rotate(-10deg);
            }
            to {
              transform: translateY(-8px) rotate(-10deg);
            }
          }
          
          .dashboard-panel-a {
            transition: transform 0.4s ease-out;
          }
          
          .dashboard-panel-b {
            transition: transform 0.4s ease-out;
          }
          
          @media (max-width: 1024px) {
            .hero-visual-collage {
              transform: scale(0.85);
              transform-origin: center center;
            }
          }
          
          @media (max-width: 768px) {
            .hero-visual-collage {
              transform: scale(0.7);
              transform-origin: center top;
            }
            
            .dashboard-panel-a,
            .dashboard-panel-b {
              transform: rotate(-6deg) !important;
            }
          }
        `}</style>
      </section>

      {/* Section 2: The Leakage Problem */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why National Banks Are Losing SMB Conversions
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Chase, Citi, Capital One, Wells Fargo, TD, and other national banks lead consumer credit visibility, yet none surface business credit scores or product eligibility for SMBs inside their apps.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              SMB customers searching for funding or credit products face a visibility gap: they can view personal credit scores in-app, but must leave the banking ecosystem to evaluate business lending options. This creates measurable leakage into fintech and regional bank partners that offer faster embedded experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { value: "33.3M", label: "U.S. Small Businesses", description: "Total SMB market size" },
              { value: "80M+", label: "Consumer App Users", description: "Chase Credit Journey user base" },
              { value: "15–40%", label: "Drop-off Rate", description: "When eligibility not surfaced in-app" },
              { value: "$50B+", label: "Annual Leakage", description: "Re-originated SMB credit via fintechs" }
            ].map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                  <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <p className="text-xl font-medium">
              Lack of SMB credit visibility is not a minor UX gap. It directly impacts pull-through, retention, and credit product revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: 90-Day Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              90-Day Pilot Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              LumiqAI deploys in under 2 weeks. Your underwriting becomes predictive, explainable, and regulation-ready in 90 days flat.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 -translate-y-1/2" />
            
            <div className="grid lg:grid-cols-6 gap-6">
              {timelinePhases.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <div key={index} className="relative group">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white mb-4 mx-auto group-hover:scale-110 transition-transform">
                          <Icon className="w-7 h-7" />
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-indigo-600 mb-1">Week {phase.week}</div>
                          <div className="font-bold text-gray-900 mb-2">{phase.title}</div>
                          <div className="text-sm text-gray-500">{phase.description}</div>
                        </div>
                      </CardContent>
                    </Card>
                    {/* Timeline dot */}
                    <div className="hidden lg:block absolute -bottom-4 left-1/2 w-4 h-4 bg-white border-4 border-indigo-500 rounded-full -translate-x-1/2 z-10" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Pilot KPIs - Animated Radial Meters */}
      <PilotKPIsSection />

      {/* Section 5: Interactive Architecture Diagram */}
      <ArchitectureSection />

      {/* Section 6: Security & Compliance */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built to Pass Bank Risk Review
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              LumiqAI architecture is evaluated under Third-Party Risk Management (TPRM) standards. Banks receive immediate artifact packs and transparency into IAM, encryption, logging, and model explainability.
            </p>
          </div>

          {/* Security highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {[
              { label: "AES-256", desc: "Encryption at rest" },
              { label: "TLS 1.2+", desc: "Transport encryption" },
              { label: "SAML/SCIM", desc: "Identity + Access" },
              { label: "Immutable", desc: "Audit logs" },
              { label: "Zero PII", desc: "Outside approved zones" }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                <div className="text-2xl font-bold text-indigo-400 mb-1">{item.label}</div>
                <div className="text-sm text-white/60">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Accordion */}
          <div className="max-w-3xl mx-auto space-y-4">
            {securityItems.map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedSecurity(expandedSecurity === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <Shield className="w-6 h-6 text-indigo-400" />
                    <span className="font-semibold text-lg">{item.title}</span>
                  </div>
                  {expandedSecurity === index ? (
                    <ChevronUp className="w-5 h-5 text-white/60" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/60" />
                  )}
                </button>
                {expandedSecurity === index && (
                  <div className="px-6 pb-6 text-white/70 animate-fade-in">
                    {item.description}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/contact">
              <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold">
                Contact Sales
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Section 7: Decision Ownership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Who Determines Score vs Who Decides Credit
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Banks retain full decision authority. LumiqAI provides composite scoring visibility, pre-approval bands, and routing intelligence, while final underwriting decisions and credit policies remain inside the bank.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-4 font-semibold text-gray-900 border-b">Function</th>
                  <th className="text-left p-4 font-semibold text-gray-900 border-b">Bank Responsibility</th>
                  <th className="text-left p-4 font-semibold text-gray-900 border-b">LumiqAI Role</th>
                </tr>
              </thead>
              <tbody>
                {decisionMatrix.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-medium text-gray-900 border-b">{row.item}</td>
                    <td className="p-4 text-gray-600 border-b">{row.bank}</td>
                    <td className="p-4 text-indigo-600 border-b">{row.lumiq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 text-center">
            <p className="text-xl font-medium text-gray-800 mb-6">
              Banks approve pilots because decision control is not outsourced—only intelligence and visibility are enhanced.
            </p>
            <a href="/contact">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6">
                Contact Sales
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Section 8: ROI Dashboard */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #0a0d1c 0%, #1a1f3a 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ROI Dashboard + Metrics Snapshot
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Pilot results that drive expansion decisions
            </p>
          </div>

          {/* Laptop + Side Screens Mockup */}
          <div className="relative flex items-center justify-center gap-4 lg:gap-8 px-4">
            {/* Left floating screen */}
            <div className="hidden md:block relative w-64 lg:w-80 -mr-8 lg:-mr-12 z-0 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200">
                <div className="bg-gray-100 px-3 py-2 flex items-center gap-2 border-b border-gray-200">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-xs text-gray-500 ml-2">Risk Intelligence</span>
                </div>
                <img 
                  src="/mockups/risk-intelligence.jpg" 
                  alt="Risk Intelligence" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Center laptop */}
            <div className="relative z-10 w-full max-w-xl lg:max-w-2xl">
              {/* Laptop frame */}
              <div className="relative">
                {/* Screen bezel */}
                <div className="bg-gray-800 rounded-t-2xl p-2 pb-0">
                  {/* Camera notch */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full"></div>
                  {/* Screen */}
                  <div className="bg-white rounded-t-lg overflow-hidden">
                    <div className="bg-gray-100 px-4 py-2 flex items-center gap-2 border-b border-gray-200">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <span className="text-sm text-gray-500 ml-3">LumiqAI Analytics</span>
                    </div>
                    <img 
                      src="/mockups/lumiq-dashboard.jpg" 
                      alt="LumiqAI Dashboard" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                {/* Laptop base */}
                <div className="bg-gradient-to-b from-gray-700 to-gray-800 h-4 rounded-b-lg"></div>
                <div className="bg-gradient-to-b from-gray-600 to-gray-700 h-2 mx-12 rounded-b-xl"></div>
                {/* Trackpad indent */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-500 rounded-full opacity-50"></div>
              </div>
            </div>

            {/* Right floating screen */}
            <div className="hidden md:block relative w-64 lg:w-80 -ml-8 lg:-ml-12 z-0 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200">
                <div className="bg-gray-100 px-3 py-2 flex items-center gap-2 border-b border-gray-200">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-xs text-gray-500 ml-2">Conversion Lift</span>
                </div>
                <img 
                  src="/mockups/conversion-lift.jpg" 
                  alt="Conversion Lift" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Smaller metric boxes */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {roiMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={index} className="border-0 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <CardContent className="p-4 text-center">
                    <div className="flex justify-center mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-sm font-semibold text-indigo-400 mb-0.5">{metric.label}</div>
                    <div className="text-xs text-white/50">{metric.description}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 9: Signal Engine */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Data That Powers LumiqAI Composite Scores
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              LumiqAI uses 5 core signal classes to compute composite scores for SMB eligibility and underwriting confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {signalCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white group relative overflow-hidden">
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="font-bold text-gray-900 mb-2">{card.title}</div>
                    <div className="text-sm text-gray-500">{card.description}</div>
                  </CardContent>
                  {/* Pulse animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/5 to-indigo-500/0 opacity-0 group-hover:opacity-100 animate-pulse-ring" />
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <a href="/contact">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6 text-lg">
                Contact Sales
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Section 10: IT & Dev Notes */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How LumiqAI Sits in Your Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              LumiqAI deploys as a secure API or embedded widget inside bank-owned environments. The pilot includes production-like simulation volumes, dashboard access, reason code generation, and composite score visibility.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Code block */}
            <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-white/60 text-sm font-mono">API Request</span>
              </div>
              <pre className="text-sm text-white/90 font-mono overflow-x-auto">
{`POST /underwriting/score

Headers:
  Authorization: Bearer {API_KEY}
  Content-Type: application/json

Payload:
{
  "SSN": "xxx-xx-xxxx",
  "DOB": "1985-03-15",
  "EIN": "xx-xxxxxxx",
  "BankData": {
    "accountId": "...",
    "depositHistory": [...]
  }
}`}
              </pre>
            </div>

            {/* Technical highlights */}
            <div className="space-y-6">
              {[
                { icon: Code, title: "SDKs Available", description: "Python, Node, Java, iOS, Android" },
                { icon: Lock, title: "Auth Support", description: "OAuth2 and JWT supported" },
                { icon: Zap, title: "Rate Limit", description: "5K req/min standard, 50K req/min available" },
                { icon: FileCode, title: "IAM Integration", description: "Logs + override trails included by default" },
                { icon: Terminal, title: "Quick Setup", description: "< 2 engineering hours for sandbox" }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{item.title}</div>
                      <div className="text-gray-500">{item.description}</div>
                    </div>
                  </div>
                );
              })}

              <div className="flex gap-4 pt-4">
                <a href="/contact">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6">
                    Contact Sales
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Final CTA */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #140036 0%, #000f4d 50%, #001a66 100%)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the 2026 Bank Pilot Cohort
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Pilot term: 90 days. Sandbox-safe. KPI-aligned. No long-term obligation. Convert to production only if ROI is achieved.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-white/20">
            <div className="text-white/80 mb-6">Pilot Includes:</div>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {[
                "Full stack access to Signal Engine",
                "Custom score tuning",
                "Compliance & legal readiness",
                "Weekly calls and a dedicated deployment manager"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <a href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full px-10 py-7 text-lg font-semibold">
                Contact Sales
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PilotDeployment;
