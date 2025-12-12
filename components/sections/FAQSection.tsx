'use client';

import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import MinusIcon from '../icons/minus-icon.svg';

const faqData = [
  {
    category: 'Casian vs ChatGPT',
    questions: [
      {
        q: 'Why not just use ChatGPT or another free AI?',
        a: "Casian is a proactive coach, not just a reactive chatbot. It guides you step-by-step through the entire job search journey with proven strategies, recruiter insights, and real salary benchmarks—so you don't need to know what to ask in advance. Casian's persistent memory keeps track of your progress and context across sessions, while its voice-based coaching offers richer support than text alone. Unlike generic AI, Casian's only goal is to get you hired faster, saving you weeks of lost income and helping you negotiate better offers. In short: ChatGPT gives answers; Casian delivers results.",
      },
    ],
  },
  {
    category: 'Pricing & Payments',
    questions: [
      {
        q: 'Why do you charge a $50 refundable deposit?',
        a: "The deposit helps us prioritize job seekers who are committed to their job search. It also lets us dedicate more resources to your success. It's fully refundable when you land a job with Casian's help.",
      },
      {
        q: 'How is the 1% success fee calculated?',
        a: "It's 1% of your first year's gross (pre-tax) salary as stated in your signed job offer.",
      },
      {
        q: 'How would you know I what my salary is?',
        a: 'We trust you will share with us the true amount. If it materially differs from the market rates being paid for similar roles we may request to view the signed offer or may seek other remedies.',
      },
      {
        q: 'Is the Success Fee paid in one lump sum?',
        a: "No. Being unemployed is tough, financially. You can pay in manageable installments over time, so it doesn't feel like a burden. See the Payment Timeline above.",
      },
    ],
  },
  {
    category: 'Canceling & Termination',
    questions: [
      {
        q: 'Can I cancel half-way through?',
        a: "Yes, you can cancel. We only ask for fairness: if we've helped you get a job offer or you're on the way to getting one, canceling to avoid the success fee would be a breach of trust.",
      },
      {
        q: 'What if I lose my job shortly after starting?',
        a: "If something unexpected happens, like losing the job shortly after starting, we'll work with you to evaluate the situation and make sure the payment terms are fair.",
      },
    ],
  },
  {
    category: 'About the Process',
    questions: [
      {
        q: 'What exactly does Casian do to help me get a job?',
        a: 'Casian provides personalized coaching, job search strategy, resume and interview support, and ongoing accountability—all tailored to help you land the right role, faster.',
      },
      {
        q: 'What if I already have interviews lined up?',
        a: "Great! We can help you prep for those interviews and provide support, even if you're already in process.",
      },
      {
        q: 'What if I find a job on my own—do I still pay the fee?',
        a: "Finding a job opening is a small part of the process. Therefore, it's due if you land a job during your time with Casian, regardless of how you found it. If you don't get a job, you pay nothing.",
      },
      {
        q: 'Do employers pay you too, or just job seekers?',
        a: "We work directly for job seekers. Employers don't pay us—our focus is 100% on your success.",
      },
      {
        q: 'How does the referral program work?',
        a: 'If a job seeker signs up to Casian thanks to you, you each get $100 off your success fee.',
      },
    ],
  },
  {
    category: 'Limitations',
    questions: [
      {
        q: 'Do you serve recent grads or blue-collar job seekers?',
        a: 'No. Casian is designed for experienced professionals with at least five years of experience in fields that require a formal education. Roles for recent grads or those without a formal educational background involve different job search strategies and interview processes than our service is built for.',
      },
      {
        q: "Can I use Casian if I'm looking for remote or part-time work?",
        a: 'No. Currently, we only support clients seeking in-office or hybrid, full-time positions. We do not assist with remote or part-time job searches at this time.',
      },
      {
        q: 'What types of jobs or industries do you specialize in?',
        a: 'We specialize in helping experienced professionals secure roles in tech, consulting, and other professional services. As we grow, we plan to expand into additional sectors and roles.',
      },
    ],
  },
];

export default function FAQSection() {
  return (
    <section className="section-container bg-[--color-bg-primary]" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[--color-text-primary] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[--color-text-tertiary]">
            Things you might want to know but are shy to ask Casian directly.
          </p>
        </div>

        <div className="space-y-12">
          {faqData.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-lg font-semibold text-[--color-text-secondary] mb-6">
                {category.category}
              </h3>

              <Accordion.Root type="single" collapsible className="space-y-4">
                {category.questions.map((item, qIndex) => (
                  <Accordion.Item
                    key={qIndex}
                    value={`${catIndex}-${qIndex}`}
                    className="border-b border-[--color-border] pb-4"
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="flex items-center justify-between w-full text-left group">
                        <span className="text-base font-semibold text-[--color-text-primary] pr-8">
                          {item.q}
                        </span>
                        <MinusIcon className="w-6 h-6 text-[--color-text-muted] shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="pt-4 text-[--color-text-tertiary] leading-relaxed overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      {item.a}
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}