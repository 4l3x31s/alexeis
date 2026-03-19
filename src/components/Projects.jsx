import { motion } from 'framer-motion';
import { Rocket, Heart, Briefcase, Lightbulb } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Projects() {
  const { projects } = resumeData;

  const getIcon = (type) => {
    switch (type) {
      case 'Emprendimiento':
        return <Rocket size={24} />;
      case 'Proyecto':
        return <Heart size={24} />;
      case 'Servicios':
        return <Briefcase size={24} />;
      default:
        return <Lightbulb size={24} />;
    }
  };

  const getGradient = (type) => {
    switch (type) {
      case 'Emprendimiento':
        return 'from-blue-500 to-cyan-500';
      case 'Proyecto':
        return 'from-violet-500 to-purple-500';
      case 'Servicios':
        return 'from-emerald-500 to-teal-500';
      default:
        return 'from-orange-500 to-red-500';
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-slate-800 dark:text-white">Proyectos & </span>
            <span className="text-blue-600 dark:text-blue-400">Emprendimientos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={item}
              className="group p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${getGradient(project.type)} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform`}>
                {getIcon(project.type)}
              </div>
              
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {project.type}
              </span>
              
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-2 mb-3">
                {project.name}
              </h3>
              
              <p className="text-slate-500 dark:text-slate-400 mb-5">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
