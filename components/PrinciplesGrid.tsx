
import React from 'react';
import { PRINCIPLES, getIcon } from '../constants';
import SectionHeading from './SectionHeading';

const PrinciplesGrid: React.FC = () => {
  return (
    <section id="principles" className="py-20 bg-white">
      <div className="max-container px-4">
        <SectionHeading 
          title="Les 9 Principes de Prévention" 
          subtitle="Notre méthodologie rigoureuse pour garantir un environnement de travail sécurisé et sain."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRINCIPLES.map((p) => (
            <div 
              key={p.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-xl text-white ${p.color} transition-transform group-hover:scale-110`}>
                {getIcon(p.icon)}
              </div>
              <span className="absolute top-4 right-6 text-5xl font-black text-slate-100 group-hover:text-slate-200 transition-colors">
                {p.id}
              </span>
              <h3 className="mb-3 text-xl font-bold text-slate-900">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesGrid;
