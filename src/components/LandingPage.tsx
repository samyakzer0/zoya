import { motion } from 'framer-motion';
import { landingVariants } from '../utils/transitions';
import { usePortfolioStore } from '../store/portfolioStore';

export const LandingPage = () => {
  const { setView } = usePortfolioStore();
  
  return (
    <motion.div
      variants={landingVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="text-center px-4 sm:px-6">
        <motion.div
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 sm:mb-12"
          style={{
            backgroundSize: '200% 200%',
          }}
        >
          Toggle!
        </motion.div>
        
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12"
        >
          Choose your view above ↑
        </motion.div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setView('dev')}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
          >
            View Developer Portfolio
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setView('design')}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
          >
            View Designer Portfolio
          </motion.button>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 sm:mt-16 text-sm text-gray-500 dark:text-gray-600"
        >
          Seamlessly switch between portfolios with the toggle above
        </motion.div>
      </div>
    </motion.div>
  );
};
