
import React from 'react';
import { CheckCircle } from 'lucide-react';

const CarveUseCases: React.FC = () => {
  const useCases = [
    'Improving team dynamics in an IT company by understanding personality styles.',
    'Supporting leadership development in a retail firm with tailored growth strategies.',
    'Enhancing sales team performance through better understanding of communication styles.',
    'Resolving conflict in cross-functional teams by identifying complementary working styles.'
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

export default CarveUseCases;
