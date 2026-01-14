import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import EngineNavbar from '@/components/EngineNavbar';
import Footer from '@/components/Footer';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

// FAQ Data - Relevant to FuteurCredX/LumiqAI
const faqItems = [
  {
    question: "What is LumiqAI and how does it work?",
    answer: "LumiqAI is our enterprise API that provides real-time SMB credit intelligence for financial institutions. It aggregates data from multiple sources—consumer and business credit bureaus, banking behavior, and registry data—to deliver composite credit scores and eligibility estimates. Banks integrate via REST API or embeddable widgets, and all loan decisions remain with the bank."
  },
  {
    question: "How long does a typical pilot take?",
    answer: "Our 90-day pilot program includes discovery and scoping (weeks 1-2), sandbox deployment (weeks 3-4), integration and testing (weeks 5-8), and live simulation with ROI measurement (weeks 9-12). Most banks see measurable results within the first 60 days of deployment."
  },
  {
    question: "Is LumiqAI compliant with banking regulations?",
    answer: "Yes. LumiqAI is SOC 2 Type II ready, FCRA aligned, and mapped to GLBA and FFIEC frameworks. We provide explainable credit scoring with adverse action reasons, immutable audit logs, and full data governance. Our security architecture uses AES-256 encryption, TLS 1.2+, and Zero Trust principles."
  },
  {
    question: "What data sources does LumiqAI use?",
    answer: "LumiqAI aggregates 340+ data points including: consumer credit signals (FICO, VantageScore), business bureau files (Experian, Equifax, D&B), registry and ownership data (SOS filings, UCC, EIN), deposit and transaction signals (ACH, payroll, NSF patterns), and tradeline/vendor behavior. All data is retrieved via soft pulls that don't impact credit scores."
  },
  {
    question: "How does pricing work?",
    answer: "We offer flexible pricing models based on API call volume and features deployed. Pilot programs include a fixed-fee structure with no long-term commitment. Contact our sales team for a custom quote based on your institution's needs and expected volume."
  },
  {
    question: "Can LumiqAI integrate with our existing systems?",
    answer: "Yes. LumiqAI is designed for seamless integration with existing banking infrastructure. We support REST APIs, webhooks, and embeddable UI components. Deployment options include cloud-hosted, VPC, or on-premise configurations. Most integrations are completed within 2-4 weeks."
  },
  {
    question: "What kind of support do you provide?",
    answer: "Enterprise clients receive dedicated technical account management, 24/7 production support, quarterly business reviews, and access to our engineering team for custom integrations. We also provide comprehensive documentation, sandbox environments, and training for your teams."
  },
  {
    question: "How is FuteurCredX different from traditional credit bureaus?",
    answer: "Unlike traditional bureaus that provide raw credit data, FuteurCredX delivers actionable intelligence. Our LUMIQ engine transforms multi-source credit data into predictive insights, eligibility estimates, and explainable scoring—helping banks make faster, more accurate SMB lending decisions while improving customer experience."
  }
];

// Inquiry type options (like Crux)
const inquiryOptions = [
  { value: "pilot", label: "I want to request a 90-Day Pilot" },
  { value: "demo", label: "I want to schedule a product demo" },
  { value: "api", label: "I am interested in API integration" },
  { value: "enterprise", label: "I am exploring an enterprise partnership" },
  { value: "lender", label: "I am a lender or financial institution" },
  { value: "press", label: "I'm with the press" },
  { value: "other", label: "I'm reaching out about something else" }
];

// FAQ Accordion Component
const FAQItem = ({ question, answer, isOpen, onClick }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-[#2A2A2A] last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left hover:opacity-80 transition-opacity"
      >
        <span className="font-medium text-white text-base pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-[#C9A962] flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[#7A7A7A] flex-shrink-0" />
        )}
      </button>
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-[#9A9A9A] leading-relaxed pb-5 text-sm">{answer}</p>
      </motion.div>
    </div>
  );
};

