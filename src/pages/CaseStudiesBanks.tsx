import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import EngineNavbar from '@/components/EngineNavbar';
import Footer from '@/components/Footer';

interface CaseStudyCard {
  id: string;
  bank: string;
  title: string;
  description: string;
  logo: string;
  color: string;
  stats: {
    value: string;
    label: string;
  }[];
}

const caseStudies: CaseStudyCard[] = [
  {
    id: 'chase',
    bank: 'Chase',
    title: 'Unlocking SMB credit visibility for America\'s largest bank',
    description: 'How LumiqAI could transform Chase\'s business credit experience with real-time scoring and soft approvals.',
    logo: '/logos/banks/chase-full.svg',
    color: '#0A66C2',
    stats: [
      { value: '$100M+', label: 'Stage 1 uplift' },
      { value: '+25%', label: 'conversion lift' },
      { value: '~55K', label: 'incremental cards' }
    ]
  },
  {
    id: 'citi',
    bank: 'Citibank',
    title: 'Modernizing Citi\'s credit funnel through Consumer + SMB intelligence',
    description: 'Deploying dual-system credit intelligence directly into Citi\'s digital channels.',
    logo: '/logos/banks/citi-full.svg',
    color: '#003B70',
    stats: [
      { value: '$1.6B', label: 'revenue recovery' },
      { value: '+18%', label: 'incremental approvals' },
      { value: '90 days', label: 'pilot timeline' }
    ]
  },
  {
    id: 'wells-fargo',
    bank: 'Wells Fargo',
    title: 'Restoring credit visibility to recapture consumer and SMB demand',
    description: 'Rebuilding trust through transparent credit intelligence after Control Tower.',
    logo: '/logos/banks/wellsfargo-full.svg',
    color: '#D71E28',
    stats: [
      { value: '+32%', label: 'engagement lift' },
      { value: '$450M', label: 'modeled recovery' },
      { value: '4 weeks', label: 'integration' }
    ]
  },
  {
    id: 'santander',
    bank: 'Santander',
    title: 'Stop credit shoppers from leaving Santander',
    description: 'Embedding VantageScore 3.0 and business credit signals inside digital channels.',
    logo: '/logos/banks/santander-full.svg',
    color: '#EC0000',
    stats: [
      { value: '+45%', label: 'approval likelihood' },
      { value: '$300M+', label: '3-year value' },
      { value: '3.8×', label: 'ROI' }
    ]
  }
];

const CaseStudiesBanks = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <EngineNavbar />
      
      {/* Hero Section - Concourse Style Dark */}
      <section className="pt-24 pb-16 bg-[#0F172A] relative overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3B82F6]/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Label */}
            <div className="text-[#94A3B8] text-sm font-medium uppercase tracking-wider mb-6">
              Case Studies
            </div>
            
            {/* Headline */}
            <h1 className="text-[32px] md:text-[42px] lg:text-[52px] font-bold text-white leading-[1.15] tracking-tight max-w-4xl mb-8">
              How top banks transform credit intelligence with LumiqAI
            </h1>
            
            {/* Key Stats */}
            <div className="flex flex-wrap gap-8 md:gap-12 pt-8 border-t border-white/10">
              {[
                { value: '4', label: 'Enterprise banks' },
                { value: '$2.5B+', label: 'Modeled impact' },
                { value: '90 days', label: 'Avg. pilot time' }
              ].map((stat, i) => (
                <div key={i} className="flex items-baseline gap-2">
                  <span className="text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
                  <span className="text-[#94A3B8] text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-4">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link 
                  to={`/case-studies/banks/${study.id}`}
                  className="group block bg-white rounded-xl border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-lg transition-all p-6 md:p-8"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Left: Logo + Content */}
                    <div className="flex-1">
                      {/* Bank Logo/Name */}
                      <div className="mb-3 h-10 flex items-center">
                        <img 
                          src={study.logo}
                          alt={study.bank}
                          className="h-6 w-auto max-w-[200px] object-contain object-left"
                          style={{ 
                            transform: study.id === 'citi' ? 'scale(2.5)' : 
                                       study.id === 'wells-fargo' ? 'scale(1.8)' : 
                                       study.id === 'santander' ? 'scale(1.5)' : 'scale(1)',
                            transformOrigin: 'left center'
                          }}
                        />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-semibold text-[#0F172A] leading-snug mb-2 group-hover:text-[#2563EB] transition-colors">
                        {study.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-[#64748B] text-sm md:text-base">
                        {study.description}
                      </p>
                    </div>
                    
                    {/* Right: Stats + Arrow */}
                    <div className="flex items-center gap-6 lg:gap-8">
                      {/* Stats */}
                      <div className="hidden md:flex items-center gap-6 lg:gap-8">
                        {study.stats.map((stat, i) => (
                          <div key={i} className="text-center min-w-[80px]">
                            <div className="text-lg font-bold text-[#0F172A]">{stat.value}</div>
                            <div className="text-xs text-[#94A3B8]">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Arrow */}
                      <div className="flex items-center gap-2 text-[#64748B] group-hover:text-[#2563EB] transition-colors flex-shrink-0">
                        <span className="text-sm font-medium hidden sm:inline">Read case study</span>
                        <div className="w-10 h-10 rounded-full bg-[#F1F5F9] group-hover:bg-[#EFF6FF] flex items-center justify-center transition-colors">
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile Stats */}
                  <div className="flex md:hidden items-center gap-4 mt-4 pt-4 border-t border-[#E2E8F0]">
                    {study.stats.map((stat, i) => (
                      <div key={i} className="text-center flex-1">
                        <div className="text-base font-bold text-[#0F172A]">{stat.value}</div>
                        <div className="text-xs text-[#94A3B8]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#0F172A] mb-4">
              Ready to Transform Your Credit Intelligence?
            </h2>
            <p className="text-[#64748B] text-lg mb-8 max-w-2xl mx-auto">
              4 weeks integration. 90 days pilot. See measurable results with LumiqAI.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0F172A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1E293B] transition-colors"
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

export default CaseStudiesBanks;