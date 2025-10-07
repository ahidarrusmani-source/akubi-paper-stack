import { motion } from "framer-motion";
import { Users, Target, Lightbulb } from "lucide-react";
import aboutImage from "@/assets/about-illustration.jpg";

export const AboutPage = () => {
  return (
    <div className="min-h-screen p-8 md:p-16 overflow-y-auto">
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Tentang <span className="text-primary">AKUBI</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            PT AKUBI ZENIT INDONESIA - Partner terpercaya untuk transformasi digital bisnis Anda
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden paper-shadow-hover"
        >
          <img
            src={aboutImage}
            alt="Tim AKUBI"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-lg max-w-none"
        >
          <p className="text-muted-foreground leading-relaxed">
            PT AKUBI ZENIT INDONESIA adalah perusahaan teknologi yang berfokus pada pengembangan solusi digital inovatif. 
            Kami berkomitmen untuk membantu bisnis dari berbagai skala mencapai potensi maksimal mereka melalui teknologi web modern, 
            desain yang memukau, dan infrastruktur digital yang andal.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "Visi Kami",
              description: "Menjadi pemimpin dalam solusi digital Indonesia, menghadirkan inovasi yang mengubah cara bisnis beroperasi di era digital.",
              delay: 0.5
            },
            {
              icon: Lightbulb,
              title: "Misi Kami",
              description: "Menciptakan pengalaman digital yang luar biasa dengan menggabungkan teknologi terkini, desain yang intuitif, dan layanan pelanggan terbaik.",
              delay: 0.6
            },
            {
              icon: Users,
              title: "Tim Kami",
              description: "Didukung oleh tim profesional berpengalaman dalam web development, UI/UX design, dan infrastruktur digital.",
              delay: 0.7
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.delay }}
              className="bg-card p-8 rounded-xl paper-shadow hover:paper-shadow-hover transition-fast space-y-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
