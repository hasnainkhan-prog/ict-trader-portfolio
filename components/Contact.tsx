
import React, { useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mykdpkqn", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <h2 className="text-5xl font-bold mb-10 uppercase tracking-tight">Contact <span className="text-cyan-400 neon-text-glow">Me</span></h2>
          <h3 className="text-2xl font-bold mb-6 text-white">Let’s Work Together</h3>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed italic border-l-4 border-cyan-400 pl-6">
            "Institutional trading strategies or bespoke AI solutions - reach out to collaborate on high-performance results."
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <motion.a 
              href="https://wa.me/923141432116"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -10, boxShadow: '0 0 30px rgba(0,238,255,0.2)' }}
              className="glass-card p-8 rounded-[35px] border-cyan-400/20 group hover:border-cyan-400 transition-all flex flex-col items-center text-center"
            >
              <div className="p-4 bg-cyan-400/10 rounded-2xl text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all mb-4">
                <MessageCircle size={32} />
              </div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">WhatsApp</h4>
              <div className="text-white font-bold text-lg">03141432116</div>
            </motion.a>

            <motion.a 
              href="mailto:hasnainkhanmrd098@gmail.com"
              whileHover={{ y: -10, boxShadow: '0 0 30px rgba(0,238,255,0.2)' }}
              className="glass-card p-8 rounded-[35px] border-cyan-400/20 group hover:border-cyan-400 transition-all flex flex-col items-center text-center"
            >
              <div className="p-4 bg-cyan-400/10 rounded-2xl text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all mb-4">
                <Mail size={32} />
              </div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email Me</h4>
              <div className="text-white font-bold text-sm truncate w-full">hasnainkhanmrd098@gmail.com</div>
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="glass-card p-10 rounded-[45px] border-cyan-400/20 shadow-2xl relative">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-8 text-cyan-400 border border-cyan-400/50">
                    <CheckCircle2 size={56} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white">Message Sent!</h3>
                  <p className="text-slate-400">“Message sent successfully. I will get back to you soon.”</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-10 px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-cyan-400 hover:text-slate-950 transition-all"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="_subject" value="New Portfolio Message" />
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400 ml-4">Full Name</label>
                    <input required type="text" name="name" placeholder="Name" className="w-full bg-[#081b29]/50 rounded-2xl px-6 py-4 border border-slate-700/50 text-white focus:ring-2 focus:ring-cyan-400 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400 ml-4">Email</label>
                    <input required type="email" name="email" placeholder="Email" className="w-full bg-[#081b29]/50 rounded-2xl px-6 py-4 border border-slate-700/50 text-white focus:ring-2 focus:ring-cyan-400 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400 ml-4">Message</label>
                    <textarea required name="message" rows={5} placeholder="Your Message" className="w-full bg-[#081b29]/50 rounded-2xl px-6 py-4 border border-slate-700/50 text-white focus:ring-2 focus:ring-cyan-400 outline-none transition-all resize-none"></textarea>
                  </div>
                  <motion.button 
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(0,238,255,0.4)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 btn-neon rounded-full font-bold text-lg uppercase tracking-widest transition-all disabled:opacity-50 flex items-center justify-center gap-3"
                  >
                    {status === 'loading' ? <div className="w-6 h-6 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div> : <><Send size={20} />Send Message</>}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
