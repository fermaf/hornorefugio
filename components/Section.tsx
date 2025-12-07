
import React from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children, className = 'bg-white' }) => {
  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg leading-6 text-stone-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        <div className="mt-12">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
