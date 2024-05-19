'use client'; // Dies macht die Komponente zu einer Client-Komponente

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
      className={`px-4 py-2 font-semibold text-white bg-blue-500 hover:bg-blue-700 rounded ${className}`}
    >
      {children}
    </button>
  );
};
