
import React from 'react';
import { MISSIONS } from '../constants';
import { CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';

const MissionsSection: React.FC = () => {
  return (
    <section id="missions" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-container px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <SectionHeading 
              title="Nos Missions" 
              subtitle="L'AJFCPSTPE s'engage quotidiennement pour l'amélioration des conditions de travail en République du Congo."
            />
            <div className="space-y-4">
              {MISSIONS.map((m, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-slate-100 hover:border-teal-200 transition-colors">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="text-teal-600" size={20} />
                  </div>
                  <p className="text-slate-700 font-medium">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
             <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
               <img 
                 src="./images/CG.jpg" 
                 alt="Sécurité au travail" 
                 className="w-full h-auto object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent"></div>
               <div className="absolute bottom-8 left-8 right-8 text-white">
                 <p className="text-2xl font-bold italic">"Mieux protéger pour mieux produire"</p>
               </div>
             </div>
             {/* Decorative elements */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-400 rounded-full blur-3xl opacity-20 -z-0"></div>
             <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-teal-500 rounded-full blur-3xl opacity-10 -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionsSection;
