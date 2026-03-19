import { motion } from 'framer-motion';
import { 
  Code2, 
  Wrench, 
  Cloud, 
  Brain, 
  Users,
  Cpu,
  Sparkles
} from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Skills() {
  const { skills } = resumeData;

  const categories = [
    {
      title: 'LLMs & IA Local',
      icon: <Sparkles size={24} />,
      skills: skills.ai_llm,
      colors: 'from-violet-500 to-purple-600',
      highlight: true
    },
    {
      title: 'Lenguajes',
      icon: <Code2 size={24} />,
      skills: skills.languages,
      colors: 'from-orange-500 to-red-500'
    },
    {
      title: 'Frameworks & Tools',
      icon: <Wrench size={24} />,
      skills: skills.frameworks,
      colors: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'DevOps & Infra',
      icon: <Cloud size={24} />,
      skills: skills.devops,
      colors: 'from-slate-500 to-zinc-500'
    },
    {
      title: 'AI Automatización',
      icon: <Brain size={24} />,
      skills: skills.ai_automation,
      colors: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Soft Skills',
      icon: <Users size={24} />,
      skills: skills.softSkills,
      colors: 'from-rose-500 to-pink-500'
    }
  ];

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
    <section className="py-24 bg-slate-50 dark:bg-slate-800/50" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-slate-800 dark:text-white">Habilidades </span>
            <span className="text-blue-600 dark:text-blue-400">&</span>
            <span className="text-violet-600 dark:text-violet-400"> IA</span>
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
          {categories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className={`group p-6 rounded-2xl border transition-all hover:shadow-xl hover:shadow-blue-500/10 ${
                category.highlight 
                  ? 'bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 border-violet-200 dark:border-violet-800 hover:border-violet-400 dark:hover:border-violet-600' 
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600'
              }`}
            >
              <div className="flex items-center gap-4 mb-5 pb-5 border-b border-slate-200 dark:border-slate-700">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.colors} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                  >
                    {skill}
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
