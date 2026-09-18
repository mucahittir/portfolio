import React from 'react';

/**
 * Reusable Badge component for technology tags and status indicators.
 * @param {Object} props
 * @param {'accent' | 'neutral' | 'success'} [props.variant='neutral']
 * @param {string} [props.className='']
 * @param {React.ReactNode} props.children
 */
export function Badge({ variant = 'neutral', className = '', children, ...props }) {
  const variants = {
    neutral: "bg-gray-100 dark:bg-dark-surface text-gray-700 dark:text-gray-300 border-gray-200 dark:border-dark-border",
    accent: "bg-accent/10 text-accent dark:text-accent-light border-accent/30",
    success: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium border transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
