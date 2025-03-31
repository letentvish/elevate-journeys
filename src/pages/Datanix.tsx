
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Datanix: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-elevate-darkBg">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom section-padding">
          <h1 className="heading-xl mb-6 text-center">
            Data Analysis: DATANIX: <span className="text-elevate-orange title-glow">Drive Data-Driven Decisions</span>
          </h1>
          <p className="text-body text-center max-w-4xl mx-auto">
            This page is coming soon. DATANIX will help you transform massive data into actionable insights with dynamic dashboards and workflows.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datanix;
