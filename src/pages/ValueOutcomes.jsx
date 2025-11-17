import React from 'react';
import { 
  TrendingUp, Clock, Target, Bot, Zap, Users, 
  ArrowUp, ArrowDown, Calendar, DollarSign, 
  CheckCircle, XCircle
} from 'lucide-react';

const ValueOutcomes = () => {
  // Communication Compression Metrics
  const compressionMetrics = [
    {
      label: 'Meetings Eliminated',
      current: 127,
      previous: 45,
      change: '+182%',
      positive: true,
      period: 'This Month',
      description: 'Kickoffs, refinements, and clarification sessions avoided',
      icon: Users,
      color: 'blue',
      breakdown: [
        { type: 'Kickoff meetings', count: 34, saved: '51 hours' },
        { type: 'Refinement sessions', count: 47, saved: '94 hours' },
        { type: 'Clarification calls', count: 46, saved: '23 hours' }
      ]
    },
    {
      label: 'Time to First Code',
      current: '2.3 days',
      previous: '8.7 days',
      change: '-74%',
      positive: true,
      period: 'Average',
      description: 'From idea to engineer writing first line of code',
      icon: Clock,
      color: 'emerald',
      breakdown: [
        { phase: 'Before ACP', time: '8.7 days', detail: '4 meetings, vague requirements' },
        { phase: 'With ACP', time: '2.3 days', detail: 'Cold-start tickets, zero clarifications' }
      ]
    },
    {
      label: 'Cold-Start Tickets',
      current: 34,
      previous: 0,
      change: 'New',
      positive: true,
      period: 'This Month',
      description: 'Ready-to-code tickets with zero clarification meetings',
      icon: Target,
      color: 'purple',
      breakdown: [
        { metric: 'Avg clarifications needed', value: '0.2', detail: 'vs 4.7 before' },
        { metric: 'Engineer velocity', value: '+3.2x', detail: 'Sprint velocity increase' },
        { metric: 'Rework rate', value: '-67%', detail: 'Fewer scope changes mid-sprint' }
      ]
    },
    {
      label: 'Engineering Council Sessions',
      current: 89,
      previous: 0,
      change: 'New',
      positive: true,
      period: 'This Month',
      description: 'Ideas validated in 45 min vs 3 sprint planning sessions',
      icon: Bot,
      color: 'amber',
      breakdown: [
        { metric: 'Avg session duration', value: '47 min', detail: 'vs 12 hours of meetings' },
        { metric: 'Ideas validated', value: '89', detail: '34 approved, 55 modified/rejected' },
        { metric: 'Technical debt caught', value: '127 issues', detail: 'Before development started' }
      ]
    }
  ];

  // Velocity & Efficiency Metrics
  const velocityMetrics = [
    {
      team: 'Payment Team',
      before: { velocity: 23, quality: 72, rework: 34 },
      after: { velocity: 74, quality: 94, rework: 11 },
      improvement: { velocity: '+221%', quality: '+31%', rework: '-68%' }
    },
    {
      team: 'Platform Team',
      before: { velocity: 18, quality: 68, rework: 41 },
      after: { velocity: 52, quality: 91, rework: 14 },
      improvement: { velocity: '+189%', quality: '+34%', rework: '-66%' }
    },
    {
      team: 'Auth Team',
      before: { velocity: 31, quality: 81, rework: 28 },
      after: { velocity: 89, quality: 96, rework: 9 },
      improvement: { velocity: '+187%', quality: '+19%', rework: '-68%' }
    }
  ];

  // ROI Analysis
  const roiMetrics = [
    {
      category: 'Time Saved',
      value: '168 hours',
      financial: '$25,200',
      period: 'This month',
      description: 'Engineering hours recovered from eliminated meetings',
      breakdown: 'Avg $150/hr × 168 hours'
    },
    {
      category: 'Velocity Increase',
      value: '+212%',
      financial: '$180K',
      period: 'Value delivered',
      description: 'Additional features shipped due to faster cycles',
      breakdown: '12 extra features × $15K avg value'
    },
    {
      category: 'Rework Reduction',
      value: '-67%',
      financial: '$42K',
      period: 'Waste eliminated',
      description: 'Mid-sprint scope changes and requirement clarifications avoided',
      breakdown: '47 sprints × $900 avg rework cost'
    },
    {
      category: 'Quality Improvement',
      value: '+28%',
      financial: '$38K',
      period: 'Defects prevented',
      description: 'Technical debt and issues caught before development',
      breakdown: '127 issues × $300 avg fix cost'
    }
  ];

  // Recent Wins
  const recentWins = [
    {
      feature: 'Brazil Payment Gateway',
      team: 'Payment Team',
      metric: 'Time to Market',
      before: '6.5 weeks',
      after: '1.8 weeks',
      improvement: '-72%',
      outcome: '2,400 users, $180K revenue in 21 days',
      acpContribution: 'Engineering Council identified 8 constraints upfront, cold-start tickets eliminated 4 meetings'
    },
    {
      feature: 'Payment Retry Logic',
      team: 'Payment Team',
      metric: 'Requirements Clarity',
      before: '4 clarification meetings',
      after: '0 clarification meetings',
      improvement: '100% cold-start',
      outcome: '847 failed payments recovered, $42K saved in 4 days',
      acpContribution: 'Cold-start tickets with detailed acceptance criteria and test cases'
    },
    {
      feature: 'Auth Service Modernization',
      team: 'Auth Team',
      metric: 'Planning Time',
      before: '3 sprint planning sessions',
      after: '47-minute council session',
      improvement: '-94%',
      outcome: 'GDPR compliance requirements identified, 12 downstream services analyzed',
      acpContribution: 'Engineering Council stress-tested requirements, generated epic with 5 stories'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-700 border-blue-200',
      emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      purple: 'bg-purple-50 text-purple-700 border-purple-200',
      amber: 'bg-amber-50 text-amber-700 border-amber-200'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <TrendingUp className="w-8 h-8 text-emerald-600" />
          <h1 className="text-3xl font-bold text-gray-900">Value & Outcomes</h1>
        </div>
        <p className="text-gray-600">
          Track communication compression, velocity improvements, and business impact
        </p>
      </div>

      {/* Communication Compression Metrics */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Communication Compression</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {compressionMetrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div key={idx} className="card-elevated p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg ${getColorClasses(metric.color)} flex items-center justify-center border`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`flex items-center gap-1 text-sm font-semibold px-3 py-1 rounded-full ${
                    metric.positive ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {metric.positive ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                    {metric.change}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{metric.current}</div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">{metric.label}</div>
                  <div className="text-xs text-gray-600 mb-2">{metric.period} • Previous: {metric.previous}</div>
                  <div className="text-sm text-gray-600">{metric.description}</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  {metric.breakdown.map((item, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">{item.type || item.phase || item.metric}</span>
                      <span className="font-semibold text-gray-900">
                        {item.count || item.time || item.value}
                        {item.saved && <span className="text-emerald-600 ml-2">({item.saved})</span>}
                        {item.detail && <span className="text-gray-500 text-xs ml-2">{item.detail}</span>}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Team Velocity Improvements */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Team Velocity Improvements</h2>
        <div className="card-elevated overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Team</th>
                  <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase">Velocity (Story Points)</th>
                  <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase">Code Quality</th>
                  <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase">Rework Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {velocityMetrics.map((team, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">{team.team}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <span className="text-gray-500 text-sm">{team.before.velocity}</span>
                          <span className="text-gray-400">→</span>
                          <span className="text-emerald-600 font-semibold text-lg">{team.after.velocity}</span>
                        </div>
                        <div className="text-xs text-emerald-600 font-medium">{team.improvement.velocity}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <span className="text-gray-500 text-sm">{team.before.quality}%</span>
                          <span className="text-gray-400">→</span>
                          <span className="text-blue-600 font-semibold text-lg">{team.after.quality}%</span>
                        </div>
                        <div className="text-xs text-blue-600 font-medium">{team.improvement.quality}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <span className="text-gray-500 text-sm">{team.before.rework}%</span>
                          <span className="text-gray-400">→</span>
                          <span className="text-purple-600 font-semibold text-lg">{team.after.rework}%</span>
                        </div>
                        <div className="text-xs text-purple-600 font-medium">{team.improvement.rework}</div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ROI Analysis */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">ROI Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roiMetrics.map((metric, idx) => (
            <div key={idx} className="card-elevated p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="text-xs text-gray-600">{metric.period}</div>
              </div>
              
              <div className="text-2xl font-bold text-emerald-600 mb-1">{metric.financial}</div>
              <div className="text-sm font-semibold text-gray-900 mb-2">{metric.category}</div>
              <div className="text-xs text-gray-600 mb-3">{metric.description}</div>
              
              <div className="bg-gray-50 rounded p-2">
                <div className="text-xs text-gray-700">{metric.breakdown}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="card-elevated p-6 mt-6 bg-gradient-to-br from-emerald-50 to-blue-50">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-2">Total Value This Month</div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">$285,200</div>
              <div className="text-sm text-gray-700">
                Time saved + Velocity increase + Waste eliminated + Quality improvement
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600 mb-2">ACP Investment</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">$12,000</div>
              <div className="text-sm font-semibold text-emerald-600">ROI: 23.8x</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Wins */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Wins</h2>
        <div className="space-y-6">
          {recentWins.map((win, idx) => (
            <div key={idx} className="card-elevated p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{win.feature}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">{win.team}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm font-medium text-blue-600">{win.metric}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-semibold">{win.improvement}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="text-xs text-red-600 font-medium mb-2">Before ACP</div>
                  <div className="text-lg font-bold text-red-900">{win.before}</div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <div className="text-xs text-emerald-600 font-medium mb-2">With ACP</div>
                  <div className="text-lg font-bold text-emerald-900">{win.after}</div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <div className="text-xs text-blue-600 font-medium mb-2">Business Outcome</div>
                <div className="text-sm text-blue-900">{win.outcome}</div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="text-xs text-purple-600 font-medium mb-2">How ACP Helped</div>
                <div className="text-sm text-purple-900">{win.acpContribution}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValueOutcomes;

