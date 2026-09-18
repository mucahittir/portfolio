import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Terminal, Heart } from 'lucide-react';
import { personalInfo } from '../data/personal';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-100 dark:border-dark-border/60">
          
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 font-extrabold text-xl tracking-tight text-gray-900 dark:text-white">
              <span className="p-1 rounded-md bg-accent/10 text-accent">
                <Terminal className="w-4 h-4" />
              </span>
              <span>{personalInfo.name}</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-sm">
              {personalInfo.title} • Temiz kod, sağlam mimari ve yüksek performans.
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-gray-600 dark:text-gray-400">
            <a href="#about" className="hover:text-accent transition-colors">Hakkımda</a>
            <a href="#skills" className="hover:text-accent transition-colors">Yetenekler</a>
            <a href="#experience" className="hover:text-accent transition-colors">Deneyim</a>
            <a href="#projects" className="hover:text-accent transition-colors">Projeler</a>
            <a href="#contact" className="hover:text-accent transition-colors">İletişim</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Yukarı Kaydır"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-gray-100 dark:bg-dark-card hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white border border-gray-200 dark:border-dark-border transition-all cursor-pointer"
          >
            <span>Yukarı</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 dark:text-gray-400">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-accent transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-accent transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