// Contact Form Component - Crux Style
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    companyWebsite: '',
    inquiryType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:contact@futeurcredx.com?subject=Contact from ${formData.firstName} ${formData.lastName} at ${formData.companyName}&body=${formData.message}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* First Name */}
      <div>
        <label className="block text-sm text-[#9A9A9A] mb-2">First name*</label>
        <Input
          required
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          className="bg-[#1A1A1A] border-[#2A2A2A] text-white placeholder:text-[#5A5A5A] focus:border-[#C9A962] focus:ring-0 h-12 rounded-md"
        />
      </div>

      {/* Last Name */}
      <div>
        <label className="block text-sm text-[#9A9A9A] mb-2">Last name*</label>
        <Input
          required
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          className="bg-[#1A1A1A] border-[#2A2A2A] text-white placeholder:text-[#5A5A5A] focus:border-[#C9A962] focus:ring-0 h-12 rounded-md"
        />
      </div>

      {/* Work Email */}
      <div>
        <label className="block text-sm text-[#9A9A9A] mb-2">Work email*</label>
        <Input
          required
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="bg-[#1A1A1A] border-[#2A2A2A] text-white placeholder:text-[#5A5A5A] focus:border-[#C9A962] focus:ring-0 h-12 rounded-md"
        />
      </div>

      {/* Company Name */}
      <div>
        <label className="block text-sm text-[#9A9A9A] mb-2">Company name*</label>
        <Input
          required
          placeholder="Please enter"
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          className="bg-[#1A1A1A] border-[#2A2A2A] text-white placeholder:text-[#5A5A5A] focus:border-[#C9A962] focus:ring-0 h-12 rounded-md"
        />
      </div>

      {/* Company Website */}
      <div>
        <label className="block text-sm text-[#9A9A9A] mb-2">Company Website*</label>
        <Input
          required
          placeholder="https://"
          value={formData.companyWebsite}
          onChange={(e) => setFormData({ ...formData, companyWebsite: e.target.value })}
          className="bg-[#1A1A1A] border-[#2A2A2A] text-white placeholder:text-[#5A5A5A] focus:border-[#C9A962] focus:ring-0 h-12 rounded-md"
        />
      </div>

      {/* Inquiry Type - Radio Buttons like Crux */}
      <div>
        <label className="block text-sm text-[#9A9A9A] mb-4">Let us know how LumiqAI can work with you:*</label>
        <RadioGroup
          value={formData.inquiryType}
          onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
          className="space-y-3"
        >
          {inquiryOptions.map((option) => (
            <div key={option.value} className="flex items-center space-x-3">
              <RadioGroupItem 
                value={option.value} 
                id={option.value}
                className="border-[#3A3A3A] text-[#C9A962] data-[state=checked]:bg-[#C9A962] data-[state=checked]:border-[#C9A962]"
              />
              <Label 
                htmlFor={option.value} 
                className="text-sm text-[#CACACA] cursor-pointer hover:text-white transition-colors"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm text-[#9A9A9A] mb-2">Anything else you want us to know?</label>
        <Textarea
          placeholder="Tell us about your needs..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="bg-[#1A1A1A] border-[#2A2A2A] text-white placeholder:text-[#5A5A5A] focus:border-[#C9A962] focus:ring-0 min-h-[120px] rounded-md resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button 
        type="submit" 
        className="w-full bg-white text-black hover:bg-[#E5E5E5] h-12 rounded-md font-medium text-sm transition-colors"
      >
        Submit
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      <p className="text-xs text-[#6A6A6A] pt-2">
        By submitting this form, you agree to our{' '}
        <a href="https://www.futeurcredx.com/terms-of-service" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="https://www.futeurcredx.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
          Privacy Policy
        </a>.
      </p>
    </form>
  );
};

// Hero Section - Crux Style (Full dark, split layout)
const HeroSection = () => {
  return (
    <section className="relative bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 min-h-screen">
          
          {/* Left Column - Text + Image */}
          <div className="flex flex-col pt-32 pb-16 px-6 lg:px-12">
            {/* Hero Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h1 className="text-[40px] md:text-[52px] lg:text-[56px] font-medium text-white leading-[1.1] tracking-[-0.02em] mb-6">
                <span className="text-[#C9A962]">Intelligent credit decisions</span>
                {' '}for modern financial institutions
              </h1>
              
              <p className="text-[#9A9A9A] text-lg leading-relaxed mb-6 max-w-lg">
                Whether your goal is to accelerate SMB lending, reduce leakage, or embed credit intelligence into your digital experience, LumiqAI can help. Fill out the form to get started.
              </p>
              
              <p className="text-[#6A6A6A] text-sm">
                Already signed up?{' '}
                <a href="https://app.lumiqai.com/login" className="text-[#C9A962] underline hover:text-white transition-colors">
                  Log into the platform.
                </a>
                {' '}Reach out to support@lumiqai.com if you're having trouble logging in.
              </p>
            </motion.div>

            {/* Image Placeholder Area */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 relative"
            >
              {/* Image container - placeholder for user upload */}
              <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px] rounded-lg overflow-hidden">
                {/* Placeholder image - replace with actual uploaded image */}
                <img 
                  src="/contact-hero.jpg" 
                  alt="Financial data visualization"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback gradient if image doesn't exist
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)';
                  }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Right Column - Form (Dark panel like Crux) */}
          <div className="bg-[#0A0A0A] border-l border-[#1A1A1A] pt-32 pb-16 px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section - Dark theme matching
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 px-6 bg-black">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#7A7A7A]">
            Still have questions?{' '}
            <a href="mailto:contact@futeurcredx.com" className="text-[#C9A962] hover:underline">
              Contact us directly.
            </a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border-t border-[#2A2A2A]"
        >
          {faqItems.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFAQ === index}
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <EngineNavbar />
      <HeroSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Contact;
