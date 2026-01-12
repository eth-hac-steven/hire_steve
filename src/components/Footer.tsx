import { Shield, Mail, Linkedin, Github, Heart } from 'lucide-react';

// TryHackMe SVG Icon Component
function TryHackMeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M10.705 0C7.54 0 4.902 2.285 4.349 5.291a4.525 4.525 0 0 0-4.107 4.5 4.525 4.525 0 0 0 4.52 4.52h6.761a.625.625 0 1 0 0-1.25H4.761a3.273 3.273 0 0 1-3.27-3.27 3.273 3.273 0 0 1 3.241-3.27h.357l.127-.344A4.295 4.295 0 0 1 10.705 1.25a4.295 4.295 0 0 1 4.302 4.033v.009l.03.034.073.431.575-.221a2.974 2.974 0 0 1 1.023-.182 2.993 2.993 0 0 1 2.99 2.99 2.993 2.993 0 0 1-2.99 2.99h-3.155a.625.625 0 1 0 0 1.25h3.155a4.243 4.243 0 0 0 4.24-4.24 4.243 4.243 0 0 0-3.522-4.182A5.544 5.544 0 0 0 10.705 0zM5.076 9.779v.028L7.5 15.882l2.424-6.075v-.028h1.455L8.277 18.97a.552.552 0 0 1-.518.356h-.518a.552.552 0 0 1-.518-.356L3.621 9.779h1.455zm7.646 0v.028l2.424 6.075 2.424-6.075v-.028h1.455l-3.102 9.191a.552.552 0 0 1-.518.356h-.518a.552.552 0 0 1-.518-.356l-3.102-9.191h1.455z"/>
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    sections: [
      {
        title: 'Navigation',
        links: [
          { label: 'Home', href: '#home' },
          { label: 'About', href: '#about' },
          { label: 'Portfolio', href: '#portfolio' },
          { label: 'Blog', href: '#blog' },
          { label: 'Contact', href: '#contact' },
        ]
      },
      {
        title: 'Resources',
        links: [
          { label: 'Resume', href: '#' },
          { label: 'Certifications', href: '#about' },
          { label: 'Projects', href: '#portfolio' },
          { label: 'Articles', href: '#blog' },
        ]
      },
      {
        title: 'Connect',
        links: [
          { label: 'LinkedIn', href: 'https://linkedin.com' },
          { label: 'GitHub', href: 'https://github.com' },
          { label: 'Email', href: 'mailto:yourname@email.com' },
        ]
      }
    ]
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-cyan-900/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-cyan-400" />
              <span className="text-white">SecOps Portfolio</span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Transitioning from Help Desk to SOC Analyst through continuous learning 
              and hands-on security projects.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-cyan-500/20 border border-cyan-900/20 hover:border-cyan-400/40 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 text-slate-300 hover:text-cyan-400" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-cyan-500/20 border border-cyan-900/20 hover:border-cyan-400/40 rounded-lg flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5 text-slate-300 hover:text-cyan-400" />
              </a>
              <a
                href="https://tryhackme.com/p/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-cyan-500/20 border border-cyan-900/20 hover:border-cyan-400/40 rounded-lg flex items-center justify-center transition-colors"
              >
                <TryHackMeIcon className="w-5 h-5 text-slate-300 hover:text-cyan-400" />
              </a>
              <a
                href="mailto:yourname@email.com"
                className="w-10 h-10 bg-slate-800 hover:bg-cyan-500/20 border border-cyan-900/20 hover:border-cyan-400/40 rounded-lg flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5 text-slate-300 hover:text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          handleLinkClick(link.href);
                        }
                      }}
                      className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cyan-900/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} SecOps. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-cyan-400" /> and dedication to cybersecurity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}