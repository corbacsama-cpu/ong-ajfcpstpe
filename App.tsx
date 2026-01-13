
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Globe,
  Award,
  ChevronRight
} from 'lucide-react';
import PrinciplesGrid from './components/PrinciplesGrid';
import MissionsSection from './components/MissionsSection';
import EquipmentSection from './components/EquipmentSection';
import DetailedMissions from './components/DetailedMissions';

type View = 'home' | 'missions-detail';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const navLinks = [
    { name: 'Accueil', action: () => setCurrentView('home'), href: '#' },
    { name: 'Missions', action: () => setCurrentView('missions-detail'), href: '#missions' },
    { name: 'Principes', action: () => { setCurrentView('home'); setTimeout(() => document.getElementById('principles')?.scrollIntoView(), 100); }, href: '#principles' },
    { name: 'Matériel', action: () => { setCurrentView('home'); setTimeout(() => document.getElementById('equipment')?.scrollIntoView(), 100); }, href: '#equipment' },
    { name: 'Contact', action: () => { setCurrentView('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100); }, href: '#contact' },
  ];

  if (currentView === 'missions-detail') {
    return (
      <div className="min-h-screen flex flex-col font-sans">
         <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm py-4`}>
          <div className="max-container px-4 flex justify-between items-center">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => setCurrentView('home')}>
              <div className="bg-teal-600 text-white p-2 rounded-lg">
                <ShieldCheck size={28} />
              </div>
              <div>
                <span className="block font-black text-xl leading-none text-slate-900">AJFCPSTPE</span>
                <span className="hidden md:block text-[10px] font-bold tracking-widest uppercase text-teal-600">Santé & Sécurité</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button 
                  key={link.name} 
                  onClick={link.action}
                  className="text-sm font-semibold uppercase tracking-wider text-slate-600 hover:text-teal-600 transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </nav>
        <DetailedMissions onBack={() => setCurrentView('home')} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-container px-4 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => setCurrentView('home')}>
            <div className="bg-teal-600 text-white p-2 rounded-lg transition-transform group-hover:scale-110">
              <ShieldCheck size={28} />
            </div>
            <div>
              <span className={`block font-black text-xl leading-none ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>AJFCPSTPE</span>
              <span className={`hidden md:block text-[10px] font-bold tracking-widest uppercase ${scrolled ? 'text-teal-600' : 'text-teal-400'}`}>Santé & Sécurité</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={link.action}
                className={`text-sm font-semibold uppercase tracking-wider transition-colors ${scrolled ? 'text-slate-600 hover:text-teal-600' : 'text-slate-800 md:text-white/80 md:hover:text-white'}`}
              >
                {link.name}
              </button>
            ))}
            <a 
              href="#contact" 
              className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-amber-400/20 transition-all hover:scale-105 active:scale-95"
            >
              Urgence +242
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-teal-900 transition-transform duration-500 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full items-center justify-center gap-8 text-white">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              className="text-2xl font-bold"
              onClick={() => { link.action(); setIsMenuOpen(false); }}
            >
              {link.name}
            </button>
          ))}
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <span>+242 06 952 35 81</span>
            </div>
          </div>
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 -z-10 bg-teal-950">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover opacity-30 mix-blend-overlay"
              alt="Background"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-950 via-teal-900/80 to-transparent"></div>
          </div>

          <div className="max-container px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-teal-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-teal-500/30">
                <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-teal-200">Association Jean François Caillard</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                La Santé au Travail, <br />
                <span className="text-amber-400 underline decoration-teal-500 underline-offset-8">Notre Priorité.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-teal-100/80 max-w-lg leading-relaxed">
                Expertise médicale et technique pour la protection de l'environnement et la santé des travailleurs en République du Congo.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => { document.getElementById('principles')?.scrollIntoView({ behavior: 'smooth' }); }} 
                  className="group flex items-center gap-3 bg-white text-teal-900 px-8 py-4 rounded-2xl font-bold shadow-xl transition-all hover:bg-amber-400 hover:text-slate-900"
                >
                  Nos 9 Principes
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => setCurrentView('missions-detail')}
                  className="flex items-center gap-3 bg-teal-800/40 backdrop-blur-md text-white border border-teal-500/50 px-8 py-4 rounded-2xl font-bold hover:bg-teal-700/60 transition-all"
                >
                  Découvrir nos missions
                </button>
              </div>
            </div>

            {/* Hero Image Component */}
            <div className="hidden lg:block relative">
              <div className="relative z-10 bg-white p-4 rounded-3xl shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-700">
                <img 
                  src="/images/dr.PNG" 
                  alt="Dr. Mantsoukina" 
                  className="rounded-2xl w-full h-auto object-cover grayscale-0"
                />
                <div className="absolute -bottom-10 -left-10 bg-amber-400 p-8 rounded-3xl shadow-xl max-w-xs -rotate-3 group cursor-default">
                  <p className="text-slate-900 font-black text-xl italic leading-tight">
                    "Prévenir vaut mieux que guérir."
                  </p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-800">
                    Dr. MANTSOUKINA Alphonse
                    Médecin Inspecteur du Travail du Congo
                  </p>
                </div>
              </div>
              {/* Abstract decorative shapes */}
              <div className="absolute -top-10 -right-10 h-64 w-64 bg-teal-500 rounded-full blur-[120px] opacity-30"></div>
            </div>
          </div>
        </section>

        {/* Info Cards / Stats */}
        <section className="py-12 bg-white border-b border-slate-100">
          <div className="max-container px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 group p-6 rounded-2xl transition-colors hover:bg-slate-50">
              <div className="p-4 bg-teal-100 text-teal-700 rounded-2xl group-hover:bg-teal-600 group-hover:text-white transition-all">
                <Stethoscope size={32} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Expertise Médicale</h4>
                <p className="text-sm text-slate-500">Formateur agréé CRADAT/BIT</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group p-6 rounded-2xl transition-colors hover:bg-slate-50">
              <div className="p-4 bg-amber-100 text-amber-700 rounded-2xl group-hover:bg-amber-500 group-hover:text-white transition-all">
                <Award size={32} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Certifié International</h4>
                <p className="text-sm text-slate-500">Expert OMS en Santé Travail</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group p-6 rounded-2xl transition-colors hover:bg-slate-50">
              <div className="p-4 bg-sky-100 text-sky-700 rounded-2xl group-hover:bg-sky-600 group-hover:text-white transition-all">
                <Globe size={32} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Présence Nationale</h4>
                <p className="text-sm text-slate-500">Tchimbamba - Pointe-Noire, Congo</p>
              </div>
            </div>
          </div>
        </section>

        <MissionsSection />
        <PrinciplesGrid />
        <EquipmentSection />

        {/* Expertise Section */}
        <section id="expertise" className="py-24 bg-teal-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <ShieldCheck size={400} />
          </div>
          
          <div className="max-container px-4">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-black mb-8">Un encadrement d'exception</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <p className="text-xl text-teal-100 leading-relaxed font-medium italic">
                    "Faites-vous suivre, accompagner et conseiller par un expert de renommée internationale."
                  </p>
                  <div className="h-1 w-24 bg-amber-400"></div>
                  <h3 className="text-2xl font-bold">Dr. MANTSOUKINA Alphonse</h3>
                  <ul className="space-y-3 opacity-80 text-sm">
                    <li className="flex items-center gap-2"><ChevronRight size={16} className="text-amber-400" /> Médecin du travail & Inspecteur</li>
                    <li className="flex items-center gap-2"><ChevronRight size={16} className="text-amber-400" /> Expert OMS/BIT en Santé et Sécurité</li>
                    <li className="flex items-center gap-2"><ChevronRight size={16} className="text-amber-400" /> Certifié Université de Louvain</li>
                    <li className="flex items-center gap-2"><ChevronRight size={16} className="text-amber-400" /> Collaborateur Prof. Jean Francois Caillard</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20">
                  <h4 className="text-amber-400 font-bold mb-4 uppercase tracking-widest text-xs">A propos de l'ONG</h4>
                  <p className="text-sm leading-relaxed mb-6">
                    Partant du principe qu'il est moins coûteux et plus efficace de prévenir que de guérir, l'AJFCPSTPE est dotée de la personnalité civile et de l'autonomie financière pour agir en toute indépendance.
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="bg-teal-800/50 p-4 rounded-xl flex items-center justify-between">
                      <span className="font-bold">Services Interentreprises</span>
                      <ShieldCheck className="text-teal-400" />
                    </div>
                    <div className="bg-teal-800/50 p-4 rounded-xl flex items-center justify-between">
                      <span className="font-bold">Protection Environnement</span>
                      <Globe className="text-teal-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-20 bg-slate-50">
          <div className="max-container px-4">
            <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-12 lg:p-20 bg-amber-400 text-slate-900">
                <h2 className="text-4xl lg:text-5xl font-black mb-8">Prenons contact aujourd'hui</h2>
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="bg-white p-4 rounded-2xl">
                      <Phone size={28} className="text-teal-700" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest opacity-60">Appelez-nous</p>
                      <p className="text-2xl font-black">+242 06 952 35 81</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="bg-white p-4 rounded-2xl">
                      <Mail size={28} className="text-teal-700" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest opacity-60">Envoyez un email</p>
                      <p className="text-2xl font-black break-all">contact@ajfcpstpe.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="bg-white p-4 rounded-2xl">
                      <MapPin size={28} className="text-teal-700" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest opacity-60">Localisation</p>
                      <p className="text-2xl font-black">Tchimbamba - Pointe-Noire, Congo</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 p-12 lg:p-20">
                <h3 className="text-2xl font-bold mb-8">Demander une intervention</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-slate-500">Nom Complet</label>
                      <input type="text" className="w-full bg-slate-100 border-none rounded-xl p-4 focus:ring-2 focus:ring-teal-500 transition-all outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-slate-500">Entreprise</label>
                      <input type="text" className="w-full bg-slate-100 border-none rounded-xl p-4 focus:ring-2 focus:ring-teal-500 transition-all outline-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-slate-500">Service souhaité</label>
                    <select className="w-full bg-slate-100 border-none rounded-xl p-4 focus:ring-2 focus:ring-teal-500 transition-all outline-none">
                      <option>Audit de conformité</option>
                      <option>Formation SST</option>
                      <option>Expertise Médicale</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-slate-500">Message</label>
                    <textarea rows={4} className="w-full bg-slate-100 border-none rounded-xl p-4 focus:ring-2 focus:ring-teal-500 transition-all outline-none resize-none"></textarea>
                  </div>
                  <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-teal-600/20 transition-all active:scale-95">
                    Envoyer ma demande
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 py-16 text-slate-400">
        <div className="max-container px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-teal-600 text-white p-2 rounded-lg">
                  <ShieldCheck size={24} />
                </div>
                <span className="font-black text-2xl text-white tracking-tighter">AJFCPSTPE</span>
              </div>
              <p className="max-w-sm">
                Service interentreprises de santé au travail dédié à l'amélioration de la productivité par la protection humaine.
              </p>
              <div className="flex gap-4">
                {[1,2,3].map(i => (
                  <div key={i} className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors cursor-pointer">
                    <Globe size={20} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-widest text-sm">Navigation</h4>
              <ul className="space-y-4 text-sm">
                {navLinks.map(l => (
                  <li key={l.name}><button onClick={l.action} className="hover:text-teal-400 transition-colors">{l.name}</button></li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-widest text-sm">Expertise</h4>
              <ul className="space-y-4 text-sm">
                <li>Audit de Sécurité</li>
                <li>Formation CRADAT</li>
                <li>Suivi Médical</li>
                <li>Conseil Stratégique</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium">
            <p>© {new Date().getFullYear()} AJFCPSTPE - Association Jean François Caillard. Tous droits réservés.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Sticky Mobile Call Button */}
      <a 
        href="tel:+242069523581" 
        className="md:hidden fixed bottom-6 right-6 z-50 bg-teal-600 text-white p-4 rounded-full shadow-2xl animate-bounce"
      >
        <Phone size={24} />
      </a>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .max-container {
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </div>
  );
};

export default App;
