import { useState } from "react";
import { PaperStack } from "@/components/PaperStack";
import { Navigation } from "@/components/Navigation";
import { HomePage } from "@/components/pages/HomePage";
import { AboutPage } from "@/components/pages/AboutPage";
import { ServicesPage } from "@/components/pages/ServicesPage";
import { PortfolioPage } from "@/components/pages/PortfolioPage";
import { ContactPage } from "@/components/pages/ContactPage";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = ["Home", "About", "Services", "Portfolio", "Contact"];

  const pageComponents = [
    <HomePage key="home" onNavigate={setCurrentPage} />,
    <AboutPage key="about" />,
    <ServicesPage key="services" />,
    <PortfolioPage key="portfolio" />,
    <ContactPage key="contact" />
  ];

  return (
    <div className="relative min-h-screen bg-background">
      <Navigation 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        pages={pages}
      />
      
      <PaperStack
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      >
        {pageComponents}
      </PaperStack>
    </div>
  );
};

export default Index;
