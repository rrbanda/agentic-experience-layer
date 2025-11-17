import React from 'react';
import { 
  Target, TrendingUp, Users, Zap, Bot, FileText, 
  CheckCircle, Clock, ArrowRight, BarChart3, Lightbulb
} from 'lucide-react';

const PMHub = () => {
  // PM's Active Products
  const activeProducts = [
    {
      name: 'Brazil Payment Gateway',
      phase: 'Value Realization',
      daysLive: 21,
      users: '2,400',
      revenue: '$180,000',
      satisfaction: 4.7,
      progress: 85,
      status: 'healthy',
      nextAction: 'Review customer feedback analytics',
      aiInsights: [
        'Pix integration receiving positive mentions (234 reviews)',
        'Boleto UX improvement recommended (47 support tickets)',
        'Mobile performance optimization needed in São Paulo region'
      ]
    },
    {
      name: 'Payment Retry Mechanism',
      phase: 'Production Monitoring',
      daysLive: 4,
      users: '8,400',
      revenue: '$42,350',
      recoveredTransactions: 847,
      progress: 95,
      status: 'healthy',
      nextAction: 'Set up 30-day value tracking',
      aiInsights: [
        'Failed payment recovery rate: 67% (exceeds 50% target)',
        'Customer complaint reduction: 67%',
        'Recommended: Expand to subscription payments'
      ]
    },
    {
      name: 'Auth Service Modernization',
      phase: 'Agent Council Planning',
      estimatedSprints: 5,
      complexity: 'High',
      progress: 15,
      status: 'planning',
      nextAction: 'Review multi-agent analysis',
      aiInsights: [
        'Agent council identified 8 technical constraints',
        '12 downstream services will be affected',
        'Security agent flagged GDPR compliance requirements'
      ]
    }
  ];

  // PM Toolkit - AI Capabilities
  const pmToolkit = [
    {
      icon: Bot,
      title: 'Start Agent Council',
      description: 'Get AI expert opinions on requirements',
      color: 'purple',
      action: 'Launch Planning Session'
    },
    {
      icon: Zap,
      title: 'Rapid Prototype',
      description: 'AI builds working POC in hours',
      color: 'blue',
      action: 'Generate Prototype'
    },
    {
      icon: BarChart3,
      title: 'Analyze Market',
      description: 'AI competitive research & trends',
      color: 'emerald',
      action: 'Run Analysis'
    },
    {
      icon: FileText,
      title: 'Generate Spec',
      description: 'AI technical documentation',
      color: 'amber',
      action: 'Create Document'
    },
    {
      icon: Users,
      title: 'Synthesize Feedback',
      description: 'AI analyzes all customer sources',
      color: 'pink',
      action: 'Analyze Feedback'
    },
    {
      icon: Lightbulb,
      title: 'Validate Idea',
      description: 'AI A/B test & prototype validation',
      color: 'indigo',
      action: 'Start Validation'
    }
  ];

  // PM Impact Metrics
  const impactMetrics = [
    { label: 'Ideas Validated', value: '12', previous: '3', period: 'This Quarter' },
    { label: 'Features Shipped', value: '8', previous: '2', period: 'This Quarter' },
    { label: 'Value Realized', value: '$580K', previous: '$170K', period: 'This Quarter' },
    { label: 'Avg Time to Market', value: '31 days', previous: '14 weeks', period: 'Current' }
  ];

  const getStatusColor = (status) => {
    return status === 'healthy' ? 'emerald' :
           status === 'warning' ? 'amber' :
           status === 'planning' ? 'blue' : 'gray';
  };

  const getToolkitColor = (color) => {
    const colors = {
      purple: 'from-purple-500 to-purple-600',
      blue: 'from-blue-500 to-blue-600',
      emerald: 'from-emerald-500 to-emerald-600',
      amber: 'from-amber-500 to-amber-600',
      pink: 'from-pink-500 to-pink-600',
      indigo: 'from-indigo-500 to-indigo-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Target className="w-8 h-8 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-900">PM Hub</h1>
        </div>
        <p className="text-gray-600">
          End-to-end product ownership: Discovery → Design → Develop → Deploy → Deliver
        </p>
      </div>

      {/* Start Your Work - PM Actions */}
      <div className="card-elevated p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Start Your Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pmToolkit.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <button 
                key={idx}
                className={`text-left p-5 bg-gradient-to-br ${getToolkitColor(tool.color)} text-white rounded-lg hover:shadow-lg transition-all`}
              >
                <Icon className="w-8 h-8 mb-3" />
                <h3 className="font-semibold mb-1">{tool.title}</h3>
                <p className="text-sm opacity-90 mb-4">{tool.description}</p>
                <div className="flex items-center gap-2 text-sm font-medium mt-auto">
                  {tool.action}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* PM Impact Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {impactMetrics.map((metric, idx) => (
          <div key={idx} className="card-elevated p-5">
            <div className="text-sm text-gray-600 mb-2">{metric.label}</div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-emerald-600 font-medium">vs {metric.previous}</span>
              <span className="text-gray-500">• {metric.period}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Active Product Workstreams */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Your Active Workstreams</h2>
        
        <div className="space-y-6">
          {activeProducts.map((product, idx) => (
            <div key={idx} className="card-elevated p-6 hover:shadow-lg transition-all">
              {/* Product Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      product.status === 'healthy' ? 'bg-emerald-100 text-emerald-700' :
                      product.status === 'warning' ? 'bg-amber-100 text-amber-700' :
                      product.status === 'planning' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {product.phase}
                    </span>
                  </div>
                  
                  {/* PDLC Journey */}
                  <div className="flex items-center gap-2 text-xs text-gray-600 mb-4">
                    <span className={product.progress >= 20 ? 'text-emerald-600 font-medium' : ''}>Discovery</span>
                    <span>→</span>
                    <span className={product.progress >= 40 ? 'text-emerald-600 font-medium' : ''}>Design</span>
                    <span>→</span>
                    <span className={product.progress >= 60 ? 'text-emerald-600 font-medium' : ''}>Develop</span>
                    <span>→</span>
                    <span className={product.progress >= 80 ? 'text-emerald-600 font-medium' : ''}>Deploy</span>
                    <span>→</span>
                    <span className={product.progress >= 85 ? 'text-blue-600 font-medium' : ''}>Deliver</span>
                  </div>

                  {/* Metrics */}
                  {product.users && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-600 mb-1">Users</div>
                        <div className="text-lg font-bold text-gray-900">{product.users}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-600 mb-1">Revenue</div>
                        <div className="text-lg font-bold text-gray-900">{product.revenue}</div>
                      </div>
                      {product.satisfaction && (
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-xs text-gray-600 mb-1">Satisfaction</div>
                          <div className="text-lg font-bold text-gray-900">{product.satisfaction}/5.0</div>
                        </div>
                      )}
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-600 mb-1">Days Live</div>
                        <div className="text-lg font-bold text-gray-900">{product.daysLive}</div>
                      </div>
                    </div>
                  )}

                  {product.estimatedSprints && (
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-600 mb-1">Estimated</div>
                        <div className="text-lg font-bold text-gray-900">{product.estimatedSprints} sprints</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-600 mb-1">Complexity</div>
                        <div className="text-lg font-bold text-gray-900">{product.complexity}</div>
                      </div>
                    </div>
                  )}

                  {/* AI Insights */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-semibold text-blue-900">AI Insights</span>
                    </div>
                    <ul className="space-y-1.5">
                      {product.aiInsights.map((insight, i) => (
                        <li key={i} className="text-sm text-blue-800">• {insight}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Next Action */}
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">Next:</span>
                    <span className="font-medium text-gray-900">{product.nextAction}</span>
                  </div>
                </div>

                <div className="ml-6 text-right">
                  <div className="text-4xl font-bold text-gray-900 mb-1">{product.progress}%</div>
                  <div className="text-sm text-gray-600">Complete</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div 
                  className={`bg-gradient-to-r from-${getStatusColor(product.status)}-500 to-${getStatusColor(product.status)}-600 h-3 rounded-full transition-all`}
                  style={{ width: `${product.progress}%` }}
                ></div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <TrendingUp className="w-4 h-4" />
                  View Analytics
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Users className="w-4 h-4" />
                  Customer Feedback
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default PMHub;

