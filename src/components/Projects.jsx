import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { projects, projectCategories } from '../data/projects';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const filteredProjects = selectedCategory === 'Tümü'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Projeler"
          title="Öne Çıkan Mimari & Mühendislik Projeleri"
          subtitle="Kurumsal PLM platformlarından low-code mimarilere, otomatik çizelgeleme motorlarından oyun fiziğine uzanan çalışmalarım."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === category
                  ? 'bg-accent text-white shadow-md shadow-accent/25'
                  : 'bg-white dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-surface border border-gray-200 dark:border-dark-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
              >
                <div className="h-full rounded-2xl bg-white dark:bg-dark-card border border-gray-200/90 dark:border-dark-border p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-accent/5 hover:border-accent/50 transition-all duration-300 group">
                  
                  <div>
                    {/* Top Meta: Category & Featured */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <Badge variant="accent">
                        {project.category}
                      </Badge>

                      {project.featured && (
                        <span className="flex items-center gap-1 text-[11px] font-bold text-amber-500 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                          <Sparkles className="w-3 h-3" />
                          Öne Çıkan
                        </span>
                      )}
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-accent transition-colors mb-2.5">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2 mb-6">
                      {project.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Tech Stack & Links */}
                  <div className="pt-4 border-t border-gray-100 dark:border-dark-border/60">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="neutral">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Kaynak Kod / Profil</span>
                      </a>

                      {project.liveDemoUrl ? (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
                        >
                          <span>Canlı Önizleme</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="text-[11px] text-gray-400 dark:text-gray-500 italic">
                          Kurumsal / Özel Mülk
                        </span>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
