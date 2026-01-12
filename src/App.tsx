import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <section id="home" className="scroll-mt-20">
          <Hero setActiveSection={setActiveSection} />
        </section>
        
        <section id="about" className="scroll-mt-20">
          <About />
        </section>
        
        <section id="portfolio" className="scroll-mt-20">
          <Portfolio />
        </section>
        
        <section id="blog" className="scroll-mt-20">
          <Blog />
        </section>
        
        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
