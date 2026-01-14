import { Button } from '@/components/ui/button';
import EngineNavbar from '@/components/EngineNavbar';
import Footer from '@/components/Footer';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <EngineNavbar />
      
      {/* Hero Section - Large image with title overlay */}
      <section className="relative">
        <div className="w-full max-w-7xl mx-auto px-6 pt-24">
          <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden">
            <img 
              src="/about-hero-bg.jpg" 
              alt="LumiqAI" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-12 left-12">
              <h1 className="text-5xl md:text-7xl font-light text-white">
                About LumiqAI
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-24 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          {/* Parent Company Badge */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 bg-neutral-900 text-white px-6 py-3 rounded-full">
              <span className="text-sm font-medium">A FuteurCredX Inc. Innovation</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
              <span className="text-sm text-neutral-300">New York City</span>
            </div>
          </div>

          {/* Stats Grid - Fortune 500 Style */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="border-l-2 border-neutral-900 pl-6">
              <p className="text-4xl md:text-5xl font-light text-neutral-900">$12M+</p>
              <p className="text-sm text-neutral-500 mt-2 uppercase tracking-wider">R&D Investment</p>
            </div>
            <div className="border-l-2 border-neutral-900 pl-6">
              <p className="text-4xl md:text-5xl font-light text-neutral-900">36</p>
              <p className="text-sm text-neutral-500 mt-2 uppercase tracking-wider">Months Development</p>
            </div>
            <div className="border-l-2 border-neutral-900 pl-6">
              <p className="text-4xl md:text-5xl font-light text-neutral-900">47</p>
              <p className="text-sm text-neutral-500 mt-2 uppercase tracking-wider">Engineers & Data Scientists</p>
            </div>
            <div className="border-l-2 border-neutral-900 pl-6">
              <p className="text-4xl md:text-5xl font-light text-neutral-900">8</p>
              <p className="text-sm text-neutral-500 mt-2 uppercase tracking-wider">Patents Pending</p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-start">
            {/* Performance Metrics Column */}
            <div className="md:col-span-4 space-y-8">
              <div className="bg-stone-50 rounded-2xl p-6">
                <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-5">Platform Performance</p>
                <div className="space-y-4">
                  <div className="flex flex-col gap-1 border-b border-neutral-200 pb-3">
                    <span className="text-sm text-neutral-500">Credit Decision Speed</span>
                    <span className="text-xl font-light text-neutral-900">85% faster</span>
                  </div>
                  <div className="flex flex-col gap-1 border-b border-neutral-200 pb-3">
                    <span className="text-sm text-neutral-500">Partner Revenue Uplift</span>
                    <span className="text-xl font-light text-neutral-900">40%+</span>
                  </div>
                  <div className="flex flex-col gap-1 border-b border-neutral-200 pb-3">
                    <span className="text-sm text-neutral-500">Platform Uptime SLA</span>
                    <span className="text-xl font-light text-neutral-900">99.99%</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-neutral-500">API Response Time</span>
                    <span className="text-xl font-light text-neutral-900">&lt;100ms</span>
                  </div>
                </div>
              </div>
              
              <div className="relative h-52 rounded-2xl overflow-hidden bg-stone-100">
                <img 
                  src="/nyc-headquarters.jpg" 
                  alt="FuteurCredX Headquarters" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-medium">New York City • Headquarters</p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="md:col-span-8">
              <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">About FuteurCredX Inc.</p>
              <h2 className="text-4xl md:text-5xl font-light text-neutral-900 leading-tight mb-8">
                Enterprise-grade credit intelligence, engineered from the ground up.
              </h2>
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <p>
                  <span className="font-medium text-neutral-900">FuteurCredX Inc.</span> was founded with a singular mission: to build the infrastructure that powers the next generation of commercial credit decisioning. After three years of intensive research, development, and $12 million in R&D investment, we launched <span className="font-medium text-neutral-900">LumiqAI</span>—the enterprise API redefining how financial institutions assess and extend credit.
                </p>
                <p>
                  Our engineering team—comprising 47 specialists in machine learning, financial systems, and enterprise security—analyzed over 2.3 billion data points across commercial credit workflows. The result: a proprietary scoring engine with 8 patents pending, processing credit decisions 85% faster than industry benchmarks.
                </p>
                <p>
                  LumiqAI isn't a retrofit. It's a purpose-built platform architected from the ground up to meet the regulatory, security, and performance demands of Tier 1 financial institutions. Every API endpoint, every data pipeline, every compliance checkpoint was designed for enterprise scale.
                </p>
              </div>
              
              {/* Certifications & Compliance */}
              <div className="mt-12 pt-8 border-t border-neutral-200">
                <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-6">Certifications & Compliance</p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-neutral-900 text-white px-4 py-2 rounded-lg text-sm font-medium">SOC 2 Type II</div>
                  <div className="bg-neutral-900 text-white px-4 py-2 rounded-lg text-sm font-medium">ISO 27001</div>
                  <div className="bg-neutral-900 text-white px-4 py-2 rounded-lg text-sm font-medium">GDPR Compliant</div>
                  <div className="bg-neutral-900 text-white px-4 py-2 rounded-lg text-sm font-medium">CCPA Ready</div>
                  <div className="bg-neutral-100 text-neutral-900 px-4 py-2 rounded-lg text-sm font-medium">256-bit AES Encryption</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section - Values Grid */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-16">
            Why institutions choose LumiqAI
          </h2>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            <div className="border-t border-neutral-300 pt-8">
              <h3 className="text-xl font-medium text-neutral-900 mb-4">Real-Time Intelligence</h3>
              <p className="text-neutral-600 leading-relaxed">
                We don't batch process. Our API delivers credit intelligence in milliseconds, enabling instant decisioning at the point of application.
              </p>
            </div>
            
            <div className="border-t border-neutral-300 pt-8">
              <h3 className="text-xl font-medium text-neutral-900 mb-4">Transparent Scoring</h3>
              <p className="text-neutral-600 leading-relaxed">
                No black boxes. Every score comes with explainable factors so your team can understand and defend every decision.
              </p>
            </div>
            
            <div className="border-t border-neutral-300 pt-8">
              <h3 className="text-xl font-medium text-neutral-900 mb-4">Bank-Grade Security</h3>
              <p className="text-neutral-600 leading-relaxed">
                SOC 2 Type II certified. Every transaction encrypted. Built to meet the compliance requirements of the most regulated institutions.
              </p>
            </div>
            
            <div className="border-t border-neutral-300 pt-8">
              <h3 className="text-xl font-medium text-neutral-900 mb-4">Dedicated Partnership</h3>
              <p className="text-neutral-600 leading-relaxed">
                We succeed when you succeed. Dedicated support, continuous optimization, and shared accountability for outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="py-24 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="aspect-square rounded-2xl overflow-hidden bg-stone-100">
              <img 
                src="/about-grid-1.jpg" 
                alt="Abstract" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-stone-100">
              <img 
                src="/about-grid-2.jpg" 
                alt="New York City" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-stone-100">
              <img 
                src="/about-grid-3.jpg" 
                alt="Innovation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Vision Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">The Vision</p>
              <h2 className="text-4xl md:text-5xl font-light text-neutral-900 leading-tight mb-8">
                Credit intelligence, automated.
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                We envisioned a world where credit decisions happen in seconds, not weeks. Where AI-powered insights replace guesswork. Where institutions can extend credit confidently without sacrificing accuracy.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                What once took weeks now unfolds in milliseconds. That's the LumiqAI difference.
              </p>
            </div>
            <div className="bg-stone-100 rounded-2xl p-12">
              <blockquote className="text-2xl font-light text-neutral-900 leading-relaxed">
                "Every fintech that added credit visibility saw 40%+ revenue growth. We're enabling that transformation at enterprise scale."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Product Focus Section */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">The Product</p>
              <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                LumiqAI API
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                The enterprise API for commercial credit intelligence. Embed real-time credit decisioning directly into your lending workflows.
              </p>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-4 text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  RESTful API with sub-100ms response times
                </li>
                <li className="flex items-center gap-4 text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  Comprehensive business credit reports
                </li>
                <li className="flex items-center gap-4 text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  AI-powered risk scoring with explanations
                </li>
                <li className="flex items-center gap-4 text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  SOC 2 Type II compliant infrastructure
                </li>
                <li className="flex items-center gap-4 text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  White-label ready for your brand
                </li>
              </ul>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="rounded-full px-8 bg-white text-neutral-900 hover:bg-neutral-100"
                >
                  Contact Sales
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="/dashboard.png" 
                alt="LumiqAI Dashboard" 
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6">
            Clarity begins with better data.
          </h2>
          <p className="text-xl text-neutral-600 mb-12">
            Book a consultation to see how LumiqAI can transform your credit operations.
          </p>
          <div className="flex justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="rounded-full px-8 py-6 text-lg bg-neutral-900 text-white hover:bg-neutral-800"
              >
                Contact Us
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
