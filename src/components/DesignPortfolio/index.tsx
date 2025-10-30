import { memo } from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../utils/transitions';
import DesignHero from './Hero';
import DesignGallery from './Gallery';
import DesignAbout from './About';
import DesignCaseStudies from './CaseStudies';
import { Contact } from './Contact';
import { AnimeNavBar } from '../ui/anime-navbar';
import { Home, FileText, CreditCard, Info } from 'lucide-react';
import type { ViewMode } from '../../store/portfolioStore';

const items = [
  {
    name: "Home",
    url: "#",
    icon: Home,
    view: "landing" as ViewMode,
  },
  {
    name: "Dev",
    url: "#",
    icon: FileText,
    view: "dev" as ViewMode,
  },
  {
    name: "Design",
    url: "#",
    icon: CreditCard,
    view: "design" as ViewMode,
  },
  {
    name: "About",
    url: "#",
    icon: Info,
    view: "landing" as ViewMode,
  },
];

const DesignPortfolioComponent = () => {
  return (
    <>
      <AnimeNavBar items={items} defaultActive="Design" />
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="contain-paint"
      >
        <DesignHero />
        <DesignGallery />
        <DesignAbout />
        <DesignCaseStudies />
        <Contact />
      
      <footer className="bg-gradient-to-r from-periwinkle to-misty-rose py-8 px-4 text-center text-white">
        <p className="text-sm sm:text-base">
          © 2025 Designer Portfolio. Crafted with passion and creativity.
        </p>
      </footer>
      </motion.div>
    </>
  );
};

export const DesignPortfolio = memo(DesignPortfolioComponent);
