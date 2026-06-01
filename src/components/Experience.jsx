import { motion } from 'framer-motion';
import { Calendar, Building2, ArrowRight } from 'lucide-react';
import { useContent } from '../hooks/useContent';

export default function Experience() {
  const { data, t } = useContent();
  const { experience } = data;

  return (
    <section className="py-24" id="experience">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-slate-800 dark:text-white">{t.experience.title1}</span>
            <span className="text-blue-600 dark:text-blue-400">{t.experience.title2}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-violet-500 to-transparent" />

          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 border-4 border-white dark:border-slate-900 transform -translate-x-1/2 z-10" />
              
              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all hover:shadow-xl hover:shadow-blue-500/10 group">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {job.role}
                  </h3>
                  <div className={`flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <Building2 size={14} />
                    <span>{job.company}</span>
                  </div>
                  <div className={`flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mt-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <Calendar size={14} />
                    <span>{job.period}</span>
                  </div>
                  <ul className={`mt-4 space-y-2 text-slate-600 dark:text-slate-300 text-sm ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    {job.description.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <ArrowRight size={14} className="text-violet-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {job.stack && (
                    <div className={`mt-4 flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      {job.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
