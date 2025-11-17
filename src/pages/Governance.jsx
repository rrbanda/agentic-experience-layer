import React, { useState } from 'react';
import { 
  Shield, CheckCircle, XCircle, Clock, AlertTriangle,
  User, Lock, FileText, Settings, Eye, CheckSquare,
  TrendingUp, Activity
} from 'lucide-react';

const Governance = () => {
  const [selectedTab, setSelectedTab] = useState('approvals');

  // Pending Approvals
  const pendingApprovals = [
    {
      id: 1,
      type: 'deployment',
      requestedBy: 'Maria Garcia',
      persona: 'Engineer',
      action: 'Deploy payment-service v2.4.1 to production',
      requestedAt: '3 hours ago',
      priority: 'high',
      details: {
        service: 'payment-service',
        version: 'v2.4.1',
        environment: 'production',
        tests: 'All passed',
        securityScan: 'No critical issues',
        impactedUsers: '~840K users'
      },
      approvers: [
        { name: 'Jordan Kim', role: 'Platform Engineer', status: 'pending' }
      ],
      policy: 'Production deployments require platform engineer approval'
    },
    {
      id: 2,
      type: 'agent-creation',
      requestedBy: 'Alex Chen',
      persona: 'Engineer',
      action: 'Deploy custom agent "API Security Validator"',
      requestedAt: '5 hours ago',
      priority: 'medium',
      details: {
        agentType: 'Security Review Agent',
        trainedOn: '347 API security patterns and vulnerabilities',
        testAccuracy: '96%',
        scope: 'All API endpoints'
      },
      approvers: [
        { name: 'Jordan Kim', role: 'Platform Engineer', status: 'pending' }
      ],
      policy: 'Custom agents require platform engineer review'
    },
    {
      id: 3,
      type: 'data-access',
      requestedBy: 'Sarah Parker',
      persona: 'PM',
      action: 'Access production analytics data for "User Retention Analysis"',
      requestedAt: '1 day ago',
      priority: 'low',
      details: {
        dataType: 'User behavior analytics',
        timeRange: 'Last 90 days',
        piiIncluded: 'Yes (anonymized)',
        purpose: 'Product planning for Q2 roadmap'
      },
      approvers: [
        { name: 'Security Team', role: 'Data Governance', status: 'pending' }
      ],
      policy: 'Production data access requires security team approval'
    }
  ];

  // Recent Decisions
  const recentDecisions = [
    {
      id: 1,
      type: 'deployment',
      action: 'Deploy brazil-payment-gateway v1.2.0',
      requestedBy: 'Alex Chen',
      approver: 'Jordan Kim',
      decision: 'approved',
      decidedAt: '2 hours ago',
      comment: 'All checks passed, LGPD compliance verified'
    },
    {
      id: 2,
      type: 'policy-exception',
      action: 'Skip staging deployment for hotfix',
      requestedBy: 'Maria Garcia',
      approver: 'Jordan Kim',
      decision: 'approved',
      decidedAt: '4 hours ago',
      comment: 'Critical security patch, acceptable risk'
    },
    {
      id: 3,
      type: 'agent-creation',
      action: 'Deploy "Cost Optimization Agent"',
      requestedBy: 'Jordan Kim',
      approver: 'Auto-approved',
      decision: 'approved',
      decidedAt: '6 hours ago',
      comment: 'Platform engineer self-approval for non-critical agent'
    },
    {
      id: 4,
      type: 'deployment',
      action: 'Deploy auth-service v3.0.0 (breaking changes)',
      requestedBy: 'Sarah Parker',
      approver: 'Jordan Kim',
      decision: 'rejected',
      decidedAt: '1 day ago',
      comment: 'Insufficient testing for breaking changes, requires additional UAT'
    }
  ];

  // Active Policies
  const policies = [
    {
      id: 1,
      name: 'Production Deployment Policy',
      description: 'All production deployments require platform engineer approval',
      scope: 'Production environment',
      enforced: true,
      violations: 0,
      appliesTo: ['Engineer', 'Senior Engineer'],
      exceptions: ['Platform Engineer (self-approval)'],
      lastUpdated: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Custom Agent Review',
      description: 'New custom agents must pass security and accuracy review',
      scope: 'All custom agents',
      enforced: true,
      violations: 0,
      appliesTo: ['Engineer', 'PM', 'Platform Engineer'],
      requirements: ['96% accuracy threshold', 'Security scan', 'Platform engineer approval'],
      lastUpdated: '3 weeks ago'
    },
    {
      id: 3,
      name: 'Data Access Governance',
      description: 'Production data access requires security team approval',
      scope: 'Production databases',
      enforced: true,
      violations: 2,
      appliesTo: ['PM', 'Engineer', 'Analyst'],
      exceptions: ['Read-only analytics (anonymized)'],
      lastUpdated: '1 week ago'
    },
    {
      id: 4,
      name: 'Engineering Council Threshold',
      description: 'High-complexity features require Engineering Council validation',
      scope: 'All new features',
      enforced: false,
      violations: 0,
      appliesTo: ['PM'],
      requirements: ['Complexity score > 7', 'Cross-team dependencies', 'Architecture changes'],
      lastUpdated: '4 weeks ago'
    }
  ];

  // Compliance Status
  const complianceMetrics = [
    {
      framework: 'SOC2 Type II',
      status: 'compliant',
      score: 98,
      lastAudit: '2 months ago',
      nextAudit: 'In 4 months',
      findings: 0,
      controls: 47
    },
    {
      framework: 'GDPR',
      status: 'compliant',
      score: 96,
      lastAudit: '1 month ago',
      nextAudit: 'In 5 months',
      findings: 2,
      controls: 23
    },
    {
      framework: 'LGPD (Brazil)',
      status: 'compliant',
      score: 94,
      lastAudit: '3 weeks ago',
      nextAudit: 'In 5 months',
      findings: 3,
      controls: 18
    },
    {
      framework: 'PCI-DSS',
      status: 'review',
      score: 89,
      lastAudit: '2 weeks ago',
      nextAudit: 'In 2 weeks',
      findings: 4,
      controls: 34
    }
  ];

  // Audit Trail Stats
  const auditStats = [
    { label: 'Total Actions Logged', value: '12,847', period: 'This Month' },
    { label: 'Policy Violations', value: '2', period: 'This Month' },
    { label: 'Auto-Approved', value: '89%', period: 'Within Policy' },
    { label: 'Manual Reviews', value: '11%', period: 'Required Approval' }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'low': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getDecisionIcon = (decision) => {
    switch (decision) {
      case 'approved': return <CheckCircle className="w-5 h-5 text-emerald-600" />;
      case 'rejected': return <XCircle className="w-5 h-5 text-red-600" />;
      case 'pending': return <Clock className="w-5 h-5 text-amber-600" />;
      default: return <AlertTriangle className="w-5 h-5 text-gray-600" />;
    }
  };

  const getComplianceColor = (status) => {
    switch (status) {
      case 'compliant': return 'text-emerald-600';
      case 'review': return 'text-amber-600';
      case 'non-compliant': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Shield className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Governance</h1>
        </div>
        <p className="text-gray-600">
          Policies, approvals, compliance, and audit trails
        </p>
      </div>

      {/* Audit Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {auditStats.map((stat, idx) => (
          <div key={idx} className="card-elevated p-6">
            <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm font-semibold text-gray-700 mb-1">{stat.label}</div>
            <div className="text-xs text-gray-600">{stat.period}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="flex gap-2 border-b border-gray-200">
          {[
            { id: 'approvals', label: 'Pending Approvals', count: pendingApprovals.length },
            { id: 'decisions', label: 'Recent Decisions', count: recentDecisions.length },
            { id: 'policies', label: 'Active Policies', count: policies.length },
            { id: 'compliance', label: 'Compliance', count: complianceMetrics.length }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-4 py-3 font-medium text-sm transition-colors relative ${
                selectedTab === tab.id
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                selectedTab === tab.id
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {tab.count}
              </span>
              {selectedTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Pending Approvals Tab */}
      {selectedTab === 'approvals' && (
        <div className="space-y-6">
          {pendingApprovals.length === 0 ? (
            <div className="card-elevated p-12 text-center">
              <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">All caught up!</h3>
              <p className="text-gray-600">No pending approvals at the moment</p>
            </div>
          ) : (
            pendingApprovals.map((approval) => (
              <div key={approval.id} className="card-elevated p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs border px-2 py-1 rounded-full ${getPriorityColor(approval.priority)}`}>
                        {approval.priority.toUpperCase()} PRIORITY
                      </span>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {approval.type === 'deployment' ? 'Deployment' :
                         approval.type === 'agent-creation' ? 'Custom Agent' :
                         'Data Access'}
                      </span>
                      <span className="text-sm text-gray-500">{approval.requestedAt}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{approval.action}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="w-4 h-4" />
                      <span>Requested by <strong>{approval.requestedBy}</strong> ({approval.persona})</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Approve
                    </button>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2">
                      <XCircle className="w-4 h-4" />
                      Reject
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {Object.entries(approval.details).map(([key, value], idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-3">
                      <div className="text-xs text-gray-600 mb-1">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      <div className="text-sm font-semibold text-gray-900">{value}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <div className="flex items-start gap-2">
                    <Lock className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-blue-600 font-medium mb-1">Policy</div>
                      <div className="text-sm text-blue-900">{approval.policy}</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">Awaiting approval from:</span>
                  {approval.approvers.map((approver, idx) => (
                    <div key={idx} className="flex items-center gap-2 px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">{approver.name}</span>
                      <span className="text-xs">({approver.role})</span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Recent Decisions Tab */}
      {selectedTab === 'decisions' && (
        <div className="space-y-4">
          {recentDecisions.map((decision) => (
            <div key={decision.id} className="card-elevated p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-1">
                  {getDecisionIcon(decision.decision)}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{decision.action}</h3>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <span>Requested by <strong>{decision.requestedBy}</strong></span>
                        <span>•</span>
                        <span>Decided by <strong>{decision.approver}</strong></span>
                        <span>•</span>
                        <span>{decision.decidedAt}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      decision.decision === 'approved' ? 'bg-emerald-100 text-emerald-700' :
                      decision.decision === 'rejected' ? 'bg-red-100 text-red-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {decision.decision.charAt(0).toUpperCase() + decision.decision.slice(1)}
                    </span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-600 mb-1">Decision Comment</div>
                    <div className="text-sm text-gray-900">{decision.comment}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Active Policies Tab */}
      {selectedTab === 'policies' && (
        <div className="space-y-6">
          {policies.map((policy) => (
            <div key={policy.id} className="card-elevated p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{policy.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      policy.enforced
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {policy.enforced ? 'Enforced' : 'Advisory'}
                    </span>
                    {policy.violations > 0 && (
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                        {policy.violations} violation{policy.violations !== 1 ? 's' : ''}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-3">{policy.description}</p>
                  <div className="text-xs text-gray-500">
                    Scope: {policy.scope} • Last updated {policy.lastUpdated}
                  </div>
                </div>
                <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Edit
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-xs text-blue-600 font-medium mb-2">Applies To</div>
                  <div className="flex flex-wrap gap-2">
                    {policy.appliesTo.map((persona, idx) => (
                      <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {persona}
                      </span>
                    ))}
                  </div>
                </div>

                {policy.exceptions && (
                  <div className="bg-amber-50 rounded-lg p-4">
                    <div className="text-xs text-amber-600 font-medium mb-2">Exceptions</div>
                    <div className="flex flex-wrap gap-2">
                      {policy.exceptions.map((exception, idx) => (
                        <span key={idx} className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">
                          {exception}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {policy.requirements && (
                  <div className="bg-purple-50 rounded-lg p-4 md:col-span-2">
                    <div className="text-xs text-purple-600 font-medium mb-2">Requirements</div>
                    <div className="flex flex-wrap gap-2">
                      {policy.requirements.map((req, idx) => (
                        <span key={idx} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Compliance Tab */}
      {selectedTab === 'compliance' && (
        <div className="space-y-6">
          {complianceMetrics.map((metric, idx) => (
            <div key={idx} className="card-elevated p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{metric.framework}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      metric.status === 'compliant' ? 'bg-emerald-100 text-emerald-700' :
                      metric.status === 'review' ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {metric.status.charAt(0).toUpperCase() + metric.status.slice(1)}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Compliance Score</div>
                      <div className={`text-2xl font-bold ${getComplianceColor(metric.status)}`}>
                        {metric.score}%
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Active Controls</div>
                      <div className="text-2xl font-bold text-gray-900">{metric.controls}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Open Findings</div>
                      <div className={`text-2xl font-bold ${metric.findings === 0 ? 'text-emerald-600' : 'text-amber-600'}`}>
                        {metric.findings}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Next Audit</div>
                      <div className="text-sm font-semibold text-gray-900">{metric.nextAudit}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>Last audit: {metric.lastAudit}</span>
                  </div>
                </div>

                <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  View Report
                </button>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full transition-all ${
                    metric.status === 'compliant' ? 'bg-emerald-500' :
                    metric.status === 'review' ? 'bg-amber-500' :
                    'bg-red-500'
                  }`}
                  style={{ width: `${metric.score}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Governance;

