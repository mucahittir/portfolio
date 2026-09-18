import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/experience';
import { SectionHeading } from './ui/SectionHeading';
import { Badge } from './ui/Badge';

export function Timeline() {
  return (
    <section id="experience" className="py-20 bg-gray-50/50 dark:bg-dark-bg/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Deneyim"
          title="Kariyer & Profesyonel Yolculuk"
          subtitle="4 yıllık yazılım geliştirme sürecimde kurumsal şirketlerde ve oyun stüdyolarında üstlendiğim roller."
        />

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-gray-200 dark:border-dark-border ml-3 sm:ml-6 md:ml-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-6 sm:pl-8 group"
            >
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-200 group-hover:scale-125 ${
                  exp.isCurrent
                    ? 'bg-accent border-white dark:border-dark-bg ring-4 ring-accent/20'
                    : 'bg-white dark:bg-dark-card border-gray-300 dark:border-gray-600 group-hover:border-accent'
                }`}
              />

              {/* Experience Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-dark-card border border-gray-200/80 dark:border-dark-border shadow-sm group-hover:border-accent/40 transition-all">
                
                {/* Header: Role, Company, Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                          Güncel
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-accent font-semibold mt-0.5">
                      <span>{exp.company}</span>
                      <span className="text-gray-300 dark:text-gray-600">•</span>
                      <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400 font-normal text-xs">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 dark:bg-dark-surface text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-dark-border w-fit">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    {exp.period}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>

                {/* Responsibilities Bullets */}
                <ul className="space-y-2 mb-5">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2.5 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100 dark:border-dark-border/60">
                  {exp.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="neutral">
                      {tech}
                    </Badge>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
