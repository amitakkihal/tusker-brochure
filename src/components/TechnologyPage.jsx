import React from 'react';
import { Truck, BarChart3, Users, Phone, Shield, Clock } from 'lucide-react';
import inventoryMap from '../assets/inventory-map.jpg';
import inventoryManagement from '../assets/inventory-management-dash.jpg';
import tuskerLinearLogo from '../assets/tusker-linear-logo.png';
import { Link } from 'react-router-dom';

const TechnologyPage = () => {
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
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Technology-Driven Distribution</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced platform combines real-time tracking, intelligent routing, and data analytics 
            to optimize your distribution in frontier markets.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
              <Truck className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold">Fleet Management</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Real-time vehicle tracking
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Route optimization
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Digital POD management
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold">Analytics Dashboard</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Performance metrics
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Delivery analytics
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Market insights
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
              <Phone className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold">Mobile Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Partner mobile apps
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Offline capabilities
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Real-time updates
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
                src={inventoryMap} 
                alt="Dashboard Interface" 
                className="w-full rounded-lg shadow-lg mb-2"
              />
              <p className="text-sm text-gray-600 text-center">Comprehensive distribution dashboard</p>
            </div>
            <div>
              <img 
                src={inventoryManagement} 
                alt="Analytics Interface" 
                className="w-full rounded-lg shadow-lg mb-2"
              />
              <p className="text-sm text-gray-600 text-center">Real-time analytics and reporting</p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-blue-900 text-white p-6 rounded-lg text-center">
            <Shield className="w-8 h-8 mx-auto mb-2" />
            <div className="text-3xl font-bold mb-1">99.9%</div>
            <div className="text-sm">Platform Uptime</div>
          </div>
          <div className="bg-blue-900 text-white p-6 rounded-lg text-center">
            <Users className="w-8 h-8 mx-auto mb-2" />
            <div className="text-3xl font-bold mb-1">100K+</div>
            <div className="text-sm">Active Retailers</div>
          </div>
          <div className="bg-blue-900 text-white p-6 rounded-lg text-center">
            <Clock className="w-8 h-8 mx-auto mb-2" />
            <div className="text-3xl font-bold mb-1">24/7</div>
            <div className="text-sm">Support</div>
          </div>
          <div className="bg-blue-900 text-white p-6 rounded-lg text-center">
            <BarChart3 className="w-8 h-8 mx-auto mb-2" />
            <div className="text-3xl font-bold mb-1">98%</div>
            <div className="text-sm">On-time Delivery</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;
