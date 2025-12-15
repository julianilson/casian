import React from 'react';
import Image from 'next/image';

export default function TestimonialSection() {
  return (
    <section className="section-container bg-[var(--Colors-Background-bg-secondary)]">
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="mb-12">
          <p className="text-3xl sm:text-5xl font-medium text-[--color-text-primary] mb-8 leading-tight">
            "I went from confident professional to questioning my worth. The job search broke me down in ways I never expected."
          </p>
        </blockquote>

        <div className="flex flex-col items-center gap-4">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white">
            <Image
              src="/images/jonathan-avatar.jpg"
              alt="Jonathan F."
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-lg font-semibold text-[--color-text-primary]">Jonathan F.</p>
            <p className="text-[var(--Colors-Text-text-tertiary)]">Senior UX Designer</p>
          </div>
        </div>
      </div>
    </section>
  );
}