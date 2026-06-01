import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, Phone } from 'lucide-react';
import { useContent } from '../hooks/useContent';
import WhatsAppIcon from './icons/WhatsAppIcon';

export default function Contact() {
  const { data, t } = useContent();
  const { personal, social } = data;

  const phoneDigits = personal.phone.replace(/[^0-9]/g, '');
  const phoneUrl = `tel:+${phoneDigits}`;
  const whatsappUrl = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(t.whatsappMsg)}`;

  const channels = [
    {
      label: t.contact.labels.email,
      value: personal.email,
      href: `mailto:${personal.email}`,
      icon: <Mail size={22} />,
      color: 'from-blue-500 to-cyan-500',
      hover: 'hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-blue-500/10',
    },
    {
      label: t.contact.labels.linkedin,
      value: 'in/alexeis-vladimir-carrillo-pinaya',
      href: social.linkedin,
      icon: <Linkedin size={22} />,
      color: 'from-sky-500 to-blue-600',
      hover: 'hover:border-sky-300 dark:hover:border-sky-600 hover:shadow-sky-500/10',
      external: true,
    },
    {
      label: t.contact.labels.github,
      value: 'github.com/4l3x31s',
      href: social.github,
      icon: <Github size={22} />,
      color: 'from-slate-600 to-slate-800',
      hover: 'hover:border-slate-400 dark:hover:border-slate-500 hover:shadow-slate-500/10',
      external: true,
    },
    {
      label: t.contact.labels.location,
      value: personal.location,
      icon: <MapPin size={22} />,
      color: 'from-violet-500 to-purple-500',
      hover: '',
    },
  ];

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
            <span className="text-slate-800 dark:text-white">{t.contact.title1}</span>
            <span className="text-blue-600 dark:text-blue-400">{t.contact.title2}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
          <p className="text-slate-500 dark:text-slate-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            {t.contact.intro}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Primary CTAs: WhatsApp + Phone */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-lg shadow-lg shadow-green-500/30 transition-all hover:scale-[1.02]"
            >
              <WhatsAppIcon size={26} className="group-hover:scale-110 transition-transform" />
              {t.contact.whatsapp}
            </motion.a>

            <motion.a
              href={phoneUrl}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="group flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold shadow-lg shadow-blue-500/30 transition-all hover:scale-[1.02]"
            >
              <Phone size={24} className="group-hover:scale-110 transition-transform" />
              <span className="flex flex-col items-start leading-tight">
                <span className="text-xs font-medium text-white/80">{t.contact.callMe}</span>
                <span className="text-lg tracking-wide">{personal.phone}</span>
              </span>
            </motion.a>
          </div>

          {/* Secondary channels */}
          <div className="grid sm:grid-cols-2 gap-4">
            {channels.map((c, index) => {
              const content = (
                <>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform`}>
                    {c.icon}
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">{c.label}</span>
                    <span className="block text-slate-800 dark:text-white font-medium truncate">{c.value}</span>
                  </div>
                </>
              );

              const base = `flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all group ${c.hover} ${c.href ? 'hover:shadow-xl' : ''}`;

              return (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  {c.href ? (
                    <a
                      href={c.href}
                      className={base}
                      {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className={base}>{content}</div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
