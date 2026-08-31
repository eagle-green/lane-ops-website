import Reveal from '@/components/common/Reveal'
import CallToAction from '@/components/sections/CallToAction'
import PageIntro from '@/components/sections/PageIntro'
import WhoItsForSection from '@/components/sections/WhoItsFor'
import { bookDemoPath } from '@/data/navigation'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import type { AudienceItem } from '@/types/common'

// Renamed/reframed from the former "Who It's For" page under the "Solutions"
// nav item (no dedicated Solutions content spec was supplied — built against
// the same audience list until real copy arrives).
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

function Solutions() {
  useDocumentTitle(
    'Solutions — LaneOps',
    'LaneOps solutions for traffic control companies, field service businesses, and other operations-heavy teams.',
  )

  return (
    <>
      <PageIntro
        eyebrow="Solutions"
        title="A LaneOps Solution Built Around Your Operation"
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

export default Solutions
