
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import SolutionsSection from '../components/home/SolutionsSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-elevate-darkBg">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <SolutionsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
