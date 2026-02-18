
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const PROFILE_IMG = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop";

const skillsList = [
  "ICT institutional trading model",
  "Risk management frameworks",
  "AI prompt engineering for trading",
  "Frontend web development",
  "Backend logic and system structuring",
  "Trading data analysis"
];

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        className="w-full lg:w-2/5 flex justify-center"
      >
        <div className="profile-glow-container group">
           <div className="profile-image-wrapper w-72 h-72 md:w-80 md:h-80">
            <img 
              src={PROFILE_IMG} 
              alt="Hasnain Khan About" 
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-3/5"
      >
        <h2 className="text-5xl font-bold mb-6 uppercase tracking-tight">About <span className="text-cyan-400 neon-text-glow">Me</span></h2>
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-cyan-400">ICT Forex Trader | AI Prompt Engineer | Web Developer</h3>
        
        <div className="space-y-6 text-[#ededed] text-lg leading-relaxed mb-8">
          <p>
            I am a professional ICT Forex trader with over 3 years of market experience, specializing in liquidity-based market structure and institutional execution models.
          </p>
          <p>
            With qualifications in <strong>FA</strong> and <strong>DIT</strong>, I merge digital intelligence with trading discipline to create automated solutions and high-performance trading strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {skillsList.map((skill, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 size={18} className="text-cyan-400 shrink-0" />
              <span className="text-slate-300 font-medium text-sm">{skill}</span>
            </div>
          ))}
        </div>

        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00eeff" }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-3 btn-neon rounded-full font-bold uppercase tracking-widest text-xs cursor-pointer"
        >
          Download CV
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
