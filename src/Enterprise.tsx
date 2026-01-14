import EngineNavbar from "@/components/EngineNavbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/enterprise/HeroSection";
import { StackingCard, StackingCardsContainer } from "@/components/StackingCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BeforeAfterSlider from "@/components/enterprise/BeforeAfterSlider";
import CreditJourneySection from "@/components/enterprise/CreditJourneySection";
import { 
  CheckCircle, 
  XCircle, 
  TrendingUp, 
  Users, 
  Target, 
  Bell, 
  Shield, 
  Zap,
  ArrowRight,
  BarChart3,
  Clock,
  Lock,
  CreditCard
} from "lucide-react";

const Enterprise = () => {
  // Feature cards data
  const features = [
    {
      icon: TrendingUp,
      title: "LumiqAI Intelligence™",
      description: "Display Business credit + Consumer Credit health from multi-source signals",
      outcome: "3x increase in digital engagement",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Bell,
      title: "LumiqAI Engage™", 
      description: "Alerts + coaching that drives repeat app sessions",
      outcome: "65% reduction in dormant accounts",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "LumiqAI Convert™",
      description: "Soft-estimated eligibility + prequalified offers",
      outcome: "+40% application completion rate",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Users,
      title: "LumiqAI Retain™",
      description: "Keep SMBs inside your ecosystem through transparency",
      outcome: "2.5x lifetime value increase",
      color: "from-orange-500 to-amber-500"
    }
  ];

  const stats = [
    { value: "36.2M", label: "small businesses in the US" },
    { value: "Growing", label: "Nonbank lenders capturing market share" },
    { value: "~24%", label: "apply through their existing bank" }
  ];

  const timeline = [
    { week: "Week 1-2", title: "Discovery & Scoping", description: "Align on business objectives and technical requirements" },
    { week: "Week 3-4", title: "Sandbox Deployment", description: "Deploy LumiqAI in isolated test environment" },
    { week: "Week 5-8", title: "Integration & Testing", description: "Connect data sources and validate outputs" },
    { week: "Week 9-12", title: "Pilot Launch", description: "Go live with limited user cohort, measure KPIs" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <EngineNavbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Stacking Cards Sections */}
      <div className="px-6 py-12">
        <StackingCardsContainer>
          
          {/* Card 1: The Problem */}
          <StackingCard index={0} totalCards={8}>
            <div 
              className="p-8 md:p-12 lg:p-16 relative"
              style={{
                backgroundImage: 'url(/enterprise-card-bg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/60" />
              <div className="max-w-6xl mx-auto relative z-10">
                <div className="inline-flex items-center gap-2 bg-red-500/20 px-4 py-2 rounded-full mb-6 border border-red-500/30">
                  <XCircle className="h-4 w-4 text-red-400" />
                  <span className="font-medium text-red-400 text-sm">THE PROBLEM</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight max-w-4xl">
                  SMB customers are leaving because they can't see the path to approval.
                </h2>

                {/* Section Header for iPhone Screenshots */}
                <div className="text-center mb-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                    What banks perfected (consumer)
                  </h3>
                  <p className="text-gray-300">Consumer credit visibility that keeps customers engaged</p>
                </div>

                {/* iPhone Screenshots Fan Layout */}
                <div className="relative flex justify-center items-end py-8 overflow-hidden">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 via-transparent to-transparent rounded-3xl" />
                  
                  {/* iPhone Frame 1 - Far Left */}
                  <div className="relative -mr-12 z-10 transform -rotate-12 translate-y-4 hover:translate-y-0 hover:scale-105 transition-all duration-300">
                    <div className="w-36 md:w-44 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/30">
                      <img 
                        src="/mobile/capital-one-email.png" 
                        alt="Capital One Credit Alert" 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  {/* iPhone Frame 2 - Left */}
                  <div className="relative -mr-8 z-20 transform -rotate-6 translate-y-2 hover:translate-y-0 hover:scale-105 transition-all duration-300">
                    <div className="w-40 md:w-48 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/30">
                      <img 
                        src="/mobile/wells-fargo-app.png" 
                        alt="Wells Fargo Mobile App" 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  {/* iPhone Frame 3 - Center (Largest) */}
                  <div className="relative z-30 transform hover:translate-y-[-8px] hover:scale-105 transition-all duration-300">
                    <div className="w-48 md:w-56 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/40">
                      <img 
                        src="/mobile/chase-consumer.png" 
                        alt="Chase Credit Journey" 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  {/* iPhone Frame 4 - Right */}
                  <div className="relative -ml-8 z-20 transform rotate-6 translate-y-2 hover:translate-y-0 hover:scale-105 transition-all duration-300">
                    <div className="w-40 md:w-48 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/30">
                      <img 
                        src="/mobile/wells-fargo-email.png" 
                        alt="Wells Fargo FICO Score Email" 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  {/* iPhone Frame 5 - Far Right */}
                  <div className="relative -ml-12 z-10 transform rotate-12 translate-y-4 hover:translate-y-0 hover:scale-105 transition-all duration-300">
                    <div className="w-36 md:w-44 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/30">
                      <img 
                        src="/mobile/chase-email.png" 
                        alt="Chase Credit Summary Email" 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </StackingCard>

          {/* Card 1.5: How Banks Perfected Consumer Credit */}
          <StackingCard index={1} totalCards={8}>
            <div 
              className="p-8 md:p-12 lg:p-16 relative"
              style={{
                backgroundImage: 'url(/enterprise-card-bg-2.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/50" />
              <div className="max-w-6xl mx-auto relative z-10">
                {/* Two Column Layout: Green Table + 3 iPhone Mockups */}
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  {/* Left Column: Title + Compact Green Table */}
                  <div>
                    {/* Title Block */}
                    <div className="mb-6">
                      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 tracking-tight">
                        How Banks Perfected Consumer Credit.<br />
                        And Why It Drove Engagement.
                      </h2>
                      <p className="text-sm md:text-base text-gray-300">
                        Free credit visibility, alerts, education, and instant pre-qualified offers kept customers logging in, improving scores, and applying for new products — all inside the banking app.
                      </p>
                    </div>

                    {/* Compact Green Table */}
                    <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/30 mb-4 backdrop-blur-sm">
                      <div className="grid grid-cols-2 gap-3">
                        {/* Row 1 */}
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-white text-sm">Free Credit Visibility</h4>
                            <p className="text-xs text-gray-400">Weekly FICO® updates kept consumers returning.</p>
                          </div>
                        </div>
                        {/* Row 2 */}
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-white text-sm">Credit Alerts</h4>
                            <p className="text-xs text-gray-400">Push alerts for score changes & fraud.</p>
                          </div>
                        </div>
                        {/* Row 3 */}
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-white text-sm">Score Education</h4>
                            <p className="text-xs text-gray-400">Breakdowns created financial literacy.</p>
                          </div>
                        </div>
                        {/* Row 4 */}
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-white text-sm">Pre-Qualified Offers</h4>
                            <p className="text-xs text-gray-400">One-click apply for credit products.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Impact Summary Bar */}
                    <div className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full mb-4">
                      <Zap className="h-3 w-3" />
                      <span className="text-xs font-medium">Result: Higher login frequency, stronger loyalty, increased conversion.</span>
                    </div>

                    {/* Retention & Conversion Metrics */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-emerald-500/20 rounded-lg p-3 text-center border border-emerald-500/30 backdrop-blur-sm">
                        <div className="text-xl font-bold text-emerald-400">7% ↑</div>
                        <div className="text-[10px] text-gray-400">Week-1 Retention</div>
                      </div>
                      <div className="bg-emerald-500/20 rounded-lg p-3 text-center border border-emerald-500/30 backdrop-blur-sm">
                        <div className="text-xl font-bold text-emerald-400">30 pts</div>
                        <div className="text-[10px] text-gray-400">Avg Score Increase</div>
                      </div>
                      <div className="bg-emerald-500/20 rounded-lg p-3 text-center border border-emerald-500/30 backdrop-blur-sm">
                        <div className="text-xl font-bold text-emerald-400">60M+</div>
                        <div className="text-[10px] text-gray-400">CreditWise Users</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: 3-iPhone Mockup Panel */}
                  <div className="relative flex justify-center items-end py-8 overflow-hidden">
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 via-transparent to-transparent rounded-3xl" />
                    
                    {/* 3-Phone Fan Layout - matching 5-phone sizing */}
                    {/* Phone 1 - Left */}
                    <div className="relative -mr-8 z-10 transform -rotate-6 translate-y-2 hover:translate-y-0 hover:scale-105 transition-all duration-300">
                      <div className="w-40 md:w-48 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/30">
                        <img 
                          src="/mobile/capital-one-email-2.png" 
                          alt="Capital One Credit Alert" 
                          className="w-full h-auto"
                        />
                      </div>
                    </div>

                    {/* Phone 2 - Center (Largest) */}
                    <div className="relative z-30 transform hover:translate-y-[-8px] hover:scale-105 transition-all duration-300">
                      <div className="w-48 md:w-56 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/40">
                        <img 
                          src="/mobile/chase-email-2.png" 
                          alt="Chase Credit Journey" 
                          className="w-full h-auto"
                        />
                      </div>
                    </div>

                    {/* Phone 3 - Right */}
                    <div className="relative -ml-8 z-20 transform rotate-6 translate-y-2 hover:translate-y-0 hover:scale-105 transition-all duration-300">
                      <div className="w-40 md:w-48 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/30">
                        <img 
                          src="/mobile/wells-fargo-email-2.png" 
                          alt="Wells Fargo FICO Score" 
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </StackingCard>

          {/* Card 2: SMB Credit Gap */}
          <StackingCard index={2} totalCards={8}>
            <div 
              className="p-8 md:p-12 lg:p-16 relative"
              style={{
                backgroundImage: 'url(/enterprise-card-bg-2.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/50" />
              <div className="max-w-6xl mx-auto relative z-10">
                {/* Two Column Layout: 3 iPhone Mockups + Red Table (flipped) */}
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  {/* Left Column: 3-iPhone Mockup Panel - Showing poor SMB experience */}
                  <div className="relative flex justify-center items-end py-8 overflow-hidden order-2 lg:order-1">
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-red-500/5 via-transparent to-transparent rounded-3xl" />
                    
                    {/* Phone 1 - Left */}
                    <div className="relative -mr-8 z-10 transform -rotate-6 translate-y-2 hover:translate-y-0 hover:scale-105 transition-all duration-300">
                      <div className="w-40 md:w-48 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/30">
                        <img 
                          src="/mobile/chase-smb.png" 
                          alt="Chase SMB Missing Credit Journey" 
                          className="w-full h-auto"
                        />
                      </div>
                    </div>

                    {/* Phone 2 - Center (Largest) */}
                    <div className="relative z-30 transform hover:translate-y-[-8px] hover:scale-105 transition-all duration-300">
                      <div className="w-48 md:w-56 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/40">
                        <img 
                          src="/mobile/citi-smb.png" 
                          alt="Citi Business Missing Credit Profile" 
                          className="w-full h-auto"
                        />
                      </div>
                    </div>

                    {/* Phone 3 - Right */}
                    <div className="relative -ml-8 z-20 transform rotate-6 translate-y-2 hover:translate-y-0 hover:scale-105 transition-all duration-300">
                      <div className="w-40 md:w-48 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/30">
                        <img 
                          src="/mobile/wells-smb.png" 
                          alt="Wells Fargo SMB Missing Credit Features" 
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Title + Red Table */}
                  <div className="order-1 lg:order-2">
                    {/* Title Block */}
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-2 bg-red-500/20 px-4 py-2 rounded-full mb-4 border border-red-500/30">
                        <XCircle className="h-4 w-4 text-red-400" />
                        <span className="font-medium text-red-400 text-sm">THE GAP</span>
                      </div>
                      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 tracking-tight">
                        But SMBs Can't See Their Credit Health.
                      </h2>
                      <p className="text-sm md:text-base text-gray-300">
                        Without visibility, education, or pre-qualification — SMBs leave to find answers elsewhere.
                      </p>
                    </div>

                    {/* Red Table - What SMBs Experience Today */}
                    <div className="bg-red-500/15 rounded-xl p-5 border border-red-500/30 mb-4 backdrop-blur-sm">
                      <div className="flex items-center gap-2 mb-4">
                        <XCircle className="h-5 w-5 text-red-400" />
                        <h4 className="font-semibold text-white">What SMBs experience today</h4>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">"No credit score visibility"</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">"Denied with no explanation"</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">"No eligibility insights"</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">"Apply elsewhere"</span>
                        </div>
                      </div>
                    </div>

                    {/* Impact Summary Bar */}
                    <div className="inline-flex items-center gap-2 bg-red-500/30 text-red-300 px-4 py-2 rounded-full mb-4 border border-red-500/40">
                      <XCircle className="h-3 w-3" />
                      <span className="text-xs font-medium">Result: SMBs leave banks for fintechs who offer transparency.</span>
                    </div>

                    {/* Stats showing leakage */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-red-500/20 rounded-lg p-3 text-center border border-red-500/30 backdrop-blur-sm">
                        <div className="text-xl font-bold text-red-400">67%</div>
                        <div className="text-[10px] text-gray-400">Leave for fintechs</div>
                      </div>
                      <div className="bg-red-500/20 rounded-lg p-3 text-center border border-red-500/30 backdrop-blur-sm">
                        <div className="text-xl font-bold text-red-400">$2.1B</div>
                        <div className="text-[10px] text-gray-400">Lost annually</div>
                      </div>
                      <div className="bg-red-500/20 rounded-lg p-3 text-center border border-red-500/30 backdrop-blur-sm">
                        <div className="text-xl font-bold text-red-400">3.4x</div>
                        <div className="text-[10px] text-gray-400">Higher churn rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </StackingCard>

          {/* Card 3: The Solution */}
          <StackingCard index={3} totalCards={8}>
            <div 
              className="p-6 md:p-10 lg:p-12 relative"
              style={{
                backgroundImage: 'url(/enterprise-card-bg-3.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/60" />
              <div className="max-w-6xl mx-auto relative z-10">
                <div className="inline-flex items-center gap-2 bg-accent/20 px-3 py-1.5 rounded-full mb-4 border border-accent/30 backdrop-blur-sm">
                  <Zap className="h-4 w-4 text-accent" />
                  <span className="font-medium text-accent text-sm">THE SOLUTION</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight max-w-4xl">
                  LumiqAI brings the consumer credit playbook to SMB banking.
                </h2>
                <p className="text-base md:text-lg text-white/80 mb-6 max-w-2xl">
                  Powerful features designed to help banks retain customers and increase lending conversion.
                </p>
                
                {/* Before/After Comparison Slider */}
                <BeforeAfterSlider />
                
              </div>
            </div>
          </StackingCard>

          {/* Card 4: Credit Journey */}
          <StackingCard index={4} totalCards={8}>
            <CreditJourneySection />
          </StackingCard>

          {/* Card 5: Security & Compliance */}
          <StackingCard index={5} totalCards={8}>
            <div 
              className="p-8 md:p-12 lg:p-16 relative"
              style={{
                backgroundImage: 'url(/enterprise-card-bg-5.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/50" />
              <div className="max-w-6xl mx-auto relative z-10">
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 px-4 py-2 rounded-full mb-6 border border-emerald-500/30 backdrop-blur-sm">
                  <Shield className="h-4 w-4 text-emerald-400" />
                  <span className="font-medium text-emerald-400 text-sm">SECURITY & COMPLIANCE</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight max-w-4xl">
                  Built for enterprise security and regulatory alignment.
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: Shield, title: "SOC 2 Type II", desc: "Enterprise-grade security controls and annual audits" },
                    { icon: Lock, title: "FCRA Aligned", desc: "Fair Credit Reporting Act compliant practices" },
                    { icon: CheckCircle, title: "Zero Trust", desc: "AES-256 encryption, TLS 1.2+, HSM-backed keys" }
                  ].map((item, i) => (
                    <div key={i} className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                        <item.icon className="h-8 w-8 text-emerald-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-white/70">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </StackingCard>

          {/* Card 6: Timeline */}
          <StackingCard index={6} totalCards={8}>
            <div 
              className="p-8 md:p-12 lg:p-16 relative"
              style={{
                backgroundImage: 'url(/enterprise-card-bg-6.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/50" />
              <div className="max-w-6xl mx-auto relative z-10">
                <div className="inline-flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full mb-6 border border-blue-500/30 backdrop-blur-sm">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <span className="font-medium text-blue-400 text-sm">90-DAY PILOT</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight max-w-4xl">
                  From kickoff to live in 90 days.
                </h2>
                
                <div className="grid md:grid-cols-4 gap-6">
                  {timeline.map((step, i) => (
                    <div key={i} className="relative">
                      {i < timeline.length - 1 && (
                        <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-white/20 -translate-x-1/2" />
                      )}
                      <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400 font-bold">
                          {i + 1}
                        </div>
                        <div className="text-xs font-semibold text-blue-400 mb-2">{step.week}</div>
                        <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                        <p className="text-sm text-white/70">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </StackingCard>

          {/* Card 7: CTA */}
          <StackingCard index={7} totalCards={8}>
            <div 
              className="p-8 md:p-12 lg:p-20 text-background relative"
              style={{
                backgroundImage: 'url(/cta-bg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-white">
                  Ready to transform your SMB banking experience?
                </h2>
                <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                  Join leading regional banks who are using LumiqAI to retain customers, increase conversions, and compete with fintechs.
                </p>
                
                <div className="flex items-center justify-center">
                  <a href="/contact">
                    <Button size="lg" className="bg-white text-black hover:bg-white/90 shadow-xl px-8 py-6 text-base font-semibold rounded-full group">
                      Contact Sales
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-white/20">
                  {["SOC 2 Ready", "FCRA Aligned", "Zero Trust", "90-Day Pilot"].map((badge, i) => (
                    <div key={i} className="flex items-center gap-2 text-white/70">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm font-medium">{badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </StackingCard>
          
        </StackingCardsContainer>
      </div>
      
      <Footer />
    </div>
  );
};

export default Enterprise;