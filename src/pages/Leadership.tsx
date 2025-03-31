
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import LeadershipHero from '../components/leadership/LeadershipHero';
import LeadershipOverview from '../components/leadership/LeadershipOverview';
import LeadershipFeatures from '../components/leadership/LeadershipFeatures';
import LeadershipBenefits from '../components/leadership/LeadershipBenefits';
import LeadershipUseCases from '../components/leadership/LeadershipUseCases';
import LeadershipCTA from '../components/leadership/LeadershipCTA';

const Leadership: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-elevate-darkBg">
      <Navbar />
      <main className="flex-grow">
        <LeadershipHero />
        <LeadershipOverview />
        <LeadershipFeatures />
        <LeadershipBenefits />
        <LeadershipUseCases />
        <LeadershipCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Leadership;
