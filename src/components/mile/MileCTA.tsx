
import React from 'react';

const MileCTA: React.FC = () => {
  return (
    <section className="section-padding bg-elevate-darkBg relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-elevate-orange/5 blur-3xl rounded-full transform translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-elevate-blue/5 blur-3xl rounded-full transform -translate-x-1/2"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-4">Ready to Transform Learning?</h2>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            Contact us to explore how MILE can accelerate skill development and drive organizational success.
          </p>
          
          <button className="btn-primary">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default MileCTA;
