import React from 'react';
import { experiences } from '../data/experience';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from './ui/SectionHeading';
import { Badge } from './ui/Badge';
import { Reveal } from './ui/Reveal';

export function Timeline() {
  const { language, t } = useLanguage();
  const expList = experiences[language] || experiences.tr;

  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('timeline.badge')}
          title={t('timeline.title')}
          subtitle={t('timeline.subtitle')}
        />

        <ol className="relative ml-1 space-y-8 border-l border-ink/10">
          {expList.map((exp) => (
            <li key={`${exp.id}-${language}`} className="relative pl-8">
              <span
                aria-hidden="true"
                className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ${
                  exp.isCurrent ? 'bg-accent' : 'bg-ink3'
                }`}
              />

              <Reveal>
                <article className="surface grid gap-6 p-6 sm:p-8 lg:grid-cols-12 lg:gap-12">
                  <header className="lg:col-span-4">
                    <h3 className="text-xl font-medium text-ink">{exp.role}</h3>
                    <p className="mt-1 text-sm text-ink2">
                      {exp.company} · {exp.location}
                    </p>
                    <p className="meta mt-3 flex items-center gap-2">
                      {exp.isCurrent && <span className="text-accent">{t('timeline.currentBadge')}</span>}
                      <span>{exp.period}</span>
                    </p>
                  </header>

                  <div className="lg:col-span-8">
                    <p className="mb-4 text-base text-ink">{exp.description}</p>

                    <ul className="mb-6 space-y-3">
                      {exp.responsibilities.map((resp) => (
                        <li key={resp} className="flex gap-3 text-sm leading-6 text-ink2">
                          <span className="marker" aria-hidden="true" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 border-t border-ink/10 pt-4">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
