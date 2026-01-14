import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight,
  CheckCircle,
  Download,
  TrendingUp,
  Users,
  BarChart3,
  Zap,
  Lock,
  ShieldCheck,
  Code,
  Clock,
  ChevronRight,
  Layers,
  Target,
  Building2,
  CreditCard,
  Eye,
  FileText,
  Server,
  Database,
  Brain,
  Rocket,
  Calendar,
  Play,
  ArrowDown,
  Check,
  Smartphone,
  Globe,
  Shield
} from 'lucide-react';
import EngineNavbar from '@/components/EngineNavbar';
import Footer from '@/components/Footer';

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

// Hero Section
const HeroSection = () => {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section 
      ref={ref} 
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/how-it-works-hero.jpg')` }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            The Credit Journey—<br />
            <span className="text-[#38BDF8]">
              Built for Business Banking
            </span>
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Just as Chase Credit Journey transformed consumer credit visibility, LumiqAI delivers the same experience for SMB banking—embedded, real-time, and conversion-ready.
          </p>
          
          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <a href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-6 text-base rounded-full font-semibold group"
              >
                Contact Sales
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Parallel to Consumer Credit Journey Section
const ParallelJourneySection = () => {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0891B2]/10 text-[#0891B2] text-sm font-medium mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <Layers className="h-4 w-4" />
            Platform Positioning
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            The SMB Equivalent of Chase Credit Journey
          </h2>
          <p className={`text-lg text-gray-600 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Chase's Credit Journey serves 80M+ consumers with in-app credit visibility. LumiqAI brings that same transformative experience to the 33M+ small businesses that banks currently underserve.
          </p>
        </div>

        {/* Comparison Table */}
        <div className={`bg-gray-50 rounded-3xl overflow-hidden transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid lg:grid-cols-2">
            {/* Consumer Side */}
            <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Consumer Credit Journey</h3>
                  <p className="text-sm text-gray-500">What Chase built for consumers</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  "Personal credit score in-app (VantageScore/FICO)",
                  "Credit monitoring alerts",
                  "Pre-qualified credit card offers",
                  "Score simulator for actions",
                  "80M+ users engaged"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-xl">
                <p className="text-sm text-blue-700 font-medium">
                  Result: 47% lift in credit card applications, industry-leading retention
                </p>
              </div>
            </div>

            {/* SMB Side - LumiqAI */}
            <div className="p-8 lg:p-12 bg-gradient-to-br from-[#0891B2]/5 to-[#38BDF8]/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0891B2] flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">LumiqAI for SMB Banking</h3>
                  <p className="text-sm text-gray-500">What we built for businesses</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  "Business + owner credit composite in-app",
                  "Eligibility estimates before application",
                  "Product matching (LOC, Term Loans, SBA)",
                  "Improvement guidance for denied SMBs",
                  "33M+ SMBs addressable market"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#0891B2] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-[#0891B2]/10 rounded-xl">
                <p className="text-sm text-[#0891B2] font-medium">
                  Result: +27% loan app starts, +41% denied user retention
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bank Examples */}
        <div className={`mt-16 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-xl font-semibold text-gray-900 text-center mb-8">Where LumiqAI Embeds</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: Smartphone, 
                title: "Mobile Banking Apps", 
                description: "Business banking section of Chase, Wells Fargo, Citi mobile apps",
                example: "e.g., Chase Business app → Credit tab"
              },
              { 
                icon: Globe, 
                title: "Online Banking Portals", 
                description: "SMB dashboards and business customer portals",
                example: "e.g., Wells Fargo Business Online"
              },
              { 
                icon: CreditCard, 
                title: "Lending Applications", 
                description: "Pre-qualification flows for business credit products",
                example: "e.g., SBA loan pre-approval pages"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#38BDF8]/40 hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                  <item.icon className="h-5 w-5 text-gray-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                <p className="text-xs text-[#0891B2] font-medium">{item.example}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Credit Visibility & Conversion Impact Section
const ImpactSection = () => {
  const { ref, isVisible } = useInView(0.1);

  const metrics = [
    { value: 27, suffix: "%", prefix: "+", label: "Loan App Starts", description: "SMBs who see eligibility apply more" },
    { value: 36, suffix: "%", prefix: "+", label: "Session Engagement", description: "Time spent in business banking section" },
    { value: 41, suffix: "%", prefix: "", label: "Denied User Return", description: "Rejected SMBs who come back after guidance" },
    { value: 95, suffix: "%", prefix: "", label: "Faster Decisioning", description: "Reduction in time-to-decision" }
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              <TrendingUp className="h-4 w-4" />
              Measurable Impact
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              What Credit Visibility Does for SMB Conversions
            </h2>
            <p className={`text-lg text-gray-400 mb-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              When SMBs can see their credit standing and product eligibility <strong className="text-white">before</strong> applying, conversion rates increase dramatically. No more blind applications or surprise rejections.
            </p>

            <div className={`space-y-6 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {[
                { title: "Visibility → Confidence", text: "SMBs who see their score are 3× more likely to complete applications" },
                { title: "Eligibility → Action", text: "Pre-qualified offers convert at 47% vs 12% for blind applications" },
                { title: "Guidance → Retention", text: "Denied users given improvement paths return at 4× the rate" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Metrics Grid */}
          <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            {metrics.map((metric, i) => {
              const count = useCountUp(metric.value, 2000, isVisible);
              return (
                <div 
                  key={i} 
                  className="bg-gray-800/50 backdrop-blur rounded-2xl p-6 border border-gray-700/50 hover:border-emerald-500/30 transition-all"
                >
                  <p className="text-4xl font-bold text-white mb-2">
                    {metric.prefix}{count}{metric.suffix}
                  </p>
                  <p className="font-medium text-white mb-1">{metric.label}</p>
                  <p className="text-sm text-gray-500">{metric.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Build & Deployment Timeline Section
const TimelineSection = () => {
  const { ref, isVisible } = useInView(0.1);

  const phases = [
    { 
      week: "Week 1-2", 
      title: "API Integration",
      tasks: ["Sandbox credentials issued", "API handshake complete", "Test environment ready"],
      icon: Code
    },
    { 
      week: "Week 3-4", 
      title: "Signal Activation",
      tasks: ["Bureau connections live", "Banking behavior signals", "Registry data flowing"],
      icon: Database
    },
    { 
      week: "Week 5-6", 
      title: "UI Embedding",
      tasks: ["Widget integration", "Score display configured", "Eligibility rules mapped"],
      icon: Layers
    },
    { 
      week: "Week 7-8", 
      title: "Testing & QA",
      tasks: ["Side-by-side scoring", "Edge case validation", "Compliance review"],
      icon: Shield
    },
    { 
      week: "Week 9-10", 
      title: "Pilot Launch",
      tasks: ["Shadow mode deployment", "A/B test groups", "Real-time monitoring"],
      icon: Rocket
    },
    { 
      week: "Week 11-12", 
      title: "Full Rollout",
      tasks: ["Production deployment", "ROI reporting", "Expansion planning"],
      icon: Target
    }
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0891B2]/10 text-[#0891B2] text-sm font-medium mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <Calendar className="h-4 w-4" />
            Implementation
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#0F172A] mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            90-Day End-to-End Deployment
          </h2>
          <p className={`text-lg text-[#64748B] transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Based on how Chase built Credit Journey over 18+ months, we've productized the same capabilities into a plug-and-play platform deployable in 90 days.
          </p>
        </div>

        {/* Comparison Banner */}
        <div className={`bg-[#0A0E17] rounded-2xl p-6 mb-12 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white border-b md:border-b-0 md:border-r border-[#1E293B] pb-6 md:pb-0 md:pr-8">
              <p className="text-sm text-[#64748B] mb-1">Chase Credit Journey (Internal Build)</p>
              <p className="text-2xl font-bold">18+ months, dedicated team of 50+</p>
            </div>
            <div className="text-white md:pl-8">
              <p className="text-sm text-[#64748B] mb-1">LumiqAI for SMB (Plug & Play)</p>
              <p className="text-2xl font-bold text-[#38BDF8]">90 days, dedicated implementation team</p>
            </div>
          </div>
        </div>

        {/* Timeline - Clean horizontal steps without circles */}
        <div className={`relative transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Progress bar */}
          <div className="hidden lg:block absolute top-0 left-0 right-0 h-1 bg-[#E2E8F0] rounded-full" />
          <div className="hidden lg:block absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0891B2] via-[#38BDF8] to-[#0891B2]/30 rounded-full" />
          
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 lg:pt-8">
            {phases.map((phase, i) => {
              const Icon = phase.icon;
              return (
                <div key={i} className="relative">
                  <div className="bg-white rounded-xl p-5 h-full border border-[#E2E8F0] hover:border-[#38BDF8]/40 hover:shadow-lg transition-all">
                    <div className="w-10 h-10 rounded-lg bg-[#0891B2]/10 flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-[#0891B2]" />
                    </div>
                    <p className="text-xs font-semibold text-[#0891B2] mb-1">{phase.week}</p>
                    <h4 className="font-bold text-[#0F172A] mb-3 text-sm">{phase.title}</h4>
                    <ul className="space-y-2">
                      {phase.tasks.map((task, j) => (
                        <li key={j} className="text-xs text-[#64748B] flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full bg-[#0891B2] mt-1.5 flex-shrink-0" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// API Section - Fixed container sizing
const APISection = () => {
  const { ref, isVisible } = useInView(0.2);
  const [activeTab, setActiveTab] = useState<'request' | 'response'>('request');

  const requestCode = `POST /v1/credit/score HTTP/1.1
Host: api.lumiqai.com
Authorization: Bearer sk_live_xxx

{
  "business_ein": "12-3456789",
  "owner_ssn_last4": "1234",
  "products": ["loc", "term_loan"]
}`;

  const responseCode = `{
  "composite_score": 712,
  "tier": "A",
  "eligibility": [
    { "product": "loc", "status": "eligible" },
    { "product": "term_loan", "status": "review" }
  ],
  "latency_ms": 87
}`;

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#0A0E17]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/20 text-[#38BDF8] text-sm font-medium mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              <Code className="h-4 w-4" />
              Developer Experience
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Production-Ready API
            </h2>
            <p className={`text-lg text-gray-400 mb-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              One API call. 340+ signals processed. Composite score returned in under 100ms. Built for the performance standards banks expect.
            </p>
            
            <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {[
                { icon: Zap, label: "Sub-100ms", sublabel: "Response time" },
                { icon: Lock, label: "OAuth 2.0", sublabel: "Authentication" },
                { icon: FileText, label: "OpenAPI", sublabel: "Spec included" },
                { icon: Code, label: "SDKs", sublabel: "Python, Node, Java" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-[#1E293B]/50 rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-[#38BDF8]/20 flex items-center justify-center">
                    <item.icon className="h-4 w-4 text-[#38BDF8]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{item.label}</p>
                    <p className="text-xs text-[#64748B]">{item.sublabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Code Preview with FIXED HEIGHT */}
          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="bg-[#1E293B] rounded-2xl overflow-hidden border border-[#334155]">
              <div className="flex items-center gap-1 px-4 py-3 border-b border-[#334155] bg-[#1E293B]/50">
                <button
                  onClick={() => setActiveTab('request')}
                  className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'request' ? 'bg-[#38BDF8]/20 text-[#38BDF8]' : 'text-[#64748B] hover:text-gray-300'
                  }`}
                >
                  Request
                </button>
                <button
                  onClick={() => setActiveTab('response')}
                  className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'response' ? 'bg-[#38BDF8]/20 text-[#38BDF8]' : 'text-[#64748B] hover:text-gray-300'
                  }`}
                >
                  Response
                </button>
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-emerald-400">87ms</span>
                </div>
              </div>
              
              {/* Code Block - FIXED HEIGHT */}
              <div className="p-5 h-[280px] overflow-auto">
                <pre className="text-sm font-mono text-gray-300 whitespace-pre">
                  {activeTab === 'request' ? requestCode : responseCode}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Data Flow Diagram Section
const DataFlowSection = () => {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <Layers className="h-4 w-4" />
            Architecture
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            How Data Flows Through LumiqAI
          </h2>
        </div>

        {/* Beautiful Flow Diagram */}
        <div className={`relative transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* Main Flow Container */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-8 lg:p-12">
            
            {/* Row 1: SMB Request */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900">SMB User</p>
                  <p className="text-sm text-gray-500">Requests credit visibility</p>
                </div>
              </div>
              
              <ArrowRight className="h-6 w-6 text-gray-300 rotate-90 lg:rotate-0" />
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0891B2] to-[#38BDF8] flex items-center justify-center shadow-lg">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900">Bank App</p>
                  <p className="text-sm text-gray-500">Mobile / Web portal</p>
                </div>
              </div>
              
              <ArrowRight className="h-6 w-6 text-gray-300 rotate-90 lg:rotate-0" />
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg">
                  <Server className="h-8 w-8 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900">LumiqAI Gateway</p>
                  <p className="text-sm text-gray-500">API endpoint</p>
                </div>
              </div>
            </div>

            {/* Divider with Arrow */}
            <div className="flex justify-center mb-8">
              <ArrowDown className="h-8 w-8 text-teal-500" />
            </div>

            {/* Row 2: Signal Sources */}
            <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-6 mb-8">
              <p className="text-center text-sm font-semibold text-teal-700 mb-4">Signal Aggregation Layer</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: CreditCard, label: "Bureau Data", sublabel: "Experian, Equifax, TransUnion" },
                  { icon: Building2, label: "Registry Data", sublabel: "SOS, DUNS, LexisNexis" },
                  { icon: BarChart3, label: "Banking Behavior", sublabel: "Deposits, NSFs, Velocity" },
                  { icon: Eye, label: "Identity Signals", sublabel: "EIN, Phone, Email" }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 text-center border border-teal-100">
                    <item.icon className="h-6 w-6 text-teal-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                    <p className="text-xs text-gray-500">{item.sublabel}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider with Arrow */}
            <div className="flex justify-center mb-8">
              <ArrowDown className="h-8 w-8 text-[#0891B2]" />
            </div>

            {/* Row 3: Processing */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 mb-8">
              <div className="bg-gradient-to-br from-[#0891B2]/10 to-[#38BDF8]/10 rounded-2xl p-6 flex items-center gap-4 border border-[#0891B2]/20">
                <div className="w-12 h-12 rounded-xl bg-[#0891B2] flex items-center justify-center">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Scoring Engine</p>
                  <p className="text-sm text-gray-500">340+ signals → Composite score</p>
                </div>
              </div>
              
              <ArrowRight className="h-6 w-6 text-gray-300 rotate-90 lg:rotate-0" />
              
              <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-6 flex items-center gap-4 border border-orange-200">
                <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Eligibility Mapper</p>
                  <p className="text-sm text-gray-500">Score → Product matching</p>
                </div>
              </div>
            </div>

            {/* Divider with Arrow */}
            <div className="flex justify-center mb-8">
              <ArrowDown className="h-8 w-8 text-emerald-500" />
            </div>

            {/* Row 4: Output */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 text-center text-white">
              <div className="flex items-center justify-center gap-3 mb-2">
                <CheckCircle className="h-6 w-6" />
                <p className="font-bold text-lg">Response Delivered in &lt;100ms</p>
              </div>
              <p className="text-emerald-100">Composite score + Tier + Eligibility + Factor codes → Bank UI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced CTA Section
const CTASection = () => {
  const { ref, isVisible } = useInView(0.2);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#0A0E17] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#0891B2]/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#38BDF8]/20 rounded-full blur-3xl" />
          
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-10 lg:p-16 border border-white/10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                Ready to bring Credit Journey to your SMB customers?
              </h2>
              
              <p className={`text-xl text-gray-300 mb-4 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                Join the banks who are closing the SMB visibility gap.
              </p>
              
              <p className={`text-gray-400 mb-10 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                90-day deployment • No long-term commitment required • Sandbox available on request
              </p>

              <div className={`flex justify-center mb-12 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <a href="/contact">
                  <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-7 text-lg rounded-full font-semibold group shadow-xl">
                    Contact Sales
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>

              {/* Trust indicators */}
              <div className={`flex flex-wrap justify-center gap-6 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                {[
                  { icon: ShieldCheck, text: "SOC 2 Type II Ready" },
                  { icon: Lock, text: "Bank-Grade Encryption" },
                  { icon: Clock, text: "Sub-100ms Latency" },
                  { icon: CheckCircle, text: "FCRA Compliant" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                    <item.icon className="h-4 w-4 text-[#38BDF8]" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Page Component
const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-white">
      <EngineNavbar />
      <HeroSection />
      <ParallelJourneySection />
      <ImpactSection />
      <TimelineSection />
      <APISection />
      <DataFlowSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HowItWorks;