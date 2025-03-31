
import React from 'react';
import FeatureCard from '../common/FeatureCard';
import { Rocket } from 'lucide-react';

// Custom icons for features
const VRHeadsetIcon = ({ className }: { className?: string }) => (
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
    <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z"/>
    <path d="M12 12v4"/>
    <path d="M10 16h4"/>
    <path d="M3 10h18"/>
  </svg>
);

const SpeechBubbleIcon = ({ className }: { className?: string }) => (
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
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const LeadershipFeatures: React.FC = () => {
  const features = [
    {
      icon: VRHeadsetIcon,
      title: 'Immersive Experiences',
      description: 'Engaging, hands-on leadership training that prepares leaders for real-world challenges and opportunities.'
    },
    {
      icon: Rocket,
      title: 'Agility & Innovation',
      description: 'Develop adaptive leadership skills to navigate change and drive innovation in your organization.'
    },
    {
      icon: SpeechBubbleIcon,
      title: 'Communication Mastery',
      description: 'Master storytelling and effective communication to inspire teams and drive organizational success.'
    }
  ];

  return (
    <section className="section-padding bg-elevate-darkBg2 relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Key Features</h2>
          <p className="text-body">
            Our leadership development programs are built on these core elements to deliver maximum impact for your organization.
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

export default LeadershipFeatures;
