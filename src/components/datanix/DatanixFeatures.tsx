
import React from 'react';
import FeatureCard from '../common/FeatureCard';
import { Cloud } from 'lucide-react';

// Custom icons for features
const ChartIcon = ({ className }: { className?: string }) => (
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
    <path d="M3 3v18h18"/>
    <path d="m19 9-5 5-4-4-3 3"/>
  </svg>
);

const GearIcon = ({ className }: { className?: string }) => (
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
    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/>
    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
    <path d="M12 2v2"/>
    <path d="M12 22v-2"/>
    <path d="m17 20.66-1-1.73"/>
    <path d="M11 10.27 7 3.34"/>
    <path d="m20.66 17-1.73-1"/>
    <path d="m3.34 7 1.73 1"/>
    <path d="M14 12h8"/>
    <path d="M2 12h2"/>
    <path d="m20.66 7-1.73 1"/>
    <path d="m3.34 17 1.73-1"/>
    <path d="m17 3.34-1 1.73"/>
    <path d="m7 20.66 1-1.73"/>
  </svg>
);

const DatanixFeatures: React.FC = () => {
  const features = [
    {
      icon: ChartIcon,
      title: 'Dynamic Dashboards',
      description: 'Visualize data with interactive dashboards that provide real-time insights into your business metrics.'
    },
    {
      icon: GearIcon,
      title: 'Automated Workflows',
      description: 'Streamline processes with automation that turns data analysis into actionable steps.'
    },
    {
      icon: Cloud,
      title: 'AWS-Powered',
      description: 'Leverage the power of AWS for scalability, security, and reliability in your data analysis.'
    }
  ];

  return (
    <section className="section-padding bg-elevate-darkBg2 relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Key Features</h2>
          <p className="text-body">
            Our data analysis solution is built on these core elements to deliver maximum impact for your organization.
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

export default DatanixFeatures;
