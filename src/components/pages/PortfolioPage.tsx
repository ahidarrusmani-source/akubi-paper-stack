import { motion } from "framer-motion";
import { ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Application",
    description: "Platform e-commerce modern dengan fitur pembayaran terintegrasi dan dashboard admin yang powerful.",
    year: "2024",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Corporate Website",
    category: "Company Profile",
    description: "Website profil perusahaan dengan desain elegan dan animasi interaktif yang menarik.",
    year: "2024",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "SaaS Dashboard",
    category: "Web Application",
    description: "Dashboard analytics dengan visualisasi data real-time dan sistem notifikasi terintegrasi.",
    year: "2023",
    tags: ["React", "TypeScript", "D3.js", "WebSocket"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Restaurant Booking System",
    category: "Web Application",
    description: "Sistem reservasi online untuk restoran dengan manajemen meja dan menu digital.",
    year: "2023",
    tags: ["Vue.js", "Firebase", "Stripe"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Portfolio Website",
    category: "Personal Website",
    description: "Website portfolio kreatif untuk desainer dengan galeri interaktif dan animasi smooth.",
    year: "2024",
    tags: ["React", "GSAP", "Three.js"],
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Learning Management System",
    category: "Web Application",
    description: "Platform pembelajaran online dengan video streaming, quiz interaktif, dan progress tracking.",
    year: "2023",
    tags: ["React", "Node.js", "MongoDB", "AWS"],
    color: "from-teal-500 to-cyan-500"
  }
];

export const PortfolioPage = () => {
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
            Portfolio <span className="text-primary">Kami</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Karya-karya terbaik kami dalam menciptakan solusi digital yang inovatif
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-card rounded-xl overflow-hidden paper-shadow hover:paper-shadow-hover transition-fast group"
            >
              {/* Project Header with Gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/90 text-sm">{project.category}</p>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{project.year}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-fast"
                >
                  Lihat Detail
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
