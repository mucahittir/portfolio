import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Database, Layout, Cpu, ShieldCheck } from 'lucide-react';
import { skillCategories } from '../data/skills';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from './ui/SectionHeading';

const categoryIcons = {
  backend: Server,
  database: Database,
  frontend: Layout,
  devops: Cpu,
  methodology: ShieldCheck,
};

export function Skills() {
  const { language, t } = useLanguage();
  const [activeCategoryId, setActiveCategoryId] = useState('backend');

  const categories = skillCategories[language] || skillCategories.tr;
  const currentCategory = categories.find((c) => c.id === activeCategoryId) || categories[0];

  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('skills.badge')}
          title={t('skills.title')}
          subtitle={t('skills.subtitle')}
        />

        <div className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0" role="tablist">
          {categories.map((category) => {
            const Icon = categoryIcons[category.id] || Server;
            const isActive = activeCategoryId === category.id;

            return (
              <button
                key={category.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategoryId(category.id)}
                className={`inline-flex h-9 flex-shrink-0 items-center gap-2 whitespace-nowrap rounded-lg border px-3 text-sm transition-colors duration-150 cursor-pointer ${
                  isActive
                    ? 'border-ink/20 bg-raised text-ink'
                    : 'border-transparent text-ink2 hover:text-ink'
                }`}
              >
                <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                {category.name}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentCategory.id}-${language}`}
            role="tabpanel"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="surface p-6 sm:p-8"
          >
            <div className="mb-8 flex flex-col gap-1 border-b border-ink/10 pb-6 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-xl font-medium text-ink">{currentCategory.name}</h3>
                <p className="mt-1 text-sm text-ink2">{currentCategory.description}</p>
              </div>
              <span className="meta">
                {currentCategory.skills.length} {t('skills.countSuffix')}
              </span>
            </div>

            <ul className="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
              {currentCategory.skills.map((skill) => (
                <li key={skill.name}>
                  <div className="mb-2 flex items-baseline justify-between gap-4">
                    <span className="text-sm text-ink">{skill.name}</span>
                    <span className="meta tabular-nums">{skill.level}%</span>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-sm bg-ink/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className={`h-full rounded-sm ${skill.highlighted ? 'bg-accent' : 'bg-ink3'}`}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
