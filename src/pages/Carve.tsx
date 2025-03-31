
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Carve: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-elevate-darkBg">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom section-padding">
          <h1 className="heading-xl mb-6 text-center">
            Assessment: CARVE: <span className="text-elevate-orange title-glow">Unravel Your Team's Potential</span>
          </h1>
          <p className="text-body text-center max-w-4xl mx-auto">
            This page is coming soon. CARVE will help you discover insights into your team's styles and strategies for deeper connections and success.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Carve;
