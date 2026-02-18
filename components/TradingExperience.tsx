
import React from 'react';
import { Calendar, TrendingUp, Cpu, BarChart3, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const timeline = [
  {
    period: '2023 - Present',
    role: 'ICT Forex Trader (Real Account)',
    desc: 'Executing ICT liquidity model on major pairs (XAUUSD, GBPUSD). Focus on Liquidity sweeps, Order blocks, Fair value gaps, and Premium & discount arrays. Session-based entries with strict RR models and predefined risk.',
    icon: <BarChart3 className="text-cyan-400" />
  },
  {
    period: '2024 - Present',
    role: 'ICT Crypto Trader',
    desc: 'Applying ICT concepts to BTC and ETH swing structures. Utilizing HTF bias combined with liquidity targets and LTF execution models for swing positions.',
    icon: <TrendingUp className="text-cyan-400" />
  },
  {
    period: '2024 – Present',
    role: 'AI Prompt Engineering & Web Development',
    desc: 'Creating custom AI-powered trading systems, automated journals, execution dashboards, and modern responsive websites for traders and tech professionals.',
    icon: <Cpu className="text-cyan-400" />
  }
];

const TradingExperience: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row gap-20">
        {/* Left Side: Journey & Metrics */}
        <div className="lg:w-2/5">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-8 uppercase tracking-wider">Trading <span className="text-cyan-400 neon-text-glow">Journey</span></h2>
            <p className="text-slate-300 mb-12 text-lg leading-relaxed">
              My trading experience is built on the ICT institutional model, focusing on liquidity, session timing, and high-probability execution. I prioritize capital preservation, controlled drawdown, and consistent RR-based growth across Forex and Crypto markets.
            </p>

            {/* Core Risk Metrics Grid */}
            <h3 className="text-xl font-bold mb-6 uppercase text-cyan-400">Core Risk Metrics</h3>
            <div className="grid grid-cols-2 gap-4 mb-12">
              <div className="glass-card p-6 rounded-3xl text-center border-cyan-400/20">
                <div className="text-3xl font-extrabold text-cyan-400 mb-1">1:3–1:5</div>
                <div className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">Min RR Target</div>
              </div>
              <div className="glass-card p-6 rounded-3xl text-center border-cyan-400/20">
                <div className="text-3xl font-extrabold text-cyan-400 mb-1">1–2%</div>
                <div className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">Risk Per Trade</div>
              </div>
              <div className="glass-card p-6 rounded-3xl text-center border-cyan-400/20">
                <div className="text-3xl font-extrabold text-cyan-400 mb-1">3+ Yrs</div>
                <div className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">Experience</div>
              </div>
              <div className="glass-card p-6 rounded-3xl text-center border-cyan-400/20">
                <div className="text-3xl font-extrabold text-cyan-400 mb-1">ICT</div>
                <div className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">Session Based</div>
              </div>
            </div>

            {/* Authority Booster */}
            <div className="glass-card p-8 rounded-[40px] border-l-4 border-cyan-400 bg-cyan-400/5">
              <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.2em] mb-4">Execution Model</h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm font-semibold">
                  <CheckCircle2 size={16} className="text-cyan-400" />
                  <span>HTF Bias → Liquidity Sweep</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold">
                  <CheckCircle2 size={16} className="text-cyan-400" />
                  <span>FVG Entry → OB Confirmation</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold">
                  <CheckCircle2 size={16} className="text-cyan-400" />
                  <span>RR 1:3+ Scalable Growth</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Timeline */}
        <div className="lg:w-3/5 relative">
          <div className="absolute left-[39px] top-0 bottom-0 w-0.5 bg-slate-800"></div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-24 group"
              >
                {/* Icon Container */}
                <div className="absolute left-0 top-0 w-20 h-20 glass-card rounded-3xl flex items-center justify-center border-cyan-400/20 group-hover:border-cyan-400 group-hover:neon-box-glow transition-all z-10">
                  {item.icon}
                </div>
                
                {/* Date Label */}
                <div className="flex items-center gap-2 text-cyan-400 font-bold mb-3">
                  <Calendar size={14} />
                  <span className="text-xs uppercase tracking-widest">{item.period}</span>
                </div>

                <h3 className="text-3xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{item.role}</h3>
                <p className="text-slate-400 leading-relaxed text-lg italic">
                  "{item.desc}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingExperience;
