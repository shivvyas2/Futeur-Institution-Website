import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface StackingCardProps {
  children: ReactNode;
  index: number;
  totalCards: number;
  className?: string;
}

export const StackingCard = ({ children, index, totalCards, className = '' }: StackingCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  // Scale down as cards stack on top of each other
  const targetScale = 1 - (totalCards - index - 1) * 0.02;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  
  return (
    <div 
      ref={cardRef}
      className="sticky top-24"
      style={{ 
        zIndex: index + 1,
        paddingTop: `${index * 20}px`,
      }}
    >
      <motion.div 
        className={`rounded-3xl bg-card border border-border shadow-2xl overflow-hidden ${className}`}
        style={{ 
          scale,
          transformOrigin: 'top center',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

interface StackingCardsContainerProps {
  children: ReactNode;
}

export const StackingCardsContainer = ({ children }: StackingCardsContainerProps) => {
  return (
    <div className="relative">
      {children}
    </div>
  );
};

export default StackingCard;