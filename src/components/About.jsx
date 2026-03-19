import { motion } from 'framer-motion';
import { Brain, Code, Sparkles, Server } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function About() {
  const { personal } = resumeData;

  const features = [
    {
      icon: <Brain size={24} />,
      title: 'LLMs & IA Local',
      description: 'Implementación de modelos de lenguaje locales con Ollama, Llama.cpp y LM Studio para privacidad total',
      color: 'from-violet-500 to-purple-600'
    },
    {
      icon: <Server size={24} />,
      title: 'AI On-Premise',
      description: 'Arquitecturas de IA privadas, RAG, embeddings y bases de datos vectoriales para empresas',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <Sparkles size={24} />,
      title: 'Automatización Inteligente',
      description: 'Integración de IA generativa en flujos de trabajo, chatbots y asistentes virtuales',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-800/50" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-slate-800 dark:text-white">Sobre </span>
            <span className="text-blue-600 dark:text-blue-400">Mí</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {personal.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium">
                🤖 LLMs Locales
              </span>
              <span className="px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium">
                🔒 Privacidad IA
              </span>
              <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
                ⚡ RAG & Embeddings
              </span>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-600 transition-all hover:shadow-xl hover:shadow-violet-500/10"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
