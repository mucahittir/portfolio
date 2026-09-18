import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Server,
  Database,
  Layout,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { skillCategories } from '../data/skills';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';

export function Skills() {
  const [activeCategoryId, setActiveCategoryId] = useState('backend');

  const categoryIcons = {
    backend: Server,
    database: Database,
    frontend: Layout,
    devops: Cpu,
    methodology: ShieldCheck,
  };

  const currentCategory = skillCategories.find(c => c.id === activeCategoryId) || skillCategories[0];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Yetenekler & Beceriler"
          title="Teknoloji Yığını & Mimari Yetkinlikler"
          subtitle=".NET Core ekosisteminden kurumsal veritabanlarına, modern ön yüzden bulut entegrasyonlarına uçtan uca teknik yetkinlikler."
        />

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Server;
            const isActive = activeCategoryId === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategoryId(category.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-accent text-white shadow-lg shadow-accent/25 scale-105'
                    : 'bg-white dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-surface border border-gray-200 dark:border-dark-border'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Content Display */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-card border border-gray-200/90 dark:border-dark-border shadow-sm"
            >
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-gray-100 dark:border-dark-border/60">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {currentCategory.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                    {currentCategory.description}
                  </p>
                </div>
                <Badge variant="accent" className="self-start sm:self-auto">
                  {currentCategory.skills.length} Yetkinlik
                </Badge>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentCategory.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border transition-all ${
                      skill.highlighted
                        ? 'bg-accent/5 dark:bg-accent/5 border-accent/30 dark:border-accent/30 shadow-sm'
                        : 'bg-gray-50 dark:bg-dark-surface border-gray-200/60 dark:border-dark-border/60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-sm text-gray-900 dark:text-white flex items-center gap-1.5">
                        {skill.highlighted && (
                          <Sparkles className="w-3.5 h-3.5 text-accent" />
                        )}
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono font-bold text-accent">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-dark-border overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={`h-full rounded-full ${
                          skill.highlighted
                            ? 'bg-gradient-to-r from-accent to-cyan-400'
                            : 'bg-gray-400 dark:bg-gray-500'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
