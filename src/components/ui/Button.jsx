import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable Button component with variant styles and smooth Framer Motion interactions.
 * @param {Object} props
 * @param {'primary' | 'secondary' | 'outline' | 'ghost'} [props.variant='primary']
 * @param {'sm' | 'md' | 'lg'} [props.size='md']
 * @param {string} [props.className='']
 * @param {React.ReactNode} props.children
 * @param {string} [props.href]
 */
export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  href,
  onClick,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-6 py-3.5 text-base gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary: "bg-accent hover:bg-accent-hover text-white shadow-lg shadow-accent/20 hover:shadow-accent/35 border border-accent/40",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-dark-surface dark:hover:bg-dark-surface/80 dark:text-gray-200 border border-gray-200 dark:border-dark-border",
    outline: "bg-transparent hover:bg-accent/10 text-accent border border-accent/60 hover:border-accent",
    ghost: "bg-transparent hover:bg-gray-100 dark:hover:bg-dark-surface text-gray-600 dark:text-gray-300",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href={href}
        className={combinedClasses}
        onClick={onClick}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
}
