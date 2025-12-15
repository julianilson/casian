import React from 'react';
import Image from 'next/image';
import CompanyLogos from '../ui/CompanyLogos';

export default function CompanyLogosSection() {
  return (
    <section className="section-container bg-primary">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lg font-medium text-[var(--Colors-Text-text-tertiary)] mb-8">
          Our users have been hired by
        </p>
        <CompanyLogos />
      </div>
    </section>
  );
}