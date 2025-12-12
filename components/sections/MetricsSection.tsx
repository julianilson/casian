import React from 'react';
import TrophyIcon from '../icons/trophy-icon.svg';

export default function MetricsSection() {
  const metrics = [
    { value: '8+', label: 'Hours Saved per Week' },
    { value: '5x', label: 'Faster from Search to Offer' },
    { value: '$15k', label: 'Higher Starting Salary' },
  ];

  return (
    <section className="section-container bg-[--color-bg-primary]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <TrophyIcon className="w-8 h-8 text-[--color-brand]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[--color-text-primary] mb-6">
            Setting the Bar for Job Search Success
          </h2>
          <p className="text-lg text-[--color-text-tertiary]">
            Our goal is to deliver real, measurable results for job seekers like you. These are our targets:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <p className="text-6xl lg:text-7xl font-semibold text-[--color-text-primary] mb-4">
                {metric.value}
              </p>
              <p className="text-lg text-[--color-text-tertiary]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[--color-text-muted]">
          *Targets shown are our goals for early users. Actual results may vary as we continue improve Casian.
        </p>
      </div>
    </section>
  );
}