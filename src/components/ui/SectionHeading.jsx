import React from 'react';
import { Reveal } from './Reveal';

/**
 * Left-aligned section heading with a quiet mono label.
 * @param {Object} props
 * @param {string} [props.badge] Short label above the title
 * @param {string} props.title
 * @param {string} [props.subtitle]
 */
export function SectionHeading({ badge, title, subtitle, className = '' }) {
  return (
    <Reveal className={`mb-12 max-w-2xl md:mb-16 ${className}`}>
      {badge && <p className="meta mb-3">{badge}</p>}
      <h2 className="text-title text-ink">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-ink2 sm:text-lg">{subtitle}</p>}
    </Reveal>
  );
}
