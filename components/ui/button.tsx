"use client";

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, type = "button", className, onClick }) => {
  return (
    <button type={type} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
