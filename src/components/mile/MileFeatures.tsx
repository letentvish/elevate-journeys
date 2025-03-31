
import React from 'react';
import FeatureCard from '../common/FeatureCard';
import { Cloud, Route } from 'lucide-react';

// Custom icons for features
const AISymbolIcon = ({ className }: { className?: string }) => (
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
    <path d="M5 18h14M5 14h14M5 10h14M5 6h14"/>
    <path d="M10 6v12"/>
    <path d="M14 6v12"/>
  </svg>
);

const MileFeatures: React.FC = () => {
  const features = [
    {
      icon: Route,
      title: 'Personalized Learning',
      description: 'Tailored learning paths for each employee based on their role, skills, and career aspirations.'
    },
    {
      icon: AISymbolIcon,
      title: 'AI-Driven Insights',
      description: 'Track progress and predict learning needs with advanced analytics powered by artificial intelligence.'
    },
    {
      icon: Cloud,
      title: 'Scalable Platform',
      description: 'Easily integrates with your existing systems and scales as your organization grows.'
    }
  ];

  return (
    <section className="section-padding bg-elevate-darkBg2 relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Key Features</h2>
          <p className="text-body">
            Our AI-powered learning platform is built on these core elements to deliver maximum impact for your organization.
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

export default MileFeatures;
