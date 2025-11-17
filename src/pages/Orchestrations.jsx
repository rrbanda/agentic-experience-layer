import React, { useState } from 'react';
import { 
  Zap, Check, Loader, Clock, Eye, Play, Database, Shield, 
  GitBranch, Server, Activity, ChevronRight, AlertCircle
} from 'lucide-react';

const Orchestrations = () => {
  const [selectedOrch, setSelectedOrch] = useState(null);

  // Active Orchestrations
  const orchestrations = [
    {
      id: 'orch-001',
      title: 'Deploy Payment Retry Logic',
      triggeredBy: 'Alex Chen',
      tool: 'Cursor IDE',
      status: 'awaiting-approval',
      phase: 'Approval Required',
      startTime: '8 minutes ago',
      systems: ['GitHub', 'Jenkins', 'OpenShift', 'Datadog'],
      impact: {
        services: 1,
        dependencies: 3,
        users: '8,400',
        risk: 'Low'
      },
      steps: [
        {
          phase: 'Context Analysis',
          status: 'complete',
          duration: '0.3s',
          details: 'Retrieved service graph, dependencies, ownership'
        },
        {
          phase: 'Governance Check',
          status: 'complete',
          duration: '0.8s',
          details: 'RBAC validated, policies checked, compliance verified'
        },
        {
          phase: 'Code & Build',
          status: 'complete',
          duration: '2m 14s',
          details: 'PR created, CI passed, staging deployed'
        },
        {
          phase: 'Approval Gate',
          status: 'pending',
          duration: '-',
          details: 'Awaiting platform team approval'
        },
        {
          phase: 'Production Deploy',
          status: 'pending',
          duration: '-',
          details: 'Blue-green deployment with rollback'
        }
      ]
    },
    {
      id: 'orch-002',
      title: 'Brazil Gateway Integration',
      triggeredBy: 'Sarah Parker',
      tool: 'Claude Desktop',
      status: 'executing',
      phase: 'Production Deploy',
      startTime: '23 minutes ago',
      systems: ['GitHub', 'ArgoCD', 'OpenShift', 'Ansible'],
      impact: {
        services: 3,
        dependencies: 7,
        users: '2,400',
        risk: 'Medium'
      },
      steps: [
        {
          phase: 'Context Analysis',
          status: 'complete',
          duration: '0.4s',
          details: 'Multi-agent planning session completed'
        },
        {
          phase: 'Governance Check',
          status: 'complete',
          duration: '1.2s',
          details: 'LGPD compliance validated'
        },
        {
          phase: 'Code & Build',
          status: 'complete',
          duration: '8m 47s',
          details: 'All tests passed, security scans clear'
        },
        {
          phase: 'Approval Gate',
          status: 'complete',
          duration: '2h 15m',
          details: 'Approved by Jordan Kim'
        },
        {
          phase: 'Production Deploy',
          status: 'executing',
          duration: '4m 12s...',
          details: 'Rolling deployment in progress (67%)'
        }
      ]
    },
    {
      id: 'orch-003',
      title: 'Auth Service Dependency Update',
      triggeredBy: 'Jordan Kim',
      tool: 'VS Code Copilot',
      status: 'complete',
      phase: 'Complete',
      startTime: '2 hours ago',
      systems: ['GitHub', 'Jenkins', 'OpenShift'],
      impact: {
        services: 1,
        dependencies: 0,
        users: '12,000',
        risk: 'Low'
      },
      steps: [
        {
          phase: 'Context Analysis',
          status: 'complete',
          duration: '0.2s',
          details: 'Service context retrieved'
        },
        {
          phase: 'Governance Check',
          status: 'complete',
          duration: '0.5s',
          details: 'All checks passed'
        },
        {
          phase: 'Code & Build',
          status: 'complete',
          duration: '1m 54s',
          details: 'Build successful'
        },
        {
          phase: 'Approval Gate',
          status: 'complete',
          duration: '8m',
          details: 'Auto-approved (low risk)'
        },
        {
          phase: 'Production Deploy',
          status: 'complete',
          duration: '3m 22s',
          details: 'Deployment successful'
        }
      ]
    }
  ];

  const getStatusConfig = (status) => {
    const configs = {
      'awaiting-approval': {
        color: 'amber',
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-200',
        textColor: 'text-amber-700',
        icon: Eye
      },
      'executing': {
        color: 'blue',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        textColor: 'text-blue-700',
        icon: Loader
      },
      'complete': {
        color: 'emerald',
        bgColor: 'bg-emerald-50',
        borderColor: 'border-emerald-200',
        textColor: 'text-emerald-700',
        icon: Check
      }
    };
    return configs[status] || configs['executing'];
  };

  const getStepStatusIcon = (status) => {
    if (status === 'complete') return <Check className="w-5 h-5 text-emerald-600" />;
    if (status === 'executing') return <Loader className="w-5 h-5 text-blue-600 animate-spin" />;
    if (status === 'pending') return <Clock className="w-5 h-5 text-gray-400" />;
    return <AlertCircle className="w-5 h-5 text-amber-600" />;
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-8 h-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">Orchestrations</h1>
            </div>
            <p className="text-gray-600">
              Multi-system workflows orchestrated across your enterprise
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">3</div>
              <div className="text-sm text-gray-600">Active</div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">47</div>
              <div className="text-sm text-gray-600">This Week</div>
            </div>
          </div>
        </div>
      </div>

      {/* Orchestration List */}
      <div className="space-y-6">
        {orchestrations.map((orch) => {
          const statusConfig = getStatusConfig(orch.status);
          const StatusIcon = statusConfig.icon;
          
          return (
            <div 
              key={orch.id}
              className={`card-elevated p-6 hover:shadow-lg transition-all cursor-pointer ${
                selectedOrch === orch.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedOrch(selectedOrch === orch.id ? null : orch.id)}
            >
              {/* Orchestration Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{orch.title}</h3>
                    <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${statusConfig.bgColor} ${statusConfig.textColor}`}>
                      <StatusIcon className="w-3.5 h-3.5" />
                      {orch.phase}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>Triggered by <strong>{orch.triggeredBy}</strong></span>
                    <span>via {orch.tool}</span>
                    <span>{orch.startTime}</span>
                  </div>
                </div>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${
                  selectedOrch === orch.id ? 'rotate-90' : ''
                }`} />
              </div>

              {/* Systems & Impact */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600 mb-1">Systems</div>
                  <div className="text-sm font-semibold text-gray-900">
                    {orch.systems.join(', ')}
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600 mb-1">Services</div>
                  <div className="text-lg font-bold text-gray-900">{orch.impact.services}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600 mb-1">Users Affected</div>
                  <div className="text-lg font-bold text-gray-900">{orch.impact.users}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600 mb-1">Risk Level</div>
                  <div className={`text-lg font-bold ${
                    orch.impact.risk === 'Low' ? 'text-emerald-600' :
                    orch.impact.risk === 'Medium' ? 'text-amber-600' :
                    'text-red-600'
                  }`}>{orch.impact.risk}</div>
                </div>
              </div>

              {/* Orchestration Steps */}
              {selectedOrch === orch.id && (
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Orchestration Pipeline</h4>
                  <div className="space-y-4">
                    {orch.steps.map((step, idx) => (
                      <div 
                        key={idx}
                        className={`flex items-start gap-4 p-4 rounded-lg ${
                          step.status === 'complete' ? 'bg-emerald-50' :
                          step.status === 'executing' ? 'bg-blue-50' :
                          'bg-gray-50'
                        }`}
                      >
                        <div className="flex-shrink-0 mt-1">
                          {getStepStatusIcon(step.status)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h5 className="font-semibold text-gray-900">{step.phase}</h5>
                            <span className="text-sm text-gray-600">{step.duration}</span>
                          </div>
                          <p className="text-sm text-gray-700">{step.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  {orch.status === 'awaiting-approval' && (
                    <div className="mt-6 flex gap-3">
                      <button className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                        <Check className="w-5 h-5" />
                        Approve & Execute
                      </button>
                      <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                        Request Changes
                      </button>
                      <button className="flex items-center gap-2 px-6 py-3 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors font-medium">
                        Reject
                      </button>
                    </div>
                  )}

                  {orch.status === 'executing' && (
                    <div className="mt-6">
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                        <span>Deployment Progress</span>
                        <span>67%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all animate-pulse"
                          style={{ width: '67%' }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {orchestrations.length === 0 && (
        <div className="card-elevated p-12 text-center">
          <Zap className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Active Orchestrations</h3>
          <p className="text-gray-600 mb-6">
            Orchestrations will appear here when AI tools trigger multi-system workflows
          </p>
        </div>
      )}
    </div>
  );
};

export default Orchestrations;

