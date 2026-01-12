import { useState } from 'react';
import { Calendar, Clock, ArrowRight, TrendingUp, ArrowLeft } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  fullContent: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
}

export function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'My Journey from Help Desk to SOC Analyst: Lessons Learned',
      excerpt: 'Transitioning careers in IT can be challenging. Here are the key strategies and resources that helped me make the leap into cybersecurity...',
      fullContent: `
        <p>When I first started my career in IT as a help desk specialist, I never imagined I'd be transitioning into cybersecurity. Yet here I am, actively pursuing SOC analyst roles and building the skills needed to succeed in this exciting field.</p>

        <h3>The Decision to Transition</h3>
        <p>After five years in help desk support, I realized I wanted more technical challenges. I was intrigued by the security incidents I occasionally encountered and wanted to be on the front lines of defense. The growing demand for cybersecurity professionals and the intellectual challenge of the field made it an obvious choice.</p>

        <h3>Key Strategies That Helped</h3>
        <h4>1. Leverage Your Existing Skills</h4>
        <p>Your help desk experience is more valuable than you think. Understanding Active Directory, troubleshooting network issues, and working with end users gives you a solid foundation. I've found that my experience identifying suspicious behavior and understanding user workflows has been invaluable.</p>

        <h4>2. Build a Home Lab</h4>
        <p>This was game-changing. I started with a simple VirtualBox setup and gradually built out more complex environments. My SIEM lab with Splunk taught me more than any book could. The hands-on experience is what employers want to see.</p>

        <h4>3. Get Certified</h4>
        <p>I started with Security+ which gave me a broad foundation. I'm now working toward CySA+ to deepen my analyst skills. Certifications validate your knowledge and show commitment to the field.</p>

        <h4>4. Document Everything</h4>
        <p>Every project I complete gets documented. I write blog posts about what I learned, create GitHub repositories with my code, and maintain detailed notes. This not only helps me remember but also demonstrates my skills to potential employers.</p>

        <h3>Challenges I Faced</h3>
        <p>The transition hasn't been easy. Imposter syndrome is real, especially when you're competing with candidates who have security backgrounds. But I've learned to focus on what makes me unique – my customer service skills, troubleshooting ability, and genuine passion for learning.</p>

        <h3>Advice for Others Making the Transition</h3>
        <ul>
          <li>Start learning today, even if it's just 30 minutes a day</li>
          <li>Join online communities (Reddit's r/cybersecurity, Discord servers)</li>
          <li>Network with security professionals on LinkedIn</li>
          <li>Don't underestimate your current skills – they're transferable</li>
          <li>Be patient with yourself – this is a marathon, not a sprint</li>
        </ul>

        <h3>Looking Forward</h3>
        <p>While I haven't landed my SOC analyst role yet, I'm confident in the path I'm on. Every lab I build, every blog post I write, and every certification I earn brings me closer to my goal. The journey itself has been incredibly rewarding.</p>

        <p>If you're considering making a similar transition, I encourage you to take that first step. The cybersecurity community is welcoming, the work is meaningful, and the opportunities are endless.</p>
      `,
      date: 'December 10, 2024',
      readTime: '8 min read',
      category: 'Career Transition',
      featured: true
    },
    {
      id: 2,
      title: 'Building Your First SIEM Lab: A Complete Guide',
      excerpt: 'Step-by-step tutorial on setting up Splunk in a home lab environment, including log collection, parsing, and creating your first detection rules...',
      fullContent: `
        <p>Setting up a SIEM (Security Information and Event Management) lab is one of the best ways to develop practical security skills. In this guide, I'll walk you through building a complete Splunk lab from scratch.</p>

        <h3>What You'll Need</h3>
        <ul>
          <li>A computer with at least 16GB RAM (32GB recommended)</li>
          <li>VirtualBox or VMware</li>
          <li>Splunk Free License (60-day Enterprise trial or Free edition)</li>
          <li>Windows Server ISO and a couple of Windows 10 ISOs</li>
          <li>Kali Linux for attack simulation</li>
        </ul>

        <h3>Lab Architecture</h3>
        <p>My lab consists of:</p>
        <ul>
          <li>1 Splunk Server (Ubuntu 22.04) - 8GB RAM</li>
          <li>1 Windows Server 2022 (Domain Controller) - 4GB RAM</li>
          <li>2 Windows 10 Endpoints - 4GB RAM each</li>
          <li>1 Kali Linux (Attacker) - 2GB RAM</li>
        </ul>

        <h3>Step 1: Install and Configure Splunk</h3>
        <p>Download Splunk Enterprise and install it on your Ubuntu server. The installation is straightforward, but here are some key configuration points:</p>
        <ul>
          <li>Set a strong admin password</li>
          <li>Configure receiving on port 9997 for Universal Forwarders</li>
          <li>Set up SSL certificates for secure communication</li>
        </ul>

        <h3>Step 2: Deploy Universal Forwarders</h3>
        <p>Install Splunk Universal Forwarders on your Windows machines. This is how you'll collect logs and send them to your Splunk server. Configure them to monitor:</p>
        <ul>
          <li>Windows Event Logs (Security, System, Application)</li>
          <li>Sysmon logs (install Sysmon first with SwiftOnSecurity config)</li>
          <li>PowerShell logs</li>
        </ul>

        <h3>Step 3: Create Your First Search</h3>
        <p>Once logs are flowing, start with simple searches:</p>
        <code>index=windows EventCode=4624 | stats count by user</code>
        <p>This shows successful logons by user. From here, you can build more complex queries.</p>

        <h3>Step 4: Build Detection Rules</h3>
        <p>Create alerts for suspicious activities:</p>
        <ul>
          <li>Multiple failed login attempts</li>
          <li>Processes spawning from unusual parent processes</li>
          <li>Network connections to unusual ports</li>
          <li>New scheduled tasks created</li>
        </ul>

        <h3>Step 5: Simulate Attacks</h3>
        <p>Use your Kali Linux machine to simulate attacks and test your detection rules. Try:</p>
        <ul>
          <li>Credential spraying</li>
          <li>Lateral movement techniques</li>
          <li>Data exfiltration</li>
        </ul>

        <h3>Best Practices</h3>
        <ul>
          <li>Start small and add complexity gradually</li>
          <li>Document everything you do</li>
          <li>Use realistic data and attack scenarios</li>
          <li>Practice writing clear, actionable alerts</li>
        </ul>

        <h3>Conclusion</h3>
        <p>Building a SIEM lab takes time but the learning is invaluable. You'll develop skills in log analysis, threat detection, and incident response that directly translate to SOC analyst work. Start building today!</p>
      `,
      date: 'December 5, 2024',
      readTime: '12 min read',
      category: 'Technical Tutorial'
    },
    {
      id: 3,
      title: 'Understanding MITRE ATT&CK Framework for Blue Team Operations',
      excerpt: 'How the MITRE ATT&CK framework helps SOC analysts understand adversary tactics and improve detection capabilities in security operations...',
      fullContent: `
        <p>The MITRE ATT&CK framework has become essential knowledge for anyone working in cybersecurity defense. As I've been preparing for SOC analyst roles, understanding this framework has transformed how I think about threat detection and incident response.</p>

        <h3>What is MITRE ATT&CK?</h3>
        <p>ATT&CK (Adversarial Tactics, Techniques, and Common Knowledge) is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. It's organized into tactics (the "why") and techniques (the "how") of cyber attacks.</p>

        <h3>The 14 Tactics</h3>
        <p>The framework is organized around 14 tactics that represent an adversary's technical goals:</p>
        <ul>
          <li>Reconnaissance</li>
          <li>Resource Development</li>
          <li>Initial Access</li>
          <li>Execution</li>
          <li>Persistence</li>
          <li>Privilege Escalation</li>
          <li>Defense Evasion</li>
          <li>Credential Access</li>
          <li>Discovery</li>
          <li>Lateral Movement</li>
          <li>Collection</li>
          <li>Command and Control</li>
          <li>Exfiltration</li>
          <li>Impact</li>
        </ul>

        <h3>How I Use ATT&CK in My Lab</h3>
        <h4>1. Mapping Detections</h4>
        <p>When I create a new detection rule in my SIEM, I map it to specific ATT&CK techniques. This helps me understand coverage gaps and prioritize what to build next.</p>

        <h4>2. Threat Hunting</h4>
        <p>I use ATT&CK to guide my threat hunting exercises. For example, I might spend a day looking for signs of T1003 (Credential Dumping) in my lab environment.</p>

        <h4>3. Incident Response</h4>
        <p>When analyzing an incident, I map observed behaviors to ATT&CK techniques. This helps me understand what stage of an attack I'm seeing and what might come next.</p>

        <h3>Practical Examples</h3>
        <h4>Example 1: Detecting Kerberoasting (T1558.003)</h4>
        <p>In my Active Directory lab, I look for Event ID 4769 with RC4 encryption and unusual service names. This technique is commonly used by attackers to obtain credentials.</p>

        <h4>Example 2: Monitoring for PowerShell Empire (T1059.001)</h4>
        <p>I've configured Sysmon to log PowerShell script blocks and watch for obfuscated commands, base64 encoded payloads, and download cradles.</p>

        <h3>Resources for Learning</h3>
        <ul>
          <li>MITRE ATT&CK Navigator - for visualizing coverage</li>
          <li>ATT&CK Evaluations - to see how different tools perform</li>
          <li>Atomic Red Team - for testing detections</li>
          <li>CTID (Center for Threat-Informed Defense) projects</li>
        </ul>

        <h3>Key Takeaways</h3>
        <p>Understanding MITRE ATT&CK isn't just about memorizing techniques. It's about developing a threat-informed mindset. When you can think like an attacker and map defensive capabilities to their techniques, you become a more effective defender.</p>

        <p>For anyone transitioning into a SOC role, I highly recommend making ATT&CK a central part of your studies. It's a common language that security professionals use worldwide, and it will make you more effective in interviews and on the job.</p>
      `,
      date: 'November 28, 2024',
      readTime: '10 min read',
      category: 'Security Framework'
    },
    {
      id: 4,
      title: 'Essential Skills Every SOC Analyst Should Master',
      excerpt: 'Based on my research and training, here are the critical technical and soft skills needed to succeed in a Security Operations Center...',
      fullContent: `
        <p>Through my research, networking, and training, I've identified the essential skills that every SOC analyst needs to succeed. Here's what I've been focusing on in my transition.</p>

        <h3>Technical Skills</h3>
        <h4>1. Log Analysis</h4>
        <p>This is the bread and butter of SOC work. You need to be comfortable reading and interpreting logs from various sources: Windows Event Logs, Linux syslogs, firewall logs, web server logs, and more.</p>

        <h4>2. SIEM Proficiency</h4>
        <p>Whether it's Splunk, ELK, QRadar, or others, you need to master at least one SIEM platform. Focus on writing effective queries, creating alerts, and building dashboards.</p>

        <h4>3. Network Analysis</h4>
        <p>Understanding network protocols and being able to analyze packet captures with tools like Wireshark is crucial. You should be able to spot anomalous traffic patterns and understand common attack indicators.</p>

        <h4>4. Malware Analysis Basics</h4>
        <p>While you don't need to be a reverse engineer, understanding malware behavior, IOCs, and how to safely analyze suspicious files is important.</p>

        <h4>5. Scripting and Automation</h4>
        <p>Python and PowerShell are your friends. Being able to automate repetitive tasks and write custom tools sets you apart from other analysts.</p>

        <h3>Soft Skills</h3>
        <h4>1. Communication</h4>
        <p>This is where my help desk background shines. You need to explain technical findings to non-technical stakeholders clearly and concisely.</p>

        <h4>2. Critical Thinking</h4>
        <p>Not every alert is a real threat. You need to be able to analyze, correlate, and determine what's truly malicious versus a false positive.</p>

        <h4>3. Continuous Learning</h4>
        <p>The threat landscape changes constantly. You need to stay current with new attack techniques, tools, and defensive strategies.</p>

        <h4>4. Attention to Detail</h4>
        <p>Sometimes the difference between detecting an attack and missing it comes down to noticing small anomalies in logs or network traffic.</p>

        <h4>5. Stress Management</h4>
        <p>SOC work can be high-pressure, especially during active incidents. You need to stay calm and methodical under stress.</p>

        <h3>Knowledge Areas</h3>
        <ul>
          <li>Security Frameworks (NIST, MITRE ATT&CK)</li>
          <li>Incident Response Processes</li>
          <li>Threat Intelligence</li>
          <li>Compliance Requirements (PCI-DSS, HIPAA, etc.)</li>
          <li>Operating System Internals (Windows and Linux)</li>
        </ul>

        <h3>How I'm Building These Skills</h3>
        <ul>
          <li>Home lab projects for hands-on practice</li>
          <li>Online platforms like TryHackMe and HackTheBox</li>
          <li>Reading threat reports and blog posts</li>
          <li>Participating in CTF competitions</li>
          <li>Following security researchers on Twitter/LinkedIn</li>
        </ul>

        <h3>My Advice</h3>
        <p>Don't try to master everything at once. Focus on building a strong foundation in log analysis and SIEM work, then branch out from there. Your help desk experience already gives you valuable skills in troubleshooting and communication – lean into those strengths while building technical capabilities.</p>

        <p>Remember, everyone started somewhere. The key is consistent, deliberate practice and never stopping learning.</p>
      `,
      date: 'November 20, 2024',
      readTime: '7 min read',
      category: 'Career Development'
    },
    {
      id: 5,
      title: 'Analyzing Network Traffic: Detecting C2 Communications',
      excerpt: 'A deep dive into identifying command and control traffic patterns using Wireshark and how to spot anomalies in network communications...',
      fullContent: `
        <p>One of the most critical skills for a SOC analyst is the ability to detect command and control (C2) communications in network traffic. In this post, I'll share what I've learned about identifying these malicious communications in my home lab.</p>

        <h3>What is C2 Communication?</h3>
        <p>After compromising a system, attackers need to maintain communication with it to issue commands, exfiltrate data, or download additional tools. This communication channel is called Command and Control.</p>

        <h3>Common C2 Techniques</h3>
        <h4>1. HTTP/HTTPS Traffic</h4>
        <p>Attackers often use web traffic to blend in with normal activity. Look for:</p>
        <ul>
          <li>Regular beaconing at consistent intervals</li>
          <li>Unusual user agents</li>
          <li>Suspicious domain names or URIs</li>
          <li>Data in unusual places (GET parameters, cookies, headers)</li>
        </ul>

        <h4>2. DNS Tunneling</h4>
        <p>Some malware uses DNS requests to communicate. Red flags include:</p>
        <ul>
          <li>Unusually long subdomain names</li>
          <li>High volume of queries to the same domain</li>
          <li>Queries to suspicious TLDs</li>
          <li>TXT record queries (can contain C2 data)</li>
        </ul>

        <h4>3. Custom Protocols</h4>
        <p>Advanced malware might use custom protocols or encrypted communications over non-standard ports.</p>

        <h3>Detection in Wireshark</h3>
        <h4>Finding Beaconing Behavior</h4>
        <p>I use Wireshark's statistical tools to identify regular patterns:</p>
        <ul>
          <li>Statistics > Conversations - look for consistent communication patterns</li>
          <li>Statistics > Protocol Hierarchy - identify unusual protocols</li>
          <li>Use display filters: http.request or dns</li>
        </ul>

        <h4>Analyzing Suspicious Connections</h4>
        <code>tcp.flags.syn==1 and tcp.flags.ack==0</code>
        <p>This filter shows new connection attempts. Look for connections to unusual IPs or ports.</p>

        <h3>Real-World Example from My Lab</h3>
        <p>I simulated a Cobalt Strike beacon in my lab. Here's what I found:</p>
        <ul>
          <li>Regular HTTP GET requests every 60 seconds to the same domain</li>
          <li>Generic User-Agent (Mozilla/5.0)</li>
          <li>Empty or small responses most of the time</li>
          <li>Occasional larger responses (containing commands)</li>
        </ul>

        <h3>Tools I Use</h3>
        <ul>
          <li>Wireshark - for deep packet analysis</li>
          <li>Security Onion - for real-time detection</li>
          <li>Rita (Real Intelligence Threat Analytics) - for beaconing detection</li>
          <li>Zeek logs - for connection logging and analysis</li>
        </ul>

        <h3>Creating Detection Rules</h3>
        <p>Based on my analysis, I created Suricata rules to detect similar C2 traffic:</p>
        <ul>
          <li>Alert on regular beaconing patterns</li>
          <li>Flag unusual user agents</li>
          <li>Detect connections to known malicious IPs</li>
          <li>Monitor for data exfiltration over DNS</li>
        </ul>

        <h3>Best Practices</h3>
        <ul>
          <li>Always establish a baseline of normal network traffic first</li>
          <li>Look for deviations from the baseline</li>
          <li>Combine multiple indicators for higher confidence</li>
          <li>Document your findings thoroughly</li>
          <li>Practice with malware samples in a safe environment</li>
        </ul>

        <h3>Conclusion</h3>
        <p>Detecting C2 communications requires a combination of understanding normal network behavior, knowing common attacker techniques, and using the right tools. Practice in a lab environment is invaluable for developing this skill.</p>
      `,
      date: 'November 15, 2024',
      readTime: '15 min read',
      category: 'Technical Tutorial'
    },
    {
      id: 6,
      title: 'Active Directory Security: Common Attack Vectors',
      excerpt: 'Exploring prevalent Active Directory attacks like Kerberoasting and Pass-the-Hash, plus defensive strategies to mitigate these threats...',
      fullContent: `
        <p>Active Directory is the backbone of most enterprise networks, and it's also a prime target for attackers. Understanding common AD attacks is essential for any aspiring SOC analyst.</p>

        <h3>Why Attackers Target AD</h3>
        <p>Compromising Active Directory gives attackers:</p>
        <ul>
          <li>Access to credential information</li>
          <li>Ability to move laterally across the network</li>
          <li>Potential for privilege escalation</li>
          <li>Long-term persistence mechanisms</li>
        </ul>

        <h3>Common Attack Techniques</h3>
        <h4>1. Kerberoasting (T1558.003)</h4>
        <p>Attackers request service tickets for accounts with Service Principal Names (SPNs) and crack the encrypted tickets offline to obtain credentials.</p>
        
        <p><strong>Detection:</strong></p>
        <ul>
          <li>Monitor Event ID 4769 (Kerberos service ticket requests)</li>
          <li>Look for RC4 encryption (weaker and preferred by attackers)</li>
          <li>Watch for unusual accounts requesting many SPNs</li>
        </ul>

        <h4>2. Pass-the-Hash (T1550.002)</h4>
        <p>Using stolen password hashes to authenticate without knowing the actual password.</p>
        
        <p><strong>Detection:</strong></p>
        <ul>
          <li>Monitor for lateral movement patterns</li>
          <li>Look for NTLM authentication from unusual sources</li>
          <li>Watch for administrative tool usage from unexpected accounts</li>
        </ul>

        <h4>3. Golden Ticket (T1558.001)</h4>
        <p>Creating forged Kerberos tickets after compromising the KRBTGT account hash.</p>
        
        <p><strong>Detection:</strong></p>
        <ul>
          <li>Extremely difficult to detect</li>
          <li>Look for tickets with unusual lifetimes</li>
          <li>Monitor for Event ID 4768 anomalies</li>
          <li>Prevention is key - protect the KRBTGT account</li>
        </ul>

        <h4>4. DCSync (T1003.006)</h4>
        <p>Simulating a domain controller to request password data from other DCs.</p>
        
        <p><strong>Detection:</strong></p>
        <ul>
          <li>Monitor Directory Service Access events (4662)</li>
          <li>Look for replication requests from non-DC machines</li>
          <li>Alert on DS-Replication-Get-Changes permissions usage</li>
        </ul>

        <h3>Defense Strategies</h3>
        <h4>Prevention</h4>
        <ul>
          <li>Implement tiered administrative model</li>
          <li>Use strong passwords for service accounts</li>
          <li>Enable advanced audit policies</li>
          <li>Implement LAPS for local admin passwords</li>
          <li>Disable NTLM where possible</li>
          <li>Regularly rotate KRBTGT password</li>
        </ul>

        <h4>Detection</h4>
        <ul>
          <li>Deploy Sysmon with good configuration</li>
          <li>Monitor authentication logs centrally</li>
          <li>Use tools like Bloodhound to identify attack paths</li>
          <li>Implement honeypot accounts and objects</li>
        </ul>

        <h3>My Lab Setup</h3>
        <p>I built an AD environment specifically to practice these attacks and defenses:</p>
        <ul>
          <li>Domain Controller with full logging enabled</li>
          <li>Multiple user accounts with various privilege levels</li>
          <li>Service accounts with SPNs</li>
          <li>Sysmon deployed on all systems</li>
          <li>Logs forwarded to Splunk for analysis</li>
        </ul>

        <h3>Practical Exercises</h3>
        <p>Here's what I practice regularly:</p>
        <ul>
          <li>Execute attacks using tools like Rubeus and Mimikatz</li>
          <li>Analyze resulting logs to understand indicators</li>
          <li>Create detection rules in my SIEM</li>
          <li>Test detection effectiveness</li>
          <li>Document findings and improve defenses</li>
        </ul>

        <h3>Key Lessons</h3>
        <ul>
          <li>AD attacks often leave traces - you just need to know where to look</li>
          <li>Proper logging is essential for detection</li>
          <li>Defense in depth is critical - one control is never enough</li>
          <li>Understanding the attack helps you build better detections</li>
        </ul>

        <h3>Resources for Learning</h3>
        <ul>
          <li>ired.team - excellent AD attack documentation</li>
          <li>ADSecurity.org - Sean Metcalf's blog</li>
          <li>Bloodhound documentation and walkthroughs</li>
          <li>Microsoft's AD security best practices</li>
        </ul>

        <h3>Final Thoughts</h3>
        <p>Active Directory security is complex, but it's also one of the most important areas to master as a SOC analyst. The attacks I've practiced in my lab are the same ones real attackers use daily. Understanding both the offensive and defensive sides makes you a more effective defender.</p>
      `,
      date: 'November 8, 2024',
      readTime: '11 min read',
      category: 'Security Research'
    }
  ];

  if (selectedPost) {
    return (
      <div className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <button
            onClick={() => setSelectedPost(null)}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all posts
          </button>

          <article className="bg-slate-800 border border-cyan-900/20 rounded-xl p-8 md:p-12">
            <div className="mb-6">
              <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full border border-cyan-500/20">
                {selectedPost.category}
              </span>
            </div>

            <h1 className="text-white mb-6">{selectedPost.title}</h1>

            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-slate-700">
              <div className="flex items-center gap-2 text-slate-400">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{selectedPost.date}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{selectedPost.readTime}</span>
              </div>
            </div>

            <div 
              className="prose prose-invert prose-cyan max-w-none"
              dangerouslySetInnerHTML={{ __html: selectedPost.fullContent }}
              style={{
                color: '#cbd5e1',
              }}
            />
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">Blog & Insights</h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg">
            Sharing my learning journey, technical tutorials, and insights on transitioning 
            into cybersecurity and building practical security operations skills.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post) => (
          <div
            key={post.id}
            className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/40 rounded-xl p-8 mb-12 hover:border-cyan-400/60 transition-colors cursor-pointer"
            onClick={() => setSelectedPost(post)}
          >
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400">Featured Post</span>
            </div>
            <h3 className="text-white mb-4">{post.title}</h3>
            <p className="text-slate-300 mb-6 text-lg">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div className="flex items-center gap-2 text-slate-400">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{post.date}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{post.readTime}</span>
              </div>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                {post.category}
              </span>
            </div>
            <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              Read Full Article
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <article
              key={post.id}
              className="bg-slate-800 border border-cyan-900/20 rounded-xl overflow-hidden hover:border-cyan-400/40 transition-all hover:transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="p-6">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-500/20">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-white mb-3">{post.title}</h3>
                <p className="text-slate-400 mb-4 text-sm">{post.excerpt}</p>

                <div className="flex flex-col gap-3 mb-4 pb-4 border-b border-slate-700">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
