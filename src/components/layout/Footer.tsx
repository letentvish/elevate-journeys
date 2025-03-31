
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-elevate-darkBg2 border-t border-white/5 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-elevate-orange mb-4">
              Elevate<span className="text-elevate-blue">Journeys</span>
            </h3>
            <p className="text-elevate-textLight mb-4">
              Empowering organizations through innovative learning solutions and strategic insights.
            </p>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/capability" className="text-elevate-textLight hover:text-elevate-orange transition-colors">
                  Capability & Talent
                </NavLink>
              </li>
              <li>
                <NavLink to="/leadership" className="text-elevate-textLight hover:text-elevate-orange transition-colors">
                  Leadership Development
                </NavLink>
              </li>
              <li>
                <NavLink to="/mile" className="text-elevate-textLight hover:text-elevate-orange transition-colors">
                  MILE (LMS)
                </NavLink>
              </li>
              <li>
                <NavLink to="/carve" className="text-elevate-textLight hover:text-elevate-orange transition-colors">
                  CARVE
                </NavLink>
              </li>
              <li>
                <NavLink to="/datanix" className="text-elevate-textLight hover:text-elevate-orange transition-colors">
                  DATANIX
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-elevate-textLight hover:text-elevate-orange transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-elevate-textLight hover:text-elevate-orange transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-elevate-textLight hover:text-elevate-orange transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-elevate-textLight hover:text-elevate-orange transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-elevate-textLight hover:text-elevate-orange transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-elevate-textLight hover:text-elevate-orange transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-elevate-textLight hover:text-elevate-orange transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-elevate-textLight text-sm">
            &copy; {currentYear} ElevateJourneys. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-elevate-textLight hover:text-elevate-orange transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-elevate-textLight hover:text-elevate-orange transition-colors">
              Twitter
            </a>
            <a href="#" className="text-elevate-textLight hover:text-elevate-orange transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
