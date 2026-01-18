import { GraduationCap, Award, Briefcase, TrendingUp, Book, book-open-check } from 'lucide-react';

export function About() {
  const skills = {
    technical: [
      'SIEM Tools (Splunk, ELK Stack)',
      'Network Security & Monitoring',
      'Log Analysis & Threat Detection',
      'Incident Response Procedures',
      'Windows & Linux Security',
      'Wireshark & Network Analysis',
      'Security Frameworks (NIST, MITRE ATT&CK)',
      'Virtualization (VMware, VirtualBox)',
    ],
    helpDesk: [
      'Technical Support & Troubleshooting',
      'Active Directory Management',
      'Ticketing Systems (ServiceNow,Jira,Freshdesk,Spicework)',
      'User Service Excellence; Acheiving a 90% user satisfaction',
      'Documentation & Knowledge Base',
      'Remote Support Tools(Anydesk,RDP)',
    ],
  };

  const certifications = [
    { name: 'Cisco Introduction to Cyber Security', status: 'Completed', year: '2023' },
    { name: 'Google Cybersecurity Certificate', status: 'Completed', year: '2024' },
    { name: 'THM Advent of Cyber 2025', status: 'Completed', year: '2025' },
    { name: 'ISC2 Certified in Cyber Security', status: 'Completed', year: '2025' },
    { name: 'TCM Pratical Help Desk(C.O.C)', status: 'Completed', year: '2025' },
    { name: 'CompTIA Security+', status: 'In Progress', year: '2026' },
    { name: 'CompTIA CySA+', status: 'Planned', year: '2026' },
    { name: 'Blue Team Level 1', status: 'Planned', year: '2027' },
  ];

  return (
    <div className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">About Me</h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg">
            A passionate IT practioner making a strategic transition into cybersecurity, 
            combining practical support experience with dedicated security operations training.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="mb-16">
          <h3 className="text-white mb-8 text-center">My Journey</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-slate-800 border border-cyan-900/20 rounded-xl p-6 hover:border-cyan-400/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Book className="w-6 h-6 text-cyan-400" />
                  <span className="text-cyan-400">2020 - 2024</span>
                </div>
                <h4 className="text-white mb-2">Bsc Cyber Security</h4>
                <p className="text-slate-400">
                  Built a strong foundation and passion in IT infrastructure and the Cyber Security fundamental and finished 
                  strong with a project on Network security
                </p>
              </div>
            </div>
             <div className="relative">
              <div className="bg-slate-800 border border-cyan-900/20 rounded-xl p-6 hover:border-cyan-400/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
             <Briefcase className="w-6 h-6 text-cyan-400" />
                  <span className="text-cyan-400">Feb.2025 - Dec.2025</span>
                </div>
                <h4 className="text-white mb-2">Help Desk Specialist(NYSC)</h4>
                <p className="text-slate-400">
                  leveled up by appying theory to practical enhancing my foundation in IT infrastructure, troubleshooting, 
                  ACLs and IAM also upholding existing security principles and customer service. Managed 50+ daily tickets with 90% satisfaction rate.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-800 border border-cyan-900/20 rounded-xl p-6 hover:border-cyan-400/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <book-open-check className="w-6 h-6 text-cyan-400" />
                  <span className="text-cyan-400">2026 - Present</span>
                </div>
                <h4 className="text-white mb-2">Security Training</h4>
                <p className="text-slate-400">
                  Pursuing certifications and hands-on training in security operations, 
                  threat detection, and incident response methodologies.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-800 border border-cyan-900/20 rounded-xl p-6 hover:border-cyan-400/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-cyan-400" />
                  <span className="text-cyan-400">2027 - 2035</span>
                </div>
                <h4 className="text-white mb-2">SOC Analyst Role(L1,L2,L3)</h4>
                <p className="text-slate-400">
                  Seeking opportunities to apply security knowledge in a SOC environment, 
                  focusing on threat hunting and incident response, Ultimately gainig more experience.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                  <span className="text-cyan-400">2035-Future</span>
                </div>
                <h4 className="text-white mb-2">CEO of Threatshpere Consulting </h4>
                <p className="text-slate-300">
                  A Nigerian based Cyber security firm to help the people of Nigerian and Companies alike understand the digital world that has been in
                  existence and how to navigate it while also meeting the HIPAA, PCI DSS,NDPB etc compliance standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-white mb-6">Security Skills</h3>
            <div className="bg-slate-800 border border-cyan-900/20 rounded-xl p-6">
              <ul className="grid grid-cols-1 gap-3">
                {skills.technical.map((skill, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-white mb-6">Help Desk Experience</h3>
            <div className="bg-slate-800 border border-cyan-900/20 rounded-xl p-6">
              <ul className="grid grid-cols-1 gap-3">
                {skills.helpDesk.map((skill, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-white mb-8 text-center">Certifications & Learning Path</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-800 border border-cyan-900/20 rounded-xl p-6 hover:border-cyan-400/40 transition-colors"
              >
                <Award className="w-8 h-8 text-cyan-400 mb-4" />
                <h4 className="text-white mb-2">{cert.name}</h4>
                <div className="flex items-center justify-between">
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    cert.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400'
                      : cert.status === 'In Progress'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-slate-700 text-slate-400'
                  }`}>
                    {cert.status}
                  </span>
                  <span className="text-slate-400 text-sm">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
