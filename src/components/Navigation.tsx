import { motion } from "framer-motion";
import { Home, Info, Briefcase, FolderOpen, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  currentPage: number;
  onNavigate: (index: number) => void;
  pages: string[];
}

const icons = [Home, Info, Briefcase, FolderOpen, Mail];

export const Navigation = ({ currentPage, onNavigate, pages }: NavigationProps) => {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[10000] bg-card/80 backdrop-blur-lg rounded-full px-6 py-3 paper-shadow">
      <ul className="flex items-center gap-2">
        {pages.map((page, index) => {
          const Icon = icons[index];
          const isActive = currentPage === index;
          
          return (
            <li key={page}>
              <button
                onClick={() => onNavigate(index)}
                className={cn(
                  "relative px-4 py-2 rounded-full transition-fast flex items-center gap-2 group",
                  isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <Icon className="w-4 h-4 relative z-10" />
                <span className="relative z-10 text-sm font-medium hidden md:inline">
                  {page}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
