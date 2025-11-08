import React from 'react';
import { Skill } from '../types';

interface SkillsGridProps {
  skills: Skill[];
}

const SkillsGrid: React.FC<SkillsGridProps> = ({ skills }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-gray-800/60 backdrop-blur-sm p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center aspect-square transition-transform hover:scale-105"
          style={{ minHeight: '120px' }}
        >
          <skill.Icon 
            className="w-10 h-10 mb-2 transition-colors duration-300" 
            style={{ color: 'var(--branch-color-main)' }}
          />
          <span className="font-semibold text-white text-sm sm:text-base">{skill.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;