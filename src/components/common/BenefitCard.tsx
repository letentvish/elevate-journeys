
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="neumorph-card p-6 hover:bg-elevate-blue/10 transition-all duration-300 h-full flex flex-col">
      <div className="mb-4 bg-elevate-orange/20 w-14 h-14 rounded-lg flex items-center justify-center">
        <Icon className="text-elevate-orange h-8 w-8" />
      </div>
      <h3 className="heading-md text-white mb-2">{title}</h3>
      <p className="text-body flex-grow">{description}</p>
    </div>
  );
};

export default BenefitCard;
