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

const CaseStudyCiti = () => {
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
              <div className="text-[#2563EB] font-semibold text-sm uppercase tracking-wide mb-4">
                CASE STUDY: CITI
              </div>
              
              {/* Headline */}
              <h1 className="text-[28px] md:text-[36px] lg:text-[48px] font-bold text-[#0F172A] leading-[1.15] tracking-tight mb-5">
                Modernizing Citi's Credit Funnel Through Consumer + SMB Intelligence
              </h1>
              
              {/* Description */}
              <p className="text-base md:text-lg text-[#475569] leading-relaxed">
                A strategic assessment of Citi's credit visibility gap — and how LumiqAI restores approvals, retention, and competitive positioning across both Consumer and Business Banking.
              </p>
            </motion.div>

            {/* Right - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex justify-center order-first lg:order-last"
            >
              <div className="max-w-[320px] md:max-w-[400px] lg:max-w-[480px]">
                <img 
                  src="/mockups/citi-hero-dual.png" 
                  alt="Citi Credit Intelligence - Consumer and Business"
                  className="w-full h-auto object-contain"
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
                Citi is the only top-4 U.S. bank without consumer or SMB credit intelligence inside its mobile apps.
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
                LumiqAI deploys a dual-system Consumer + SMB credit intelligence layer directly into Citi's digital channels.
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
                Modeled recovery of $900M–$1.6B annually in lost revenue, with 18% incremental approvals identified.
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
                  How Citi loses the customer before the application begins
                </h2>
                
                <p className="text-[#475569] text-lg leading-relaxed mb-6">
                  Citi's customers must leave Citi's ecosystem to check their credit score. The moment they do, Chase, AmEx, Capital One, Apple Card, and fintech lenders intercept them with prequalification offers.
                </p>
                
                <p className="text-[#475569] text-lg leading-relaxed mb-6">
                  This creates silent funnel amputation: Citi never sees the demand signal. Competitors convert before Citi even appears in the consideration set.
                </p>

                <p className="text-[#475569] text-lg leading-relaxed mb-8">
                  For SMB customers, the situation is worse—no business score visibility, no unified Business+PG model, no lending eligibility logic inside Citi Business Banking.
                </p>

                {/* Quote Block */}
                <div className="bg-[#EFF6FF] border-l-4 border-[#2563EB] rounded-r-lg p-6 mb-8">
                  <p className="text-[#1E40AF] text-xl leading-relaxed italic mb-4">
                    "This has become a structural vulnerability affecting consumer cards, SMB lending, digital engagement, and long-term retention."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#2563EB] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">L</span>
                    </div>
                    <div>
                      <div className="font-semibold text-[#0F172A]">LUMIQ AI Research</div>
                      <div className="text-sm text-[#64748B]">Executive Diagnosis</div>
                    </div>
                  </div>
                </div>

                <p className="text-[#475569] text-lg leading-relaxed mb-6">
                  LumiqAI provides real-time VantageScore, AI-driven prequal for Citi cards, predictive approval pathways, and credit alerts inside the Citi App—plus Experian Business Score, unified Business+PG model, and eligibility for TYB and CitiBusiness® cards in Citi Business Banking.
                </p>

                <p className="text-[#475569] text-lg leading-relaxed">
                  The result: Citi captures early credit intent—the most valuable inflection point in the funnel—before competitors can intercept.
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
                  <Building2 className="w-8 h-8 text-[#2563EB]" />
                  <span className="font-bold text-[#0F172A]">Citi</span>
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">Client</div>
                    <div className="text-[#0F172A] font-medium">Citi (Research Study)</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">Industry</div>
                    <div className="text-[#0F172A] font-medium">Enterprise Banking</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">Segments</div>
                    <div className="text-[#0F172A] font-medium">Consumer + SMB</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">Study Date</div>
                    <div className="text-[#0F172A] font-medium">Q4 2024</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">Modeled Impact</div>
                    <div className="text-[#0F172A] font-medium">$900M–$1.6B/year</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">Website</div>
                    <a 
                      href="https://www.citi.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#2563EB] hover:underline font-medium"
                    >
                      citi.com
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
              The Credit Intelligence Gap: Consumer vs. SMB
            </h2>
            <p className="text-[#475569] text-lg max-w-2xl mx-auto">
              Citi lacks credit visibility in both segments. LumiqAI provides a dual-layer solution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Consumer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-4 md:p-6 border border-[#E2E8F0]"
            >
              <div className="flex flex-col items-center mb-4">
                <span className="text-lg font-bold text-[#2563EB] mb-2">Consumer Module</span>
                <span className="text-sm font-medium text-[#475569]">Consumer Intelligence</span>
              </div>
              <div className="rounded-lg overflow-hidden mb-4 max-w-[280px] mx-auto">
                <img
                  src="/mockups/citi-consumer.png" 
                  alt="Citi Consumer Credit Intelligence"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-[#64748B]">
                Real-time VantageScore, AI-driven prequal for Citi cards, predictive approval pathways, credit alerts + file monitoring.
              </p>
            </motion.div>

            {/* SMB */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-4 md:p-6 border border-[#E2E8F0]"
            >
              <div className="flex flex-col items-center mb-4">
                <span className="text-lg font-bold text-[#0891B2] mb-2">SMB Module</span>
                <span className="text-sm font-medium text-[#475569]">Business Intelligence</span>
              </div>
              <div className="rounded-lg overflow-hidden mb-4 max-w-[280px] mx-auto">
                <img
                  src="/mockups/citi-smb.png" 
                  alt="Citi SMB Credit Intelligence"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-[#64748B]">
                Experian Business Score, unified Business+PG model, eligibility for TYB and CitiBusiness® cards, thin-file enhancement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          REVENUE LEAKAGE
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
              Revenue Leakage: $900M–$1.6B Lost Annually
            </h2>
            <p className="text-[#475569] text-lg max-w-3xl">
              Based on benchmarking against Chase Credit Journey, Capital One CreditWise, and Wells Fargo Close-Up — and applying Citi's TAM.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Leakage Today */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#FEF2F2] rounded-xl p-6 border border-[#FECACA]"
            >
              <h3 className="text-lg font-bold text-[#DC2626] uppercase tracking-wider mb-6">Leakage Today</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#0F172A]">Consumer</span>
                  <span className="text-xl font-bold text-[#0F172A]">$600M–$900M/year</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#0F172A]">SMB</span>
                  <span className="text-xl font-bold text-[#0F172A]">$300M–$700M/year</span>
                </div>
                <div className="border-t border-[#FECACA] pt-4 flex justify-between items-center">
                  <span className="text-[#0F172A] font-bold">Total</span>
                  <span className="text-2xl font-bold text-[#DC2626]">$900M–$1.6B+/year</span>
                </div>
              </div>
            </motion.div>

            {/* Recovered with LumiqAI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#F0FDF4] rounded-xl p-6 border border-[#BBF7D0]"
            >
              <h3 className="text-lg font-bold text-[#16A34A] uppercase tracking-wider mb-6">Recovered with LumiqAI</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#0F172A]">Consumer Recovery</span>
                  <span className="text-xl font-bold text-[#0F172A]">$600M–$900M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#0F172A]">SMB Recovery</span>
                  <span className="text-xl font-bold text-[#0F172A]">$300M–$700M</span>
                </div>
                <div className="border-t border-[#BBF7D0] pt-4 flex justify-between items-center">
                  <span className="text-[#0F172A] font-bold">Build Cost Avoided</span>
                  <span className="text-2xl font-bold text-[#16A34A]">$40M–$70M saved</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          THE LUMIQAI SOLUTION
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
            <div className="text-[#2563EB] font-semibold text-sm uppercase tracking-wide mb-4">
              THE SOLUTION
            </div>
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#0F172A] mb-4">
              LumiqAI installs Citi's missing credit intelligence layer
            </h2>
            <p className="text-[#475569] text-lg max-w-3xl mx-auto">
              For both <span className="text-[#2563EB] font-semibold">Consumer</span> and <span className="text-[#2563EB] font-semibold">Business</span> — directly inside the Citi App. Convert creditworthy applicants Citi currently declines using income evidence, spending patterns, and payment discipline.
            </p>
          </motion.div>

          {/* Outcome Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#EFF6FF] border-l-4 border-[#2563EB] rounded-r-lg p-6 mb-12 max-w-3xl mx-auto"
          >
            <p className="text-[#1E40AF]">
              <strong>Outcome:</strong> A Citi customer sees the right product, at the right moment, with a Citi-aligned approval likelihood — and can apply instantly.
            </p>
            <p className="text-[#64748B] text-sm mt-2">
              SPCP-compliant. Your rules. Controlled risk.
            </p>
          </motion.div>

          {/* How It Works Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { 
                step: '1', 
                title: 'Credit Data Syncs', 
                subtitle: 'Soft Pull',
                description: 'User securely syncs their profile. LumiqAI pulls bureau data, cash-flow intelligence, and credit attributes.',
                note: 'No impact to credit score'
              },
              { 
                step: '2', 
                title: 'Eligibility Framework Loads', 
                subtitle: 'Citi Rules',
                description: 'System loads Citi\'s actual eligibility criteria for each product — score ranges, utilization, payment history, income/DTI norms.',
                note: 'Product-specific rules applied'
              },
              { 
                step: '3', 
                title: 'AI Eligibility Engine Runs', 
                subtitle: 'Core Decisioning',
                description: 'Evaluates Score, Cash Flow, Utilization, Spend Profile, Risk Tier, and Lifecycle Stage using Citi\'s guidelines.',
                note: 'Citi stays in control'
              },
              { 
                step: '4', 
                title: 'User Sees Results', 
                subtitle: 'Instant Prequal',
                description: 'Prequalified Citi products with approval confidence bands: Very Likely, Likely, Borderline. 1-Tap Apply enabled.',
                note: 'Inside the Citi App'
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-[#E2E8F0]"
              >
                <div className="w-10 h-10 bg-[#2563EB] rounded-full flex items-center justify-center text-white font-bold mb-4">
                  {item.step}
                </div>
                <div className="text-xs text-[#2563EB] font-semibold uppercase tracking-wider mb-1">{item.subtitle}</div>
                <h3 className="font-bold text-[#0F172A] mb-2">{item.title}</h3>
                <p className="text-sm text-[#64748B] mb-3">{item.description}</p>
                <div className="text-xs text-[#16A34A] font-medium">✓ {item.note}</div>
              </motion.div>
            ))}
          </div>

          {/* What Users See */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h3 className="text-xl font-bold text-[#0F172A] mb-2">What Users See</h3>
            <p className="text-[#64748B]">Dual-view credit intelligence for Consumer and Business users</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* For Consumers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 border border-[#E2E8F0]"
            >
              <h4 className="text-lg font-bold text-[#2563EB] mb-4 text-center">For Consumers</h4>
              
              {/* Dual Phone Mockup */}
              <div className="flex justify-center gap-3 md:gap-4 mb-6">
                <img 
                  src="/mockups/citi-consumer-1.png" 
                  alt="Citi Consumer Credit Journey" 
                  className="w-[120px] md:w-[160px] lg:w-[200px] h-auto rounded-xl shadow-lg"
                />
                <img 
                  src="/mockups/citi-consumer-2.png" 
                  alt="Citi Consumer Offers" 
                  className="w-[120px] md:w-[160px] lg:w-[200px] h-auto rounded-xl shadow-lg"
                />
              </div>
              
              <ul className="space-y-3 text-sm text-[#475569]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#16A34A] mt-0.5 flex-shrink-0" />
                  <span>Prequalified Citi Cards (Double Cash, Custom Cash, Strata Premier, Rewards+)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#16A34A] mt-0.5 flex-shrink-0" />
                  <span>Approval Confidence Bands (Very Likely, Likely, Borderline)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#16A34A] mt-0.5 flex-shrink-0" />
                  <span>Utilization, Payment History & Inquiry factors visible</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#16A34A] mt-0.5 flex-shrink-0" />
                  <span>1-Tap Apply inside the Citi App</span>
                </li>
              </ul>
            </motion.div>

            {/* For Business Owners */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-6 border border-[#E2E8F0]"
            >
              <h4 className="text-lg font-bold text-[#0891B2] mb-4 text-center">For Business Owners</h4>
              
              {/* Dual Phone Mockup */}
              <div className="flex justify-center gap-3 md:gap-4 mb-6">
                <img 
                  src="/mockups/citi-business-1.png" 
                  alt="Citi Business Credit Journey" 
                  className="w-[120px] md:w-[160px] lg:w-[200px] h-auto rounded-xl shadow-lg"
                />
                <img 
                  src="/mockups/citi-business-2.png" 
                  alt="Citi Business Offers" 
                  className="w-[120px] md:w-[160px] lg:w-[200px] h-auto rounded-xl shadow-lg"
                />
              </div>
              
              <ul className="space-y-3 text-sm text-[#475569]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#16A34A] mt-0.5 flex-shrink-0" />
                  <span>Prequalified Citi Business Cards (CitiBusiness AAdvantage, Costco Business)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#16A34A] mt-0.5 flex-shrink-0" />
                  <span>Business Credit Strength + Owner FICO synced together</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#16A34A] mt-0.5 flex-shrink-0" />
                  <span>Eligibility Confidence Bands based on combined metrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#16A34A] mt-0.5 flex-shrink-0" />
                  <span>Business underwriting rules auto-mapped</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Under the Hood */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12"
          >
            <h3 className="text-xl font-bold text-[#0F172A] mb-6 text-center">What the Engine Does Under the Hood</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Prequalification', desc: 'Soft-pull evaluation mapped to Citi\'s own pre-qual criteria' },
                { title: 'Confidence Bands', desc: 'AI assigns Citi-policy-aligned confidence: Very Likely → High Decline Risk' },
                { title: 'Multi-Product Mapping', desc: 'Engine tests user attributes against every Citi card\'s rules' },
                { title: 'Decline-Recovery Logic', desc: 'Reason codes, steps to approval, smart re-apply when conditions improve' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-4 border border-[#E2E8F0]">
                  <h4 className="font-semibold text-[#0F172A] mb-2 text-sm">{item.title}</h4>
                  <p className="text-xs text-[#64748B]">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-[#64748B] mt-6">
              <strong>Compliance Alignment:</strong> Designed with ECOA (Reg B) SPCP guidance in mind — credit extension without disparate impact, supported by explainability artifacts.
            </p>
          </motion.div>
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
              What Citi Gains
            </h2>
            <p className="text-[#475569] text-lg max-w-3xl">
              Economic impact model across Consumer and SMB segments.
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
              { value: '+18%', label: 'Incremental Approvals', sublabel: 'Identified' },
              { value: '–25–40%', label: 'Manual Reviews', sublabel: 'Reduction' },
              { value: '2×–3×', label: 'Engagement', sublabel: 'Increase' },
              { value: 'Zero', label: 'Underwriting Changes', sublabel: 'Just better signals' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                className="text-center p-6 bg-white rounded-xl border border-[#E2E8F0]"
              >
                <div className="text-[32px] font-bold text-[#2563EB] mb-1">{stat.value}</div>
                <div className="text-[#0F172A] font-medium text-sm">{stat.label}</div>
                <div className="text-[#64748B] text-xs">{stat.sublabel}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Impact Breakdown */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Consumer Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#EFF6FF] rounded-xl p-6 border border-[#BFDBFE]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <h4 className="font-bold text-[#0F172A]">Consumer Impact</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-[#2563EB]">+12–24%</div>
                  <div className="text-xs text-[#64748B]">Approval uplift</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-[#2563EB]">+5–10%</div>
                  <div className="text-xs text-[#64748B]">CAC-free conversions</div>
                </div>
              </div>
            </motion.div>

            {/* SMB Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#ECFEFF] rounded-xl p-6 border border-[#A5F3FC]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#0891B2] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <h4 className="font-bold text-[#0F172A]">SMB Impact</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-[#0891B2]">+18–30%</div>
                  <div className="text-xs text-[#64748B]">Approval uplift</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-[#0891B2]">$300M–$700M</div>
                  <div className="text-xs text-[#64748B]">Revenue recovery</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          STRATEGIC POSITIONING
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
              Why Citi Wins: The First Dual-Layer Credit Intelligence Bank
            </h2>
            <p className="text-[#475569] text-lg max-w-4xl">
              Chase built consumer. Capital One built consumer. Wells Fargo built consumer. AmEx built consumer. Apple built consumer. <strong>No one has built SMB.</strong>
            </p>
          </motion.div>

          {/* Quote Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#EFF6FF] border-l-4 border-[#2563EB] rounded-r-lg p-6 mb-8"
          >
            <p className="text-[#1E40AF] text-xl font-bold">
              Citi has first-mover advantage to own the only dual consumer + SMB credit intelligence ecosystem in America.
            </p>
          </motion.div>

          {/* Competitive Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-x-auto"
          >
            <table className="w-full text-left bg-white rounded-xl border border-[#E2E8F0]">
              <thead>
                <tr className="border-b border-[#E2E8F0]">
                  <th className="py-4 px-4 text-[#64748B] font-medium">Bank</th>
                  <th className="py-4 px-4 text-center text-[#64748B] font-medium">Consumer</th>
                  <th className="py-4 px-4 text-center text-[#64748B] font-medium">SMB</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { bank: 'Chase', consumer: true, smb: false },
                  { bank: 'Capital One', consumer: true, smb: false },
                  { bank: 'Wells Fargo', consumer: true, smb: false },
                  { bank: 'AmEx', consumer: true, smb: false },
                  { bank: 'Apple', consumer: true, smb: false },
                  { bank: 'Citi + LumiqAI', consumer: true, smb: true, highlight: true },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-[#E2E8F0] ${row.highlight ? 'bg-[#EFF6FF]' : ''}`}>
                    <td className={`py-4 px-4 ${row.highlight ? 'text-[#2563EB] font-bold' : 'text-[#0F172A]'}`}>{row.bank}</td>
                    <td className="py-4 px-4 text-center">
                      {row.consumer ? <CheckCircle className="w-5 h-5 text-[#16A34A] mx-auto" /> : <span className="text-[#64748B]">—</span>}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.smb ? <CheckCircle className="w-5 h-5 text-[#16A34A] mx-auto" /> : <span className="text-[#64748B]">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
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
              90-Day Controlled Pilot
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { track: 'Track 1', title: 'Consumer', items: ['Score panel', 'Prequal API', 'Card pathways', '1-tap apply'], color: 'bg-[#EFF6FF] border-[#BFDBFE]' },
              { track: 'Track 2', title: 'SMB', items: ['Experian Business Score', 'Business+PG model', 'Lending eligibility', 'Thin-file augmentation'], color: 'bg-[#ECFEFF] border-[#A5F3FC]' },
              { track: 'Governance', title: 'Critical', items: ['SR 11-7 compliant documentation', 'Weekly oversight with Risk, Cards, Digital', 'Real-time dashboarding', 'ECOA/Reg B SPCP alignment'], color: 'bg-[#FEF3C7] border-[#FDE68A]' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`${item.color} border rounded-xl p-6`}
              >
                <span className="text-[#64748B] text-xs font-semibold uppercase tracking-wider">{item.track}</span>
                <h3 className="font-bold text-[#0F172A] text-lg mt-2 mb-3">{item.title}</h3>
                <ul className="text-[#475569] text-sm space-y-1">
                  {item.items.map((listItem, j) => (
                    <li key={j}>• {listItem}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-6 border border-[#E2E8F0]"
          >
            <div className="grid grid-cols-4 gap-4 text-center">
              {[
                { weeks: '1-2', title: 'Connect APIs, validate outputs' },
                { weeks: '3-4', title: 'Policy alignment' },
                { weeks: '5-8', title: 'A/B test in-app' },
                { weeks: '9-12', title: 'Review & scale decision' },
              ].map((phase, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-[#2563EB] mb-1">{phase.weeks}</div>
                  <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">Weeks</div>
                  <div className="text-sm text-[#0F172A]">{phase.title}</div>
                </div>
              ))}
            </div>
          </motion.div>
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
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              {[
                { num: '1', source: 'JPMorgan Digital & Credit Journey filings (2017–2023)' },
                { num: '2', source: 'Capital One CreditWise adoption reports' },
                { num: '3', source: 'Wells Fargo Business Credit Close-Up product launch' },
                { num: '4', source: 'Citi 10-K (consumer and SMB TAM)' },
                { num: '5', source: 'Experian State of Credit 2023–2024' },
                { num: '6', source: 'CFPB Open Banking analysis 2023–2024' },
                { num: '7', source: 'Goldman Sachs filings on Apple Card instant decisioning' },
                { num: '8', source: 'AmEx risk-triggered credit expansion analysis' },
                { num: '9', source: 'BlueVine, OnDeck, Shopify Capital origination volumes' },
                { num: '10', source: 'McKinsey/Bain/Oliver Wyman fintech CAC benchmarks' },
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
            <strong>Legal Notice:</strong> LumiqAI is independent; no affiliation with Citigroup Inc. implied. All figures are directional estimates based on public data and industry benchmarks.
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 bg-[#F1F5F9] border border-[#E2E8F0] rounded-lg p-4 text-xs text-[#64748B]"
          >
            <strong>Disclaimer:</strong> All screenshots, mockups, and visual demonstrations on this website use Citi logos, branding, and design elements for illustrative and demonstration purposes only. These materials are not official Citi products or services, and no affiliation, endorsement, or partnership with Citigroup Inc. is implied or intended. All trademarks, logos, and brand names are the property of their respective owners. This website is for evaluation and demonstration purposes only.
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
                className="inline-flex items-center justify-center gap-2 bg-[#2563EB] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1D4ED8] transition-colors"
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

export default CaseStudyCiti;
