
import React from 'react';
import { EQUIPMENT } from '../constants';
import SectionHeading from './SectionHeading';

const EquipmentSection: React.FC = () => {
  return (
    <section id="equipment" className="py-20 bg-white">
      <div className="max-container px-4 text-center">
        <div className="flex flex-col items-center mb-16">
          <SectionHeading 
            title="Notre Matériel" 
            subtitle="Un équipement mobile de pointe pour une intervention rapide et efficace directement sur vos sites d'exploitation."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {EQUIPMENT.map((item, idx) => (
            <div key={idx} className="group flex flex-col items-center">
              <div className="mb-6 aspect-square w-full max-w-[200px] overflow-hidden rounded-full border-4 border-slate-50 shadow-lg group-hover:border-teal-500 transition-all">
                <img 
                  src={item.imageUrl} 
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">{item.name}</h3>
              <p className="text-sm text-slate-500 px-4">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
