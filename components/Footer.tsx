
import React from 'react';
import { ArrowUp, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 border-t border-slate-800 relative bg-slate-950/20">
      <div className="container mx-auto px-6 flex flex-col items-center gap-8">
        <div className="flex gap-8">
          <motion.a 
            href="https://wa.me/923141432116"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, color: '#25D366', scale: 1.2 }}
            className="text-slate-400 transition-all"
            title="WhatsApp"
          >
            <MessageCircle size={24} />
          </motion.a>
          <motion.a 
            href="mailto:hasnainkhanmrd098@gmail.com"
            whileHover={{ y: -5, color: '#EA4335', scale: 1.2 }}
            className="text-slate-400 transition-all"
            title="Email"
          >
            <Mail size={24} />
          </motion.a>
        </div>

        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl font-bold tracking-tighter mb-2"
          >
            Hasnain<span className="text-cyan-400">.</span>
          </motion.div>
          <p className="text-sm text-slate-500 uppercase tracking-widest font-medium">
            &copy; 2024 <span className="text-white">Hasnain Khan</span> | Professional Growth via Strategy.
          </p>
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.2, y: -5, backgroundColor: '#00eeff' }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="p-4 bg-slate-800 text-cyan-400 rounded-2xl hover:text-slate-950 transition-all shadow-xl"
        >
          <ArrowUp size={24} />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
