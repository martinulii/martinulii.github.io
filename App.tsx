import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import MainNavigation from './components/ThemeSwitcher';
import BranchSwitcher from './components/BranchSwitcher';
import BranchPage from './components/BranchPage';
import SkillsPage from './components/SkillsPage';
import HobbiesPage from './components/HobbiesPage';
import ContactSection from './components/ContactSection';
import { BRANCH_DATA } from './constants';
import { MainView, BranchKey } from './types';

const App: React.FC = () => {
  const [mainView, setMainView] = useState<MainView | null>(null);
  const [activeBranch, setActiveBranch] = useState<BranchKey>('logical');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isLandingExiting, setIsLandingExiting] = useState(false);

  const headerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [mainView, activeBranch]);

  useEffect(() => {
    let color: string;
    if (mainView === 'trajectoria') {
      color = BRANCH_DATA[activeBranch].color;
    } else if (mainView === 'habilitats') {
      // Per habilitats, utilitzem el color tècnic (blau) com a color principal
      color = BRANCH_DATA.logical.color;
    } else if (mainView === 'hobbies') {
      // Per hobbies i futur, utilitzem el color creatiu (lila)
      color = BRANCH_DATA.artistic.color;
    } else {
      color = '#6b7280'; // gray-500
    }
    document.documentElement.style.setProperty('--branch-color-main', color);
    document.body.className = 'bg-gray-900 text-white';
  }, [mainView, activeBranch]);

  const handleViewChange = (newView: MainView) => {
    if (newView === mainView) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setMainView(newView);
      if (newView === 'trajectoria') {
        setActiveBranch('logical');
      }
      setIsTransitioning(false);
    }, 300);
  };
  
  const handleInitialViewSelect = (view: MainView) => {
    setIsLandingExiting(true);
    setTimeout(() => {
      setMainView(view);
    }, 500); // Duration of exit animation
  };

  const handleResetView = () => {
    setIsTransitioning(true);
    setTimeout(() => {
        setMainView(null);
        setIsLandingExiting(false);
        setIsTransitioning(false);
    }, 300);
  };

  const handleBranchChange = (newBranch: BranchKey) => {
    if (newBranch === activeBranch) return;
    setActiveBranch(newBranch);
  };

  const renderContent = () => {
    switch (mainView) {
      case 'trajectoria':
        return <BranchPage data={BRANCH_DATA[activeBranch].data} />;
      case 'habilitats':
        return <SkillsPage logicalBranch={BRANCH_DATA.logical} artisticBranch={BRANCH_DATA.artistic} />;
      case 'hobbies':
        return <HobbiesPage />;
      default:
        return null;
    }
  };
  
  const hasFormationEvents = mainView === 'trajectoria' && BRANCH_DATA[activeBranch].data.formation.length > 0;
  const hasProjectEvents = mainView === 'trajectoria' && BRANCH_DATA[activeBranch].data.projects.length > 0;

  if (!mainView) {
    return (
      <div 
        className="bg-gray-900 min-h-screen flex flex-col items-center text-center p-4 font-sans antialiased"
        style={{ '--branch-color-main': '#6b7280' } as React.CSSProperties}
      >
        <div className="flex-grow flex flex-col items-center justify-start pt-24 sm:pt-32">
          <div className={`transform transition-all duration-500 ease-in-out hover:scale-105 ${isLandingExiting ? 'opacity-0 -translate-y-8' : 'opacity-100'}`}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-2">
              Martí Losantos
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400">
              Portfolio Personal
              </p>
          </div>
          <div className={`mt-16 text-center transition-all duration-500 ease-in-out delay-100 ${isLandingExiting ? 'opacity-0 -translate-y-8' : 'opacity-100'}`}>
            <p className="text-lg text-gray-400 mb-4">
              Què t'interessa?
            </p>
            <div className="inline-block animate-subtle-bounce">
              <MainNavigation activeView={mainView} onViewChange={handleInitialViewSelect} />
            </div>
          </div>
        </div>
        <div className={`w-full max-w-3xl py-4 transition-all duration-500 ease-in-out ${isLandingExiting ? 'opacity-0 translate-y-8' : 'opacity-100'}`}>
            <ContactSection showTitle={false} />
        </div>
      </div>
    );
  }

  return (
    <main className="bg-gray-900 min-h-screen font-sans antialiased">
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md shadow-lg"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="w-full flex flex-col items-center md:grid md:grid-cols-3">
            <div className="text-center md:text-left">
              <button
                type="button"
                onClick={handleResetView}
                className="text-2xl font-bold text-white transition-colors duration-300 hover:text-gray-300 focus:outline-none"
                aria-label="Tornar a la pàgina d'inici"
              >
                Martí Losantos
              </button>
            </div>

            <div className="flex flex-col items-center mt-4 md:mt-0 md:col-start-2">
              <MainNavigation activeView={mainView} onViewChange={handleViewChange} />
              {mainView === 'trajectoria' && (
                <div className="mt-4">
                  <BranchSwitcher activeBranch={activeBranch} onBranchChange={handleBranchChange} />
                </div>
              )}
            </div>
          </div>
           {mainView === 'trajectoria' && (
            <div className="w-full max-w-4xl mx-auto pt-4 mt-4 border-t border-gray-700">
                <div className="flex justify-between items-center">
                <h2 
                  className={`w-1/2 text-right text-lg font-bold transition-colors duration-300 pr-8 ${!hasFormationEvents && 'invisible'}`}
                  style={{ color: 'var(--branch-color-main)' }}
                >
                    Formació
                </h2>
                <h2 
                  className={`w-1/2 text-left text-lg font-bold transition-colors duration-300 pl-8 ${!hasProjectEvents && 'invisible'}`}
                  style={{ color: 'var(--branch-color-main)' }}
                >
                    Projectes
                </h2>
                </div>
            </div>
           )}
        </div>
      </header>
      
      <div 
        className="bg-gray-900"
        style={{ paddingTop: `${headerHeight}px` }}
      >
        <div
          key={mainView}
          className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        >
          {renderContent()}
        </div>

        <footer className="text-center py-8 text-gray-500">
          <p>&copy; {new Date().getFullYear()} Martí Losantos.</p>
        </footer>
      </div>
    </main>
  );
};

export default App;