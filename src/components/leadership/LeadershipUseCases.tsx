
import React from 'react';
import { CheckCircle } from 'lucide-react';

const LeadershipUseCases: React.FC = () => {
  const useCases = [
    'Developing executive leaders in a pharmaceutical company to drive strategic initiatives.',
    'Enhancing team-building for a consulting firm through outbound engagement programs.',
    'Building middle management capabilities in a retail organization to improve store performance.',
    'Creating a leadership pipeline in a tech startup to support rapid scaling and growth.'
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

export default LeadershipUseCases;
