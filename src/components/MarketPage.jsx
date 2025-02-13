import React from 'react';
import { Store, Users, TrendingUp } from 'lucide-react';

const MarketPage = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6">The Bharat Opportunity</h2>
        
        <div className="bg-blue-50 p-8 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4">Why Bharat Markets Matter</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Rising Consumer Power</h4>
              <p className="text-gray-700">Increasing disposable incomes and evolving consumer preferences create perfect conditions for brand growth</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Digital Transformation</h4>
              <p className="text-gray-700">Growing internet penetration and digital adoption enabling new market opportunities</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <Store className="text-blue-600 w-12 h-12 mb-4" />
            <h3 className="font-semibold mb-2">Traditional Retail Dominance</h3>
            <p className="text-gray-600">90%+ market share held by Kirana stores in Bharat</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <Users className="text-blue-600 w-12 h-12 mb-4" />
            <h3 className="font-semibold mb-2">Consumer Behavior</h3>
            <p className="text-gray-600">Strong preference for physical retail experiences</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <TrendingUp className="text-blue-600 w-12 h-12 mb-4" />
            <h3 className="font-semibold mb-2">Growth Potential</h3>
            <p className="text-gray-600">Significant headroom for brand expansion</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <img 
              src="/placeholder-image-3.jpg" 
              alt="Market growth trends" 
              className="w-full rounded-lg shadow-lg mb-2"
            />
            <p className="text-sm text-gray-600 text-center">Market growth trends in Tier-2 and Tier-3 cities</p>
          </div>
          <div>
            <img 
              src="/placeholder-image-4.jpg" 
              alt="Retail penetration map" 
              className="w-full rounded-lg shadow-lg mb-2"
            />
            <p className="text-sm text-gray-600 text-center">Current retail network penetration</p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Market Size & Opportunity</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">3Bn+</div>
              <div className="text-sm">Rural Population</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">90%+</div>
              <div className="text-sm">Retail Market Share</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">$95Bn</div>
              <div className="text-sm">Market Opportunity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPage;
