import React from 'react';
import { Check, Building, Phone } from 'lucide-react';
import operationsOverview from '../assets/operations-overview.jpg';
import tuskerLinearLogo from '../assets/tusker-linear-logo.png';
import { Link } from 'react-router-dom';

const PartnershipPage = () => {
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

        {/* Section Title */}
        <h1 className="text-4xl font-bold text-blue-800 text-center mb-8">
          End-to-End Digital Partnership
        </h1>

        {/* Hero Banner */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4">Your Complete Growth Partner</h3>
          <p className="text-lg">
            Partner with Tusker to transform your distribution capabilities and accelerate growth in frontier markets 
            through our comprehensive digital solutions.
          </p>
        </div>

        {/* Partnership Journey */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            {
              step: 1,
              title: "Digital Onboarding",
              desc: "Seamless system integration and setup"
            },
            {
              step: 2,
              title: "Network Activation",
              desc: "AI-powered market selection and retailer onboarding"
            },
            {
              step: 3,
              title: "Smart Operations",
              desc: "Automated optimization and management"
            },
            {
              step: 4,
              title: "Growth Acceleration",
              desc: "Data-driven expansion and optimization"
            }
          ].map((item) => (
            <div key={item.step} className="text-center p-4">
              <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                {item.step}
              </div>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Platform & Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <img 
            src={operationsOverview} 
            alt="Partner dashboard" 
            className="w-full rounded-lg shadow-lg"
          />
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-4">Partnership Benefits</h4>
            <ul className="space-y-3">
              {[
                {
                  title: "Dedicated Support Team",
                  desc: "24/7 partner success management"
                },
                {
                  title: "Custom Integration",
                  desc: "Tailored to your business needs"
                },
                {
                  title: "Growth Consulting",
                  desc: "Strategic market expansion advice"
                }
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="text-green-500 w-5 h-5 mt-1 mr-2" />
                  <div>
                    <span className="font-semibold">{benefit.title}</span>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-blue-800 text-white p-8 rounded-lg mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Distribution?</h2>
            <p className="text-xl mb-6">Join leading brands leveraging Tusker's technology to win in Bharat markets</p>
            <button className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
              Schedule a Demo
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <h4 className="font-semibold mb-2">Visit Us</h4>
              <p className="text-sm text-blue-100">
                Tusker Transport, #5, 2nd Floor,
                Foundation for Sandbox Startup Initiatives,
                Gokul Road, Hubli- 580030
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Contact Us</h4>
              <p className="text-sm text-blue-100">
                Phone: 8088886676
                <br />
                www.tuskertransport.in
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Connect With Us</h4>
              <p className="text-sm text-blue-100">
                Book a consultation session
                <br />
                Request a custom demo
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "100%", label: "Digital Integration" },
            { value: "24/7", label: "Partner Support" },
            { value: "60%", label: "Faster Market Entry" },
            { value: "30%", label: "Cost Efficiency" }
          ].map((metric, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-800 mb-2">{metric.value}</div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnershipPage;
