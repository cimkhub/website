// components/ui/card.jsx
import React from 'react';

export function Card({ children }) {
  return <div className="border border-gray-300 rounded p-4">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
}

export function CardTitle({ children }) {
  return <h3 className="text-lg font-bold">{children}</h3>;
}

export function CardDescription({ children }) {
  return <p className="text-gray-500">{children}</p>;
}

export function CardHeader({ children }) {
  return <div className="border-b border-gray-300 p-4">{children}</div>;
}

export function CardFooter({ children }) {
  return <div className="border-t border-gray-300 p-4">{children}</div>;
}
