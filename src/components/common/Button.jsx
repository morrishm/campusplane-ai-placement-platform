export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  disabled = false,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-150 rounded-lg select-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] cursor-pointer';

  const variants = {
    primary:
      'bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-hover)] shadow-xs hover:shadow-sm border border-transparent',
    secondary:
      'bg-white text-[var(--color-ink-primary)] border border-[var(--color-border-subtle)] hover:bg-[var(--color-surface-hover)] shadow-xs',
    outline:
      'bg-transparent text-[var(--color-ink-primary)] border border-[var(--color-border-subtle)] hover:border-slate-300 hover:bg-slate-50',
    ghost:
      'bg-transparent text-[var(--color-ink-muted)] hover:text-[var(--color-ink-primary)] hover:bg-slate-100/80',
  };

  const sizes = {
    sm: 'text-xs px-2.5 py-1.5 gap-1.5',
    md: 'text-xs font-semibold px-4 py-2 gap-2',
    lg: 'text-sm font-semibold px-5 py-2.5 gap-2.5',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-3.5 h-3.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-3.5 h-3.5" />}
    </button>
  );
}