
import React from 'react';
import FeatureCard from '../common/FeatureCard';
import { Globe, Lightbulb } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

// Custom icon for Experiential Learning
const HandsOnIcon: LucideIcon = React.forwardRef((props, ref) => (
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
    {...props}
    ref={ref}
  >
    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
    <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
    <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
  </svg>
));

HandsOnIcon.displayName = 'HandsOnIcon';

const CapabilityFeatures: React.FC = () => {
  const features = [
    {
      icon: HandsOnIcon,
      title: 'Experiential Learning Programs',
      description: 'Hands-on learning experiences tailored to your industry, designed to provide practical skills that can be immediately applied.'
    },
    {
      icon: Globe,
      title: 'Global Leadership Expertise',
      description: 'Led by experts with extensive industry exposure, bringing diverse perspectives and proven methodologies to your organization.'
    },
    {
      icon: Lightbulb,
      title: 'Strategic Insights',
      description: 'Frameworks to align learning with organizational goals, ensuring every development initiative contributes to your strategic objectives.'
    }
  ];

  return (
    <section className="section-padding bg-elevate-darkBg2 relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Key Features</h2>
          <p className="text-body">
            Our capability development programs are built on these core elements to deliver maximum impact for your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilityFeatures;
