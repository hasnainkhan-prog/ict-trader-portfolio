
import React, { useState, useEffect } from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const roles = ["ICT Forex Trader", "AI Prompt Engineer", "Crypto Analyst", "Web Developer"];

// Using a high-quality professional portrait placeholder
const PROFILE_IMG = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop";

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 50 : 150;

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[roleIndex];
      setCurrentText(prev => 
        isDeleting 
          ? fullText.substring(0, prev.length - 1) 
          : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto px-6 pt-32 pb-20 flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 mt-12 lg:mt-0 text-center lg:text-left z-10"
      >
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-slate-400">Hello, It's Me</h3>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">Hasnain Khan</h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-6 h-12">
          And I'm a <span className="text-cyan-400 neon-text-glow">{currentText}</span>
          <span className="animate-pulse ml-1 text-cyan-400">|</span>
        </h2>
        <p className="text-[#ededed] text-lg max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
          I combine <span className="text-cyan-400 font-bold uppercase tracking-widest text-sm">ICT trading authority</span> and AI/web development expertise to build institutional-grade performance.
        </p>

        <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-10">
          <motion.a 
            href="https://wa.me/923141432116"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, backgroundColor: '#25D366', color: '#fff', boxShadow: '0 0 20px #25D366' }}
            className="flex items-center gap-3 px-8 py-3 rounded-2xl border-2 border-cyan-400 text-cyan-400 transition-all font-bold cursor-pointer"
          >
            <MessageCircle size={22} />
            <span>WhatsApp</span>
          </motion.a>
          
          <motion.a 
            href="mailto:hasnainkhanmrd098@gmail.com"
            whileHover={{ scale: 1.1, backgroundColor: '#EA4335', color: '#fff', boxShadow: '0 0 20px #EA4335' }}
            className="flex items-center gap-3 px-8 py-3 rounded-2xl border-2 border-cyan-400 text-cyan-400 transition-all font-bold cursor-pointer"
          >
            <Mail size={22} />
            <span>Gmail</span>
          </motion.a>
        </div>

        <motion.button 
          onClick={handleScrollToContact}
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px #00eeff' }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-4 btn-neon rounded-full uppercase text-sm font-bold tracking-[0.2em] cursor-pointer relative z-20"
        >
          Hire Me
        </motion.button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
        className="w-full lg:w-1/2 flex justify-center lg:justify-end"
      >
        <div className="animate-float relative group">
          <div className="absolute inset-0 bg-cyan-400 rounded-full blur-[100px] opacity-10 group-hover:opacity-30 transition-opacity"></div>
          
          {/* Neon Gradient Border requested: Cyan to Purple */}
          <div className="profile-glow-container transition-transform duration-700 group-hover:scale-105">
            <div className="profile-image-wrapper w-64 h-64 md:w-[400px] md:h-[400px]">
              <img 
                src={PROFILE_IMG} 
                alt="Hasnain Khan Portrait" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
