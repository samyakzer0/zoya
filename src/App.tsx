import { useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePortfolioStore } from './store/portfolioStore';
import { LandingPage } from './components/LandingPage';

// Lazy load portfolio components for better performance
const DevPortfolio = lazy(() => import('./components/DevPortfolio').then(module => ({ default: module.DevPortfolio })));
const DesignPortfolio = lazy(() => import('./components/DesignPortfolio').then(module => ({ default: module.DesignPortfolio })));

function App() {
  const { currentView, initializeFromSession, isTransitioning } = usePortfolioStore();

  // Initialize from session storage on mount
  useEffect(() => {
    initializeFromSession();
  }, [initializeFromSession]);

  // Handle browser back button
  useEffect(() => {
    const handlePopState = () => {
      const { goBack } = usePortfolioStore.getState();
      goBack();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Disable scroll during transitions
  useEffect(() => {
    if (isTransitioning) {
      document.body.style.overflow = 'hidden';
      const timeout = setTimeout(() => {
        document.body.style.overflow = 'auto';
      }, 300);
      return () => {
        clearTimeout(timeout);
        document.body.style.overflow = 'auto';
      };
    }
  }, [isTransitioning]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <AnimatePresence mode="wait">
        {currentView === 'landing' && (
          <LandingPage key="landing" />
        )}
        
        {currentView === 'dev' && (
          <Suspense key="dev" fallback={
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
              <div className="text-white text-xl">Loading Developer Portfolio...</div>
            </div>
          }>
            <DevPortfolio />
          </Suspense>
        )}
        
        {currentView === 'design' && (
          <Suspense key="design" fallback={
            <div className="min-h-screen flex items-center justify-center bg-white">
              <div className="text-gray-900 text-xl">Loading Designer Portfolio...</div>
            </div>
          }>
            <DesignPortfolio />
          </Suspense>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
