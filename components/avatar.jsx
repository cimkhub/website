// components/ui/avatar.jsx
import React from 'react';

export function Avatar({ children }) {
  return <div className="inline-block rounded-full overflow-hidden h-10 w-10">{children}</div>;
}

export function AvatarImage({ src }) {
  return <img src={src} alt="Avatar" className="h-full w-full object-cover" />;
}

export function AvatarFallback({ children }) {
  return <div className="flex items-center justify-center bg-gray-300 h-full w-full">{children}</div>;
}
