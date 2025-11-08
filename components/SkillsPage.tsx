import React from 'react';
import SkillsGrid from './SkillsGrid';
import { Branch } from '../types';

interface SkillsPageProps {
  logicalBranch: Branch;
  artisticBranch: Branch;
}

const SkillsPage: React.FC<SkillsPageProps> = ({ logicalBranch, artisticBranch }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
        <section aria-labelledby="logical-skills-title">
          <h2 id="logical-skills-title" className="text-3xl font-bold text-center mb-8" style={{ color: logicalBranch.color }}>
            {logicalBranch.skillsTitle}
          </h2>
          <div style={{ '--branch-color-main': logicalBranch.color } as React.CSSProperties}>
            <SkillsGrid skills={logicalBranch.skills} />
          </div>
        </section>
        <section aria-labelledby="artistic-skills-title">
          <h2 id="artistic-skills-title" className="text-3xl font-bold text-center mb-8" style={{ color: artisticBranch.color }}>
            {artisticBranch.skillsTitle}
          </h2>
          <div style={{ '--branch-color-main': artisticBranch.color } as React.CSSProperties}>
            <SkillsGrid skills={artisticBranch.skills} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default SkillsPage;