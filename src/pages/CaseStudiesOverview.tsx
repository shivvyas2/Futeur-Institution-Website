import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import EngineNavbar from '@/components/EngineNavbar';
import Footer from '@/components/Footer';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Building2, 
  CreditCard, 
  Shield,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Zap,
  Target,
  BarChart3,
  ExternalLink
} from 'lucide-react';

const CaseStudiesOverview = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <EngineNavbar />
      
      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION - Concourse Style
          Dark navy background, centered content, horizontal KPI strip
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#0A0E17] pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Category Pill - Small, muted, taxonomy-style */}
          <div className="flex items-center gap-2 mb-8">
            <BarChart3 className="w-4 h-4 text-[#64748B]" />
            <span className="text-sm font-medium text-[#64748B] tracking-wide">Research and Market Analysis</span>
          </div>
          
          {/* Headline - Large, bold, tight line-height */}
          <h1 className="text-[40px] md:text-[52px] lg:text-[60px] font-semibold text-white leading-[1.1] tracking-[-0.02em] mb-16 max-w-4xl">
            The SMB Credit Visibility Gap.
            <span className="block text-[#38BDF8]">Why Banks Are Losing Ground.</span>
          </h1>
          
          {/* KPI Strip - 3 metrics with vertical dividers */}
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-0">
            {/* KPI 1 */}
            <div className="md:pr-12">
              <div className="text-[36px] md:text-[44px] font-semibold text-white leading-none mb-2">$245B</div>
              <div className="text-sm text-[#64748B]">U.S. small business loan market</div>
            </div>
            
            {/* Divider */}
            <div className="hidden md:block w-px bg-[#1E293B] self-stretch mx-0"></div>
            
            {/* KPI 2 */}
            <div className="md:px-12">
              <div className="text-[36px] md:text-[44px] font-semibold text-white leading-none mb-2">33.3M</div>
              <div className="text-sm text-[#64748B]">U.S. small businesses</div>
            </div>
            
            {/* Divider */}
            <div className="hidden md:block w-px bg-[#1E293B] self-stretch mx-0"></div>
            
            {/* KPI 3 */}
            <div className="md:pl-12">
              <div className="text-[36px] md:text-[44px] font-semibold text-white leading-none mb-2">~13%</div>
              <div className="text-sm text-[#64748B]">SMB loan approval rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MAIN CONTENT - Sidebar + Content Layout (Concourse Style)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#F8F9FB]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* ─────────────────────────────────────────────────────────────
                LEFT SIDEBAR - Metadata Stack (Concourse Style)
            ───────────────────────────────────────────────────────────── */}
            <aside className="lg:w-[220px] flex-shrink-0">
              <div className="bg-[#EDF2F7] rounded-lg p-6 space-y-6">
                <div>
                  <div className="text-xs text-[#64748B] mb-1">Market Value</div>
                  <div className="text-sm font-medium text-[#1A202C]">$245B (2023)</div>
                </div>
                <div>
                  <div className="text-xs text-[#64748B] mb-1">Growth Projection</div>
                  <div className="text-sm font-medium text-[#1A202C]">$349B by 2033</div>
                </div>
                <div>
                  <div className="text-xs text-[#64748B] mb-1">SMB Count</div>
                  <div className="text-sm font-medium text-[#1A202C]">33.3 Million</div>
                </div>
                <div>
                  <div className="text-xs text-[#64748B] mb-1">Bank Approval Rate</div>
                  <div className="text-sm font-medium text-[#1A202C]">~13%</div>
                </div>
                <div>
                  <div className="text-xs text-[#64748B] mb-1">Funding Gap</div>
                  <div className="text-sm font-medium text-[#1A202C]">60% underfunded</div>
                </div>
                <div>
                  <div className="text-xs text-[#64748B] mb-1">Data Sources</div>
                  <div className="text-sm font-medium text-[#1A202C]">SBA.gov, Federal Reserve</div>
                </div>
              </div>
            </aside>

            {/* ─────────────────────────────────────────────────────────────
                RIGHT CONTENT - Main Body (Concourse Style)
            ───────────────────────────────────────────────────────────── */}
            <div className="flex-1 min-w-0">
              
              {/* Quote Block - Teal/Cyan color like Concourse */}
              <blockquote className="text-[22px] md:text-[26px] leading-[1.4] text-[#0891B2] font-medium mb-8">
                "See how leading banks can use LumiqAI to transform SMB lending. Explore the market data, 
                understand the leakage problem, and discover how consumer credit tools point the way forward."
              </blockquote>
              
              {/* CTAs */}
              <div className="mb-16">
                <a href="/contact">
                  <Button className="bg-[#0A0E17] text-white hover:bg-[#1E293B] rounded-md px-5 py-2.5 text-sm font-medium h-auto">
                    Contact Sales
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>

              {/* Divider */}
              <div className="border-t border-[#E2E8F0] mb-12"></div>

              {/* ═══════════════════════════════════════════════════════════
                  SECTION: Market Landscape
              ═══════════════════════════════════════════════════════════ */}
              <div className="mb-16">
                <div className="text-sm font-medium text-[#0891B2] mb-3">Market Landscape</div>
                <h2 className="text-[28px] md:text-[32px] font-semibold text-[#0F172A] leading-[1.2] mb-4">
                  Small Business Credit is a Massive Market Banks Are Losing
                </h2>
                <p className="text-base text-[#475569] leading-relaxed mb-10">
                  The U.S. SMB lending market represents a trillion-dollar opportunity, yet traditional banks struggle 
                  to serve this segment effectively—creating unprecedented leakage to fintech competitors.
                </p>

                {/* KPI Cards Grid - Clean white cards */}
                <div className="grid md:grid-cols-2 gap-4 mb-10">
                  <div className="bg-white rounded-lg p-5 border border-[#E2E8F0]">
                    <div className="text-[28px] font-semibold text-[#0F172A] mb-1">$245B</div>
                    <div className="text-sm text-[#64748B] mb-2">U.S. small business loan market value (2023)</div>
                    <div className="flex items-center gap-1.5 text-[#16A34A] text-xs font-medium">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Growing to $349B by 2033</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-5 border border-[#E2E8F0]">
                    <div className="text-[28px] font-semibold text-[#0F172A] mb-1">33.3M</div>
                    <div className="text-sm text-[#64748B] mb-2">U.S. small businesses (99.9% of all firms)</div>
                    <div className="flex items-center gap-1.5 text-[#64748B] text-xs font-medium">
                      <Users className="w-3.5 h-3.5" />
                      <span>~50% of U.S. workforce</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-5 border border-[#E2E8F0]">
                    <div className="text-[28px] font-semibold text-[#D97706] mb-1">~13%</div>
                    <div className="text-sm text-[#64748B] mb-2">SMB loan approval rate at large banks</div>
                    <div className="flex items-center gap-1.5 text-[#DC2626] text-xs font-medium">
                      <TrendingDown className="w-3.5 h-3.5" />
                      <span>Low vs. consumer lending</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-5 border border-[#E2E8F0]">
                    <div className="text-[28px] font-semibold text-[#DC2626] mb-1">60%</div>
                    <div className="text-sm text-[#64748B] mb-2">SMBs do not receive full funding requested</div>
                    <div className="flex items-center gap-1.5 text-[#D97706] text-xs font-medium">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>77% concerned about access</span>
                    </div>
                  </div>
                </div>

                {/* Leakage Problem Card */}
                <div className="bg-[#FEF2F2] rounded-lg p-6 border border-[#FECACA]">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-[#FEE2E2] flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-4 h-4 text-[#DC2626]" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#0F172A] mb-2">The Leakage Problem</h3>
                      <p className="text-sm text-[#475569] leading-relaxed mb-3">
                        Tens of billions of dollars in SMB credit demand flows to fintechs or non-bank lenders each year 
                        because of slow decisions and poor visibility into SMB credit eligibility. Regional banks, credit unions, 
                        and community banks using licensed BIN rails capture an estimated <strong>$50B+/year</strong> in re-originated 
                        SMB credit demand that could otherwise convert inside national bank apps.
                      </p>
                      <div className="text-xs text-[#64748B]">
                        Sources: SBA.gov, Federal Reserve Small Business Credit Survey, FDIC Banking Reports
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#E2E8F0] mb-12"></div>

              {/* ═══════════════════════════════════════════════════════════
                  SECTION: Proven Model
              ═══════════════════════════════════════════════════════════ */}
              <div className="mb-16">
                <div className="text-sm font-medium text-[#16A34A] mb-3">Proven Model</div>
                <h2 className="text-[28px] md:text-[32px] font-semibold text-[#0F172A] leading-[1.2] mb-4">
                  Consumer Credit Visibility Works—SMB Credit Visibility Does Not Exist
                </h2>
                <p className="text-base text-[#475569] leading-relaxed mb-10">
                  Major banks have mastered consumer credit engagement with embedded score monitoring and credit education tools. 
                  These products drive retention, cross-sell, and loyalty—but SMB customers have no equivalent experience.
                </p>

                {/* Comparison Cards */}
                <div className="grid lg:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-lg p-6 border border-[#E2E8F0]">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 bg-[#F1F5F9] rounded-lg flex items-center justify-center">
                        <img src="/logos/banks/chase.png" alt="Chase" className="w-7 h-7 object-contain" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-[#0F172A]">Chase Credit Journey</h3>
                        <p className="text-xs text-[#64748B]">Launched 2016</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2.5 mb-5">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-[#16A34A] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#475569]">Free VantageScore 3.0 monitoring for all customers</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-[#16A34A] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#475569]">Personalized actions to improve credit scores</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-[#16A34A] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#475569]">80M+ users in Chase digital ecosystem</span>
                      </li>
                    </ul>
                    
                    <div className="bg-[#F8FAFC] rounded-md p-4 border border-[#E2E8F0]">
                      <div className="text-[22px] font-semibold text-[#2563EB]">69%</div>
                      <div className="text-xs text-[#64748B]">of digital banking users interact with credit tools regularly</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 border border-[#E2E8F0]">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 bg-[#F1F5F9] rounded-lg flex items-center justify-center">
                        <img src="/logos/banks/capitalone.png" alt="Capital One" className="w-7 h-7 object-contain" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-[#0F172A]">CreditWise</h3>
                        <p className="text-xs text-[#64748B]">Launched 2014</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2.5 mb-5">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-[#16A34A] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#475569]">Free FICO Score 8 access for everyone</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-[#16A34A] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#475569]">Credit simulators and what-if scenarios</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-[#16A34A] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#475569]">Available to non-Capital One customers</span>
                      </li>
                    </ul>
                    
                    <div className="bg-[#F8FAFC] rounded-md p-4 border border-[#E2E8F0]">
                      <div className="text-[22px] font-semibold text-[#EA580C]">4.8 stars</div>
                      <div className="text-xs text-[#64748B]">Average mobile app rating with high satisfaction</div>
                    </div>
                  </div>
                </div>

                {/* Key Insight */}
                <div className="bg-[#F0FDF4] rounded-lg p-5 border border-[#BBF7D0]">
                  <p className="text-sm text-[#475569] leading-relaxed">
                    <strong className="text-[#0F172A]">Key Insight:</strong> Consumer credit tools transformed engagement—banks using embedded score products 
                    see higher retention because users check personal scores frequently. <strong className="text-[#0F172A]">SMB customers lack an equivalent 
                    in-app experience, making them more likely to churn or seek alternatives.</strong>
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#E2E8F0] mb-12"></div>

              {/* ═══════════════════════════════════════════════════════════
                  SECTION: The Gap
              ═══════════════════════════════════════════════════════════ */}
              <div className="mb-16">
                <div className="text-sm font-medium text-[#F87171] mb-3">The Gap</div>
                <h2 className="text-[28px] md:text-[32px] font-semibold text-[#0F172A] leading-[1.2] mb-4">
                  Banks Lack a Consumer-Grade, Predictive SMB Credit Journey
                </h2>
                <p className="text-base text-[#475569] leading-relaxed mb-10">
                  For SMB customers, there is no consistent embedded score or eligibility journey inside the bank app.
                </p>

                {/* Comparison Panels */}
                <div className="grid lg:grid-cols-2 gap-4 mb-10">
                  <div className="bg-white border border-[#E2E8F0] rounded-lg p-6">
                    <div className="flex items-center gap-2.5 mb-5">
                      <CheckCircle className="w-5 h-5 text-[#22C55E]" />
                      <h3 className="text-base font-semibold text-[#0F172A]">Consumer Credit Experience</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2.5 text-[#475569]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 flex-shrink-0"></div>
                        <span className="text-sm">Real-time FICO/VantageScore visibility in-app</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-[#475569]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 flex-shrink-0"></div>
                        <span className="text-sm">Personalized improvement recommendations</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-[#475569]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 flex-shrink-0"></div>
                        <span className="text-sm">Pre-qualification for credit products</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border border-[#E2E8F0] rounded-lg p-6">
                    <div className="flex items-center gap-2.5 mb-5">
                      <AlertTriangle className="w-5 h-5 text-[#F87171]" />
                      <h3 className="text-base font-semibold text-[#0F172A]">SMB Credit Experience</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2.5 text-[#475569]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F87171] mt-2 flex-shrink-0"></div>
                        <span className="text-sm">No embedded business credit score visibility</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-[#475569]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F87171] mt-2 flex-shrink-0"></div>
                        <span className="text-sm">Opaque underwriting with no guidance</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-[#475569]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F87171] mt-2 flex-shrink-0"></div>
                        <span className="text-sm">Must leave bank ecosystem to check eligibility</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Data Strip - Horizontal KPIs with dividers */}
                <div className="bg-white border border-[#E2E8F0] rounded-lg p-6">
                  <h3 className="text-base font-semibold text-[#0F172A] mb-6">Where SMB Demand Is Going</h3>
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-0">
                    <div className="md:pr-8">
                      <div className="text-[28px] font-semibold text-[#0891B2] mb-1">$12B+</div>
                      <div className="text-sm text-[#64748B]">SMB funding facilitated by Lendio alone</div>
                    </div>
                    <div className="hidden md:block w-px bg-[#E2E8F0] self-stretch"></div>
                    <div className="md:px-8">
                      <div className="text-[28px] font-semibold text-[#0891B2] mb-1">15-40%</div>
                      <div className="text-sm text-[#64748B]">Drop-off when eligibility is not surfaced in-app</div>
                    </div>
                    <div className="hidden md:block w-px bg-[#E2E8F0] self-stretch"></div>
                    <div className="md:pl-8">
                      <div className="text-[28px] font-semibold text-[#0891B2] mb-1">44%</div>
                      <div className="text-sm text-[#64748B]">SMBs applied to large banks (rest went elsewhere)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#E2E8F0] mb-12"></div>

              {/* ═══════════════════════════════════════════════════════════
                  SECTION: The Solution
              ═══════════════════════════════════════════════════════════ */}
              <div className="mb-16">
                <div className="text-sm font-medium text-[#2563EB] mb-3">The Solution</div>
                <h2 className="text-[28px] md:text-[32px] font-semibold text-[#0F172A] leading-[1.2] mb-4">
                  LumiqAI: Bringing Consumer-Grade Credit Visibility to SMBs
                </h2>
                <p className="text-base text-[#475569] leading-relaxed mb-10">
                  LumiqAI introduces a predictive, explainable composite credit visibility layer for SMBs.
                </p>

                {/* Solution Cards */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-5 border border-[#E2E8F0]">
                    <div className="w-9 h-9 bg-[#EFF6FF] rounded-lg flex items-center justify-center mb-4">
                      <BarChart3 className="w-4 h-4 text-[#2563EB]" />
                    </div>
                    <h3 className="font-semibold text-[#0F172A] mb-2 text-sm">Real-Time SMB Scores</h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">Display explainable composite scores inside the bank app</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-5 border border-[#E2E8F0]">
                    <div className="w-9 h-9 bg-[#F0FDF4] rounded-lg flex items-center justify-center mb-4">
                      <Target className="w-4 h-4 text-[#16A34A]" />
                    </div>
                    <h3 className="font-semibold text-[#0F172A] mb-2 text-sm">Product Matching</h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">Match SMBs to eligible lending products automatically</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-5 border border-[#E2E8F0]">
                    <div className="w-9 h-9 bg-[#FFF7ED] rounded-lg flex items-center justify-center mb-4">
                      <Zap className="w-4 h-4 text-[#EA580C]" />
                    </div>
                    <h3 className="font-semibold text-[#0F172A] mb-2 text-sm">Improvement Actions</h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">Personalized actions SMBs can take to improve eligibility</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-5 border border-[#E2E8F0]">
                    <div className="w-9 h-9 bg-[#F5F3FF] rounded-lg flex items-center justify-center mb-4">
                      <Shield className="w-4 h-4 text-[#7C3AED]" />
                    </div>
                    <h3 className="font-semibold text-[#0F172A] mb-2 text-sm">Risk Insights</h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">Explainable factors driving score changes and risk signals</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#E2E8F0] mb-12"></div>

              {/* ═══════════════════════════════════════════════════════════
                  SECTION: Strategic Impact
              ═══════════════════════════════════════════════════════════ */}
              <div className="mb-16">
                <div className="text-sm font-medium text-[#0891B2] mb-3">Strategic Impact</div>
                <h2 className="text-[28px] md:text-[32px] font-semibold text-[#0F172A] leading-[1.2] mb-4">
                  Projected Outcomes for Partner Banks
                </h2>
                <p className="text-base text-[#475569] leading-relaxed mb-10">
                  Banks that implement embedded SMB credit visibility can expect significant improvements in efficiency and revenue capture.
                </p>

                {/* Impact KPIs - Horizontal strip with dividers */}
                <div className="bg-white border border-[#E2E8F0] rounded-lg p-6 mb-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-0">
                    <div className="md:pr-8 flex-1">
                      <div className="text-[28px] font-semibold text-[#16A34A] mb-1">+40%</div>
                      <div className="text-sm text-[#64748B]">Increase in SMB digital engagement</div>
                    </div>
                    <div className="hidden md:block w-px bg-[#E2E8F0] self-stretch"></div>
                    <div className="md:px-8 flex-1">
                      <div className="text-[28px] font-semibold text-[#2563EB] mb-1">2-3x</div>
                      <div className="text-sm text-[#64748B]">Improvement in SMB conversion rates</div>
                    </div>
                    <div className="hidden md:block w-px bg-[#E2E8F0] self-stretch"></div>
                    <div className="md:px-8 flex-1">
                      <div className="text-[28px] font-semibold text-[#EA580C] mb-1">$50B+</div>
                      <div className="text-sm text-[#64748B]">Annual leakage recoverable</div>
                    </div>
                    <div className="hidden md:block w-px bg-[#E2E8F0] self-stretch"></div>
                    <div className="md:pl-8 flex-1">
                      <div className="text-[28px] font-semibold text-[#7C3AED] mb-1">-60%</div>
                      <div className="text-sm text-[#64748B]">Reduction in manual underwriting time</div>
                    </div>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="bg-[#F8FAFC] rounded-lg p-5 border border-[#E2E8F0]">
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Estimates based on industry benchmarks (Federal Reserve Small Business Credit Survey, J.D. Power Digital Banking Studies) 
                    and projected impact of consumer credit tool adoption patterns applied to SMB segments. 
                    Actual results will vary based on implementation, customer base, and market conditions.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#E2E8F0] mb-12"></div>

              {/* ═══════════════════════════════════════════════════════════
                  SECTION: Sources & Citations
              ═══════════════════════════════════════════════════════════ */}
              <div className="mb-16">
                <div className="text-sm font-medium text-[#64748B] mb-3">Sources & Citations</div>
                <h2 className="text-[24px] md:text-[28px] font-semibold text-[#0F172A] leading-[1.2] mb-6">
                  Research References
                </h2>
                
                <div className="bg-[#F8FAFC] rounded-lg p-6 border border-[#E2E8F0]">
                  <ul className="space-y-3 text-sm text-[#475569]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#94A3B8]">•</span>
                      <span>U.S. Small Business Administration (SBA.gov) – Small Business Lending Statistics 2023</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#94A3B8]">•</span>
                      <span>Federal Reserve Banks – Small Business Credit Survey (2023 Report on Employer Firms)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#94A3B8]">•</span>
                      <span>FDIC Quarterly Banking Profile – Commercial Lending Trends</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#94A3B8]">•</span>
                      <span>J.D. Power – U.S. Retail Banking Satisfaction Study (Digital Banking Engagement)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#94A3B8]">•</span>
                      <span>Chase Credit Journey, Capital One CreditWise – Public Product Documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#94A3B8]">•</span>
                      <span>Lendio Annual SMB Funding Report – Alternative Lender Market Share</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#94A3B8]">•</span>
                      <span>Experian, Equifax, Dun & Bradstreet – Business Credit Bureau Methodologies</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 pt-4 border-t border-[#E2E8F0]">
                    <p className="text-xs text-[#94A3B8]">
                      All statistics and projections are derived from publicly available research and industry reports. 
                      LumiqAI projections are based on comparable consumer credit tool adoption patterns and do not guarantee specific outcomes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#E2E8F0] mb-12"></div>

              {/* ═══════════════════════════════════════════════════════════
                  SECTION: CTA
              ═══════════════════════════════════════════════════════════ */}
              <div className="text-center">
                <h2 className="text-[24px] md:text-[28px] font-semibold text-[#0F172A] mb-4">
                  Ready to Transform Your SMB Lending?
                </h2>
                <p className="text-base text-[#475569] mb-8 max-w-lg mx-auto">
                  Schedule a consultation to see how LumiqAI can help your bank capture more SMB demand.
                </p>
                <Link to="/contact">
                  <Button className="bg-[#0A0E17] text-white hover:bg-[#1E293B] rounded-md px-6 py-3 text-sm font-medium h-auto">
                    Contact Sales
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesOverview;
