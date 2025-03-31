
import React from 'react';
import FloatingParticles from '../common/FloatingParticles';

const LeadershipHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden gradient-bg">
      <FloatingParticles color="#2196F3" opacityBase={0.5} count={30} />
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-elevate-blue/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-elevate-orange/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-xl mb-6">
            Leadership Development: <span className="text-elevate-orange title-glow">Nurture Your Leaders</span>
          </h1>
          
          <p className="text-xl text-elevate-textLight mb-8 leading-relaxed max-w-3xl mx-auto">
            Empower leaders and teams to thrive in an ever-changing world with bespoke leadership programs.
          </p>
          
          <button className="btn-primary">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeadershipHero;
