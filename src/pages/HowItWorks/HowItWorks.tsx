import Reveal from '@/components/common/Reveal'
import CallToAction from '@/components/sections/CallToAction'
import HowItWorksSection from '@/components/sections/HowItWorks'
import PageIntro from '@/components/sections/PageIntro'
import { bookDemoPath } from '@/data/navigation'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

// No dedicated content spec was supplied for this page (see
// docs/IMPLEMENTATION_PLAN.md §2a.1) — built against the Home page's
// "How It Works" teaser content until real copy arrives.
const steps = [
  {
    id: 'schedule-crews',
    title: 'Schedule Crews',
    description:
      'Plan jobs and assign crews and vehicles from one live board. See who is free, who is booked, and what still needs coverage.',
  },
  {
    id: 'track-work',
    title: 'Track Work',
    description:
      'Crews clock in and out per job, add notes and photos, and update status from the field, all tied to the job record.',
  },
  {
    id: 'manage-timesheets',
    title: 'Manage Timesheets',
    description:
      'Submitted hours move from draft to manager review to approved, all before payroll or billing ever touches them. Missing-timesheet detection catches gaps before they become a problem.',
  },
  {
    id: 'run-payroll-billing',
    title: 'Run Payroll and Billing',
    description:
      'Tracked hours and completed jobs flow straight into payroll and invoicing, with nothing to manually re-enter.',
  },
]

function HowItWorksPage() {
  useDocumentTitle(
    'How It Works — LaneOps',
    'Schedule crews, track work, and run payroll and billing, all from one connected system.',
  )

  return (
    <>
      <PageIntro
        eyebrow="Process"
        title="How LaneOps Works"
        subheadline="From scheduling the day to running payroll, everything stays connected to the same job record."
        actions={[
          { label: 'Book a Demo', to: bookDemoPath, variant: 'primary' },
          { label: 'See Features', to: '/features', variant: 'outline' },
        ]}
      />

      <Reveal>
        <HowItWorksSection title="Four Steps, One System" steps={steps} />
      </Reveal>

      <Reveal>
        <CallToAction
          title="See LaneOps in Action"
          body="Book a demo and walk through how it fits your operation."
          primaryLabel="Book a Demo"
          primaryTo={bookDemoPath}
        />
      </Reveal>
    </>
  )
}

export default HowItWorksPage
