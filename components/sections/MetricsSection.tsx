import React from 'react';
import TrophyIcon from '../icons/trophy-icon.svg';

export default function MetricsSection() {
  const metrics = [
    { value: '8+', label: 'Hours Saved per Week' },
    { value: '5x', label: 'Faster from Search to Offer' },
    { value: '$15k', label: 'Higher Starting Salary' },
  ];

  return (
    <section className="section-container bg-primary">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="featured-icon-lg featured-icon-brand-light">
              <TrophyIcon className="w-7 h-7" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[--color-text-primary] mb-6">
            Setting the Bar for Job Search Success
          </h2>
          <p className="text-lg text-[var(--Colors-Text-text-tertiary)]">
            Our goal is to deliver real, measurable results for job seekers like you. These are our targets:
          </p>
        </div>

        <div className="flex flex-wrap gap-10 rounded-2xl bg-(--Colors-Background-bg-secondary) px-8 py-16 justify-center">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col gap-3 items-center p-6">
              <p className="text-6xl font-semibold text-(--Colors-Text-text-brand-tertiary)" style={{ letterSpacing: '-1.2px', lineHeight: '72px' }}>
                {metric.value}
              </p>
              <p className="text-lg font-semibold text-(--Colors-Text-text-primary)">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-lg text-(--Colors-Text-text-primary)">
          *Targets shown are our goals for early users. Actual results may vary as we continue improve Casian.
        </p>
      </div>
    </section>
  );
}