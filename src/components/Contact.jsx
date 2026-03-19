import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageCircle, Phone, WheatIcon, PhoneIncoming } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Contact() {
  const { personal } = resumeData;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('Form submitted:', data);
    alert('Gracias por tu mensaje. Te contactaré pronto.');
    e.target.reset();
  };

  return (
    <section className="py-24" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-slate-800 dark:text-white">¿Trabajamos </span>
            <span className="text-blue-600 dark:text-blue-400">Juntos?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              ¡Hablemos!
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              Estoy abierto a nuevos retos y proyectos que generen impacto. Si crees que puedo aportar valor a tu equipo o iniciativa, conversemos.
            </p>

            <div className="space-y-4">
              <a 
                href={`mailto:${personal.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all hover:shadow-xl hover:shadow-blue-500/10 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">Email</span>
                  <span className="text-slate-800 dark:text-white font-medium">{personal.email}</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white">
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">Ubicación</span>
                  <span className="text-slate-800 dark:text-white font-medium">{personal.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-500 flex items-center justify-center text-white">
                  <PhoneIncoming size={22} />
                </div>
                <div>
                  <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">Teléfono</span>
                  <span className="text-slate-800 dark:text-white font-medium">+591 68047892</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle size={24} className="text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                Enviar mensaje
              </h3>
            </div>
            
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                  Nombre
                </label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                  Mensaje
                </label>
                <textarea 
                  name="message"
                  rows="4"
                  required
                  placeholder="Tu mensaje..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold transition-all hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Enviar Mensaje
              </button>
            </div>
          </motion.form> */}
        </div>
      </div>
    </section>
  );
}
