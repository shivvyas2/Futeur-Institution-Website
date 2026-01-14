import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import lumiqLogo from '@/assets/lumiq-logo-white.png';

interface DevLinkProps {
  title: string;
  description: string;
  href: string;
  external?: boolean;
}

const DevLink = ({ title, description, href, external }: DevLinkProps) => {
  const content = (
    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-400 transition-colors">
        <ArrowUpRight className="w-3 h-3 text-black" />
      </div>
      <div>
        <div className="text-sm text-white font-medium mb-0.5 group-hover:text-emerald-400 transition-colors">{title}</div>
        <div className="text-xs text-white/50 leading-relaxed">{description}</div>
      </div>
    </div>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link to={href}>{content}</Link>;
};

const Footer = () => {
  return (
    <footer className="bg-gc-dark text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1 text-center lg:text-left">
            <img src={lumiqLogo} alt="LumiqAI Logo" className="h-16 md:h-20 w-auto mx-auto lg:mx-0 mb-3" />
            <p className="text-sm text-white/70 mb-3">
              Powered by FuteurCredX
            </p>
            <p className="text-xs text-white/50 leading-relaxed">
              LumiqAI™ powers readiness scoring, unlock paths, and sponsor-safe exposure decisions for fundability infrastructure.
            </p>
          </div>

          {/* For Developers Card */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xs font-semibold text-white/70 mb-3 md:mb-4 uppercase tracking-wider">For developers</h4>
            <div className="bg-[#0d1117] rounded-xl p-2 md:p-3 border border-white/10 space-y-0">
              <DevLink
                title="API Docs"
                description="Integrate with LumiqAI's APIs and SDKs"
                href="https://docs.futeurcredx.com/"
                external
              />
              <DevLink
                title="Changelog"
                description="Latest updates to our API and SDK"
                href="https://docs.futeurcredx.com/changelog"
                external
              />
              <DevLink
                title="API Reference"
                description="Manage your integration"
                href="https://docs.futeurcredx.com/api-reference"
                external
              />
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-xs font-semibold text-white/70 mb-4 uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/platform" className="text-sm text-white/60 hover:text-white transition-colors">
                  Platform Overview
                </Link>
              </li>
              <li>
                <Link to="/platform/how-it-works" className="text-sm text-white/60 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/platform/security-compliance" className="text-sm text-white/60 hover:text-white transition-colors">
                  Security & Compliance
                </Link>
              </li>
              <li>
                <Link to="/platform/pilot-deployment" className="text-sm text-white/60 hover:text-white transition-colors">
                  Pilot & Deployment
                </Link>
              </li>
            </ul>
          </div>

          {/* Case Studies */}
          <div>
            <h4 className="text-xs font-semibold text-white/70 mb-4 uppercase tracking-wider">Case Studies</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/case-studies" className="text-sm text-white/60 hover:text-white transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/case-studies/regional-banks" className="text-sm text-white/60 hover:text-white transition-colors">
                  Regional Banks
                </Link>
              </li>
              <li>
                <Link to="/case-studies/credit-unions" className="text-sm text-white/60 hover:text-white transition-colors">
                  Credit Unions
                </Link>
              </li>
              <li>
                <Link to="/case-studies/banks" className="text-sm text-white/60 hover:text-white transition-colors">
                  Bank Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-xs font-semibold text-white/70 mb-4 uppercase tracking-wider">About</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-white/60 hover:text-white transition-colors">
                  FuteurCredX
                </Link>
              </li>
              <li>
                <a 
                  href="https://docs.futeurcredx.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/60 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <a 
              href="https://www.futeurcredx.com/privacy-policy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-white/50 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="https://www.futeurcredx.com/terms-of-service" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-white/50 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Extended Footer Section */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6 md:gap-8 text-center lg:text-left">
            {/* Left - Copyright */}
            <div>
              <div className="text-base md:text-lg font-bold text-white mb-2">FUTEURCREDX</div>
              <p className="text-xs md:text-sm text-white/60">© FUTEURCREDX 2026</p>
            </div>

            {/* Middle - Enterprise Solutions */}
            <div className="max-w-sm">
              <h5 className="text-sm font-semibold text-white mb-2">Enterprise Solutions</h5>
              <p className="text-xs text-white/50 leading-relaxed">
                Our enterprise solutions provide financial institutions with AI-powered risk assessment tools, lending intelligence, and portfolio analytics to enhance decision-making processes and improve operational efficiency.
              </p>
            </div>

            {/* Right - Data Security */}
            <div className="max-w-sm">
              <h5 className="text-sm font-semibold text-white mb-2">Data Security</h5>
              <p className="text-xs text-white/50 leading-relaxed">
                FUTEURCREDX employs industry-leading security measures to protect your business data. All information is encrypted and stored according to the highest security standards in compliance with relevant regulations.
              </p>
            </div>
          </div>

          {/* Final Copyright Line */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-xs text-white/40 text-center mb-3">
              © 2026 FUTEURCREDX. LUMIQ AI™ and FUTEURCREDX® are registered trademarks. All rights reserved.
            </p>
            <p className="text-xs text-white/30 text-center mb-4">
              SOC 2 • ISO 27001 Compliant • Data Residency: United States Only
            </p>
            <p className="text-[10px] text-white/25 text-center leading-relaxed max-w-4xl mx-auto">
              <strong>Disclaimer:</strong> All third-party logos, trademarks, brand names, screenshots, mockups, and visual demonstrations displayed on this website are the property of their respective owners and are used for illustrative and demonstration purposes only. No affiliation, endorsement, sponsorship, or partnership with any third-party company is implied or intended. The inclusion of any company name, logo, or brand does not constitute a claim of ownership or association. This website and its content are for evaluation and demonstration purposes only. All product and company names are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
