// /Users/lukas/Documents/Webseite/Apiarist 2/website/components/ui/button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, type = 'button', onClick, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
};
