import React from 'react';
import Image from 'next/image';

export default function CompanyLogosSection() {
  return (
    <section className="section-container bg-primary">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lg font-medium text-[--color-text-tertiary] mb-8">
          Our users have been hired by
        </p>
        <div className="flex items-center justify-center">
          <Image
            src="/images/company-logos.svg"
            alt="Company logos"
            width={1216}
            height={54}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}