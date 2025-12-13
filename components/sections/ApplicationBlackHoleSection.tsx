import React from 'react';
import Image from 'next/image';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function ApplicationBlackHoleSection() {
  return (
    <section className="section-container bg-primary">
      <Card className="p-0 overflow-hidden flex flex-col lg:flex-row card-shadow-lg">
        <div className="flex-1 p-(--spacing-7xl) bg-(--Colors-Background-bg-brand-section)">
          <h2 className="text-3xl sm:text-4xl font-semibold text-(--Colors-Text-text-primary-on-brand) mb-6">
            Caught in the Application Black-Hole?
          </h2>
          <p className="text-lg text-(--Colors-Text-text-secondary-on-brand) mb-8">
            You apply. You wait. Crickets. Zero feedback. Not even a "thanks, but no thanks."
          </p>
          <Button variant="primary" className="w-fit">Find out why you're rejected</Button>
        </div>
        <div className="flex-1 relative h-96 lg:h-auto min-h-[400px]">
          <Image
            src="/images/person-rejected-application.jpg"
            alt="Person sitting on chair looking frustrated"
            fill
            className="object-cover"
          />
        </div>
      </Card>
    </section>
  );
}