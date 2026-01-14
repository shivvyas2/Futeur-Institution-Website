import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight,
  ArrowUpRight, 
  Mountain,
  Wrench,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  CheckCircle,
  Quote,
  Building2,
  CreditCard,
  Shield,
  Zap,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import EngineNavbar from '@/components/EngineNavbar';
import Footer from '@/components/Footer';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const CaseStudyChase = () => {
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
              {/* Category Label - Green like Clover */}
              <div className="text-[#16A34A] font-semibold text-sm uppercase tracking-wide mb-4">
                CASE STUDY: CHASE
              </div>
              
              {/* Headline */}
              <h1 className="text-[28px] md:text-[36px] lg:text-[48px] font-bold text-[#0F172A] leading-[1.15] tracking-tight mb-5">
                The Missing $100M+ Line Item for 7M Chase SMB Clients
              </h1>
              
              {/* Description */}
              <p className="text-base md:text-lg text-[#475569] leading-relaxed">
                Credit Journey proved that score + education + offers scales for 22M consumers. LUMIQ AI applies the same mechanics to small-business credit decisions while fintechs capture 40% of new banking relationships.
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
                  src="/mockups/chase-consumer.png" 
                  alt="Chase Credit Journey Dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CHALLENGE / SOLUTION / RESULT STRIP - Clover Style
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
                7M SMB clients have no "Business Credit Journey" experience while fintechs capture 40% of new relationships.
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
                LumiqAI embeds SMB credit visibility, policy-aligned pre-qualification, and one-tap applications inside Chase Business app.
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
                Modeled $100M+ Stage 1 uplift from Ink cards alone, with Stage 2 lending ecosystem potential of $210–320M.
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
              src="/mockups/chase-smb-visibility.png" 
              alt="Chase SMB Credit Visibility Dashboard"
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
                  How Chase could capture $100M+ in SMB credit opportunity
                </h2>
                
                <p className="text-[#475569] text-lg leading-relaxed mb-6">
                  Chase's 6-7M small-business clients have no equivalent "Business Credit Journey" experience. While Credit Journey transformed consumer engagement with 22M+ users, SMBs who bank with Chase are getting coaching—and offers—from fintechs instead.
                </p>
                
                <p className="text-[#475569] text-lg leading-relaxed mb-6">
                  McKinsey 2024/2025 research confirms: "Good online and mobile banking is the #1 reason SMEs choose a primary bank." Yet Chase SMB customers see product-centric pages (Ink, LOC, term, CRE) without a unified journey.
                </p>

                <p className="text-[#475569] text-lg leading-relaxed mb-8">
                  LumiqAI changes this by surfacing owner FICO and business-credit signals (e.g., Experian Intelliscore, FSR) directly in the Chase Business app UI—no extra logins required. Pre-qualified applications flow seamlessly from visibility to conversion.
                </p>

                {/* Quote Block */}
                <div className="bg-[#F0FDF4] border-l-4 border-[#16A34A] rounded-r-lg p-6 mb-8">
                  <p className="text-[#16A34A] text-xl leading-relaxed italic mb-4">
                    "If Credit Journey worked this well for 80M+ consumers, what happens when you give 7M small-business owners the same clarity—plus one-tap access to Ink cards and, later, LOC/term/CRE lending?"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#16A34A] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">L</span>
                    </div>
                    <div>
                      <div className="font-semibold text-[#0F172A]">LUMIQ AI Research Thesis</div>
                      <div className="text-sm text-[#64748B]">2024</div>
                    </div>
                  </div>
                </div>

                <p className="text-[#475569] text-lg leading-relaxed mb-6">
                  With LumiqAI's policy-aligned pre-qualification, Chase's risk appetite, underwriting inputs, and guardrails (5/24, 2/30, bureau status) are applied automatically. SMB owners see explainable likelihood-of-approval before they apply.
                </p>

                <p className="text-[#475569] text-lg leading-relaxed">
                  The internal Control Tower dashboard shows eligible SMBs, funnel conversion, approval-rate delta, loss-rate delta, and A/B lift—giving risk and product teams full visibility into performance.
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
                  <img src="/logos/banks/chase.png" alt="Chase" className="h-8 w-auto" />
                  <span className="font-bold text-[#0F172A]">Chase</span>
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">Client</div>
                    <div className="text-[#0F172A] font-medium">Chase (Research Study)</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">Industry</div>
                    <div className="text-[#0F172A] font-medium">Enterprise Banking</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">SMB Clients</div>
                    <div className="text-[#0F172A] font-medium">~7 Million</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">Study Date</div>
                    <div className="text-[#0F172A] font-medium">Q4 2024</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">Modeled Impact</div>
                    <div className="text-[#0F172A] font-medium">$100M+ Stage 1</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">Website</div>
                    <a 
                      href="https://www.chase.com/business" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#2563EB] hover:underline font-medium"
                    >
                      chase.com/business
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
              The Experience Gap: Consumer vs. SMB
            </h2>
            <p className="text-[#475569] text-lg max-w-2xl mx-auto">
              Chase's consumer Credit Journey sets the standard. SMB customers deserve the same experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Consumer Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-4 md:p-6 border border-[#E2E8F0]"
            >
              <div className="flex flex-col items-center mb-4">
                <img 
                  src="/logos/chase-consumer.svg" 
                  alt="Chase" 
                  className="h-6 mb-2"
                />
                <span className="text-sm font-medium text-[#475569]">Consumer View</span>
              </div>
              <div className="rounded-lg overflow-hidden mb-4 max-w-[280px] mx-auto">
                <img
                  src="/mockups/chase-consumer.png" 
                  alt="Chase Consumer Credit Journey"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-[#64748B]">
                Credit Journey, Score Planner, education, embedded offers — 22M+ users engaged.
              </p>
            </motion.div>

            {/* SMB Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-4 md:p-6 border border-[#E2E8F0]"
            >
              <div className="flex flex-col items-center mb-4">
                <img 
                  src="/logos/chase-business.svg" 
                  alt="Chase for Business" 
                  className="h-6 mb-2"
                />
                <span className="text-sm font-medium text-[#475569]">SMB View</span>
              </div>
              <div className="rounded-lg overflow-hidden mb-4 max-w-[280px] mx-auto">
                <img
                  src="/mockups/chase-smb-current.png" 
                  alt="Chase SMB Current Experience"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-[#64748B]">
                Product-centric pages (Ink, LOC, term, CRE) without a unified credit journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          THE LUMIQ DIFFERENCE - Results Section
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
              The LumiqAI Difference
            </h2>
            <p className="text-[#475569] text-lg max-w-3xl">
              Modeled impact calibrated to Chase scale and public benchmarks. These are directional estimates, not forecasts.
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
              { value: '$100M+', label: 'Stage 1 Total Uplift', sublabel: 'From Ink cards alone' },
              { value: '+15–25%', label: 'App-to-booked lift', sublabel: 'Conversion increase' },
              { value: '~55K', label: 'Incremental Cards', sublabel: 'Booked annually' },
              { value: '$210–320M', label: 'Stage 2 Range', sublabel: 'Lending ecosystem' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                className="text-center p-6 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]"
              >
                <div className="text-[32px] font-bold text-[#2563EB] mb-1">{stat.value}</div>
                <div className="text-[#0F172A] font-medium text-sm">{stat.label}</div>
                <div className="text-[#64748B] text-xs">{stat.sublabel}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stage Breakdown */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Stage 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#EFF6FF] rounded-xl p-6 border border-[#BFDBFE]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <h4 className="font-bold text-[#0F172A]">Stage 1: Ink Business Cards</h4>
              </div>
              <ul className="space-y-2 text-sm text-[#475569]">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />Target: 250K–400K digitally active SMBs</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />Gross interchange: ~$79.4M/year</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />CAC savings: ~$9.2M/year</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />Additional fee income: ~$14M+</li>
              </ul>
            </motion.div>

            {/* Stage 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#F0FDF4] rounded-xl p-6 border border-[#BBF7D0]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#16A34A] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <h4 className="font-bold text-[#0F172A]">Stage 2: Lending Ecosystem</h4>
              </div>
              <ul className="space-y-2 text-sm text-[#475569]">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />Business Line of Credit: $50–80M</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />Term Loans: $80–120M</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />Commercial Real Estate: $80–120M</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />Based on unmet SME credit demand</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          WHAT WE BUILT - Platform Showcase
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
            <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#2563EB] text-sm font-medium px-4 py-2 rounded-full mb-4">
              <span>Built on Chase Credit Journey® Principles</span>
            </div>
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#0F172A] mb-4">
              The Credit Journey For Business
            </h2>
            <p className="text-[#475569] text-lg max-w-3xl mx-auto">
              Pre-qualify & convert your small-business customers to the right credit product — inside your existing risk controls.
            </p>
          </motion.div>

          {/* Stats Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {[
              { value: '+25%', label: 'conversion lift' },
              { value: '$79.4M', label: 'incremental' },
              { value: '100%', label: 'audit-trail' },
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-[#E2E8F0] rounded-full px-5 py-2 flex items-center gap-2">
                <span className="font-bold text-[#2563EB]">{stat.value}</span>
                <span className="text-[#64748B] text-sm">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Consumer vs Business Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <p className="text-[#64748B]">Used by <span className="text-[#2563EB] font-semibold">22M+ consumers</span>. Built for <span className="text-[#16A34A] font-semibold">~7M SMBs</span>.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Consumer Credit Journey */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-[#E5F0FF] to-[#F0F7FF] rounded-2xl p-6 mb-4">
                  <img 
                    src="/mockups/chase-consumer-journey.png" 
                    alt="Consumer Credit Journey Mobile App"
                    className="w-full max-w-[280px] mx-auto h-auto rounded-xl shadow-lg"
                  />
                </div>
                <h4 className="font-bold text-[#0F172A] text-lg mb-2">Consumer Credit Journey</h4>
                <p className="text-[#64748B] text-sm">Free credit-score monitoring, insights, and personalized plans</p>
              </div>

              {/* Business Credit Journey */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-[#E5F5EC] to-[#F0FAF5] rounded-2xl p-6 mb-4">
                  <img 
                    src="/mockups/chase-business-journey.png" 
                    alt="Business Credit Journey Mobile App"
                    className="w-full max-w-[280px] mx-auto h-auto rounded-xl shadow-lg"
                  />
                </div>
                <h4 className="font-bold text-[#0F172A] text-lg mb-2">Business Credit Journey</h4>
                <p className="text-[#64748B] text-sm">Owner FICO + Business Intelliscore + FSR with soft approvals</p>
              </div>
            </div>
          </motion.div>

          {/* USS Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#0F172A] rounded-2xl p-8 md:p-12 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <span>Unique Salient Similarities (USS)</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              The proven playbook applied to business credit
            </h3>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
              Chase Credit Journey® revolutionized consumer credit engagement. Now the same proven science powers business credit intelligence.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { value: '22M+', label: 'Active Users Engaged' },
                { value: '+25%', label: 'Increase in Card Applications' },
                { value: '$340M', label: 'Additional Revenue (18 Months)' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-bold text-[#2563EB] mb-1">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <p className="text-white/60 text-sm">
              Same science. Same proven engagement model. Same compliance rigor. Now applied to the $2.3T business credit market.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#0F172A] mb-4">
              Why Chase would love LumiqAI
            </h2>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {[
              'Revenue lift: More qualified SMBs converted within existing risk appetite',
              'Risk & Compliance ready: ECOA/FCRA/GLBA ready with model-risk governance built in',
              'Operational efficiency: Reduces manual reviews with faster time-to-decision',
              'API-first integration: Sandbox ready with non-disruptive A/B pilots',
              'Governance-aligned: Applies Chase risk appetite, underwriting inputs, and guardrails (5/24, 2/30, bureau status)',
              'Full visibility: Internal Control Tower shows funnel conversion, approval-rate delta, loss-rate delta, and A/B lift'
            ].map((benefit, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                <span className="text-[#475569]">{benefit}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          90-DAY PILOT TIMELINE
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#0F172A] mb-4">
              How We'd Prove It in 90 Days
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { weeks: '0–2', title: 'Connect & Simulate', description: "Connect scores & sandbox; create simulated 'Credit Journey for Business' cohort.", color: 'bg-[#EFF6FF] border-[#BFDBFE]' },
              { weeks: '3–8', title: 'A/B Test & Measure', description: 'Test vs. current flows. Measure lift, approval-rate delta, loss-rate delta.', color: 'bg-[#F0FDF4] border-[#BBF7D0]' },
              { weeks: '9–12', title: 'Scale Decision', description: 'Scale to broader SMB segment if KPIs are met.', color: 'bg-[#FEF3C7] border-[#FDE68A]' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`${item.color} border rounded-xl p-6`}
              >
                <span className="text-[#64748B] text-xs font-semibold uppercase tracking-wider">Weeks {item.weeks}</span>
                <h3 className="font-bold text-[#0F172A] text-lg mt-2 mb-3">{item.title}</h3>
                <p className="text-[#475569] text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CITATIONS & REFERENCES
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-6 border border-[#E2E8F0]"
          >
            <h4 className="font-bold text-[#0F172A] mb-6">Citations & References</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              {[
                { num: '1', source: 'JPMorgan Chase Investor Day 2020' },
                { num: '2', source: 'Chase Credit Journey / Experian (2019)' },
                { num: '3', source: 'Curinos Banking Study (2023)' },
                { num: '4', source: 'Digital Banking Consumer Survey (2021)' },
                { num: '5', source: 'JPMorgan Chase Investor Day 2019' },
                { num: '6', source: 'Federal Reserve SBCS' },
                { num: '7', source: 'World Bank / IFC SME Reports' },
                { num: '8', source: 'SBA SBLC Program' },
                { num: '9', source: 'McKinsey (2024/2025)' },
              ].map((cite, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-[#F1F5F9] border border-[#E2E8F0] rounded-full flex items-center justify-center text-xs text-[#64748B] flex-shrink-0">
                    {cite.num}
                  </span>
                  <span className="text-[#64748B]">{cite.source}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Legal Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 bg-[#FEF3C7] border border-[#FDE68A] rounded-lg p-4 text-sm text-[#92400E]"
          >
            <strong>Legal Notice:</strong> LumiqAI is independent; no affiliation with JPMorgan Chase implied. All figures are directional estimates based on public data and industry benchmarks.
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 bg-[#F1F5F9] border border-[#E2E8F0] rounded-lg p-4 text-xs text-[#64748B]"
          >
            <strong>Disclaimer:</strong> All screenshots, mockups, and visual demonstrations on this website use Chase logos, branding, and design elements for illustrative and demonstration purposes only. These materials are not official Chase products or services, and no affiliation, endorsement, or partnership with JPMorgan Chase & Co. is implied or intended. All trademarks, logos, and brand names are the property of their respective owners. This website is for evaluation and demonstration purposes only.
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
                className="inline-flex items-center justify-center gap-2 bg-[#16A34A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#15803D] transition-colors"
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

export default CaseStudyChase;
