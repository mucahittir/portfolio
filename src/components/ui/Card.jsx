import React from 'react';

/**
 * Plain raised surface. Hover changes the hairline only.
 * @param {Object} props
 * @param {boolean} [props.hoverEffect=true]
 */
export function Card({ hoverEffect = true, className = '', children, ...props }) {
  return (
    <div
      className={`surface p-6 ${
        hoverEffect ? 'transition-colors duration-150 hover:border-ink/20' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
