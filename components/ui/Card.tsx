import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-[--color-bg-secondary] rounded-2xl p-8 ${className}`}>
      {children}
    </div>
  );
}