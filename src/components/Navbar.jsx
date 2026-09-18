import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Terminal, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Navbar({ theme, toggleTheme }) {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-dark-bg/85 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-dark-border/50 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white group"
        >
          <span className="p-1.5 rounded-lg bg-accent/10 border border-accent/30 text-accent group-hover:scale-105 transition-transform">
            <Terminal className="w-4 h-4" />
          </span>
          <span className="tracking-tighter font-extrabold text-xl">
            Mücahit<span className="text-accent">.</span>dev
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-gray-100/80 dark:bg-dark-card/80 p-1.5 rounded-full border border-gray-200/60 dark:border-dark-border/60 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-white dark:bg-dark-surface text-accent font-semibold shadow-sm'
                    : 'text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action buttons (Language switcher, Theme toggle & Contact CTA) */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            aria-label={t('nav.toggleLang')}
            title={language === 'tr' ? 'Switch to English' : "Türkçe'ye Geç"}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-surface border border-gray-200/80 dark:border-dark-border transition-all cursor-pointer shadow-sm"
          >
            <Globe className="w-3.5 h-3.5 text-accent flex-shrink-0" />
            <span className={language === 'tr' ? 'text-accent font-extrabold' : 'text-gray-400 dark:text-gray-500'}>
              TR
            </span>
            <span className="text-gray-300 dark:text-gray-600 text-[10px]">/</span>
            <span className={language === 'en' ? 'text-accent font-extrabold' : 'text-gray-400 dark:text-gray-500'}>
              EN
            </span>
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={t('nav.toggleTheme')}
            className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-surface border border-transparent hover:border-gray-200 dark:hover:border-dark-border transition-all cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-amber-400 hover:rotate-45 transition-transform duration-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700 hover:-rotate-12 transition-transform duration-300" />
            )}
          </button>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-xl bg-accent hover:bg-accent-hover text-white shadow-md shadow-accent/20 transition-all cursor-pointer"
          >
            {t('nav.contactCta')}
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={t('nav.toggleMenu')}
            className="md:hidden p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-surface border border-gray-200 dark:border-dark-border cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg px-4 pt-3 pb-6 space-y-2 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-accent/10 hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-gray-100 dark:border-dark-border/60 flex flex-col gap-2">
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold rounded-xl bg-gray-100 dark:bg-dark-surface text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-dark-border"
              >
                <Globe className="w-4 h-4 text-accent" />
                <span>{language === 'tr' ? 'Switch to English (EN)' : "Türkçe'ye Geç (TR)"}</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full py-2.5 text-sm font-semibold rounded-xl bg-accent text-white shadow-md shadow-accent/20"
              >
                {t('nav.contactCta')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
