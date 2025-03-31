
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon: Icon, title, description, link }) => {
  return (
    <div className="neumorph-card overflow-hidden group h-full flex flex-col">
      <div className="bg-gradient-to-br from-elevate-darkCard to-elevate-darkCard/70 p-6 flex-grow">
        <div className="mb-4 bg-elevate-orange/20 w-16 h-16 rounded-lg flex items-center justify-center">
          <Icon className="text-elevate-orange h-10 w-10" />
        </div>
        <h3 className="heading-md text-white mb-3">{title}</h3>
        <p className="text-body">{description}</p>
      </div>
      <Link 
        to={link} 
        className="py-4 px-6 bg-elevate-darkCard/90 border-t border-white/5 text-white group-hover:text-elevate-orange flex items-center justify-between transition-colors"
      >
        <span className="font-medium">Learn More</span>
        <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default SolutionCard;
