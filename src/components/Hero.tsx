import { ArrowRight, Shield, Terminal, Database, FileText } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export function Hero({ setActiveSection }: HeroProps) {
  const handleContactClick = () => {
    setActiveSection('contact');
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePortfolioClick = () => {
    setActiveSection('portfolio');
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1760199789455-49098afd02f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjU3MTIxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/85 to-slate-950/90" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(6 182 212) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
             <h1 className="text-cyan-400 text-3xl ">
              Peter-okolie Tobechukwu steven
            </h1>
            <h1 className="text-white-400 mb-26">
              Help Desk Support & SOC Analyst
            </h1>
            
            <p className="text-slate-300 text-lg mb-8">
              Leveraging a years worth of IT support experience and hands-on home lab projects 
              to transition into cybersecurity operations. Passionate about threat detection, 
              incident response, and building secure systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleContactClick}
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors flex items-center gap-2"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={handlePortfolioClick}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-700"
              >
                View Projects
              </button>
              <a
                href="#"
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-700 flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-900/20 rounded-xl p-6 hover:border-cyan-400/40 transition-colors">
              <Shield className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-white mb-2">Security Operations</h3>
              <p className="text-slate-400 text-sm">
                SIEM, threat hunting, and incident response
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-900/20 rounded-xl p-6 hover:border-cyan-400/40 transition-colors mt-8">
              <Terminal className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-white mb-2">Home Lab Projects</h3>
              <p className="text-slate-400 text-sm">
                Hands-on experience with security tools
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-900/20 rounded-xl p-6 hover:border-cyan-400/40 transition-colors">
              <Database className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-white mb-2">IT Foundation</h3>
              <p className="text-slate-400 text-sm">
                Years of help desk and support experience
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 rounded-xl p-6 mt-8">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="text-white mb-2">Career Transition</h3>
              <p className="text-slate-300 text-sm">
                Actively pursuing IT and SOC analyst opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}