import React from 'react';

interface InputProps {
  type: string;
  placeholder?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({ type, placeholder, className }) => {
  return <input type={type} placeholder={placeholder} className={`px-4 py-2 border rounded ${className}`} />;
};
