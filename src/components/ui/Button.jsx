import React from 'react';

/**
 * Button / link-button. Same radius and focus treatment everywhere.
 * @param {Object} props
 * @param {'primary' | 'secondary' | 'ghost'} [props.variant='primary']
 * @param {'sm' | 'md' | 'lg'} [props.size='md']
 * @param {string} [props.href] Renders an anchor when provided.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  href,
  ...props
}) {
  const base =
    'inline-flex select-none items-center justify-center rounded-[10px] font-medium cursor-pointer ' +
    'transition-[transform,background-color,border-color,color] duration-150 ease-out active:scale-[0.98] ' +
    'disabled:pointer-events-none disabled:opacity-50';

  const sizes = {
    sm: 'h-8 gap-2 px-3 text-sm',
    md: 'h-10 gap-2 px-4 text-sm',
    lg: 'h-12 gap-2 px-5 text-base',
  };

  const variants = {
    primary: 'bg-ink text-page hover:bg-ink/85',
    secondary: 'border border-ink/10 bg-raised text-ink hover:border-ink/20',
    ghost: 'text-ink2 hover:text-ink',
  };

  const classes = `${base} ${sizes[size]} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
