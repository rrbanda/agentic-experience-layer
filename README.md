# AEP - Agentic Experience Platform

**The Single Pane of Glass for AI-Native Enterprise Development**

## Core Philosophy

> **Like BrowserOS is to Chrome, AEP is to your AI development tools.**

**BrowserOS** = Chrome (familiar interface) + AI agents (native capability)  
**AEP** = Command Center (single pane of glass) + Enterprise context/governance/orchestration

### What This Means

AEP is **not** a developer portal. It's **not** a replacement for Cursor, Claude, or GitHub Copilot.

AEP is the **command center** that:
- **Monitors** all AI activity across your enterprise in real-time
- **Augments** your existing AI tools (Cursor, Claude, ACP, Copilot) with enterprise context
- **Governs** AI actions through RBAC, policies, and approval workflows  
- **Orchestrates** multi-system operations that no single AI tool can handle alone
- **Provides** the missing enterprise layer so AI tools work safely in production

Just as BrowserOS keeps Chrome familiar while adding AI capabilities, **AEP keeps your tools unchanged while making them enterprise-ready**.

## Overview

AEP (Agentic Experience Platform) represents a fundamental paradigm shift from portal-centric development (Backstage) to AI-native, governed orchestration that connects AI tools to enterprise systems.

### The Real Problem: Communication Compression, Not Code Speed

**Copilot helps you write a function 2x faster.**  
**ACP removes the four meetings needed to agree on what function to write.**

Modern teams lose weeks to:
- Vague requirements that become clear only after 3 sprints
- PM ideas that hit engineering roadblocks in sprint planning
- "Can we build this?" discussions that should happen before work starts
- Technical debt and constraints discovered mid-development

**AEP solves this through ACP (Ambient Code Platform):**
- **Engineering Council** - Get AI expert pushback upfront, not 3 sprints later
- **Cold-Start Tickets** - Generate ready-to-code Jira epics with proper scoping
- **Internal Context** - ACP accesses your real Jira, GitHub, velocity, and standards
- **Custom Agents** - Build domain-specific agents (RBAC specialist, security reviewer)

## Key Differentiators vs. Backstage

| Aspect | Backstage (Portal Era) | AEP (AI-Native Era) |
|--------|------------------------|---------------------|
| **Interface** | UI-driven, click-through workflows | Conversational AI, natural language |
| **Integration** | Developer portal, centralized UI | Context layer for ANY AI tool |
| **Workflow** | Navigate → Browse → Click → Configure | Describe → Iterate → Generate → Validate |
| **Governance** | Manual approval gates | AI-powered policy enforcement |
| **Orchestration** | Single-step actions | Multi-system, end-to-end automation |
| **Tool Philosophy** | Replace tools with portal | Augment existing tools with context |

## Architecture Philosophy

AEP is built on four pillars:

### 1. Enterprise Context Layer
Unifies organizational knowledge so any AI assistant can reason with:
- Codebase structure and dependency graphs
- Service ownership and architecture patterns
- Agile data (Jira, backlogs, velocity)
- Documentation, RFCs, decision logs
- Observability signals (logs, metrics, traces)
- Infrastructure inventory and cluster state
- Compliance standards and security posture

### 2. Governance & Safety Layer
Provides guardrails for enterprise adoption:
- RBAC (per-user, per-agent, per-capability)
- Policy enforcement and compliance validation
- Audit trails and full traceability
- Plan → Explain → Approve → Execute workflow
- Rate limiting and safety hooks

### 3. Execution & Orchestration Layer
Exposes enterprise systems through unified APIs:
- GitHub/GitLab PR automation
- CI/CD orchestration (Jenkins, ArgoCD, Tekton)
- Kubernetes/OpenShift cluster operations
- Ansible Automation Platform integration
- Terraform and IaC updates
- Configuration management
- Observability tool integration

### 4. Multi-Agent Collaboration
Supports advanced AI workflows:
- Requirement refinement and feasibility analysis
- Architectural constraint checking
- Dependency awareness across services
- Cold-start ticket generation (epics → stories → tasks)
- Engineering council simulation
- Multi-agent planning with domain experts

## How It Works

### Traditional Flow (Without AEP)
1. PM has idea → Schedule kickoff meeting
2. Engineering pushback in meeting → Schedule follow-up
3. Requirements refined → Still vague, engineers start anyway
4. Mid-sprint: "Wait, this breaks authentication" → Schedule another meeting
5. Three sprints later: Feature finally ships (with compromises)
6. **Total time:** 6-8 weeks, 12+ hours of meetings

