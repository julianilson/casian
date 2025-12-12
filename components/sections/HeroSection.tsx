'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import MicrophoneIcon from '../icons/microphone-icon.svg';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background-pattern.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        <p className="text-sm font-semibold text-[--color-text-secondary] mb-6">
          Private. Personal. Job Search Coach.
        </p>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[--color-text-primary] mb-6 leading-tight">
          Unemployment hurts.<br />
          Your comeback story starts here.
        </h1>
        
        <p className="text-lg sm:text-xl text-[--color-text-tertiary] mb-12 max-w-3xl mx-auto">
          Job-search coaching for mid-career professionals ready to bounce back stronger.
        </p>

        <Button variant="primary" className="mb-12">
          <MicrophoneIcon className="w-5 h-5" />
          Talk to Casian Now
        </Button>

        {/* Social Proof */}
        <div className="flex items-center justify-center gap-4">
          <Image
            src="/images/avatar-group.svg"
            alt="Happy customers"
            width={152}
            height={40}
          />
          <p className="text-[--color-text-tertiary] text-sm">
            Join 100+ happy and satisfied customers.
          </p>
        </div>
      </div>
    </section>
  );
}