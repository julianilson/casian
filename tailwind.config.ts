import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary color palette
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        tertiary: 'var(--color-text-tertiary)',
        muted: 'var(--color-text-muted)',
        // Text colors for on-brand backgrounds
        'on-brand-primary': 'var(--Colors-Text-text-primary-on-brand)',
        'on-brand-secondary': 'var(--Colors-Text-text-secondary-on-brand)',
        'on-brand-tertiary': 'var(--Colors-Text-text-tertiary-on-brand)',
        // Background colors - named for direct use
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'bg-tertiary': 'var(--color-bg-tertiary)',
        // Brand background colors
        'brand-solid': 'var(--Colors-Background-bg-brand-solid)',
        'brand-section': 'var(--Colors-Background-bg-brand-section)',
        'brand-primary': 'var(--Colors-Background-bg-brand-primary)',
        'brand-secondary': 'var(--Colors-Background-bg-brand-secondary)',
        // Border colors
        'border-primary': 'var(--color-border)',
        'border-secondary': 'var(--color-border-secondary)',
        'border-tertiary': 'var(--color-border-subtle)',
        'border-disabled': 'var(--color-disabled-border)',
        // Brand colors
        brand: 'var(--color-brand)',
        'brand-light': 'var(--color-brand-light)',
        'brand-dark': 'var(--color-brand-dark)',
        // Status colors
        success: 'var(--color-success)',
        'success-light': 'var(--color-success-light)',
        // Semantic colors
        'focus-ring': 'var(--color-focus-ring)',
        'accent-purple': 'var(--color-accent-purple)',
      },
    },
  },
  plugins: [],
};

export default config;