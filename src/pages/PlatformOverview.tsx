import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  Brain, 
  RefreshCw, 
  MessageSquare, 
  Shield, 
  ArrowRight,
  Database,
  BarChart3,
  FileCode,
  Building2,
  CreditCard,
  Users,
  Activity,
  Clock,
  Layers,
  ChevronRight,
  HelpCircle,
  BookOpen,
  Code,
  Zap,
  Check,
  TrendingUp,
  Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import EngineNavbar from '@/components/EngineNavbar';
import Footer from '@/components/Footer';

// Hero Section - GoCardless Dark Style with Interactive Cards
const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true });

  return (
    <section 
      ref={heroRef} 
      className="pt-32 pb-24 overflow-hidden relative"
      style={{
        backgroundImage: 'url(/platform-hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
              SMB credit intelligence
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-8 leading-relaxed max-w-lg">
              Multi-source signals that help banks approve earlier and retain longer.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-[#1d1d1f] hover:bg-[#f5f5f7] rounded-full px-8 font-medium">
                  Contact Sales
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
          
          {/* Right - Interactive Cards Stack */}
          <motion.div 
            className="relative h-[420px] lg:h-[380px]"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Decisioning Card */}
            <div className="absolute top-0 right-0 w-56 lg:w-64 bg-[#2d2d2f] rounded-2xl p-5 border border-[#424245] z-30">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#3d3d3f] rounded-lg flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#34c759]" />
                </div>
                <span className="text-white font-medium">Decisioning</span>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-[#a1a1a6]">
                  <div className="w-1.5 h-1.5 bg-[#34c759] rounded-full" />
                  Identity verified
                </li>
                <li className="flex items-center gap-2 text-[#a1a1a6]">
                  <div className="w-1.5 h-1.5 bg-[#34c759] rounded-full" />
                  Registry active
                </li>
                <li className="flex items-center gap-2 text-[#a1a1a6]">
                  <div className="w-1.5 h-1.5 bg-[#34c759] rounded-full" />
                  Stable behavior
                </li>
              </ul>
              <div className="mt-4">
                <span className="inline-block px-3 py-1 bg-[#34c759]/20 text-[#34c759] text-xs font-medium rounded-full">
                  Approve earlier
                </span>
              </div>
            </div>

            {/* Credit Intel Card */}
            <div className="absolute top-32 left-0 w-60 lg:w-72 bg-[#2d2d2f] rounded-2xl p-5 border border-[#424245] z-20">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#3d3d3f] rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-[#0a84ff]" />
                </div>
                <span className="text-white font-medium">Credit Intel</span>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-[#a1a1a6]">
                  <div className="w-1.5 h-1.5 bg-[#0a84ff] rounded-full" />
                  Biz credit in-app
                </li>
                <li className="flex items-center gap-2 text-[#a1a1a6]">
                  <div className="w-1.5 h-1.5 bg-[#0a84ff] rounded-full" />
                  Personal credit in-app
                </li>
                <li className="flex items-center gap-2 text-[#a1a1a6]">
                  <div className="w-1.5 h-1.5 bg-[#0a84ff] rounded-full" />
                  No redirect, no churn
                </li>
              </ul>
              <div className="mt-4">
                <span className="inline-block px-3 py-1 bg-[#0a84ff]/20 text-[#0a84ff] text-xs font-medium rounded-full">
                  Retention lift
                </span>
              </div>
            </div>

            {/* Readiness Card */}
            <div className="absolute bottom-0 right-4 lg:right-8 w-56 lg:w-64 bg-[#2d2d2f] rounded-2xl p-5 border border-[#424245] z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#3d3d3f] rounded-lg flex items-center justify-center">
                  <Layers className="w-4 h-4 text-[#ff9f0a]" />
                </div>
                <span className="text-white font-medium">Readiness</span>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-[#a1a1a6]">
                  <div className="w-1.5 h-1.5 bg-[#ff9f0a] rounded-full" />
                  Track approval progress
                </li>
                <li className="flex items-center gap-2 text-[#a1a1a6]">
                  <div className="w-1.5 h-1.5 bg-[#ff9f0a] rounded-full" />
                  Know next eligibility
                </li>
              </ul>
              <div className="mt-4">
                <span className="inline-block px-3 py-1 bg-[#ff9f0a]/20 text-[#ff9f0a] text-xs font-medium rounded-full">
                  Earned limits
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Product Grid - Apple Style Icons
const ProductGridSection = () => {
  const products = [
    { icon: Brain, name: "Intelligence", href: "#intelligence" },
    { icon: RefreshCw, name: "Convert", href: "#convert" },
    { icon: MessageSquare, name: "Engage", href: "#engage" },
    { icon: Database, name: "Data Sources", href: "#data" },
    { icon: Shield, name: "Security", href: "#security" },
    { icon: Code, name: "API", href: "#api" },
  ];

  return (
    <section className="bg-white py-16 border-b border-[#d2d2d7]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
          {products.map((product, index) => (
            <motion.button 
              key={index}
              onClick={() => {
                const element = document.querySelector(product.href);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="flex flex-col items-center gap-3 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <product.icon className="w-12 h-12 text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors" />
              </div>
              <span className="text-xs text-[#1d1d1f] font-medium">{product.name}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

// Interactive Payment Widget - GoCardless Style
const InteractiveWidgetSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<'tiered' | 'flat'>('tiered');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const tieredData = [
    { tier: "A", score: "720+", confidence: "92%", status: "Approved" },
    { tier: "B", score: "680-719", confidence: "78%", status: "Approved" },
    { tier: "C", score: "640-679", confidence: "56%", status: "Review" },
    { tier: "D", score: "600-639", confidence: "34%", status: "Guidance" },
  ];

  return (
    <section ref={sectionRef} className="bg-[#f5f5f7] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] tracking-tight mb-6">
              Explainable tiering for every SMB
            </h2>
            <p className="text-xl text-[#86868b] mb-8 leading-relaxed">
              Owner + business scores merge into composite bands. Every tier includes transparent factors for compliance.
            </p>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm">
                <BarChart3 className="w-4 h-4 text-[#0071e3]" />
                <span className="text-[#1d1d1f]">340+ data points</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm">
                <Clock className="w-4 h-4 text-[#0071e3]" />
                <span className="text-[#1d1d1f]">Sub-100ms response</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm">
                <Shield className="w-4 h-4 text-[#0071e3]" />
                <span className="text-[#1d1d1f]">FCRA-aligned</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Widget */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              {/* Widget Header */}
              <div className="px-6 py-4 border-b border-[#e5e5e7] flex items-center justify-between">
                <div className="flex gap-2">
                  <button 
                    onClick={() => setSelectedPlan('tiered')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedPlan === 'tiered' ? 'bg-[#1d1d1f] text-white' : 'text-[#86868b] hover:bg-[#f5f5f7]'
                    }`}
                  >
                    Tiered Scoring
                  </button>
                  <button 
                    onClick={() => setSelectedPlan('flat')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedPlan === 'flat' ? 'bg-[#1d1d1f] text-white' : 'text-[#86868b] hover:bg-[#f5f5f7]'
                    }`}
                  >
                    Binary Pass/Fail
                  </button>
                </div>
              </div>

              {/* Widget Content */}
              <div className="p-6">
                {selectedPlan === 'tiered' ? (
                  <div className="space-y-3">
                    {tieredData.map((item, i) => (
                      <motion.div 
                        key={i}
                        className="flex items-center justify-between p-4 bg-[#f5f5f7] rounded-xl"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold ${
                            item.tier === 'A' ? 'bg-[#34c759]' :
                            item.tier === 'B' ? 'bg-[#0071e3]' :
                            item.tier === 'C' ? 'bg-[#ff9f0a]' : 'bg-[#86868b]'
                          }`}>
                            {item.tier}
                          </div>
                          <div>
                            <p className="font-medium text-[#1d1d1f]">Tier {item.tier}</p>
                            <p className="text-sm text-[#86868b]">Score: {item.score}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-[#1d1d1f]">{item.confidence}</p>
                          <p className={`text-sm ${
                            item.status === 'Approved' ? 'text-[#34c759]' :
                            item.status === 'Review' ? 'text-[#ff9f0a]' : 'text-[#86868b]'
                          }`}>{item.status}</p>
                        </div>
                      </motion.div>
                    ))}
                    <div className="mt-4 pt-4 border-t border-[#e5e5e7] flex items-center justify-between">
                      <span className="text-[#86868b]">Approval rate</span>
                      <span className="text-2xl font-semibold text-[#34c759]">+47%</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="p-4 bg-[#f5f5f7] rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-[#1d1d1f]">Traditional Underwriting</span>
                        <span className="text-[#ff3b30] font-medium">Pass/Fail</span>
                      </div>
                      <p className="text-sm text-[#86868b]">Revenue-only gates reject 60% of viable SMBs</p>
                    </div>
                    <div className="p-4 bg-[#ffebeb] rounded-xl border border-[#ff3b30]/20">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#ff3b30] rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold">✕</span>
                        </div>
                        <div>
                          <p className="font-medium text-[#1d1d1f]">Rejected Early</p>
                          <p className="text-sm text-[#86868b]">LTV lost: $12,400 avg</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-[#e5e5e7] flex items-center justify-between">
                      <span className="text-[#86868b]">Approval rate</span>
                      <span className="text-2xl font-semibold text-[#ff3b30]">32%</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Stacking Cards Section - GoCardless Style
const StackingCardsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const modules = [
    {
      id: "intelligence",
      icon: Brain,
      name: "LumiqAI Intelligence",
      tagline: "Underwrite smarter",
      description: "SMB credit scoring engine with 340+ data points across bureaus, registries, and banking behavior.",
      features: ["Multi-bureau credit signals", "Real-time scoring engine", "Explainable AI outputs", "FCRA-aligned reporting"],
      color: "#0071e3",
      bgImage: "/platform-card-bg-1.jpg"
    },
    {
      id: "convert",
      icon: RefreshCw,
      name: "LumiqAI Convert",
      tagline: "Prequalify instantly",
      description: "Prequalification logic for estimating product eligibility based on internal bank rules and LumiqAI signals.",
      features: ["Soft-pull eligibility checks", "Product matching algorithms", "Confidence scoring", "Customizable rule engine"],
      color: "#34c759",
      bgImage: "/platform-card-bg-2.jpg"
    },
    {
      id: "engage",
      icon: MessageSquare,
      name: "LumiqAI Engage",
      tagline: "Retain longer",
      description: "Personalized credit alerts, monitoring, and product guidance embedded in your bank's digital channels.",
      features: ["Credit monitoring alerts", "Next-best-action guidance", "White-label UI components", "Omnichannel delivery"],
      color: "#ff9f0a",
      bgImage: "/platform-card-bg-3.jpg"
    }
  ];

  return (
    <section ref={containerRef} className="bg-[#f5f5f7] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] tracking-tight mb-4">
            Platform Modules
          </h2>
          <p className="text-xl text-[#86868b] max-w-2xl mx-auto">
            Three integrated modules that work independently or together.
          </p>
        </div>

        <div className="space-y-8">
          {modules.map((module, index) => (
            <StackingCard key={module.id} index={index} totalCards={modules.length} module={module} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Interactive Widget Components for each module
const IntelligenceWidget = () => {
  const [activeDriver, setActiveDriver] = useState(0);
  const drivers = [
    { name: "Payment History", score: 94, weight: "35%" },
    { name: "Credit Utilization", score: 72, weight: "25%" },
    { name: "Time in Business", score: 88, weight: "20%" },
    { name: "Tradeline Depth", score: 65, weight: "20%" },
  ];

  return (
    <div className="bg-[#f5f5f7] rounded-2xl p-6 space-y-4 border border-[#e5e5e7]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[#86868b] text-sm">Composite Score</span>
        <span className="text-[#34c759] text-xs bg-[#34c759]/10 px-2 py-1 rounded-full">LIVE</span>
      </div>
      <div className="flex items-end gap-3">
        <span className="text-5xl font-bold text-[#1d1d1f]">724</span>
        <span className="text-[#34c759] text-sm mb-2 flex items-center gap-1">
          <TrendingUp className="w-3 h-3" /> +12 pts
        </span>
      </div>
      
      <div className="space-y-3 pt-4 border-t border-[#e5e5e7]">
        <span className="text-[#86868b] text-xs uppercase tracking-wide">Score Drivers</span>
        {drivers.map((driver, i) => (
          <motion.div 
            key={i}
            className={`p-3 rounded-xl cursor-pointer transition-colors ${
              activeDriver === i ? 'bg-[#0071e3]/10 border border-[#0071e3]/30' : 'bg-white border border-[#e5e5e7]'
            }`}
            onClick={() => setActiveDriver(i)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#1d1d1f] text-sm font-medium">{driver.name}</span>
              <span className="text-[#86868b] text-xs">{driver.weight}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-[#e5e5e7] rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[#0071e3] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${driver.score}%` }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                />
              </div>
              <span className="text-[#1d1d1f] text-sm font-medium w-8">{driver.score}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ConvertWidget = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const products = [
    { name: "Business Credit Card", confidence: 92, status: "Pre-qualified", limit: "$25,000" },
    { name: "Line of Credit", confidence: 78, status: "Likely eligible", limit: "$50,000" },
    { name: "SBA 7(a) Loan", confidence: 65, status: "May qualify", limit: "$150,000" },
    { name: "Equipment Financing", confidence: 45, status: "Needs review", limit: "$75,000" },
  ];

  return (
    <div className="bg-[#f5f5f7] rounded-2xl p-6 space-y-4 border border-[#e5e5e7]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[#86868b] text-sm">Product Eligibility</span>
        <span className="text-[#34c759] text-xs bg-[#34c759]/10 px-2 py-1 rounded-full">SOFT PULL</span>
      </div>
      
      <div className="space-y-3">
        {products.map((product, i) => (
          <motion.div 
            key={i}
            className={`p-4 rounded-xl cursor-pointer transition-all ${
              selectedProduct === i 
                ? 'bg-[#34c759]/10 border border-[#34c759]/30' 
                : 'bg-white border border-[#e5e5e7]'
            }`}
            onClick={() => setSelectedProduct(i)}
            whileHover={{ x: 4 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#1d1d1f] font-medium">{product.name}</span>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm ${
                product.confidence >= 80 ? 'bg-[#34c759]' :
                product.confidence >= 60 ? 'bg-[#0071e3]' :
                product.confidence >= 40 ? 'bg-[#ff9f0a]' : 'bg-[#86868b]'
              }`}>
                {product.confidence}%
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-sm ${
                product.confidence >= 80 ? 'text-[#34c759]' :
                product.confidence >= 60 ? 'text-[#0071e3]' :
                product.confidence >= 40 ? 'text-[#ff9f0a]' : 'text-[#86868b]'
              }`}>{product.status}</span>
              <span className="text-[#86868b] text-sm">Up to {product.limit}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const EngageWidget = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, type: "improvement", title: "Credit utilization improved", desc: "Down to 28% from 34%", time: "2h ago", read: false },
    { id: 2, type: "action", title: "New product eligible", desc: "Business LOC unlocked", time: "1d ago", read: false },
    { id: 3, type: "milestone", title: "6-month milestone", desc: "Payment streak continues", time: "3d ago", read: true },
  ]);

  const markAsRead = (id: number) => {
    setAlerts(alerts.map(a => a.id === id ? { ...a, read: true } : a));
  };

  return (
    <div className="bg-[#f5f5f7] rounded-2xl p-6 space-y-4 border border-[#e5e5e7]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[#86868b] text-sm">Credit Alerts</span>
        <span className="text-white text-xs bg-[#ff9f0a] px-2 py-1 rounded-full">
          {alerts.filter(a => !a.read).length} NEW
        </span>
      </div>
      
      <div className="space-y-3">
        {alerts.map((alert, i) => (
          <motion.div 
            key={alert.id}
            className={`p-4 rounded-xl cursor-pointer transition-all relative ${
              alert.read ? 'bg-white border border-[#e5e5e7]' : 'bg-white border border-[#e5e5e7] border-l-4 border-l-[#ff9f0a]'
            }`}
            onClick={() => markAsRead(alert.id)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ backgroundColor: '#fafafa' }}
          >
            <div className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                alert.type === 'improvement' ? 'bg-[#34c759]/10' :
                alert.type === 'action' ? 'bg-[#0071e3]/10' : 'bg-[#ff9f0a]/10'
              }`}>
                {alert.type === 'improvement' && <TrendingUp className="w-4 h-4 text-[#34c759]" />}
                {alert.type === 'action' && <Zap className="w-4 h-4 text-[#0071e3]" />}
                {alert.type === 'milestone' && <Activity className="w-4 h-4 text-[#ff9f0a]" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#1d1d1f] text-sm font-medium">{alert.title}</p>
                <p className="text-[#86868b] text-xs">{alert.desc}</p>
              </div>
              <span className="text-[#86868b] text-xs">{alert.time}</span>
            </div>
            {!alert.read && (
              <div className="absolute top-4 right-4 w-2 h-2 bg-[#ff9f0a] rounded-full" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="pt-4 border-t border-[#e5e5e7]">
        <div className="flex items-center justify-between">
          <span className="text-[#86868b] text-sm">Engagement score</span>
          <span className="text-[#34c759] font-semibold">+34% retention</span>
        </div>
      </div>
    </div>
  );
};

// Individual Stacking Card Component
const StackingCard = ({ index, totalCards, module }: { index: number; totalCards: number; module: any }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - index - 1) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const renderWidget = () => {
    switch (module.id) {
      case 'intelligence':
        return <IntelligenceWidget />;
      case 'convert':
        return <ConvertWidget />;
      case 'engage':
        return <EngageWidget />;
      default:
        return null;
    }
  };
  
  return (
    <div 
      id={module.id}
      ref={cardRef}
      className="sticky top-24 scroll-mt-32"
      style={{ 
        zIndex: index + 1,
        paddingTop: `${index * 24}px`,
      }}
    >
      <motion.div 
        className="rounded-3xl border border-[#e5e5e7] overflow-hidden shadow-sm relative"
        style={{ 
          scale,
          transformOrigin: 'top center',
          backgroundImage: module.bgImage ? `url(${module.bgImage})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {module.bgImage && <div className="absolute inset-0 bg-white/55" />}
        <div className={`p-8 md:p-12 relative z-10 ${module.bgImage ? '' : 'bg-white'}`}>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${module.color}15` }}
                >
                  <module.icon className="w-6 h-6" style={{ color: module.color }} />
                </div>
                <span 
                  className="text-sm font-medium px-3 py-1 rounded-full"
                  style={{ 
                    backgroundColor: `${module.color}15`, 
                    color: module.color 
                  }}
                >
                  {module.tagline}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#1d1d1f]">
                {module.name}
              </h3>
              <p className="text-lg leading-relaxed mb-6 text-[#86868b]">
                {module.description}
              </p>
              
              {/* Feature list */}
              <ul className="space-y-3 mb-6">
                {module.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-[#1d1d1f]">
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: module.color }}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Interactive Widget */}
            {renderWidget()}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Real-time Data Display Section - FuteurCredX Style
const LiveDataSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 bg-[#f5f5f7] rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <img src="/icons/machine-learning.png" alt="Credit Intelligence" className="w-16 h-16" />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5f5f7] rounded-full mb-6">
              <Database className="w-4 h-4 text-[#86868b]" />
              <span className="text-sm text-[#86868b] font-medium">In-App Credit Visibility</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] mb-4">
              Credit intelligence, embedded
            </h2>
            <p className="text-xl text-[#86868b] max-w-2xl mx-auto">
              Give SMBs real-time visibility into their credit profile without leaving your app.
            </p>
          </motion.div>
        </div>

        {/* Live Data Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Business Credit Card */}
          <motion.div 
            className="bg-[#1d1d1f] rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-white font-medium">Business Credit Snapshot</h4>
              <span className="text-[#34c759] text-xs bg-[#34c759]/20 px-2 py-1 rounded-full">LIVE</span>
            </div>
            <div className="text-5xl font-bold text-white mb-4">72</div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[#a1a1a6] text-sm">Tradelines</p>
                <p className="text-white font-medium">8 Active</p>
              </div>
              <div>
                <p className="text-[#a1a1a6] text-sm">Payment Trend</p>
                <p className="text-[#34c759] font-medium flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" /> Improving
                </p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[#424245]">
              <span className="inline-block px-3 py-1 bg-[#34c759]/20 text-[#34c759] text-sm rounded-full">
                Registry Active
              </span>
            </div>
          </motion.div>

          {/* Personal Credit Card */}
          <motion.div 
            className="bg-[#1d1d1f] rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-white font-medium">Personal Credit Snapshot</h4>
              <span className="text-[#0a84ff] text-xs bg-[#0a84ff]/20 px-2 py-1 rounded-full">SOFT PULL</span>
            </div>
            <div className="text-5xl font-bold text-white mb-4">695</div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[#a1a1a6] text-sm">Utilization</p>
                <p className="text-white font-medium">28%</p>
              </div>
              <div>
                <p className="text-[#a1a1a6] text-sm">Inquiries (12mo)</p>
                <p className="text-white font-medium">2</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[#424245]">
              <div className="w-full bg-[#2d2d2f] rounded-full h-2">
                <div className="bg-[#0a84ff] h-2 rounded-full" style={{ width: '28%' }} />
              </div>
            </div>
          </motion.div>

          {/* Deposit Stability Card */}
          <motion.div 
            className="bg-[#1d1d1f] rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-white font-medium">Deposit + ACH Stability</h4>
              <span className="text-[#ff9f0a] text-xs bg-[#ff9f0a]/20 px-2 py-1 rounded-full">VERIFIED</span>
            </div>
            <div className="text-5xl font-bold text-white mb-4">$12.4K</div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[#a1a1a6] text-sm">Frequency</p>
                <p className="text-white font-medium">Bi-weekly</p>
              </div>
              <div>
                <p className="text-[#a1a1a6] text-sm">Risk Flags</p>
                <p className="text-[#34c759] font-medium">0 Bounces</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[#424245]">
              <span className="inline-block px-3 py-1 bg-[#34c759]/20 text-[#34c759] text-sm rounded-full">
                No Risk Flags
              </span>
            </div>
          </motion.div>
        </div>

        {/* Product Readiness Meter - Modern Design */}
        <motion.div 
          className="mt-8 bg-gradient-to-br from-white to-[#f8f9fa] rounded-2xl p-8 border border-[#e5e7eb] shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h4 className="text-[#1d1d1f] font-semibold text-xl">Product Readiness Meter</h4>
              <p className="text-[#86868b] mt-1">Track progress toward eligibility unlocks</p>
            </div>
            <div className="flex items-center gap-3 bg-[#34c759]/10 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-[#34c759] rounded-full animate-pulse" />
              <span className="text-[#34c759] font-semibold text-sm">On Track</span>
            </div>
          </div>
          
          {/* Stepper - Clean Modern Design */}
          <div className="relative">
            {/* Progress Line Background */}
            <div className="absolute top-6 left-0 right-0 h-1 bg-[#e5e7eb] rounded-full mx-8" />
            
            {/* Progress Line Filled - 70% progress (between step 3 and 4) */}
            <motion.div 
              className="absolute top-6 left-0 h-1 bg-gradient-to-r from-[#34c759] to-[#0071e3] rounded-full mx-8"
              initial={{ width: "0%" }}
              animate={isInView ? { width: "70%" } : { width: "0%" }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            />
            
            {/* Steps */}
            <div className="relative flex justify-between">
              {[
                { label: 'Verify', status: 'complete', icon: '✓' },
                { label: 'Stabilize', status: 'complete', icon: '✓' },
                { label: 'Build', status: 'complete', icon: '✓' },
                { label: 'Qualify', status: 'current', icon: '4' },
                { label: 'Unlock', status: 'pending', icon: '5' }
              ].map((step, i) => (
                <motion.div 
                  key={i} 
                  className="flex flex-col items-center z-10"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                >
                  {/* Step Circle */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    step.status === 'complete' 
                      ? 'bg-[#34c759] text-white shadow-lg shadow-[#34c759]/30' 
                      : step.status === 'current'
                        ? 'bg-[#0071e3] text-white shadow-lg shadow-[#0071e3]/30 ring-4 ring-[#0071e3]/20'
                        : 'bg-white text-[#86868b] border-2 border-[#d2d2d7]'
                  }`}>
                    {step.icon}
                  </div>
                  
                  {/* Step Label */}
                  <span className={`mt-3 text-sm font-medium ${
                    step.status === 'complete' || step.status === 'current' 
                      ? 'text-[#1d1d1f]' 
                      : 'text-[#86868b]'
                  }`}>
                    {step.label}
                  </span>
                  
                  {/* Current Step Indicator */}
                  {step.status === 'current' && (
                    <span className="mt-1 text-xs text-[#0071e3] font-medium">Current</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Next Unlock Info */}
          <div className="mt-10 p-4 bg-gradient-to-r from-[#0071e3]/5 to-[#34c759]/5 rounded-xl border border-[#0071e3]/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0071e3]/10 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-[#0071e3]" />
                </div>
                <div>
                  <p className="text-sm text-[#86868b]">Next Milestone</p>
                  <p className="font-semibold text-[#1d1d1f]">Business Card / Line of Credit</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-[#86868b]">Estimated</p>
                <p className="font-semibold text-[#34c759]">2-3 weeks</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Data Sources Section - Clean Grid
const DataSourcesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const dataSources = [
    { icon: CreditCard, category: "Consumer Credit", items: ["FICO® score bands", "VantageScore® bands", "Credit bureau data"] },
    { icon: Building2, category: "Business Bureau", items: ["Experian Business", "Equifax Commercial", "D&B reporting"] },
    { icon: FileCode, category: "Registry Data", items: ["Secretary of State filings", "UCC filing presence", "Corporate structure"] },
    { icon: Activity, category: "Transaction Data", items: ["ACH & payroll behavior", "Revenue patterns", "Balance velocity"] },
    { icon: Users, category: "Tradeline Data", items: ["Net-30 vendors", "Wholesale suppliers", "Payment history"] },
    { icon: Clock, category: "Stability Signals", items: ["Time-in-business", "Cashflow cadence", "Deposit longevity"] },
  ];

  return (
    <section id="data" ref={sectionRef} className="bg-[#f5f5f7] py-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm">
            <img src="/icons/aggregation.png" alt="Data Aggregation" className="w-16 h-16" />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] mb-4">
            340+ Data Points
          </h2>
          <p className="text-xl text-[#86868b] max-w-2xl mx-auto">
            Multi-source credit signals for a complete SMB profile.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataSources.map((source, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#f5f5f7] rounded-xl flex items-center justify-center">
                  <source.icon className="w-5 h-5 text-[#1d1d1f]" />
                </div>
                <h4 className="font-semibold text-[#1d1d1f]">{source.category}</h4>
              </div>
              <ul className="space-y-3">
                {source.items.map((item, i) => (
                  <li key={i} className="text-[#86868b] text-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#0071e3] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// API Section - Dark Terminal Style
const APISection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const apiOutput = `{
  "owner_score_band": "720-740",
  "business_score_band": "650-680",
  "composite_tier": "B",
  "top_score_drivers": [
    "payment_history",
    "credit_age",
    "tradelines_count"
  ],
  "likely_eligible_products": [
    { "product": "Unsecured LOC", "confidence": 0.87 },
    { "product": "SBA 7(a)", "confidence": 0.73 }
  ],
  "consent_type": "Soft Pull — No Credit Impact"
}`;

  return (
    <section id="api" ref={sectionRef} className="bg-[#1d1d1f] py-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-6 h-6 text-white" />
              <span className="text-sm font-medium text-[#86868b] uppercase tracking-wide">For Developers</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              RESTful API
            </h2>
            <p className="text-xl text-[#a1a1a6] leading-relaxed mb-8">
              Integrate LumiqAI directly into your lending workflows. Sub-100ms response times with structured, explainable outputs.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Owner + business score bands",
                "Composite tier classification",
                "Product eligibility with confidence",
                "FCRA-compliant audit trail"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#f5f5f7]">
                  <ChevronRight className="w-4 h-4 text-[#0071e3]" />
                  {item}
                </li>
              ))}
            </ul>
            
            <a href="https://docs.futeurcredx.com/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-[#1d1d1f] hover:bg-[#f5f5f7] rounded-full px-6">
                View API Docs
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-[#2d2d2d] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#3d3d3d]">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-sm text-[#86868b] font-mono">response.json</span>
            </div>
            <pre className="p-6 text-sm text-[#f5f5f7] font-mono overflow-x-auto">
              <code>{apiOutput}</code>
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Security Section - Trust Badges
const SecuritySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const securityItems = [
    'SOC 2 Type II certified',
    'AES-256 encryption at rest',
    'TLS 1.3 in transit',
    'SAML + SCIM support',
    'Audit-ready logging',
    'FCRA-aligned outputs'
  ];

  return (
    <section id="security" ref={sectionRef} className="bg-white py-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="bg-[#f5f5f7] rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mb-6">
                <img src="/icons/data-security.png" alt="Data Security" className="w-16 h-16" />
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] mb-6">
                Bank-Grade Security
              </h2>
              <p className="text-xl text-[#86868b] leading-relaxed">
                Built with enterprise-grade architecture for the most demanding compliance requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {securityItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl p-4 flex items-center gap-3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-5 h-5 bg-[#34c759] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-[#1d1d1f] text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef} 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/platform-cta-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-[#a1a1a6] mb-10">
            Start with a 90-day pilot and see measurable results in SMB engagement.
          </p>
          
          <div className="flex justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-[#1d1d1f] hover:bg-[#f5f5f7] rounded-full px-8 font-medium">
                Contact Sales
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Page Component
const PlatformOverview = () => {
  return (
    <div className="min-h-screen bg-white">
      <EngineNavbar />
      
      <HeroSection />
      <ProductGridSection />
      <InteractiveWidgetSection />
      <StackingCardsSection />
      <LiveDataSection />
      <DataSourcesSection />
      <APISection />
      <SecuritySection />
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default PlatformOverview;
