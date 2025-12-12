'use client';

import React from 'react';
import LogoIcon from './icons/logo-icon.svg';
import MenuIcon from './icons/menu-icon.svg';
import Button from './ui/Button';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[--color-bg-primary] border-b border-[--color-border]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <LogoIcon className="w-8 h-8" />
            <span className="text-xl font-bold text-[--color-text-primary]">Casian AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#solutions" className="text-[--color-text-secondary] hover:text-[--color-text-primary] transition-colors">
              Solutions
            </a>
            <a href="#features" className="text-[--color-text-secondary] hover:text-[--color-text-primary] transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-[--color-text-secondary] hover:text-[--color-text-primary] transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-[--color-text-secondary] hover:text-[--color-text-primary] transition-colors">
              FAQ
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-[--color-text-secondary] hover:text-[--color-text-primary] font-semibold transition-colors">
              Log in
            </button>
            <Button variant="primary">Sign up</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <MenuIcon className="w-6 h-6 text-[--color-text-secondary]" />
          </button>
        </div>
      </div>
    </header>
  );
}