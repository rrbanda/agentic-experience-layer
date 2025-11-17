import React, { useState } from 'react';
import { 
  Zap, Check, Loader, Clock, Eye, Play, Database, Shield, 
  GitBranch, Server, Activity, ChevronRight, AlertCircle, Target, Bot
} from 'lucide-react';

const Orchestrations = ({ persona = 'Product Manager' }) => {
  const [selectedOrch, setSelectedOrch] = useState(null);

  // Real orchestrations - what AEP actually does
  const allOrchestrations = [
    // PM-initiated: ACP Engineering Council → Jira Tickets
    {
      id: 'orch-001',
      title: 'Generate Cold-Start Tickets for Auth Modernization',
      triggeredBy: 'Sarah Parker (PM)',
      tool: 'ACP Engineering Council',
      initiatedFrom: 'PM Hub',
      status: 'complete',
      phase: 'Complete',
      startTime: '2 hours ago',
      type: 'acp-workflow',
      systems: ['ACP', 'Jira', 'Confluence', 'GitHub'],
      context: 'PM idea: "Modernize auth service to support SSO"',
      outcome: 'Epic EPIC-847 + 5 stories created, ready for sprint planning',
      steps: [
        {
          phase: 'AEP Context Retrieval',
          status: 'complete',
          duration: '1.2s',
          details: 'Retrieved auth service architecture, team velocity, existing tickets'
        },
        {
          phase: 'Engineering Council Session',
          status: 'complete',
          duration: '8m 34s',
          details: 'AI agents validated idea, identified 8 technical constraints'
        },
        {
          phase: 'Governance Check',
          status: 'complete',
          duration: '0.4s',
          details: 'RBAC: PM authorized to create epics, security policies checked'
        },
        {
          phase: 'Jira Ticket Generation',
          status: 'complete',
          duration: '3.1s',
          details: 'Created EPIC-847, 5 stories with acceptance criteria'
        },
        {
          phase: 'Confluence Documentation',
          status: 'complete',
          duration: '2.8s',
          details: 'Auto-generated technical spec and architecture doc'
        }
      ]
    },
    // Developer-initiated: Code → PR → CI → Deploy
    {
      id: 'orch-002',
      title: 'Deploy Payment Retry Logic',
      triggeredBy: 'Alex Chen (Developer)',
      tool: 'VS Code (Web)',
      initiatedFrom: 'AI Workspace',
      status: 'awaiting-approval',
      phase: 'Awaiting Approval',
      startTime: '12 minutes ago',
      type: 'deployment',
      systems: ['GitHub', 'Jenkins', 'OpenShift'],
      context: 'From Cold-Start Ticket: STORY-234 (Brazil Payment Gateway)',
      outcome: 'Pending platform team approval for production deploy',
      steps: [
        {
          phase: 'AEP Context Check',
          status: 'complete',
          duration: '0.8s',
          details: 'Verified service ownership, dependencies, RBAC permissions'
        },
        {
          phase: 'GitHub PR Creation',
          status: 'complete',
          duration: '1.2s',
          details: 'PR #847 created with AEP-provided context (ticket link, reviewers)'
        },
        {
          phase: 'CI Pipeline',
          status: 'complete',
          duration: '2m 47s',
          details: 'Tests passed, security scan clear, code coverage 94%'
        },
        {
          phase: 'Governance Check',
          status: 'complete',
          duration: '0.6s',
          details: 'Deployment policy: Requires platform approval (high-impact service)'
        },
        {
          phase: 'Approval Gate',
          status: 'pending',
          duration: '-',
          details: 'Awaiting Jordan Kim (Platform Engineer) approval'
        },
        {
          phase: 'Production Deploy',
          status: 'pending',
          duration: '-',
          details: 'Will deploy to OpenShift cluster (blue-green strategy)'
        }
      ]
    },
    // Platform Engineer-initiated: RBAC Policy Update
    {
      id: 'orch-003',
      title: 'Update K8s RBAC Policies for Payment Services',
      triggeredBy: 'Jordan Kim (Platform Engineer)',
      tool: 'Custom Agent (K8s RBAC Specialist)',
      initiatedFrom: 'AI Workspace',
      status: 'complete',
      phase: 'Complete',
      startTime: '1 hour ago',
      type: 'governance',
      systems: ['Kubernetes', 'Ansible', 'GitHub'],
      context: 'Security requirement: Enforce least-privilege access for payment services',
      outcome: 'RBAC policies updated across 3 clusters, audit log generated',
      steps: [
        {
          phase: 'AEP Context Retrieval',
          status: 'complete',
          duration: '0.6s',
          details: 'Retrieved current RBAC configs, service accounts, security policies'
        },
        {
          phase: 'Policy Validation',
          status: 'complete',
          duration: '4.2s',
          details: 'K8s RBAC Specialist validated proposed changes against org standards'
        },
        {
          phase: 'Governance Check',
          status: 'complete',
          duration: '0.3s',
          details: 'RBAC: Platform engineer authorized, compliance rules checked'
        },
        {
          phase: 'Apply to Clusters',
          status: 'complete',
          duration: '12.8s',
          details: 'Updated rolebindings in dev, staging, prod clusters'
        },
        {
          phase: 'Audit Trail',
          status: 'complete',
          duration: '1.1s',
          details: 'Logged changes, notified security team'
        }
      ]
    },
    // Developer-initiated: Security Scan via Custom Agent
    {
      id: 'orch-004',
      title: 'Security Review: Payment Gateway Code',
      triggeredBy: 'Alex Chen (Developer)',
      tool: 'Security Review Agent',
      initiatedFrom: 'Developer Hub',
      status: 'complete',
      phase: 'Complete',
      startTime: '3 hours ago',
      type: 'security',
      systems: ['GitHub', 'Security Scanner', 'Jira'],
      context: 'Pre-PR security check requested by developer',
      outcome: '2 medium-severity issues found, Jira tickets created for fixes',
      steps: [
        {
          phase: 'AEP Context Retrieval',
          status: 'complete',
          duration: '0.9s',
          details: 'Retrieved code changes, security policies, PCI-DSS requirements'
        },
        {
          phase: 'Security Scan',
          status: 'complete',
          duration: '1m 23s',
          details: 'Scanned for SQL injection, XSS, secrets, PCI-DSS compliance'
        },
        {
          phase: 'Governance Check',
          status: 'complete',
          duration: '0.2s',
          details: 'Findings categorized by severity, blocking issues flagged'
        },
        {
          phase: 'Issue Creation',
          status: 'complete',
          duration: '2.4s',
          details: 'Created JIRA-1234, JIRA-1235 with remediation guidance'
        }
      ]
    }
  ];

  // Filter orchestrations by persona (show what's relevant to them)
  const getOrchestrationsForPersona = () => {
    if (persona.includes('Product Manager') || persona.includes('PM')) {
      // PMs see: ACP workflows they initiated + high-level deployments
      return allOrchestrations.filter(o => 
        o.type === 'acp-workflow' || o.triggeredBy.includes('Sarah Parker')
      );
    }
    if (persona.includes('Platform Engineer')) {
      // Platform engineers see: governance, approvals, infrastructure
      return allOrchestrations.filter(o => 
        o.type === 'governance' || o.status === 'awaiting-approval' || o.triggeredBy.includes('Jordan Kim')
      );
    }
    // Developers see: deployments, security scans, code-related
    return allOrchestrations.filter(o => 
      o.type === 'deployment' || o.type === 'security' || o.triggeredBy.includes('Alex Chen')
    );
  };

  const orchestrations = getOrchestrationsForPersona();

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
              AI tools trigger multi-system workflows - AEP provides context, governance, and orchestration
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{orchestrations.length}</div>
              <div className="text-sm text-gray-600">Showing</div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{allOrchestrations.length}</div>
              <div className="text-sm text-gray-600">Total</div>
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
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{orch.title}</h3>
                    <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${statusConfig.bgColor} ${statusConfig.textColor}`}>
                      <StatusIcon className="w-3.5 h-3.5" />
                      {orch.phase}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span><strong>{orch.triggeredBy}</strong></span>
                    <span>•</span>
                    <span>{orch.tool}</span>
                    <span>•</span>
                    <span>{orch.initiatedFrom}</span>
                    <span>•</span>
                    <span>{orch.startTime}</span>
                  </div>
                </div>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${
                  selectedOrch === orch.id ? 'rotate-90' : ''
                }`} />
              </div>

              {/* Context & Systems */}
              <div className="space-y-3 mb-4">
                <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
                  <div className="text-xs text-blue-600 font-medium mb-1">Context</div>
                  <div className="text-sm text-blue-900">{orch.context}</div>
                </div>
                
                {orch.outcome && (
                  <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-lg">
                    <div className="text-xs text-emerald-600 font-medium mb-1">Outcome</div>
                    <div className="text-sm text-emerald-900">{orch.outcome}</div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  <span className="text-xs text-gray-600 font-medium">Systems:</span>
                  {orch.systems.map((system, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {system}
                    </span>
                  ))}
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
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Orchestrations for {persona}</h3>
          <p className="text-gray-600 mb-6">
            When you or your team trigger AI workflows (ACP sessions, deployments, security scans), they'll appear here
          </p>
        </div>
      )}
    </div>
  );
};

export default Orchestrations;


