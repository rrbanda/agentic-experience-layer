import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, Users, Bot, Bell, Shield, 
  Zap, Code, Target, Save, Plus, Edit, Trash2,
  CheckCircle, AlertCircle
} from 'lucide-react';

const Settings = () => {
  const [selectedTab, setSelectedTab] = useState('team');
  const [showSaveNotification, setShowSaveNotification] = useState(false);

  // Team Configuration
  const teamConfig = {
    organization: 'ACME Corporation',
    defaultPersona: 'Engineer',
    timezone: 'America/New_York',
    workingHours: '9:00 AM - 6:00 PM',
    sprintLength: '2 weeks',
    velocityTracking: true
  };

  // Team Members
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Parker',
      email: 'sarah.parker@acme.com',
      persona: 'Product Manager',
      role: 'PM Lead',
      permissions: ['Engineering Council', 'Cold-Start Tickets', 'Value Tracking'],
      status: 'active'
    },
    {
      id: 2,
      name: 'Alex Chen',
      email: 'alex.chen@acme.com',
      persona: 'Senior Developer',
      role: 'Tech Lead',
      permissions: ['Engineering Council', 'Code Analysis', 'Custom Agents'],
      status: 'active'
    },
    {
      id: 3,
      name: 'Jordan Kim',
      email: 'jordan.kim@acme.com',
      persona: 'Platform Engineer',
      role: 'Platform Lead',
      permissions: ['All Capabilities', 'Admin', 'Governance'],
      status: 'active'
    },
    {
      id: 4,
      name: 'Maria Garcia',
      email: 'maria.garcia@acme.com',
      persona: 'Engineer',
      role: 'Developer',
      permissions: ['Engineering Council', 'Code Analysis'],
      status: 'active'
    }
  ];

  // Custom Agents
  const customAgents = [
    {
      id: 1,
      name: 'Kubernetes RBAC Specialist',
      type: 'Security & Compliance',
      description: 'Validates Kubernetes RBAC policies against team standards',
      createdBy: 'Jordan Kim',
      createdAt: '2 weeks ago',
      stats: {
        uses: 47,
        accuracy: '98%',
        avgTime: '3.2 min'
      },
      training: {
        source: '247 RBAC policies and audit logs',
        lastUpdated: '3 days ago'
      },
      status: 'active'
    },
    {
      id: 2,
      name: 'API Security Validator',
      type: 'Security Review',
      description: 'Scans APIs for security vulnerabilities and best practices',
      createdBy: 'Alex Chen',
      createdAt: '1 week ago',
      stats: {
        uses: 23,
        accuracy: '96%',
        avgTime: '5.8 min'
      },
      training: {
        source: '347 API security patterns and vulnerabilities',
        lastUpdated: '1 day ago'
      },
      status: 'active'
    },
    {
      id: 3,
      name: 'Cost Optimization Agent',
      type: 'FinOps',
      description: 'Analyzes infrastructure costs and suggests optimizations',
      createdBy: 'Jordan Kim',
      createdAt: '3 weeks ago',
      stats: {
        uses: 89,
        accuracy: '94%',
        avgTime: '12.4 min'
      },
      training: {
        source: 'AWS cost data, reservation patterns, usage trends',
        lastUpdated: '1 week ago'
      },
      status: 'active'
    },
    {
      id: 4,
      name: 'Release Readiness Checker',
      type: 'Release Management',
      description: 'Validates release checklists and deployment readiness',
      createdBy: 'Sarah Parker',
      createdAt: '1 month ago',
      stats: {
        uses: 134,
        accuracy: '99%',
        avgTime: '4.7 min'
      },
      training: {
        source: '67 production releases, rollback scenarios',
        lastUpdated: '2 weeks ago'
      },
      status: 'active'
    }
  ];

  // Notification Preferences
  const notificationPrefs = [
    { id: 1, label: 'Engineering Council completions', enabled: true, channel: 'Email + Slack' },
    { id: 2, label: 'Cold-start tickets generated', enabled: true, channel: 'Slack only' },
    { id: 3, label: 'Approval requests', enabled: true, channel: 'Email + Slack' },
    { id: 4, label: 'Policy violations', enabled: true, channel: 'Email + Slack' },
    { id: 5, label: 'Custom agent completions', enabled: false, channel: 'None' },
    { id: 6, label: 'Weekly summary reports', enabled: true, channel: 'Email only' }
  ];

  // Agent Templates
  const agentTemplates = [
    {
      id: 1,
      name: 'Security Review Agent',
      description: 'Performs security analysis on code, APIs, and infrastructure',
      icon: Shield,
      color: 'indigo',
      capabilities: ['Vulnerability scanning', 'Compliance checking', 'Best practices validation']
    },
    {
      id: 2,
      name: 'Cost Analysis Agent',
      description: 'Analyzes infrastructure costs and resource utilization',
      icon: Target,
      color: 'cyan',
      capabilities: ['Cost forecasting', 'Optimization recommendations', 'Budget tracking']
    },
    {
      id: 3,
      name: 'Code Quality Agent',
      description: 'Reviews code quality, patterns, and technical debt',
      icon: Code,
      color: 'purple',
      capabilities: ['Pattern detection', 'Technical debt analysis', 'Refactoring suggestions']
    },
    {
      id: 4,
      name: 'Performance Agent',
      description: 'Analyzes performance bottlenecks and optimization opportunities',
      icon: Zap,
      color: 'amber',
      capabilities: ['Bottleneck detection', 'Query optimization', 'Resource analysis']
    }
  ];

  const handleSave = () => {
    setShowSaveNotification(true);
    setTimeout(() => setShowSaveNotification(false), 3000);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <SettingsIcon className="w-8 h-8 text-gray-600" />
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        </div>
        <p className="text-gray-600">
          Team configuration, custom agents, and preferences
        </p>
      </div>

      {/* Save Notification */}
      {showSaveNotification && (
        <div className="fixed top-4 right-4 bg-emerald-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in">
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium">Settings saved successfully</span>
        </div>
      )}

      {/* Tabs */}
      <div className="mb-6">
        <div className="flex gap-2 border-b border-gray-200">
          {[
            { id: 'team', label: 'Team & Members', icon: Users },
            { id: 'agents', label: 'Custom Agents', icon: Bot },
            { id: 'notifications', label: 'Notifications', icon: Bell },
            { id: 'security', label: 'Security & Access', icon: Shield }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 font-medium text-sm transition-colors relative ${
                  selectedTab === tab.id
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
                {selectedTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Team & Members Tab */}
      {selectedTab === 'team' && (
        <div className="space-y-8">
          {/* Team Configuration */}
          <div className="card-elevated p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Team Configuration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organization Name
                </label>
                <input
                  type="text"
                  defaultValue={teamConfig.organization}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Default Persona
                </label>
                <select
                  defaultValue={teamConfig.defaultPersona}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Engineer</option>
                  <option>Product Manager</option>
                  <option>Platform Engineer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Timezone
                </label>
                <select
                  defaultValue={teamConfig.timezone}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>America/New_York</option>
                  <option>America/Los_Angeles</option>
                  <option>Europe/London</option>
                  <option>Asia/Tokyo</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sprint Length
                </label>
                <select
                  defaultValue={teamConfig.sprintLength}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>1 week</option>
                  <option>2 weeks</option>
                  <option>3 weeks</option>
                  <option>4 weeks</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </button>
            </div>
          </div>

          {/* Team Members */}
          <div className="card-elevated p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Team Members</h2>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Member
              </button>
            </div>

            <div className="space-y-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{member.name}</div>
                      <div className="text-sm text-gray-600">{member.email}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                          {member.persona}
                        </span>
                        <span className="text-xs text-gray-600">{member.role}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Custom Agents Tab */}
      {selectedTab === 'agents' && (
        <div className="space-y-8">
          {/* Active Custom Agents */}
          <div className="card-elevated p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Your Custom Agents</h2>
                <p className="text-sm text-gray-600 mt-1">Domain-specific force multipliers for your team</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Create Agent
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {customAgents.map((agent) => (
                <div key={agent.id} className="bg-gray-50 rounded-lg p-5 hover:bg-gray-100 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{agent.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{agent.description}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                          {agent.type}
                        </span>
                        <span className="text-xs text-gray-500">
                          by {agent.createdBy} • {agent.createdAt}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <div className="bg-white rounded p-2 text-center">
                      <div className="text-lg font-bold text-gray-900">{agent.stats.uses}</div>
                      <div className="text-xs text-gray-600">Uses</div>
                    </div>
                    <div className="bg-white rounded p-2 text-center">
                      <div className="text-lg font-bold text-emerald-600">{agent.stats.accuracy}</div>
                      <div className="text-xs text-gray-600">Accuracy</div>
                    </div>
                    <div className="bg-white rounded p-2 text-center">
                      <div className="text-lg font-bold text-gray-900">{agent.stats.avgTime}</div>
                      <div className="text-xs text-gray-600">Avg Time</div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded p-3">
                    <div className="text-xs text-blue-600 font-medium mb-1">Training Source</div>
                    <div className="text-xs text-blue-900 mb-1">{agent.training.source}</div>
                    <div className="text-xs text-blue-600">Updated {agent.training.lastUpdated}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Agent Templates */}
          <div className="card-elevated p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Agent Templates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {agentTemplates.map((template) => {
                const Icon = template.icon;
                return (
                  <button
                    key={template.id}
                    className={`text-left p-5 rounded-lg bg-gradient-to-br from-${template.color}-500 to-${template.color}-600 text-white hover:shadow-lg transition-all`}
                  >
                    <Icon className="w-8 h-8 mb-3" />
                    <h3 className="font-semibold mb-2">{template.name}</h3>
                    <p className="text-sm opacity-90 mb-3">{template.description}</p>
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Plus className="w-4 h-4" />
                      Create from Template
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Notifications Tab */}
      {selectedTab === 'notifications' && (
        <div className="card-elevated p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Notification Preferences</h2>
          <div className="space-y-4">
            {notificationPrefs.map((pref) => (
              <div key={pref.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    pref.enabled ? 'bg-blue-100' : 'bg-gray-200'
                  }`}>
                    {pref.enabled ? (
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{pref.label}</div>
                    <div className="text-sm text-gray-600">{pref.channel}</div>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked={pref.enabled}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              Save Preferences
            </button>
          </div>
        </div>
      )}

      {/* Security & Access Tab */}
      {selectedTab === 'security' && (
        <div className="space-y-6">
          <div className="card-elevated p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Security Settings</h2>
            <p className="text-gray-600 mb-6">
              Configure RBAC policies, data access controls, and security preferences
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-blue-900 mb-2">Security settings are managed in Governance</h3>
              <p className="text-sm text-blue-800 mb-4">
                RBAC policies, approvals, and compliance settings are configured in the Governance section
              </p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Go to Governance
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;

