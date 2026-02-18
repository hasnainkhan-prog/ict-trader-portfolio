
import React from 'react';
import { BarChart3, GraduationCap, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <BarChart3 className="text-cyan-400" size={48} />,
    title: "ICT Trading & Account Management",
    description: "Institutional liquidity analysis, session-based execution, and strict risk-controlled trade management. High RR trade planning with capital preservation.",
    details: ["Liquidity Analysis", "Session Execution", "Risk Control", "High RR Planning"]
  },
  {
    icon: <GraduationCap className="text-cyan-400" size={48} />,
    title: "ICT Trading Mentorship",
    description: "Structured ICT model guidance for serious learners. Covers entry rules, session timing, risk model, and execution discipline.",
    details: ["Core Mechanics", "Entry Confirmation", "Market Bias", "Psychology Control"]
  },
  {
    icon: <Cpu className="text-cyan-400" size={48} />,
    title: "AI & Web Development",
    description: "Custom AI trading systems, automated journals, execution dashboards, and modern responsive websites for traders and tech professionals.",
    details: ["Trading Journals", "AI Prompt Engineering", "Performance Dashboards", "Modern UI/UX"]
  }
];

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-4 uppercase tracking-wider"
        >
          My <span className="text-cyan-400 neon-text-glow">Services</span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block mt-4 glass-card px-8 py-6 rounded-3xl border-cyan-400/30 shadow-[0_0_20px_rgba(0,238,255,0.1)]"
        >
          <p className="text-cyan-400 font-bold italic text-xl tracking-tight">
            “I combine ICT trading authority, mentorship, and AI/web development expertise.”
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, type: "spring", damping: 12 }}
            viewport={{ once: true }}
            whileHover={{ y: -15, transition: { duration: 0.3 } }}
            className="glass-card p-10 rounded-[45px] flex flex-col items-center text-center hover:scale-[1.02] relative group"
          >
            <div className="absolute inset-0 bg-cyan-400/5 rounded-[45px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="mb-8 p-6 bg-slate-800/40 rounded-full border border-cyan-400/20 shadow-[0_0_15px_rgba(0,238,255,0.1)] group-hover:neon-box-glow group-hover:border-cyan-400 transition-all">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-6 min-h-[64px] flex items-center">{service.title}</h3>
            <p className="text-[#ededed] mb-8 leading-relaxed text-sm opacity-90">
              {service.description}
            </p>
            
            <div className="w-full flex flex-wrap justify-center gap-2 mb-10">
              {service.details.map((detail, idx) => (
                <span key={idx} className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-[10px] font-bold uppercase text-cyan-400">
                  {detail}
                </span>
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-auto px-8 py-2 border-2 border-cyan-400 text-cyan-400 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300 z-10"
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
