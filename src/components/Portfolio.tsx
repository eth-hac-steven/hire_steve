import { useState } from 'react';
import { Download, Github, Shield, Activity, Network, Database, Terminal, Lock, HelpCircle } from 'lucide-react';

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Home SIEM Lab with Splunk',
      category: 'cybersecurity',
      description: 'Built a comprehensive SIEM environment using Splunk to monitor and analyze security events from multiple sources including Windows Event Logs, Sysmon, and network traffic.',
      technologies: ['Splunk', 'Windows Server', 'Sysmon', 'Kali Linux'],
      highlights: [
        'Configured log collection from 5+ endpoints',
        'Created 15+ custom detection rules',
        'Implemented correlation searches for attack patterns',
        'Developed dashboard for real-time monitoring'
      ],
      icon: Activity,
      downloadLink: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Network Traffic Analysis Lab',
      category: 'cybersecurity',
      description: 'Set up a controlled environment to capture and analyze malicious network traffic using Wireshark and Security Onion, practicing identification of various attack vectors.',
      technologies: ['Wireshark', 'Security Onion', 'tcpdump', 'Suricata'],
      highlights: [
        'Analyzed PCAP files from malware samples',
        'Identified C2 communications and data exfiltration',
        'Created IDS signatures for detected threats',
        'Documented findings using MITRE ATT&CK framework'
      ],
      icon: Network,
      downloadLink: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Active Directory Attack & Defense',
      category: 'cybersecurity',
      description: 'Deployed a full Active Directory domain environment to simulate common attack techniques and implement defensive measures and detection strategies.',
      technologies: ['Active Directory', 'PowerShell', 'Bloodhound', 'Mimikatz'],
      highlights: [
        'Simulated attacks: Kerberoasting, Pass-the-Hash',
        'Implemented Group Policy hardening',
        'Configured advanced audit policies',
        'Set up honeypot accounts for detection'
      ],
      icon: Lock,
      downloadLink: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Malware Analysis Sandbox',
      category: 'cybersecurity',
      description: 'Created an isolated environment for safe malware analysis using virtualization, incorporating tools for static and dynamic analysis of suspicious files.',
      technologies: ['VirtualBox', 'REMnux', 'Cuckoo Sandbox', 'YARA'],
      highlights: [
        'Analyzed 20+ malware samples safely',
        'Documented behavioral patterns and IOCs',
        'Created YARA rules for detection',
        'Reverse engineered basic malware functionality'
      ],
      icon: Terminal,
      downloadLink: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Automated Threat Intelligence Platform',
      category: 'cybersecurity',
      description: 'Developed scripts to automatically collect, parse, and correlate threat intelligence feeds for proactive security monitoring and threat hunting.',
      technologies: ['Python', 'APIs', 'ELK Stack', 'MISP'],
      highlights: [
        'Integrated 5+ threat intelligence feeds',
        'Automated IOC extraction and enrichment',
        'Built correlation engine for known threats',
        'Created alerting system for critical IOCs'
      ],
      icon: Database,
      downloadLink: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Incident Response Playbook',
      category: 'cybersecurity',
      description: 'Developed comprehensive incident response procedures and practiced various scenarios in a lab environment to improve detection and response times.',
      technologies: ['NIST Framework', 'TheHive', 'Volatility', 'Autopsy'],
      highlights: [
        'Created playbooks for 8 incident types',
        'Practiced ransomware containment procedures',
        'Performed memory forensics on compromised systems',
        'Documented complete IR lifecycle'
      ],
      icon: Shield,
      downloadLink: '#',
      github: '#'
    },
    {
      id: 7,
      title: 'Help Desk Ticketing System Implementation',
      category: 'helpdesk',
      description: 'Led the implementation and optimization of ServiceNow ticketing system, improving ticket resolution time by 30% and user satisfaction scores.',
      technologies: ['ServiceNow', 'ITIL', 'PowerShell', 'Excel'],
      highlights: [
        'Configured automated ticket routing workflows',
        'Created knowledge base with 100+ articles',
        'Reduced average ticket resolution time to 2 hours',
        'Trained 15 team members on new system'
      ],
      icon: HelpCircle,
      downloadLink: '#',
      github: '#'
    },
    {
      id: 8,
      title: 'IT Asset Management & Inventory System',
      category: 'helpdesk',
      description: 'Developed and maintained comprehensive IT asset tracking system to manage hardware inventory, software licenses, and equipment lifecycle.',
      technologies: ['Active Directory', 'Excel', 'PowerShell', 'SCCM'],
      highlights: [
        'Tracked 500+ devices across organization',
        'Automated asset discovery and reporting',
        'Managed software license compliance',
        'Reduced equipment replacement costs by 20%'
      ],
      icon: Database,
      downloadLink: '#',
      github: '#'
    },
    {
      id: 9,
      title: 'User Onboarding & Offboarding Automation',
      category: 'helpdesk',
      description: 'Created automated scripts to streamline user account provisioning and deprovisioning, reducing manual effort and improving security.',
      technologies: ['PowerShell', 'Active Directory', 'Office 365', 'Azure AD'],
      highlights: [
        'Automated account creation process from 2 hours to 15 minutes',
        'Implemented standardized security group assignments',
        'Created automated offboarding checklist system',
        'Improved compliance with immediate access removal',
      ],
      icon: Terminal,
      downloadLink: '#',
      github: '#'
    },
    {
      id: 10,
      title: 'GRC compliance checklist',
      category: 'G.R.C',
      description: 'Developed and maintained comprehensive IT asset tracking system to manage hardware inventory, software licenses, and equipment lifecycle.',
      technologies: ['Active Directory', 'Excel', 'PowerShell', 'SCCM'],
      highlights: [
        'Tracked 500+ devices across organization',
        'Automated asset discovery and reporting',
        'Managed software license compliance',
        'Reduced equipment replacement costs by 20%',
      ],
      icon: Database,
      downloadLink: '#',
      github: '#'
    },
     {
      id: 10,
      title: 'Project Autopsy',
      category: 'Helpdesk',
      description: 'developed and maintained comprehensive IT asset tracking system to manage hardware inventory, software licenses, and equipment lifecycle.',
      technologies: ['Active Directory', 'Excel', 'PowerShell', 'SCCM'],
      highlights: [
        'Tracked 500+ devices across organization',
        'Automated asset discovery and reporting',
        'Managed software license compliance',
        'Reduced equipment replacement costs by 50%'
      ],
      icon: Database,
      downloadLink: '#',
      github: '#'
    },
    {
      id: 11,
      title: 'Acceptable Use Policy Implementation',
      category: 'Helpdesk',
      description: 'developed and maintained comprehensive IT asset tracking system to manage hardware inventory, software licenses, and equipment lifecycle.',
      technologies: ['sophos', 'lDAP', 'PowerShell',],
      highlights: [
        'Tracked 500+ devices across organization',
        'Automated asset discovery and reporting',
        'Managed software license compliance',
        'Reduced equipment replacement costs by 50%'
      ],
      icon: Database,
      downloadLink: '#',
      github: '#'
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'cybersecurity', label: 'Cybersecurity Projects' },
    { id: 'helpdesk', label: 'Help Desk Projects' },
    { id: 'G.R.C', label: 'G.R.C Projects' },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">Portfolio & Projects</h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg">
            Hands-on home lab projects demonstrating practical cybersecurity skills 
            and experience with industry-standard security tools and methodologies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category.id
                  ? 'bg-cyan-500 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-cyan-900/20'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="bg-slate-900 border border-cyan-900/20 rounded-xl overflow-hidden hover:border-cyan-400/40 transition-all hover:transform hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-10 h-10 text-cyan-400" />
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                        title="View on GitHub"
                      >
                        <Github className="w-4 h-4 text-slate-300" />
                      </a>
                      <a
                        href={project.downloadLink}
                        className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                        title="Download Project"
                      >
                        <Download className="w-4 h-4 text-slate-300" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-white mb-3">{project.title}</h3>
                  <p className="text-slate-400 mb-4 text-sm">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-white text-sm mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.highlights.slice(0, 4).map((highlight, index) => (
                        <li key={index} className="text-slate-400 text-sm flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}