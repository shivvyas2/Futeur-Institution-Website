import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import lumiqLogo from '@/assets/lumiq-logo-white.png';

interface DropdownItem {
  title: string;
  description: string;
  href: string;
  external?: boolean;
}

interface DropdownConfig {
  mainItem: DropdownItem;
  sideItems: DropdownItem[];
}

const platformDropdown: DropdownConfig = {
  mainItem: {
    title: "Platform overview",
    description: "Discover what makes the LumiqAI platform and technology best-in-class.",
    href: "/platform"
  },
  sideItems: [
    {
      title: "How it works",
      description: "See the 5-step SMB credit journey from score to approval.",
      href: "/platform/how-it-works"
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security and vendor governance for regulated banking environments.",
      href: "/platform/security-compliance"
    },
    {
      title: "Pilot & Deployment",
      description: "90-day enterprise pilot program with sandbox-safe deployment and ROI tracking.",
      href: "/platform/pilot-deployment"
    }
  ]
};

const caseStudiesDropdown: DropdownConfig = {
  mainItem: {
    title: "Case Studies Overview",
    description: "Explore how banks can utilize LumiqAI to transform SMB lending.",
    href: "/case-studies"
  },
  sideItems: [
    {
      title: "Regional Banks",
      description: "SMB credit visibility for community-focused institutions.",
      href: "/case-studies/regional-banks"
    },
    {
      title: "Credit Unions",
      description: "Member-first credit intelligence solutions.",
      href: "/case-studies/credit-unions"
    },
    {
      title: "Bank Case Studies",
      description: "Implementation blueprints for Chase, Citibank, Wells Fargo, and Santander.",
      href: "/case-studies/banks"
    }
  ]
};

const aboutDropdown: DropdownConfig = {
  mainItem: {
    title: "FuteurCredX",
    description: "Revolutionizing how financial institutions extend and study commercial credit.",
    href: "/about"
  },
  sideItems: [
    {
      title: "Documentation",
      description: "Explore our API docs and integration guides.",
      href: "https://docs.futeurcredx.com/",
      external: true
    },
    {
      title: "Contact",
      description: "Get in touch with our team for demos and support.",
      href: "/contact"
    }
  ]
};

interface MegaDropdownProps {
  config: DropdownConfig;
  isOpen: boolean;
  onClose: () => void;
}

const MegaDropdown = ({ config, isOpen, onClose }: MegaDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      // Check if click is outside dropdown and not on a nav button
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        const navButton = (target as Element).closest('button');
        if (!navButton?.closest('nav')) {
          onClose();
        }
      }
    };

    // Add listener with a small delay to avoid immediate close
    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div ref={dropdownRef}>
      
      {/* Dropdown panel */}
      <div className="absolute top-full right-0 mt-4 z-50 bg-card border border-border rounded-2xl shadow-2xl animate-fade-in min-w-[600px]">
        <div className="grid grid-cols-2 p-6 gap-8">
          {/* Left column - Main item */}
          <div className="border-r border-border pr-8">
            <Link
              to={config.mainItem.href}
              onClick={onClose}
              className="group block"
            >
              <div className="font-semibold text-foreground group-hover:text-accent transition-colors text-base mb-2">
                {config.mainItem.title}
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                {config.mainItem.description}
              </div>
            </Link>
          </div>

          {/* Right column - Side items stacked */}
          <div className="space-y-6">
            {config.sideItems.map((item, index) => (
              item.external ? (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="group block"
                >
                  <div className="font-semibold text-foreground group-hover:text-accent transition-colors text-base mb-1">
                    {item.title}
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </div>
                </a>
              ) : (
                <Link
                  key={index}
                  to={item.href}
                  onClick={onClose}
                  className="group block"
                >
                  <div className="font-semibold text-foreground group-hover:text-accent transition-colors text-base mb-1">
                    {item.title}
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </div>
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const EngineNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleClose = () => {
    setOpenDropdown(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 md:px-4 py-2">
      {/* Centered floating navbar container */}
      <div className="flex justify-center">
        <div className="bg-card/95 backdrop-blur-md border border-border rounded-full shadow-lg max-w-full">
          <div className="flex items-center h-10 px-3 md:px-4 gap-2 md:gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img 
                src={lumiqLogo} 
                alt="LumiqAI" 
                className="h-14 md:h-20 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5">
            <div className="relative">
              <button
                onClick={() => handleToggle('platform')}
                className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium transition-colors text-foreground hover:text-accent"
              >
                Platform
                {openDropdown === 'platform' ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              <MegaDropdown 
                config={platformDropdown}
                isOpen={openDropdown === 'platform'}
                onClose={handleClose}
              />
            </div>
            
            <div className="relative">
              <button
                onClick={() => handleToggle('caseStudies')}
                className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium transition-colors text-foreground hover:text-accent"
              >
                Case Studies
                {openDropdown === 'caseStudies' ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              <MegaDropdown 
                config={caseStudiesDropdown}
                isOpen={openDropdown === 'caseStudies'}
                onClose={handleClose}
              />
            </div>
            
            <div className="relative">
              <button
                onClick={() => handleToggle('about')}
                className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium transition-colors text-foreground hover:text-accent"
              >
                About
                {openDropdown === 'about' ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              <MegaDropdown 
                config={aboutDropdown}
                isOpen={openDropdown === 'about'}
                onClose={handleClose}
              />
            </div>
          </nav>

            {/* Right side button */}
            <div className="hidden lg:flex items-center ml-4">
              <Link to="/contact">
                <Button 
                  size="sm"
                  className="rounded-full px-4 py-1 text-sm font-medium bg-foreground text-background hover:bg-foreground/90 shadow-sm"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 transition-colors text-foreground"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-2 md:mx-4 bg-card/95 backdrop-blur-md border border-border rounded-2xl shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 md:px-6 py-4 space-y-4 md:space-y-6">
            {/* Platform Section */}
            <div>
              <div className="text-sm font-semibold text-foreground mb-3">Platform</div>
              <div className="space-y-2">
                <Link
                  to={platformDropdown.mainItem.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  {platformDropdown.mainItem.title}
                </Link>
                {platformDropdown.sideItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Case Studies Section */}
            <div>
              <div className="text-sm font-semibold text-foreground mb-3">Case Studies</div>
              <div className="space-y-2">
                <Link
                  to={caseStudiesDropdown.mainItem.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  {caseStudiesDropdown.mainItem.title}
                </Link>
                {caseStudiesDropdown.sideItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* About Section */}
            <div>
              <div className="text-sm font-semibold text-foreground mb-3">About</div>
              <div className="space-y-2">
                <Link
                  to={aboutDropdown.mainItem.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  {aboutDropdown.mainItem.title}
                </Link>
                {aboutDropdown.sideItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Button */}
            <div className="pt-4 border-t border-border">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full font-medium">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default EngineNavbar;