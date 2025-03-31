
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import MileHero from '../components/mile/MileHero';
import MileOverview from '../components/mile/MileOverview';
import MileFeatures from '../components/mile/MileFeatures';
import MileBenefits from '../components/mile/MileBenefits';
import MileUseCases from '../components/mile/MileUseCases';
import MileCTA from '../components/mile/MileCTA';

const Mile: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-elevate-darkBg">
      <Navbar />
      <main className="flex-grow">
        <MileHero />
        <MileOverview />
        <MileFeatures />
        <MileBenefits />
        <MileUseCases />
        <MileCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Mile;
