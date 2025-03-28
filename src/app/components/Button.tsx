'use client';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({ children, variant = 'primary', className = '', onClick, type = 'button', disabled = false }: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-full font-semibold transition-colors cursor-pointer";
  
  const variants = {
    primary: "bg-orange-600 text-white hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600",
    secondary: "bg-white text-orange-600 border-2 border-orange-600 hover:bg-orange-50 dark:bg-gray-800 dark:text-orange-400 dark:border-orange-400 dark:hover:bg-gray-700"
  };

  return (
    <button 
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
} 