// /Users/lukas/Documents/Webseite/Apiarist 2/website/components/ui/input.tsx
import React from 'react';

interface InputProps {
  type: string;
  placeholder?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({ type, placeholder, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`border rounded py-2 px-3 ${className}`}
    />
  );
};
