'use client';

import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import HandshakeIcon from '../icons/handshake-icon.svg';
import GiftIcon from '../icons/gift-icon.svg';
import BadgeIcon from '../icons/badge-icon.svg';
import CalendarIcon from '../icons/calendar-icon.svg';
import CheckmarkIcon from '../icons/checkmark-icon.svg';

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
          <p className="text-sm lg:text-base font-semibold text-[--color-text-secondary] mb-3 lg:mb-5">Pricing</p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-[--color-text-primary] mb-5 lg:mb-6">
            Only Pay When You Land the Job
          </h2>
          <p className="text-lg text-[--color-text-tertiary] max-w-3xl">
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
                  <p className="text-base text-[--color-text-tertiary] leading-6">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Pricing Card */}
          <Card className="card-shadow-md p-8 lg:p-12 border border-[var(--color-border-secondary)] h-fit">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-8 mb-8">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-xl font-semibold text-[--color-text-primary]">Success Fee</p>
                  <span className="text-sm font-medium text-[--color-brand-light] px-2 py-0.5 rounded">One time</span>
                </div>
                <p className="text-base text-[--color-text-tertiary]">Payable after you land the job</p>
              </div>
              <div className="flex items-baseline gap-0.5">
                <span className="text-5xl lg:text-6xl font-semibold text-[--color-text-primary] leading-none">1</span>
                <span className="text-4xl font-semibold text-[--color-text-primary] leading-none">%</span>
                <span className="text-base font-medium text-[--color-text-tertiary] ml-1 self-end pb-1">First year's salary</span>
              </div>
            </div>

            <div className="border-t border-[--color-border-subtle] pt-6 mb-6">
              <p className="text-base font-semibold text-[--color-text-primary] mb-6">INCLUDES</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {includes.map((item, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <CheckmarkIcon className="w-3 h-3 text-[--color-success] shrink-0 mt-1.5 bg-[--color-success-light] rounded-full p-0.5" />
                    <span className="text-base text-[--color-text-tertiary]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button variant="primary" size="lg" className="w-full">Get started—risk free</Button>
              <Button variant="tertiary" size="lg" className="w-full">
                Questions? Ask Casian
              </Button>
            </div>
          </Card>
        </div>

        {/* Payment Timeline */}
        <div className="bg-secondary rounded-2xl p-8 lg:p-12">
          <h3 className="text-xl lg:text-2xl font-semibold text-[--color-text-primary] mb-8 lg:mb-12">
            Payment Timeline
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex flex-col items-start lg:items-center">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[--color-brand] flex items-center justify-center text-white text-sm font-semibold mb-4">
                  {item.step}
                </div>
                <p className="font-semibold text-[--color-text-primary] mb-1 text-sm lg:text-base lg:text-center">
                  {item.title}
                </p>
                <p className="text-sm text-[--color-text-tertiary] lg:text-center">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}