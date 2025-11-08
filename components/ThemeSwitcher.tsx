import React from 'react';
import { MainView } from '../types';
import { ICONS } from '../constants';

interface MainNavigationProps {
  activeView: MainView | null;
  onViewChange: (view: MainView) => void;
}

const NAV_ITEMS: { key: MainView; label: string; Icon: React.ComponentType<any> }[] = [
    { key: 'trajectoria', label: 'Trajectòria', Icon: ICONS.Milestone },
    { key: 'habilitats', label: 'Habilitats', Icon: ICONS.Sparkles },
    { key: 'hobbies', label: 'Hobbies i Futur', Icon: ICONS.Rocket },
];

const MainNavigation: React.FC<MainNavigationProps> = ({ activeView, onViewChange }) => {
  return (
    <div className="bg-gray-800/60 backdrop-blur-sm p-1.5 rounded-full shadow-lg inline-flex items-center space-x-2">
      {NAV_ITEMS.map(({ key, label, Icon }) => {
        const isActive = activeView === key;
        return (
          <button
            key={key}
            onClick={() => onViewChange(key)}
            className={`flex items-center gap-x-2 px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 ${
              isActive
                ? 'text-white shadow-md'
                : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
            }`}
            style={isActive ? { backgroundColor: 'var(--branch-color-main)' } : undefined}
            aria-pressed={isActive}
          >
            <Icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400'}`} />
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default MainNavigation;
