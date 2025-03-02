import React from 'react';
import { Check, MapPin, BarChart3, TrendingUp } from 'lucide-react';
import taskCompletion from '../assets/task-completion.jpg';
import depotProfile from '../assets/depot-profile.jpg';
import tuskerLinearLogo from '../assets/tusker-linear-logo.png';
import { Link } from 'react-router-dom';

const SmartNetworkExpansionPage = () => {
  return (
    <div className="bg-white p-8 relative">
      <div className="max-w-6xl mx-auto relative pt-20">
        <div className="absolute top-0 left-0 -ml-8 -mt-8 z-10">
          <Link to="/">
            <img
              src={tuskerLinearLogo}
              alt="Tusker Logo"
              className="w-24 md:w-32 transform hover:scale-105 transition-transform duration-200"
            />
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Smart Network Expansion</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Data-driven partner selection and market expansion for efficient growth in frontier markets.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Location Analytics</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-700">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                Population density mapping
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                Consumer affluence analysis
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                Competition heat mapping
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Retailer Scoring</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-700">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                Financial health assessment
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                Performance track record
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                Infrastructure readiness
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Market Potential</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-700">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                Category growth trends
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                Demand forecasting
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                ROI prediction models
              </li>
            </ul>
          </div>
        </div>

        {/* Platform Screenshots */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">Platform Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img 
                src={taskCompletion} 
                alt="Task Management Interface" 
                className="w-full rounded-lg shadow-lg mb-2"
              />
              <p className="text-sm text-gray-600 text-center">AI-powered market analysis dashboard</p>
            </div>
            <div>
              <img 
                src={depotProfile} 
                alt="Partner Selection Interface" 
                className="w-full rounded-lg shadow-lg mb-2"
              />
              <p className="text-sm text-gray-600 text-center">Smart partner selection interface</p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-blue-900 text-white text-center p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2">60%</div>
            <div className="text-sm">Faster Market Entry</div>
          </div>
          <div className="bg-blue-900 text-white text-center p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2">30%</div>
            <div className="text-sm">Lower Setup Costs</div>
          </div>
          <div className="bg-blue-900 text-white text-center p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2">95%</div>
            <div className="text-sm">Partner Retention</div>
          </div>
          <div className="bg-blue-900 text-white text-center p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2">2X</div>
            <div className="text-sm">Market Coverage</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartNetworkExpansionPage;
