import { motion } from "framer-motion";
import { Code, Server, Palette, Zap, Shield, Headphones } from "lucide-react";
import servicesImage from "@/assets/services-illustration.jpg";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Pembuatan website profesional, responsif, dan SEO-friendly dengan teknologi modern seperti React, Next.js, dan TypeScript.",
    features: ["Custom Website", "E-Commerce", "Web Application", "CMS Development"]
  },
  {
    icon: Server,
    title: "Hosting & Domain",
    description: "Layanan hosting berkecepatan tinggi dengan uptime 99.9% dan registrasi domain untuk berbagai ekstensi.",
    features: ["Cloud Hosting", "Domain Registration", "SSL Certificate", "24/7 Monitoring"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Desain antarmuka yang menarik dan user experience yang optimal untuk meningkatkan konversi bisnis Anda.",
    features: ["Wireframing", "Prototyping", "User Research", "Design System"]
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimasi kecepatan dan performa website untuk pengalaman pengguna terbaik dan ranking SEO lebih tinggi.",
    features: ["Speed Optimization", "SEO Enhancement", "Mobile Optimization", "Core Web Vitals"]
  },
  {
    icon: Shield,
    title: "Security & Maintenance",
    description: "Perlindungan website dari ancaman cyber dan pemeliharaan rutin untuk memastikan operasional optimal.",
    features: ["Security Audit", "Regular Updates", "Backup Services", "Malware Protection"]
  },
  {
    icon: Headphones,
    title: "Support & Consultation",
    description: "Dukungan teknis dan konsultasi bisnis digital untuk membantu Anda membuat keputusan strategis yang tepat.",
    features: ["24/7 Support", "Technical Consultation", "Training", "Strategy Planning"]
  }
];

export const ServicesPage = () => {
  return (
    <div className="min-h-screen p-8 md:p-16 overflow-y-auto">
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Layanan <span className="text-primary">Kami</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Solusi digital komprehensif untuk mengembangkan bisnis Anda
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden paper-shadow-hover max-w-3xl mx-auto"
        >
          <img
            src={servicesImage}
            alt="Layanan Digital"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-card p-6 rounded-xl paper-shadow hover:paper-shadow-hover transition-fast space-y-4 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-fast">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 pt-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
