'use client';

import React from 'react';
import Image from 'next/image';
import LightningPurpleIcon from '../icons/lightning-purple-icon.svg';
import MessageIcon from '../icons/message-icon.svg';
import PenIcon from '../icons/pen-icon.svg';
import NetworkIcon from '../icons/network-icon.svg';
import CheckmarkIcon from '../icons/checkmark-icon.svg';
import Subheading from '../ui/Subheading';

const features = [
  {
    icon: LightningPurpleIcon,
    title: 'Get Hired 5× Faster',
    description: 'Land interviews before the crowd even knows the job is open.',
    checks: [
      'Pinpoint the key roles most likely to say "yes"—no more spray-and-pray.',
      'Tailored résumés and cover letters for each role, ATS-optimized.',
      'Applications are timed to hit the top of the review pile, not the reject bin.',
    ],
    image: '/images/person-at-desk.jpg',
    imageAlt: 'Person at desk working',
  },
  {
    icon: MessageIcon,
    title: 'Become Un-Ghostable in Every Interview',
    description: 'Show up as the candidate they can\'t ignore—or forget.',
    checks: [
      'Instant company briefs and role-specific interview prep, always up to date.',
      'AI-powered mock interviews sharpen your stories and responses.',
      'Salary-boosting negotiation scripts and high-signal questions seal the deal.',
    ],
    image: '/images/person-with-laptop.jpg',
    imageAlt: 'Person with laptop',
  },
  {
    icon: PenIcon,
    title: 'Own Your Professional Narrative',
    description: 'Stand out with a story and brand that make you unforgettable.',
    checks: [
      'Learn to articulate your unique value proposition and "zone of genius."',
      'Your LinkedIn and digital presence are refined for maximum impact.',
      'A library of tailored, ready-to-use stories for every interview scenario.',
    ],
    image: '/images/person-working-laptop.jpg',
    imageAlt: 'Person working on laptop',
  },
  {
    icon: NetworkIcon,
    title: 'Network Without the Cringe',
    description: 'Build authentic connections that open real doors.',
    checks: [
      'Casian suggests outreach strategies and conversation starters that feel natural, not spammy.',
      'Get prompts for thoughtful engagement and content that actually fits your voice.',
      'Guidance for connecting with key players and nurturing relationships—without feeling like a try-hard.',
    ],
    image: '/images/networking-event.jpg',
    imageAlt: 'Networking event',
  },
];

export default function ProductFeaturesSection() {
  return (
    <section className="section-container bg-primary">
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="text-center mb-16">
          <Subheading className="mb-4">Introducing Casian AI</Subheading>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[--color-text-primary] mb-6">
            Your Personalized Job-Search Coach
          </h2>
          <p className="text-lg text-[--color-text-tertiary] max-w-3xl mx-auto">
            Casian AI is the expert career strategist, résumé whisperer and hype-man you never knew you could afford—available 24/7 in your AirPods.
          </p>
        </div>

        {features.map((feature, index) => (
          <div key={index} className={`flex flex-col gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row items-start gap-6 mb-6">
                <div className="featured-icon-lg featured-icon-brand-light shrink-0">
                  <feature.icon className="w-7 h-7" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-3xl font-semibold text-[--color-text-primary]">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-[--color-text-tertiary]">{feature.description}</p>
                </div>
              </div>

              <div className="space-y-4 pt-4 pl-0 lg:pl-24">
                {feature.checks.map((check, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <CheckmarkIcon className="w-6 h-6 text-[--color-success] shrink-0 mt-1" />
                    <p className="text-[--color-text-tertiary] leading-relaxed">
                      {check}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative h-96 rounded-2xl overflow-hidden">
              <Image
                src={feature.image}
                alt={feature.imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}