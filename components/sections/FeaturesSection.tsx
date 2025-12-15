import React from 'react';
import Card from '../ui/Card';
import WarningIcon from '../icons/warning-icon.svg';
import LightningIcon from '../icons/lightning-icon.svg';
import PencilIcon from '../icons/pencil-icon.svg';
import SearchIcon from '../icons/search-icon.svg';
import ClockIcon from '../icons/clock-icon.svg';
import ClipboardIcon from '../icons/clipboard-icon.svg';
import Subheading from '../ui/Subheading';

const features = [
  {
    icon: WarningIcon,
    title: 'Ghost Jobs Epidemic',
    description: "~30% of job postings aren't real. Companies post them to meet internal requirements or build talent pools. You're applying to jobs that don't exist.",
  },
  {
    icon: LightningIcon,
    title: 'The Automation Trap',
    description: '>75% of qualified candidates are automatically rejected. More applications lead to more automation, fewer human reviews, less feedback, and worse applications. A vicious cycle that hurts everyone.',
  },
  {
    icon: PencilIcon,
    title: 'Hyper-Specific Experience',
    description: 'Job requirements read like fantasy wishlists. Employers demand mastery in their choice of tools, expertise solving their exact same problems, experience at similar companies and in the same industry.',
  },
  {
    icon: SearchIcon,
    title: 'The Best Jobs Are Hidden',
    description: "70% of jobs are never posted publicly. The best opportunities get filled through networks and internal referrals before you even know they exist.",
  },
  {
    icon: ClockIcon,
    title: 'Endless Interview Loops',
    description: "Hiring processes now take 3+ months. Companies have all the leverage, so they're in no rush—adding rounds, delaying decisions, and keeping you in limbo.",
  },
  {
    icon: ClipboardIcon,
    title: 'Take-Home Assignment Abuse',
    description: 'Free work disguised as "assessments." Companies demand hours of unpaid labor from multiple candidates, often using the work whether they hire you or not.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="section-container" id="features">
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-16">
          <Subheading className="mb-4">The Reality</Subheading>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[--color-text-primary] mb-6">
            The Job Market is Broken for Mid-Career Professionals
          </h2>
          <p className="text-lg text-[var(--Colors-Text-text-tertiary)] max-w-3xl">
            You're not imagining it—it's exhausting by design. Here's what's actually happening out there:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 !bg-[var(--Colors-Background-bg-secondary)]">
              <div className="flex flex-col gap-6">
                <div className="featured-icon-lg featured-icon-brand-modern">
                  <feature.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[--color-text-primary] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--Colors-Text-text-tertiary)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}