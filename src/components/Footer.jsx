import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { language, t } = useLanguage();
  const info = personalInfo[language] || personalInfo.tr;

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const socials = [
    { label: 'GitHub', href: info.github, Icon: Github, external: true },
    { label: 'LinkedIn', href: info.linkedin, Icon: Linkedin, external: true },
    { label: 'Email', href: `mailto:${info.email}`, Icon: Mail },
  ];

  return (
    <footer className="border-t border-ink/10 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-medium text-ink">{info.name}</p>
            <p className="mt-2 max-w-sm text-sm text-ink2">
              {info.title}. {t('footer.tagline')}
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors duration-150 hover:text-ink">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#hero"
            className="inline-flex h-8 w-fit items-center gap-2 rounded-lg border border-ink/10 bg-raised px-3 text-sm text-ink transition-colors duration-150 hover:border-ink/20"
          >
            {t('footer.backToTop')}
            <ArrowUp className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="meta">
            © {new Date().getFullYear()} {info.name}. {t('footer.allRightsReserved')}
          </p>
          <ul className="flex items-center gap-4">
            {socials.map(({ label, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="text-ink3 transition-colors duration-150 hover:text-ink"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
