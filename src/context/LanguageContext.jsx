import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('portfolio_language');
      if (savedLang === 'tr' || savedLang === 'en') {
        return savedLang;
      }
      // Check browser language preference if available
      if (navigator.language && navigator.language.toLowerCase().startsWith('tr')) {
        return 'tr';
      }
      return 'tr';
    }
    return 'tr';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_language', language);
      document.documentElement.lang = language;
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'tr' ? 'en' : 'tr'));
  };

  /**
   * Translates a dot-notated string key (e.g. 'nav.about')
   * @param {string} key
   * @returns {string}
   */
  const t = (key) => {
    const keys = key.split('.');
    let current = translations[language];

    for (const k of keys) {
      if (!current || current[k] === undefined) {
        // Fallback to Turkish if key missing in English
        let fallback = translations.tr;
        for (const fk of keys) {
          if (!fallback || fallback[fk] === undefined) return key;
          fallback = fallback[fk];
        }
        return fallback;
      }
      current = current[k];
    }

    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
