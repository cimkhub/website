import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  variant?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, type = 'button', className, variant }) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 font-medium rounded ${variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-white'} ${className}`}
    >
      {children}
    </button>
  );
};
