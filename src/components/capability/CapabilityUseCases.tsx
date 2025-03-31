
import React from 'react';
import { CheckCircle } from 'lucide-react';

const CapabilityUseCases: React.FC = () => {
  const useCases = [
    'Upskilling IT teams in a SaaS company to improve product development efficiency.',
    'Training first-time managers in a manufacturing firm to enhance leadership skills.',
    'Developing cross-functional collaboration in a healthcare organization to improve patient outcomes.',
    'Building digital capabilities in a traditional retail business transitioning to e-commerce.'
  ];

  return (
    <section className="section-padding bg-elevate-darkBg2 relative">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-lg mb-8 text-center">Use Cases</h2>
          
          <div className="neumorph-card p-8">
            <ul className="space-y-4">
              {useCases.map((useCase, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-elevate-blue mr-3 h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span className="text-body">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilityUseCases;
