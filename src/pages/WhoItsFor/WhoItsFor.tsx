import Reveal from '@/components/common/Reveal'
import CallToAction from '@/components/sections/CallToAction'
import PageIntro from '@/components/sections/PageIntro'
import WhoItsForSection from '@/components/sections/WhoItsFor'
import { bookDemoPath } from '@/data/navigation'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import type { AudienceItem } from '@/types/common'

// No dedicated content spec was supplied for this page (see
// docs/IMPLEMENTATION_PLAN.md §2a.1) — built against Home's "Who It's For"
// teaser labels, expanded with descriptions, until real copy arrives.
const audiences: AudienceItem[] = [
  {
    id: 'traffic-control',
    label: 'Traffic Control Companies',
    description:
      'Manage crews, TMPs, and equipment across multiple sites without losing track of a job.',
  },
  {
    id: 'field-service',
    label: 'Field Service Businesses',
    description: 'Schedule, dispatch, and bill for field work from one connected system.',
  },
  {
    id: 'construction-crews',
    label: 'Construction Crews',
    description: 'Keep job records, safety documentation, and timesheets tied to the site.',
  },
  {
    id: 'operations-heavy-teams',
    label: 'Operations-Heavy Teams',
    description: 'Replace scattered tools with one system that covers scheduling through billing.',
  },
  {
    id: 'vehicle-equipment-managers',
    label: 'Companies Managing Vehicles and Equipment',
    description: 'Track condition, maintenance, and assignment history for every asset.',
  },
  {
    id: 'replacing-manual-systems',
    label: 'Businesses Replacing Manual Systems and Spreadsheets',
    description: 'Move off paper and spreadsheets without losing the details that matter.',
  },
]

function WhoItsForPage() {
  useDocumentTitle(
    "Who It's For — LaneOps",
    'LaneOps is built for traffic control companies, field service businesses, and other operations-heavy teams.',
  )

  return (
    <>
      <PageIntro
        eyebrow="Who it's for"
        title="Who LaneOps Is Built For"
        subheadline="Any team running field operations across crews, vehicles, and jobs will find LaneOps fits how they already work."
        actions={[
          { label: 'Book a Demo', to: bookDemoPath, variant: 'primary' },
          { label: 'See How It Works', to: '/how-it-works', variant: 'outline' },
        ]}
      />

      <Reveal>
        <WhoItsForSection title="Built for Teams Like Yours" items={audiences} />
      </Reveal>

      <Reveal>
        <CallToAction
          title="See LaneOps in Action"
          body="Book a demo and see how LaneOps fits your team."
          primaryLabel="Book a Demo"
          primaryTo={bookDemoPath}
        />
      </Reveal>
    </>
  )
}

export default WhoItsForPage
