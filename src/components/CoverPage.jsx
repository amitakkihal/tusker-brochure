import React from 'react';
import { MapPin, TrendingUp, Users } from 'lucide-react';

const CoverPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 p-8">
      <div className="max-w-4xl mx-auto text-white">
        {/* Logo */}
        <div className="flex justify-center mb-12 pt-8">
          <img
            src="/api/placeholder/180/60"
            alt="Tusker Logo"
            className="transform hover:scale-105 transition-transform duration-200"
          />
        </div>
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6">Unlock Bharat Markets</h1>
          <p className="text-2xl text-blue-100">Transform your brand's reach in Tier-2 and Tier-3 markets</p>
        </div>

        {/* Key Value Props */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
            <TrendingUp className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Market Growth</h3>
            <p>Tap into India's fastest-growing consumer segment</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
            <Users className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">100,000+ Retailers</h3>
            <p>Access our extensive network of verified retail partners</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
            <MapPin className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Regional Expertise</h3>
            <p>Benefit from our deep understanding of local markets</p>
          </div>
        </div>

        {/* Visual Elements */}
        <div className="mt-12 grid grid-cols-2 gap-8">
          <div>
            <img 
              src="/api/placeholder/500/300" 
              alt="Market coverage map" 
              className="w-full rounded-lg shadow-lg mb-2 opacity-90"
            />
            <p className="text-sm text-blue-100 text-center">Our growing market presence</p>
          </div>
          <div>
            <img 
              src="/api/placeholder/500/300" 
              alt="Retail network" 
              className="w-full rounded-lg shadow-lg mb-2 opacity-90"
            />
            <p className="text-sm text-blue-100 text-center">Extensive retail partner network</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
