import React from 'react';
import { 
  Code, Shield, Zap, FileText, GitBranch, AlertTriangle,
  TrendingUp, CheckCircle, Clock, Target, Bot, ArrowRight
} from 'lucide-react';

const DeveloperHub = () => {
  // Active Development Work
  const activeWork = [
    {
      ticket: 'EPIC-847',
      title: 'Payment Retry Logic',
      type: 'Cold-Start Ticket',
      status: 'coding',
      progress: 65,
      sprint: 'Sprint 47',
      clarifications: 0,
      daysActive: 3,
      blockers: [],
      context: {
        requirements: 'Fully refined by Engineering Council',
        architecture: 'Event-driven with exponential backoff',
        dependencies: '2 services (payment-gateway, notification-service)',
        testCoverage: 'Unit tests in progress'
      },
      aiInsights: [
        'Similar retry logic exists in subscription-service (reusable pattern)',
        'Consider circuit breaker pattern for downstream failures',
        'Datadog metrics show 847 failed payments/day (opportunity)'
      ]
    },
    {
      ticket: 'STORY-234',
      title: 'Implement Boleto payment method',
      type: 'Cold-Start Story',
      status: 'ready',
      progress: 0,
      sprint: 'Sprint 47',
      clarifications: 0,
      daysActive: 0,
      blockers: [],
      context: {
        requirements: 'Acceptance criteria: 12 test cases defined',
        architecture: 'Extends AbstractPaymentMethod interface',
        dependencies: 'brazil-payment-gateway v1.2.0',
        testCoverage: 'E2E tests already written'
      },
      aiInsights: [
        'LGPD compliance requirements documented in RFC-47',
        'Boleto validation library available: boleto-validator v2.3',
        'Similar implementation: Pix payment (reference code)'
      ]
    },
    {
      ticket: 'EPIC-923',
      title: 'Auth Service Modernization v3',
      type: 'Engineering Council Output',
      status: 'planning',
      progress: 15,
      sprint: 'Next Sprint',
      clarifications: 0,
      daysActive: 1,
      blockers: ['Waiting for security team approval'],
      context: {
        requirements: 'Validated by 5-agent council (47 min session)',
        architecture: 'OAuth 2.1 with backward compatibility layer',
        dependencies: '12 downstream services identified',
        testCoverage: 'Migration plan includes phased rollout'
      },
      aiInsights: [
        'GDPR compliance flagged - user consent flows need update',
        'Database capacity needs +30% during migration',
        'Platform team confirmed K8s cluster capacity available'
      ]
    }
  ];

  // Developer Toolkit - Quick Actions
  const devToolkit = [
    {
      icon: Shield,
      title: 'Run Security Analysis',
      description: 'Scan your code for vulnerabilities before PR',
      color: 'indigo',
      action: 'Analyze Code',
      benefit: 'Catch issues before they reach production'
    },
    {
      icon: Code,
      title: 'Analyze Technical Debt',
      description: 'Identify code smells, patterns, refactoring opportunities',
      color: 'purple',
      action: 'Run Analysis',
      benefit: 'Understand codebase health before starting'
    },
    {
      icon: Bot,
      title: 'Start Engineering Council',
      description: 'Validate complex technical decisions with AI experts',
      color: 'blue',
      action: 'Launch Session',
      benefit: 'Get architecture feedback before coding'
    },
    {
      icon: FileText,
      title: 'Generate Documentation',
      description: 'Auto-generate API docs, architecture diagrams',
      color: 'emerald',
      action: 'Create Docs',
      benefit: 'Keep documentation in sync with code'
    },
    {
      icon: Zap,
      title: 'Use Custom Agent',
      description: 'RBAC validator, API security checker, cost optimizer',
      color: 'amber',
      action: 'Select Agent',
      benefit: 'Domain-specific intelligence for your work'
    },
    {
      icon: GitBranch,
      title: 'Refine Requirements',
      description: 'Transform vague tickets into cold-start clarity',
      color: 'cyan',
      action: 'Refine Ticket',
      benefit: 'Zero clarification meetings needed'
    }
  ];

  // Code Quality Insights
  const codeInsights = [
    {
      repo: 'payment-service',
      quality: 94,
      coverage: 87,
      debt: 'Low',
      vulnerabilities: 0,
      lastAnalysis: '2 hours ago'
    },
    {
      repo: 'auth-service',
      quality: 81,
      coverage: 72,
      debt: 'Medium',
      vulnerabilities: 3,
      lastAnalysis: '5 hours ago'
    },
    {
      repo: 'brazil-payment-gateway',
      quality: 96,
      coverage: 91,
      debt: 'Low',
      vulnerabilities: 0,
      lastAnalysis: '1 hour ago'
    }
  ];

  // Recent Completions
  const recentCompletions = [
    {
      ticket: 'STORY-189',
      title: 'Pix payment integration',
      completedAt: '2 days ago',
      outcome: 'Deployed to production, 0 post-deploy issues',
      metrics: '2.4K transactions, 99.97% success rate',
      coldStart: true
    },
    {
      ticket: 'STORY-201',
      title: 'Rate limiting for payment APIs',
      completedAt: '4 days ago',
      outcome: 'Performance improved 40%, no incidents',
      metrics: '847K requests/day handled smoothly',
      coldStart: true
    },
    {
      analysis: 'Security scan: brazil-payment-gateway',
      completedAt: '5 days ago',
      outcome: 'All critical issues resolved before production',
      metrics: 'PCI-DSS compliant, 0 vulnerabilities',
      coldStart: false
    }
  ];

  const getStatusColor = (status) => {
    return status === 'coding' ? 'bg-blue-100 text-blue-700' :
           status === 'ready' ? 'bg-emerald-100 text-emerald-700' :
           status === 'planning' ? 'bg-amber-100 text-amber-700' :
           'bg-gray-100 text-gray-700';
  };

  const getToolkitColor = (color) => {
    const colors = {
      indigo: 'from-indigo-500 to-indigo-600',
      purple: 'from-purple-500 to-purple-600',
      blue: 'from-blue-500 to-blue-600',
      emerald: 'from-emerald-500 to-emerald-600',
      amber: 'from-amber-500 to-amber-600',
      cyan: 'from-cyan-500 to-cyan-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Code className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Developer Hub</h1>
        </div>
        <p className="text-gray-600">
          Start coding with refined requirements, zero clarifications needed
        </p>
      </div>

      {/* Start Your Work - Developer Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Start Your Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {devToolkit.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <button 
                key={idx}
                className={`text-left p-5 bg-gradient-to-br ${getToolkitColor(tool.color)} text-white rounded-lg hover:shadow-lg transition-all`}
              >
                <Icon className="w-8 h-8 mb-3" />
                <h3 className="font-semibold mb-1">{tool.title}</h3>
                <p className="text-sm opacity-90 mb-3">{tool.description}</p>
                <div className="bg-white bg-opacity-10 rounded p-2 mb-3 backdrop-blur-sm">
                  <div className="text-xs opacity-90">Value: {tool.benefit}</div>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  {tool.action}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Developer Impact Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="card-elevated p-6">
          <div className="text-sm text-gray-600 mb-2">Cold-Start Tickets</div>
          <div className="text-3xl font-bold text-gray-900 mb-1">8</div>
          <div className="text-xs text-emerald-600 font-medium">
            0 clarification meetings
          </div>
        </div>

        <div className="card-elevated p-6">
          <div className="text-sm text-gray-600 mb-2">Avg Time to First Code</div>
          <div className="text-3xl font-bold text-gray-900 mb-1">2.3 days</div>
          <div className="text-xs text-gray-600">
            vs 8.7 days before ACP
          </div>
        </div>

        <div className="card-elevated p-6">
          <div className="text-sm text-gray-600 mb-2">Velocity This Sprint</div>
          <div className="text-3xl font-bold text-gray-900 mb-1">74 pts</div>
          <div className="text-xs text-emerald-600 font-medium">
            +221% vs before
          </div>
        </div>

        <div className="card-elevated p-6">
          <div className="text-sm text-gray-600 mb-2">Code Quality</div>
          <div className="text-3xl font-bold text-gray-900 mb-1">94%</div>
          <div className="text-xs text-gray-600">
            Avg across your repos
          </div>
        </div>
      </div>

      {/* Active Development Work */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Your Active Work</h2>
        
        <div className="space-y-6">
          {activeWork.map((work, idx) => (
            <div key={idx} className="card-elevated p-6 hover:shadow-lg transition-all">
              {/* Work Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(work.status)}`}>
                      {work.status === 'coding' ? '🔨 Coding' :
                       work.status === 'ready' ? '✅ Ready to Start' :
                       work.status === 'planning' ? '📋 Planning' :
                       work.status}
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {work.type}
                    </span>
                    {work.clarifications === 0 && (
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                        🎯 Cold-Start
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {work.ticket}: {work.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span>{work.sprint}</span>
                    <span>•</span>
                    <span>Day {work.daysActive}</span>
                    {work.blockers.length > 0 && (
                      <>
                        <span>•</span>
                        <span className="text-amber-600 flex items-center gap-1">
                          <AlertTriangle className="w-4 h-4" />
                          {work.blockers.length} blocker{work.blockers.length !== 1 ? 's' : ''}
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <div className="text-right ml-6">
                  <div className="text-4xl font-bold text-gray-900 mb-1">{work.progress}%</div>
                  <div className="text-sm text-gray-600">Complete</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all"
                  style={{ width: `${work.progress}%` }}
                ></div>
              </div>

              {/* Context */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {Object.entries(work.context).map(([key, value], i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-600 mb-1 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="text-xs font-semibold text-gray-900">{value}</div>
                  </div>
                ))}
              </div>

              {/* AI Insights */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-900">AI Insights from ACP</span>
                </div>
                <ul className="space-y-1.5">
                  {work.aiInsights.map((insight, i) => (
                    <li key={i} className="text-sm text-blue-800">• {insight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Code Quality Insights */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Code Quality Insights</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {codeInsights.map((repo, idx) => (
            <div key={idx} className="card-elevated p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">{repo.repo}</h3>
                <GitBranch className="w-5 h-5 text-gray-400" />
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-blue-50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-blue-600">{repo.quality}%</div>
                  <div className="text-xs text-gray-600">Quality</div>
                </div>
                <div className="bg-emerald-50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-emerald-600">{repo.coverage}%</div>
                  <div className="text-xs text-gray-600">Coverage</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600">Technical Debt</span>
                <span className={`font-semibold ${
                  repo.debt === 'Low' ? 'text-emerald-600' :
                  repo.debt === 'Medium' ? 'text-amber-600' :
                  'text-red-600'
                }`}>{repo.debt}</span>
              </div>

              <div className="flex items-center justify-between text-sm mb-3">
                <span className="text-gray-600">Vulnerabilities</span>
                <span className={`font-semibold ${
                  repo.vulnerabilities === 0 ? 'text-emerald-600' : 'text-red-600'
                }`}>{repo.vulnerabilities}</span>
              </div>

              <div className="text-xs text-gray-500">
                Last analyzed {repo.lastAnalysis}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Completions */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Completions</h2>
        <div className="space-y-4">
          {recentCompletions.map((completion, idx) => (
            <div key={idx} className="card-elevated p-5 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-gray-900">
                      {completion.ticket || completion.analysis}
                      {completion.title && `: ${completion.title}`}
                    </h3>
                    {completion.coldStart && (
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                        Cold-Start
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{completion.completedAt}</div>
                  <div className="bg-emerald-50 border border-emerald-200 rounded p-3 mb-2">
                    <div className="text-xs text-emerald-600 font-medium mb-1">Outcome</div>
                    <div className="text-sm text-emerald-900">{completion.outcome}</div>
                  </div>
                  <div className="text-sm text-gray-700">{completion.metrics}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeveloperHub;

