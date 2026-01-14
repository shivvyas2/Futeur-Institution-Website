import { useState, useRef, useCallback } from 'react';
import { ArrowLeft, ArrowRight, XCircle, Bell, Target, TrendingUp, CheckCircle } from 'lucide-react';

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current || isAnimating) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(5, Math.min(95, percentage)));
  }, [isAnimating]);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isAnimating) return;
    handleMove(e.touches[0].clientX);
  };

  const handleSliderClick = () => {
    if (isDragging.current) return; // Don't trigger on drag end
    setIsAnimating(true);
    // Toggle between showing "without" (5%) and "with" (95%)
    const targetPosition = sliderPosition > 50 ? 5 : 95;
    setSliderPosition(targetPosition);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Without LumiqAI - 3 iPhones (real screenshots showing poor experience)
  const WithoutPhones = () => (
    <div className="relative flex justify-center items-center gap-2 md:gap-4 p-4 md:p-8 scale-[0.85] md:scale-100">
      {/* Phone 1 - Left (Chase) */}
      <div className="relative transform -rotate-6 z-10">
        <div className="w-32 md:w-40 rounded-[1.5rem] overflow-hidden shadow-2xl shadow-black/30">
          <img 
            src="/mobile/chase-smb-2.png" 
            alt="Chase SMB App" 
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Phone 2 - Center (Citi) */}
      <div className="relative z-20">
        <div className="w-36 md:w-44 rounded-[1.75rem] overflow-hidden shadow-2xl shadow-black/40">
          <img 
            src="/mobile/citi-smb-2.png" 
            alt="Citi Business App" 
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Phone 3 - Right (Wells Fargo) */}
      <div className="relative transform rotate-6 z-10">
        <div className="w-32 md:w-40 rounded-[1.5rem] overflow-hidden shadow-2xl shadow-black/30">
          <img 
            src="/mobile/wells-smb-2.png" 
            alt="Wells Fargo SMB App" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );

  // With LumiqAI - 3 iPhones (real screenshots showing LumiqAI integration)
  const WithPhones = () => (
    <div className="relative flex justify-center items-center gap-2 md:gap-4 p-4 md:p-8 scale-[0.85] md:scale-100">
      {/* Phone 1 - Left (Chase) */}
      <div className="relative transform -rotate-6 z-10">
        <div className="w-32 md:w-40 rounded-[1.5rem] overflow-hidden shadow-2xl shadow-black/30">
          <img 
            src="/mobile/chase-lumiq.png" 
            alt="Chase with LumiqAI" 
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Phone 2 - Center (Citi) */}
      <div className="relative z-20">
        <div className="w-36 md:w-44 rounded-[1.75rem] overflow-hidden shadow-2xl shadow-black/40">
          <img 
            src="/mobile/citi-lumiq.png" 
            alt="Citi with LumiqAI" 
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Phone 3 - Right (Wells Fargo) */}
      <div className="relative transform rotate-6 z-10">
        <div className="w-32 md:w-40 rounded-[1.5rem] overflow-hidden shadow-2xl shadow-black/30">
          <img 
            src="/mobile/wells-lumiq.png" 
            alt="Wells Fargo with LumiqAI" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto my-6 md:my-8">
      {/* Instruction - Top */}
      <div className="text-center mb-4">
        <p className="text-base md:text-lg font-medium text-foreground mb-1">
          Click to see the future of SMB Customer Experience
        </p>
      </div>

      {/* Labels */}
      <div className="flex justify-between items-center mb-4 px-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <span className="text-sm font-medium text-muted-foreground">Without LumiqAI</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">With LumiqAI</span>
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
        </div>
      </div>

      {/* Slider Container */}
      <div 
        ref={containerRef}
        className="relative w-full aspect-[3/2] md:aspect-[2/1] rounded-2xl md:rounded-3xl overflow-hidden cursor-ew-resize bg-gradient-to-br from-gray-100 to-gray-200 border border-border shadow-2xl"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {/* Without LumiqAI (Left Side - Dark) */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center ${isAnimating ? 'transition-[clip-path] duration-500 ease-out' : ''}`}
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <WithoutPhones />
        </div>

        {/* With LumiqAI (Right Side - Light) */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-white to-gray-50 flex items-center justify-center ${isAnimating ? 'transition-[clip-path] duration-500 ease-out' : ''}`}
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        >
          <WithPhones />
        </div>

        {/* Slider Handle */}
        <div 
          className={`absolute top-0 bottom-0 w-1 bg-white shadow-2xl cursor-pointer z-30 ${isAnimating ? 'transition-all duration-500 ease-out' : ''}`}
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          onClick={handleSliderClick}
        >
          {/* Handle Button with Pulse Animation */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-blue-600 rounded-full shadow-xl flex items-center justify-center cursor-pointer border-4 border-white animate-pulse hover:animate-none hover:scale-110 transition-transform">
            <ArrowLeft className="w-4 h-4 text-white absolute -translate-x-1.5" />
            <ArrowRight className="w-4 h-4 text-white absolute translate-x-1.5" />
          </div>
          {/* Outer Pulse Ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-2 border-blue-400 animate-ping opacity-75" />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
