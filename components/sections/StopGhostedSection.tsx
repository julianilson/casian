import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function StopGhostedSection() {
  return (
    <section className="section-container bg-primary">
      <Card className="bg-[var(--Colors-Background-bg-secondary)] flex flex-col lg:flex-row items-center justify-between gap-8 p-8 lg:p-12">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[--color-text-primary] mb-6">
            Stop getting ghosted.
          </h2>
          <p className="text-lg text-[--color-text-tertiary]">
            Get clarity on what's killing your candidacy—so your next opportunity earns a real reply.
          </p>
        </div>
        <Button variant="primary" className="lg:self-end">Talk to Casian now</Button>
      </Card>
    </section>
  );
}