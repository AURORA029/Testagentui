export default function Button({
  children,
  variant = 'primary',
  type = 'button',
  onClick,
  className = '',
  disabled = false,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-5 py-3 text-sm whitespace-nowrap transition-all disabled:cursor-not-allowed';
  
  const variants = {
    primary:
      'bg-red-600 text-white font-bold rounded-2xl border-b-4 border-red-800 active:border-b-0 active:translate-y-1 transition-all',
    secondary: 'bg-gray-100 text-gray-400 font-bold rounded-2xl border-b-4 border-gray-200'
  };

  const disabledStyles =
    'disabled:bg-gray-100 disabled:text-gray-400 disabled:font-bold disabled:rounded-2xl disabled:border-b-4 disabled:border-gray-200 disabled:translate-y-0';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${disabledStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
