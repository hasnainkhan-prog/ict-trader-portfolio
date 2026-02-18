
import React from 'react';
import { motion } from 'framer-motion';

const tradingSkills = [
  { name: 'ICT Market Structure', level: 90 },
  { name: 'Liquidity Analysis', level: 88 },
  { name: 'Order Blocks & FVG Execution', level: 85 },
  { name: 'Session Timing (London/NY)', level: 92 },
  { name: 'Risk Management Model', level: 95 },
  { name: 'RR-Based Trade Planning', level: 90 },
];

const aiSystemsSkills = [
  { name: 'AI Prompt Engineering', level: 90 },
  { name: 'Trading Journal Automation', level: 85 },
  { name: 'Execution Checklists (ICT)', level: 88 },
  { name: 'Performance Tracking Systems', level: 82 },
];

const webDevSkills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 75 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 70 },
  { name: 'Backend Logic & Structure', level: 65 },
];

const professionalSkills = [
  { name: 'Discipline', level: 95 },
  { name: 'Patience', level: 92 },
  { name: 'Strategic Planning', level: 88 },
  { name: 'Data-Driven Decision Making', level: 90 },
  { name: 'Consistency', level: 93 },
];

const SkillBar: React.FC<{ name: string; level: number }> = ({ name, level }) => (
  <div className="relative mb-6">
    <div className="flex justify-between items-center mb-2">
      <span className="font-bold uppercase tracking-widest text-[11px] text-slate-200">{name}</span>
      <span className="text-cyan-400 font-bold text-sm">{level}%</span>
    </div>
    <div className="progress-bar-container">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="progress-bar-fill"
      ></motion.div>
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-5xl font-bold mb-20 text-center uppercase tracking-tight">My <span className="text-cyan-400 neon-text-glow">Expertise</span></h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-16">
        {/* Trading Skills */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold mb-10 text-center border-b-2 border-cyan-400 inline-block pb-2 mx-auto">📊 Trading Skills</h3>
          <div className="glass-card p-8 rounded-3xl border-cyan-400/20 mt-4">
            {tradingSkills.map((skill, idx) => (
              <SkillBar key={idx} name={skill.name} level={skill.level} />
            ))}
          </div>
        </motion.div>

        {/* AI & Trading Systems */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold mb-10 text-center border-b-2 border-cyan-400 inline-block pb-2">🤖 AI & Trading Systems</h3>
          <div className="glass-card p-8 rounded-3xl border-cyan-400/20 mt-4">
            {aiSystemsSkills.map((skill, idx) => (
              <SkillBar key={idx} name={skill.name} level={skill.level} />
            ))}
          </div>
        </motion.div>

        {/* Web Development */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold mb-10 text-center border-b-2 border-cyan-400 inline-block pb-2">🌐 Web Development</h3>
          <div className="glass-card p-8 rounded-3xl border-cyan-400/20 mt-4">
            {webDevSkills.map((skill, idx) => (
              <SkillBar key={idx} name={skill.name} level={skill.level} />
            ))}
          </div>
        </motion.div>

        {/* Professional Skills */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold mb-10 text-center border-b-2 border-cyan-400 inline-block pb-2">🧩 Professional Skills</h3>
          <div className="glass-card p-8 rounded-3xl border-cyan-400/20 grid grid-cols-2 gap-y-8 gap-x-4 mt-4">
            {professionalSkills.map((skill, idx) => {
              const radius = 28;
              const circumference = 2 * Math.PI * radius;
              return (
                <div key={idx} className="flex flex-col items-center">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="40" cy="40" r={radius} fill="transparent" stroke="#112233" strokeWidth="4" />
                      <motion.circle 
                        cx="40" cy="40" r={radius} fill="transparent" stroke="#00eeff" strokeWidth="4"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset: circumference - (skill.level / 100) * circumference }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        style={{ filter: 'drop-shadow(0 0 3px #00eeff)' }}
                      />
                    </svg>
                    <span className="absolute text-xs font-bold text-white">{skill.level}%</span>
                  </div>
                  <span className="mt-2 text-center text-[9px] font-bold uppercase tracking-widest text-slate-400 leading-tight h-8 flex items-center">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
