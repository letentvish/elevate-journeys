
import React from 'react';
import { CheckCircle } from 'lucide-react';

const DatanixUseCases: React.FC = () => {
  const useCases = [
    'Optimizing supply chain decisions in a manufacturing company with real-time data insights.',
    'Enhancing customer analytics for a SaaS company to improve product offerings.',
    'Streamlining financial reporting for a multinational corporation to improve decision-making.',
    'Predicting maintenance needs in an industrial setting to prevent costly downtime.'
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

export default DatanixUseCases;
