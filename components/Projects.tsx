
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop' },
  { image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop' },
  { image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop' }
];

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-6xl font-bold mb-4 uppercase">Latest <span className="text-cyan-400 neon-text-glow">Project</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="rounded-3xl overflow-hidden border-2 border-transparent hover:border-cyan-400 transition-all cursor-pointer"
          >
            <img 
              src={project.image} 
              alt="Project" 
              className="w-full h-[300px] object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
