import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import EngineNavbar from '@/components/EngineNavbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { StackingCard, StackingCardsContainer } from '@/components/StackingCard';
import { 
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  ChevronLeft,
  Building2,
  Crown,
  Quote,
  Globe,
  Layers,
  BadgeCheck,
  TrendingUp,
  Users,
  CreditCard,
  BarChart3,
  Shield,
  Zap,
  Target,
  DollarSign,
  LineChart,
  Briefcase,
  Award,
  PieChart,
  Rocket
} from 'lucide-react';

const CaseStudyRegionalBanks = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <EngineNavbar />
      
      {/* Hero - Full Width Horizontal Layout */}
      <section 
        className="relative pt-24 pb-20 overflow-hidden"
        style={{
          backgroundImage: 'url(/regional-banks-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="text-sm">Back to Case Studies</span>
          </Link>
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
            <div className="lg:max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-6"
              >
                <Building2 className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">Regional Banking</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                The SMB Banking
                <span className="block text-blue-400">Transformation</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-300 leading-relaxed"
              >
                Consumer credit modules changed everything. Now bring that same innovation to your business banking clients.
              </motion.p>
            </div>
            
            {/* Hero Stats - Horizontal Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4"
            >
              {[
                { value: '71M', label: 'Chase Users', icon: Users },
                { value: '60M', label: 'CreditWise', icon: TrendingUp },
                { value: '30+', label: 'Pts Lift', icon: BarChart3 },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center min-w-[120px]">
                  <stat.icon className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stacking Cards Section - The Proof */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-blue-600 mb-4">
              <Crown className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Proven at Scale</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The Consumer Playbook That Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Major banks transformed engagement with free credit tools. Here's the evidence.
            </p>
          </div>
          
          <StackingCardsContainer>
            {/* Card 1 - Chase */}
            <StackingCard index={0} totalCards={3}>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 flex flex-col justify-center">
                  <img src="/logos/banks/chase.png" alt="Chase" className="w-20 h-20 object-contain mb-6 bg-white rounded-xl p-2" />
                  <h3 className="text-3xl font-bold text-white mb-3">Chase Credit Journey</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Over two-thirds of consumers now use credit score services—an 8% YoY increase.
                  </p>
                </div>
                <div className="bg-slate-50 p-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
                      <div className="text-4xl font-bold text-blue-600 mb-1">71M</div>
                      <div className="text-sm text-slate-500">Digital Users</div>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
                      <div className="text-4xl font-bold text-blue-600 mb-1">2.8M</div>
                      <div className="text-sm text-slate-500">Plans Created</div>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
                      <div className="text-4xl font-bold text-emerald-600 mb-1">+30</div>
                      <div className="text-sm text-slate-500">Avg Score Lift</div>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
                      <div className="text-4xl font-bold text-emerald-600 mb-1">+7%</div>
                      <div className="text-sm text-slate-500">Week-1 Retention</div>
                    </div>
                  </div>
                </div>
              </div>
            </StackingCard>
            
            {/* Card 2 - Capital One */}
            <StackingCard index={1} totalCards={3}>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-[#0891B2] to-[#0A0E17] p-10 flex flex-col justify-center">
                  <img src="/logos/banks/capitalone.png" alt="Capital One" className="w-20 h-20 object-contain mb-6 bg-white rounded-xl p-2" />
                  <h3 className="text-3xl font-bold text-white mb-3">Capital One CreditWise</h3>
                  <p className="text-[#38BDF8]/80 leading-relaxed">
                    The "vast majority" of digital customers are enrolled—it's now expected, not exceptional.
                  </p>
                </div>
                <div className="bg-slate-50 p-10 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                      <span className="text-slate-600">Users Enrolled</span>
                      <span className="text-3xl font-bold text-[#0891B2]">60M</span>
                    </div>
                    <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                      <span className="text-slate-600">Digital Adoption Rate</span>
                      <span className="text-3xl font-bold text-[#0891B2]">67%</span>
                    </div>
                    <div className="bg-[#0891B2]/10 rounded-xl p-4">
                      <p className="text-[#0891B2] text-sm">
                        <strong>Key insight:</strong> CreditWise acts as an acquisition funnel—attracting non-customers who eventually become cardholders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </StackingCard>
            
            {/* Card 3 - The Gap */}
            <StackingCard index={2} totalCards={3}>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-10">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-8 h-8 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">The SMB Gap</h3>
                    <p className="text-slate-600">Despite consumer-side success, a significant gap exists in business banking apps.</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-2xl p-6 border border-amber-200">
                    <div className="text-4xl font-bold text-amber-600 mb-2">39%</div>
                    <h4 className="font-semibold text-slate-900 mb-1">Would Switch</h4>
                    <p className="text-sm text-slate-500">SMBs would switch banks for easier capital access</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-rose-200">
                    <div className="text-4xl font-bold text-rose-600 mb-2">50%+</div>
                    <h4 className="font-semibold text-slate-900 mb-1">Using Fintechs</h4>
                    <p className="text-sm text-slate-500">U.S. small firms using non-bank fintech services</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-slate-200">
                    <div className="text-4xl font-bold text-slate-600 mb-2">0</div>
                    <h4 className="font-semibold text-slate-900 mb-1">In-App SMB Tools</h4>
                    <p className="text-sm text-slate-500">Most regional banks lack business credit tools</p>
                  </div>
                </div>
              </div>
            </StackingCard>
          </StackingCardsContainer>
        </div>
      </section>

      {/* Fintech Competition - Side-by-Side Cards */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-slate-600 mb-4">
              <Globe className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Market Reality</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Fintechs Are Filling the Gap
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { 
                name: 'Brex', 
                logo: '/fintech-logos/Brex.png',
                tagline: 'Corporate cards for startups',
                stats: [
                  { label: 'Transaction Volume', value: '$40B+' },
                  { label: 'Market Share', value: '25% of Startups' },
                  { label: 'Businesses', value: '20,000+' }
                ],
                color: 'orange'
              },
              { 
                name: 'Ramp', 
                logo: '/fintech-logos/Ramp.jpeg',
                tagline: 'Spend management platform',
                stats: [
                  { label: 'Customers', value: '25,000+' },
                  { label: 'Savings Identified', value: '$2B+' },
                  { label: 'Valuation', value: '$8B+' }
                ],
                color: 'emerald'
              },
              { 
                name: 'Mercury', 
                logo: '/fintech-logos/mercury.png',
                tagline: 'Banking for startups',
                stats: [
                  { label: 'Deposits', value: '$4B+' },
                  { label: 'Accounts', value: '100K+' },
                  { label: 'Focus', value: 'Tech Startups' }
                ],
                color: 'cyan'
              }
            ].map((fintech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <img src={fintech.logo} alt={fintech.name} className="w-12 h-12 object-contain rounded-lg mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-1">{fintech.name}</h3>
                <p className="text-sm text-slate-500 mb-6">{fintech.tagline}</p>
                <div className="space-y-3">
                  {fintech.stats.map((stat, j) => (
                    <div key={j} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                      <span className="text-sm text-slate-500">{stat.label}</span>
                      <span className="font-semibold text-blue-600">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution - Horizontal Feature Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 text-blue-600 mb-4">
                <Rocket className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">The Solution</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                LumiqAI for Regional Banks
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                A white-label SMB credit module that brings the consumer playbook to your business banking experience.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Contact Sales <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            
            <div className="lg:w-2/3 space-y-6">
              {[
                {
                  icon: BarChart3,
                  title: 'Business Credit Dashboard',
                  description: 'Real-time D&B and Experian scores with clear explanations and trend tracking.',
                  color: 'blue'
                },
                {
                  icon: Target,
                  title: 'AI-Powered Action Plans',
                  description: 'Personalized recommendations that actually improve credit profiles over time.',
                  color: 'cyan'
                },
                {
                  icon: CreditCard,
                  title: 'Embedded Lending',
                  description: 'Pre-qualified credit offers surfaced at the right moment, reducing friction to yes.',
                  color: 'emerald'
                },
                {
                  icon: Shield,
                  title: 'Proactive Monitoring',
                  description: 'Alerts for credit changes, payment due dates, and utilization thresholds.',
                  color: 'amber'
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors"
                >
                  <div className={`w-14 h-14 bg-${feature.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <feature.icon className={`w-7 h-7 text-${feature.color}-600`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results - Large Number Grid */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Impact for Regional Banks
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              When you treat SMB clients like the consumer app users they already are, results follow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '40%', label: 'Increase in SMB digital logins', icon: Users },
              { value: '3x', label: 'Faster loan origination', icon: Zap },
              { value: '25%', label: 'Reduction in attrition', icon: Shield },
              { value: '$2M+', label: 'Annual revenue per 10K SMBs', icon: DollarSign }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
              >
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                <p className="text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote className="w-16 h-16 text-blue-200 mx-auto mb-8" />
          <p className="text-2xl md:text-3xl font-serif text-slate-800 italic leading-relaxed mb-8">
            "These consumer credit modules have quickly become must-have app features, 
            driving regular logins and deepening user engagement. Regional banks can—and should—apply 
            the same approach to SMB."
          </p>
          <p className="text-slate-500 font-medium">— Industry Analysis</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#0891B2] via-[#0A0E17] to-[#0A0E17] rounded-3xl p-12 text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform SMB Banking?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Deploy in 30 days. See engagement lift in 60. Join the regional banks already winning with LumiqAI.
            </p>
            
            <div className="flex justify-center mb-10">
              <a href="/contact">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  Contact Sales <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { icon: Shield, label: 'SOC 2 Certified' },
                { icon: Award, label: 'Bank-Grade Security' },
                { icon: Zap, label: '30-Day Deploy' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-blue-200">
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyRegionalBanks;
