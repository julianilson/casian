'use client';

import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import HandshakeIcon from '../icons/handshake-icon.svg';
import GiftIcon from '../icons/gift-icon.svg';
import BadgeIcon from '../icons/badge-icon.svg';
import CalendarIcon from '../icons/calendar-icon.svg';
import CheckmarkIcon from '../icons/checkmark-icon.svg';
import Subheading from '../ui/Subheading';

const features = [
  {
    icon: HandshakeIcon,
    title: 'Fair & Risk-Free',
    description: "Most job search services charge you upfront—so they win even if you don't. With Casian, you only pay if you win.",
  },
  {
    icon: GiftIcon,
    title: 'Can Be 100% Free',
    description: 'Refer other job seekers and you each get $100 to reduce—or even erase—your success fee.',
  },
  {
    icon: BadgeIcon,
    title: '$50 Commitment Deposit (100% Refundable)',
    description: "There's a $50 deposit to show you're as serious as us about landing a job. Refunded the moment you sign your new job offer.",
  },
  {
    icon: CalendarIcon,
    title: 'Flexible Payment Terms',
    description: 'Once you are hired, you pay the success fee in 4 equal installments—means no big up-front outlay.',
  },
];

const includes = [
  'Resume Builder',
  'Skills Gap Analysis',
  'Market Intelligence Reports',
  'Mock Interview Practice',
  'Daily Curated Job Listings',
  'Job Search Strategy',
  'Targeted Outreach',
  'Digital Presence Elevation',
  'Core Narrative Development',
  'Post-Application Influence Strategy',
];

const timeline = [
  { step: '1', title: 'Sign up', subtitle: '$50 Refundable Deposit' },
  { step: '2', title: 'Job Search', subtitle: 'No Payments' },
  { step: '3', title: 'Offer Signed', subtitle: '1st Installment - $50 Refund' },
  { step: '4', title: 'First Day at Job', subtitle: '2nd Installment' },
  { step: '5', title: 'Two Weeks In', subtitle: '3rd Installment' },
  { step: '6', title: 'Four Weeks In', subtitle: '4th Installment' },
];

