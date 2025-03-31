
import React from 'react';
import BenefitCard from '../common/BenefitCard';
import { Rocket } from 'lucide-react';

// Custom icons for benefits
const ClockIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const ExpandIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m15 3 6 6m0-6-6 6"/>
    <path d="M9 21 3 15m0 6 6-6"/>
  </svg>
);

const DatanixBenefits: React.FC = () => {
  const benefits = [
    {
      icon: ClockIcon,
      title: 'Faster Decisions',
      description: 'Make informed decisions quickly with clear insights derived from complex data.'
    },
    {
      icon: Rocket,
      title: 'Increased Efficiency',
      description: 'Automate workflows to save time and resources while improving accuracy.'
    },
    {
      icon: ExpandIcon,
      title: 'Scalable Insights',
      description: 'Handle large datasets with ease and precision, growing with your organization\'s needs.'
    }
  ];

  return (
    <section className="section-padding bg-elevate-darkBg relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Benefits</h2>
          <p className="text-body">
            Here's how our data analysis solution creates value for your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DatanixBenefits;
