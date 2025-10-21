import { memo } from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../utils/transitions';
import { Hero } from './Hero';
import { Gallery } from './Gallery';
import { CaseStudies } from './CaseStudies';
import { Contact } from './Contact';

const DesignPortfolioComponent = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-16 sm:pt-20 contain-paint"
    >
      <Hero />
      <Gallery />
      <CaseStudies />
      <Contact />
      
      <footer className="bg-gradient-to-r from-purple-600 to-pink-600 py-8 px-4 text-center text-white">
        <p className="text-sm sm:text-base">
          © 2025 Designer Portfolio. Crafted with passion and creativity.
        </p>
      </footer>
    </motion.div>
  );
};

export const DesignPortfolio = memo(DesignPortfolioComponent);
