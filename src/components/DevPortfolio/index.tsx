import { memo } from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../utils/transitions';
import { Hero } from './Hero';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { Contact } from './Contact';

const DevPortfolioComponent = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-16 sm:pt-20 contain-paint"
    >
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="bg-gray-900 py-8 px-4 text-center text-gray-400">
        <p className="text-sm sm:text-base">
          © 2025 Developer Portfolio. Built with React, TypeScript & Tailwind CSS.
        </p>
      </footer>
    </motion.div>
  );
};

export const DevPortfolio = memo(DevPortfolioComponent);
