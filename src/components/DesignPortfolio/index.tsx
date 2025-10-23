import { memo } from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../utils/transitions';
import DesignHero from './Hero';
import DesignGallery from './Gallery';
import DesignCaseStudies from './CaseStudies';
import { Contact } from './Contact';
import { PortfolioHeader } from '../PortfolioHeader';

const DesignPortfolioComponent = () => {
  return (
    <>
      <PortfolioHeader />
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
      
      <footer className="bg-gradient-to-r from-purple-600 to-pink-600 py-8 px-4 text-center text-white">
        <p className="text-sm sm:text-base">
          © 2025 Designer Portfolio. Crafted with passion and creativity.
        </p>
      </footer>
      </motion.div>
    </>
  );
};

export const DesignPortfolio = memo(DesignPortfolioComponent);
