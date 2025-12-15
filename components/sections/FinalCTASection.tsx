import React from 'react';
import Image from 'next/image';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function FinalCTASection() {
  return (
    <section className="section-container bg-primary">
      <Card className="p-8 lg:p-12 bg-[var(--Colors-Background-bg-secondary)]">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="flex items-center justify-center -space-x-4 mb-2">
            <Image
              src="/images/avatar-small-1.png"
              alt="Avatar 1"
              width={40}
              height={40}
              className="rounded-full border-2 border-white z-0"
            />
            <Image
              src="/images/avatar-small-2.png"
              alt="Avatar 2"
              width={48}
              height={48}
              className="rounded-full border-2 border-white z-10 relative"
            />
            <Image
              src="/images/avatar-small-3.png"
              alt="Avatar 3"
              width={40}
              height={40}
              className="rounded-full border-2 border-white z-0"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[--color-text-primary] mb-4">
              Still have questions?
            </h2>
            <p className="text-lg text-[var(--Colors-Text-text-tertiary)] mb-8">
              Can't find the answer you're looking for?
            </p>
          </div>
          <Button variant="primary">Talk to Casian</Button>
        </div>
      </Card>
    </section>
  );
}