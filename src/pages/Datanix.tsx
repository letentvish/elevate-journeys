
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import DatanixHero from '../components/datanix/DatanixHero';
import DatanixOverview from '../components/datanix/DatanixOverview';
import DatanixFeatures from '../components/datanix/DatanixFeatures';
import DatanixBenefits from '../components/datanix/DatanixBenefits';
import DatanixUseCases from '../components/datanix/DatanixUseCases';
import DatanixCTA from '../components/datanix/DatanixCTA';

const Datanix: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-elevate-darkBg">
      <Navbar />
      <main className="flex-grow">
        <DatanixHero />
        <DatanixOverview />
        <DatanixFeatures />
        <DatanixBenefits />
        <DatanixUseCases />
        <DatanixCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Datanix;
