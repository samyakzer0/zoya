import { create } from 'zustand';

export type ViewMode = 'landing' | 'dev' | 'design';

interface ScrollPositions {
  landing: number;
  dev: number;
  design: number;
}

interface PortfolioState {
  currentView: ViewMode;
  previousView: ViewMode | null;
  scrollPositions: ScrollPositions;
  isTransitioning: boolean;
  history: ViewMode[];
  
  setView: (view: ViewMode) => void;
  saveScrollPosition: (view: ViewMode, position: number) => void;
  restoreScrollPosition: (view: ViewMode) => void;
  setTransitioning: (transitioning: boolean) => void;
  goBack: () => void;
  initializeFromSession: () => void;
}

export const usePortfolioStore = create<PortfolioState>((set, get) => ({
  currentView: 'landing',
  previousView: null,
  scrollPositions: {
    landing: 0,
    dev: 0,
    design: 0,
  },
  isTransitioning: false,
  history: ['landing'],
  
  setView: (view: ViewMode) => {
    const { currentView, history, scrollPositions } = get();
    
    // Save current scroll position before switching
    if (typeof window !== 'undefined') {
      const currentScroll = window.scrollY || window.pageYOffset;
      set({
        scrollPositions: {
          ...scrollPositions,
          [currentView]: currentScroll,
        },
      });
    }
    
    // Update view and history
    set({
      previousView: currentView,
      currentView: view,
      history: [...history, view],
      isTransitioning: true,
    });
    
    // Save to sessionStorage
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('portfolioView', view);
    }
    
    // Reset transitioning state after animation
    setTimeout(() => {
      set({ isTransitioning: false });
      get().restoreScrollPosition(view);
    }, 600);
  },
  
  saveScrollPosition: (view: ViewMode, position: number) => {
    set((state) => ({
      scrollPositions: {
        ...state.scrollPositions,
        [view]: position,
      },
    }));
  },
  
  restoreScrollPosition: (view: ViewMode) => {
    const { scrollPositions } = get();
    const position = scrollPositions[view];
    
    if (typeof window !== 'undefined') {
      // If returning to landing, always scroll to top
      if (view === 'landing') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: position, behavior: 'smooth' });
      }
    }
  },
  
  setTransitioning: (transitioning: boolean) => {
    set({ isTransitioning: transitioning });
  },
  
  goBack: () => {
    const { history } = get();
    if (history.length > 1) {
      // Remove current view from history
      const newHistory = history.slice(0, -1);
      const previousView = newHistory[newHistory.length - 1];
      
      set({
        currentView: previousView,
        history: newHistory,
        isTransitioning: true,
      });
      
      setTimeout(() => {
        set({ isTransitioning: false });
        get().restoreScrollPosition(previousView);
      }, 600);
    } else {
      // Default to landing if no history
      get().setView('landing');
    }
  },
  
  initializeFromSession: () => {
    if (typeof window !== 'undefined') {
      const savedView = sessionStorage.getItem('portfolioView') as ViewMode | null;
      if (savedView && (savedView === 'dev' || savedView === 'design')) {
        set({ currentView: savedView, history: ['landing', savedView] });
      }
    }
  },
}));
