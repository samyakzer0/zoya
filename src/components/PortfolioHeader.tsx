import { motion } from 'framer-motion';
import { usePortfolioStore } from '../store/portfolioStore';

export const PortfolioHeader = () => {
  const { setView, currentView } = usePortfolioStore();

  // Determine styling based on current view
  const isDevPortfolio = currentView === 'dev';
  
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 right-0 z-50 p-4"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setView('landing')}
        className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 ${
          isDevPortfolio 
            ? 'bg-gray-900/80 backdrop-blur-md border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white' 
            : 'bg-white/90 backdrop-blur-md border border-gray-200 text-gray-700 hover:bg-white hover:text-gray-900'
        }`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9,22 9,12 15,12 15,22" />
        </svg>
      </motion.button>
    </motion.header>
  );
};
