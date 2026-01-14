import { 
  TrendingUp, 
  Bell, 
  Target, 
  Users, 
  CreditCard, 
  Building2, 
  Car, 
  Home,
  ArrowRight,
  CheckCircle,
  Eye,
  Sparkles,
  Zap,
  LineChart
} from "lucide-react";

const CreditJourneySection = () => {
  const journeySteps = [
    {
      module: "LumiqAI Intelligence™",
      icon: Eye,
      color: "from-blue-500 to-cyan-500",
      title: "See the Full Picture",
      description: "Personal + Business credit visibility in one unified dashboard",
      features: [
        "Personal FICO® score tracking",
        "D&B PAYDEX® monitoring",
        "Experian Intelliscore Plus℠",
        "Multi-bureau business credit"
      ]
    },
    {
      module: "LumiqAI Engage™",
      icon: Bell,
      color: "from-purple-500 to-pink-500",
      title: "Stay Informed & Improve",
      description: "Proactive alerts and coaching that drive continuous improvement",
      features: [
        "Real-time score change alerts",
        "Personalized improvement tips",
        "Payment reminder notifications",
        "Credit utilization coaching"
      ]
    },
    {
      module: "LumiqAI Convert™",
      icon: Target,
      color: "from-emerald-500 to-teal-500",
      title: "Pre-Qualify Instantly",
      description: "Soft-pull eligibility checks with transparent approval odds",
      features: [
        "No-impact pre-qualification",
        "Approval likelihood scores",
        "Personalized offer matching",
        "One-click applications"
      ]
    },
    {
      module: "LumiqAI Retain™",
      icon: Users,
      color: "from-orange-500 to-amber-500",
      title: "Grow With Your Bank",
      description: "Keep SMBs engaged and loyal through transparency",
      features: [
        "Credit journey milestones",
        "Product upgrade pathways",
        "Relationship deepening",
        "Lifetime value optimization"
      ]
    }
  ];

  const creditProducts = [
    { 
      icon: CreditCard, 
      name: "Business Credit Cards", 
      description: "Rewards, cash back, and purchasing power",
      color: "bg-blue-500"
    },
    { 
      icon: LineChart, 
      name: "Lines of Credit", 
      description: "Flexible working capital access",
      color: "bg-purple-500"
    },
    { 
      icon: Car, 
      name: "Commercial Equipment & Auto", 
      description: "Finance vehicles and equipment",
      color: "bg-emerald-500"
    },
    { 
      icon: Home, 
      name: "Commercial Real Estate", 
      description: "Property acquisition and refinancing",
      color: "bg-orange-500"
    }
  ];

  return (
    <div 
      className="p-6 md:p-10 lg:p-12 relative"
      style={{
        backgroundImage: 'url(/enterprise-card-bg-4.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-3 py-1.5 rounded-full mb-4 border border-blue-500/30 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="font-medium text-blue-400 text-sm">THE CREDIT JOURNEY</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">
            One Platform. Complete Credit Visibility.
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto">
            LumiqAI empowers SMBs to monitor personal and business credit, understand their standing, 
            and access pre-qualified offers for the products they need — all inside your banking app.
          </p>
        </div>

        {/* Journey Flow */}
        <div className="relative mb-8 md:mb-10">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-20 left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-emerald-500 to-orange-500 rounded-full opacity-30" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {journeySteps.map((step, i) => (
              <div key={i} className="relative group">
                {/* Step Number */}
                <div className="absolute -top-2 -left-2 w-6 h-6 md:w-7 md:h-7 bg-foreground text-background rounded-full flex items-center justify-center text-xs font-bold z-10">
                  {i + 1}
                </div>
                
                <div className="bg-card rounded-xl md:rounded-2xl p-4 md:p-5 border border-border h-full hover:border-accent/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  {/* Module Badge */}
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <step.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  
                  <div className="text-[9px] md:text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                    {step.module}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-1.5">{step.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-3">{step.description}</p>
                  
                  <div className="space-y-1.5">
                    {step.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-1.5 text-xs md:text-sm">
                        <CheckCircle className="h-3 w-3 text-emerald-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Arrow to next step */}
                {i < journeySteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-20 -right-2 w-5 h-5 bg-background border border-border rounded-full items-center justify-center z-10">
                    <ArrowRight className="h-2.5 w-2.5 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CreditJourneySection;
