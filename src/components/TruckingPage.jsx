import React from 'react';
import { Building, Store, Truck, Check } from 'lucide-react';

const TruckingPage = () => {
  return (
    <div className="bg-white p-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6">
          Pioneering Multi-Modal Fractional Trucking Network
        </h2>

        <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4">Network Architecture</h3>
          <p className="text-lg">
            Our innovative fractional trucking model combines multiple transportation modes 
            and smart routing to deliver unmatched efficiency in frontier market logistics.
          </p>
        </div>

        <div className="mb-8">
          <img 
            src="/placeholder-image-6.jpg" 
            alt="Network architecture visualization" 
            className="w-full rounded-lg shadow-lg mb-2"
          />
          <p className="text-sm text-gray-600 text-center">
            Multi-modal network architecture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex justify-center mb-4">
              <Building className="w-12 h-12 text-blue-600" />
            </div>
            <h4 className="font-semibold text-center text-blue-800 mb-3">
              Mother Depots
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="text-green-500 w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                <span>Strategic regional hubs</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                <span>Bulk storage optimization</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                <span>Cross-docking facilities</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex justify-center mb-4">
              <Store className="w-12 h-12 text-blue-600" />
            </div>
            <h4 className="font-semibold text-center text-blue-800 mb-3">
              Micro-Depots
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="text-green-500 w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                <span>Urban distribution points</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                <span>Quick response fulfillment</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                <span>Local inventory management</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex justify-center mb-4">
              <Truck className="w-12 h-12 text-blue-600" />
            </div>
            <h4 className="font-semibold text-center text-blue-800 mb-3">
              Rural Hubs
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="text-green-500 w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                <span>Deep-tier coverage</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                <span>Local market access</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                <span>Last-mile optimization</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl text-blue-800 font-semibold mb-4">
            Technology-Enabled Operations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3">Real-time Optimization</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="text-green-500 w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Dynamic route planning</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Load optimization</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Capacity utilization tracking</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Quality Assurance</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="text-green-500 w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Digital POD management</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 w-5 h-5 mr-2 flex-shrink-0" />
                  <span>SLA monitoring</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Real-time issue resolution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-800 text-white text-center p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2">98%</div>
            <div className="text-sm">On-time Delivery Rate</div>
          </div>
          <div className="bg-blue-800 text-white text-center p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2">30%</div>
            <div className="text-sm">Cost Reduction</div>
          </div>
          <div className="bg-blue-800 text-white text-center p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2">24h</div>
            <div className="text-sm">Average Response Time</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruckingPage;
