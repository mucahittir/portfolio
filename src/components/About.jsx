import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  Tent,
  Swords,
  Puzzle,
  Gamepad2,
  Code2,
  Languages,
  CheckCircle,
  Terminal,
} from 'lucide-react';
import { personalInfo } from '../data/personal';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';

export function About() {
  const { language, t } = useLanguage();
  const info = personalInfo[language];

  const iconMap = {
    Tent,
    Swords,
    Puzzle,
    Award,
    Gamepad2,
    Code2,
    Languages,
  };

  return (
    <section id="about" className="py-20 bg-gray-50/50 dark:bg-dark-bg/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge={t('about.badge')}
          title={t('about.title')}
          subtitle={t('about.subtitle')}
        />

        {/* Story & Core Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Story Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-card border border-gray-200/80 dark:border-dark-border shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2.5">
                <span className="p-2 rounded-lg bg-accent/10 text-accent">
                  <Terminal className="w-5 h-5" />
                </span>
                {t('about.devPhilosophy')}
              </h3>
              
              {info.bioParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base"
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-3 border-t border-gray-100 dark:border-dark-border/60 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {info.storyHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education & Certifications Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Education Card */}
            <Card hoverEffect={false} className="border-l-4 border-l-accent">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{t('about.educationBadge')}</h4>
                  <span className="text-xs text-accent font-semibold">{info.education[0].period}</span>
                </div>
              </div>
              <div className="text-base font-semibold text-gray-800 dark:text-gray-200">
                {info.education[0].degree}
              </div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                {info.education[0].school}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {info.education[0].description}
              </p>
            </Card>

            {/* Certifications Card */}
            <Card hoverEffect={false}>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{t('about.certsBadge')}</h4>
                  <span className="text-xs text-gray-500">{t('about.certsSubtitle')}</span>
                </div>
              </div>
              <div className="space-y-3">
                {info.certificates.map((cert, index) => {
                  const Icon = iconMap[cert.icon] || Award;
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-100 dark:border-dark-border/60"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-accent" />
                        <div>
                          <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                            {cert.title}
                          </p>
                          <p className="text-[11px] text-gray-500 dark:text-gray-400">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Personal Interests Section */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              {t('about.interestsTitle')}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {t('about.interestsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {info.interests.map((interest, index) => {
              const Icon = iconMap[interest.icon] || Award;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {interest.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {interest.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
