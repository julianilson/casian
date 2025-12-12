import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import HandshakeIcon from '../icons/handshake-icon.svg';
import GiftIcon from '../icons/gift-icon.svg';
import BadgeIcon from '../icons/badge-icon.svg';
import CalendarIcon from '../icons/calendar-icon.svg';
import CheckmarkIcon from '../icons/checkmark-icon.svg';

const features = [
  'Resume Builder',
  'Market Intelligence Reports',
  'Daily Curated Job Listings',
  'Targeted Outreach',
  'Core Narrative Development',
  'Skills Gap Analysis',
  'Mock Interview Practice',
  'Job Search Strategy',
  'Digital Presence Elevation',
  'Post-Application Influence Strategy',
];

const pricingFeatures = [
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
    <section className="section-container" id="pricing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[--color-text-secondary] mb-4">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[--color-text-primary] mb-6">
            Only Pay When You Land the Job
          </h2>
          <p className="text-lg text-[--color-text-tertiary]">
            Our 1% success fee is 100% aligned with your success—no job, no fee.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Features List */}
          <div className="space-y-8">
            {pricingFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border-2 border-[--color-text-secondary]">
                    <feature.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[--color-text-primary] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[--color-text-tertiary]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Card */}
          <Card className="border border-[--color-border]">
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-[--color-text-primary]">Success Fee</h3>
                  <span className="px-3 py-1 bg-[--color-brand]/20 text-[--color-brand-light] text-sm font-medium rounded-full">
                    One time
                  </span>
                </div>
                <p className="text-[--color-text-tertiary]">Payable after you land the job</p>
              </div>
              <div className="text-right">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-semibold text-[--color-text-primary]">1</span>
                  <span className="text-3xl font-semibold text-[--color-text-primary]">%</span>
                </div>
                <p className="text-sm text-[--color-text-tertiary]">First year's salary</p>
              </div>
            </div>

            <div className="border-t border-[--color-border] pt-8 mb-8">
              <p className="text-sm font-semibold text-[--color-text-primary] mb-6">INCLUDES</p>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckmarkIcon className="w-5 h-5 shrink-0 bg-[--color-success-light] rounded-full p-1" />
                    <span className="text-sm text-[--color-text-tertiary]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Button variant="primary" className="w-full">Get started—risk free</Button>
              <button className="w-full text-center text-[--color-text-secondary] hover:text-[--color-text-primary] font-semibold transition-colors">
                Questions? Ask Casian
              </button>
            </div>
          </Card>
        </div>

        {/* Payment Timeline */}
        <Card>
          <h3 className="text-2xl font-semibold text-[--color-text-primary] text-center mb-12">
            Payment Timeline
          </h3>
          <div className="relative">
            <div className="absolute top-5 left-0 right-0 h-px border-t-2 border-dashed border-[--color-border]" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative">
              {timeline.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-10 h-10 rounded-full bg-[--color-bg-primary] border-2 border-[--color-border] flex items-center justify-center mx-auto mb-4 text-sm font-semibold text-[--color-text-secondary]">
                    {item.step}
                  </div>
                  <h4 className="text-sm font-semibold text-[--color-text-primary] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[--color-text-tertiary]">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}