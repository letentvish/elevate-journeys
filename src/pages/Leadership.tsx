
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Leadership: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-elevate-darkBg">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom section-padding">
          <h1 className="heading-xl mb-6 text-center">
            Leadership Development: <span className="text-elevate-orange title-glow">Nurture Your Leaders</span>
          </h1>
          <p className="text-body text-center max-w-4xl mx-auto">
            This page is coming soon. Leadership Development will empower leaders and teams to thrive in an ever-changing world with bespoke programs.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Leadership;
