import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Enterprise from "./Enterprise";
import PlatformOverview from "./pages/PlatformOverview";
import HowItWorks from "./pages/HowItWorks";
import SecurityCompliance from "./pages/SecurityCompliance";
import PilotDeployment from "./pages/PilotDeployment";
import CaseStudiesOverview from "./pages/CaseStudiesOverview";
import CaseStudyRegionalBanks from "./pages/CaseStudyRegionalBanks";
import CaseStudyCreditUnions from "./pages/CaseStudyCreditUnions";
import CaseStudiesBanks from "./pages/CaseStudiesBanks";
import CaseStudyChase from "./pages/CaseStudyChase";
import CaseStudyCiti from "./pages/CaseStudyCiti";
import CaseStudyWellsFargo from "./pages/CaseStudyWellsFargo";
import CaseStudySantander from "./pages/CaseStudySantander";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Enterprise />} />
          <Route path="/platform" element={<PlatformOverview />} />
          <Route path="/platform/how-it-works" element={<HowItWorks />} />
          <Route path="/platform/security-compliance" element={<SecurityCompliance />} />
          <Route path="/platform/pilot-deployment" element={<PilotDeployment />} />
          <Route path="/case-studies" element={<CaseStudiesOverview />} />
          <Route path="/case-studies/regional-banks" element={<CaseStudyRegionalBanks />} />
          <Route path="/case-studies/credit-unions" element={<CaseStudyCreditUnions />} />
          <Route path="/case-studies/banks" element={<CaseStudiesBanks />} />
          <Route path="/case-studies/banks/chase" element={<CaseStudyChase />} />
          <Route path="/case-studies/banks/citi" element={<CaseStudyCiti />} />
          <Route path="/case-studies/banks/wells-fargo" element={<CaseStudyWellsFargo />} />
          <Route path="/case-studies/banks/santander" element={<CaseStudySantander />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
