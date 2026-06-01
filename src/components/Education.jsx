import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen, Cpu, Languages } from 'lucide-react';
import { useContent } from '../hooks/useContent';

export default function Education() {
  const { data, t } = useContent();
  const { education, languages } = data;

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
            <span className="text-slate-800 dark:text-white">{t.education.title1}</span>
            <span className="text-blue-600 dark:text-blue-400">{t.education.title2}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        {education.ongoing && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 p-[1.5px] shadow-xl shadow-violet-500/20"
          >
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-5 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 p-8 text-white">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center flex-shrink-0">
                <Cpu size={34} />
              </div>
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-semibold uppercase tracking-wider mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                  </span>
                  {t.education.inProgress}
                </span>
                <h3 className="text-2xl font-bold leading-tight">{t.education.masterTitle}</h3>
                <p className="text-white/80 mt-1">{t.education.masterSubtitle}</p>
              </div>
            </div>
          </motion.div>
        )}

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
                  {t.education.degreeTag}
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
                {t.education.courses}
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

        {languages && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-8 p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white">
                <Languages size={20} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                {t.education.languages}
              </h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {languages.map((lang) => {
                const pct = lang.pct;
                return (
                  <div
                    key={lang.name}
                    className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700"
                  >
                    <div className="flex items-baseline justify-between mb-3">
                      <span className="font-semibold text-slate-800 dark:text-white">{lang.name}</span>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">
                        {lang.level}
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
