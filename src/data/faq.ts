export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    id: 'regions-supported',
    question: 'What regions does LaneOps support?',
    answer:
      'LaneOps is built for traffic control operations across the United States and Canada. Scheduling, certification tracking, and compliance documentation are configurable to your state or provincial requirements.',
  },
  {
    id: 'works-outside-canada',
    question: 'Does LaneOps work outside Canada?',
    answer:
      "Yes. LaneOps is used by traffic control operations throughout North America. The platform isn't tied to any single country's regulatory framework — certification types, holiday schedules, and compliance checklists are configurable per operation.",
  },
  {
    id: 'data-hosting',
    question: 'Where is my data hosted?',
    answer:
      'Your data is hosted on secure cloud infrastructure with encryption in transit and at rest. Contact us for current data residency details relevant to your operation.',
  },
  {
    id: 'onboarding-time',
    question: 'How long does onboarding take?',
    answer:
      "Most operations are up and running within a few weeks. Our team helps migrate existing employee, vehicle, and equipment records so you're not starting from a blank system.",
  },
  {
    id: 'pricing-model',
    question: 'How is LaneOps priced?',
    answer:
      'LaneOps is built around solution packages sized to your operation rather than flat per-seat pricing. See the Pricing page for package details, or use the savings calculator to estimate your return.',
  },
  {
    id: 'mobile-access',
    question: 'Can field crews use LaneOps from their phones?',
    answer:
      'Yes. Crews clock in and out, submit timecards, capture photos, and complete field documentation like FLRAs from a mobile browser — no separate app install required.',
  },
  {
    id: 'integrations',
    question: 'Does LaneOps integrate with our existing payroll or accounting system?',
    answer:
      'Approved timesheets export in a payroll-ready format, and completed jobs generate invoice-ready billing records. Ask us about your specific payroll or accounting system during a demo.',
  },
  {
    id: 'certification-types',
    question: 'What certification types can LaneOps track?',
    answer:
      "LaneOps tracks any certification type your operation requires — Traffic Control Person certification, driver's licenses, First Aid, site-specific orientations, and more — with expiry alerts before a credential lapses.",
  },
]
