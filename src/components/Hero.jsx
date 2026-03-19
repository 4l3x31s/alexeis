import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowDown, Download, Sparkles, Brain } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Hero() {
  const { personal } = resumeData;
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadCV = async () => {
    if (isGenerating) return;
    
    console.log('Descargando CV...');
    const element = document.getElementById('resume-content');
    if (element) {
      setIsGenerating(true);
      console.log('Generando PDF...');
      
      try {
        const html2pdf = (await import('html2pdf.js')).default;
        
        const opt = {
          margin: 10,
          filename: 'Alexeis_Carrillo_CV.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { 
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff',
            onclone: (doc, clonedElement) => {
              while (doc.head.firstChild) {
                doc.head.removeChild(doc.head.firstChild);
              }
              
              const style = doc.createElement('style');
              style.textContent = `
                * { 
                  background-color: transparent !important; 
                  color: #1a1a1a !important; 
                  border-color: #e2e8f0 !important;
                }
                [id="resume-content"] {
                  padding: 40px !important;
                  background: white !important;
                  color: #1a1a1a !important;
                  font-family: system-ui, -apple-system, sans-serif !important;
                }
                h1, h2, h3, h4, h5, h6 {
                  color: #0f172a !important;
                  font-weight: 600 !important;
                }
                p, span, div {
                  color: #475569 !important;
                }
                a {
                  color: #2563eb !important;
                }
                strong {
                  color: #0f172a !important;
                }
                ul, ol {
                  color: #475569 !important;
                }
                li {
                  color: #475569 !important;
                }
              `;
              doc.head.appendChild(style);
              
              clonedElement.setAttribute('data-pdf', 'true');
            }
          },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        
        await html2pdf().set(opt).from(element).save();
        console.log('PDF descargado');
      } catch (error) {
        console.error('Error al generar PDF:', error);
      } finally {
        setIsGenerating(false);
      }
    }
  };

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
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-6"
          >
            <Brain size={16} />
            <span>AI & LLM Solutions Developer</span>
          </motion.div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="text-slate-800 dark:text-white">Hola, soy </span>
            <br />
            <span className="text-gradient">{personal.name.split(' ')[0]}</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-6 font-light">
            {personal.title}
          </p>
          
          <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-500 dark:text-slate-400 mb-8">
            <MapPin size={18} />
            <span>{personal.location}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#skills" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold transition-all hover:scale-105 hover:shadow-xl hover:shadow-violet-500/25"
            >
              <Sparkles size={20} />
              Ver Habilidades IA
            </a>
            <button 
              onClick={handleDownloadCV}
              disabled={isGenerating}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <span className="animate-spin">⟳</span>
                  Generando...
                </>
              ) : (
                <>
                  <Download size={20} />
                  Descargar CV
                </>
              )}
            </button>
          </div>
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
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center glow animate-float">
              <div className="text-center">
                <span className="text-7xl lg:text-9xl font-bold text-white/90">
                  {personal.name.split(' ').map(n => n[0]).join('')}
                </span>
                <p className="text-white/80 mt-4 font-medium">AI Developer</p>
              </div>
            </div>
            
            {/* Floating badges */}
            <motion.div 
              className="absolute -top-4 -right-4 px-4 py-2 rounded-xl glass shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <span className="text-sm font-semibold text-violet-600 dark:text-violet-400">🤖 LLMs</span>
            </motion.div>
            <motion.div 
              className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl glass shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
            >
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">🔒 On-Premise</span>
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