### AEP + ACP Flow
1. **PM opens AEP** → Starts Engineering Council session
2. **45 minutes later:** Council completes analysis
   - Solutions Architect: "Here's the architecture"
   - Security Agent: "GDPR compliance required"
   - Platform Agent: "Infrastructure ready, needs +30% DB capacity"
   - Business Analyst: "ROI looks good, low risk"
3. **ACP generates:**
   - Epic with proper scoping
   - 5 user stories with acceptance criteria
   - Technical design document
   - Infrastructure cost analysis
4. **Engineer receives cold-start ticket** → Opens Cursor → Starts coding immediately
5. **Zero clarification meetings needed** → Engineering velocity 3x normal
6. **Feature ships in 1.5 sprints**

**Communication compressed from 12 hours of meetings to 45 minutes of AI analysis.**

## What's In This Prototype

This prototype demonstrates the AEP vision through a fully-functional UI with:

- ✅ **Multi-Persona Views** - Product Manager, Developer, Platform Engineer
- ✅ **AI Workspace** - Use multiple AI tools side-by-side (Claude, Cursor, ACP, Gemini, etc.)
- ✅ **Web-Based IDEs** - Embed VS Code, IntelliJ with AI extensions (Roo Code, Cursor AI)
- ✅ **Persona Command Centers** - PM Hub and Developer Hub with role-specific workflows
- ✅ **Real Orchestrations** - ACP workflows, deployments, governance, security scans
- ✅ **Communication Compression Tracking** - See time/meetings saved
- ✅ **Unified Context** - All tools get the same enterprise data (GitHub, Jira, RBAC)
- ✅ **Custom Assistants** - K8s RBAC Specialist, Security Agent, Cost Optimizer
- ✅ **Workspace Templates** - Save and share multi-tool configurations
- ✅ **Governance & RBAC** - Policy enforcement, approval workflows, audit trails

**Note**: This is a UI/UX prototype demonstrating the AEP vision. Backend integrations (GitHub API, Jira, Kubernetes, etc.) are represented with realistic mock data to show how the platform would function in production.

## Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start

**Option 1: Using the Setup Script (Recommended)**

```bash
# Clone the repository
git clone https://github.com/rrbanda/agentic-experience-layer.git
cd agentic-experience-layer

# Make setup script executable
chmod +x scripts/setup.sh

# Run setup (installs dependencies and starts dev server)
./scripts/setup.sh
```

**Option 2: Manual Setup**

```bash
# Clone the repository
git clone https://github.com/rrbanda/agentic-experience-layer.git
cd agentic-experience-layer

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will open at `http://localhost:5173`

## Project Structure

```
agentic-experience-layer/
├── src/
│   ├── App.jsx                    # Main application with routing
│   ├── main.jsx                   # React entry point
│   ├── index.css                  # Global styles with Tailwind
│   ├── components/
│   │   └── Layout.jsx             # Main layout with navigation & persona switcher
│   └── pages/
│       ├── Dashboard.jsx          # Organization overview
│       ├── AIWorkspace.jsx        # Multi-tool AI workspace (tool juggling)
│       ├── PMHub.jsx              # Product Manager command center
│       ├── DeveloperHub.jsx       # Developer command center
│       ├── Orchestrations.jsx     # Multi-system workflow orchestration
│       ├── AgentCouncil.jsx       # Multi-agent collaboration
│       ├── LiveActivity.jsx       # Real-time AI activity monitoring
│       ├── ValueOutcomes.jsx      # Business value & metrics
│       ├── Governance.jsx         # RBAC, policies, compliance
│       ├── ConnectedSystems.jsx   # Enterprise integrations
│       └── Settings.jsx           # Platform configuration
├── docs/
│   ├── DEPLOYMENT.md              # Deployment guide
│   └── WHY_AEP_REPLACES_BACKSTAGE.md
├── scripts/
│   └── setup.sh                   # Quick setup script
├── index.html                     # HTML template
├── package.json                   # Dependencies and scripts
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind CSS config
├── postcss.config.js              # PostCSS configuration
└── README.md                      # This file
```

## Additional Documentation

- **[DEPLOYMENT.md](docs/DEPLOYMENT.md)** - Comprehensive deployment guide for production environments
- **[WHY_AEP_REPLACES_BACKSTAGE.md](docs/WHY_AEP_REPLACES_BACKSTAGE.md)** - Detailed comparison and positioning

