import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Code2, Brain } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'Sobre Mí' },
    { href: '#experience', label: 'Experiencia' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#education', label: 'Educación' },
    { href: '#contact', label: 'Contacto' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass shadow-lg py-3' : 'py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Brain className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <span className="text-2xl font-bold">
            <span className="text-blue-600 dark:text-blue-400">&lt;</span>
            <span className="text-slate-800 dark:text-white">alexeis</span>
            <span className="text-blue-600 dark:text-blue-400">/&gt;</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button 
            onClick={toggleTheme} 
            className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
            aria-label="Cambiar tema"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button 
            className="md:hidden p-2 text-slate-700 dark:text-slate-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menú"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`md:hidden absolute top-full left-0 right-0 glass shadow-xl transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <ul className="flex flex-col p-4 gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-3 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded-lg transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
