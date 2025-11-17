import React, { useState } from 'react';
import { 
  Link2, GitBranch, Target, FileText, Activity, Shield,
  Database, Cloud, Code, TrendingUp, CheckCircle, 
  AlertCircle, Settings, Plus, RefreshCw, ExternalLink
} from 'lucide-react';

const ConnectedSystems = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Connected Systems
  const systems = [
    {
      id: 1,
      name: 'GitHub',
      category: 'scm',
      status: 'healthy',
      icon: GitBranch,
      color: 'blue',
      description: 'Source code management and version control',
      connected: true,
      lastSync: '2 minutes ago',
      stats: {
        repositories: 47,
        pullRequests: 23,
        branches: 187,
        commits: '2.4K this month'
      },
      dataProvided: [
        'Code standards and patterns',
        'Technical debt tracking',
        'Commit history and authorship',
        'Branch and PR workflows'
      ],
      usedBy: ['Engineering Council', 'Code Analysis', 'Custom Agents'],
      config: {
        organization: 'acme-corp',
        accessLevel: 'Read + Write',
        webhooks: 'Enabled'
      }
    },
    {
      id: 2,
      name: 'Jira',
      category: 'project',
      status: 'healthy',
      icon: Target,
      color: 'purple',
      description: 'Project management and issue tracking',
      connected: true,
      lastSync: '5 minutes ago',
      stats: {
        activeTickets: 234,
        epics: 12,
        sprints: 'Sprint 47 (Day 8/14)',
        velocity: '74 pts/sprint'
      },
      dataProvided: [
        'Backlog and active tickets',
        'RICE scores and priorities',
        'Team velocity and capacity',
        'Sprint burndown data'
      ],
      usedBy: ['Engineering Council', 'Cold-Start Tickets', 'PM Command Center'],
      config: {
        project: 'ACME',
        accessLevel: 'Read + Write',
        customFields: '12 mapped'
      }
    },
    {
      id: 3,
      name: 'Confluence',
      category: 'docs',
      status: 'healthy',
      icon: FileText,
      color: 'emerald',
      description: 'Documentation and knowledge management',
      connected: true,
      lastSync: '12 minutes ago',
      stats: {
        pages: '1,247',
        spaces: 8,
        rfcs: 34,
        updated: '47 pages this week'
      },
      dataProvided: [
        'Architecture decisions and RFCs',
        'Team processes and runbooks',
        'Technical documentation',
        'Design specifications'
      ],
      usedBy: ['Engineering Council', 'Code Analysis', 'Documentation Generation'],
      config: {
        space: 'Engineering, Product',
        accessLevel: 'Read only',
        searchEnabled: true
      }
    },
    {
      id: 4,
      name: 'Datadog',
      category: 'observability',
      status: 'healthy',
      icon: Activity,
      color: 'amber',
      description: 'Monitoring, logging, and observability',
      connected: true,
      lastSync: '1 minute ago',
      stats: {
        services: 89,
        alerts: '3 active',
        uptime: '99.97%',
        metrics: '2.4M/day'
      },
      dataProvided: [
        'Performance metrics and SLOs',
        'Error rates and anomalies',
        'Resource utilization',
        'User behavior analytics'
      ],
      usedBy: ['Engineering Council', 'Value & Outcomes', 'Incident Analysis'],
      config: {
        environment: 'production, staging',
        accessLevel: 'Read only',
        retention: '90 days'
      }
    },
    {
      id: 5,
      name: 'AWS Cost Explorer',
      category: 'finops',
      status: 'healthy',
      icon: TrendingUp,
      color: 'cyan',
      description: 'Cloud cost management and optimization',
      connected: true,
      lastSync: '30 minutes ago',
      stats: {
        monthlySpend: '$47.2K',
        forecast: '$52.8K',
        savings: '$8.4K identified',
        accounts: 4
      },
      dataProvided: [
        'Resource costs and forecasts',
        'Budget tracking',
        'Optimization recommendations',
        'Cost allocation by team'
      ],
      usedBy: ['Engineering Council', 'Value & Outcomes', 'Custom Agents'],
      config: {
        accounts: '4 linked',
        accessLevel: 'Read only',
        budgetAlerts: 'Enabled'
      }
    },
    {
      id: 6,
      name: 'Security Scanner',
      category: 'security',
      status: 'healthy',
      icon: Shield,
      color: 'indigo',
      description: 'Security scanning and compliance',
      connected: true,
      lastSync: '10 minutes ago',
      stats: {
        scans: '847 this month',
        criticalIssues: 0,
        highIssues: 3,
        compliance: 'SOC2, GDPR, PCI-DSS'
      },
      dataProvided: [
        'Vulnerability scans',
        'Compliance status',
        'Security policies',
        'Audit logs'
      ],
      usedBy: ['Engineering Council', 'Code Analysis', 'Governance'],
      config: {
        scanFrequency: 'On every PR',
        accessLevel: 'Read only',
        policies: '23 active'
      }
    },
    {
      id: 7,
      name: 'Kubernetes',
      category: 'infrastructure',
      status: 'warning',
      icon: Cloud,
      color: 'pink',
      description: 'Container orchestration and deployment',
      connected: true,
      lastSync: '45 minutes ago (delayed)',
      stats: {
        clusters: 3,
        pods: 247,
        services: 89,
        deployments: '12 this week'
      },
      dataProvided: [
        'Cluster configurations',
        'Resource quotas and limits',
        'Deployment history',
        'Service mesh topology'
      ],
      usedBy: ['Engineering Council', 'Orchestrations', 'Infrastructure Analysis'],
      config: {
        clusters: 'prod, staging, dev',
        accessLevel: 'Read only',
        namespaces: '47 monitored'
      }
    },
    {
      id: 8,
      name: 'Slack',
      category: 'communication',
      status: 'healthy',
      icon: Code,
      color: 'rose',
      description: 'Team communication and notifications',
      connected: true,
      lastSync: '1 minute ago',
      stats: {
        channels: 127,
        members: 89,
        messages: '4.2K today',
        integrations: 'ACP notifications'
      },
      dataProvided: [
        'Team discussions',
        'Incident communications',
        'Decision context',
        'Real-time notifications'
      ],
      usedBy: ['Live Activity', 'Notifications', 'Context Enrichment'],
      config: {
        workspace: 'acme-engineering',
        accessLevel: 'Read + Write',
        channels: '#engineering, #product'
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Systems', count: systems.length },
    { id: 'scm', label: 'Source Control', count: systems.filter(s => s.category === 'scm').length },
    { id: 'project', label: 'Project Management', count: systems.filter(s => s.category === 'project').length },
    { id: 'observability', label: 'Observability', count: systems.filter(s => s.category === 'observability').length },
    { id: 'security', label: 'Security', count: systems.filter(s => s.category === 'security').length },
    { id: 'infrastructure', label: 'Infrastructure', count: systems.filter(s => s.category === 'infrastructure').length }
  ];

  const integrationStats = [
    { label: 'Connected Systems', value: '8', status: '7 healthy, 1 warning' },
    { label: 'Data Synced', value: '2.4M', status: 'Records this month' },
    { label: 'API Calls', value: '847K', status: 'This month' },
    { label: 'Uptime', value: '99.97%', status: 'Last 30 days' }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'healthy': return <CheckCircle className="w-5 h-5 text-emerald-600" />;
      case 'warning': return <AlertCircle className="w-5 h-5 text-amber-600" />;
      case 'error': return <AlertCircle className="w-5 h-5 text-red-600" />;
      default: return <Activity className="w-5 h-5 text-gray-600" />;
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-500',
      purple: 'bg-purple-500',
      emerald: 'bg-emerald-500',
      amber: 'bg-amber-500',
      cyan: 'bg-cyan-500',
      indigo: 'bg-indigo-500',
      pink: 'bg-pink-500',
      rose: 'bg-rose-500'
    };
    return colors[color] || colors.blue;
  };

  const filteredSystems = selectedCategory === 'all' 
    ? systems 
    : systems.filter(s => s.category === selectedCategory);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Link2 className="w-8 h-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">Connected Systems</h1>
            </div>
            <p className="text-gray-600">
              Internal context that powers ACP's intelligence
            </p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Integration
          </button>
        </div>
      </div>

      {/* Integration Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {integrationStats.map((stat, idx) => (
          <div key={idx} className="card-elevated p-6">
            <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm font-semibold text-gray-700 mb-1">{stat.label}</div>
            <div className="text-xs text-gray-600">{stat.status}</div>
          </div>
        ))}
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <span className="text-sm font-medium">{category.label}</span>
              <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                selectedCategory === category.id
                  ? 'bg-white bg-opacity-20'
                  : 'bg-gray-100'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Systems Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredSystems.map((system) => {
          const Icon = system.icon;
          return (
            <div key={system.id} className="card-elevated p-6 hover:shadow-lg transition-all">
              {/* System Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${getColorClasses(system.color)} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{system.name}</h3>
                    <p className="text-sm text-gray-600">{system.description}</p>
                  </div>
                </div>
                {getStatusIcon(system.status)}
              </div>

              {/* Last Sync */}
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <RefreshCw className="w-4 h-4" />
                <span>Last sync: {system.lastSync}</span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {Object.entries(system.stats).map(([key, value], idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-600 mb-1">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="text-sm font-semibold text-gray-900">{value}</div>
                  </div>
                ))}
              </div>

              {/* Data Provided */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <div className="text-xs text-blue-600 font-medium mb-2">Data Provided to ACP</div>
                <ul className="space-y-1">
                  {system.dataProvided.map((data, idx) => (
                    <li key={idx} className="text-xs text-blue-900">• {data}</li>
                  ))}
                </ul>
              </div>

              {/* Used By */}
              <div className="mb-4">
                <div className="text-xs text-gray-600 font-medium mb-2">Used By</div>
                <div className="flex flex-wrap gap-2">
                  {system.usedBy.map((usage, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {usage}
                    </span>
                  ))}
                </div>
              </div>

              {/* Configuration */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="text-xs text-gray-600 font-medium mb-2">Configuration</div>
                <div className="space-y-1">
                  {Object.entries(system.config).map(([key, value], idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </span>
                      <span className="font-semibold text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <Settings className="w-4 h-4" />
                  Configure
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Available Integrations */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Available Integrations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { name: 'GitLab', icon: GitBranch },
            { name: 'Bitbucket', icon: GitBranch },
            { name: 'Azure DevOps', icon: Cloud },
            { name: 'Jenkins', icon: Activity },
            { name: 'CircleCI', icon: Activity },
            { name: 'Terraform', icon: Cloud },
            { name: 'Ansible', icon: Settings },
            { name: 'Prometheus', icon: TrendingUp },
            { name: 'Grafana', icon: Activity },
            { name: 'New Relic', icon: Activity },
            { name: 'Splunk', icon: Database },
            { name: 'PagerDuty', icon: AlertCircle }
          ].map((integration, idx) => {
            const Icon = integration.icon;
            return (
              <button
                key={idx}
                className="card-elevated p-4 hover:shadow-lg transition-all text-center"
              >
                <Icon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">{integration.name}</div>
                <div className="text-xs text-gray-500 mt-1">Connect</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ConnectedSystems;

