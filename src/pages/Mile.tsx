
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Mile: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-elevate-darkBg">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom section-padding">
          <h1 className="heading-xl mb-6 text-center">
            AI-Powered LMS: MILE: <span className="text-elevate-orange title-glow">Smarter People Growth</span>
          </h1>
          <p className="text-body text-center max-w-4xl mx-auto">
            This page is coming soon. MILE will accelerate skills with personalized learning journeys tailored for your organization.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Mile;
