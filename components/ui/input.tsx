"use client";

import React from 'react';

interface InputProps {
  type: string;
  placeholder?: string;
  className?: string;
  id?: string;
  required?: boolean;
}

export const Input: React.FC<InputProps> = ({ type, placeholder, className, id, required }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      id={id}
      required={required}
    />
  );
};
