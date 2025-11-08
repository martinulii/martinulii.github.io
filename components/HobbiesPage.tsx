import React from 'react';
import { ICONS } from '../constants';
import ContactSection from './ContactSection';

const futurePlans = [
  {
    Icon: ICONS.Train,
    title: 'Maquinista',
    description: 'Una passió des de petit, amb l\'objectiu de compaginar-ho amb la meva carrera tecnològica.',
  },
  {
    Icon: ICONS.Scale,
    title: 'Regulació de la Intel·ligència Artificial',
    description: 'Interès en l\'àmbit legal i ètic de la IA, amb l\'objectiu de contribuir a un desenvolupament responsable i segur.',
  },
];

const HobbiesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        
        {/* Hobbies i Plans de Futur */}
        <section aria-labelledby="future-plans-title">
          <h2 id="future-plans-title" className="text-3xl font-bold text-center mb-8 text-[--branch-color-main]">
            Hobbies i Plans de Futur
          </h2>
          <div className="space-y-8">
            {futurePlans.map((plan, index) => (
              <div key={index} className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-lg shadow-lg flex items-start gap-x-6">
                <div className="flex-shrink-0 bg-gray-700 p-3 rounded-full">
                  <plan.Icon className="w-8 h-8 text-[--branch-color-main]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{plan.title}</h3>
                  <p className="mt-1 text-gray-400">{plan.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contacte */}
        <ContactSection className="mt-16" />

      </div>
    </div>
  );
};

export default HobbiesPage;