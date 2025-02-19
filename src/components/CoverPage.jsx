import React from 'react';
import { MapPin, TrendingUp, Users } from 'lucide-react';
import stylizedIndiaMap from '../assets/stylized-india-map.jpg';
import tuskerLogo from '../assets/tusker-logo.png';

const CoverPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 p-4 md:p-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url(${stylizedIndiaMap})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />
      
      <div className="max-w-4xl mx-auto text-white relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-12 pt-8 animate-fade-in">
          <img
            src={tuskerLogo}
            alt="Tusker Logo"
            className="h-16 md:h-20 transform hover:scale-105 transition-transform duration-200"
          />
        </div>
        
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-delayed">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">Unlock Bharat Markets</h1>
          <p className="text-xl md:text-3xl text-blue-100 text-shadow">Transform your brand's reach in Tier-2 and Tier-3 markets</p>
        </div>

        {/* Key Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-delayed-more">
          <ValueProp icon={<TrendingUp className="w-12 h-12 mb-4" />} title="Market Growth" description="Tap into India's fastest-growing consumer segment" />
          <ValueProp icon={<Users className="w-12 h-12 mb-4" />} title="100,000+ Retailers" description="Access our extensive network of verified retail partners" />
          <ValueProp icon={<MapPin className="w-12 h-12 mb-4" />} title="Regional Expertise" description="Benefit from our deep understanding of local markets" />
        </div>

        {/* Bottom Content */}
        <div className="mt-12 text-center animate-fade-in-delayed-most">
          <h3 className="text-2xl font-semibold mb-4 text-shadow">Unlocking India's Diverse Markets</h3>
          <p className="text-lg text-blue-100 text-shadow">
            From bustling urban centers to vibrant rural communities, Tusker connects brands to every corner of India.
          </p>
        </div>
      </div>
    </div>
  );
};

const ValueProp = ({ icon, title, description }) => (
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
    {icon}
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default CoverPage;