## Features Demonstrated in the Prototype

### Persona-Centric Experience
- **Persona Switcher**: Toggle between Product Manager, Developer, and Platform Engineer views
- **Role-Specific Dashboards**: Each persona sees relevant data, metrics, and actions
- **Personalized Command Centers**: PM Hub and Developer Hub with tailored workflows

### Dashboard (Organization Overview)
- **Your AI Tool Stack**: Visual representation of all AI tools in use (Cursor, Claude, ACP, etc.)
- **Active ACP Sessions**: Real-time view of Engineering Council sessions and cold-start ticket generation
- **Recent Completions**: Track shipped features, deployments, and governance updates
- **Internal Context**: Quick access to Jira, GitHub, Confluence, architecture docs
- **Communication Compression Metrics**: Time saved by eliminating meetings

### AI Workspace (Tool Juggling)
- **Multi-Tool Interface**: Use multiple AI assistants side-by-side (Claude, Cursor, Gemini, ACP)
- **Web-Based IDEs**: Embed VS Code, IntelliJ, Eclipse Che with AI extensions (Roo Code, Cursor AI)
- **Unified Context**: All tools get the same enterprise context (GitHub, Jira, RBAC, policies)
- **Workspace Templates**: Save and share multi-tool configurations for specific workflows
- **Discovery Platform**: Browse public AI tools and custom organizational assistants
- **Custom Assistants**: K8s RBAC Specialist, Security Review Agent, Cloud Cost Optimizer, etc.

### PM Hub (Product Manager Command Center)
- **Start Your Work**: Engineering Council sessions, cold-start ticket generation, architecture reviews
- **ACP Integration**: Transform ideas into ready-to-code epics in under an hour
- **Communication Compression**: Eliminate kickoff meetings, requirement clarifications, and sprint planning debates

### Developer Hub (Developer Command Center)
- **Start Your Work**: Security analysis, technical debt review, code quality checks
- **Cold-Start Tickets**: Receive fully scoped stories with acceptance criteria
- **AI-Assisted Development**: Launch IDEs and assistants pre-loaded with project context

### Orchestrations (Multi-System Workflows)
- **Real Orchestration Types**: ACP workflows, code deployments, governance updates, security scans
- **Persona-Filtered Views**: See orchestrations relevant to your role
- **Context & Outcomes**: Explicit demonstration of AEP's value in each workflow
- **Multi-Phase Execution**: Context → Governance → Approval → Execution
- **Communication Compression Tracking**: Show time saved (e.g., "0 meetings needed")

### Agent Council (Multi-Agent Collaboration)
- **Engineering Council**: Solutions Architect, Security Agent, Platform Engineer, Business Analyst
- **Specialized Agents**: Domain-specific experts that understand your organization
- **Collaborative Analysis**: Multi-agent discussions to validate ideas and identify constraints
- **Custom Agent Creation**: Build and deploy organizational agents (coming soon)

### Live Activity
- **Real-Time Monitoring**: Track all AI activity across your organization
- **Agent Status**: See which agents are active, idle, or processing
- **Audit Trail**: Full traceability of AI actions and decisions

### Value & Outcomes
- **Business Metrics**: ROI, velocity improvements, time-to-market acceleration
- **Communication Compression**: Meetings eliminated, hours saved
- **Quality Metrics**: Defect reduction, compliance adherence, security posture

### Governance
- **RBAC Management**: Role-based access control for all personas and agents
- **Policy Enforcement**: Automated compliance checking (SOC2, PCI-DSS, GDPR)
- **Approval Workflows**: Production change gates with proper authorization
- **Audit Logging**: Complete traceability of all actions

### Connected Systems
- **Enterprise Integrations**: GitHub, Jira, Kubernetes, Jenkins, Ansible, Terraform
- **System Health**: Real-time status of connected platforms
- **API Management**: Unified access layer for all enterprise systems

## Exploring the Prototype

### Getting Started
1. **Choose Your Persona**: Use the dropdown in the top-right to switch between Product Manager, Developer, or Platform Engineer
2. **Explore the Dashboard**: See your AI tool stack, active ACP sessions, and communication compression metrics
3. **Visit Your Command Center**: Go to PM Hub or Developer Hub to see persona-specific workflows

### Key User Journeys to Try

