import React from 'react';

/**
 * Quiet mono tag for technologies and meta.
 * @param {Object} props
 * @param {'neutral' | 'accent'} [props.variant='neutral']
 */
export function Badge({ variant = 'neutral', className = '', children, ...props }) {
  const variants = {
    neutral: 'bg-raised text-ink2',
    accent: 'bg-raised text-accent',
  };

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 font-mono text-xs ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
