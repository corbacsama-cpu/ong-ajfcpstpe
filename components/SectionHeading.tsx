
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, light = false }) => {
  return (
    <div className="mb-12">
      <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${light ? 'text-teal-50' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 mt-6 ${light ? 'bg-amber-400' : 'bg-teal-600'}`}></div>
    </div>
  );
};

export default SectionHeading;
