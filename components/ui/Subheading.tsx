import React from 'react';

interface SubheadingProps {
    children: React.ReactNode;
    className?: string;
}

export default function Subheading({ children, className = '' }: SubheadingProps) {
    return (
        <p
            className={`font-semibold ${className}`}
            style={{
                color: 'var(--Colors-Text-text-brand-secondary-700, #6941C6)',
                fontFamily: 'var(--Font-family-font-family-body, Inter)',
                fontSize: 'var(--Font-size-text-md, 16px)',
                lineHeight: 'var(--Line-height-text-md, 24px)',
                fontWeight: 600,
            }}
        >
            {children}
        </p>
    );
}
