import React, { useState } from 'react';
import { 
  LayoutDashboard, Target, Zap, Bot, Activity, TrendingUp, 
  Shield, Link2, Settings, ChevronDown, User, Code, Layers 
} from 'lucide-react';

const Layout = ({ children, currentView, onViewChange, currentPersona, setCurrentPersona }) => {
  // Map persona display names to internal IDs
  const getPersonaId = () => {
    if (currentPersona.includes('Product Manager')) return 'pm';
    if (currentPersona.includes('Platform Engineer')) return 'platform';
    return 'dev';
  };

  const personas = [
    { id: 'pm', name: 'Sarah Parker', role: 'Product Manager', avatar: 'SP', color: 'from-purple-500 to-indigo-500' },
    { id: 'dev', name: 'Alex Chen', role: 'Senior Developer', avatar: 'AC', color: 'from-blue-500 to-cyan-500' },
    { id: 'platform', name: 'Jordan Kim', role: 'Platform Engineer', avatar: 'JK', color: 'from-emerald-500 to-teal-500' }
  ];

  const navigation = [
    { 
      section: 'Core Views',
      items: [
        { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { id: 'workspace', icon: Layers, label: 'AI Workspace', badge: null },
        { id: 'pm-hub', icon: Target, label: 'PM Hub', badge: null },
        { id: 'dev-hub', icon: Code, label: 'Developer Hub', badge: null },
        { id: 'orchestrations', icon: Zap, label: 'Orchestrations', badge: '3' },
        { id: 'agents', icon: Bot, label: 'Agent Council' }
      ]
    },
    {
      section: 'Intelligence',
      items: [
        { id: 'activity', icon: Activity, label: 'Live Activity' },
        { id: 'outcomes', icon: TrendingUp, label: 'Value & Outcomes' },
        { id: 'governance', icon: Shield, label: 'Governance' }
      ]
    },
    {
      section: 'Configuration',
      items: [
        { id: 'systems', icon: Link2, label: 'Connected Systems' },
        { id: 'settings', icon: Settings, label: 'Settings' }
      ]
    }
  ];

  const currentPersonaData = personas.find(p => p.id === getPersonaId());

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Top Navigation Bar */}
      <header className="gradient-hero text-white shadow-lg z-20">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 font-bold text-2xl shadow-lg`}>
                      ⚡
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-white">AEP Platform</h1>
                      <p className="text-xs text-white opacity-90">Enterprise AI Orchestration</p>
                    </div>
                  </div>
          </div>

          {/* Persona Switcher */}
          <div className="flex items-center gap-4">
            <div className="relative group">
              <button className="flex items-center gap-3 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all backdrop-blur-sm">
                <div className={`w-9 h-9 bg-gradient-to-br ${currentPersonaData.color} rounded-full flex items-center justify-center font-semibold text-sm`}>
                  {currentPersonaData.avatar}
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium">{currentPersonaData.name}</div>
                  <div className="text-xs opacity-80">{currentPersonaData.role}</div>
                </div>
                <ChevronDown className="w-4 h-4 opacity-60" />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                {personas.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setCurrentPersona(p.role)}
                    className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors ${
                      p.id === getPersonaId() ? 'bg-blue-50' : ''
                    } ${p.id === personas[0].id ? 'rounded-t-lg' : ''} ${p.id === personas[personas.length - 1].id ? 'rounded-b-lg' : ''}`}
                  >
                    <div className={`w-9 h-9 bg-gradient-to-br ${p.color} rounded-full flex items-center justify-center font-semibold text-sm text-white`}>
                      {p.avatar}
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-medium text-gray-900">{p.name}</div>
                      <div className="text-xs text-gray-600">{p.role}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-white border-r border-gray-200 overflow-y-auto">
          <nav className="p-4">
            {navigation.map((section) => (
              <div key={section.section} className="mb-6">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
                  {section.section}
                </div>
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentView === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => onViewChange(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-all ${
                        isActive
                          ? 'bg-blue-50 text-blue-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="flex-1 text-left text-sm">{item.label}</span>
                      {item.badge && (
                        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

