import React from 'react';
import { Store, Users, TrendingUp, ArrowRight } from 'lucide-react';
import MarketGrowthChart from './MarketGrowthChart.jsx';
import marketplaceImage from '../assets/colorful-marketplace.jpg';

const MarketPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-800 mb-8 text-center animate-fade-in">The Bharat Opportunity</h2>
        
        <div className="bg-white shadow-lg rounded-lg mb-12 overflow-hidden animate-fade-in-delayed">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-semibold mb-6">Why Bharat Markets Matter</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                    <ArrowRight className="w-5 h-5 mr-2 text-blue-500" />
                    Rising Consumer Power
                  </h4>
                  <p className="text-gray-700">Increasing disposable incomes and evolving consumer preferences create perfect conditions for brand growth</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                    <ArrowRight className="w-5 h-5 mr-2 text-blue-500" />
                    Digital Transformation
                  </h4>
                  <p className="text-gray-700">Growing internet penetration and digital adoption enabling new market opportunities</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src={marketplaceImage} 
                alt="Vibrant Indian marketplace" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in-delayed-more">
          <MarketFeature 
            icon={<Store className="text-blue-600 w-12 h-12 mb-4" />}
            title="Traditional Retail Dominance"
            description="90%+ market share held by Kirana stores in Bharat"
          />
          <MarketFeature 
            icon={<Users className="text-blue-600 w-12 h-12 mb-4" />}
            title="Consumer Behavior"
            description="Strong preference for physical retail experiences"
          />
          <MarketFeature 
            icon={<TrendingUp className="text-blue-600 w-12 h-12 mb-4" />}
            title="Growth Potential"
            description="Significant headroom for brand expansion"
          />
        </div>

        <div className="mb-12 animate-fade-in-delayed-most">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold text-blue-800 mb-4 text-xl">Market Growth Trends</h4>
            <MarketGrowthChart />
            <p className="text-sm text-gray-600 mt-4">Tier-2 and Tier-3 cities showing exponential growth compared to Tier-1 and All-India trends</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 rounded-lg animate-fade-in-delayed-most">
          <h3 className="text-2xl font-semibold mb-6 text-center">Market Size & Opportunity</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <MarketStat value="3Bn+" label="Rural Population" />
            <MarketStat value="90%+" label="Retail Market Share" />
            <MarketStat value="$95Bn" label="Market Opportunity" />
          </div>
        </div>
      </div>
    </div>
  );
};

const MarketFeature = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    {icon}
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const MarketStat = ({ value, label }) => (
  <div className="text-center">
    <div className="text-4xl font-bold mb-2">{value}</div>
    <div className="text-sm">{label}</div>
  </div>
);

export default MarketPage;
