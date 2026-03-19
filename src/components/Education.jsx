import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Education() {
  const { education } = resumeData;

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-800/50" id="education">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-slate-800 dark:text-white">Educación & </span>
            <span className="text-blue-600 dark:text-blue-400">Certificaciones</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all hover:shadow-xl hover:shadow-blue-500/10"
          >
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white flex-shrink-0">
                <GraduationCap size={32} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Ingeniería
                </span>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-1">
                  {education.degree}
                </h3>
                <p className="text-violet-600 dark:text-violet-400 font-medium mt-1">
                  {education.institution}
                </p>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mt-3">
                  <Calendar size={14} />
                  <span>{education.period}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all hover:shadow-xl hover:shadow-blue-500/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white">
                <Award size={20} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                Cursos Relevantes
              </h3>
            </div>
            
            <div className="space-y-4">
              {education.courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <BookOpen size={16} className="text-blue-500" />
                    <span>{course}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