#### 1. Product Manager Journey (Communication Compression)
- Switch persona to **Product Manager**
- Navigate to **PM Hub** → Click "Engineering Council Session"
- See how an idea transforms into cold-start tickets in under an hour
- Check **Orchestrations** → Filter for ACP workflows
- View **Value & Outcomes** → See meetings eliminated and time saved

#### 2. Developer Journey (Cold-Start Coding)
- Switch persona to **Developer**
- Navigate to **Developer Hub** → Explore "Start Your Work" actions
- Go to **AI Workspace** → Browse the Assistant Library
- Add VS Code (Web) + ACP + Security Review Agent
- See how all tools get unified context (STORY-234, payment-service repo)
- Check **Orchestrations** → View deployment workflows with governance

#### 3. Platform Engineer Journey (Governance & Infrastructure)
- Switch persona to **Platform Engineer**
- Navigate to **Orchestrations** → See approval gates for deployments
- Go to **AI Workspace** → Add K8s RBAC Specialist + Cost Optimizer
- Check **Governance** → View RBAC policies and compliance rules
- Explore **Connected Systems** → See enterprise integrations

#### 4. Multi-Tool AI Workspace (Tool Juggling)
- Navigate to **AI Workspace**
- Click **Browse Library** to discover:
  - **IDEs**: VS Code, IntelliJ, Eclipse Che (with AI extensions)
  - **Public Assistants**: Claude, Gemini, Cursor, Copilot
  - **Custom Assistants**: ACP, Security Agent, RBAC Specialist
- Add up to 3 tools and see them work side-by-side
- Notice the live **Context Sync** indicator showing unified AEP context
- Save your workspace as a template for future reuse

#### 5. Orchestrations (See AEP's Real Value)
- Navigate to **Orchestrations**
- Explore different workflow types:
  - **ACP Workflow**: PM idea → cold-start tickets (0 meetings needed)
  - **Deployment**: Code → PR → CI → Approval → Deploy
  - **Governance**: RBAC policy updates with validation
  - **Security**: Pre-PR security scans with Jira ticket creation
- Click into any orchestration to see AEP's role in each phase

## Technology Stack

- **React 18** - Modern UI framework
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Modern JavaScript** - ES6+ features

## Alignment with McKinsey AI-PDLC Framework

AEP enables all five irreversible shifts in software development:

1. **Faster Time to Market** - AI-driven acceleration with enterprise guardrails
2. **Products Deliver Value Sooner** - Telemetry and feedback loops integrated
3. **More Ideas See the Light of Day** - Rapid prototyping with compliance
4. **PMs Become "Mini-CEOs"** - PM → Engineering → Infrastructure alignment
5. **Quality/Risk/Compliance Move Left** - Automated policy enforcement

## What AEP Is NOT

- Not a replacement for Claude, Cursor, Copilot, or other AI assistants
- Not a code generation tool
- Not a developer portal in the Backstage model
- Not tied to any single agent framework
- Not a replacement for existing PDLC processes

## What AEP IS

- The unified interface between AI tools and enterprise systems
- The governance + orchestration layer for all agents
- The context provider that makes AI assistants enterprise-capable
- A platform connecting PMs, Engineers, SREs, and Security
- The missing layer that enables safe, governed AI-native development

## Deployment Considerations

When deploying AEP to your organization:

1. **Integration Points**
   - Connect to your Git providers (GitHub, GitLab, Bitbucket)
   - Integrate CI/CD systems (Jenkins, ArgoCD, Tekton)
   - Link to observability tools (Datadog, Prometheus, Grafana)
   - Connect project management (Jira, Linear, Azure DevOps)

2. **Security & Governance**
   - Configure RBAC policies per your org structure
   - Set up approval workflows for production changes
   - Define compliance requirements (SOC2, PCI-DSS, etc.)
   - Establish audit logging and retention policies

3. **Agent Configuration**
   - Deploy context analyzer agents
   - Configure governance validation agents
   - Set up orchestration planning agents
   - Enable specialized domain agents (ACP, security, deployment)

## Contributing

We welcome contributions! This is a prototype demonstrating the AEP vision. To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - See LICENSE file for details

## Contact & Support

For questions, feedback, or enterprise deployment discussions:
- GitHub Issues: [Create an issue](https://github.com/rrbanda/agentic-experience-layer/issues)
- Documentation: [Coming soon]

---

**AEP: Bringing context, safety, and orchestration to every AI assistant in enterprise software development**
