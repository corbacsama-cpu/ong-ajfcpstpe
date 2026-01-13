
import React from 'react';
import { ArrowLeft, CheckCircle2, Shield, Heart, Activity, Users, Settings, BookOpen } from 'lucide-react';
import { MISSIONS } from '../constants';

interface DetailedMissionsProps {
  onBack: () => void;
}

const DetailedMissions: React.FC<DetailedMissionsProps> = ({ onBack }) => {
  const detailedData = [
    {
      title: "Surveillance Médicale",
      // Added size directly to the icon element
      icon: <Activity className="text-teal-600" size={32} />,
      description: "Nous assurons le suivi complet de la santé des travailleurs à travers des visites d'embauche, de reprise et périodiques. Notre expertise permet de détecter précocement les risques liés au poste.",
      points: ["Visites médicales réglementaires", "Dépistage des maladies professionnelles", "Conseils d'aptitude"]
    },
    {
      title: "Audit & Conseil Technique",
      // Added size directly to the icon element
      icon: <Shield className="text-amber-500" size={32} />,
      description: "Identification et évaluation rigoureuse des risques professionnels directement sur les sites d'exploitation. Nous aidons les entreprises à définir leur politique de prévention.",
      points: ["Cartographie des risques", "Expertise en sécurité machine", "Conformité réglementaire"]
    },
    {
      title: "Formation & Sensibilisation",
      // Added size directly to the icon element
      icon: <BookOpen className="text-sky-600" size={32} />,
      description: "Organisation de séminaires et de sessions de formation pour les travailleurs et les employeurs sur les bonnes pratiques de santé et sécurité au travail.",
      points: ["Formation SST agréée", "Sensibilisation aux risques chimiques", "Ateliers ergonomie"]
    },
    {
      title: "Animation des CHST",
      // Added size directly to the icon element
      icon: <Users className="text-indigo-600" size={32} />,
      description: "Support à la mise en place et à l'animation des Comités d'Hygiène et de Sécurité (CHST) au sein des structures partenaires.",
      points: ["Accompagnement méthodologique", "Aide à la décision", "Reporting annuel"]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Detail Hero */}
      <section className="bg-teal-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-amber-400 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-teal-400 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-container px-4 relative z-10">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-teal-200 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold uppercase tracking-widest text-xs">Retour à l'accueil</span>
          </button>
          
          <h1 className="text-4xl md:text-6xl font-black mb-6">Nos Missions en Détail</h1>
          <p className="text-xl text-teal-100/80 max-w-2xl leading-relaxed">
            Une approche multidimensionnelle pour garantir l'excellence en santé et sécurité au travail en République du Congo.
          </p>
        </div>
      </section>

      {/* Detail Grid */}
      <section className="py-20">
        <div className="max-container px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {detailedData.map((item, idx) => (
              <div key={idx} className="p-10 rounded-[2rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-teal-900/5 transition-all duration-500">
                <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm">
                  {/* Fixed: Render the icon directly from the data object instead of using React.cloneElement, 
                      which avoids the TypeScript 'size' property error on unknown elements. */}
                  {item.icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {item.description}
                </p>
                <div className="space-y-3">
                  {item.points.map((p, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                      <span className="text-sm font-semibold text-slate-700">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-400">
        <div className="max-container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">
            Besoin d'un accompagnement spécifique ?
          </h2>
          <button 
            onClick={onBack}
            className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            Contactez un Expert
          </button>
        </div>
      </section>
    </div>
  );
};

export default DetailedMissions;
