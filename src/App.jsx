import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CornerNavigation from './components/CornerNavigation';
import CoverPage from './components/CoverPage';
import MarketPage from './components/MarketPage';
import EcosystemPage from './components/EcosystemPage';
import TruckingPage from './components/TruckingPage';
import TechnologyPage from './components/TechnologyPage';
import SmartNetworkExpansionPage from './components/SmartNetworkExpansionPage';
import PartnershipPage from './components/PartnershipPage';
import SuccessStoriesPage from './components/SuccessStoriesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <main>
          <Routes>
            <Route path="/" element={<CoverPage />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/ecosystem" element={<EcosystemPage />} />
            <Route path="/trucking" element={<TruckingPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/network-expansion" element={<SmartNetworkExpansionPage />} />
            <Route path="/partnership" element={<PartnershipPage />} />
            <Route path="/success-stories" element={<SuccessStoriesPage />} />
          </Routes>
          <CornerNavigation />
        </main>
      </div>
    </Router>
  );
}

export default App;
