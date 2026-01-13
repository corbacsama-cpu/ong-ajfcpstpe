
import React from 'react';
import { 
  ShieldAlert, 
  Search, 
  Flame, 
  UserRound, 
  RefreshCcw, 
  Zap, 
  Calendar, 
  Users, 
  Info
} from 'lucide-react';
import { Principle, Mission, Equipment } from './types';

export const PRINCIPLES: Principle[] = [
  { id: 1, title: "Éviter le risque", description: "Identifier et supprimer tout ce qui peut causer un dommage.", icon: "ShieldAlert", color: "bg-pink-600" },
  { id: 2, title: "Évaluer le risque", description: "Analyser les risques qui ne peuvent être évités.", icon: "Search", color: "bg-teal-600" },
  { id: 3, title: "Combattre le risque à la source", description: "Agir directement sur l'origine du danger.", icon: "Flame", color: "bg-red-600" },
  { id: 4, title: "Adapter le travail à l'homme", description: "Concevoir les postes de travail de manière ergonomique.", icon: "UserRound", color: "bg-emerald-600" },
  { id: 5, title: "Tenir compte de l'évolution technique", description: "Utiliser les nouvelles technologies plus sûres.", icon: "Zap", color: "bg-amber-600" },
  { id: 6, title: "Remplacer ce qui est dangereux", description: "Substituer les éléments dangereux par des moins nocifs.", icon: "RefreshCcw", color: "bg-indigo-600" },
  { id: 7, title: "Planifier la prévention", description: "Intégrer technique, organisation et conditions sociales.", icon: "Calendar", color: "bg-sky-600" },
  { id: 8, title: "Mesures de protection collective", description: "Donner la priorité aux protections globales.", icon: "Users", color: "bg-orange-600" },
  { id: 9, title: "Instructions appropriées", description: "Former et informer les salariés sur les procédures.", icon: "Info", color: "bg-lime-600" },
];

export const MISSIONS: Mission[] = [
  { text: "Mieux protéger les travailleurs" },
  { text: "Surveiller la santé des travailleurs (visites d'embauche, reprises, périodiques etc)" },
  { text: "Visiter les lieux de travail en vue d'identifier les risques professionnels" },
  { text: "Définir la politique de prévention de l'entreprise" },
  { text: "Organiser des séminaires de sensibilisation et de formation" },
  { text: "Diagnostiquer les maladies professionnelles" },
  { text: "Mettre en place une politique de prévention" },
  { text: "Expertise en santé et sécurité au travail" },
  { text: "Animation des comités d'hygiène et sécurité (CHST)" },
  { text: "Former les travailleurs et les employeurs" },
];

export const EQUIPMENT: Equipment[] = [
  { name: "Audiomètre", description: "Évaluation de la capacité auditive.", imageUrl: "./images/audiometre.webp" },
  { name: "Visiotest", description: "Contrôle de l'acuité visuelle.", imageUrl: "./images/visiotest.jpg" },
  { name: "Spiromètre", description: "Mesure des capacités respiratoires.", imageUrl: "./images/spirometre.png" },
  { name: "Electrocardiogramme", description: "Détection précoce de pathologies cardiaques.", imageUrl: "./images/ecg.jpeg" },
  { name: "Luxmètre", description: "Mesure de l'intensité lumineuse au poste.", imageUrl: "./images/luxmetre.jpg" },
];

export const getIcon = (name: string) => {
  switch (name) {
    case "ShieldAlert": return <ShieldAlert size={32} />;
    case "Search": return <Search size={32} />;
    case "Flame": return <Flame size={32} />;
    case "UserRound": return <UserRound size={32} />;
    case "Zap": return <Zap size={32} />;
    case "RefreshCcw": return <RefreshCcw size={32} />;
    case "Calendar": return <Calendar size={32} />;
    case "Users": return <Users size={32} />;
    case "Info": return <Info size={32} />;
    default: return null;
  }
};
