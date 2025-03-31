
import React from 'react';
import BenefitCard from '../common/BenefitCard';
import { Building } from 'lucide-react';

// Custom icons for benefits
const CrownIcon = ({ className }: { className?: string }) => (
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
    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/>
  </svg>
);

const GroupIcon = ({ className }: { className?: string }) => (
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
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const LightbulbIcon = ({ className }: { className?: string }) => (
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
    <path d="M14.5 4a8.5 8.5 0 1 0 3.6 16.2"/>
    <path d="M5 19.5C5 18.1 8.5 17 10 15.5c1.5 1.5 5 2.6 5 4"/>
    <path d="M9.5 12a2.5 2.5 0 0 1 5 0c0 2.5-2.5 2.5-2.5 5.5"/>
    <path d="M15 20a1 1 0 1 0 2 0 1 1 0 1 0-2 0z"/>
  </svg>
);

const LeadershipBenefits: React.FC = () => {
  const benefits = [
    {
      icon: CrownIcon,
      title: 'Stronger Leadership',
      description: 'Build confident, capable leaders who can drive your organization forward through challenges and opportunities.'
    },
    {
      icon: GroupIcon,
      title: 'Team Cohesion',
      description: 'Foster collaboration and trust within teams, creating an environment where innovation thrives.'
    },
    {
      icon: LightbulbIcon,
      title: 'Innovation Drive',
      description: 'Encourage innovative thinking and problem-solving approaches that lead to competitive advantage.'
    }
  ];

  return (
    <section className="section-padding bg-elevate-darkBg relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Benefits</h2>
          <p className="text-body">
            Here's how our leadership development solutions create value for your organization.
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

export default LeadershipBenefits;
