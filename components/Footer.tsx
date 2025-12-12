import React from 'react';
import LogoIcon from './icons/logo-icon.svg';
import Button from './ui/Button';

export default function Footer() {
  return (
    <footer className="bg-[--color-bg-primary] border-t border-[--color-border]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <LogoIcon className="w-8 h-8 mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-semibold text-[--color-text-primary] mb-4">
            Your comeback story starts here
          </h2>
          <p className="text-lg text-[--color-text-tertiary] mb-8">
            Rebuild your confidence. Take control of your future.
          </p>
          <Button variant="primary">Talk to Casian now</Button>
        </div>

        <div className="border-t border-[--color-border] pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[--color-text-tertiary]">
              © 2025 Casian AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#terms" className="text-sm text-[--color-text-tertiary] hover:text-[--color-text-primary] transition-colors">
                Terms
              </a>
              <a href="#privacy" className="text-sm text-[--color-text-tertiary] hover:text-[--color-text-primary] transition-colors">
                Privacy
              </a>
              <a href="#cookies" className="text-sm text-[--color-text-tertiary] hover:text-[--color-text-primary] transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}