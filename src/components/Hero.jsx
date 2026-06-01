import { motion } from 'framer-motion';
import { MapPin, ArrowDown, Github, FolderGit2 } from 'lucide-react';
import { useContent } from '../hooks/useContent';
import DownloadCVButton from './DownloadCVButton';
import foto from '../assets/foto.jpeg';

export default function Hero() {
  const { data, t } = useContent();
  const { personal, social } = data;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-violet-50/50 dark:from-blue-950/30 dark:via-transparent dark:to-violet-950/30" />
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148, 163, 184) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
        opacity: 0.3
      }} />

      {/* Animated orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
            {personal.available && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                <span>{personal.availableText}</span>
              </motion.div>
            )}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium"
            >
              <FolderGit2 size={16} />
              <span>{personal.title}</span>
            </motion.div>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="text-slate-800 dark:text-white">{t.hero.greeting} </span>
            <br />
            <span className="text-gradient">{personal.name.split(' ')[0]}</span>
          </h1>

          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 mb-8 font-light max-w-xl">
            {personal.tagline}
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-500 dark:text-slate-400 mb-8">
            <MapPin size={18} />
            <span>{personal.location}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
            >
              <FolderGit2 size={20} />
              {t.hero.viewProjects}
            </a>
            <DownloadCVButton />
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl border-2 border-slate-300 dark:border-slate-600 hover:border-slate-800 dark:hover:border-white transition-all"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-xl"
          >
            {personal.stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-blue-600 rounded-3xl blur-2xl opacity-30 animate-pulse-glow" />

            {/* Avatar card */}
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-blue-600 to-violet-600 p-1.5 glow animate-float">
              <img
                src={foto}
                alt={personal.name}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -top-4 -right-4 px-4 py-2 rounded-xl glass shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">⚙️ Event-Driven</span>
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl glass shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
            >
              <span className="text-sm font-semibold text-violet-600 dark:text-violet-400">🤖 IA on-premise</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-blue-600 dark:text-blue-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowDown size={28} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
