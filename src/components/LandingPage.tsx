import { motion } from 'framer-motion';
import { landingVariants } from '../utils/transitions';
import { usePortfolioStore } from '../store/portfolioStore';
import LightRays from './LightRays';
import { useState, useRef, useCallback } from 'react';
import { flushSync } from 'react-dom';

export const LandingPage = () => {
  const { setView } = usePortfolioStore();
  const [togglePosition, setTogglePosition] = useState<'dev' | 'center' | 'design'>('center');
  const devButtonRef = useRef<HTMLButtonElement>(null);
  const designButtonRef = useRef<HTMLButtonElement>(null);

  const navigateToPortfolio = useCallback(async (view: 'dev' | 'design') => {
    const buttonRef = view === 'dev' ? devButtonRef : designButtonRef;
    if (!buttonRef.current) return;

    // Update toggle position
    setTogglePosition(view);

    await document.startViewTransition(() => {
      flushSync(() => {
        setView(view);
      });
    }).ready;

    const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    );

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 400,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }, [setView]);
  
  return (
    <motion.div
      variants={landingVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: '#222021' }}
    >
      {/* Light Rays Background */}
      <div className="absolute inset-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          opacity={1}
        />
      </div>

      <div className="text-center px-4 sm:px-6 relative z-10">
        <motion.div
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="mb-8 sm:mb-12"
          style={{
            backgroundSize: '200% 200%',
          }}
        >
          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl  drop-shadow-2xl"
            style={{
              fontFamily: '"Futura", "Trebuchet MS", Arial, sans-serif',
              color: 'rgba(255, 255, 255, 0.55)',
            }}
          >
            ZOYA IMAM
          </motion.h1>
         </motion.div>
         
         {/* Toggle Switch */}
         <div className="flex items-center justify-center gap-4 mb-8">
           <button
             ref={devButtonRef}
             onClick={() => navigateToPortfolio('dev')}
             className={`text-sm font-medium transition-colors duration-300 ${
               togglePosition === 'dev' ? 'text-white' : 'text-white/50 hover:text-white/70'
             }`}
           >
             Dev
           </button>
           
           <div 
             className="relative w-20 h-8 bg-gray-700 rounded-full cursor-pointer"
             onClick={(e) => {
               const rect = e.currentTarget.getBoundingClientRect();
               const clickX = e.clientX - rect.left;
               const centerX = rect.width / 2;
               
               if (clickX < centerX) {
                 navigateToPortfolio('dev');
               } else {
                 navigateToPortfolio('design');
               }
             }}
           >
             <motion.div
               animate={{
                 x: togglePosition === 'dev' ? 0 : togglePosition === 'center' ? 24 : 48,
               }}
               transition={{ type: 'spring', stiffness: 500, damping: 30 }}
               className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-lg"
             />
           </div>
           
           <button
             ref={designButtonRef}
             onClick={() => navigateToPortfolio('design')}
             className={`text-sm font-medium transition-colors duration-300 ${
               togglePosition === 'design' ? 'text-white' : 'text-white/50 hover:text-white/70'
             }`}
           >
             Design
           </button>
         </div>
    
       </div>
    </motion.div>
  );
};
