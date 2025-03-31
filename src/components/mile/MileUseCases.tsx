
import React from 'react';
import { CheckCircle } from 'lucide-react';

const MileUseCases: React.FC = () => {
  const useCases = [
    'Upskilling engineers in an automotive company with personalized tech courses.',
    'Supporting career growth for employees in a BFSI firm through adaptive learning paths.',
    'Onboarding new employees in a global corporation with customized training programs.',
    'Developing leadership skills across a retail organization with targeted modules.'
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

export default MileUseCases;
