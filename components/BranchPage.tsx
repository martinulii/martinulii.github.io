import React, { useState, useEffect, useRef, useMemo } from 'react';
import { BranchContent, TimelineEvent } from '../types';
import TimelineItem from './TimelineItem';

interface BranchPageProps {
  data: BranchContent;
}

const BranchPage: React.FC<BranchPageProps> = ({ data }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progressHeight, setProgressHeight] = useState(0);

  const sortEvents = (events: TimelineEvent[]) => {
    const getRecencyValues = (yearStr: string): [number, number] => {
      const currentYear = new Date().getFullYear();
      if (yearStr === 'Cursant') return [currentYear + 2, currentYear + 2];
      if (yearStr.includes('Actual')) {
        const startYear = parseInt(yearStr.split(' - ')[0], 10);
        return [currentYear + 1, startYear || currentYear];
      }
      const year = parseInt(yearStr, 10);
      if (!isNaN(year)) return [year, year];
      return [-Infinity, -Infinity];
    };

    return [...events].sort((a, b) => {
      const [endYearA, startYearA] = getRecencyValues(a.year);
      const [endYearB, startYearB] = getRecencyValues(b.year);
      if (endYearA !== endYearB) return endYearB - endYearA;
      return startYearB - startYearA;
    });
  };

  const sortedFormation = useMemo(() => sortEvents(data.formation), [data.formation]);
  const sortedProjects = useMemo(() => sortEvents(data.projects), [data.projects]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top, height } = containerRef.current.getBoundingClientRect();
        const viewHeight = window.innerHeight;
        
        if (height === 0) return;

        // Progress is 0 when the top of the container enters the viewport from the bottom.
        // Progress is 100 when the bottom of the container leaves the viewport at the top.
        const totalScrollDistance = height + viewHeight;
        const scrolledDistance = viewHeight - top;
        
        const progress = (scrolledDistance / totalScrollDistance) * 100;

        setProgressHeight(Math.max(0, Math.min(progress, 100)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [data]);

  const hasFormationEvents = data.formation.length > 0;
  const hasProjectEvents = data.projects.length > 0;
  const hasTimelineEvents = hasFormationEvents || hasProjectEvents;

  return (
    <>
      {hasTimelineEvents && (
        <div className="container mx-auto px-4 pt-8">
          <div className="relative max-w-4xl mx-auto" ref={containerRef}>
            <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-700 rounded-full transform -translate-x-1/2"></div>
            <div
              className="absolute left-1/2 top-0 w-1 bg-[--branch-color-main] rounded-full transform -translate-x-1/2 transition-all duration-300 ease-linear"
              style={{ height: `${progressHeight}%` }}
            ></div>
            
            <div className="flex items-start">
              {/* Left Column (Formation) */}
              <div className="w-1/2 pr-8">
                <div className="space-y-12 flex flex-col items-end">
                  {sortedFormation.map((event, index) => (
                    <div className="relative w-full max-w-sm" key={`form-${index}`}>
                       <div className="absolute right-[-34px] top-5 z-20">
                         <div className="w-4 h-4 rounded-full bg-gray-900 border-4 border-[--branch-color-main] transition-colors duration-300"></div>
                       </div>
                       <TimelineItem event={event} side="left" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column (Projects) */}
              <div className="w-1/2 pl-8">
                <div className="space-y-12 flex flex-col items-start">
                  {sortedProjects.map((event, index) => (
                     <div className="relative w-full max-w-sm" key={`proj-${index}`}>
                       <div className="absolute left-[-34px] top-5 z-20">
                         <div className="w-4 h-4 rounded-full bg-gray-900 border-4 border-[--branch-color-main] transition-colors duration-300"></div>
                       </div>
                       <TimelineItem event={event} side="right" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BranchPage;