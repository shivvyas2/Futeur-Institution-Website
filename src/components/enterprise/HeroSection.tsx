import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Brain, LockKeyhole, Sparkles, TrendingUp, CreditCard, Target } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const trustBadges = [
    { label: "SOC 2 Ready", icon: Shield, tooltip: "Aligned with SOC 2 Type II control requirements for enterprise security." },
    { label: "FCRA Aligned", icon: CheckCircle, tooltip: "Consumer reporting practices aligned with Fair Credit Reporting Act guidelines." },
    { label: "Explainable AI", icon: Brain, tooltip: "All credit signals include clear explanations and audit trails." },
    { label: "Zero Trust", icon: LockKeyhole, tooltip: "AES-256 encryption at rest, TLS 1.2+ in transit, HSM-backed key management." },
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-stretch overflow-hidden">
      {/* Split Layout Container */}
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        
        {/* Left Panel - GoCardless-style Dark with Content */}
        <div className="relative lg:w-[55%] bg-gc-dark flex items-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-20 md:py-24 lg:py-0">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.03),transparent_70%)]" />
          
          {/* Content */}
          <div className={`relative z-10 max-w-2xl transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            
            {/* Pill Badge */}
            <div className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 md:mb-8">
              <span className="text-xs md:text-sm text-white/70">AI-Powered SMB Intelligence Layer</span>
            </div>

            {/* Two-tone Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 leading-[1.1]">
              <span className="text-white">Credit Intelligence</span>
              <br />
              <span className="text-accent">for Business Banking</span>
            </h1>
            
            {/* Underline accent */}
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-accent to-amber-500 rounded-full mb-6 md:mb-8" />
            
            <p className="text-base md:text-lg lg:text-xl text-white/70 mb-8 md:mb-10 leading-relaxed max-w-xl">
              LumiqAI combines credit intelligence and AI to help financial institutions control their SMB lending exposure and unlock growth.
            </p>

            {/* CTA Button */}
            <div className="flex items-center mb-8 md:mb-10">
              <a href="/contact">
                <Button size="lg" className="bg-white text-gc-dark hover:bg-white/90 px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-bold rounded-full shadow-lg group">
                  Contact Sales
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>

            {/* Trust Strip */}
            <TooltipProvider>
              <div className="flex flex-wrap items-center gap-3 md:gap-6 pt-4 md:pt-6 border-t border-white/10">
                {trustBadges.map((badge, idx) => (
                  <Tooltip key={idx}>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-1.5 md:gap-2 text-white/50 hover:text-white/70 transition-colors cursor-pointer">
                        <badge.icon className="h-3 w-3 md:h-4 md:w-4" />
                        <span className="text-[10px] md:text-xs font-medium">{badge.label}</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="bg-gc-dark border-white/20 text-white max-w-[250px]">
                      <p className="text-sm">{badge.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </div>
        </div>

        {/* Right Panel - Image with Floating Cards */}
        <div className="relative lg:w-[45%] min-h-[400px] sm:min-h-[500px] lg:min-h-screen">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/01.jpg)',
            }}
          >
            {/* Gradient overlay for blend effect - using GoCardless dark */}
            <div className="absolute inset-0 bg-gradient-to-r from-gc-dark via-transparent to-transparent lg:w-32" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          
          {/* Floating Dashboard Cards */}
          <div className={`absolute inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative w-full max-w-sm md:max-w-md">
              
              {/* Main Score Card */}
              <div 
                className={`relative bg-white/95 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 shadow-2xl border border-white/20 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255,255,255,0.1)',
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900 text-sm md:text-base">Credit Intelligence</span>
                  </div>
                  <span className="text-[10px] md:text-xs text-gray-500 bg-gray-100 px-2 py-0.5 md:py-1 rounded-full">Live</span>
                </div>

                {/* Score Display */}
                <div className="flex items-end gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="text-4xl md:text-5xl font-bold text-gray-900">742</div>
                  <div className="pb-1 md:pb-2">
                    <div className="text-emerald-600 text-xs md:text-sm font-medium flex items-center gap-1">
                      <TrendingUp className="w-2.5 h-2.5 md:w-3 md:h-3" />
                      +12
                    </div>
                    <div className="text-[10px] md:text-xs text-gray-500">vs last month</div>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">Payment History</span>
                      <span className="text-gray-900 font-medium">Excellent</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[92%] bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">Credit Utilization</span>
                      <span className="text-gray-900 font-medium">Good</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[78%] bg-gradient-to-r from-blue-400 to-blue-500 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">Business Age</span>
                      <span className="text-gray-900 font-medium">Strong</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-gradient-to-r from-violet-400 to-violet-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards - Hidden on very small screens */}
              <div 
                className={`hidden sm:block absolute -top-4 md:-top-6 -right-2 md:-right-4 lg:-right-8 bg-white/95 backdrop-blur-xl rounded-lg md:rounded-xl p-3 md:p-4 shadow-xl border border-white/20 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                style={{
                  boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.2)',
                }}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] md:text-xs text-gray-500">Eligible Products</div>
                    <div className="text-lg md:text-xl font-bold text-gray-900">3 of 5</div>
                  </div>
                </div>
              </div>

              <div 
                className={`hidden sm:block absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 lg:-left-8 bg-white/95 backdrop-blur-xl rounded-lg md:rounded-xl p-3 md:p-4 shadow-xl border border-white/20 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                style={{
                  boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.2)',
                }}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Target className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] md:text-xs text-gray-500">Risk Assessment</div>
                    <div className="text-lg md:text-xl font-bold text-emerald-600">Low Risk</div>
                  </div>
                </div>
              </div>

              {/* Score History Chart Card - Hidden on small screens */}
              <div 
                className={`hidden md:block absolute -bottom-16 md:-bottom-20 right-0 lg:right-4 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-lg md:rounded-xl p-3 md:p-4 shadow-2xl border border-white/10 w-48 md:w-64 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/90 text-sm font-medium">Score History</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                </div>
                {/* Mini Chart */}
                <div className="h-16 flex items-end gap-1">
                  {[40, 55, 45, 60, 52, 70, 65, 75, 72, 85, 80, 92].map((height, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-gradient-to-t from-blue-500/80 to-blue-400/60 rounded-t"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-[10px] text-white/50">
                  <span>Jan</span>
                  <span>Jun</span>
                  <span>Dec</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
