
import React from 'react';
import SolutionCard from '../common/SolutionCard';
import { Rocket, Building, Cloud, Trophy, Route } from 'lucide-react';

const SolutionsSection: React.FC = () => {
  const solutions = [
    {
      icon: Building,
      title: 'Capability & Talent Development',
      description: 'Empower your teams with tailored programs that blend experiential learning with strategic insights to drive growth.',
      link: '/capability'
    },
    {
      icon: Rocket,
      title: 'Leadership Development',
      description: 'Nurture leaders and teams to thrive in an ever-changing world with bespoke leadership programs.',
      link: '/leadership'
    },
    {
      icon: Route,
      title: 'AI-Powered LMS: MILE',
      description: 'Accelerate skills with personalized learning journeys tailored for your organization.',
      link: '/mile'
    },
    {
      icon: Trophy,
      title: 'Assessment: CARVE',
      description: 'Unravel your team\'s potential with insights into styles and strategies for deeper connections.',
      link: '/carve'
    },
    {
      icon: Cloud,
      title: 'Data Analysis: DATANIX',
      description: 'Transform massive data into actionable insights with dynamic dashboards and workflows.',
      link: '/datanix'
    }
  ];

  return (
    <section className="section-padding bg-elevate-darkBg relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Our Solutions</h2>
          <p className="text-body">
            Discover how our comprehensive suite of learning and development solutions can transform your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              link={solution.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
