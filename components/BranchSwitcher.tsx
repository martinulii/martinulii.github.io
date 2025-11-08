import React from 'react';
import { BRANCH_DATA } from '../constants';
import { BranchKey } from '../types';

interface BranchSwitcherProps {
  activeBranch: BranchKey;
  onBranchChange: (branch: BranchKey) => void;
}

const BranchSwitcher: React.FC<BranchSwitcherProps> = ({ activeBranch, onBranchChange }) => {
  const logicalBranch = BRANCH_DATA.logical;
  const artisticBranch = BRANCH_DATA.artistic;
  const isLogicalActive = activeBranch === 'logical';

  return (
    <div className="relative bg-gray-800/60 backdrop-blur-sm p-1.5 rounded-full shadow-lg flex items-center w-80 max-w-full">
      {/* Sliding background capsule */}
      <div
        className="absolute top-1.5 left-1.5 h-[calc(100%-12px)] w-[calc(50%-6px)] rounded-full transition-all duration-300 ease-in-out"
        style={{
          transform: isLogicalActive ? 'translateX(0%)' : 'translateX(100%)',
          backgroundColor: isLogicalActive ? logicalBranch.color : artisticBranch.color,
        }}
      />

      {/* Buttons */}
      <button
        onClick={() => onBranchChange('logical')}
        className={`relative z-10 w-1/2 flex items-center justify-center gap-x-2 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ease-in-out focus:outline-none`}
        aria-pressed={isLogicalActive}
      >
        <logicalBranch.Icon className={`w-5 h-5 transition-colors duration-300 ${isLogicalActive ? 'text-white' : 'text-gray-400 hover:text-white'}`} />
        <span className={`transition-colors duration-300 ${isLogicalActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}>{logicalBranch.name}</span>
      </button>
      <button
        onClick={() => onBranchChange('artistic')}
        className={`relative z-10 w-1/2 flex items-center justify-center gap-x-2 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ease-in-out focus:outline-none`}
        aria-pressed={!isLogicalActive}
      >
        <artisticBranch.Icon className={`w-5 h-5 transition-colors duration-300 ${!isLogicalActive ? 'text-white' : 'text-gray-400 hover:text-white'}`} />
        <span className={`transition-colors duration-300 ${!isLogicalActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}>{artisticBranch.name}</span>
      </button>
    </div>
  );
};

export default BranchSwitcher;