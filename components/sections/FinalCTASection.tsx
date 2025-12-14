import React from 'react';
import Image from 'next/image';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function FinalCTASection() {
  return (
    <section className="section-container bg-primary">
      <Card className="p-8 lg:p-12 bg-[var(--Colors-Background-bg-secondary)]">
        <div className="flex flex-col items-center text-center gap-6">
          <Image
            src="/images/avatar-group-small.svg"
            alt="Avatar group"
            width={120}
            height={56}
          />
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[--color-text-primary] mb-4">
              Still have questions?
            </h2>
            <p className="text-lg text-[--color-text-tertiary] mb-8">
              Can't find the answer you're looking for?
            </p>
          </div>
          <Button variant="primary">Talk to Casian</Button>
        </div>
      </Card>
    </section>
  );
}