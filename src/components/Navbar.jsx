import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SECTION_IDS = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];

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
      const scrollPosition = window.scrollY + 200;

      for (const section of SECTION_IDS) {
        const el = document.getElementById(section);
        if (el && scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const iconButton =
    'inline-flex h-8 w-8 items-center justify-center rounded-lg text-ink2 transition-colors duration-150 hover:bg-raised hover:text-ink cursor-pointer';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        isScrolled || mobileMenuOpen
          ? 'border-ink/10 bg-page/90 backdrop-blur-sm'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:grid md:grid-cols-[1fr_auto_1fr] lg:px-8"
      >
        <a href="#hero" className="text-lg font-medium text-ink">
          Mücahit<span className="text-accent">.</span>dev
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`inline-flex h-8 items-center rounded-lg px-3 text-sm transition-colors duration-150 ${
                    isActive ? 'bg-raised text-ink' : 'text-ink2 hover:text-ink'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 md:justify-self-end">
          <button
            onClick={toggleLanguage}
            aria-label={t('nav.toggleLang')}
            className="inline-flex h-8 items-center gap-1 rounded-lg px-2 font-mono text-xs transition-colors duration-150 hover:bg-raised cursor-pointer"
          >
            <span className={language === 'tr' ? 'text-ink' : 'text-ink3'}>TR</span>
            <span className="text-ink3">/</span>
            <span className={language === 'en' ? 'text-ink' : 'text-ink3'}>EN</span>
          </button>

          <button onClick={toggleTheme} aria-label={t('nav.toggleTheme')} className={iconButton}>
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" strokeWidth={1.5} />
            ) : (
              <Moon className="h-4 w-4" strokeWidth={1.5} />
            )}
          </button>

          <a
            href="#contact"
            className="ml-2 hidden h-8 items-center rounded-[10px] bg-ink px-3 text-sm font-medium text-page transition-colors duration-150 hover:bg-ink/85 sm:inline-flex"
          >
            {t('nav.contactCta')}
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={t('nav.toggleMenu')}
            aria-expanded={mobileMenuOpen}
            className={`${iconButton} md:hidden`}
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" strokeWidth={1.5} />
            ) : (
              <Menu className="h-4 w-4" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-ink/10 px-4 pb-4 pt-2 md:hidden">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-10 items-center rounded-lg px-3 text-sm text-ink2 transition-colors duration-150 hover:bg-raised hover:text-ink"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 flex h-10 items-center justify-center rounded-[10px] bg-ink text-sm font-medium text-page"
          >
            {t('nav.contactCta')}
          </a>
        </div>
      )}
    </header>
  );
}
