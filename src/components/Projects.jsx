import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import { projects, categoryFilters } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from './ui/SectionHeading';
import { Badge } from './ui/Badge';

export function Projects() {
  const { language, t } = useLanguage();
  const [selectedCategoryId, setSelectedCategoryId] = useState('all');

  const projectList = projects[language] || projects.tr;
  const filteredProjects =
    selectedCategoryId === 'all'
      ? projectList
      : projectList.filter((p) => p.categoryId === selectedCategoryId);

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('projects.badge')}
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {categoryFilters.map((category) => {
            const isActive = selectedCategoryId === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategoryId(category.id)}
                aria-pressed={isActive}
                className={`inline-flex h-9 items-center rounded-lg border px-3 text-sm transition-colors duration-150 cursor-pointer ${
                  isActive
                    ? 'border-ink/20 bg-raised text-ink'
                    : 'border-transparent text-ink2 hover:text-ink'
                }`}
              >
                {category[language]}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={`${project.id}-${language}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="surface flex flex-col justify-between p-6 transition-colors duration-150 hover:border-ink/20 sm:p-8"
              >
                <div>
                  <p className="meta mb-4 flex items-center justify-between gap-2">
                    <span>{project.category}</span>
                    {project.featured && <span className="text-accent">{t('projects.featured')}</span>}
                  </p>

                  <h3 className="mb-3 text-xl font-medium text-ink">{project.title}</h3>
                  <p className="mb-6 text-sm leading-6 text-ink2">{project.description}</p>

                  <ul className="mb-8 space-y-3">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-6 text-ink2">
                        <span className="marker" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-ink/10 pt-4">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-4 text-sm">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-ink2 transition-colors duration-150 hover:text-ink"
                    >
                      <Github className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                      {t('projects.sourceCode')}
                    </a>

                    {project.liveDemoUrl ? (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-ink transition-colors duration-150 hover:text-accent"
                      >
                        {t('projects.liveDemo')}
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="meta">{t('projects.proprietary')}</span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
