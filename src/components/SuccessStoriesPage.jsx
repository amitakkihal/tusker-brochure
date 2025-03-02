import React from 'react';
import { Check } from 'lucide-react';
import tuskerLinearLogo from '../assets/tusker-linear-logo.png';
import { Link } from 'react-router-dom';

const SuccessStoriesPage = () => {
  return (
    <div className="bg-white p-8 relative">
      <div className="max-w-4xl mx-auto relative pt-20">
        <div className="absolute top-0 left-0 -ml-8 -mt-8 z-10">
          <Link to="/">
            <img
              src={tuskerLinearLogo}
              alt="Tusker Logo"
              className="w-24 md:w-32 transform hover:scale-105 transition-transform duration-200"
            />
          </Link>
        </div>

        <h2 className="text-3xl font-bold text-blue-800 mb-8">Impact & Success Stories</h2>

        <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4">Proven Track Record</h3>
          <p className="text-lg">
            From healthcare to FMCG, we've helped organizations transform their supply chains and achieve 
            remarkable results in frontier markets.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-4">Healthcare Transformation</h4>
            <img 
              src="/api/placeholder/500/200" 
              alt="Healthcare case study" 
              className="w-full rounded-lg mb-4"
            />
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="text-green-500 w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-semibold">450M+ vaccine doses orchestrated annually</span>
                  <p className="text-sm text-gray-600">Maintaining &gt;99% service levels across India</p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-semibold">$74M annual savings</span>
                  <p className="text-sm text-gray-600">Through optimized supply chain operations</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-4">FMCG Market Expansion</h4>
            <img 
              src="/api/placeholder/500/200" 
              alt="FMCG case study" 
              className="w-full rounded-lg mb-4"
            />
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="text-green-500 w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-semibold">39% revenue growth in 14 months</span>
                  <p className="text-sm text-gray-600">Through smart shelf optimization and market penetration</p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-semibold">5000+ new retailers onboarded</span>
                  <p className="text-sm text-gray-600">With data-driven partner selection</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-6">Customer Testimonials</h3>
          <div className="grid grid-cols-3 gap-8">
            <div className="border-l-4 border-blue-800 pl-4">
              <img 
                src="/api/placeholder/80/80" 
                alt="Customer 1" 
                className="w-16 h-16 rounded-full mb-4"
              />
              <p className="italic mb-4">"Price competitive and best tech-enabled service provider in the region."</p>
              <p className="font-semibold">Girish Sunkad</p>
              <p className="text-sm text-gray-600">Girish Enterprises (FMCG)</p>
            </div>
            <div className="border-l-4 border-blue-800 pl-4">
              <img 
                src="/api/placeholder/80/80" 
                alt="Customer 2" 
                className="w-16 h-16 rounded-full mb-4"
              />
              <p className="italic mb-4">"One of the best and reliable service providers regionally."</p>
              <p className="font-semibold">Venkatesh D</p>
              <p className="text-sm text-gray-600">Intas Pharma</p>
            </div>
            <div className="border-l-4 border-blue-800 pl-4">
              <img 
                src="/api/placeholder/80/80" 
                alt="Customer 3" 
                className="w-16 h-16 rounded-full mb-4"
              />
              <p className="italic mb-4">"On time service in Rural locations."</p>
              <p className="font-semibold">Ravi</p>
              <p className="text-sm text-gray-600">Guru Krupa Agency</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-800 mb-6">Environmental Impact</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-800 mb-2">864</div>
              <div className="text-sm text-gray-600">CO2e tons/year saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-800 mb-2">75M</div>
              <div className="text-sm text-gray-600">Fewer vaccine doses needed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-800 mb-2">30%</div>
              <div className="text-sm text-gray-600">Lower emissions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesPage;
