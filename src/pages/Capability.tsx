
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CapabilityHero from '../components/capability/CapabilityHero';
import CapabilityOverview from '../components/capability/CapabilityOverview';
import CapabilityFeatures from '../components/capability/CapabilityFeatures';
import CapabilityBenefits from '../components/capability/CapabilityBenefits';
import CapabilityUseCases from '../components/capability/CapabilityUseCases';
import CapabilityCTA from '../components/capability/CapabilityCTA';

const Capability: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-elevate-darkBg">
      <Navbar />
      <main className="flex-grow">
        <CapabilityHero />
        <CapabilityOverview />
        <CapabilityFeatures />
        <CapabilityBenefits />
        <CapabilityUseCases />
        <CapabilityCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Capability;
