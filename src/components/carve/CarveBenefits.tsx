
import React from 'react';
import BenefitCard from '../common/BenefitCard';
import { Trophy } from 'lucide-react';

// Custom icons for benefits
const HandshakeIcon = ({ className }: { className?: string }) => (
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
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
  </svg>
);

const PersonIcon = ({ className }: { className?: string }) => (
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
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const CarveBenefits: React.FC = () => {
  const benefits = [
    {
      icon: HandshakeIcon,
      title: 'Improved Collaboration',
      description: 'Foster stronger team connections through deeper understanding of individual working styles.'
    },
    {
      icon: PersonIcon,
      title: 'Personalized Development',
      description: 'Tailor growth plans to individual needs, maximizing the potential of each team member.'
    },
    {
      icon: Trophy,
      title: 'Enhanced Success',
      description: 'Drive better outcomes through self-awareness and improved team dynamics.'
    }
  ];

  return (
    <section className="section-padding bg-elevate-darkBg relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Benefits</h2>
          <p className="text-body">
            Here's how our assessment tool creates value for your organization.
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

export default CarveBenefits;
