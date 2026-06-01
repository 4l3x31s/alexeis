import { createContext, useContext, useState, useEffect } from 'react';
import esData from '../data/resume.json';
import enData from '../data/resume.en.json';
import { ui } from '../i18n/ui';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('lang') || 'es';
    }
    return 'es';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === 'es' ? 'en' : 'es'));

  const data = lang === 'en' ? enData : esData;
  const t = ui[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, data, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useContent() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useContent must be used within a LanguageProvider');
  }
  return context;
}
