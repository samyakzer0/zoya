import { motion } from 'framer-motion';
import { usePortfolioStore } from '../store/portfolioStore';
import { useEffect, useState } from 'react';

export const Header = () => {
  const { currentView, setView, isTransitioning } = usePortfolioStore();
  const [debounceTimeout, setDebounceTimeout] = useState<number | null>(null);
  
  const isActive = currentView !== 'landing';
  const isDevActive = currentView === 'dev';
  
  const handleToggle = () => {
    if (isTransitioning) return;
    
    // Clear existing timeout
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    
    // Debounce toggle with 100ms delay
    const timeout = setTimeout(() => {
      if (currentView === 'landing') {
        // Do nothing on landing page
        return;
      }
      
      // Switch between dev and design
      const newView = currentView === 'dev' ? 'design' : 'dev';
      setView(newView);
    }, 100);
    
    setDebounceTimeout(timeout);
  };
  
  const handleLabelClick = (view: 'dev' | 'design') => {
    if (isTransitioning || currentView === 'landing') return;
    
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    
    const timeout = setTimeout(() => {
      setView(view);
    }, 100);
    
    setDebounceTimeout(timeout);
  };
  
  useEffect(() => {
    return () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
    };
  }, [debounceTimeout]);
  
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-12 sm:h-16 lg:h-20">
          {/* Logo/Brand */}
          <div className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ZOYA IMAM
          </div>
          
          {/* Toggle Switch */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
            <button
              onClick={() => handleLabelClick('dev')}
              disabled={!isActive || isTransitioning}
              className={`text-xs sm:text-sm lg:text-base font-medium transition-all duration-300 ${
                isActive && isDevActive
                  ? 'text-blue-600 dark:text-blue-400'
                  : isActive
                  ? 'text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400'
                  : 'text-gray-300 dark:text-gray-700 cursor-not-allowed'
              }`}
            >
              Dev
            </button>
            
            <button
              onClick={handleToggle}
              disabled={!isActive || isTransitioning}
              className={`relative w-12 sm:w-14 lg:w-16 h-6 sm:h-7 lg:h-8 rounded-full transition-all duration-300 ${
                isActive
                  ? isDevActive
                    ? 'bg-blue-600'
                    : 'bg-purple-600'
                  : 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
              } ${isTransitioning ? 'opacity-50' : ''}`}
              style={{ minWidth: '44px', minHeight: '44px', padding: '8px' }}
            >
              <motion.div
                animate={{
                  x: isActive && !isDevActive ? (window.innerWidth < 1024 ? 20 : 26) : 0,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="absolute top-1 left-1 w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 bg-white rounded-full shadow-lg"
              />
            </button>
            
            <button
              onClick={() => handleLabelClick('design')}
              disabled={!isActive || isTransitioning}
              className={`text-xs sm:text-sm lg:text-base font-medium transition-all duration-300 ${
                isActive && !isDevActive
                  ? 'text-purple-600 dark:text-purple-400'
                  : isActive
                  ? 'text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400'
                  : 'text-gray-300 dark:text-gray-700 cursor-not-allowed'
              }`}
            >
              Design
            </button>
          </div>
          
          {/* Back to Landing */}
          {isActive && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setView('landing')}
              disabled={isTransitioning}
              className="text-xs sm:text-sm lg:text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors disabled:opacity-50"
            >
              ← Home
            </motion.button>
          )}
        </div>
      </div>
    </motion.header>
  );
};
