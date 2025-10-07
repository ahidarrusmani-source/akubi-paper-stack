import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

interface HomePageProps {
  onNavigate: (page: number) => void;
}

export const HomePage = ({ onNavigate }: HomePageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 md:p-16 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
            >
              PT AKUBI ZENIT INDONESIA
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Menciptakan<br />
              <span className="text-primary">Online Presence</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              yang fungsional dan mahakarya
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-lg">
            Kami menghadirkan solusi digital terpadu untuk bisnis Anda. Dari desain web yang memukau hingga infrastruktur hosting yang andal.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={() => onNavigate(4)}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Hubungi Kami
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate(2)}
              className="border-2"
            >
              Lihat Layanan
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden paper-shadow-hover">
            <img
              src={heroImage}
              alt="Digital Innovation"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
          
          {/* Decorative elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/20 rounded-full blur-3xl"
          />
        </motion.div>
      </div>
    </div>
  );
};
