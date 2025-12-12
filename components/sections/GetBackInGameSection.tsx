import React from 'react';
import Image from 'next/image';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function GetBackInGameSection() {
  return (
    <section className="section-container bg-[--color-bg-primary]">
      <Card className="p-0 overflow-hidden flex flex-col lg:flex-row">
        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[--color-text-primary] mb-6">
            Get back in the game
          </h2>
          <p className="text-lg text-[--color-text-tertiary] mb-8">
            Regain your confidence, sharpen your strategy, and fast-track your next career move with personalized AI coaching built for experienced professionals.
          </p>
          <Button variant="primary" className="w-fit">Kickoff Your First Session</Button>
        </div>
        <div className="flex-1 relative h-96 lg:h-auto min-h-[400px]">
          <Image
            src="/images/person-glasses.jpg"
            alt="Person with glasses"
            fill
            className="object-cover"
          />
        </div>
      </Card>
    </section>
  );
}