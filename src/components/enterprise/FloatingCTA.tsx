import { Button } from "@/components/ui/button";
import { Gauge } from "lucide-react";
import SmartLink from "@/components/SmartLink";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <SmartLink to="/credit-journey#dashboard">
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-4 rounded-full shadow-xl border border-white/10 transition-all font-bold">
          <Gauge className="mr-2 h-5 w-5" />
          Start Journey
        </Button>
      </SmartLink>
    </div>
  );
};

export default FloatingCTA;
