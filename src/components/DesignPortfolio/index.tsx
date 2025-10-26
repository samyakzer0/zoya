import { memo } from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../utils/transitions';
import DesignHero from './Hero';
import DesignGallery from './Gallery';
import DesignCaseStudies from './CaseStudies';
import { Contact } from './Contact';
import { AnimeNavBar } from '../ui/anime-navbar';
import { Home, FileText, CreditCard, Info } from 'lucide-react';

const items = [
  {
    name: "Home",
    url: "#",
    icon: Home,
    view: "landing",
  },
  {
    name: "Dev",
    url: "#",
    icon: FileText,
    view: "dev",
  },
  {
    name: "Design",
    url: "#",
    icon: CreditCard,
    view: "design",
  },
  {
    name: "About",
    url: "#",
    icon: Info,
    view: "landing",
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
