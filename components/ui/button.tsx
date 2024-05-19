// /components/ui/button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  variant?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  onClick = () => {},
  className,
  variant = 'primary',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-500 text-white px-4 py-2 rounded ${className}`}
    >
      {children}
    </button>
  );
};
