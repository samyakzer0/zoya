import { memo } from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../utils/transitions';
import DevHero from './Hero';
import DevAbout from './About';
import DevProjects from './Projects';
import DevSkills from './Skills';
import DevContact from './Contact';
import { PortfolioHeader } from '../PortfolioHeader';
import NeonDivider from '../ui/neon-divider';

const DevPortfolioComponent = () => {
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
        <DevHero />
        <div className="bg-black border-0 outline-none m-0 p-0">
          <div className="max-w-4/5 mx-auto">
            <NeonDivider variant="glare" height={4} className="md:h-3" />
          </div>
        </div>
        <DevProjects />
        <div className="bg-black border-0 outline-none m-0 p-0">
          <div className="max-w-4/5 mx-auto">
            <NeonDivider variant="glare" height={4} className="md:h-3" />
          </div>
        </div>
        <DevAbout />
        <div className="bg-black">
          <div className="max-w-4/5 mx-auto">
            <NeonDivider variant="glare" height={4} className="md:h-3" />
          </div>
        </div>
        <DevSkills />
        <div className="bg-black border-0 outline-none m-0 p-0">
          <div className="max-w-4/5 mx-auto">
            <NeonDivider variant="glare" height={4} className="md:h-3" />
          </div>
        </div>
        <DevContact />
      </motion.div>
    </>
  );
};

export const DevPortfolio = memo(DevPortfolioComponent);
