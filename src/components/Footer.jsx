import { Github, Linkedin, Heart, Code2, Brain } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Footer() {
  const { personal, social } = resumeData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Brain className="w-6 h-6 text-violet-600 dark:text-violet-400" />
            <span className="font-bold text-lg">
              <span className="text-violet-600 dark:text-violet-400">&lt;</span>
              <span className="text-slate-800 dark:text-white">alexeis</span>
              <span className="text-violet-600 dark:text-violet-400">/&gt;</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            {social.linkedin && (
              <a 
                href={social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            )}
            {social.github && (
              <a 
                href={social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-700 hover:text-white transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            )}
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <span>© {currentYear} {personal.name.split(' ')[0]}</span>
            <span className="flex items-center gap-1">
              Hecho con <Heart size={14} className="text-red-500" /> y <Brain size={14} className="text-violet-500" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
