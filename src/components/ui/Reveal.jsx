import React from 'react';
import { motion } from 'framer-motion';

/**
 * Scroll-triggered fade and short rise. Runs once.
 * @param {Object} props
 * @param {number} [props.delay=0] Seconds
 */
export function Reveal({ delay = 0, className = '', children, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-48px' }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
