import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

interface PaperStackProps {
  children: ReactNode[];
  currentPage: number;
  onPageChange: (index: number) => void;
}

export const PaperStack = ({ children, currentPage, onPageChange }: PaperStackProps) => {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  return (
    <div className="relative w-full h-screen perspective-1000 overflow-hidden">
      <AnimatePresence mode="wait">
        {children.map((child, index) => {
          const isCurrent = index === currentPage;
          const isPast = index < currentPage;
          const isFuture = index > currentPage;
          
          const zIndex = children.length - Math.abs(currentPage - index);
          
          return (
            <motion.div
              key={index}
              className={cn(
                "absolute inset-0 bg-card paper-shadow rounded-lg overflow-y-auto preserve-3d",
                isCurrent && "cursor-default"
              )}
              style={{
                zIndex,
              }}
              initial={false}
              animate={{
                rotateY: isPast ? -15 : isFuture ? 15 : 0,
                x: isPast ? '-100%' : isFuture ? (hoveredSide === 'right' && index === currentPage + 1 ? '-5%' : '100%') : 0,
                scale: isPast ? 0.9 : isFuture ? 0.95 : 1,
                opacity: isPast ? 0 : isFuture && index > currentPage + 2 ? 0 : 1,
              }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              {child}
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Hover zones for peek effect */}
      {currentPage < children.length - 1 && (
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-[9999] cursor-pointer"
          onMouseEnter={() => setHoveredSide('right')}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={() => onPageChange(currentPage + 1)}
        />
      )}
      
      {currentPage > 0 && (
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-[9999] cursor-pointer"
          onMouseEnter={() => setHoveredSide('left')}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={() => onPageChange(currentPage - 1)}
        />
      )}
    </div>
  );
};
