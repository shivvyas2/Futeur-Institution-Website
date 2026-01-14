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
  Building2
} from 'lucide-react';
import EngineNavbar from '@/components/EngineNavbar';
import Footer from '@/components/Footer';

const CaseStudyWellsFargo = () => {
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
                CASE STUDY: WELLS FARGO
              </div>
              
              {/* Headline */}
              <h1 className="text-[28px] md:text-[36px] lg:text-[48px] font-bold text-[#0F172A] leading-[1.15] tracking-tight mb-5">
                Extending Credit Close-Up to Business Owners
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl text-[#D97706] font-medium mb-4">
                Wells Fargo Business Credit Insights — Powered by LUMIQ AI
              </p>
              
              {/* Description */}
              <p className="text-base md:text-lg text-[#475569] leading-relaxed">
                A strategic initiative to mirror the proven success of Credit Close-Up in the small business segment, unlocking ~$100M+ annual value through improved conversion, reduced CAC, and deeper SMB relationships.
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
                  src="/mockups/wf-business-dashboard.png" 
                  alt="Wells Fargo Business Credit Dashboard"
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
                Credit Close-Up serves 30M+ consumers, but ~3.3M SMB customers have no equivalent tool—7+ years behind.
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
                LumiqAI's ready-to-deploy API integrates directly into Wells Fargo Business Banking—deploy in weeks, not quarters.
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
                Projected +10–15% conversion lift and $50M–$70M total 12-month value from business cards alone.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FULL WIDTH IMAGE
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-lg border border-[#E2E8F0] max-w-[240px] md:max-w-[280px] lg:max-w-[340px] mx-auto"
          >
            <img 
              src="/mockups/wf-offers.png" 
              alt="Wells Fargo Business Credit Offers"
              className="w-full h-auto"
            />
          </motion.div>
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
                  The Missing Link: Credit Close-Up for Business
                </h2>
                
                <p className="text-[#475569] text-lg leading-relaxed mb-6">
                  Wells Fargo revolutionized consumer credit with Credit Close-Up. With 30M+ users accessing free FICO scores, credit monitoring, and personalized tips, it's become a cornerstone of consumer engagement.
                </p>
                
                <p className="text-[#475569] text-lg leading-relaxed mb-6">
                  But business banking customers lack an equivalent tool. ~3.3M SMB customers have no embedded credit-monitoring tool, fragmented personal + business credit data, and manual processes for eligibility checks.
                </p>

                <p className="text-[#475569] text-lg leading-relaxed mb-8">
                  Meanwhile, fintechs are capturing SMB market share by offering credit visibility and instant pre-qualification—the exact experience Wells Fargo SMB customers are missing.
                </p>

                {/* Quote Block */}
                <div className="bg-[#FEF3C7] border-l-4 border-[#D97706] rounded-r-lg p-6 mb-8">
                  <p className="text-[#92400E] text-xl leading-relaxed italic mb-4">
                    "If Credit Close-Up drove measurable improvements for 30 million consumers, what happens when we give 3.3 million small-business owners the same clarity — plus one-tap access to business credit cards, lines of credit, and term loans?"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#D97706] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">L</span>
                    </div>
                    <div>
                      <div className="font-semibold text-[#0F172A]">LUMIQ AI Research Thesis</div>
                      <div className="text-sm text-[#64748B]">2024</div>
                    </div>
                  </div>
                </div>

                <p className="text-[#475569] text-lg leading-relaxed mb-6">
                  LumiqAI's SMB Owner Dashboard provides Dual-Score View (Personal FICO + Business), AI Score-Drivers Analysis, Multi-Bureau Data Integration, and Real-Time Pre-Qualification—all inside Wells Fargo Business Online.
                </p>

                <p className="text-[#475569] text-lg leading-relaxed">
                  Smart Card Recommendations use AI-driven matching with One-Tap Application Flow, pre-filled with Wells Fargo data and instant eligibility checks.
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
                  <img src="/logos/banks/wellsfargo.png" alt="Wells Fargo" className="h-8 w-auto" />
                  <span className="font-bold text-[#0F172A]">Wells Fargo</span>
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">Client</div>
                    <div className="text-[#0F172A] font-medium">Wells Fargo (Research Study)</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">Industry</div>
                    <div className="text-[#0F172A] font-medium">Enterprise Banking</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">SMB Clients</div>
                    <div className="text-[#0F172A] font-medium">~3.3 Million</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">Consumer Users</div>
                    <div className="text-[#0F172A] font-medium">30M+ Credit Close-Up</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">Modeled Impact</div>
                    <div className="text-[#0F172A] font-medium">$50M–$70M (Year 1)</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">Website</div>
                    <a 
                      href="https://www.wellsfargo.com/biz" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#DC2626] hover:underline font-medium"
                    >
                      wellsfargo.com/biz
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          EXPERIENCE GAP - Before/After Comparison
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
              Consumer Success vs. Business Gap
            </h2>
            <p className="text-[#475569] text-lg max-w-2xl mx-auto">
              Credit Close-Up transformed consumer engagement. SMB customers deserve the same experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Consumer Success */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-4 md:p-6 border border-[#E2E8F0]"
            >
              <div className="flex flex-col items-center mb-4">
                <span className="text-lg font-bold text-[#16A34A] mb-2">Consumer Success Story</span>
                <span className="text-sm font-medium text-[#475569]">Credit Close-Up</span>
              </div>
              <div className="rounded-lg overflow-hidden mb-4 max-w-[280px] mx-auto">
                <img
                  src="/mockups/wf-consumer-success.png" 
                  alt="Wells Fargo Consumer Credit Close-Up"
                  className="w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-[#F0FDF4] rounded-lg p-2 text-center">
                  <div className="text-sm font-bold text-[#16A34A]">+18%</div>
                  <div className="text-xs text-[#64748B]">Credit Card Apps</div>
                </div>
                <div className="bg-[#F0FDF4] rounded-lg p-2 text-center">
                  <div className="text-sm font-bold text-[#16A34A]">+12%</div>
                  <div className="text-xs text-[#64748B]">Loan Conversion</div>
                </div>
                <div className="bg-[#F0FDF4] rounded-lg p-2 text-center">
                  <div className="text-sm font-bold text-[#16A34A]">78%</div>
                  <div className="text-xs text-[#64748B]">Monthly Active</div>
                </div>
                <div className="bg-[#F0FDF4] rounded-lg p-2 text-center">
                  <div className="text-sm font-bold text-[#16A34A]">+22%</div>
                  <div className="text-xs text-[#64748B]">NPS Lift</div>
                </div>
              </div>
              <p className="text-sm text-[#64748B]">
                30M+ users with free FICO scores, credit monitoring, and personalized tips.
              </p>
            </motion.div>

            {/* Business Gap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-4 md:p-6 border border-[#E2E8F0]"
            >
              <div className="flex flex-col items-center mb-4">
                <span className="text-lg font-bold text-[#DC2626] mb-2">The Business Banking Gap</span>
                <span className="text-sm font-medium text-[#475569]">SMB Today</span>
              </div>
              <div className="rounded-lg overflow-hidden mb-4 max-w-[280px] mx-auto">
                <img
                  src="/mockups/wf-business-gap.png" 
                  alt="Wells Fargo Business Banking Gap"
                  className="w-full h-auto"
                />
              </div>
              <div className="space-y-2">
                <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-lg p-2 text-sm text-[#DC2626]">
                  No embedded credit-monitoring tool
                </div>
                <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-lg p-2 text-sm text-[#DC2626]">
                  Fragmented personal + business credit data
                </div>
                <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-lg p-2 text-sm text-[#DC2626]">
                  Manual processes for eligibility checks
                </div>
                <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-lg p-2 text-sm text-[#DC2626]">
                  Fintechs capturing SMB market share
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          TIME-TO-MARKET COMPARISON
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
              Accelerated Time-to-Market
            </h2>
            <p className="text-[#475569] text-lg max-w-3xl">
              The window is closing. LumiqAI deploys in weeks, not quarters.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Traditional Build */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#FEF2F2] rounded-xl p-6 border border-[#FECACA]"
            >
              <h3 className="text-lg font-bold text-[#DC2626] mb-6">Traditional Build-from-Scratch</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-[#FECACA] pb-3">
                  <span className="text-[#64748B]">Q1: Requirements & Design</span>
                  <span className="text-[#0F172A] font-medium">3 months</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#FECACA] pb-3">
                  <span className="text-[#64748B]">Q2: Development & Integration</span>
                  <span className="text-[#0F172A] font-medium">3 months</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#FECACA] pb-3">
                  <span className="text-[#64748B]">Q3: Testing & Compliance</span>
                  <span className="text-[#0F172A] font-medium">3 months</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#FECACA] pb-3">
                  <span className="text-[#64748B]">Q4: Pilot & Deployment</span>
                  <span className="text-[#0F172A] font-medium">3 months</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-[#0F172A] font-bold">Total Time to Market</span>
                  <span className="text-2xl font-bold text-[#DC2626]">12 months</span>
                </div>
              </div>
            </motion.div>

            {/* LumiqAI Ready-to-Deploy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#F0FDF4] rounded-xl p-6 border border-[#BBF7D0]"
            >
              <h3 className="text-lg font-bold text-[#16A34A] mb-6">LUMIQ AI Ready-to-Deploy</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-[#BBF7D0] pb-3">
                  <span className="text-[#64748B]">Weeks 0–2: API Integration & Setup</span>
                  <span className="text-[#0F172A] font-medium">2 weeks</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#BBF7D0] pb-3">
                  <span className="text-[#64748B]">Weeks 3–8: Live A/B Pilot</span>
                  <span className="text-[#0F172A] font-medium">6 weeks</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#BBF7D0] pb-3">
                  <span className="text-[#64748B]">Weeks 9–12: Analysis & Scale</span>
                  <span className="text-[#0F172A] font-medium">4 weeks</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-[#0F172A] font-bold">Total Time to Market</span>
                  <span className="text-2xl font-bold text-[#16A34A]">90 days</span>
                </div>
                <div className="bg-[#DCFCE7] rounded-lg p-4 text-center mt-4">
                  <div className="text-2xl font-bold text-[#16A34A]">9 months saved</div>
                  <div className="text-sm text-[#64748B]">Revenue generation starts 75% sooner</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          THE LUMIQ DIFFERENCE - Results Section
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
              Projected 12-Month Revenue Impact
            </h2>
            <p className="text-[#475569] text-lg max-w-3xl">
              Business cards only. Post 90-day pilot and full deployment.
            </p>
          </motion.div>

          {/* Key Metrics Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { value: '18K–25K', label: 'Incremental Booked Cards', sublabel: 'From improved pre-qualification' },
              { value: '$42M–$58M', label: 'Gross Interchange Revenue', sublabel: 'Based on avg. $25K credit line' },
              { value: '$8M–$12M', label: 'CAC Savings', sublabel: 'Reduced acquisition costs' },
              { value: '$50M–$70M', label: 'Total 12-Month Value', sublabel: 'Conservative estimate' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                className="text-center p-6 bg-white rounded-xl border border-[#E2E8F0]"
              >
                <div className="text-[28px] font-bold text-[#DC2626] mb-1">{stat.value}</div>
                <div className="text-[#0F172A] font-medium text-sm">{stat.label}</div>
                <div className="text-[#64748B] text-xs">{stat.sublabel}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          WHAT SUCCESS LOOKS LIKE
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
              What Success Looks Like
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* For Business Owners */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#FEF3C7] rounded-xl p-6 border border-[#FDE68A]"
            >
              <h3 className="text-xl font-bold text-[#D97706] mb-6">For Business Owners</h3>
              <ul className="space-y-4 text-[#475569]">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
                  <span>Log into Wells Fargo Business Online and immediately see credit health</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
                  <span>Receive proactive tips tailored to business credit improvement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
                  <span>Find relevant, pre-qualified offers without chasing external providers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
                  <span>Experience Wells Fargo as a partner in growth, not just a bank</span>
                </li>
              </ul>
            </motion.div>

            {/* For Wells Fargo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#FEF2F2] rounded-xl p-6 border border-[#FECACA]"
            >
              <h3 className="text-xl font-bold text-[#DC2626] mb-6">For Wells Fargo</h3>
              <ul className="space-y-4 text-[#475569]">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
                  <span>Higher conversion to business credit cards, LOC, and term loans</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
                  <span>Lower CAC from existing customer base (deeper wallet share)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
                  <span>Better underwriting inputs with score overlays and explainable logic</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
                  <span>Improved loss performance with defined decision rules and audit logs</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          90-DAY PILOT TIMELINE
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
              90-Day Pilot Framework
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { weeks: 'Weeks 0–2', title: 'Integration & Setup', items: ['API integration', 'Compliance review', 'User acceptance testing'], color: 'bg-[#EFF6FF] border-[#BFDBFE]' },
              { weeks: 'Weeks 3–8', title: 'Live A/B Testing', items: ['Controlled rollout', 'Performance monitoring', 'User feedback loops'], color: 'bg-[#F0FDF4] border-[#BBF7D0]' },
              { weeks: 'Weeks 9–12', title: 'Scale Decision', items: ['Data analysis', 'ROI validation', 'Full deployment plan'], color: 'bg-[#FEF3C7] border-[#FDE68A]' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`${item.color} border rounded-xl p-6`}
              >
                <span className="text-[#64748B] text-xs font-semibold uppercase tracking-wider">{item.weeks}</span>
                <h3 className="font-bold text-[#0F172A] text-lg mt-2 mb-3">{item.title}</h3>
                <ul className="text-[#475569] text-sm space-y-1">
                  {item.items.map((listItem, j) => (
                    <li key={j}>• {listItem}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CITATIONS & REFERENCES
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]"
          >
            <h4 className="font-bold text-[#0F172A] mb-6">Citations & References</h4>
            <ul className="text-sm text-[#64748B] space-y-2">
              <li>• Wells Fargo Credit Close-Up: Free monthly FICO® Score 9 from Experian®</li>
              <li>• Wells Fargo Financial Health Tools and Credit Close-Up consumer adoption data</li>
              <li>• Wells Fargo Consumer, Small & Business Banking segment (~3.3M business customers)</li>
              <li>• TransUnion research on credit monitoring impact</li>
              <li>• Industry research on fintech SMB market share and digital banking preferences</li>
            </ul>
          </motion.div>

          {/* Legal Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 bg-[#FEF3C7] border border-[#FDE68A] rounded-lg p-4 text-sm text-[#92400E]"
          >
            <strong>Legal Notice:</strong> LumiqAI is independent; no affiliation with Wells Fargo & Company implied. All figures are directional estimates based on public data and industry benchmarks.
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 bg-[#F1F5F9] border border-[#E2E8F0] rounded-lg p-4 text-xs text-[#64748B]"
          >
            <strong>Disclaimer:</strong> All screenshots, mockups, and visual demonstrations on this website use Wells Fargo logos, branding, and design elements for illustrative and demonstration purposes only. These materials are not official Wells Fargo products or services, and no affiliation, endorsement, or partnership with Wells Fargo & Company is implied or intended. All trademarks, logos, and brand names are the property of their respective owners. This website is for evaluation and demonstration purposes only.
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#F8FAFC]">
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

export default CaseStudyWellsFargo;
