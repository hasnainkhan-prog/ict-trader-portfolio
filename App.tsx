
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import TradingExperience from './components/TradingExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#081b29]">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[50%] h-[50%] bg-cyan-900/10 blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-purple-900/5 blur-[150px] rounded-full" 
        />
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-20 scroll-mt-20">
          <About />
        </section>
        
        <section id="services" className="py-20 bg-slate-950/20 scroll-mt-20">
          <Services />
        </section>
        
        <section id="skills" className="py-20 scroll-mt-20">
          <Skills />
        </section>

        <section id="experience" className="py-20 bg-slate-950/20 scroll-mt-20">
          <TradingExperience />
        </section>
        
        <section id="contact" className="py-24 scroll-mt-20">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
