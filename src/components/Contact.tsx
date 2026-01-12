import { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, FileText } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    // For now, we'll just show a success message
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'stevenpeterokolie@gmail.com',
      link: 'mailto:stevenpeterokolie@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      link: 'https://linkedin.com/in/yourprofile'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/yourusername',
      link: 'https://github.com/yourusername'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Your City, State',
      link: null
    }
  ];

  return (
    <div className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">Get In Touch</h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg">
            Interested in discussing IT and SOC analyst opportunities, collaboration, or just want to connect? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-900 border border-cyan-900/20 rounded-xl p-8">
            <h3 className="text-white mb-6">Send a Message</h3>
            
            {submitted ? (
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 text-center">
                <div className="text-green-400 mb-2">✓ Message Sent Successfully!</div>
                <p className="text-slate-300 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 mb-2 text-sm">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-cyan-900/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/40 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-300 mb-2 text-sm">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-cyan-900/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/40 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-slate-300 mb-2 text-sm">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-cyan-900/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/40 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="job">Job Opportunity</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="question">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 mb-2 text-sm">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800 border border-cyan-900/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/40 transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information & Links */}
          <div className="space-y-6">
            <div className="bg-slate-900 border border-cyan-900/20 rounded-xl p-8">
              <h3 className="text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-slate-400 text-sm">{info.label}</div>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-cyan-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-white">{info.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/40 rounded-xl p-8">
              <h3 className="text-white mb-4">Available for Opportunities</h3>
              <p className="text-slate-300 mb-6">
                I'm actively seeking Entry-level SOC Analyst positions and open to discussing 
                cybersecurity roles that leverage my help desk experience and 
                security operations training.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
              >
                <FileText className="w-4 h-4" />
                Download Resume
              </a>
            </div>

            <div className="bg-slate-900 border border-cyan-900/20 rounded-xl p-8">
              <h3 className="text-white mb-4">Let's Connect</h3>
              <p className="text-slate-300 mb-6">
                Follow my journey and stay updated with my latest projects and insights 
                in cybersecurity on social media.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-slate-800 hover:bg-slate-700 border border-cyan-900/20 rounded-lg flex items-center justify-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-slate-800 hover:bg-slate-700 border border-cyan-900/20 rounded-lg flex items-center justify-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
