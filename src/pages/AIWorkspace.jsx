import React, { useState } from 'react';
import { 
  Terminal, MessageSquare, Code, Bot, Maximize2, Minimize2,
  RefreshCw, Settings, Copy, ArrowRight, Zap, Plus, X, Search,
  Store, Users, Shield, TrendingUp, Database, FileText, AlertTriangle,
  Layout, Box
} from 'lucide-react';

const AIWorkspace = ({ persona = 'Developer' }) => {
  const [activeTools, setActiveTools] = useState([]); // Start empty
  const [showAssistantLibrary, setShowAssistantLibrary] = useState(false);
  const [showTemplateManager, setShowTemplateManager] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [templateName, setTemplateName] = useState('');
  const [showWelcomeBanner, setShowWelcomeBanner] = useState(true); // First-time user guide

  // Web-Based IDEs (Coding Environments)
  const webIDEs = [
    {
      id: 'vscode-web',
      name: 'VS Code (Web)',
      icon: Code,
      color: 'blue',
      category: 'IDE',
      type: 'ide', // New type to distinguish from chat assistants
      description: 'Full VS Code in browser with Roo Code, Cursor extensions',
      contextProvided: 'Code repos, standards, RBAC, service catalog',
      usedBy: 52,
      extensions: ['Roo Code', 'Cursor AI', 'GitHub Copilot']
    },
    {
      id: 'intellij-web',
      name: 'IntelliJ IDEA (Web)',
      icon: Box,
      color: 'purple',
      category: 'IDE',
      type: 'ide',
      description: 'JetBrains IntelliJ via Projector with AI extensions',
      contextProvided: 'Java projects, code standards, Spring configs',
      usedBy: 28,
      extensions: ['AI Assistant', 'Roo Code']
    },
    {
      id: 'eclipse-che',
      name: 'Eclipse Che',
      icon: Layout,
      color: 'indigo',
      category: 'IDE',
      type: 'ide',
      description: 'Cloud IDE with OpenShift integration',
      contextProvided: 'K8s configs, deployment manifests, service mesh',
      usedBy: 15,
      extensions: ['AI Code Completion']
    }
  ];

  // Public AI Tools (External)
  const publicTools = [
    {
      id: 'cursor',
      name: 'Cursor',
      icon: Terminal,
      color: 'blue',
      category: 'Public Tool',
      type: 'chat', // Chat-based assistant
      description: 'AI-powered code editor (chat interface)',
      contextProvided: 'Service catalog, RBAC policies, code standards',
      usedBy: 47
    },
    {
      id: 'claude',
      name: 'Claude',
      icon: MessageSquare,
      color: 'purple',
      category: 'Public Tool',
      type: 'chat',
      description: 'Architecture & reasoning',
      contextProvided: 'Jira backlog, team velocity, compliance rules',
      usedBy: 23
    },
    {
      id: 'copilot',
      name: 'GitHub Copilot',
      icon: Code,
      color: 'emerald',
      category: 'Public Tool',
      type: 'chat',
      description: 'Inline code suggestions (chat interface)',
      contextProvided: 'Code standards, security policies, repo access',
      usedBy: 52
    },
    {
      id: 'gemini',
      name: 'Gemini',
      icon: MessageSquare,
      color: 'cyan',
      category: 'Public Tool',
      type: 'chat',
      description: 'Research & analysis',
      contextProvided: 'Documentation, RFCs, technical decisions',
      usedBy: 18
    },
    {
      id: 'perplexity',
      name: 'Perplexity',
      icon: MessageSquare,
      color: 'indigo',
      category: 'Public Tool',
      type: 'chat',
      description: 'Research & fact-checking',
      contextProvided: 'Internal docs, architecture decisions',
      usedBy: 12
    }
  ];

  // Custom Assistants (Built by Organization)
  const customAssistants = [
    {
      id: 'acp',
      name: 'ACP (Ambient Code Platform)',
      icon: Bot,
      color: 'amber',
      category: 'Custom Assistant',
      type: 'chat',
      description: 'Communication compression: Engineering Council, Cold-start tickets',
      contextProvided: 'Jira backlog, GitHub repos, team velocity, architecture docs',
      creator: 'Platform Team',
      createdDate: '2 months ago',
      usedBy: 18,
      useCase: 'PM & Engineering collaboration'
    },
    {
      id: 'k8s-rbac-specialist',
      name: 'Kubernetes RBAC Specialist',
      icon: Shield,
      color: 'indigo',
      category: 'Custom Assistant',
      type: 'chat',
      description: 'Validates and generates RBAC policies for K8s clusters',
      contextProvided: 'K8s cluster configs, existing RBAC policies, security standards',
      creator: 'Jordan Kim (Platform)',
      createdDate: '3 weeks ago',
      usedBy: 8,
      useCase: 'Platform & Security teams'
    },
    {
      id: 'security-review-agent',
      name: 'Security Review Agent',
      icon: Shield,
      color: 'red',
      category: 'Custom Assistant',
      type: 'chat',
      description: 'Automated security and compliance reviews for code changes',
      contextProvided: 'Security policies, PCI-DSS rules, GDPR requirements, code repos',
      creator: 'Security Team',
      createdDate: '1 month ago',
      usedBy: 15,
      useCase: 'All engineering teams'
    },
    {
      id: 'cost-optimizer',
      name: 'Cloud Cost Optimizer',
      icon: TrendingUp,
      color: 'emerald',
      category: 'Custom Assistant',
      type: 'chat',
      description: 'Analyzes and recommends cloud cost optimizations',
      contextProvided: 'AWS/Azure costs, resource utilization, K8s metrics',
      creator: 'FinOps Team',
      createdDate: '2 weeks ago',
      usedBy: 6,
      useCase: 'Platform & Engineering leads'
    },
    {
      id: 'api-design-reviewer',
      name: 'API Design Reviewer',
      icon: Code,
      color: 'purple',
      category: 'Custom Assistant',
      type: 'chat',
      description: 'Reviews API designs against org standards and best practices',
      contextProvided: 'API design guidelines, existing APIs, OpenAPI specs',
      creator: 'Architecture Team',
      createdDate: '5 weeks ago',
      usedBy: 12,
      useCase: 'Backend developers'
    },
    {
      id: 'data-privacy-agent',
      name: 'Data Privacy Validator',
      icon: Database,
      color: 'cyan',
      category: 'Custom Assistant',
      type: 'chat',
      description: 'Ensures data handling complies with GDPR, CCPA, and internal policies',
      contextProvided: 'Privacy policies, data classification, compliance rules',
      creator: 'Legal & Compliance',
      createdDate: '6 weeks ago',
      usedBy: 9,
      useCase: 'All teams handling user data'
    },
    {
      id: 'incident-responder',
      name: 'Incident Response Agent',
      icon: AlertTriangle,
      color: 'red',
      category: 'Custom Assistant',
      type: 'chat',
      description: 'Assists with incident triage, runbooks, and post-mortems',
      contextProvided: 'PagerDuty alerts, Datadog metrics, runbooks, past incidents',
      creator: 'SRE Team',
      createdDate: '4 weeks ago',
      usedBy: 11,
      useCase: 'SRE & On-call engineers'
    },
    {
      id: 'documentation-generator',
      name: 'Documentation Generator',
      icon: FileText,
      color: 'blue',
      category: 'Custom Assistant',
      type: 'chat',
      description: 'Auto-generates API docs, architecture diagrams, and README files',
      contextProvided: 'Code repos, existing docs, architecture decisions',
      creator: 'Developer Experience',
      createdDate: '3 weeks ago',
      usedBy: 14,
      useCase: 'All engineering teams'
    }
  ];

  // Combine all assistants (IDEs + Chat Assistants)
  const allAssistants = [...webIDEs, ...publicTools, ...customAssistants];

  // Saved Workspace Templates (User-Created + Team Shared)
  const myTemplates = [
    {
      id: 'security-review',
      name: 'Security Review Workflow',
      assistants: ['vscode-web', 'security-review-agent', 'k8s-rbac-specialist'],
      description: 'Code + Security checks + RBAC validation',
      creator: 'You',
      shared: false
    },
    {
      id: 'architecture-planning',
      name: 'Architecture Planning',
      assistants: ['claude', 'cost-optimizer', 'documentation-generator'],
      description: 'System design and cost analysis',
      creator: 'You',
      shared: false
    }
  ];

  const teamTemplates = [
    {
      id: 'pm-ideation',
      name: 'PM Ideation Session',
      assistants: ['claude', 'acp', 'gemini'],
      description: 'Validate ideas, generate tickets, research',
      creator: 'Sarah Parker (PM)',
      shared: true,
      usedBy: 12
    },
    {
      id: 'full-stack-dev',
      name: 'Full-Stack Development',
      assistants: ['vscode-web', 'acp', 'api-design-reviewer'],
      description: 'Code in IDE + requirements + API standards',
      creator: 'Engineering Team',
      shared: true,
      usedBy: 34
    },
    {
      id: 'incident-response',
      name: 'Incident Response',
      assistants: ['incident-responder', 'claude', 'k8s-rbac-specialist'],
      description: 'On-call incident triage and resolution',
      creator: 'SRE Team',
      shared: true,
      usedBy: 8
    },
    {
      id: 'java-microservices',
      name: 'Java Microservices Dev',
      assistants: ['intellij-web', 'api-design-reviewer', 'documentation-generator'],
      description: 'IntelliJ + API standards + docs',
      creator: 'Backend Team',
      shared: true,
      usedBy: 22
    }
  ];

  const suggestedTemplates = [
    {
      id: 'cold-start-dev',
      name: 'Cold-Start Development',
      assistants: ['vscode-web', 'acp', 'security-review-agent'],
      description: 'Code + refined requirements + security',
      suggested: true
    },
    {
      id: 'compliance-review',
      name: 'Compliance Review',
      assistants: ['data-privacy-agent', 'security-review-agent', 'documentation-generator'],
      description: 'Ensure GDPR/CCPA compliance',
      suggested: true
    }
  ];


  const getToolData = (toolId) => {
    return allAssistants.find(t => t.id === toolId);
  };

  const loadTemplate = (template) => {
    setActiveTools(template.assistants);
    setShowTemplateManager(false);
  };

  const saveTemplate = () => {
    if (templateName && activeTools.length > 0) {
      // In real implementation, this would save to backend
      console.log('Saving template:', { name: templateName, assistants: activeTools });
      setTemplateName('');
      setShowTemplateManager(false);
      // TODO: Add to myTemplates
    }
  };

  const addAssistant = (assistantId) => {
    if (activeTools.length < 3 && !activeTools.includes(assistantId)) {
      setActiveTools([...activeTools, assistantId]);
    }
  };

  const removeAssistant = (assistantId) => {
    setActiveTools(activeTools.filter(id => id !== assistantId));
  };

  const filteredAssistants = allAssistants.filter(assistant =>
    assistant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    assistant.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    assistant.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">AI Workspace</h1>
            <p className="text-sm text-gray-600 mt-1">
              All tools get the same enterprise context (GitHub, Jira, RBAC, policies) automatically
            </p>
            <div className="mt-2 flex items-center gap-2 text-xs bg-blue-50 border border-blue-200 rounded px-3 py-1.5 inline-flex">
              <span className="text-blue-700">
                <strong>Why this?</strong> Stop switching windows and repeating yourself. Your AI tools finally work together.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Browse Library Button */}
            <button 
              onClick={() => setShowAssistantLibrary(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Store className="w-4 h-4" />
              <span className="text-sm font-medium">Browse Library</span>
              <span className="ml-1 px-2 py-0.5 bg-white bg-opacity-20 rounded-full text-xs">
                {allAssistants.length}
              </span>
            </button>

            {/* Manage Templates */}
            <button 
              onClick={() => setShowTemplateManager(true)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Zap className="w-4 h-4 text-gray-700" />
              <span className="text-sm font-medium text-gray-700">Templates</span>
            </button>

            {/* Save Current Workspace - Always visible */}
            <button 
              onClick={() => setShowTemplateManager(true)}
              disabled={activeTools.length === 0}
              className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-400"
            >
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium">Save Workspace</span>
            </button>
          </div>
        </div>
      </div>

      {/* First-Time User Welcome Banner */}
      {showWelcomeBanner && (
        <div className="bg-gradient-to-r from-emerald-50 to-blue-50 border-b border-emerald-200 px-6 py-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-emerald-600" />
                <h3 className="text-sm font-semibold text-emerald-900">
                  New to AI Workspace? Here's how it works:
                </h3>
              </div>
              <div className="text-xs text-gray-700 space-y-1">
                <div>
                  <strong>1. Browse Library</strong> to discover IDEs and AI assistants (public like Claude, or custom like Security Agent)
                </div>
                <div>
                  <strong>2. Load a Template</strong> for quick-start workflows based on your role (PM, Developer, Platform Engineer)
                </div>
                <div>
                  <strong>3. All tools work together</strong> with unified AEP context (GitHub, Jira, RBAC, policies) automatically
                </div>
              </div>
              <button
                onClick={() => setShowTemplateManager(true)}
                className="mt-3 px-3 py-1.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-xs font-medium"
              >
                Load Template to Get Started
              </button>
            </div>
            <button
              onClick={() => setShowWelcomeBanner(false)}
              className="ml-4 p-1 hover:bg-white hover:bg-opacity-50 rounded transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      )}

      {/* Context Banner with Live Sync Indicator */}
      <div className="bg-blue-50 border-b border-blue-200 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <div className="relative">
              <Zap className="w-4 h-4 text-blue-600" />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <span className="font-medium text-blue-900">AEP Context Active:</span>
            <span className="text-blue-700">
              All IDEs and assistants have access to your GitHub repos, Jira backlog, architecture docs, and security policies
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5 bg-green-100 text-green-800 px-2 py-1 rounded">
              <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
              <span>Context synced</span>
            </div>
            <span className="text-gray-600">
              payment-service repo • STORY-234 • Sprint 47
            </span>
          </div>
        </div>
      </div>

      {/* Assistant Library Modal */}
      {showAssistantLibrary && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <Store className="w-6 h-6 text-blue-600" />
                    AI Workspace Library
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    IDEs + Assistants for your workspace • {filteredAssistants.length} available
                  </p>
                  {!searchQuery && (
                    <div className="mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                      <div className="text-xs font-semibold text-emerald-900 mb-1">
                        {persona.includes('Product Manager') ? '💡 Popular for PMs:' :
                         persona.includes('Platform Engineer') ? '💡 Popular for Platform Engineers:' :
                         '💡 Popular for Developers:'}
                      </div>
                      <div className="text-xs text-emerald-800">
                        {persona.includes('Product Manager') ? 
                          'ACP, Claude, Gemini' :
                         persona.includes('Platform Engineer') ? 
                          'K8s RBAC Specialist, Cloud Cost Optimizer, IntelliJ' :
                          'VS Code (Web), ACP, Security Review Agent'}
                      </div>
                    </div>
                  )}
                </div>
                <button 
                  onClick={() => setShowAssistantLibrary(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search IDEs and assistants by name, description, or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* Web-Based IDEs Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-600" />
                  Coding Environments (Not Assistants, but have AI built-in)
                  <span className="text-sm font-normal text-gray-600">
                    ({webIDEs.filter(t => filteredAssistants.includes(t)).length})
                  </span>
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Full IDEs with AI assistants via extensions (Roo Code, Cursor AI, etc.)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {webIDEs.filter(t => filteredAssistants.includes(t)).map((assistant) => {
                    const Icon = assistant.icon;
                    const isActive = activeTools.includes(assistant.id);
                    return (
                      <div key={assistant.id} className="card-elevated p-5 hover:shadow-lg transition-all border-l-4 border-blue-500">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 bg-${assistant.color}-100 rounded-lg flex items-center justify-center`}>
                              <Icon className={`w-6 h-6 text-${assistant.color}-600`} />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{assistant.name}</h4>
                              <span className="text-xs text-blue-600 font-medium">{assistant.category}</span>
                            </div>
                          </div>
                          {isActive && (
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                              Active
                            </span>
                          )}
                        </div>
                        
                        <p className="text-sm text-gray-700 mb-3">{assistant.description}</p>
                        
                        <div className="bg-blue-50 border border-blue-200 rounded p-2 mb-3">
                          <div className="text-xs text-blue-800">
                            <span className="font-medium">AEP Context:</span> {assistant.contextProvided}
                          </div>
                        </div>

                        <div className="mb-3">
                          <div className="text-xs text-gray-600 font-medium mb-1">AI Assistants Built-In:</div>
                          <div className="flex flex-wrap gap-1">
                            {assistant.extensions.map((ext, i) => (
                              <span key={i} className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                                {ext}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">
                            <Users className="w-3 h-3 inline mr-1" />
                            {assistant.usedBy} team members
                          </span>
                          {isActive ? (
                            <button
                              onClick={() => removeAssistant(assistant.id)}
                              className="flex items-center gap-1 px-3 py-1.5 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium"
                            >
                              <X className="w-4 h-4" />
                              Remove
                            </button>
                          ) : (
                            <button
                              onClick={() => addAssistant(assistant.id)}
                              disabled={activeTools.length >= 3}
                              className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              <Plus className="w-4 h-4" />
                              Add
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Public AI Tools Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-blue-600" />
                  Chat Assistants (Public)
                  <span className="text-sm font-normal text-gray-600">
                    ({publicTools.filter(t => filteredAssistants.includes(t)).length})
                  </span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {publicTools.filter(t => filteredAssistants.includes(t)).map((assistant) => {
                    const Icon = assistant.icon;
                    const isActive = activeTools.includes(assistant.id);
                    return (
                      <div key={assistant.id} className="card-elevated p-5 hover:shadow-lg transition-all">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 bg-${assistant.color}-100 rounded-lg flex items-center justify-center`}>
                              <Icon className={`w-6 h-6 text-${assistant.color}-600`} />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{assistant.name}</h4>
                              <span className="text-xs text-gray-600">{assistant.category}</span>
                            </div>
                          </div>
                          {isActive && (
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                              Active
                            </span>
                          )}
                        </div>
                        
                        <p className="text-sm text-gray-700 mb-3">{assistant.description}</p>
                        
                        <div className="bg-blue-50 border border-blue-200 rounded p-2 mb-3">
                          <div className="text-xs text-blue-800">
                            <span className="font-medium">Context:</span> {assistant.contextProvided}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">
                            <Users className="w-3 h-3 inline mr-1" />
                            {assistant.usedBy} team members
                          </span>
                          {isActive ? (
                            <button
                              onClick={() => removeAssistant(assistant.id)}
                              className="flex items-center gap-1 px-3 py-1.5 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium"
                            >
                              <X className="w-4 h-4" />
                              Remove
                            </button>
                          ) : (
                            <button
                              onClick={() => addAssistant(assistant.id)}
                              disabled={activeTools.length >= 3}
                              className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              <Plus className="w-4 h-4" />
                              Add
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Custom Assistants Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Bot className="w-5 h-5 text-purple-600" />
                  Custom Assistants (Built by Your Org)
                  <span className="text-sm font-normal text-gray-600">
                    ({customAssistants.filter(t => filteredAssistants.includes(t)).length})
                  </span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {customAssistants.filter(t => filteredAssistants.includes(t)).map((assistant) => {
                    const Icon = assistant.icon;
                    const isActive = activeTools.includes(assistant.id);
                    return (
                      <div key={assistant.id} className="card-elevated p-5 hover:shadow-lg transition-all border-l-4 border-purple-500">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 bg-${assistant.color}-100 rounded-lg flex items-center justify-center`}>
                              <Icon className={`w-6 h-6 text-${assistant.color}-600`} />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{assistant.name}</h4>
                              <span className="text-xs text-purple-600 font-medium">{assistant.category}</span>
                            </div>
                          </div>
                          {isActive && (
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                              Active
                            </span>
                          )}
                        </div>
                        
                        <p className="text-sm text-gray-700 mb-3">{assistant.description}</p>
                        
                        <div className="bg-purple-50 border border-purple-200 rounded p-2 mb-3">
                          <div className="text-xs text-purple-800">
                            <span className="font-medium">Context:</span> {assistant.contextProvided}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mb-3 text-xs text-gray-600">
                          <div>
                            <span className="font-medium">Creator:</span> {assistant.creator}
                          </div>
                          <div>
                            <span className="font-medium">Use Case:</span> {assistant.useCase}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">
                            <Users className="w-3 h-3 inline mr-1" />
                            {assistant.usedBy} team members • {assistant.createdDate}
                          </span>
                          {isActive ? (
                            <button
                              onClick={() => removeAssistant(assistant.id)}
                              className="flex items-center gap-1 px-3 py-1.5 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium"
                            >
                              <X className="w-4 h-4" />
                              Remove
                            </button>
                          ) : (
                            <button
                              onClick={() => addAssistant(assistant.id)}
                              disabled={activeTools.length >= 3}
                              className="flex items-center gap-1 px-3 py-1.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              <Plus className="w-4 h-4" />
                              Add
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

                    {/* Modal Footer */}
                    <div className="p-4 border-t border-gray-200 bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">{activeTools.length}/3</span> assistants in your workspace
                          <span className="ml-2 text-xs text-gray-500">
                            (3 panels recommended for optimal screen space)
                          </span>
                        </div>
                        <button
                          onClick={() => setShowAssistantLibrary(false)}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                          Done
                        </button>
                      </div>
                    </div>
          </div>
        </div>
      )}

      {/* Template Manager Modal */}
      {showTemplateManager && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-blue-600" />
                    Workspace Templates
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Load saved workflows or create new ones
                  </p>
                </div>
                <button 
                  onClick={() => setShowTemplateManager(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* Save Current Workspace */}
              {activeTools.length > 0 && (
                <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Save Current Workspace</h3>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={templateName}
                      onChange={(e) => setTemplateName(e.target.value)}
                      placeholder="e.g., My Security Review Workflow"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={saveTemplate}
                      disabled={!templateName}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Save
                    </button>
                  </div>
                  <div className="flex gap-2 mt-3">
                    {activeTools.map(toolId => {
                      const tool = getToolData(toolId);
                      if (!tool) return null;
                      const Icon = tool.icon;
                      return (
                        <div key={toolId} className={`flex items-center gap-1 px-2 py-1 bg-white rounded text-xs`}>
                          <Icon className="w-3 h-3" />
                          <span>{tool.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

                      {/* My Templates */}
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          My Templates
                          <span className="text-sm font-normal text-gray-600">({myTemplates.length})</span>
                        </h3>
                        <p className="text-xs text-gray-600 mb-4">Templates you've saved for quick reuse</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {myTemplates.map((template) => (
                    <div key={template.id} className="card-elevated p-5 hover:shadow-lg transition-all">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">{template.name}</h4>
                          <p className="text-xs text-gray-600 mt-1">{template.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {template.assistants.map(assistantId => {
                          const assistant = getToolData(assistantId);
                          if (!assistant) return null;
                          const Icon = assistant.icon;
                          return (
                            <div key={assistantId} className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded text-xs">
                              <Icon className="w-3 h-3" />
                              <span>{assistant.name}</span>
                            </div>
                          );
                        })}
                      </div>

                      <button
                        onClick={() => loadTemplate(template)}
                        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        Load Workspace
                      </button>
                    </div>
                  ))}
                </div>
              </div>

                      {/* Team Templates */}
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <Users className="w-5 h-5 text-purple-600" />
                          Team Templates
                          <span className="text-sm font-normal text-gray-600">({teamTemplates.length})</span>
                        </h3>
                        <p className="text-xs text-gray-600 mb-4">Shared by your team members (you can clone and modify)</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {teamTemplates.map((template) => (
                    <div key={template.id} className="card-elevated p-5 hover:shadow-lg transition-all border-l-4 border-purple-500">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">{template.name}</h4>
                          <p className="text-xs text-gray-600 mt-1">{template.description}</p>
                          <p className="text-xs text-purple-600 font-medium mt-1">by {template.creator}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {template.assistants.map(assistantId => {
                          const assistant = getToolData(assistantId);
                          if (!assistant) return null;
                          const Icon = assistant.icon;
                          return (
                            <div key={assistantId} className="flex items-center gap-1 px-2 py-1 bg-purple-50 rounded text-xs">
                              <Icon className="w-3 h-3" />
                              <span>{assistant.name}</span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">
                          {template.usedBy} team members using
                        </span>
                        <button
                          onClick={() => loadTemplate(template)}
                          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                        >
                          Load
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

                      {/* Suggested Templates */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <Bot className="w-5 h-5 text-emerald-600" />
                          Suggested for You
                          <span className="text-sm font-normal text-gray-600">({suggestedTemplates.length})</span>
                        </h3>
                        <p className="text-xs text-gray-600 mb-4">Based on your role and popular workflows in your organization</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {suggestedTemplates.map((template) => (
                    <div key={template.id} className="card-elevated p-5 hover:shadow-lg transition-all border-l-4 border-emerald-500">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">{template.name}</h4>
                          <p className="text-xs text-gray-600 mt-1">{template.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {template.assistants.map(assistantId => {
                          const assistant = getToolData(assistantId);
                          if (!assistant) return null;
                          const Icon = assistant.icon;
                          return (
                            <div key={assistantId} className="flex items-center gap-1 px-2 py-1 bg-emerald-50 rounded text-xs">
                              <Icon className="w-3 h-3" />
                              <span>{assistant.name}</span>
                            </div>
                          );
                        })}
                      </div>

                      <button
                        onClick={() => loadTemplate(template)}
                        className="w-full px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium"
                      >
                        Try This Workflow
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Multi-Panel Workspace */}
      <div className="flex-1 flex gap-4 p-4 overflow-hidden">
        {activeTools.length === 0 ? (
          /* Empty State - Persona-Specific */
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center max-w-2xl">
              <Store className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Your Workspace is Empty</h3>
              <p className="text-gray-600 mb-6">
                Load a template to get started, or build your own workspace
              </p>

              {/* Persona-Specific Quick Start */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
                <div className="text-sm font-semibold text-blue-900 mb-3">
                  {persona.includes('Product Manager') ? '👋 Recommended for PMs:' :
                   persona.includes('Platform Engineer') ? '👋 Recommended for Platform Engineers:' :
                   '👋 Recommended for Developers:'}
                </div>
                <div className="text-left bg-white rounded-lg p-4 mb-4">
                  {persona.includes('Product Manager') ? (
                    <>
                      <div className="font-medium text-gray-900 mb-2">Try: PM Ideation Session</div>
                      <div className="text-sm text-gray-700 mb-3">Claude + ACP + Gemini</div>
                      <div className="text-xs text-gray-600">
                        ✓ Validate ideas with Engineering Council<br/>
                        ✓ Generate cold-start tickets<br/>
                        ✓ Research competitors
                      </div>
                    </>
                  ) : persona.includes('Platform Engineer') ? (
                    <>
                      <div className="font-medium text-gray-900 mb-2">Try: Infrastructure Management</div>
                      <div className="text-sm text-gray-700 mb-3">K8s RBAC Specialist + Cost Optimizer + Claude</div>
                      <div className="text-xs text-gray-600">
                        ✓ Manage RBAC policies safely<br/>
                        ✓ Optimize cloud costs<br/>
                        ✓ Architecture guidance
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="font-medium text-gray-900 mb-2">Try: Full-Stack Development</div>
                      <div className="text-sm text-gray-700 mb-3">VS Code (Web) + ACP + Security Agent</div>
                      <div className="text-xs text-gray-600">
                        ✓ Code with full IDE<br/>
                        ✓ Cold-start tickets ready<br/>
                        ✓ Security checks built-in
                      </div>
                    </>
                  )}
                </div>
                <button
                  onClick={() => setShowTemplateManager(true)}
                  className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Load This Template
                </button>
              </div>

              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setShowAssistantLibrary(true)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Store className="w-4 h-4" />
                  Or Browse All ({allAssistants.length})
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Active Assistants */
          activeTools.map((toolId, idx) => {
            const tool = getToolData(toolId);
            if (!tool) return null;
            const Icon = tool.icon;

            return (
              <div key={toolId} className="flex-1 flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Tool Header */}
                <div className={`bg-gradient-to-r from-${tool.color}-500 to-${tool.color}-600 text-white px-4 py-3`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{tool.name}</h3>
                        <p className="text-xs opacity-90">{tool.description}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeAssistant(toolId)}
                      className="p-1.5 hover:bg-white hover:bg-opacity-20 rounded transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Context Info */}
                <div className="bg-blue-50 border-b border-blue-200 px-4 py-2">
                  <div className="text-xs text-blue-800">
                    <span className="font-medium">AEP Context:</span> {tool.contextProvided}
                  </div>
                </div>

                {/* Content Area - IDE or Chat */}
                {tool.type === 'ide' ? (
                  /* IDE Panel */
                  <div className="flex-1 bg-gray-900 flex items-center justify-center p-4">
                    <div className="text-center max-w-md">
                      <div className="w-16 h-16 bg-white bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">{tool.name} Ready</h3>
                      <p className="text-gray-400 text-sm mb-4">
                        Full IDE will embed here (iframe or web container)
                      </p>
                      {tool.extensions && (
                        <div className="mb-4">
                          <div className="text-xs text-gray-500 mb-2">AI Extensions Available:</div>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {tool.extensions.map((ext, i) => (
                              <span key={i} className="text-xs bg-purple-900 bg-opacity-50 text-purple-300 px-2 py-1 rounded">
                                {ext}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      <div className="mt-6 p-4 bg-blue-900 bg-opacity-30 rounded-lg text-left">
                        <div className="text-xs text-blue-300 mb-1">✓ AEP Context Auto-Loaded:</div>
                        <div className="text-xs text-gray-300">{tool.contextProvided}</div>
                      </div>
                      <div className="mt-4 flex gap-2 justify-center">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                          Launch IDE
                        </button>
                        <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium">
                          Configure
                        </button>
                      </div>
                      <div className="mt-4 text-xs text-gray-500 italic">
                        (Prototype: Real IDE integration coming soon)
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Chat Assistant Panel */
                  <>
                    <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center max-w-sm">
                          <Icon className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                          <p className="text-sm font-semibold text-gray-900 mb-2">
                            {tool.name} Ready
                          </p>
                          <p className="text-xs text-gray-600 mb-4">
                            Start a conversation. AEP will automatically inject enterprise context.
                          </p>
                          <div className="bg-white border border-gray-200 rounded-lg p-3 text-left">
                            <div className="text-xs text-gray-500 mb-1">Example prompts:</div>
                            <div className="text-xs text-gray-700 space-y-1">
                              <div>• "Explain the payment-service architecture"</div>
                              <div>• "What's blocking STORY-234?"</div>
                              <div>• "Review my security approach"</div>
                            </div>
                          </div>
                          <div className="mt-4 text-xs text-gray-500 italic">
                            (Prototype: Chat functionality coming soon)
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Input Area */}
                    <div className="border-t border-gray-200 p-4 bg-white">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder={`Ask ${tool.name}...`}
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        />
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Quick Actions Bar */}
      <div className="bg-white border-t border-gray-200 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <Copy className="w-4 h-4" />
              Compare Outputs
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <RefreshCw className="w-4 h-4" />
              Sync Context
            </button>
          </div>
          <div className="text-xs text-gray-600">
            <span className="font-medium">Active Context:</span> payment-service, Sprint 47, 47 repos
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIWorkspace;

