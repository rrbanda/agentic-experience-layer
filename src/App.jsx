import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import AIWorkspace from './pages/AIWorkspace';
import PMHub from './pages/PMHub';
import DeveloperHub from './pages/DeveloperHub';
import Orchestrations from './pages/Orchestrations';
import AgentCouncil from './pages/AgentCouncil';
import LiveActivity from './pages/LiveActivity';
import ValueOutcomes from './pages/ValueOutcomes';
import Governance from './pages/Governance';
import ConnectedSystems from './pages/ConnectedSystems';
import Settings from './pages/Settings';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [currentPersona, setCurrentPersona] = useState('Product Manager'); // Default persona

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard persona={currentPersona} />;
      case 'workspace':
        return <AIWorkspace persona={currentPersona} />;
      case 'pm-hub':
        return <PMHub persona={currentPersona} />;
      case 'dev-hub':
        return <DeveloperHub persona={currentPersona} />;
      case 'orchestrations':
        return <Orchestrations persona={currentPersona} />;
      case 'agents':
        return <AgentCouncil persona={currentPersona} />;
      case 'activity':
        return <LiveActivity />;
      case 'outcomes':
        return <ValueOutcomes />;
      case 'governance':
        return <Governance />;
      case 'systems':
        return <ConnectedSystems />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard persona={currentPersona} />;
    }
  };

  return (
    <Layout 
      currentView={currentView} 
      onViewChange={setCurrentView}
      currentPersona={currentPersona}
      setCurrentPersona={setCurrentPersona}
    >
      {renderView()}
    </Layout>
  );
}

export default App;
