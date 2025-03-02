import React from 'react';
import { Building, Store, Boxes, ArrowRight } from 'lucide-react';
import tuskerLinearLogo from '../assets/tusker-linear-logo.png'; // Import the linear logo PNG
import ecosystemFlowimage from '../assets/ecosystem-flow.jpg';
import { Link } from 'react-router-dom';

const EcosystemPage = () => {
  return (
    <div className="bg-white p-8 relative">
      <div className="max-w-5xl mx-auto relative pt-20">
        <div className="absolute top-0 left-0 -ml-8 -mt-8 z-10">
          <Link to="/">
            <img
              src={tuskerLinearLogo}
              alt="Tusker Logo"
              className="w-24 md:w-32 transform hover:scale-105 transition-transform duration-200"
            />
          </Link>
        </div>

        <h2 className="text-2xl font-semibold text-blue-800 mb-6 text-center">The Tusker Ecosystem</h2>
        
        <div className="bg-blue-50 p-8 rounded-lg mb-12">
          <h3 className="text-xl font-semibold mb-6">How It Works</h3>
          
          <div className="flex justify-between items-center mb-12">
            <div className="text-center flex-1">
              <div className="bg-white p-4 rounded-lg shadow-md mb-2">
                <Building className="w-12 h-12 text-blue-600 mx-auto" />
                <div className="mt-2 font-semibold">Brand</div>
              </div>
            </div>
            <ArrowRight className="w-8 h-8 text-blue-600 flex-shrink-0 mx-4" />
            <div className="text-center flex-1">
              <div className="bg-white p-4 rounded-lg shadow-md mb-2">
                <Boxes className="w-12 h-12 text-blue-600 mx-auto" />
                <div className="mt-2 font-semibold">Tusker Hub</div>
              </div>
            </div>
            <ArrowRight className="w-8 h-8 text-blue-600 flex-shrink-0 mx-4" />
            <div className="text-center flex-1">
              <div className="bg-white p-4 rounded-lg shadow-md mb-2">
                <Store className="w-12 h-12 text-blue-600 mx-auto" />
                <div className="mt-2 font-semibold">Retailers</div>
              </div>
            </div>
          </div>

          <img 
            src={ecosystemFlowimage} 
            alt="Ecosystem flow visualization" 
            className="w-full rounded-lg shadow-lg mb-8"
          />

          <div className="space-y-6">
            {[
              {
                number: "1",
                title: "Network Activation",
                description: "Quick access to 100,000+ verified retailers in your target regions"
              },
              {
                number: "2",
                title: "Smart Distribution",
                description: "Tech-enabled routing and delivery optimization"
              },
              {
                number: "3",
                title: "Real-time Monitoring",
                description: "Track inventory, deliveries, and performance analytics"
              },
              {
                number: "4",
                title: "Market Insights",
                description: "Gain valuable data on consumer behavior and market trends"
              }
            ].map((step) => (
              <div key={step.number} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-blue-800 text-white p-6 rounded-lg text-center">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-sm">Real-time Visibility</div>
          </div>
          <div className="bg-blue-800 text-white p-6 rounded-lg text-center">
            <div className="text-3xl font-bold mb-2">98%</div>
            <div className="text-sm">On-time Performance</div>
          </div>
          <div className="bg-blue-800 text-white p-6 rounded-lg text-center">
            <div className="text-3xl font-bold mb-2">100K+</div>
            <div className="text-sm">Connected Retailers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemPage;
