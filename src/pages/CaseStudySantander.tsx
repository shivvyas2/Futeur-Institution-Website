import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight,
  ArrowUpRight, 
  Mountain,
  Wrench,
  TrendingUp,
  CheckCircle,
  XCircle,
  Building2
} from 'lucide-react';
import EngineNavbar from '@/components/EngineNavbar';
import Footer from '@/components/Footer';

const CaseStudySantander = () => {
  return (
    <div className="min-h-screen bg-white">
      <EngineNavbar />
      
      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION - Clover Style (Split Layout)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="pt-28 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link 
              to="/case-studies/banks" 
              className="inline-flex items-center gap-2 text-[#64748B] hover:text-[#0F172A] transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Case Studies</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Category Label */}
              <div className="text-[#DC2626] font-semibold text-sm uppercase tracking-wide mb-4">
                CASE STUDY: SANTANDER
              </div>
              
              {/* Headline */}
              <h1 className="text-[28px] md:text-[36px] lg:text-[48px] font-bold text-[#0F172A] leading-[1.15] tracking-tight mb-5">
                Stop Credit Shoppers From Leaving Santander
              </h1>
              
              {/* Description */}
              <p className="text-base md:text-lg text-[#475569] leading-relaxed mb-4">
                LumiqAI embeds Consumer VantageScore 3.0, Business credit intelligence, deposit stability, and soft-prequal orchestration directly into Santander's digital channels—boosting funded conversions across auto, cards, and SMB lending.
              </p>

              <p className="text-sm text-[#64748B]">
                Plug-in Module. No Core Replacement. No Raw Credentials Stored.
              </p>
            </motion.div>

            {/* Right - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex justify-center order-first lg:order-last"
            >
              <div className="rounded-xl overflow-hidden shadow-lg max-w-[240px] md:max-w-[280px] lg:max-w-[340px] border border-[#E2E8F0]">
                <img 
                  src="/mockups/santander-hero.png" 
                  alt="LumiqAI Credit Intelligence in Santander App"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CHALLENGE / SOLUTION / RESULT STRIP
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* The Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4">
                <Mountain className="w-full h-full text-[#64748B]" strokeWidth={1} />
              </div>
              <h3 className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-2">The challenge</h3>
              <p className="text-[#0F172A] font-medium">
                Santander educates borrowers on credit—then loses them at eligibility. Competitors already capture credit intent in-app.
              </p>
            </motion.div>

            {/* The Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4">
                <Wrench className="w-full h-full text-[#64748B]" strokeWidth={1} />
              </div>
              <h3 className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-2">The solution</h3>
              <p className="text-[#0F172A] font-medium">
                LumiqAI surfaces VantageScore 3.0, business credit signals, and instant prequal orchestration inside Santander's digital channels.
              </p>
            </motion.div>

            {/* The Result */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4">
                <TrendingUp className="w-full h-full text-[#64748B]" strokeWidth={1} />
              </div>
              <h3 className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-2">The result</h3>
              <p className="text-[#0F172A] font-medium">
                Approval likelihood improves by 30–45%, with 3-year projected value of $300M+ and 3.8× ROI.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════
          NARRATIVE SECTION - Clover Style with Sidebar
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content - 2 columns */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-[28px] md:text-[32px] font-bold text-[#0F172A] leading-tight mb-6">
                  The Problem: Borrowers shop credit first. Santander captures loans last.
                </h2>
                
                <p className="text-[#475569] text-lg leading-relaxed mb-6">
                  Santander Consumer's Learning Center explains loan dependency on credit and directs users to external score sources. Santander Bank surfaces auto finance through AutoFi, but does not surface persistent credit health natively in-app.
                </p>
                
                <p className="text-[#475569] text-lg leading-relaxed mb-6">
                  No unified consumer or SMB credit monitoring exists inside Santander's digital product navigation. Execution is strong. Owned intelligence context is missing. That's the leak.
                </p>

                <p className="text-[#475569] text-lg leading-relaxed mb-8">
                  Competitors already capture credit intent in-app: Chase Credit Journey, Capital One CreditWise, Wells Fargo Credit Close-Up, Citi In-App FICO.
                </p>

                {/* Quote Block */}
                <div className="bg-[#FEF2F2] border-l-4 border-[#DC2626] rounded-r-lg p-6 mb-8">
                  <p className="text-[#991B1B] text-xl leading-relaxed italic mb-4">
                    "45% of auto borrowers research financing before purchase. 60% of digital shoppers complete a pre-approval step before applying. Santander pays more CAC to acquire borrowers it could be converting natively."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#DC2626] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">L</span>
                    </div>
                    <div>
                      <div className="font-semibold text-[#0F172A]">LUMIQ AI Leakage Economics</div>
                      <div className="text-sm text-[#64748B]">2024</div>
                    </div>
                  </div>
                </div>

                <p className="text-[#475569] text-lg leading-relaxed mb-6">
                  With LumiqAI, Santander gains a Consumer Credit Panel with VantageScore 3.0 visible in-app, monitored monthly, with utilization trend lines, alerts, and 'next best actions' surfaced before product pathing.
                </p>

                <p className="text-[#475569] text-lg leading-relaxed">
                  Business Credit Panel surfaces D&B + Experian Biz + SAM.gov UEI registry completeness, tradeline health, and file completeness indicators. Eligibility Carousel uses deposit behavior + bureau scores + registry signals to surface pre-approved offers.
                </p>
              </motion.div>
            </div>

            {/* Sidebar - Company Details */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#F8FAFC] rounded-xl p-6 sticky top-24"
              >
                {/* Logo */}
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#E2E8F0]">
                  <Building2 className="w-8 h-8 text-[#DC2626]" />
                  <span className="font-bold text-[#0F172A]">Santander</span>
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">Client</div>
                    <div className="text-[#0F172A] font-medium">Santander (Research Study)</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">Industry</div>
                    <div className="text-[#0F172A] font-medium">Consumer & Business Banking</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">Serviced Customers</div>
                    <div className="text-[#0F172A] font-medium">~3 Million</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">Study Date</div>
                    <div className="text-[#0F172A] font-medium">Q4 2024</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">Modeled Impact</div>
                    <div className="text-[#0F172A] font-medium">$300M+ (3-Year)</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">Website</div>
                    <a 
                      href="https://www.santanderbank.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#DC2626] hover:underline font-medium"
                    >
                      santanderbank.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          TWO REALITIES - Before/After Comparison
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#0F172A] mb-4">
              Two realities. One leaks. One converts.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Without LumiqAI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-4 md:p-6 border border-[#E2E8F0]"
            >
              <h3 className="text-xl font-bold text-[#DC2626] mb-6 text-center">Without LumiqAI</h3>
              
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
                <div className="text-center">
                  <div className="rounded-lg overflow-hidden mb-2 max-w-[120px] md:max-w-[160px] lg:max-w-[200px] mx-auto shadow-lg">
                    <img 
                      src="/mockups/santander-consumer-without.png" 
                      alt="Consumer app without LumiqAI"
                      className="w-full h-auto"
                    />
                  </div>
                  <span className="text-sm text-[#64748B]">Consumer</span>
                </div>
                <div className="text-center">
                  <div className="rounded-lg overflow-hidden mb-2 max-w-[120px] md:max-w-[160px] lg:max-w-[200px] mx-auto shadow-lg">
                    <img 
                      src="/mockups/santander-business-without.png" 
                      alt="Business app without LumiqAI"
                      className="w-full h-auto"
                    />
                  </div>
                  <span className="text-sm text-[#64748B]">Business</span>
                </div>
              </div>

              <div className="space-y-2">
                {[
                  'No unified credit readiness view',
                  'No persistent consumer score monitoring',
                  'No business credit file surface',
                  'No deposit-based offer carousel',
                  'No in-app product recommendations',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-[#DC2626] text-sm">
                    <XCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* With LumiqAI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-4 md:p-6 border-2 border-[#16A34A]"
            >
              <h3 className="text-xl font-bold text-[#16A34A] mb-6 text-center">With LumiqAI</h3>
              
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
                <div className="text-center">
                  <div className="rounded-lg overflow-hidden mb-2 max-w-[120px] md:max-w-[160px] lg:max-w-[200px] mx-auto shadow-lg">
                    <img 
                      src="/mockups/santander-consumer-with.png" 
                      alt="Consumer app with LumiqAI"
                      className="w-full h-auto"
                    />
                  </div>
                  <span className="text-sm text-[#64748B]">Consumer</span>
                </div>
                <div className="text-center">
                  <div className="rounded-lg overflow-hidden mb-2 max-w-[120px] md:max-w-[160px] lg:max-w-[200px] mx-auto shadow-lg">
                    <img 
                      src="/mockups/santander-business-with.png" 
                      alt="Business app with LumiqAI"
                      className="w-full h-auto"
                    />
                  </div>
                  <span className="text-sm text-[#64748B]">Business</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg p-2">
                  <div className="font-semibold text-[#16A34A] text-sm">Consumer Credit Panel</div>
                  <p className="text-xs text-[#64748B]">VantageScore 3.0 visible in-app, monitored monthly</p>
                </div>
                <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg p-2">
                  <div className="font-semibold text-[#16A34A] text-sm">Business Credit Panel</div>
                  <p className="text-xs text-[#64748B]">D&B + Experian Biz + SAM.gov registry</p>
                </div>
                <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg p-2">
                  <div className="font-semibold text-[#16A34A] text-sm">Eligibility Carousel</div>
                  <p className="text-xs text-[#64748B]">Pre-approved offers surfaced in-app</p>
                </div>
                <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg p-2">
                  <div className="font-semibold text-[#16A34A] text-sm">Instant Prequal</div>
                  <p className="text-xs text-[#64748B]">Soft pull with consent orchestration</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-lg text-[#0F172A] mt-8"
          >
            <span className="text-[#64748B]">AutoFi executes.</span>{' '}
            <span className="text-[#DC2626] font-semibold">LumiqAI ensures Santander wins before execution.</span>
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          LEAKAGE ECONOMICS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#0F172A] mb-4">
              Leakage Economics
            </h2>
            <p className="text-[#475569] text-lg max-w-3xl">
              Borrowers shop credit first. Santander captures loans last—after competitors already win.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#FEF2F2] rounded-xl p-6 border border-[#FECACA] text-center"
            >
              <div className="text-5xl font-bold text-[#DC2626] mb-2">45%</div>
              <div className="text-[#64748B]">of auto borrowers research financing before purchase</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#FEF2F2] rounded-xl p-6 border border-[#FECACA] text-center"
            >
              <div className="text-5xl font-bold text-[#DC2626] mb-2">60%</div>
              <div className="text-[#64748B]">of digital shoppers complete a pre-approval step before applying</div>
            </motion.div>
          </div>

          {/* Leakage Math */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]"
          >
            <h3 className="text-xl font-bold text-[#0F172A] mb-6">Leakage Math</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-[#E2E8F0] pb-4">
                <span className="text-[#64748B]">Serviced Customers</span>
                <span className="text-xl font-bold text-[#0F172A]">3M</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E2E8F0] pb-4">
                <span className="text-[#64748B]">Enter Annual Shopping Window (10–20%)</span>
                <span className="text-xl font-bold text-[#0F172A]">300K–600K</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E2E8F0] pb-4">
                <span className="text-[#64748B]">Research Financing (45%)</span>
                <span className="text-xl font-bold text-[#0F172A]">135K–270K</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#64748B]">Complete Pre-Approval Pull (60%)</span>
                <span className="text-xl font-bold text-[#DC2626]">81K–162K lost</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PROJECTED IMPACT
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#0F172A] mb-4">
              What Santander gains in 90 days
            </h2>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid md:grid-cols-3 gap-6 mb-8"
          >
            {[
              { label: 'Auto Lending', value: '+34%', desc: 'lead volume via AutoFi' },
              { label: 'Consumer Cards', value: '30–40%', desc: 'lift when credit is surfaced natively' },
              { label: 'SMB Lending', value: '25–35%', desc: 'funded conversion lift' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-[#E2E8F0] text-center">
                <div className="text-sm text-[#64748B] mb-2">{item.label}</div>
                <div className="text-3xl font-bold text-[#DC2626] mb-2">{item.value}</div>
                <div className="text-sm text-[#64748B]">{item.desc}</div>
              </div>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 border border-[#E2E8F0] text-center"
            >
              <div className="text-sm text-[#64748B] mb-2">Churn Reduction</div>
              <div className="text-3xl font-bold text-[#16A34A] mb-2">≥65%</div>
              <div className="text-sm text-[#64748B]">SMB drop-off prevention with proactive credit nudges</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#FEF2F2] rounded-xl p-6 border border-[#FECACA] text-center"
            >
              <div className="text-sm text-[#64748B] mb-2">3-Year Value</div>
              <div className="text-3xl font-bold text-[#DC2626] mb-2">$300M+</div>
              <div className="text-sm text-[#64748B]">incremental conversion gravity, 3.8× ROI, 42% engagement lift</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECURITY
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#0F172A] mb-4">
              Built for regulated banking environments
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          >
            {[
              'Encryption in transit & at rest',
              'RBAC + audit logs',
              'FCRA permissible purpose capture',
              'Dealer, consumer, and SMB data partitioning',
            ].map((item, i) => (
              <div key={i} className="bg-[#F0FDF4] rounded-lg p-4 flex items-center gap-3 border border-[#BBF7D0]">
                <CheckCircle className="w-5 h-5 text-[#16A34A] flex-shrink-0" />
                <span className="text-sm text-[#0F172A]">{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#64748B] text-center max-w-3xl mx-auto"
          >
            No raw credentials stored. No cross-signal bleed. Every decision auditable. Permissible purpose + consent captured before soft pull.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CITATIONS & REFERENCES
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6">
          {/* Legal Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#FEF3C7] border border-[#FDE68A] rounded-lg p-4 text-sm text-[#92400E]"
          >
            <strong>Legal Notice:</strong> LumiqAI is independent; no affiliation with Santander Bank, N.A. implied. All figures are directional estimates based on public data and industry benchmarks.
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 bg-[#F1F5F9] border border-[#E2E8F0] rounded-lg p-4 text-xs text-[#64748B]"
          >
            <strong>Disclaimer:</strong> All screenshots, mockups, and visual demonstrations on this website use Santander logos, branding, and design elements for illustrative and demonstration purposes only. These materials are not official Santander products or services, and no affiliation, endorsement, or partnership with Santander Bank, N.A. is implied or intended. All trademarks, logos, and brand names are the property of their respective owners. This website is for evaluation and demonstration purposes only.
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#0F172A] mb-4">
              Ready to Transform Your Credit Intelligence?
            </h2>
            <p className="text-[#475569] text-lg mb-8 max-w-2xl mx-auto">
              4 weeks integration. 90 days pilot. See measurable results with LumiqAI.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#DC2626] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#B91C1C] transition-colors"
              >
                Contact Sales
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CaseStudySantander;
