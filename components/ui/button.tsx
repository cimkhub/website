"use client";

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "outline" | "default";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, type = "button", variant = "default", onClick }) => {
  const baseStyles = "py-2 px-4 rounded font-bold";
  const variantStyles = variant === "outline" ? "border border-blue-500 text-blue-500 bg-white" : "bg-blue-500 text-white";

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
