
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CarveHero from '../components/carve/CarveHero';
import CarveOverview from '../components/carve/CarveOverview';
import CarveFeatures from '../components/carve/CarveFeatures';
import CarveBenefits from '../components/carve/CarveBenefits';
import CarveUseCases from '../components/carve/CarveUseCases';
import CarveCTA from '../components/carve/CarveCTA';

const Carve: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-elevate-darkBg">
      <Navbar />
      <main className="flex-grow">
        <CarveHero />
        <CarveOverview />
        <CarveFeatures />
        <CarveBenefits />
        <CarveUseCases />
        <CarveCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Carve;
