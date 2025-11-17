import React, { useState } from 'react';
import { 
  Activity, Bot, Target, FileText, Code, Shield, 
  Clock, User, Filter, Search, PlayCircle, 
  CheckCircle, AlertCircle, XCircle
} from 'lucide-react';

const LiveActivity = () => {
  const [filterType, setFilterType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Real-time activity feed
  const activities = [
    {
      id: 1,
      type: 'council',
      user: 'Sarah Parker',
      persona: 'PM',
      action: 'Started Engineering Council for "Auth Service Modernization v3"',
      status: 'in-progress',
      time: '2 minutes ago',
      details: {
        duration: '12 minutes so far',
        participants: ['Solutions Architect', 'Security Agent', 'Platform Agent'],
        phase: 'Architecture analysis'
      }
    },
    {
      id: 2,
      type: 'tickets',
      user: 'Sarah Parker',
      persona: 'PM',
      action: 'Generated cold-start Epic for "Payment Retry Logic"',
      status: 'success',
      time: '18 minutes ago',
      details: {
        artifacts: ['Epic EPIC-847', '5 Stories', 'Technical Spec', 'Architecture Doc'],
        outcome: 'Alex Chen started coding immediately'
      }
    },
    {
      id: 3,
      type: 'analysis',
      user: 'Alex Chen',
      persona: 'Engineer',
      action: 'Ran security analysis on brazil-payment-gateway',
      status: 'success',
      time: '35 minutes ago',
      details: {
        findings: '3 medium-priority issues',
        compliance: 'PCI-DSS compliant',
        outcome: 'All issues resolved before PR'
      }
    },
    {
      id: 4,
      type: 'council',
      user: 'Jordan Kim',
      persona: 'Platform Engineer',
      action: 'Completed Engineering Council for "Real-time Fraud Detection"',
      status: 'success',
      time: '1 hour ago',
      details: {
        duration: '42 minutes',
        deliverables: ['Epic', 'Infrastructure plan', 'Cost analysis ($8K/month)'],
        outcome: 'Approved for Q1 roadmap'
      }
    },
    {
      id: 5,
      type: 'agent',
      user: 'Jordan Kim',
      persona: 'Platform Engineer',
      action: 'Built custom agent "RBAC Policy Validator"',
      status: 'success',
      time: '2 hours ago',
      details: {
        trained: 'On 247 RBAC policies and audit logs',
        tested: '98% accuracy on validation tests',
        outcome: 'Available for team use'
      }
    },
    {
      id: 6,
      type: 'approval',
      user: 'Maria Garcia',
      persona: 'Engineer',
      action: 'Requested approval for production deployment',
      status: 'pending',
      time: '3 hours ago',
      details: {
        service: 'payment-service v2.4.1',
        reviewer: 'Jordan Kim',
        checks: 'All CI/CD checks passed'
      }
    },
    {
      id: 7,
      type: 'analysis',
      user: 'Sarah Parker',
      persona: 'PM',
      action: 'Generated PRD for "Multi-currency Support"',
      status: 'success',
      time: '4 hours ago',
      details: {
        artifacts: ['PRD', 'Market analysis', 'Technical requirements'],
        outcome: 'Scheduled for Engineering Council review'
      }
    },
    {
      id: 8,
      type: 'tickets',
      user: 'Alex Chen',
      persona: 'Engineer',
      action: 'Refined story "Implement retry backoff strategy"',
      status: 'success',
      time: '5 hours ago',
      details: {
        before: 'Vague acceptance criteria',
        after: 'Detailed implementation plan with test cases',
        outcome: 'Development time reduced by 60%'
      }
    }
  ];

  const activityTypes = [
    { id: 'all', label: 'All Activity', icon: Activity, count: activities.length },
    { id: 'council', label: 'Engineering Councils', icon: Bot, count: activities.filter(a => a.type === 'council').length },
    { id: 'tickets', label: 'Cold-Start Tickets', icon: Target, count: activities.filter(a => a.type === 'tickets').length },
    { id: 'analysis', label: 'Code Analysis', icon: Code, count: activities.filter(a => a.type === 'analysis').length },
    { id: 'agent', label: 'Custom Agents', icon: Shield, count: activities.filter(a => a.type === 'agent').length },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success': return <CheckCircle className="w-5 h-5 text-emerald-600" />;
      case 'in-progress': return <PlayCircle className="w-5 h-5 text-blue-600" />;
      case 'pending': return <AlertCircle className="w-5 h-5 text-amber-600" />;
      case 'failed': return <XCircle className="w-5 h-5 text-red-600" />;
      default: return <Activity className="w-5 h-5 text-gray-600" />;
    }
  };

  const getTypeColor = (type) => {
    const colors = {
      council: 'bg-purple-50 border-purple-200 text-purple-700',
      tickets: 'bg-blue-50 border-blue-200 text-blue-700',
      analysis: 'bg-emerald-50 border-emerald-200 text-emerald-700',
      agent: 'bg-amber-50 border-amber-200 text-amber-700',
      approval: 'bg-pink-50 border-pink-200 text-pink-700'
    };
    return colors[type] || 'bg-gray-50 border-gray-200 text-gray-700';
  };

  const filteredActivities = activities.filter(activity => {
    const matchesType = filterType === 'all' || activity.type === filterType;
    const matchesSearch = searchQuery === '' || 
      activity.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.user.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Activity className="w-8 h-8 text-blue-600 animate-pulse" />
          <h1 className="text-3xl font-bold text-gray-900">Live Activity</h1>
        </div>
        <p className="text-gray-600">
          Real-time view of what's happening across ACP right now
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="card-elevated p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <PlayCircle className="w-6 h-6 text-blue-600" />
            </div>
            <span className="flex items-center gap-1.5 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
              Live
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">3</div>
          <div className="text-sm text-gray-600">Active Sessions</div>
        </div>

        <div className="card-elevated p-6">
          <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
            <CheckCircle className="w-6 h-6 text-emerald-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">18</div>
          <div className="text-sm text-gray-600">Completed Today</div>
        </div>

        <div className="card-elevated p-6">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
            <Bot className="w-6 h-6 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">47</div>
          <div className="text-sm text-gray-600">Agents Working</div>
        </div>

        <div className="card-elevated p-6">
          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-3">
            <User className="w-6 h-6 text-amber-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">12</div>
          <div className="text-sm text-gray-600">Active Users</div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {activityTypes.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setFilterType(type.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    filterType === type.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{type.label}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    filterType === type.id
                      ? 'bg-white bg-opacity-20'
                      : 'bg-gray-100'
                  }`}>
                    {type.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search activity..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="space-y-4">
        {filteredActivities.map((activity) => (
          <div key={activity.id} className="card-elevated p-6 hover:shadow-lg transition-all">
            <div className="flex gap-4">
              {/* Status Icon */}
              <div className="flex-shrink-0 pt-1">
                {getStatusIcon(activity.status)}
              </div>

              {/* Activity Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-semibold text-gray-900">{activity.user}</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {activity.persona}
                    </span>
                    <span className={`text-xs border px-2 py-1 rounded-full ${getTypeColor(activity.type)}`}>
                      {activity.type === 'council' ? 'Engineering Council' :
                       activity.type === 'tickets' ? 'Cold-Start Tickets' :
                       activity.type === 'analysis' ? 'Code Analysis' :
                       activity.type === 'agent' ? 'Custom Agent' :
                       'Approval Request'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 whitespace-nowrap">
                    <Clock className="w-4 h-4" />
                    <span>{activity.time}</span>
                  </div>
                </div>

                <div className="text-gray-900 mb-4">{activity.action}</div>

                {/* Activity Details */}
                <div className="bg-gray-50 rounded-lg p-4">
                  {activity.status === 'in-progress' && activity.details.duration && (
                    <div className="mb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <PlayCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-900">
                          In Progress: {activity.details.duration}
                        </span>
                      </div>
                      {activity.details.phase && (
                        <div className="text-sm text-gray-700 mb-2">
                          Current phase: {activity.details.phase}
                        </div>
                      )}
                      {activity.details.participants && (
                        <div className="flex flex-wrap gap-2">
                          {activity.details.participants.map((participant, idx) => (
                            <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                              {participant}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {activity.details.artifacts && (
                    <div className="mb-3">
                      <div className="text-xs text-gray-600 mb-2">Generated artifacts:</div>
                      <div className="flex flex-wrap gap-2">
                        {activity.details.artifacts.map((artifact, idx) => (
                          <span key={idx} className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">
                            {artifact}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {activity.details.deliverables && (
                    <div className="mb-3">
                      <div className="text-xs text-gray-600 mb-2">Deliverables:</div>
                      <div className="flex flex-wrap gap-2">
                        {activity.details.deliverables.map((deliverable, idx) => (
                          <span key={idx} className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {activity.details.outcome && (
                    <div className="flex items-start gap-2 bg-emerald-50 border border-emerald-200 rounded p-3">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-emerald-600 font-medium mb-1">Outcome</div>
                        <div className="text-sm text-emerald-900">{activity.details.outcome}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredActivities.length === 0 && (
        <div className="text-center py-12">
          <Activity className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No activity found</h3>
          <p className="text-gray-600">Try adjusting your filters or search query</p>
        </div>
      )}
    </div>
  );
};

export default LiveActivity;

