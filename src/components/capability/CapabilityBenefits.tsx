
import React from 'react';
import BenefitCard from '../common/BenefitCard';
import { Building } from 'lucide-react';

// Custom icons for benefits
const ChartUpIcon: React.FC<{ className?: string }> = ({ className }) => (
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
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </svg>
);

const PersonWithGearIcon: React.FC<{ className?: string }> = ({ className }) => (
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
    <path d="M12 2a5 5 0 0 0-5 5c0 2.76 2.24 5 5 5s5-2.24 5-5a5 5 0 0 0-5-5zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
    <path d="M19.812 16.073a1 1 0 0 0-.79-.079l-2.026.679a1.046 1.046 0 0 0-.326.155c-.76.286-1.21.976-1.21 1.772v2.4c0 .6.4 1 1 1h1.8c.736 0 1.356-.582 1.444-1.314l.473-3.195a1 1 0 0 0-.365-.947z"/>
    <path d="M9.758 18.865a5.995 5.995 0 0 0-3.094-1.15l-1.476-.21a1 1 0 0 0-1.088.75L3.9 19.505a1 1 0 0 0 .946 1.276l2.837.272a1 1 0 0 0 .832-.29c.739-.74 1.224-1.929 1.243-1.898z"/>
    <circle cx="14" cy="16" r="5" />
    <path d="m13.5 16.5 1 1" />
    <path d="M13.5 14.5 15 16" />
  </svg>
);

const CapabilityBenefits: React.FC = () => {
  const benefits = [
    {
      icon: ChartUpIcon,
      title: 'Enhanced Performance',
      description: 'Boost team productivity and effectiveness through targeted skill development and improved processes.'
    },
    {
      icon: PersonWithGearIcon,
      title: 'Skill Development',
      description: 'Build critical skills for career growth, enabling employees to take on new challenges and responsibilities.'
    },
    {
      icon: Building,
      title: 'Organizational Growth',
      description: 'Drive long-term success through capability building that aligns with your strategic objectives and market demands.'
    }
  ];

  return (
    <section className="section-padding bg-elevate-darkBg relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Benefits</h2>
          <p className="text-body">
            Here's how our capability development solutions create value for your organization.
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

export default CapabilityBenefits;
