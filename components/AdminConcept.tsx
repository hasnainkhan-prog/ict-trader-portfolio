
import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Database, Shield, Image as ImageIcon, Settings, Eye } from 'lucide-react';

const features = [
  { icon: <Layout size={24} />, title: "Dynamic Content", text: "Hero, About, and Skills managed centrally without touching code." },
  { icon: <Database size={24} />, title: "Media & Data", text: "Cloudinary/Firebase integration for project images and trading stats." },
  { icon: <Shield size={24} />, title: "Secure Access", text: "JWT/Firebase Auth ensuring only you can update your professional brand." },
  { icon: <Settings size={24} />, title: "Global Settings", text: "Toggle themes, animations, and contact details instantly." }
];

const AdminConcept: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <h2 className="text-5xl font-bold mb-8 uppercase tracking-tight">System <span className="text-cyan-400 neon-text-glow">Concept</span></h2>
          <h3 className="text-2xl font-bold mb-6 text-white italic">"Portfolio Admin Panel Concept"</h3>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Manage your portfolio content and media from a central dashboard without editing a single line of code. Designed for high-performance traders and tech professionals who need agility.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="flex gap-4 p-4 glass-card rounded-2xl border-cyan-400/10">
                <div className="text-cyan-400 mt-1">{f.icon}</div>
                <div>
                  <h4 className="font-bold text-white mb-1">{f.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full"
        >
          <div className="relative glass-card rounded-[40px] border-cyan-400/30 overflow-hidden shadow-[0_0_50px_rgba(0,238,255,0.1)]">
            {/* Mockup Header */}
            <div className="bg-slate-900 px-6 py-4 border-b border-cyan-400/20 flex justify-between items-center">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Admin Dashboard v1.0</div>
            </div>
            
            {/* Mockup Body */}
            <div className="p-8 space-y-6 bg-slate-800/20">
              <div className="h-4 bg-cyan-400/10 rounded w-1/3"></div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-20 glass-card rounded-xl border-cyan-400/20"></div>
                <div className="h-20 glass-card rounded-xl border-cyan-400/20"></div>
                <div className="h-20 glass-card rounded-xl border-cyan-400/20"></div>
              </div>
              <div className="space-y-3">
                <div className="h-3 bg-slate-700/50 rounded w-full"></div>
                <div className="h-3 bg-slate-700/50 rounded w-5/6"></div>
                <div className="h-3 bg-slate-700/50 rounded w-4/6"></div>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <div className="px-4 py-2 rounded-lg bg-slate-700 text-[10px] font-bold">CANCEL</div>
                <div className="px-4 py-2 rounded-lg bg-cyan-400 text-slate-950 text-[10px] font-bold">SAVE CHANGES</div>
              </div>
            </div>

            {/* Float Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
              <Settings size={120} className="text-cyan-400 animate-spin-slow" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminConcept;
