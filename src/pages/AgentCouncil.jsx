import React, { useState } from 'react';
import { 
  Bot, MessageSquare, Clock, CheckCircle, Users, 
  FileText, ChevronRight, Zap, AlertTriangle
} from 'lucide-react';

const AgentCouncil = () => {
  const [selectedSession, setSelectedSession] = useState(null);

  // Active & Recent Council Sessions
  const councilSessions = [
    {
      id: 'session-001',
      title: 'Auth Service Modernization (v3)',
      requestedBy: 'Sarah Parker',
      status: 'active',
      duration: '47 minutes',
      phase: 'Requirement Refinement',
      participants: [
        { name: 'Solutions Architect', status: 'active', avatar: '🏗️' },
        { name: 'Security & Compliance', status: 'active', avatar: '🔒' },
        { name: 'Platform Engineering', status: 'active', avatar: '⚙️' },
        { name: 'Business Analyst', status: 'idle', avatar: '🎯' },
        { name: 'Cost Optimization', status: 'idle', avatar: '💰' }
      ],
      output: {
        feasibility: 'Feasible with constraints',
        effort: '5 sprints',
        engineers: 5,
        risk: 'Medium',
        progress: 70
      },
      insights: [
        '8 technical constraints identified',
        '12 downstream services will be affected',
        'GDPR compliance requirements flagged',
        'Migration strategy: Phased rollout recommended'
      ],
      transcript: [
        {
          agent: 'Business Analyst',
          time: '42 min ago',
          message: 'Initial requirement: Modernize auth service to support OAuth 2.1, improve security, reduce latency.',
          context: 'Current: auth-service-v2, 8.4M requests/day, 12 dependencies'
        },
        {
          agent: 'Solutions Architect',
          time: '38 min ago',
          message: 'Analyzed current architecture. OAuth 2.1 requires breaking changes. Proposed: Event-driven pattern with backward compatibility layer.',
          impact: 'High'
        },
        {
          agent: 'Security & Compliance',
          time: '32 min ago',
          message: '⚠️ GDPR compliance: User consent flows need update. LGPD (Brazil) also applies. Audit logging mandatory.',
          blocker: true
        },
        {
          agent: 'Platform Engineering',
          time: '28 min ago',
          message: 'Infrastructure ready. Brazil K8s cluster available. Database pool needs +30% capacity for migration phase.',
          resolution: 'Infrastructure assessment complete'
        }
      ]
    },
    {
      id: 'session-002',
      title: 'Brazil Payment Gateway Integration',
      requestedBy: 'Sarah Parker',
      status: 'completed',
      duration: '2h 18m',
      phase: 'Complete',
      completedAt: '6 hours ago',
      participants: [
        { name: 'Solutions Architect', status: 'idle', avatar: '🏗️' },
        { name: 'Security & Compliance', status: 'idle', avatar: '🔒' },
        { name: 'Platform Engineering', status: 'idle', avatar: '⚙️' },
        { name: 'Business Analyst', status: 'idle', avatar: '🎯' },
        { name: 'Cost Optimization', status: 'idle', avatar: '💰' }
      ],
      output: {
        feasibility: 'Feasible',
        effort: '3 sprints',
        engineers: 5,
        risk: 'Medium',
        progress: 100
      },
      deliverables: [
        'Epic: Brazil Payment Support (Created in Jira)',
        'Technical Design Document (Confluence)',
        '5 User Stories with acceptance criteria',
        'Infrastructure cost analysis ($12K/month)',
        'Compliance checklist (LGPD)'
      ]
    },
    {
      id: 'session-003',
      title: 'Real-time Fraud Detection System',
      requestedBy: 'Alex Chen',
      status: 'completed',
      duration: '1h 42m',
      phase: 'Complete',
      completedAt: '2 days ago',
      participants: [
        { name: 'Solutions Architect', status: 'idle', avatar: '🏗️' },
        { name: 'Data Scientist', status: 'idle', avatar: '📊' },
        { name: 'Security & Compliance', status: 'idle', avatar: '🔒' },
        { name: 'Platform Engineering', status: 'idle', avatar: '⚙️' }
      ],
      output: {
        feasibility: 'Feasible',
        effort: '4 sprints',
        engineers: 4,
        risk: 'High',
        progress: 100
      },
      deliverables: [
        'ML Model architecture designed',
        'Real-time pipeline specification',
        'False positive mitigation strategy',
        'Performance SLO defined (< 100ms)',
        'Epic with 8 stories created'
      ]
    }
  ];

  // Agent Roster
  const agentRoster = [
    {
      name: 'Solutions Architect Agent',
      avatar: '🏗️',
      specialty: 'System design, architecture patterns, scalability',
      status: 'active',
      sessions: 23,
      expertise: ['Microservices', 'Event-Driven', 'Cloud Native', 'API Design']
    },
    {
      name: 'Security & Compliance Agent',
      avatar: '🔒',
      specialty: 'Security posture, compliance frameworks, risk assessment',
      status: 'active',
      sessions: 19,
      expertise: ['GDPR', 'SOC2', 'PCI-DSS', 'LGPD', 'Threat Modeling']
    },
    {
      name: 'Platform Engineering Agent',
      avatar: '⚙️',
      specialty: 'Infrastructure, deployment, operational readiness',
      status: 'active',
      sessions: 31,
      expertise: ['Kubernetes', 'CI/CD', 'Observability', 'IaC']
    },
    {
      name: 'Business Analyst Agent',
      avatar: '🎯',
      specialty: 'Requirements, feasibility, ROI analysis',
      status: 'idle',
      sessions: 27,
      expertise: ['User Stories', 'Market Research', 'ROI', 'Stakeholder Analysis']
    },
    {
      name: 'Cost Optimization Agent',
      avatar: '💰',
      specialty: 'Cloud costs, resource efficiency, budget planning',
      status: 'idle',
      sessions: 18,
      expertise: ['FinOps', 'Resource Planning', 'Cost Analysis', 'Budget Forecasting']
    },
    {
      name: 'Data Scientist Agent',
      avatar: '📊',
      specialty: 'ML/AI, data pipeline, analytics',
      status: 'idle',
      sessions: 12,
      expertise: ['Machine Learning', 'Data Engineering', 'Analytics', 'MLOps']
    }
  ];

  const getStatusColor = (status) => {
    return status === 'active' ? 'emerald' :
           status === 'completed' ? 'blue' :
           'gray';
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Bot className="w-8 h-8 text-purple-600" />
              <h1 className="text-3xl font-bold text-gray-900">Agent Council</h1>
            </div>
            <p className="text-gray-600">
              Multi-agent collaboration for requirement refinement and planning
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">1</div>
              <div className="text-sm text-gray-600">Active</div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">23</div>
              <div className="text-sm text-gray-600">This Month</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Council Sessions */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">Council Sessions</h2>
          
          {councilSessions.map((session) => {
            const isExpanded = selectedSession === session.id;
            
            return (
              <div 
                key={session.id}
                className={`card-elevated p-6 hover:shadow-lg transition-all cursor-pointer ${
                  isExpanded ? 'ring-2 ring-purple-500' : ''
                }`}
                onClick={() => setSelectedSession(isExpanded ? null : session.id)}
              >
                {/* Session Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{session.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        session.status === 'active' ? 'bg-emerald-100 text-emerald-700' :
                        session.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {session.status === 'active' ? '🔴 Live' : '✓ Complete'}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>Requested by <strong>{session.requestedBy}</strong></span>
                      <span>•</span>
                      <span>{session.status === 'active' ? `${session.duration} ago` : `Completed ${session.completedAt}`}</span>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${
                    isExpanded ? 'rotate-90' : ''
                  }`} />
                </div>

                {/* Participants */}
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  {session.participants.map((participant, idx) => (
                    <div 
                      key={idx}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm ${
                        participant.status === 'active' ? 'bg-emerald-50 border border-emerald-200' :
                        'bg-gray-50 border border-gray-200'
                      }`}
                    >
                      <span>{participant.avatar}</span>
                      <span className="font-medium text-gray-900">{participant.name}</span>
                      {participant.status === 'active' && (
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Output Summary */}
                <div className="grid grid-cols-4 gap-3 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Feasibility</div>
                    <div className="text-sm font-semibold text-gray-900">{session.output.feasibility}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Effort</div>
                    <div className="text-sm font-semibold text-gray-900">{session.output.effort}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Team Size</div>
                    <div className="text-sm font-semibold text-gray-900">{session.output.engineers} engineers</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Risk</div>
                    <div className={`text-sm font-semibold ${
                      session.output.risk === 'Low' ? 'text-emerald-600' :
                      session.output.risk === 'Medium' ? 'text-amber-600' :
                      'text-red-600'
                    }`}>{session.output.risk}</div>
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="border-t border-gray-200 pt-6 mt-6 space-y-6">
                    {/* Insights */}
                    {session.insights && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Insights</h4>
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                          <ul className="space-y-2">
                            {session.insights.map((insight, idx) => (
                              <li key={idx} className="text-sm text-purple-800 flex items-start gap-2">
                                <Zap className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <span>{insight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Transcript */}
                    {session.transcript && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Council Discussion</h4>
                        <div className="space-y-3">
                          {session.transcript.map((msg, idx) => (
                            <div key={idx} className={`p-4 rounded-lg ${
                              msg.blocker ? 'bg-amber-50 border border-amber-200' :
                              'bg-gray-50'
                            }`}>
                              <div className="flex items-center gap-2 mb-2">
                                <span className="font-semibold text-gray-900">{msg.agent}</span>
                                {msg.blocker && <AlertTriangle className="w-4 h-4 text-amber-600" />}
                                <span className="text-xs text-gray-500">{msg.time}</span>
                              </div>
                              <p className="text-sm text-gray-700">{msg.message}</p>
                              {msg.context && (
                                <div className="text-xs text-gray-600 mt-2 italic">{msg.context}</div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Deliverables */}
                    {session.deliverables && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Deliverables</h4>
                        <div className="space-y-2">
                          {session.deliverables.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                              <CheckCircle className="w-4 h-4 text-emerald-600" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    {session.status === 'completed' && (
                      <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          <FileText className="w-4 h-4" />
                          View Full Report
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                          Export to Jira
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Agent Roster */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Agent Roster</h2>
          <div className="space-y-4">
            {agentRoster.map((agent, idx) => (
              <div key={idx} className="card-elevated p-4 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-3xl">{agent.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900 text-sm">{agent.name}</h3>
                      {agent.status === 'active' && (
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{agent.specialty}</p>
                    <div className="text-xs text-gray-500">{agent.sessions} sessions this month</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {agent.expertise.map((skill, i) => (
                    <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCouncil;

