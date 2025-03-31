
import React from 'react';
import { Link } from 'react-router-dom';
import FloatingParticles from '../common/FloatingParticles';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center py-24 overflow-hidden gradient-bg">
      <FloatingParticles color="#6060AE" opacityBase={0.2} count={40} />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-elevate-blue/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-elevate-orange/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="heading-xl mb-6">
            Transform Your Organization with <span className="text-elevate-orange title-glow">Exceptional Learning</span> Solutions
          </h1>
          
          <p className="text-xl text-elevate-textLight mb-8 leading-relaxed">
            Explore our comprehensive suite of learning and development solutions designed to elevate your organization's capabilities, leadership, and data-driven decision making.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/capability" className="btn-primary">
              Explore Solutions
            </Link>
            <button className="bg-transparent border border-elevate-blue text-elevate-blue hover:bg-elevate-blue/10 font-bold py-3 px-6 rounded-lg transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
