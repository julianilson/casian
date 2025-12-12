import React from 'react';
import Image from 'next/image';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function ApplicationBlackHoleSection() {
  return (
    <section className="section-container bg-[--color-bg-primary]">
      <Card className="p-0 overflow-hidden flex flex-col lg:flex-row">
        <div className="flex-1 p-8 lg:p-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[--color-text-primary] mb-6">
            Caught in the Application Black-Hole?
          </h2>
          <p className="text-lg text-[--color-text-tertiary] mb-8">
            You apply. You wait. Crickets. Zero feedback. Not even a "thanks, but no thanks."
          </p>
          <Button variant="primary">Find out why you're rejected</Button>
        </div>
        <div className="flex-1 relative h-96 lg:h-auto min-h-[400px]">
          <Image
            src="/images/person-sitting-chair.jpg"
            alt="Person sitting on chair"
            fill
            className="object-cover"
          />
        </div>
      </Card>
    </section>
  );
}