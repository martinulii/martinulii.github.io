import React, { useState, useEffect, useRef } from 'react';
import { TimelineEvent } from '../types';

interface TimelineItemProps {
  event: TimelineEvent;
  side: 'left' | 'right';
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, side }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const alignment = side === 'left' ? 'md:text-right' : 'md:text-left';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1,
      }
    );

    const currentRef = itemRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const sideSpecificTransform = side === 'left' ? 'translate-x-[-2rem]' : 'translate-x-[2rem]';

  return (
    <div
      ref={itemRef}
      className={`w-full max-w-sm ${alignment} transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${sideSpecificTransform}`
      }`}
    >
      <div className="bg-gray-800/60 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg">
        <p className="font-semibold text-[--branch-color-main] transition-colors duration-300">{event.year}</p>
        
        {event.url ? (
          <a href={event.url} target="_blank" rel="noopener noreferrer" className="group">
            <h3 className="text-xl font-bold text-white mt-1 transition-colors duration-300 group-hover:text-[--branch-color-main]">
              {event.title}
            </h3>
          </a>
        ) : (
          <h3 className="text-xl font-bold text-white mt-1">{event.title}</h3>
        )}

        <h4 className="text-md font-medium text-gray-300">{event.company}</h4>
        <p className="mt-2 text-gray-400 text-sm">
          {event.description}
        </p>
        <div className={`flex flex-wrap gap-2 mt-4 ${side === 'left' ? 'md:justify-end' : 'justify-start'}`}>
          {event.tags.map((tag, i) => (
            <span key={i} className="bg-gray-700 text-[--branch-color-main] text-xs font-mono px-3 py-1 rounded-full transition-colors duration-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
