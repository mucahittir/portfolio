import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable SectionHeading component with badge, title and subtitle.
 * @param {Object} props
 * @param {string} [props.badge]
 * @param {string} props.title
 * @param {string} [props.subtitle]
 * @param {'left' | 'center'} [props.align='center']
 */
export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className = ''
}) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${isCenter ? 'text-center' : 'text-left'} ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-accent/10 text-accent border border-accent/25`}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 flex items-center gap-1.5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <span className="h-1 w-12 rounded-full bg-accent" />
        <span className="h-1 w-2 rounded-full bg-accent/40" />
      </div>
    </motion.div>
  );
}
