import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  // Extract background class from className if provided, otherwise use default
  const hasCustomBg = className.includes('bg-');
  const bgClass = hasCustomBg ? '' : 'bg-primary';
  
  // Don't apply default padding if p-0 or other padding classes are explicitly provided
  const hasPadding = className.includes('p-');
  const paddingClass = hasPadding ? '' : 'p-8';
  
  return (
    <div className={`${bgClass} rounded-2xl ${paddingClass} ${className}`}>
      {children}
    </div>
  );
}