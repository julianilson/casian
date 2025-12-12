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
    <section className="section-container bg-[--color-bg-primary]" id="pricing">
      <div className="max-w-6xl mx-auto">
        {/* Pricing Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[--color-text-secondary] mb-4">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[--color-text-primary] mb-6">
            Only Pay When You Land the Job
          </h2>
          <p className="text-lg text-[--color-text-tertiary]">
            Our 1% success fee is 100% aligned with your success—no job, no fee.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <feature.icon className="w-6 h-6 text-[--color-text-secondary] shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-[--color-text-primary] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[--color-text-tertiary]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Card */}
        <Card className="mb-16 max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-5xl font-semibold text-[--color-text-primary]">1</span>
              <span className="text-4xl font-semibold text-[--color-text-primary]">%</span>
              <span className="text-lg text-[--color-text-tertiary]">First year's salary</span>
            </div>
            <div>
              <p className="font-semibold text-[--color-text-primary]">Success Fee</p>
              <p className="text-sm text-[--color-brand] mb-2">One time</p>
              <p className="text-sm text-[--color-text-tertiary]">Payable after you land the job</p>
            </div>
          </div>

          <div className="border-t border-[--color-border] pt-8 mb-8">
            <p className="font-semibold text-[--color-text-primary] mb-4">INCLUDES</p>
            <div className="grid grid-cols-2 gap-4">
              {includes.map((item, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <CheckmarkIcon className="w-5 h-5 text-[--color-success] shrink-0 mt-0.5" />
                  <span className="text-sm text-[--color-text-tertiary]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <Button variant="primary" className="w-full">Get started—risk free</Button>
            <button className="w-full px-6 py-3 text-[--color-text-secondary] border-2 border-[--color-border] rounded-lg font-semibold hover:border-[--color-text-primary] hover:text-[--color-text-primary] transition-colors">
              Questions? Ask Casian
            </button>
          </div>
        </Card>

        {/* Payment Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-[--color-text-primary] mb-12 text-center">
            Payment Timeline
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {timeline.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[--color-brand] flex items-center justify-center text-white font-semibold mb-4">
                  {item.step}
                </div>
                <p className="font-semibold text-[--color-text-primary] text-center mb-2 text-sm">
                  {item.title}
                </p>
                <p className="text-xs text-[--color-text-tertiary] text-center">
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