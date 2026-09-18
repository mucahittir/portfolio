import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable Card component with dark mode support, glassmorphism border and subtle hover effect.
 * @param {Object} props
 * @param {boolean} [props.hoverEffect=true]
 * @param {string} [props.className='']
 * @param {React.ReactNode} props.children
 */
export function Card({
  hoverEffect = true,
  className = '',
  children,
  ...props
}) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`rounded-2xl bg-white dark:bg-dark-card border border-gray-200/80 dark:border-dark-border p-6 shadow-sm dark:shadow-none transition-colors ${
        hoverEffect ? 'hover:border-accent/40 dark:hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
