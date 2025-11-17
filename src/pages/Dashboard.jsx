import React from 'react';
import { 
  TrendingUp, Zap, Shield, Clock, CheckCircle, 
  ChevronRight, Activity, Link2, Bot, GitBranch,
  Target, FileText, ArrowRight, Terminal, MessageSquare, Code
} from 'lucide-react';

const Dashboard = ({ persona = 'Product Manager' }) => {
  // Your AI Tool Stack - What developers actually use
  const aiToolStack = [
    {
      name: 'Cursor',
      icon: Terminal,
      color: 'blue',
      usage: 'Primary coding editor',
      enhancement: 'AEP provides: Service catalog, RBAC policies, architecture docs',
      activeUsers: 47,
      todayActions: 234
    },
    {
      name: 'Claude Desktop',
      icon: MessageSquare,
      color: 'purple',
      usage: 'Architecture & reasoning',
      enhancement: 'AEP provides: Jira context, team velocity, compliance rules',
      activeUsers: 23,
      todayActions: 89
    },
    {
      name: 'GitHub Copilot',
      icon: GitBranch,
      color: 'emerald',
      usage: 'Inline code suggestions',
      enhancement: 'AEP provides: Code standards, security policies, repo access',
      activeUsers: 52,
      todayActions: 412
    },
    {
      name: 'ACP (Ambient Code)',
      icon: Bot,
      color: 'amber',
      usage: 'Communication compression',
      enhancement: 'Engineering Council, Cold-start tickets, Requirements refinement',
      activeUsers: 18,
      todayActions: 47
    }
  ];
  // Active ACP Sessions
  const activeSessions = [
    {
      title: 'Auth Service Modernization',
      type: 'Engineering Council',
      owner: 'Sarah Parker (PM)',
      status: 'in-progress',
      duration: '47 min',
      phase: 'Technical validation',
      participants: ['Solutions Architect', 'Security Agent', 'Platform Agent'],
      progress: 65,
      insight: '8 technical constraints identified, GDPR compliance flagged'
    },
    {
      title: 'Brazil Payment Gateway',
      type: 'Code Analysis',
      owner: 'Alex Chen (Engineer)',
      status: 'in-progress',
      duration: '12 min',
      phase: 'Security review',
      participants: ['Security Agent', 'Code Quality Agent'],
      progress: 30,
      insight: 'Analyzing PCI-DSS compliance for payment handling'
    }
  ];

  // Recent Completions (Artifacts Generated)
  const recentCompletions = [
    {
      title: 'Payment Retry Logic - Epic',
      type: 'Cold-Start Tickets',
      owner: 'Sarah Parker',
      completedAt: '2 hours ago',
      artifacts: ['Epic EPIC-847', '5 Stories', 'Technical Spec', 'Architecture Doc'],
      outcome: 'Engineering started coding immediately (0 clarification meetings)',
      status: 'deployed'
    },
    {
      title: 'Kubernetes RBAC Specialist Agent',
      type: 'Custom Agent',
      owner: 'Jordan Kim',
      completedAt: '1 day ago',
      artifacts: ['Agent Definition', 'Training Data', 'Test Cases'],
      outcome: 'Used by 8 engineers this week for RBAC reviews',
      status: 'active'
    },
    {
      title: 'Authentication Service - Security Review',
      type: 'Code Analysis',
      owner: 'Alex Chen',
      completedAt: '2 days ago',
      artifacts: ['Security Report', '12 Recommendations', 'Compliance Checklist'],
      outcome: 'All critical issues resolved before production',
      status: 'complete'
    }
  ];

  // Impact Metrics (Communication Compression)
  const metrics = [
    {
      label: 'Meetings Eliminated',
      value: '127',
      change: 'This month',
      description: 'No more "what should we build?" sessions',
      icon: Clock,
      color: 'blue'
    },
    {
      label: 'Cold-Start Tickets',
      value: '34',
      change: 'Ready to code',
      description: 'Engineers started immediately (0 clarifications)',
      icon: Target,
      color: 'purple'
    },
    {
      label: 'Engineering Councils',
      value: '89',
      change: 'This month',
      description: 'Ideas validated in minutes, not meetings',
      icon: Bot,
      color: 'emerald'
    },
    {
      label: 'Custom Agents',
      value: '12',
      change: 'Team built',
      description: 'Domain-specific force multipliers',
      icon: Zap,
      color: 'amber'
    }
  ];


  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-700 border-blue-200',
      purple: 'bg-purple-50 text-purple-700 border-purple-200',
      emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      amber: 'bg-amber-50 text-amber-700 border-amber-200'
    };
    return colors[color] || colors.blue;
  };


  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Organization Overview
        </h1>
        <p className="text-gray-600">
          See what's happening across your team — active sessions, tools, and outcomes
        </p>
      </div>

      {/* Your AI Tool Stack */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Your AI Tool Stack</h2>
            <p className="text-sm text-gray-600 mt-1">
              Keep using your favorite tools — AEP provides enterprise context and governance
            </p>
          </div>
          <button className="text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
            <Link2 className="w-4 h-4" />
            <span className="text-sm font-medium">Manage Tools</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {aiToolStack.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <div key={idx} className="card-elevated p-5 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-${tool.color}-100 flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${tool.color}-600`} />
                  </div>
                  <span className="flex items-center gap-1.5 px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    Live
                  </span>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-1">{tool.name}</h3>
                <p className="text-xs text-gray-600 mb-3">{tool.usage}</p>
                
                <div className="space-y-2 mb-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-600">Team users</span>
                    <span className="font-semibold text-gray-900">{tool.activeUsers}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-600">Actions today</span>
                    <span className="font-semibold text-blue-600">{tool.todayActions}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-200">
                  <div className="text-xs text-blue-600 font-medium mb-1">AEP Enhancement:</div>
                  <div className="text-xs text-gray-700">{tool.enhancement}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>


      {/* Impact Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <div key={idx} className="card-elevated p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg ${getColorClasses(metric.color)} flex items-center justify-center`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-sm font-semibold text-gray-700 mb-1">{metric.label}</div>
              <div className="text-xs text-gray-600 mb-2">{metric.change}</div>
              <div className="text-xs text-gray-500">{metric.description}</div>
            </div>
          );
        })}
      </div>

      {/* Active ACP Sessions */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Active Sessions</h2>
            <p className="text-sm text-gray-600 mt-1">ACP sessions in progress right now</p>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
            View All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {activeSessions.map((session, idx) => (
            <div key={idx} className="card-elevated p-6 border-l-4 border-blue-500">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex items-center gap-1.5 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                      Live {session.duration}
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {session.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{session.title}</h3>
                  <div className="text-sm text-gray-600 mb-3">{session.owner}</div>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-4">
                <div className="text-xs text-purple-600 font-medium mb-1">Current phase:</div>
                <div className="text-sm text-purple-900">{session.phase}</div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {session.participants.map((participant, i) => (
                  <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {participant}
                  </span>
                ))}
              </div>

              <div className="bg-blue-50 rounded-lg p-3 mb-4">
                <div className="text-xs text-blue-800">💡 {session.insight}</div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all"
                    style={{ width: `${session.progress}%` }}
                  ></div>
                </div>
                <span className="text-sm font-semibold text-gray-900">{session.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Completions */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Recent Completions</h2>
            <p className="text-sm text-gray-600 mt-1">Artifacts generated and ready to use</p>
          </div>
        </div>

        <div className="space-y-4">
          {recentCompletions.map((completion, idx) => (
            <div key={idx} className="card-elevated p-6 hover:shadow-lg transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <h3 className="text-lg font-semibold text-gray-900">{completion.title}</h3>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {completion.type}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-3">
                    {completion.owner} • {completion.completedAt}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {completion.artifacts.map((artifact, i) => (
                  <div key={i} className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-center">
                    <div className="text-xs text-emerald-700 font-medium">{artifact}</div>
                  </div>
                ))}
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <div className="text-xs text-emerald-600 font-medium mb-1">Outcome:</div>
                <div className="text-sm text-emerald-900">{completion.outcome}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Your Internal Context */}
      <div className="card-elevated p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Your Internal Context</h2>
            <p className="text-sm text-gray-600 mt-1">ACP accesses your real data for better refinement</p>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
            <Link2 className="w-4 h-4" />
            Manage Connections
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <GitBranch className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">GitHub</div>
                <div className="text-xs text-gray-600">47 repositories</div>
              </div>
            </div>
            <div className="text-xs text-blue-800">
              Code standards, patterns, technical debt, commit history
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Jira</div>
                <div className="text-xs text-gray-600">234 active tickets</div>
              </div>
            </div>
            <div className="text-xs text-purple-800">
              Backlog, RICE scores, velocity, dependencies
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Confluence</div>
                <div className="text-xs text-gray-600">1,247 docs</div>
              </div>
            </div>
            <div className="text-xs text-emerald-800">
              Architecture decisions, RFCs, team processes
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Datadog</div>
                <div className="text-xs text-gray-600">89 services</div>
              </div>
            </div>
            <div className="text-xs text-amber-800">
              Performance, uptime, error rates, user behavior
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Security</div>
                <div className="text-xs text-gray-600">SOC2, PCI-DSS</div>
              </div>
            </div>
            <div className="text-xs text-indigo-800">
              Compliance rules, security policies, audit logs
            </div>
          </div>

          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">FinOps</div>
                <div className="text-xs text-gray-600">Cloud costs</div>
              </div>
            </div>
            <div className="text-xs text-cyan-800">
              Budget tracking, resource optimization, forecasts
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