export default function PricingSection() {
  return (
    <section className="section-container bg-primary" id="pricing">
      <div className="max-w-7xl mx-auto">
        {/* Pricing Header */}
        <div className="mb-12 lg:mb-16">
          <Subheading className="mb-3 lg:mb-5">Pricing</Subheading>
          <h2 className="text-3xl lg:text-4xl font-semibold text-[--color-text-primary] mb-5 lg:mb-6">
            Only Pay When You Land the Job
          </h2>
          <p className="text-lg text-tertiary max-w-3xl">
            Our 1% success fee is 100% aligned with your success—no job, no fee.
          </p>
        </div>

        {/* Two Column Layout: Features + Pricing Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column: Features */}
          <div className="flex flex-col gap-10 lg:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="featured-icon-lg featured-icon-gray-modern shrink-0">
                  <feature.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[--color-text-primary] mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-base text-tertiary leading-6">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Pricing Card */}
          <Card className="card-shadow-md p-0 border border-[var(--Colors-Border-border-secondary)] h-fit rounded-[var(--radius-2xl)] overflow-hidden">
            {/* Header */}
            <div className="flex flex-row justify-between items-start gap-[var(--spacing-4xl)] pt-[var(--spacing-4xl)] px-[var(--spacing-4xl)] pb-[var(--spacing-3xl)]">
              <div className="flex flex-col gap-[var(--spacing-md)]">
                <div className="flex items-center gap-[var(--spacing-md)]">
                  <h3 className="text-xl font-semibold text-[var(--Colors-Text-text-primary)]">Success Fee</h3>
                  <span className="flex items-center py-[var(--spacing-xxs)] px-[10px] rounded-[var(--radius-full)] border border-[var(--Component-colors-Utility-Brand-utility-brand-200)] bg-[var(--Component-colors-Utility-Brand-utility-brand-50)] text-sm font-medium text-[var(--Colors-Brand-700)]">One time</span>
                </div>
                <p className="text-base text-tertiary">Payable after you land the job</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl lg:text-6xl font-semibold text-[var(--Colors-Text-text-primary)] leading-none">1</span>
                <span className="text-4xl font-semibold text-[var(--Colors-Text-text-primary)] leading-none">%</span>
                <span className="text-base font-medium text-tertiary ml-1 self-end pb-1">First year's salary</span>
              </div>
            </div>

            {/* Features */}
            <div className="border-t border-[var(--Colors-Border-border-secondary)] pt-[var(--spacing-4xl)] px-[var(--spacing-4xl)] pb-[var(--spacing-5xl)]">
              <p className="text-base font-semibold text-[var(--Colors-Text-text-primary)] mb-[var(--spacing-3xl)]">INCLUDES</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[var(--spacing-3xl)] gap-x-[var(--spacing-lg)]">
                {includes.map((item, index) => (
                  <div key={index} className="flex gap-[var(--spacing-lg)] items-start">
                    <CheckmarkIcon className="w-5 h-5 text-[var(--Colors-Success-600)] shrink-0" />
                    <span className="text-base text-tertiary">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-[var(--spacing-lg)] p-[var(--spacing-4xl)] border-t border-[var(--Colors-Border-border-secondary)]">
              <Button variant="primary" size="lg" className="w-full">Get started—risk free</Button>
              <Button variant="tertiary" size="lg" className="w-full">
                Questions? Ask Casian
              </Button>
            </div>
          </Card>
        </div>

        {/* Payment Timeline */}
        {/* Payment Timeline */}
        <div className="bg-[var(--Colors-Background-bg-secondary)] rounded-2xl py-[var(--spacing-5xl)] px-[var(--spacing-3xl)] lg:p-[var(--spacing-4xl)] flex flex-col items-center gap-[var(--spacing-4xl)]">
          <h3 className="text-xl lg:text-2xl font-semibold text-[--color-text-primary] text-center">
            Payment Timeline
          </h3>
          <div className="flex flex-col items-start w-full lg:flex-row lg:justify-between">
            {timeline.map((item, index) => (
              <div key={index} className="flex flex-row items-stretch lg:flex-col lg:items-center gap-[var(--spacing-xl)] w-full lg:flex-1">
                <div className="flex flex-col lg:flex-row items-center lg:w-full shrink-0">
                  <div className={`hidden lg:block h-0 flex-1 border-t-2 border-dotted border-[var(--Colors-Border-border-primary)] ${index === 0 ? 'invisible' : ''}`}></div>
                  <div className="flex flex-col items-center h-full lg:h-auto">
                    <div className="flex w-[32px] h-[32px] py-[6px] justify-center items-center rounded-[var(--radius-full)] border border-[var(--Colors-Border-border-secondary)] bg-[var(--Colors-Background-bg-primary)] text-[var(--Colors-Text-text-secondary)] text-sm font-semibold shrink-0 z-10 lg:mx-[var(--spacing-md)]">
                      {item.step}
                    </div>
                    {index !== timeline.length - 1 && (
                      <div className="lg:hidden w-0 border-l-2 border-dotted border-[var(--Colors-Border-border-primary)] flex-1 my-1"></div>
                    )}
                  </div>
                  <div className={`hidden lg:block h-0 flex-1 border-t-2 border-dotted border-[var(--Colors-Border-border-primary)] ${index === timeline.length - 1 ? 'invisible' : ''}`}></div>
                </div>
                <div className="flex flex-col items-start lg:items-center lg:text-center pb-[var(--spacing-4xl)] lg:pb-0">
                  <p className="font-semibold text-[--color-text-primary] mb-1 text-sm lg:text-base">
                    {item.title}
                  </p>
                  <p className="text-sm text-tertiary">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}