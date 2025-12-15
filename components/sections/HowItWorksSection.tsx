import React from 'react';
import LightbulbIcon from '../icons/lightbulb-icon.svg';

const steps = [
  {
    number: '1',
    title: 'Discovery & Direction Setting',
    description: "Kick off your journey with a deep-dive session. We'll uncover your values, strengths, motivations, and what truly drives you—so every step is tailored to your unique ambitions.",
  },
  {
    number: '2',
    title: 'Market Reality & Opportunity Mapping',
    description: "Get a clear-eyed view of the landscape. We'll benchmark your skills, analyze the market, and pinpoint where your talents meet real demand—turning confusion into clarity.",
  },
  {
    number: '3',
    title: 'Strategic Positioning & Differentiation',
    description: "Define your edge. Together, we'll craft your unique value proposition, identify your \"zone of genius,\" and develop a robust strategy for targeting the right roles and companies.",
  },
  {
    number: '4',
    title: 'Narrative & Brand Elevation',
    description: "Shape your story. We'll help you articulate a compelling narrative, refine your digital presence, and ensure your personal brand stands out—online and off.",
  },
  {
    number: '5',
    title: 'Hidden Market Activation & Outreach',
    description: "Tap into the opportunities others miss. We'll guide you through building authentic connections, leveraging the hidden job market, and executing outreach that actually gets responses.",
  },
  {
    number: '6',
    title: 'Application, Interview & Negotiation Mastery',
    description: "Convert opportunities into offers. From tailored applications to interview prep and negotiation support, we'll help you execute with confidence at every critical moment.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="section-container bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left: Header Section */}
          <div className="md:w-1/3">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5">
                <div className="featured-icon-lg featured-icon-brand-light">
                  <LightbulbIcon className="w-7 h-7" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[--color-text-primary]">
                How It Works
              </h2>
              <p className="text-lg text-[var(--Colors-Text-text-tertiary)]">
                A proven, six-step system that transforms your job search from guesswork to offer letter.
              </p>
            </div>
          </div>

          {/* Right: Content Grid - 2 columns */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step) => (
                <div key={step.number} className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-[--color-text-primary]">
                    {step.number}. {step.title}
                  </h3>
                  <p className="text-base text-[var(--Colors-Text-text-tertiary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}